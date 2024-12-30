const { createHmac, randomBytes } = require("crypto");
const { Schema, model } = require("mongoose");
const { createtokenforuser } = require("../services/authentication");

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageUrl: {
      type: String,
      default: "/img/user_icon.webp",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save hook to hash the password
UserSchema.pre("save", function (next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) return next();

  // Generate salt and hash password
  const salt = randomBytes(16).toString("hex");
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  user.salt = salt;
  user.password = hashedPassword;

  next(); // Proceed with saving
});

// Static method to match passwords
UserSchema.static("matchpasswordandgentoken", async function (email, password) {
  const user = await this.findOne({ email }).select("+salt +password"); // Ensure salt and password are selected
  if (!user) throw new Error("User Not Found!");

  const salt = user.salt;
  const hashedPassword = user.password;
  const userprovhash = createHmac("sha256", salt).update(password).digest("hex");

  if (hashedPassword !== userprovhash) throw new Error("Wrong password");

  const token = createtokenforuser(user);
  return token;

});

const User = model("user", UserSchema);

module.exports = User;

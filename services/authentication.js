const JWT = require('jsonwebtoken');
const secret = "scarlett_johnson69";
function createtokenforuser(user){
    const payload={
        _id : user._id,
        email : user.email,
        fullname: user.fullname,
        profileimageURL:user.profileimageURL,
        role: user.role

    };
    const token = JWT.sign(payload,secret)
    return token;
}

function validatetoken(token){
    const payload = JWT.verify(token,secret);
    return payload;
}
module.exports = {
    createtokenforuser,
    validatetoken,
};
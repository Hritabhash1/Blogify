const { validatetoken } = require("../services/authentication");

function checkforauthcookie(cookiename) {
    return (req, res, next) => {
        const tokencookievalue = req.cookies[cookiename];
        
        if (!tokencookievalue) {
            return next();
        }

        try {
            const userpayload = validatetoken(tokencookievalue);
            req.user = userpayload;
        } catch (error) {
            console.error("Invalid token:", error.message);
            res.clearCookie(cookiename);
        }

        next();
    };
}

module.exports = { checkforauthcookie };

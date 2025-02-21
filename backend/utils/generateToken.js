import jwt from "jsonwebtoken";

const generateTokenAndSetCookie =(userId, res) => {
    const token =jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "15d"});

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days,
        httpOnly: true, //cookie cannot be accessed by client side javascript.protects against cross site scripting attacks
        sameSite: "strict", //cookie is not sent with cross-origin requests.protects against cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development" //cookie is only sent over https in production mode
    });
};

export default generateTokenAndSetCookie;


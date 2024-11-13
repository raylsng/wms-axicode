const jwt = require("jsonwebtoken");

const authorizeWH = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "WH_OPERATOR") {
            return res.status(403).json({ message: "Role PH is Unauthorized" });
        }
        next();
    } catch (error) {
        console.error("Authorization error:", error.message);
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authorizeWH;
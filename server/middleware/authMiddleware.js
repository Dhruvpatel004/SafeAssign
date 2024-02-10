// middleware/authMiddleware.js

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).json({ status: "error", message: "User not authenticated" });
    }
};

export default isAuthenticated;

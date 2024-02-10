// middleware/authMiddleware.js

const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).json({ status: "401", message: "User not authenticated" });
    }
};

export default isAuthenticated;

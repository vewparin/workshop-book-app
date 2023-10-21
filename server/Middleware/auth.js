const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
    try {
        const token = req.headers["authtoken"]; // แก้ชื่อ headers จาก header เป็น headers
        if (!token) {
            return res.status(401).send('No token');
        }
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded.user
        next();
    } catch (err) {
        console.log(err);
        res.status(500).send('Token Invalid'); // แก้ลำดับการส่งคำตอบ
    }
}

const User = require('../Models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    try {
        // Check if user exists
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).send('User Already Exists');
        }

        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword
        });

        // Save user to database
        await newUser.save();

        // Send success response
        return res.send('Success Registered');
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
}



exports.login = async (req, res) => {
    try {
        // Check user
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send('User Not Found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        
        if (!isMatch) {
            return res.status(400).send('Login Failed. Invalid username or password');
        }

        // Create a JWT token
        const payload = {
            user: {
                username: user.username
            }
        };

        jwt.sign(payload, 'secretkey', { expiresIn: '1d' }, (err, token) => {
            if (err) throw err;
            res.json({ token,payload });
        });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}


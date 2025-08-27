const User = require('../models/Users');
const { generateToken } = require('../utils/jwt');
const bcrypt = require('bcrypt');

// REGISTER controller
const registerUser = async (req, res) => {
  console.log("📩 POST /register hit at:", new Date().toISOString());
  console.log("Request Body:", req.body);

  const { name, phone, password, role, location } = req.body;

  try {
    const existing = await User.findOne({ phone , role });
    if (existing) {
      return res.status(400).json({ message: `User already exists as ${role}`});
      console.log(`User already exists as ${role}`);
    }

    // 🔐 Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      phone,
      password: hashedPassword,
      role,
      location
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
    console.log("✅ User registered successfully:", user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.error("❌ Registration error:", err.message);
  }
};

// LOGIN controller
const loginUser = async (req, res) => {
  const { phone, password, role } = req.body;
  console.log('Request body:', req.body);

  try {
    // ✅ Find user by phone and role
    const user = await User.findOne({ phone, role });
    if (!user) {
      console.log('User not found or role mismatch');
      return res.status(401).json({ message: 'User not found or role mismatch' });
    }

    // 🔐 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials");
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    console.log("✅ Login successful:", user);
    res.json({ message: 'Login successful', user, token });
    
  } catch (err) {
    console.error("❌ Login error:", err.message);
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
};

const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel.js");

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    // validate

    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Chưa nhập đầy đủ thông tin." });
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Mật khẩu cần ít nhất 6 kí tự" });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Nhập lại mật khẩu không đúng." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Một tài khoản với email này đã tồn tại." });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Chưa điền đầy đủ thông tin." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "Email này chưa đăng ký tài khoản." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Thông tin không hợp lệ." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;

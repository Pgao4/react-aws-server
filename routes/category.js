const express = require("express");
const router = express.Router();

// import validators
const { 
    categoryCreateValidator, 
    categoryUpdateValidator
} = require("../validators/category");
const { runValidation } = require("../validators");

//controllers
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const {create, list, read, update, remove} = require('../controllers/category')

//categoryCreateValidator,
router.post('/category',  runValidation, requireSignin, adminMiddleware, create)
router.get('/categories', list)
router.get('/category/:slug', read)
router.put('/category/:slug', categoryUpdateValidator, runValidation, requireSignin, adminMiddleware, update)
router.delete('/category/:slug', requireSignin, adminMiddleware, remove)

module.exports = router;
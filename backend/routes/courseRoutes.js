const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const authMiddleware=require('../middleware/authMiddleware');


router.get('/', courseController.getCourses);
router.get('/courses', authMiddleware, courseController.getCourses);

module.exports = router;

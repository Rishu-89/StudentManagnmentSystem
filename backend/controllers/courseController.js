// controllers/courseController.js
import Course from "../Models/courseModel.js";

// Controller for creating a new course
export const createCourseController = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if course name already exists
    const existingCourse = await Course.findOne({ name });
    if (existingCourse) {
      return res.status(400).json({ success: false, message: "Course already exists" });
    }

    // Create new course
    const course = new Course({ name });
    await course.save();

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating course", error });
  }
};


// Controller for updating an existing course
export const updateCourseController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(id, { name }, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating course", error });
  }
};

// Controller for retrieving all courses
export const courseController = async (req, res) => {
  try {
    const courses = await Course.find({});
    return  res.status(200).json({
      success: true,
      message: "Courses retrieved successfully",
      courses,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving courses", error });
  }
};

// Controller for retrieving a single course by ID
export const singleCourseController = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      message: "Course retrieved successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving course", error });
  }
};

// Controller for deleting a course
export const deleteCourseController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    res.status(200).json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting course", error });
  }
};

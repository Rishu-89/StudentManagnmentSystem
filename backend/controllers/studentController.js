// controllers/studentController.js
import Student from "../models/studentModel.js"

// Controller for creating a new student
export const createStudentController = async (req, res) => {
  try {
    const { name, phone, courseId } = req.body;
   console.log( name, phone, courseId,'hii')

    // Create new student
    const student = new Student({ name, phone, courseId });
    await student.save();

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating student", error });
  }
};

// Controller for updating an existing student
export const updateStudentController = async (req, res) => {
  try {
    const { sid } = req.params;
    const { name, age, courseId } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      sid,
      { name, age, courseId},
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating student", error });
  }
};

// Controller for retrieving all students
export const getStudentController = async (req, res) => {
  try {
    const students = await Student.find({}).populate("courseId", "name");
    return res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      students,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving students", error });
  }
};

// Controller for retrieving a single student by ID
export const getSingleStudentController = async (req, res) => {
  try {
    const { slug } = req.params;
    const student = await Student.findOne({ slug }).populate("course");

    if (!student) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error retrieving student", error });
  }
};

// Controller for deleting a student by ID
export const deleteStudentController = async (req, res) => {
  try {
    const { sid } = req.params;
    const deletedStudent = await Student.findByIdAndDelete(sid);

    if (!deletedStudent) {
      return res.status(404).json({ success: false, message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting student", error });
  }
};

// Controller for counting total number of students
export const studentCountController = async (req, res) => {
  try {
    const count = await Student.countDocuments();
    res.status(200).json({
      success: true,
      message: "Student count retrieved successfully",
      count,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error counting students", error });
  }
};

// Controller for searching students by keyword (name)
export const searchStudentController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const students = await Student.find({
      name: { $regex: keyword, $options: "i" },
    }).populate("course");

    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      students,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error searching students", error });
  }
};

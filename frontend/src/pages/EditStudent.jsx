import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EditStudent = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}student/get-student`, {
        headers: { 'Cache-Control': 'no-cache' }
      });
      setStudents(res.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}course/get-course`);
      setCourses(response.data.courses);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleEditStudent = (id) => {
    const student = students.find((student) => student._id === id);
    setSelectedStudent({ ...student });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    if (!selectedStudent.name || !selectedStudent.phone || !selectedStudent.courseId) {
      alert("All fields are required");
      return;
    }
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}student/update-student/${selectedStudent._id}`,
        selectedStudent
      );
      alert('Student updated successfully');
      fetchStudents(); // Refresh list after update
      setSelectedStudent(null); // Clear form after update
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedStudent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Edit Student</h2>
      <select onChange={(e) => handleEditStudent(e.target.value)} className="p-2 border border-gray-300 mb-4">
        <option>Select Student</option>
        {students.map((student) => (
          <option key={student._id} value={student._id}>
            {student.name}
          </option>
        ))}
      </select>
      {selectedStudent && (
        <form onSubmit={handleUpdateStudent}>
          <input
            type="text"
            name="name"
            value={selectedStudent.name || ''}
            onChange={handleInputChange}
            placeholder="Name"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="number"
            name="phone"
            value={selectedStudent.phone || ''}
            onChange={handleInputChange}
            placeholder="Phone"
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          />
          <select
            name="courseId"
            value={selectedStudent.courseId || ''}
            onChange={handleInputChange}
            className="mb-4 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
          </select>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default EditStudent;

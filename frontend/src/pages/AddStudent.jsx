import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [newStudent, setNewStudent] = useState({ name: '', phone: '', courseId: '' });
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}course/get-course`);
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}student/create-student`, newStudent);
      setNewStudent({ name: '',phone: '', courseId: '' });
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Add Student</h2>
      <form onSubmit={handleAddStudent}>
        <input
          type="text"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          placeholder="Name"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        
        <input
          type="text"
          value={newStudent.phone}
          onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
          placeholder="Phone"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <select


value={newStudent.courseId}
          onChange={(e) => setNewStudent({ ...newStudent, courseId: e.target.value })}
          className="mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Course</option>
          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;

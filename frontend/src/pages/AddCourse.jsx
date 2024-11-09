import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {
  const [newCourse, setNewCourse] = useState({ name: '' });

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}course/create-course`, newCourse);
      setNewCourse({ name: '' });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl">Add Course</h2>
      <form onSubmit={handleAddCourse}>
        <input
          type="text"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
          placeholder="Course Name"
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourse;

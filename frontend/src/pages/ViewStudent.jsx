import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}student/get-student`);
      setStudents(res.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">All Students</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Course</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student._id}>
                <td className="border p-2">{student.name}</td>
                <td className="border p-2">{student.phone}</td>
                <td className="border p-2">{student.courseId ? student.courseId.name : "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4">No students found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewStudents;

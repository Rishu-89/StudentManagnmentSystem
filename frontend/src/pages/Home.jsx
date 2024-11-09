import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../layout/Layout';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}student/get-student`);
      setStudents(res.data.students);
      setTotalStudents(res.data.students.length);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  return (
    <Layout>
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded-lg p-6 mb-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Total Students Registered</h2>
        <p className="text-4xl font-bold text-gray-800">{totalStudents}</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">List of Students</h2>
        <div className="grid gap-6 lg:grid-cols-3 sm:grid-cols-2">
          {students.map((student) => (
            <div key={student._id} className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">{student.name}</h3>
              <p className="text-gray-700">Email: {student.email}</p>
              <p className="text-gray-700">Phone: {student.phone}</p>
              {student.courseId && <p className="text-gray-700">Course: {student.courseId.name}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Home;

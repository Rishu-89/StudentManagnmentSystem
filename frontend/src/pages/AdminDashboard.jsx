import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddStudent from './AddStudent';
import AddCourse from './AddCourse';
import EditStudent from './EditStudent';
import ViewStudents from './ViewStudent';

const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-6 ml-64"> {/* Offset main content by sidebar width */}
        <Routes>
          <Route path="add-student" element={<AddStudent />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="edit-student" element={<EditStudent />} />
          <Route path="view-student" element={<ViewStudents />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;

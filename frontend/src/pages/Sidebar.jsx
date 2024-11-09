import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
      <li>
          <NavLink to="/" activeClassName="text-blue-500" className="block py-2 px-4 rounded hover:bg-gray-700">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/add-student" activeClassName="text-blue-500" className="block py-2 px-4 rounded hover:bg-gray-700">
            Add Student
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/add-course" activeClassName="text-blue-500" className="block py-2 px-4 rounded hover:bg-gray-700">
            Add Course
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/edit-student" activeClassName="text-blue-500" className="block py-2 px-4 rounded hover:bg-gray-700">
            Edit Student
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/admin/view-student" activeClassName="text-blue-500" className="block py-2 px-4 rounded hover:bg-gray-700">
            View Student
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import Layout from '../layout/Layout';

const About = () => {
  return (
    <Layout>
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 text-center">
        <h1 className="text-3xl font-semibold text-blue-600 mb-4">About This Project</h1>
        <p className="text-lg text-gray-700">A comprehensive Student Management System built with modern technologies to manage students and courses.</p>
      </div>

      {/* Project Overview Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          This project is a fully functional **Student Management System** designed to manage students, courses, and their data efficiently.
          It allows admins to add, edit, and view student records, manage courses, and keep track of student progress.
        </p>
        <p className="text-gray-700 mb-4">
          The system is built using **React** for the frontend, **Node.js** with **Express** for the backend, and **MongoDB** for storing data.
          The project includes features like user authentication, CRUD operations for students and courses, and a responsive admin dashboard.
        </p>
      </div>

      {/* Technologies Used Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Technologies Used</h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Frontend</h3>
            <ul className="text-gray-700 mt-2">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Axios (for API calls)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Backend</h3>
            <ul className="text-gray-700 mt-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose (for database modeling)</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Deployment</h3>
            <ul className="text-gray-700 mt-2">
              <li>Render(for deployment)</li>
              <li>GitHub (version control and collaboration)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Features</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Manage Students and Courses</li>
          <li>User Authentication and Authorization</li>
          <li>Responsive Admin Dashboard</li>
          <li>CRUD Operations for Students and Courses</li>
          <li>Student Enrollment in Multiple Courses</li>
          <li>Student Profile and Course Information</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Project Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Rishu Pandey</h3>
            <p className="text-gray-700">Frontend Developer</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Rishu Pandey</h3>
            <p className="text-gray-700">Backend Developer</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-blue-600">Rishu Pandey</h3>
            <p className="text-gray-700">UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default About;

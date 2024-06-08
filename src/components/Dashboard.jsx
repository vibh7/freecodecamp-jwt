import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        window.location.href = '/login';
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/courses', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCourses(response.data);
      } catch (error) {
        setMessage('Session expired, please login again');
        localStorage.removeItem('token');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl text-center mt-10">Available Courses</h2>
      {message && <p className="text-red-500 text-center">{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-600">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

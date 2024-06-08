import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/api/courses', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
          }
        });
        setCourses(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          navigate('/signin'); 
        } else {
          console.error('Error fetching courses:', error);
        }
      }
    };

    if (localStorage.getItem('jwtToken')) {
        fetchCourses(); 
      } else {
        navigate('/signin'); 
      }
    }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to freeCodeCamp.org</h1>
      <p className="text-center mb-8">"I have not failed. I've just found 10,000 ways that won't work." - Thomas A. Edison</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id} className="border rounded-md p-4 shadow-md">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-700 mb-2">Duration: {course.duration} hours</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
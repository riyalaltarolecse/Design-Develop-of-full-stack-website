import React from 'react';
import { Clock } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  icon: React.ReactNode;
  image: string;
  level: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
      <div className="relative h-48">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2">
          {course.icon}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{course.level}</span>
          <div className="flex items-center text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.duration}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {course.instructor}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition duration-300">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
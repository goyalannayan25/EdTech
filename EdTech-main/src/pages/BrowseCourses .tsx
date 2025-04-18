import React, { useState } from 'react';
import { BookOpen, Clock, Star, Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const allCourses = [
  // Mathematics
  {
    id: 1,
    title: 'Advanced Calculus',
    subject: 'Mathematics',
    level: 'Advanced',
    duration: '12 weeks',
    rating: 4.8,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60',
    price: 499
  },
  {
    id: 2,
    title: 'Linear Algebra Fundamentals',
    subject: 'Mathematics',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.6,
    students: 856,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&auto=format&fit=crop&q=60',
    price: 399
  },
  // Physics
  {
    id: 3,
    title: 'Quantum Mechanics',
    subject: 'Physics',
    level: 'Advanced',
    duration: '16 weeks',
    rating: 4.9,
    students: 567,
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60',
    price: 599
  },
  {
    id: 4,
    title: 'Classical Mechanics',
    subject: 'Physics',
    level: 'Beginner',
    duration: '10 weeks',
    rating: 4.7,
    students: 1567,
    image: 'https://thumbs.dreamstime.com/b/classical-physics-color-icon-based-classical-mechanics-properties-mechanical-systems-mechanization-physical-branches-concept-229267729.jpg',
    price: 449
  },
  // Chemistry
  {
    id: 5,
    title: 'Organic Chemistry',
    subject: 'Chemistry',
    level: 'Intermediate',
    duration: '14 weeks',
    rating: 4.5,
    students: 789,
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60',
    price: 499
  },
  {
    id: 6,
    title: 'Biochemistry Basics',
    subject: 'Chemistry',
    level: 'Beginner',
    duration: '8 weeks',
    rating: 4.4,
    students: 654,
    image: 'https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=800&auto=format&fit=crop&q=60',
    price: 349
  },
  // Biology
  {
    id: 7,
    title: 'Cell Biology',
    subject: 'Biology',
    level: 'Intermediate',
    duration: '12 weeks',
    rating: 4.6,
    students: 987,
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60',
    price: 449
  },
  {
    id: 8,
    title: 'Genetics and Evolution',
    subject: 'Biology',
    level: 'Advanced',
    duration: '15 weeks',
    rating: 4.8,
    students: 765,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=60',
    price: 549
  }
];

const subjects = ['All Subjects', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const BrowseCourses = () => {
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = allCourses.filter(course => {
    const matchesSubject = selectedSubject === 'All Subjects' || course.subject === selectedSubject;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSubject && matchesLevel && matchesSearch;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold">Browse Courses</h1>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-indigo-100 text-indigo-600 p-2 rounded-lg hover:bg-indigo-200"
          >
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-indigo-600">
                ₹{course.price}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">{course.subject}</span>
                <span className="text-sm text-gray-500">{course.level}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </span>
                <span className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.students} students
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{course.rating}</span>
                </div>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCourses;
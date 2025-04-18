import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Award, BookOpen, Clock, Target, TrendingUp, Brain, Coffee, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const progressData = [
  { subject: 'Mathematics', score: 85, previous: 75 },
  { subject: 'Physics', score: 72, previous: 65 },
  { subject: 'Chemistry', score: 90, previous: 82 },
  { subject: 'Biology', score: 78, previous: 70 },
];

const studyTimeData = [
  { day: 'Mon', hours: 3 },
  { day: 'Tue', hours: 4 },
  { day: 'Wed', hours: 2 },
  { day: 'Thu', hours: 5 },
  { day: 'Fri', hours: 3 },
  { day: 'Sat', hours: 6 },
  { day: 'Sun', hours: 4 },
];

const Dashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('weekly');
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
          <p className="text-gray-600 mt-1">Here's your learning progress this week</p>
        </div>
        <div className="flex space-x-2">
          {['weekly', 'monthly', 'yearly'].map((metric) => (
            <button
              key={metric}
              onClick={() => setSelectedMetric(metric)}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                selectedMetric === metric
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {metric.charAt(0).toUpperCase() + metric.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {[
          { icon: BookOpen, label: 'Courses in Progress', value: '4', trend: '+1' },
          { icon: Clock, label: 'Hours Studied', value: '24', trend: '+3' },
          { icon: Award, label: 'Achievements', value: '12', trend: '+2' },
          { icon: Target, label: 'Goals Completed', value: '8', trend: '+1' },
        ].map(({ icon: Icon, label, value, trend }) => (
          <motion.div
            key={label}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <p className="text-2xl font-bold">{value}</p>
                  <span className="text-green-500 text-sm flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {trend}
                  </span>
                </div>
              </div>
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Icon className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Subject Performance</h2>
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-sm text-gray-500">
                <div className="w-3 h-3 bg-indigo-600 rounded-full mr-1"></div>
                Current
              </span>
              <span className="flex items-center text-sm text-gray-500">
                <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div>
                Previous
              </span>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="previous" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
                <Bar dataKey="score" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-bold mb-6">Study Time Analysis</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studyTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={{ fill: '#4f46e5', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <motion.div
          variants={item}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Learning Insights</h2>
          <div className="space-y-4">
            {[
              { icon: Brain, title: 'Best Focus Time', value: '9:00 AM - 11:00 AM' },
              { icon: Coffee, title: 'Longest Study Session', value: '2.5 hours' },
              { icon: Star, title: 'Most Productive Day', value: 'Wednesday' },
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-gray-600">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          variants={item}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { title: 'Perfect Score', description: 'Achieved 100% in Mathematics Quiz', date: '2 days ago', points: 500 },
              { title: 'Study Streak', description: '7 days consecutive learning', date: '1 week ago', points: 300 },
              { title: 'Quick Learner', description: 'Completed Physics course ahead of schedule', date: '2 weeks ago', points: 400 },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg cursor-pointer"
              >
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <span className="text-indigo-600 font-semibold">+{achievement.points} XP</span>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;

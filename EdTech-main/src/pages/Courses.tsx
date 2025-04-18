import React from "react";
import {
  Play,
  BookOpen,
  CheckCircle,
  Beaker,
  Brain,
  Code,
  Globe,
  Microscope,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Advanced Mathematics",
    description: "Master complex mathematical concepts.",
    progress: 75,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    modules: 12,
    completed: 9,
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description: "Basic principles of physics and their applications.",
    progress: 60,
    image:
      "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&auto=format&fit=crop&q=60",
    modules: 10,
    completed: 6,
  },
  {
    id: 3,
    title: "Chemistry Lab",
    description: "Hands-on experiments and chemical reactions.",
    progress: 40,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60",
    modules: 8,
    completed: 3,
  },
  {
    id: 4,
    title: "Biology Essentials",
    description: "Fundamentals of life sciences and organisms.",
    progress: 90,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60",
    modules: 15,
    completed: 13,
  },
  {
    id: 5,
    title: "Biochemistry",
    description: "Chemical processes within living organisms.",
    progress: 35,
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&auto=format&fit=crop&q=60",
    modules: 14,
    completed: 5,
  },
  {
    id: 6,
    title: "Astronomy",
    description: "Celestial objects and phenomena beyond Earth.",
    progress: 55,
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&auto=format&fit=crop&q=60",
    modules: 10,
    completed: 6,
  },
  {
    id: 7,
    title: "Environmental Science",
    description:
      "Interactions between physical, chemical, and biological components of the environment.",
    progress: 25,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=60",
    modules: 12,
    completed: 3,
  },
  {
    id: 8,
    title: "Computer Science",
    description: "Programming, algorithms, and computational problem-solving.",
    progress: 80,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    modules: 16,
    completed: 13,
  },
  {
    id: 9,
    title: "Neuroscience",
    description: "Nervous system development, structure, and function.",
    progress: 45,
    image:
      "https://i.pinimg.com/736x/0e/bb/47/0ebb476f43d17a8a883f0d77b8410a97.jpg",
    modules: 18,
    completed: 8,
  },
];

const Courses = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Courses</h1>
        <Link
          to={"/browse-courses"}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Browse All Courses
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col h-full"
          >
            <div className="relative h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-blue-500 p-3 rounded-full hover:bg-blue-50 transition duration-300">
                  <Play className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">{course.description}</p>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    {course.modules} Modules
                  </span>
                  <span className="flex items-center text-gray-500">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {course.completed} Completed
                  </span>
                </div>

                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-100">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-blue-600">
                        {course.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      style={{ width: `${course.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

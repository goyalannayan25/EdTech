import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Users,
  Brain,
  ChevronRight,
  MonitorSmartphone,
  Lightbulb,
  Clock,
  Plus,
  Minus,
} from "lucide-react";

const Home = () => {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer a variety of courses across multiple domains, including programming, data science, and personal development.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! You can try a selection of our courses for free before committing to a subscription.",
    },
    {
      question: "Can I access courses on my mobile device?",
      answer:
        "Absolutely! Our platform is fully responsive and works seamlessly on mobile devices.",
    },
    {
      question: "How do I track my progress?",
      answer:
        "Our dashboard provides real-time progress tracking and personalized recommendations.",
    },
  ];

  // Success Stories Data
  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote:
        "The courses helped me transition from a non-technical role to a full-stack developer in just 6 months!",
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      company: "AnalyticsPro",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote:
        "I landed my dream job after completing the data science specialization. Best investment in my career!",
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      company: "CreativeMinds",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      quote:
        "The UX/UI courses gave me practical skills that I use every day in my design work.",
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      company: "InnovateTech",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      quote:
        "The product management certification helped me secure a 30% salary increase!",
    },
    {
      name: "Elena Rodriguez",
      role: "Cybersecurity Analyst",
      company: "SecureNet",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      quote:
        "From complete beginner to cybersecurity professional in one year. I couldn't have done it without these courses.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-white flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
              Transform Your Learning Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Unlock your potential with interactive courses, real-time progress
              tracking, and personalized learning paths tailored to your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                to="/courses"
                className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg text-sm sm:text-base"
              >
                Explore Courses
              </Link>
              <Link
                to="/dashboard"
                className="bg-white text-indigo-600 border-2 border-indigo-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg text-sm sm:text-base"
              >
                Try Demo
              </Link>
            </div>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Instructors", icon: "👨‍🏫" },
              { title: "Flexible Learning", icon: "🕰️" },
              { title: "Interactive Content", icon: "🖥️" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  Experience the best in online education with our cutting-edge
                  platform.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Why Choose EdTech?
            </h2>
            <p className="text-gray-600">
              Experience the future of education with our cutting-edge platform
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Interactive Courses",
                description:
                  "Engage with dynamic content and hands-on learning experiences",
              },
              {
                icon: Brain,
                title: "Adaptive Learning",
                description:
                  "Personalized paths that adapt to your learning style and pace",
              },
              {
                icon: Users,
                title: "Community Learning",
                description:
                  "Connect with peers and experts in collaborative learning spaces",
              },
              {
                icon: MonitorSmartphone,
                title: "Mobile Friendly",
                description:
                  "Access courses anytime, anywhere with our mobile-ready platform",
              },
              {
                icon: Lightbulb,
                title: "Expert Instructors",
                description:
                  "Learn from industry experts and certified professionals",
              },
              {
                icon: Clock,
                title: "Self-Paced Learning",
                description: "Study at your own pace with flexible schedules",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                {React.createElement(feature.icon, {
                  className: "h-12 w-12 text-indigo-600 mb-4",
                })}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have transformed their careers and
              lives through our platform.
            </p>
          </div>

          {/* Marquee Animation */}
          <div className="relative flex flex-nowrap overflow-hidden">
            <motion.div
              className="shrink-0 flex space-x-6"
              initial={{ x: 0 }}
              animate={{ x: `-${100 / 2}%` }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {[...successStories, ...successStories].map((story, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-indigo-100"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-xs text-indigo-600">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className=" shrink-0 flex space-x-6"
              initial={{ x: 0 }}
              animate={{ x: `-${100 / 2}%` }}
              transition={{
                duration: 30,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            >
              {[...successStories, ...successStories].map((story, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-80 bg-white p-6 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-indigo-100"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-600">{story.role}</p>
                      <p className="text-xs text-indigo-600">{story.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/success-stories"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              View All Success Stories <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-900"
                >
                  {faq.question}
                  {openIndex === index ? (
                    <Minus className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 text-gray-600 pt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Ready to Start Learning?
            </h2>
            <p className="text-indigo-100 text-lg">
              Join thousands of students already learning with us.
            </p>
          </div>
          <Link
            to="/courses"
            className="bg-white text-indigo-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-indigo-100 transition-all duration-300 flex items-center shadow-lg"
          >
            Get Started <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About EduTech</h3>
              <p className="text-gray-400">
                Transforming education through technology and innovation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/courses"
                    className="text-gray-400 hover:text-white"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-gray-400 hover:text-white"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calendar"
                    className="text-gray-400 hover:text-white"
                  >
                    Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EduTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

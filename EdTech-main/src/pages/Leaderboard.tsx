import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const students = [
  { id: 1, name: 'Goyal Annayan', score: 2840, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60' },
  { id: 2, name: 'Shreya Chaudhary', score: 2720, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60' },
  { id: 3, name: 'Himanshu Kumar', score: 2650, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&auto=format&fit=crop&q=60' },
  { id: 4, name: 'Vaishali Chaudhary', score: 2580, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60' },
  { id: 5, name: 'Tanish Sharma', score: 2510, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60' },
];

const Leaderboard = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Student Leaderboard</h1>
          <p className="mt-3 text-xl text-gray-500">Top performers this semester</p>
        </div>

        {/* Top 3 Winners Podium */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-4 mb-16">
          {/* 2nd Place */}
          <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                  <img src={students[1].avatar} alt={students[1].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 bg-gray-200 rounded-full p-2">
                  <Medal className="h-6 w-6 text-gray-600" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{students[1].name}</h3>
                <p className="text-gray-500 font-medium">{students[1].score} points</p>
                <div className="mt-2 inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                  2nd Place
                </div>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-8 -mt-4 transform transition-all duration-300 hover:shadow-xl border-t-4 border-yellow-400">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-100">
                  <img src={students[0].avatar} alt={students[0].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-3 -right-3 bg-yellow-400 rounded-full p-2">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800">{students[0].name}</h3>
                <p className="text-gray-500 font-medium text-lg">{students[0].score} points</p>
                <div className="mt-3 inline-block bg-yellow-100 px-4 py-2 rounded-full text-sm font-bold text-yellow-700">
                  1st Place
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="w-full md:w-1/4 bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
                  <img src={students[2].avatar} alt={students[2].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-2 -right-2 bg-amber-600 rounded-full p-2">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{students[2].name}</h3>
                <p className="text-gray-500 font-medium">{students[2].score} points</p>
                <div className="mt-2 inline-block bg-amber-100 px-3 py-1 rounded-full text-sm font-medium text-amber-800">
                  3rd Place
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Complete Rankings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student, index) => (
                  <tr key={student.id} className={`${index < 3 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-50 transition-colors`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        index === 0 ? 'bg-yellow-100 text-yellow-800' : 
                        index === 1 ? 'bg-gray-100 text-gray-800' : 
                        index === 2 ? 'bg-amber-100 text-amber-800' : 
                        'bg-gray-50 text-gray-600'
                      } font-bold text-sm`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded-full object-cover" src={student.avatar} alt={student.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{student.score}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-xs">
                        <div
                          className={`h-2.5 rounded-full ${
                            index === 0 ? 'bg-yellow-400' : 
                            index === 1 ? 'bg-gray-500' : 
                            index === 2 ? 'bg-amber-600' : 
                            'bg-blue-500'
                          }`}
                          style={{ width: `${(student.score / 3000) * 100}%` }}
                        ></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{Math.round((student.score / 3000) * 100)}% of goal</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

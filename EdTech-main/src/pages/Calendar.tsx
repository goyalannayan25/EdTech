import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    title: 'Mathematics Class',
    date: '2024-03-20',
    classNames: ['bg-indigo-600']
  },
  {
    title: 'Physics Quiz',
    date: '2024-03-22',
    classNames: ['bg-red-600']
  },
  {
    title: 'Chemistry Lab',
    date: '2024-03-25',
    classNames: ['bg-green-600']
  }
];

const Calendar = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-8">Academic Calendar</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,dayGridWeek'
              }}
              height="auto"
              eventClick={(info) => {
                alert(`Event: ${info.event.title}`);
              }}
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
              <div className="space-y-3">
                {events.map((event, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-md">
                    <div className={`w-3 h-3 rounded-full ${event.classNames[0]}`}></div>
                    <div>
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Calendar Legend</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  <span>Classes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  <span>Quizzes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-600"></div>
                  <span>Labs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
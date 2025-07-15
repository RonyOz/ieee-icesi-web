import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: t('events.workshop.title'),
      date: '2024-04-15',
      time: '14:00 - 17:00',
      location: t('events.workshop.location'),
      description: t('events.workshop.description'),
      type: 'workshop'
    },
    {
      title: t('events.conference.title'),
      date: '2024-05-20',
      time: '09:00 - 18:00',
      location: t('events.conference.location'),
      description: t('events.conference.description'),
      type: 'conference'
    },
    {
      title: t('events.competition.title'),
      date: '2024-06-10',
      time: '10:00 - 16:00',
      location: t('events.competition.location'),
      description: t('events.competition.description'),
      type: 'competition'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pattern-bg"></div>
      <div className="section-container">
        <div className="text-center space-y-6">
          <h1 className="section-title">{t('events.title')}</h1>
          <p className="section-description">{t('events.description')}</p>
        </div>

        <div className="mt-16 space-y-8">
          {events.map((event, index) => (
            <div key={index} className="glass-card p-6 card-hover">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="button-primary">
                    {t('events.register')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
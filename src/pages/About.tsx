import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Lightbulb, Users, Trophy } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pattern-bg"></div>
      <div className="section-container">
        <div className="text-center space-y-6">
          <h1 className="section-title">{t('about.title')}</h1>
          <p className="section-description">{t('about.description')}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 card-hover">
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl inline-block mb-6">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t('about.mission')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.missionText')}</p>
          </div>

          <div className="glass-card p-8 card-hover">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl inline-block mb-6">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 dark:text-white">{t('about.vision')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{t('about.visionText')}</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-4xl font-bold gradient-text text-center mb-12">{t('about.values')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-6 flex items-start space-x-4 card-hover">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.collaboration')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('about.collaborationText')}</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start space-x-4 card-hover">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{t('about.excellence')}</h3>
                <p className="text-gray-600 dark:text-gray-300">{t('about.excellenceText')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
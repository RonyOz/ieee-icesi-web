import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Crown, Users, Briefcase } from 'lucide-react';

const Members = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      name: 'Sarah Johnson',
      role: t('members.roles.chair'),
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=300',
      social: {
        email: 'sarah@ieee.org',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: t('members.roles.viceChair'),
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      social: {
        email: 'michael@ieee.org',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: t('members.roles.secretary'),
      image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=300',
      social: {
        email: 'emily@ieee.org',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'David Kim',
      role: t('members.roles.treasurer'),
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      social: {
        email: 'david@ieee.org',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const committees = [
    {
      name: t('members.committees.technical.name'),
      description: t('members.committees.technical.description'),
      icon: Briefcase,
      members: [
        {
          name: 'Alex Thompson',
          role: t('members.committees.technical.coordinator'),
          image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: { email: 'alex@ieee.org', linkedin: '#', github: '#' }
        },
        {
          name: 'Maria Garcia',
          role: t('members.committees.technical.member'),
          image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: { email: 'maria@ieee.org', linkedin: '#', github: '#' }
        },
        {
          name: 'James Wilson',
          role: t('members.committees.technical.member'),
          image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: { email: 'james@ieee.org', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.events.name'),
      description: t('members.committees.events.description'),
      icon: Users,
      members: [
        {
          name: 'Lisa Chang',
          role: t('members.committees.events.coordinator'),
          image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: { email: 'lisa@ieee.org', linkedin: '#', github: '#' }
        },
        {
          name: 'Carlos Mendez',
          role: t('members.committees.events.member'),
          image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300',
          social: { email: 'carlos@ieee.org', linkedin: '#', github: '#' }
        }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="section-container">
        <div className="text-center space-y-6 mb-16">
          <h1 className="section-title">{t('members.title')}</h1>
          <p className="section-description">{t('members.description')}</p>
        </div>

        {/* Board of Directors */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-gradient-to-br from-ieee-primary to-blue-600 rounded-xl">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold gradient-text">{t('members.boardTitle')}</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="glass-card overflow-hidden card-hover group">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-ieee-primary dark:text-blue-400 font-medium mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={member.social.github} 
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Committees */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">{t('members.committeesTitle')}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">{t('members.committeesDescription')}</p>
          </div>

          <div className="space-y-16">
            {committees.map((committee, index) => (
              <div key={index} className="glass-card p-8 card-hover">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-4 bg-gradient-to-br from-ieee-primary to-blue-600 rounded-xl">
                    <committee.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{committee.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">{committee.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {committee.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-200">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                        />
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{member.name}</h4>
                          <p className="text-ieee-primary dark:text-blue-400 text-sm font-medium">{member.role}</p>
                          <div className="flex space-x-2 mt-2">
                            <a 
                              href={`mailto:${member.social.email}`} 
                              className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              <Mail className="h-3 w-3" />
                            </a>
                            <a 
                              href={member.social.linkedin} 
                              className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              <Linkedin className="h-3 w-3" />
                            </a>
                            <a 
                              href={member.social.github} 
                              className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
                            >
                              <Github className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
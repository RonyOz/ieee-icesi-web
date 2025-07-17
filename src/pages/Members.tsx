import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Crown, Users, Briefcase } from 'lucide-react';

const Members = () => {
  const { t } = useTranslation();

  const boardMembers = [
    {
      name: 'Sebastián Díaz',
      role: t('members.roles.chair'),
      image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
      social: {
        email: '',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Geoffrey Pasaje',
      role: t('members.roles.viceChair'),
      image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
      social: {
        email: '',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Vanessa Sánchez',
      role: t('members.roles.secretary'),
      image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
      social: {
        email: '',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Sara Díaz',
      role: t('members.roles.treasurer'),
      image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
      social: {
        email: '',
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Rony Ordoñez',
      role: t('members.roles.webmaster'),
      image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
      social: {
        email: '',
        linkedin: '#',
        github: '#'
      }
    }
  ];

  const committees = [
    {
      name: t('members.committees.innovation.name'),
      description: t('members.committees.innovation.description'),
      icon: Briefcase,
      members: [
        {
          name: 'Alex Thompson',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Maria Garcia',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.external.name'),
      description: t('members.committees.external.description'),
      icon: Users,
      members: [
        {
          name: 'James Wilson',
          role: t('members.committees.external.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Lisa Chang',
          role: t('members.committees.external.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.finance.name'),
      description: t('members.committees.finance.description'),
      icon: Users,
      members: [
        {
          name: 'Carlos Mendez',
          role: t('members.committees.finance.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Emily Rodriguez',
          role: t('members.committees.finance.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.wellness.name'),
      description: t('members.committees.wellness.description'),
      icon: Users,
      members: [
        {
          name: 'David Kim',
          role: t('members.committees.wellness.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Sarah Johnson',
          role: t('members.committees.wellness.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.public.name'),
      description: t('members.committees.public.description'),
      icon: Users,
      members: [
        {
          name: 'Michael Chen',
          role: t('members.committees.public.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Maria Garcia',
          role: t('members.committees.public.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
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
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
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
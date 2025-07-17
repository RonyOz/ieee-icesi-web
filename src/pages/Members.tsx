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

          <div className="flex flex-col justify-center gap-8">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              {boardMembers.slice(0, 2).map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  social={member.social}
                />
              ))}
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-8">
              {boardMembers.slice(2).map((member, index) => (
                <MemberCard
                  key={index + 2}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  social={member.social}
                />
              ))}
            </div>
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
                    <MemberCard
                      key={memberIndex}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      social={member.social}
                      variant="committee"
                    />
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
import { useTranslation } from 'react-i18next';
import { Crown, Rocket, Handshake, PiggyBank, Smile, MessageSquare } from 'lucide-react';
import MemberCard from '../components/MemberCard';

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
      icon: Rocket,
      members: [
        {
          name: 'Leader',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.external.name'),
      description: t('members.committees.external.description'),
      icon: Handshake,
      members: [
        {
          name: 'Leader',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.finance.name'),
      description: t('members.committees.finance.description'),
      icon: PiggyBank,
      members: [
        {
          name: 'Leader',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.wellness.name'),
      description: t('members.committees.wellness.description'),
      icon: Smile,
      members: [
        {
          name: 'Leader',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    },
    {
      name: t('members.committees.public.name'),
      description: t('members.committees.public.description'),
      icon: MessageSquare,
      members: [
        {
          name: 'Leader',
          role: t('members.committees.innovation.coordinator'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        },
        {
          name: 'Member',
          role: t('members.committees.innovation.member'),
          image: 'https://i.pinimg.com/736x/25/29/dc/2529dcdd5072ff35660c40a32df0cc8f.jpg',
          social: { email: '', linkedin: '#', github: '#' }
        }
      ]
    }
  ];

  // Datos de grupos de afinidad y capítulos
  const affinityGroups = [
    {
      name: 'WIE - Women in Engineering',
      president: 'Ana María Pérez',
      link: 'https://wie.ieee.org/',
      image: 'https://wie.ieee.org/wp-content/uploads/2022/01/wie-logo.png',
    },
    {
      name: 'CS - Computer Society',
      president: 'Carlos Gómez',
      link: 'https://www.computer.org/',
      image: 'https://www.computer.org/cms/Images/ieee-cs-logo.svg',
    },
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

        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">{t('members.affinity.title')}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">{t('members.affinity.description')}</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {affinityGroups.map((group, idx) => (
              <div key={idx} className="glass-card flex flex-col items-center p-8 w-full md:w-96">
                <img src={group.image} alt={group.name} className="h-20 mb-4 object-contain" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{group.name}</h3>
                <p className="mb-2 text-slate-700 dark:text-slate-300">{t('members.affinity.president')}: <span className="font-semibold">{group.president}</span></p>
                <a href={group.link} target="_blank" rel="noopener noreferrer" className="text-ieee-primary dark:text-blue-400 font-medium underline hover:text-blue-700">{t('members.affinity.link')}</a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Members;
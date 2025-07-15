import React from 'react';
import { useTranslation } from 'react-i18next';
import { CircuitBoard, Cpu, Globe, Users, Calendar, Award, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  const features = [
    { icon: CircuitBoard, title: "Technical Projects", desc: "Hands-on experience with cutting-edge technology" },
    { icon: Users, title: "Student Community", desc: "Join a vibrant community of future engineers" },
    { icon: Globe, title: "Global Network", desc: "Connect with IEEE branches worldwide" }
  ];

  const news = [
    { img: "2582937", title: t('gallery.images.workshop.title'), desc: t('gallery.images.workshop.description') },
    { img: "3183150", title: t('gallery.images.conference.title'), desc: t('gallery.images.conference.description') },
    { img: "3862130", title: t('gallery.images.hackathon.title'), desc: t('gallery.images.hackathon.description') }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="section-container">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-7xl font-bold gradient-text mb-6 leading-tight">
              {t('home.title')}
            </h1>
            <p className="text-3xl text-gray-600 dark:text-gray-300 mb-8">{t('home.subtitle')}</p>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="mt-12 flex gap-6 justify-center lg:justify-start">
              <button className="button-primary">
                {t('home.cta.join')}
              </button>
              <button className="button-secondary">
                {t('home.cta.learn')}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ieee-primary to-cyan-500 rounded-2xl blur-lg opacity-75"></div>
              <img 
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="IEEE Students"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, i) => (
            <div key={i} className="glass-card p-8 text-center card-hover">
              <div className="bg-gradient-to-br from-ieee-primary to-cyan-500 p-4 rounded-xl inline-block mb-6">
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Latest News Section */}
        <div className="mt-32">
          <h2 className="text-5xl font-bold gradient-text text-center mb-16">Latest News</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <div key={i} className="glass-card overflow-hidden card-hover group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-300"></div>
                  <img 
                    src={`https://images.pexels.com/photos/${item.img}/pexels-photo-${item.img}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-32 text-center">
          <h2 className="text-5xl font-bold gradient-text mb-12">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="p-4 glass-card rounded-full text-gray-600 dark:text-white transition-all duration-300 hover:scale-110 hover:text-ieee-primary">
                <Icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
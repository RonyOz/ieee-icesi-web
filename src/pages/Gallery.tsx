import React from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
    {
      url: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.workshop.title'),
      description: t('gallery.images.workshop.description')
    },
    {
      url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.conference.title'),
      description: t('gallery.images.conference.description')
    },
    {
      url: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.hackathon.title'),
      description: t('gallery.images.hackathon.description')
    },
    {
      url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.industry.title'),
      description: t('gallery.images.industry.description')
    },
    {
      url: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.team.title'),
      description: t('gallery.images.team.description')
    },
    {
      url: 'https://images.pexels.com/photos/3182833/pexels-photo-3182833.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: t('gallery.images.showcase.title'),
      description: t('gallery.images.showcase.description')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 pattern-bg"></div>
      <div className="section-container">
        <div className="text-center space-y-6">
          <h1 className="section-title">{t('gallery.title')}</h1>
          <p className="section-description">{t('gallery.description')}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg card-hover">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="nav-blur fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/IEEE ICESI LOGO.svg"
                alt="IEEE ICESI Logo"
                className="h-8 w-8 transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-xl text-gray-900 dark:text-white">IEEE ICESI</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {[
                { path: '/', label: t('navigation.home') },
                { path: '/about', label: t('navigation.about') },
                { path: '/members', label: t('navigation.members') },
                { path: '/gallery', label: t('navigation.gallery') },
                { path: '/events', label: t('navigation.events') },
              ].map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(path)
                      ? 'bg-ieee-primary text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className=" hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleLanguage}
                className="ml-2 px-4 py-2 rounded-lg text-sm font-medium bg-ieee-primary/20 text-ieee-primary
                         transition-all duration-200 hover:bg-ieee-primary/30"
              >
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden nav-blur border-t border-black/10 dark:border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { path: '/', label: t('navigation.home') },
              { path: '/about', label: t('navigation.about') },
              { path: '/members', label: t('navigation.members') },
              { path: '/gallery', label: t('navigation.gallery') },
              { path: '/events', label: t('navigation.events') },
            ].map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(path)
                    ? 'bg-ieee-primary text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-base font-medium bg-ieee-primary/20 text-ieee-primary"
            >
              {i18n.language === 'en' ? 'Español' : 'English'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar


import { Mail, Linkedin, Github } from 'lucide-react';
import React from 'react';

export interface SocialLinks {
  email: string;
  linkedin: string;
  github: string;
}

export interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  social: SocialLinks;
  variant?: 'board' | 'committee';
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image, social, variant = 'board' }) => {
  if (variant === 'committee') {
    // Committee member card variant
    return (
      <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all duration-200">
        <div className="flex items-center space-x-4">
          <img 
            src={image} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{name}</h4>
            <p className="text-ieee-primary dark:text-blue-400 text-sm font-medium">{role}</p>
            <div className="flex space-x-2 mt-2">
              <a 
                href={`mailto:${social.email}`} 
                className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Mail className="h-3 w-3" />
              </a>
              <a 
                href={social.linkedin} 
                className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-3 w-3" />
              </a>
              <a 
                href={social.github} 
                className="p-1 rounded text-slate-500 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 transition-colors duration-200"
              >
                <Github className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Board member card (default)
  return (
    <div className="glass-card overflow-hidden card-hover group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full md:min-w-64 h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{name}</h3>
        <p className="text-ieee-primary dark:text-blue-400 font-medium mb-4">{role}</p>
        <div className="flex space-x-3">
          <a 
            href={`mailto:${social.email}`} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a 
            href={social.linkedin} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href={social.github} 
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-ieee-primary dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;

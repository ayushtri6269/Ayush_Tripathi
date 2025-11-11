import React from 'react';
import type { Skill } from '../types';

export const SkillBadge: React.FC<Skill> = ({ name, icon }) => {
    return (
        <div className="flex items-center space-x-2 bg-gray-800 p-2 pr-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
            <span className="w-6 h-6">{icon}</span>
            <span className="font-medium text-gray-200">{name}</span>
        </div>
    );
};
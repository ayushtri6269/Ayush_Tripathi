import React from 'react';
import { Section } from './Section';
import { SkillBadge } from './SkillBadge';
import { ReactIcon, TypeScriptIcon, TailwindIcon, NodeIcon, GitIcon, JavaScriptIcon, MongoDbIcon, HtmlIcon, CssIcon } from './icons/TechIcons';

const skills = [
    { name: 'HTML5', icon: <HtmlIcon /> },
    { name: 'CSS3', icon: <CssIcon /> },
    { name: 'JavaScript', icon: <JavaScriptIcon /> },
    { name: 'TypeScript', icon: <TypeScriptIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'MongoDB', icon: <MongoDbIcon /> },
    { name: 'Git', icon: <GitIcon /> },
];

const About: React.FC = () => {
    return (
        <Section id="about" title="About Me">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-2">
                    <img
                        src="https://picsum.photos/seed/ayush/400/400"
                        alt="Ayush Tripathi"
                        className="rounded-full mx-auto lg:mx-0 w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-teal-500 shadow-lg"
                    />
                </div>
                <div className="lg:col-span-3 text-lg text-gray-300 space-y-4">
                    <p>
                        Hello! I'm a MERN Stack Developer passionate about building modern web applications. Proficient in React.js, Node.js, Express.js, and MongoDB, I focus on creating scalable, responsive, and user-centric solutions.
                    </p>
                    <p>
                        I have a strong foundation in frontend and backend technologies, enabling me to write clean, maintainable code and build robust RESTful APIs. I thrive in collaborative, Agile environments and I'm always eager to solve new problems and learn new skills.
                    </p>
                    <p>
                        Here are a few technologies I've been working with:
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        {skills.map((skill) => (
                            <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
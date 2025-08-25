import Image from 'next/image';
import Link from 'next/link';

interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="relative h-48 w-full">
        <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
        />
        </div>
        <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
                <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                >
                {tech}
                </span>
            ))}
            </div>
            
            <div className="flex space-x-3">
            <Link 
            href={project.link}
            className="text-blue-600 hover:text-blue-800 font-medium"
            target="_blank"
            >
                View Live
            </Link>
            {project.github && (
                <Link 
                href={project.github}
                className="text-gray-600 hover:text-gray-800 font-medium"
                target="_blank"
                >
                GitHub
                </Link>
            )}
            </div>
        </div>
        </div>
    );
};

export default ProjectCard;
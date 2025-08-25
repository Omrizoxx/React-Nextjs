import ProjectCard from '../components/projectcard';
import { projects } from '../constants/constants';

export default function Projects() {
    return (
        <section className="py-12 bg-gradient-to-b from-rose-50 via-fuchsia-50 to-orange-50">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            </div>
        </div>
        </section>
    );
}
import { skills } from '@/app/constants/constants';

export default function About() {
    const experiences = [
        {
            title: 'Frontend Developer at Company XYZ',
            period: '2021 - Present',
            description: 'Developed and maintained responsive web applications using React and Next.js.',
        },
        {
            title: 'Web Developer at Company ABC',
            period: '2019 - 2021',
            description: 'Built and optimized client websites with a focus on performance and accessibility.',
        },
    ];
    return (
        <section className="py-12 bg-gradient-to-b from-rose-50 via-fuchsia-50 to-orange-50">
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">About Me</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Background</h2>
                <p className="text-gray-600 mb-4">
                I'm a passionate developer with experience in building modern web applications. 
                I enjoy solving complex problems and creating intuitive user experiences.
                </p>
                <p className="text-gray-600">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, 
                or enjoying outdoor activities.
                </p>
            </div>
            
            <div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills & Technologies</h2>
                <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                    <span 
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                    {skill}
                    </span>
                ))}
                </div>
            </div>
            </div>
            
            <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
            <div className="space-y-6">
            {experiences.map((exp) => (
                <div key={exp.title} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="text-xl font-medium text-gray-800">{exp.title}</h3>
                    <p className="text-gray-600">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                </div>
            ))}
            </div>
            </div>
        </div>
        </section>
    );
}
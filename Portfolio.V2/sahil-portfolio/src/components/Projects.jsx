import { useEffect } from 'react'
import AOS from 'aos'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

export default function Projects() {
    useEffect(() => {
        AOS.init()
    }, [])

    const projects = [
        {
            title: 'Support Flow',
            description: 'A full-stack customer support ticketing system featuring real-time notifications, AI-powered responses, and comprehensive analytics.',
            tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
            image: '/assets/SupportFlow.png',
            link: 'https://supportflo.vercel.app'
        },
        {
            title: 'Crypto Price Prediction',
            description: 'A machine learning project using ARIMA and LSTM models to predict cryptocurrency prices with high accuracy.',
            tech: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
            image: '/assets/Crypto.jpg',
            link: 'https://github.com/ChaiThere/CapstoneProject2025'
        },
        {
            title: 'Fitness Tracker App',
            description: 'A comprehensive fitness tracking application designed with a focus on user experience and real-time data visualization.',
            tech: ['Figma', 'React', 'Firebase', 'Tailwind'],
            image: '/assets/Fitness.jpg',
            link: null
        }
    ]

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    }

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">Featured Projects</h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <motion.div key={index} variants={item}>
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500} className="h-full">
                                <div
                                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/10 transition-all duration-300 h-full"
                                >
                                    <div className="relative overflow-hidden group h-64">
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                        <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-slate-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                                                View Project →
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

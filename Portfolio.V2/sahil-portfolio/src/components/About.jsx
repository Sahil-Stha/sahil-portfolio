import { useEffect } from 'react'
import AOS from 'aos'
import { FaReact, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiFigma, SiNextdotjs } from 'react-icons/si'

export default function About() {
    useEffect(() => {
        AOS.init()
    }, [])

    const skills = [
        { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Figma', icon: <SiFigma className="text-purple-500" /> },
    ]

    return (
        <section id="about" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                Hi, I'm <span className="font-bold text-cyan-400">Sahil Shrestha</span> — a recent Software Engineering graduate with a passion for building intelligent, user-centric web applications.
                            </p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                I specialize in <span className="font-semibold text-white">React, Next.js, and AI integration</span>. My journey involves turning complex problems into simple, beautiful, and functional digital experiences. When I'm not coding, I'm exploring the latest in AI or designing UI prototypes.
                            </p>
                        </div>

                        <div data-aos="fade-left" className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-lg shadow-cyan-500/5">
                            <h3 className="text-2xl font-bold mb-6 text-white">Tech Stack</h3>
                            <div className="grid grid-cols-4 gap-6">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="flex flex-col items-center group">
                                        <div className="text-4xl mb-2 transform transition-transform group-hover:scale-110 duration-300">
                                            {skill.icon}
                                        </div>
                                        <span className="text-sm text-slate-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

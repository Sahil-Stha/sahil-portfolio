import { useEffect } from 'react'
import AOS from 'aos'
import { TypeAnimation } from 'react-type-animation'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Technical Grid Background */}
            <ParticleBackground />

            {/* Vignette Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-slate-950/50 to-slate-950" />

            {/* Accent Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
                    <div className="mb-8">
                        <img
                            src="/assets/Avatar_Image.jpeg"
                            alt="Sahil Shrestha"
                            className="w-64 h-64 rounded-2xl mx-auto border-4 border-cyan-500/20 shadow-xl shadow-cyan-500/10 object-cover"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                        Hi, I'm <span className="text-cyan-400">
                            Sahil Shrestha
                        </span>
                        <span className="inline-block animate-wave ml-2">👋</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-slate-400 mb-8 h-20">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                2000,
                                'Full Stack Developer',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>

                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    )
}

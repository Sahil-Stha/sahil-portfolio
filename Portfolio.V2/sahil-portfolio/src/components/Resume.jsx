import { useEffect } from 'react'
import AOS from 'aos'

export default function Resume() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <section id="resume" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">My Resume</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Click below to download a PDF version of my resume.
                    </p>

                    <a
                        href="/Sahil_Resume.docx"
                        download="Sahil_Resume.docx"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}

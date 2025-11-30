import { useEffect, useState, useRef } from 'react'
import AOS from 'aos'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

export default function Contact() {
    const form = useRef()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        AOS.init()
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        setLoading(true)

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
        // Sign up at https://www.emailjs.com/
        // 1. Create a Service (e.g., Gmail) -> Get Service ID
        // 2. Create an Email Template -> Get Template ID
        // 3. Go to Account -> API Keys -> Get Public Key

        const SERVICE_ID = 'service_jk20aru'
        const TEMPLATE_ID = 'template_5s00irc'
        const PUBLIC_KEY = 'BA5lFEiyhY5WWEcWh'

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                toast.success('Message sent successfully! I will get back to you soon.')
                form.current.reset()
                setLoading(false)
            }, (error) => {
                console.log(error.text)
                toast.error('Failed to send message. Please try again.')
                setLoading(false)
            })
    }

    return (
        <section id="contact" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Contact Me</h2>

                    <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-xl shadow-cyan-500/5 p-8 md:p-12">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="user_name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none placeholder-slate-500"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none placeholder-slate-500"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all outline-none resize-none placeholder-slate-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-12 text-center border-t border-gray-100 pt-8">
                            <p className="text-gray-600 mb-4">Connect with me:</p>
                            <div className="flex justify-center space-x-6">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                                    <span className="sr-only">GitHub</span>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

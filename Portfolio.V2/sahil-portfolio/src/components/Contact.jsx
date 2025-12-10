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
                                <a href="https://www.linkedin.com/in/sahil-shrestha-9b6599344/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/stha_sahil?igsh=MThweW9sbXkxd3AyOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.269.156 4.781 1.769 4.937 4.937.06 1.265.072 1.646.072 4.85s-.012 3.584-.072 4.85c-.156 3.168-1.668 4.781-4.937 4.937-1.265.06-1.646.072-4.85.072s-3.584-.012-4.85-.072c-3.168-.156-4.781-1.769-4.937-4.937-.06-1.265-.072-1.646-.072-4.85s.012-3.584.072-4.85c.156-3.168 1.668-4.781 4.937-4.937 1.265-.06 1.646-.072 4.85-.072zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

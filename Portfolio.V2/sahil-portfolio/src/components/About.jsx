export default function About() {


    const experiences = [

        {
            role: 'Customer Service Attendant',
            company: 'Tasty Fish Market',
            period: '2022 August',
            description: [
                'Delivered friendly and efficient service to customers in a fast-paced environment.',
                'Handled cash and EFTPOS transactions accurately using POS systems.',
                'Assisted with stock rotation, restocking, and maintaining cleanliness according to food safety standards.'
            ],
            skills: ['Customer Service', 'Cash Handling', 'Inventory Management', 'Food Safety']
        },
        {
            role: 'Sales Consultant',
            company: 'Koala Living',
            period: '2022 Sep - Present',
            description: [
                'Consistently exceeding monthly targets through expert client consultation and tailored home design solutions.',
                'Operated ERP and POS systems to manage stock levels, process transactions, and coordinate logistics.',
                'Managed customer inquiries, complaints, and follow-ups, ensuring customer satisfaction and retention.'
            ],
            skills: ['Sales', 'Client Consultation', 'ERP Systems', 'Logistics', 'CRM']
        },
        {
            role: 'Team Leader',
            company: 'Canberra Southern Cross Club',
            period: '2022 August - Present',
            description: [
                'Led shifts, managing a team to ensure smooth service and efficient operations.',
                'Coordinated with kitchen staff to keep service flowing and update on food and drink availability.',
                'Trained new staff members in best practices and service standards.',
                'Managed bar services and supported coworkers with tech-related queries, such as EFTPOS connectivity and system resets.'
            ],
            skills: ['Leadership', 'Operations Management', 'Training', 'POS Systems', 'Technical Support']
        }
    ]

    return (
        <section id="about" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6 lg:sticky lg:top-24">
                            <div>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Hi, I'm <span className="font-bold text-cyan-400">Sahil Shrestha</span> — a recent Software Engineering graduate with a passion for building intelligent, user-centric web applications.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed mt-6">
                                    I'm a problem-solver with hands-on IT support experience and growing skills in data analysis and infrastructure. I combine technical capability with calm communication, delivering real-world solutions across enterprise and education settings.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
                            <div className="space-y-8">
                                {experiences.map((exp, index) => (
                                    <div key={index} className="relative pl-8 border-l-2 border-slate-800 hover:border-cyan-400 transition-colors duration-300">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600 group-hover:border-cyan-400 transition-colors duration-300"></div>

                                        <div className="mb-2">
                                            <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                            <div className="flex flex-wrap gap-2 items-center mt-1">
                                                <span className="text-cyan-400 font-medium">{exp.company}</span>
                                                <span className="text-slate-500 text-sm">•</span>
                                                <span className="text-slate-400 text-sm">{exp.period}</span>
                                            </div>
                                        </div>

                                        <ul className="list-disc list-outside ml-4 mb-4 space-y-1 text-slate-300 text-sm">
                                            {exp.description.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/20 rounded-full border border-cyan-900/50">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
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

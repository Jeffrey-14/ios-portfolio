// src/app/page.tsx
'use client'

import { useState } from 'react'
import { ChevronDownIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { 
  SwiftIcon, 
  XcodeIcon, 
  GitHubIcon, 
  LinkedInIcon,
  AppStoreIcon,
  FirebaseIcon,
  CoreDataIcon,
  UIKitIcon,
  SwiftUIIcon
} from './components/Icons'

const skills = [
  { name: 'Swift', level: 95, icon: SwiftIcon },
  { name: 'SwiftUI', level: 90, icon: SwiftUIIcon },
  { name: 'UIKit', level: 92, icon: UIKitIcon },
  { name: 'Xcode', level: 88, icon: XcodeIcon },
  { name: 'Core Data', level: 85, icon: CoreDataIcon },
  { name: 'Firebase', level: 80, icon: FirebaseIcon },
  { name: 'Git', level: 90, icon: GitHubIcon },
  { name: 'App Store', level: 85, icon: AppStoreIcon }
]

const projects = [
  {
    id: 1,
    title: 'TaskMaster Pro',
    description: 'A comprehensive task management app built with SwiftUI and Core Data. Features include custom animations, dark mode support, and iCloud sync.',
    tech: ['SwiftUI', 'Core Data', 'CloudKit', 'Combine'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Jeffrey-14',
    appstore: 'https://apps.apple.com/app/taskmaster'
  },
  {
    id: 2,
    title: 'WeatherWise',
    description: 'Real-time weather application with beautiful animations and location-based forecasts. Integrated with OpenWeather API.',
    tech: ['UIKit', 'Core Location', 'Alamofire', 'Lottie'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Jeffrey-14',
    appstore: 'https://apps.apple.com/app/weatherwise'
  },

  {
    id: 3,
    title: 'Professional Headshot Editor',
    description: 'A web-based image editing tool built with HTML5 Canvas API, JavaScript, and CSS. Features real-time image enhancement, professional cropping, and client-side processing for privacy.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'File API'],
    image: '/api/placeholder/400/250',
    github: 'https://jeffrey-14.github.io/headshot-editor/',
    appstore: '#' // You can remove this line or point to a live demo
  },

  {
    id: 4,
    title: 'Swift Calculator',
    description: 'A clean, functional calculator app built with SwiftUI for iOS. Features basic arithmetic operations, decimal support, error handling, and follows iOS design guidelines.',
    tech: ['Swift', 'SwiftUI', 'Xcode', 'iOS'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Jeffrey-14/swift-calculator',
    appstore: 'https://github.com/user-attachments/assets/4fe0f8a4-e633-48af-8bfa-35e84f8daa48' // Video demo link
  },

  {
    id: 5,
    title: 'FitTrack',
    description: 'Fitness tracking app with HealthKit integration, custom workout plans, and social sharing features.',
    tech: ['SwiftUI', 'HealthKit', 'Firebase', 'Charts'],
    image: '/api/placeholder/400/250',
    github: 'https://github.com/Jeffrey-14',
    appstore: 'https://apps.apple.com/app/fittrack'
  }
]

const experience = [
  {
    company: 'TechCorp Inc.',
    position: 'Senior iOS Developer',
    duration: '2022 - Present',
    description: 'Lead iOS development team of 4 developers. Built and maintained 3 production apps with 500K+ downloads.',
    achievements: [
      'Increased app performance by 40% through code optimization',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    company: 'StartupX',
    position: 'iOS Developer',
    duration: '2020 - 2022',
    description: 'Developed MVP and scaled iOS application from 0 to 100K users. Worked closely with product and design teams.',
    achievements: [
      'Built core app architecture from scratch',
      'Integrated payment systems and push notifications',
      'Achieved 4.8 star rating on App Store'
    ]
  },
  {
    company: 'Freelance',
    position: 'iOS Consultant',
    duration: '2018 - 2020',
    description: 'Provided iOS development services to various clients, from startups to established businesses.',
    achievements: [
      'Delivered 8+ successful app projects',
      'Specialized in SwiftUI early adoption',
      'Built long-term client relationships'
    ]
  }
]

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    alert('Thanks for reaching out! I\'ll get back to you soon.')
    setContactForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              iOS Engineer
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-white/80 hover:text-white transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="w-40 h-40 rounded-full max-auto mb-8 overflow-hidden border-4 border-white/20 shadow-2xl">
              <img
                src="/images/professional-headshot.jpg"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to my Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              I am an iOS engineer passionate about creating exceptional mobile experiences with Swift, SwiftUI, and cutting-edge iOS technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white/70">
                <MapPinIcon className="w-5 h-5 mr-2" />
                Washington, DC
              </div>
              <div className="flex items-center text-white/70">
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                jeffrey-14@live.co.uk
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/Jeffrey-14" className="text-white/70 hover:text-white transition-colors">
                  <GitHubIcon className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/jeffmenson" className="text-white/70 hover:text-white transition-colors">
                  <LinkedInIcon className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 mr-3 text-blue-400" />
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="ml-auto text-white/70">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <div>App Screenshot</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-white/70 hover:text-white transition-colors">
                      <GitHubIcon className="w-5 h-5" />
                    </a>
                    <a href={project.appstore} className="text-white/70 hover:text-white transition-colors">
                      <AppStoreIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <p className="text-blue-400 text-lg">{exp.company}</p>
                  </div>
                  <span className="text-white/70 text-sm md:text-base">{exp.duration}</span>
                </div>
                <p className="text-white/80 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-white/70 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-blue-400 focus:outline-none resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50">© 2024 iOS Engineer Portfolio</p>
        </div>
      </footer>
    </div>
  )
}
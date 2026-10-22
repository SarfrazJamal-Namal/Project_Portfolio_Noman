import { useEffect, useState } from 'react'
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CircuitBoard,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Radio,
  Sparkles,
  Sun,
  Terminal,
  Moon,
  X,
} from 'lucide-react'
import profileImage from '../Profile/Noman.jpg'
import cvFile from '../Profile/Muhammad_Noman_CV.pdf'
import namalLogo from '../Profile/Namal Logo.png'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  {
    number: '01',
    category: 'Embedded systems',
    title: 'Motion Angle Detection Using 8 IMUs',
    tech: 'STM32 · MATLAB · Simulink',
    icon: Activity,
    description:
      'Used eight IMU sensors with STM32, MATLAB, and Simulink to measure motion angles.',
  },
  {
    number: '02',
    category: 'Signal processing',
    title: 'Voice Recognition Using MATLAB',
    tech: 'MATLAB · Audio signals',
    icon: Radio,
    description:
      'Used MATLAB to identify a target voice from a combined audio recording.',
  },
  {
    number: '03',
    category: 'Signal processing',
    title: 'Echo Cancellation Using MATLAB',
    tech: 'MATLAB · Signal processing',
    icon: Activity,
    description:
      'Built and tested a MATLAB program to remove echo from audio.',
  },
  {
    number: '04',
    category: 'Robotics',
    title: 'LEGO Mindstorms EV3 Line Following Robot',
    tech: 'MATLAB · Simulink · EV3',
    icon: CircuitBoard,
    description:
      'Built and programmed an EV3 robot to follow a black line using MATLAB and Simulink.',
  },
  {
    number: '05',
    category: 'Computer architecture',
    title: 'RISC-V Pipelined Processor Design',
    tech: 'Verilog · RISC-V',
    icon: Cpu,
    description:
      'Designed a pipelined RISC-V processor for a Computer Architecture project.',
  },
  {
    number: '06',
    category: 'Digital logic design',
    title: 'ALU Design',
    tech: 'Digital logic · Verilog concepts',
    icon: Terminal,
    description:
      'Designed an Arithmetic Logic Unit for a Digital Logic Design project.',
  },
  {
    number: '07',
    category: 'Namal Tech Expo 2024',
    title: 'Sumo War Robot',
    tech: 'Robotics · Hardware build',
    icon: Sparkles,
    description:
      'Built a sumo robot and took part in the Namal Tech Expo 2024 competition.',
  },
  {
    number: '08',
    category: 'Namal Tech Expo',
    title: 'Line Following Robot',
    tech: 'Robotics · Control',
    icon: CircuitBoard,
    description:
      'Built a line-following robot and presented it at Namal Tech Expo.',
  },
  {
    number: '09',
    category: 'Computer communication networks',
    title: 'Bank Networking Design',
    tech: 'Cisco Packet Tracer · Networking',
    icon: Layers3,
    description:
      'Designed a bank network in Cisco Packet Tracer for a networking course project.',
  },
]

const skillGroups = [
  {
    label: 'Embedded & hardware',
    icon: Cpu,
    skills: ['STM32', 'Embedded Systems', 'IMU Sensor Interfacing', 'Assembly Language', 'Verilog', 'Digital Logic Design', 'Proteus', 'OrCAD Capture'],
  },
  {
    label: 'Simulation & analysis',
    icon: Activity,
    skills: ['MATLAB', 'Simulink', 'Python', 'ETAP', 'AutoCAD'],
  },
  {
    label: 'Data & networking',
    icon: Radio,
    skills: ['SQL', 'Database Query', 'Cisco Packet Tracer'],
  },
  {
    label: 'Documentation & delivery',
    icon: Layers3,
    skills: ['MS Word', 'MS PowerPoint', 'MS Excel', 'Report Making', 'Documentation', 'Data Entry'],
  },
]

const coursework = ['Computer Architecture', 'Digital Logic Design', 'Digital Signal Processing', 'Database Engineering', 'Embedded Systems', 'Machine Learning', 'Wireless Communication', 'Signals and Systems', 'Power Electronics', 'Control Systems']

function SectionHeading({ eyebrow, title, copy, id }) {
  return (
    <div className="section-heading" id={id}>
      <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function SignalTag({ children }) {
  return <span className="signal-tag"><span />{children}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const closeMenu = () => setMenuOpen(false)
  const toggleTheme = () => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className="site-shell" data-theme={theme}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Muhammad Noman home">
          <span className="header-profile"><img src={profileImage} alt="Muhammad Noman" /></span>
          <span className="brand-copy"><strong>Muhammad Noman</strong><small>electrical engineer</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-status"><span className="status-pulse" /> Available for engineering opportunities <span className="status-line" /></div>
              <p className="hero-kicker">Electrical engineering / embedded systems</p>
              <h1>Electrical Engineer<br /><em>&amp; Embedded Systems</em></h1>
              <p className="hero-intro">I am Muhammad Noman, an Electrical Engineering student interested in embedded systems, MATLAB, robotics, and digital design.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">View projects <ArrowUpRight size={17} /></a>
                <a className="button button-quiet" href="#contact">Contact me <Mail size={16} /></a>
                <a className="button button-quiet" href={cvFile} download="Muhammad-Noman-CV.pdf">Download CV <Download size={16} /></a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Kot Addu, Punjab</span>
                <span><GraduationCap size={15} /> Namal University</span>
              </div>
            </div>

            <div className="hero-portrait-wrap">
              <div className="portrait-frame">
                <img src={profileImage} alt="Portrait of Muhammad Noman" />
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><ArrowDown size={16} /></a>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="section-grid">
            <SectionHeading eyebrow="01 / about me" title="I build practical electrical projects." copy="My work includes embedded systems, MATLAB, robotics, and digital design." />
            <div className="about-content">
              <div className="about-lede">Simple ideas. Useful engineering.</div>
              <div className="about-columns">
                <p>I use STM32, MATLAB, Simulink, Verilog, sensors, and digital logic to learn by building.</p>
                <p>My final year project uses multiple IMU sensors to improve motion and orientation data.</p>
              </div>
              <div className="interests-strip">
                <span className="small-label">Outside the circuit</span>
                <div className="interest-list"><SignalTag>Cricket</SignalTag><SignalTag>Embedded systems</SignalTag><SignalTag>Problem solving</SignalTag></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad education-section" id="education">
          <div className="section-grid education-grid">
            <SectionHeading eyebrow="02 / education" title="Electrical Engineering." copy="BS Electrical Engineering at Namal University." />
            <div className="education-card">
              <div className="card-topline"><span>October 2022 — Present</span><span>BS Electrical Engineering</span></div>
              <div className="education-main"><div className="university-identity"><img src={namalLogo} alt="Namal University logo" /><div><h3>Namal University</h3><p>Mianwali, Pakistan</p></div></div><div className="degree-mark"><GraduationCap size={23} /><span>BS / EE</span></div></div>
              <div className="fyp-box"><div className="fyp-label"><span className="signal-dot" /> Final year project</div><h4>Multiple-Sensor Inertial Measurement System</h4><p>Building a virtual IMU system with eight sensors to improve motion and orientation data when sensors have noise or errors.</p></div>
              <div className="coursework"><span className="small-label">Selected coursework</span><div className="coursework-list">{coursework.map((course) => <span key={course}>{course}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="section-pad skills-section" id="skills">
          <SectionHeading eyebrow="03 / skills" title="Skills and tools." copy="Tools I use for design, simulation, embedded systems, and networking." />
          <div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <div className="skill-card" key={group.label}><div className="skill-icon"><Icon size={19} /></div><h3>{group.label}</h3><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div> })}</div>
        </section>

        <section className="section-pad work-section" id="work">
          <div className="work-heading-row"><SectionHeading eyebrow="04 / projects" title="Selected projects." copy="Coursework, lab work, and competition builds." /><span className="work-count">09<br /><small>projects</small></span></div>
          <div className="projects-list">{projects.map((project) => { const Icon = project.icon; return <article className="project-row" key={project.number}><div className="project-index">{project.number}</div><div className="project-icon"><Icon size={20} /></div><div className="project-body"><div className="project-meta"><span>{project.category}</span><span className="project-tech">{project.tech}</span></div><h3>{project.title}</h3><p>{project.description}</p></div><ArrowUpRight className="project-arrow" size={19} /></article> })}</div>
        </section>

        <section className="section-pad experience-section" id="experience">
          <div className="section-grid experience-grid">
            <SectionHeading eyebrow="05 / experience" title="Electrical internship." copy="Practical exposure to power generation and electrical equipment." />
            <div className="timeline-wrap"><div className="timeline-line" /><article className="timeline-item"><div className="timeline-node"><BriefcaseBusiness size={16} /></div><div className="timeline-date">July 2025 — October 2025</div><div className="timeline-role"><h3>Electrical Intern</h3><p>Northern Power Generation Company Limited (GENCO-III)</p><span>Thermal Power Station Muzaffargarh</span></div><ul><li>Learned about thermal power generation.</li><li>Observed switchyards, switchgear, and circuit breakers.</li><li>Learned about AC and DC motor testing and maintenance.</li><li>Gained basic exposure to PLC and SCADA systems.</li></ul></article></div>
          </div>
        </section>

        <section className="section-pad credentials-section" id="credentials">
          <div className="credentials-grid"><div><SectionHeading eyebrow="06 / certificates" title="Certificates." copy="Internship and project participation." /></div><div className="credential-list"><div className="credential-item"><span className="credential-year">SEP 2024</span><div><Award size={18} /><h3>Electrical Department Internship</h3><p>Thermal Power Station, Muzaffargarh</p></div></div><div className="credential-item"><span className="credential-year">JAN 2024</span><div><Award size={18} /><h3>Sumo War Robot Participation</h3><p>Namal Tech Expo 2024</p></div></div></div></div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="contact-card"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot" />07 / contact</div><h2>Let’s work<br /><em>together.</em></h2><p>I am open to embedded systems, electrical engineering, and project opportunities.</p><div className="language-note"><span className="small-label">Languages</span><span>English — Fluent</span><span>Urdu — Fluent</span></div></div><div className="contact-actions"><a className="contact-link featured" href="mailto:muhammadnoman16ee@gmail.com"><span><Mail size={18} /> Email</span><strong>muhammadnoman16ee@gmail.com</strong><ArrowUpRight size={17} /></a><a className="contact-link" href="https://wa.me/923118493832" target="_blank" rel="noreferrer"><span><MessageCircle size={18} /> WhatsApp</span><strong>+92 311 8493832</strong><ArrowUpRight size={17} /></a><a className="contact-link" href="https://www.linkedin.com/in/muhammad-noman-737392351" target="_blank" rel="noreferrer"><span><BriefcaseBusiness size={18} /> LinkedIn</span><strong>View professional profile</strong><ArrowUpRight size={17} /></a><a className="contact-link" href="https://github.com/MuhammadNoman-16/Engr.Muhammad-Noman" target="_blank" rel="noreferrer"><span><Code2 size={18} /> GitHub</span><strong>View project repository</strong><ArrowUpRight size={17} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><a className="brand" href="#top" aria-label="Back to top"><span className="header-profile"><img src={profileImage} alt="Muhammad Noman" /></span><span className="brand-copy"><strong>Muhammad Noman</strong><small>Electrical Engineer</small></span></a><p>Embedded Systems · MATLAB · Robotics</p><a className="back-to-top" href="#top" aria-label="Back to top"><ArrowUpRight size={18} /></a></footer>
    </div>
  )
}

export default App

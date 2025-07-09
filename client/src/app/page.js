'use client';

import styles from './page.module.css';
import { Connector } from './components/connector';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { toggle, setFalse, setTrue } from '../../store/slices/clickedSlice';
import Image from 'next/image';

const Home = () => {
  const isClicked = useSelector((state) => state.isClicked.value);
  const dispatch = useDispatch();
  const navigate = useRouter();
  const videoRefs = useRef([]);
  const sectionRefs = useRef([]);

  const cell = [];
  for (let i = 0; i < 60 * 10; i++) {
    cell.push(<div key={i} className={`${styles.row}`} />);
  }

  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 40 + 10,
      dx: Math.random() * 200 - 100,
      dy: Math.random() * 200 - 100,
      duration: Math.random() * 3 + 2,
    }));
    setCircles(generated);
  }, []);

  useEffect(() => {
    if (!isClicked) return;
    const currentRefs = [...sectionRefs.current];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((el) => el && observer.observe(el));

    return () => {
      currentRefs.forEach((el) => el && observer.unobserve(el));
    };
  }, [isClicked]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Placeholder for form submission)');
    e.target.reset();
  };

  const journey = [
    {
      j_no: 1,
      content: "I was born on August 1st, 2003.",
      highlight: "Born",
      date: "2003-08-01",
    },
    {
      j_no: 2,
      content: "In 2019, I successfully completed my 10th grade.",
      highlight: "10th Grade Completed",
      date: "2019-04-01",
    },
    {
      j_no: 3,
      content: "In 2020, during the COVID-19 lockdown, I explored the tech field and developed a strong interest in it.",
      highlight: "Tech Exploration Begins",
      date: "2020-05-01",
    },
    {
      j_no: 4,
      content: "By 2021, after completing 12th grade, I started building websites and enhancing my web development skills.",
      highlight: "Started Web Development",
      date: "2021-07-01",
    },
    {
      j_no: 5,
      content: "In 2025, I launched a full-featured chess application showcasing multiplayer, chat, and gameplay features.",
      highlight: "Chess App Launched",
      date: "2025-01-01",
    },
  ];

  const projects = [
    {
      id: 1,
      card1Img: '/assets/skynetix.png',
      card2Img: '/assets/skynetix.mp4',
      github: 'https://github.com/akumar4515/skynetix',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2k2/',
      projectUrl: 'https://skynetix.in/',
      title: "Skynetix Website",
      p1: "Complete IT solution company website",
      p2: "Includes sections for services, about, and contact",
      p3: "Fully responsive and performance optimized",
      p4: "Created using Wix Studio for fast deployment",
    },
    {
      id: 2,
      card1Img: '/assets/webxprt.png',
      card2Img: '/assets/webxprt.mp4',
      github: 'https://github.com/akumar4515/mediaking',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2k2/',
      projectUrl: 'https://webxprt.in/',
      title: "WebXPRT Website",
      p1: "Tailored for digital marketing excellence",
      p2: "SEO-optimized structure for visibility",
      p3: "Engaging and bold visual design",
      p4: "Integrated email capture and contact flow",
    },
    {
      id: 3,
      card1Img: '/assets/mv.png',
      card2Img: '/assets/mv.mp4',
      github: 'https://github.com/akumar4515/motionview',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2k2/',
      projectUrl: 'https://motionviewventures.in/',
      title: "Motion View Ventures Website",
      p1: "Fully responsive design across devices",
      p2: "Admin dashboard for salary & attendance",
      p3: "Modern and intuitive user interface",
      p4: "Scalable architecture for future growth",
    },
    {
      id: 4,
      card1Img: '/assets/graphix.png',
      card2Img: '/assets/graphix.mp4',
      github: 'https://github.com/akumar4515/plott',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2k2/',
      projectUrl: 'https://graphix-aman.netlify.app/',
      title: "Graphix website",
      p1: "Creative UI/UX presentation using scroll effects",
      p2: "Responsive layout with CSS animations",
      p3: "Displays UI components and design works",
      p4: "Built using React and styled-components",
    },
    {
      id: 5,
      card1Img: '/assets/chessmate.jpeg',
      card2Img: '/assets/chessmate.mp4',
      github: 'https://github.com/another-project',
      linkedin: 'https://www.linkedin.com/in/aman-kumar-2k2/',
      projectUrl: '',
      title: "ChessMate Multiplayer App",
      p1: "Real-time chess with multiplayer mode",
      p2: "Integrated chat and game logic",
      p3: "Built with React Native, Node.js, and Socket.IO",
      p4: "Includes AI mode, friend invites & video calls",
    },
  ];

  const skills = [
    { name: 'HTML', img: '/assets/html.png' },
    { name: 'CSS', img: '/assets/css.png' },
    { name: 'JavaScript', img: '/assets/js.png' },
    { name: 'React', img: '/assets/react.png' },
    { name: 'Node.js', img: '/assets/node.png' },
    { name: 'MongoDB', img: '/assets/mogo.png' },
    { name: 'Firebase', img: '/assets/mysql.png' },
    { name: 'Redux', img: '/assets/redux.png' },
    { name: 'React Native', img: '/assets/reactnative.png' },
  ];

  return (
    <div className={styles.home}>
      <div className={`${styles.hero}`}>
        <div className={`${styles.heroProfile}`}>
          <div className={`${styles.heroDetail}`}>
            <h1 className={`${styles.detailName}`}>Aman Kumar</h1>
            <h3 className={`${styles.detailProfession}`}>Full Stack Developer</h3>
            <div className={`${styles.navBtn}`}>
              <div className={`${styles.navLink}`}>
                <Image src='/assets/github.png' alt="GitHub Profile" width={32} height={32} />
              </div>
              <div className={`${styles.navLink}`}>
                <Image src='/assets/linkdn.png' alt="LinkedIn Profile" width={32} height={32} />
              </div>
            </div>
          </div>
          <div className={`${styles.heroPic}`}>
            <div className={`${styles.img}`}>
              <Image src='/assets/11.jpeg' alt="Aman Kumar Profile" width={150} height={150} />
            </div>
          </div>
          <div
            className={`${styles.heroNext}`}
            onClick={() => {
              dispatch(setTrue());
              setTimeout(() => {
                const el = document.getElementById("whatido");
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
          >
            {'\u2193'}
          </div>
        </div>
      </div>

      {isClicked ? (
        <>
          <div id="whatido" className={`${styles.sectionWhatIDo} ${styles.observe}`} ref={(el) => (sectionRefs.current[3] = el)}>
            <h1 className={styles.sectionHead}>What I Do</h1>
            <div className={styles.whatIDoContainer}>
              <div className={styles.whatIDoCard}>
                <Image src="/assets/frontend.jpg" alt="Frontend Development" className={styles.whatIDoImage} width={300} height={200} />
                <h3>Frontend Development</h3>
                <p>Building responsive, user-friendly UIs using React, HTML, CSS, and JavaScript.</p>
              </div>
              <div className={styles.whatIDoCard}>
                <Image src="/assets/backend.jpg" alt="Backend Development" className={styles.whatIDoImage} width={300} height={200} />
                <h3>Backend Development</h3>
                <p>Creating secure and scalable APIs using Node.js, Express.js, and MongoDB.</p>
              </div>
              <div className={styles.whatIDoCard}>
                <Image src="/assets/app.jpg" alt="App Development" className={styles.whatIDoImage} width={300} height={200} />
                <h3>App Development</h3>
                <p>Developing cross-platform mobile apps using React Native and Firebase.</p>
              </div>
            </div>
            <h2 className={styles.sectionSubHead}>Skills</h2>
            <div className={styles.skillsGrid}>
              {skills.map(skill => (
                <div key={skill.name} className={styles.skillItem}>
                  <Image src={skill.img} alt={`${skill.name} Logo`} width={100} height={100} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.section1} ${styles.observe}`} id='myJourney' ref={(el) => (sectionRefs.current[0] = el)}>
            <div className={`${styles.sec1Animate}`}>
              {cell}
            </div>
            <h1 className={`${styles.sectionHead}`}>My Journey</h1>
            <div className={`${styles.sec1Cont}`}>
              {journey.map((j) => (
                <div key={j.j_no} className={`${styles.cont1}`}>
                  <div className={`${styles.jno}`}>
                    {j.j_no}
                  </div>
                  <div className={`${styles.jcont}`}>
                    <h3>{j.date}</h3>
                    <h4>{j.highlight}</h4>
                    <p>{j.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.section2} ${styles.observe}`} ref={(el) => (sectionRefs.current[1] = el)}>
            {circles.map((circle) => (
              <div
                key={circle.id}
                className={`${styles.pop}`}
                style={{
                  top: `${circle.top}%`,
                  left: `${circle.left}%`,
                  width: `${circle.size}px`,
                  height: `${circle.size}px`,
                  animationDuration: `${circle.duration}s`,
                  '--dx': `${circle.dx}px`,
                  '--dy': `${circle.dy}px`,
                }}
              />
            ))}
            <div className={`${styles.sec2Head}`}>
              MY WORK
            </div>
            <div className={styles.work}>
              {projects.map((project, index) => (
                <div key={project.id} className={`${styles.workCard}`}>
                  <div className={styles.cardWrapper}>
                    <div className={styles.card1}>
                      <Image src={project.card1Img} alt={`${project.title} Preview`} width={300} height={200} />
                    </div>
                    <div
                      className={styles.card2}
                      onMouseEnter={() => videoRefs.current[index]?.play()}
                      onMouseLeave={() => {
                        const video = videoRefs.current[index];
                        if (video) {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }}
                    >
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        src={project.card2Img}
                        muted
                        loop
                        playsInline
                        className={styles.video}
                      />
                    </div>
                  </div>
                  <div className={`${styles.details}`}>
                    <h2>{project.title}</h2>
                    <p>{project.p1}</p>
                    <p>{project.p2}</p>
                    <p>{project.p3}</p>
                    <p>{project.p4}</p>
                  </div>
                  <div className={styles.nav}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <div className={`${styles.navLink}`}>
                        <Image src="/assets/github.png" alt="GitHub Profile" width={32} height={32} />
                      </div>
                    </a>
                    <a href={project.linkedin} target="_blank" rel="noopener noreferrer">
                      <div className={`${styles.navLink}`}>
                        <Image src="/assets/linkdn.png" alt="LinkedIn Profile" width={32} height={32} />
                      </div>
                    </a>
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                      <button className={`${styles.workBtn}`}>View</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.footer} ${styles.observe}`} ref={(el) => (sectionRefs.current[2] = el)}>
            <div className={`${styles.footerContent}`}>
              <h2 className={`${styles.sectionHead}`}>
                Thanks for Visiting My Profile!
              </h2>
              <p className={`${styles.footerText}`}>
                I'm excited to connect! Reach out via the form below or find me on social media.
              </p>
              <div className={`${styles.footerForm}`}>
                <h2 className={`${styles.footerFormHead}`}>Contact Me</h2>
                <form className={`${styles.contactForm}`} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`${styles.inputField}`}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={`${styles.inputField}`}
                    required
                  />
                  <textarea
                    placeholder="Your Message"
                    className={`${styles.textArea}`}
                    required
                  />
                  <button type="submit" className={`${styles.submitBtn}`}>
                    Send Message
                  </button>
                </form>
              </div>
              <div className={`${styles.socialIcons}`}>
                <a
                  href="https://github.com/akumar4515/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <div className={`${styles.navLink}`}>
                    <Image src="/assets/github.png" alt="GitHub Profile" width={32} height={32} />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/aman-kumar-2k2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <div className={`${styles.navLink}`}>
                    <Image src="/assets/linkdn.png" alt="LinkedIn Profile" width={32} height={32} />
                  </div>
                </a>
              </div>
               @copyright Aman-Kumar
            </div>
           
          </div>
        </>
      ) : ""}
    </div>
  );
};

export default Home;
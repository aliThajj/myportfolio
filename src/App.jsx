import React from "react";
import Navbar from "./assets/Components/Navbar/Navbar.jsx";
import Hero from "./assets/Components/Hero/Hero.jsx";
// import Hero from "./Components/Hero";
// import Projects from "./Components/Projects";
// import Skills from "./Components/Skills";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Navbar />
      <Hero />
      {/*
        <Projects />
        <Skills />
        <Contact />
        <Footer /> */}
    </div>
  );
}

export default App;



// // components/Hero.js
// import React from "react";

// const Hero = () => {
//   return (
//     <section className="text-center py-5 bg-secondary">
//       <div className="container">
//         <h1 className="display-4">Welcome to My Portfolio</h1>
//         <p className="lead">I am a Frontend Developer specialized in React.js</p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// // components/Projects.js
// import React from "react";

// const Projects = () => {
//   const projects = [
//     { title: "Project One", description: "A React-based web app", link: "#" },
//     { title: "Project Two", description: "An e-commerce platform", link: "#" }
//   ];

//   return (
//     <section id="projects" className="py-5">
//       <div className="container">
//         <h2 className="text-center">Projects</h2>
//         <div className="row">
//           {projects.map((project, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card bg-light text-dark p-3">
//                 <h5>{project.title}</h5>
//                 <p>{project.description}</p>
//                 <a href={project.link} className="btn btn-primary">View Project</a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// // components/Skills.js
// import React from "react";

// const Skills = () => {
//   const skills = ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap"];

//   return (
//     <section id="skills" className="py-5 bg-secondary text-center">
//       <div className="container">
//         <h2>Skills</h2>
//         <div className="d-flex justify-content-center flex-wrap">
//           {skills.map((skill, index) => (
//             <span key={index} className="badge bg-primary mx-2 p-2">{skill}</span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// // components/Contact.js
// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-5 text-center">
//       <div className="container">
//         <h2>Contact Me</h2>
//         <p>Email: example@example.com</p>
//         <p>LinkedIn: linkedin.com/in/example</p>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// // components/Footer.js
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-center py-3">
//       <p>&copy; 2025 My Portfolio. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

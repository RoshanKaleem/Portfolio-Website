import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Website</span> <br />
        means <span>Good Business</span>
      </h2>

      <div className="badge-cmp">
        <p className="p-text">
          I am a results-driven Full Stack Web Developer with a strong
          foundation in software engineering and a passion for crafting seamless
          digital experiences. With a proven track record in building and
          optimizing web applications, I am adept at leveraging a diverse skill
          set to create robust, user-friendly, and high-performing websites and
          web-based solutions.
          <br />
          <br />
          My professional journey has seen me excel in various roles, from
          scraping and analyzing data using frameworks like Selenium and Scrapy
          to enhancing browser functionality through the development of Chrome
          extensions using React.js. I have also been instrumental in
          constructing REST APIs with Django, ensuring efficient data
          communication while maintaining a focus on code quality and test
          coverage.
          <br />
          <br />
          In addition to my technical skills, I have experience in project
          management tools such as Trello, Jira, and GitHub, which has allowed
          me to collaborate effectively with cross-functional teams to ideate
          and implement innovative features. My ability to integrate third-party
          APIs and optimize applications for performance has consistently led to
          enhanced user experiences and engagement.
          <br />
          <br />
          Furthermore, my educational background in Computer Science has
          provided me with a solid foundation in software development
          principles. I am committed to staying updated with the latest industry
          trends and technologies, ensuring that my work remains at the
          forefront of innovation.
          <br />
          <br />
          I am a proactive problem solver who thrives in fast-paced
          environments, and I am always eager to take on new challenges in the
          world of web development. With a keen eye for detail, a commitment to
          delivering high-quality code, and a passion for creating exceptional
          digital solutions, I am ready to contribute my expertise to your next
          web development project.
          <br />
          <br />
        </p>
      </div>

      <h2 className="head-text-skill">Education</h2>

      <div className="badge-cmp">
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-item">
            <div className="app__skills-education">
              <p className="bold-text">Bachelor's in Computer Science (CS)</p>
              <p>
                National University Of Science and Technology
              </p>
            </div>
            <div className="app__skills-education">
              <p className="bold-text">CGPA</p>
              <p>3.49/4</p>
            </div>
            <motion.div className="app__skills-education">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="bold-text">09/2018 - 02/2022</p>
                  <p>Islamabad, Pakistan</p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <h2 className="head-text-skill">Skills</h2>

      <div>
        <motion.div className="app__profiles">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);

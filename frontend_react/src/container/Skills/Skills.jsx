import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { BsDot } from "react-icons/bs";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [experiences, setExperiences] = useState([]);

  // If you want to sort in descending order, you can reverse the order
  // const sortedDataDescending = sortedData.reverse();

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      const sortedExperiences = data.sort((a, b) => {
        const dateA = new Date(a._createdAt);
        const dateB = new Date(b._createdAt);
        return dateA - dateB;
      });
      setExperiences(sortedExperiences);
    });
  }, []);

  return (
    <>
      <h2 className="head-text-skill">Experiences</h2>

      <div className="app__skills-container">
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      {work.tags.map((tags) => (
                        <div className="app__experience-details">
                          <div>
                            <p className="p-text">
                              <BsDot />
                            </p>
                          </div>
                          <div>
                            <p className="p-text">{tags}</p>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "experience",
  "app__primarybg"
);

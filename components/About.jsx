import { motion, useTransform } from 'framer-motion';

const About = () => {

  return (
    <div className='about' name='about' id="about">
      <div style={{ height: "150px", width: "10p"}} />
      <h3>About Me</h3>
      <section>
        <p>Back in high school, they taught us about coding and I enjoyed it. However, I went to college to study in the maritime field. I've had the privilege to travel around the world on my career as a Seafarer but I've always wanted to go back to coding. Hence, I studied coding during my freetime.</p>
        <br />
        <p>Fast-forward to today, I am now proficient in HTML, CSS, JS, React, NextJS, Hygraph, MongoDB, Framer motion and more. I've created a few projects to practice on and hosted my two websites. I am open to <b>accepting projects</b> where I'll create a <b>functional, creative and responsive website</b> for you.</p>
        <br />
        <p>When I’m not at the computer, I’m usually exploring and traveling, hanging out with my wife and daughter, painting, or just running around.
        </p>
      </section>
    </div>
  )
}

export default About
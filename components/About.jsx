import { FaYoutube } from 'react-icons/fa';

const About = () => {

  return (
    <div className='about' name='about' id="about">
      <div style={{ height: "150px", width: "10p"}} />
      <h3>About Me</h3>
      <section>
        <p>I've been always passionate about coding since they taught us the basics in high school. However, I went to college to pursue a career in the maritime field. I've had the privilege to travel around the world as a Navigation Officer, but I always want to get back to coding. Hence, I dedicated my free time to learn coding.</p>
        <br />
        <p>Fast-forward to today, I am now proficient in HTML, CSS, JS, React, NextJS, GraphQL, MongoDB, Framer motion and more. I've created a few projects to practice on and deployed a monitizing websites. If you are intersted, then I can aslo create a <b>functional, creative and responsive website</b> for you!</p>
        <br />
        <p>When I’m not at the computer, I’m usually just hanging out with my wife and daughter, painting, exploring and traveling, or just running around. You can follow me on our youtube channel by clicking the link below.
        </p>
        <br />
        <a href='https://www.youtube.com/channel/UCPQVhXHm2QJC6S34ocf4neg?sub_confirmation=1' className='flex flex-row justify-start items-end' >
          <div 
            style={{ 
              borderRadius: "50%",
              height: "45px",
              width: "45px",
              backgroundImage: `url("https://yt3.googleusercontent.com/VG91L7P9G8jFJCn_1BgfG_28-juXsxi4q32YJwR3CZeqxRxb19iigSkvNkjMtkh_Vyu3fj9cyg=s176-c-k-c0x00ffffff-no-rj")`,
              backgroundSize: "contain",
              fontSize: "x-large",
              color: "white",
            }}
          ><FaYoutube className='ml-[35px] mt-[25px]' /></div>
            <p className='ml-7 rounded-full py-1.5 px-3 bg-white text-xs text-black'>Subscribe</p>
        </a>
      </section>
    </div>
  )
}

export default About
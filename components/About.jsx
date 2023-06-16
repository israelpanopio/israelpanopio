import { FaYoutube } from 'react-icons/fa';

const About = () => {

  return (
    <div className='about' name='about' id="about">
      <div style={{ height: "150px", width: "10p"}} />
      <h3>About Me</h3>
      <section>
        <p>I've been always passionate about coding since they taught us the basics in high school. However, I went to college to pursue a career in the maritime field. I believe I did well, but I've always wanted to get back to coding. Hence, I dedicated my free time to learn how to code.</p>
        <br />
        <p>I love setting goals and working to achieve them. In fact, my wife and I decided to settle down, and move to the beautiful British Columbia in Canada. Successfully, we just landed here as permanent residents.</p>
        <br />
        <p>Fast-forward to today, I am working on my next goal to become a <b>Jr. Developer</b>. I've created a few projects from the groud up, and I would be happy to proffesionally carry on with this journey. Continuesly learning and enhancing my skills everyday, I'll bring value to the company I am working with, as I did before.</p>
        <br />
        {/* <p>
          I enjoy learning and I know for a fact that there's a lot more to learn. I'm very open to learning more about the com
        </p>
        <br /> */}
        <p>When I’m not at the computer, I’m usually just hanging out with my wife and daughter, painting, exploring and traveling, or just running around. You can follow me on our channel by clicking the link below.
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
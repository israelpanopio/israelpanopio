import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <div className='contents_div' name="projects" id="projects">
      <div style={{ height: "150px", width: "10p"}} />
      <h3 style={{ marginBottom: "-20px"}}>Projects</h3>
      <Link href="https://israelpanopio.vercel.app/" className='experience_grid'>
        <div>
          <img 
            src="/israelpanopio.png"
            alt="Israel Panopio"
            className='projects'
          /><br />
        </div>
        <div>
          <b>israelpanopio.com</b>
          <p>
            This portfolio site was built with NextJS and Tailwind CSS, and animated with Framer motion.
          </p>
          <p>
            With updated knowledge on the latest version of NextJS, ready to take on projects and/or work full time as a Jr. Web Developer. 
          </p>
          <ul className='mt-2 flex flex-wrap components'>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                NextJS v.13
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Tailwind CSS
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Framer Motion
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Vercel
              </div>
            </li>
          </ul>
        </div>
      </Link>
      <Link href="https://www.ph2canada.com/" className='experience_grid'>
        <div>
          <img 
            src="/ph2canada.png"
            alt="Filipino Aspirants to Canada"
            className='projects'
          /><br />
        </div>
        <div>
          <b>Filipino Aspirants to Canada</b>
          <p>We love travelling. But back in 2021, my wife and I decided to settle down. Settle down meaning to move to one of the most beautiful places in the world, and be closer to where the adventure is.
            Hence, we moved to the beautiful British Columbia. 
          </p>
          <p>
          The journey wasn't easy. Achieving so, inspired me to share my knowledge. This easy-to-navigate website has helped hundreds, if not, thousands of aspirants achieved their goal too.
          </p>
          <ul className='mt-2 flex flex-wrap components'>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                SEO
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Google Analytics
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Google Adsense
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Styled Components
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Facebook Integration
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                NextJS
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                GraphQL
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Vercel
              </div>
            </li>
          </ul>
        </div>
      </Link>
      <Link href="https://www.modernmarino.com/" className='experience_grid'>
        <div>
          <img 
            src="/modernmarino.png"
            alt="Modern Marino"
            className='projects'
          /><br />
        </div>
        <div>
          <b>Modern Marino</b>
          <p>
            Have I mention I really like travelling? 
            What better way to do it than to travel the world for free? 
            Well getting paid to travel is certainly better!
          </p>
          <p>
            This website is created to guide my fellow seafarers in looking past through the negativity, and see how worthwhile and advantageous sailing the seas could be. More importantly, how satisfying a well-managed life is.
          </p>
          <ul className='mt-2 flex flex-wrap components'>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                SEO
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Google Adsense
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Facebook Integration
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Styled Components
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1  leading-5 text-teal-300">
                NextJS
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                GraphQL
              </div>
            </li>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                Vercel
              </div>
            </li>
          </ul>
        </div>
      </Link>
      <Link href="https://github.com/israelpanopio">
        <b className="flex flex-row">View Project archieve <FaArrowRight className='ml-2 mt-1'/></b>
      </Link>
    </div>
  )
}

export default Projects
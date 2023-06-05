import Link from 'next/link'

const Projects = () => {
  return (
    <div className='contents_div' name="projects" id="projects">
      <div style={{ height: "150px", width: "10p"}} />
      <h3>Projects</h3>
      <Link href="https://www.israelpanopio.com/" className='experience_grid'>
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
            A portfolio site built with NextJS and Tailwind CSS, and animated with Framer motion.
          </p>
          <p>
            With updated knowledge on the latest NextJS, ready to take on projects and/or work full time as a Jr. Web Developer. 
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
          <p>Back in 2020, my used to be girlfriend (now wife), and I got married and started a family. 
            We like travelling, but decided it is time to settle down. 
            Settling down meaning get close to where the adventure is.
            Hence, we choose to move to one of the most beautiful place in the world, British Columbia. 
          </p>
          <p>
            The journey wasn't easy. Achieving so, inspired me to share my knowledge, and through this website, I help my fellow aspirants achieve their goal as well.
          </p>
          <ul className='mt-2 flex flex-wrap components'>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 leading-5 text-teal-300">
                NextJS
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
                Hygraph
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
            Did I mention I really like travelling? 
            What better way to do it than to travel the world for free? 
            Well, it's getting paid to travel!
          </p>
          <p>
            This website is created to guide you in looking past through the negativity, and see how worthwhile and advantageous sailing the seas could be and more importantly, how satisfying a well-managed life is.
          </p>
          <ul className='mt-2 flex flex-wrap components'>
            <li className='mr-1.5 mt-2'>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1  leading-5 text-teal-300">
                NextJS
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
                Hygraph
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
    </div>
  )
}

export default Projects
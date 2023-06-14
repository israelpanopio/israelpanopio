import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Experience = () => {
  return (
    <div className='contents_div' name="experience" id="experience">
    <div style={{ height: "150px", width: "10p"}} />
      <h3 style={{ marginBottom: "-30px"}}>Experience</h3>
      <div className='experience_grid'>
        <p>May 2019 - 2021 </p>
        <div>
          <b>Port Captain · NYK Group South Asia</b>
          <p>Ensured safe, smooth, and efficient cargo operation in one of the world's biggest ports, Singapore</p>
          <p>Effectively supervised the compliance of the Standard Operating Procedures by providing trainings to stevedores, which increased their competence and knowledge in their certain roles.</p>
        </div>
      </div>  
      <div className='experience_grid'>
        <p>Dec 2018 - May 2019</p>
        <div>
          <b>Business Owner · Water for Less (Water Refilling Station)</b>
          <p>Started our own business. Successfully grow the business to stability by managing and marketing our service directly to consumers.</p>
          <p>Once profitable, I turned it over to the parents for their source of income, that they can manage even during old age.</p>
        </div>
      </div>  
      <div className='experience_grid'>
        <p>Nov 2018</p>
        <div>
          <b>Volunteer · Coast and Waterway Conservation in Auckland</b>
          <p>Volunteered in the conservation program, which has led me closer to nature and learn how to protect it even more.</p>
        </div>
      </div>  
      <div className='experience_grid'>
        <p>Jan 2016- Aug 2018 </p>
        <div>
          <b>Second Officer · NYK-Fil Shipmanagement Inc</b>
          <p>Carried out passage planning as per standards and instruction, ensuring the safety and efficiency of every route while also maintaining the vessel's schedule. </p>
          <p>Two out of three vessels were awarded "Vessel of the Year", in efficiency category.</p>
        </div>
      </div>  
      <div className='experience_grid'>
        <p>Jun 2012 - Oct 2015 </p>
        <div>
          <b>Third Officer · NYK-Fil Shipmanagement Inc</b>
          <p>Aside from the safe navigation of the vessel, crew's personal certificate and document expiry were effectively maintained by automating entry and fetch of data in a file. Said system significantly reduced possible man-made error done in documentations.</p>
        </div>
      </div>
      <Link href="/resume.pdf">
        <b className="flex flex-row mt-7 text-lg">View Résumé <FaArrowRight className='ml-2 mt-1'/></b>
      </Link>
    </div>
  )
}

export default Experience
import React from 'react'
import DevResume from "../pdf/Dev_CV.pdf"

function About() {
  return (
    <section className="About">
      <div className="container">
        <p className='text-center'>
          Hi, I’m <strong>Devanand</strong>, a passionate digital content writer with a knack for crafting words that engage, inspire, and convert. With a deep understanding of SEO, storytelling, and audience needs, I help brands communicate their message clearly and effectively.
        </p>
       
       <div className='container resume-sec my-5'> 
          <div className='resume-header'> 
              <h1 className='text-center'> Resume </h1>
          </div>
          <div className='row  py-4'> 
              <div className='col-md-6 px-5'> 
                <h5> Education </h5>
                <div className='resume-table mb-4'> 
                    <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>
                </div>
                
                <h5> Design Skills </h5>

                <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

                 <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

                 <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

              </div>

               <div className='col-md-6 px-5'> 
                <h5> Education </h5>
                <div className='resume-table mb-4'> 
                    <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>

                     <div className='resume-table-item'> 
                        <h6> Specialization Course </h6>
                        <div className='d-flex'> 
                          <span> 2012 </span>
                          <span> |  Apple Inc. </span>
                        </div>
                        <p> Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor. </p>
                    </div>
                </div>

                 <h5> Design Skills </h5>

                <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

                 <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

                 <p> <b> Html </b> </p> 
                <div id="skill-5ad96c1d540b7c2747627c2701ac13ff" data-value="88" class="skill-container"><div class="skill-percentage"></div></div>

              </div>
             
          </div>
          
          <div className='text-center my-5'> 
             <a className='resume-dwnldbtn' href={DevResume}> Download Resume </a>
          </div>
       </div>

      </div>
    </section>
  )
}

export default About

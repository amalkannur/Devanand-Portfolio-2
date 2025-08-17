import React from 'react'
import { motion } from "framer-motion";
import CardSlider from './CardSlider'

import DevanandImg from "../images/DevanandImg.png"
import DevanandImg2 from "../images/about.png"
import RightArrow from "../images/right-arrow.png"
import Shape1 from "../images/shape.png"
import Shape2 from "../images/shape-2.png"
import Shape3 from "../images/shape-3.png"



function Home() {
  return (
    
    <div className='Home'>
      

    <section className="hero"  >
      {/* start container */}
      <div className="container position-relative">
       
       <div className="row  align-items-center">
        <div className="col-lg-6">
        
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >


                <div className="content-item">
            <p className="text-warning fw-semibold mb-0">Hello! I AM</p>
            
            <h2>  Devanand K </h2>

            <p className="mt-3 text-muted">
              Building simple and beautiful things for complex interfaces is what I
              enjoy most about my work. I am also interested in crafting beautiful
              minimal products and exploring new worlds.
            </p>
            <div className="icon-item mt-4">
              <div className="d-flex">
                <a href="#">
                  <div className="social-icon facebook avatar-sm">
                    <i className="mdi mdi-facebook" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-icon instagram avatar-sm">
                    <i className="mdi mdi-instagram" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-icon twitter avatar-sm">
                    <i className="mdi mdi-twitter" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-icon linkedin avatar-sm">
                    <i className="mdi mdi-linkedin" />
                  </div>
                </a>
                <a href="#">
                  <div className="social-icon pinterest avatar-sm">
                    <i className="mdi mdi-pinterest" />
                  </div>
                </a>
              </div>
            </div>
            <div className="home-link d-inline-block mt-5">
              <div className="d-flex align-items-center">
                <div className="btn-link ">
                  <a href="#" className="text-dark h6">
                    <div className="read-link btn-link-warning">
                      <span>See my work</span>
                    </div>
                  </a>
                </div>
                <div className="btn-link-icon">
                  
                  <img
                    src={RightArrow}
                    alt=""
                    className="img-fluid ms-3"
                  />
                </div>
              </div>
            </div>
          </div>
             
            </motion.div>
        
        </div>
        <div className="col-lg-6 px-3">
          <div className="my-image">
            <img src={DevanandImg} alt="" className="img-fluid" />

            <div className='my-image shape-2'> 
                <img src={Shape2} alt="" className="img-fluid " />
            </div>

            <div className='my-image shape-3'> 
                <img src={Shape3} alt="" className="img-fluid " />
            </div>
             
          </div>
        </div>
      </div>
      </div>
    </section>



        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
                 <div className="container section about">
                  <div className="about-box">
                    <div className="row">
                      <div className="col-lg-6 position-relative">
                        <div className="image-round" />
                        <div className="about-image p-4 pb-0">
                          <img src={DevanandImg2} alt="" className="img-fluid" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="about-item p-5">
                          <h2 className="display-5 fw-semibold">About Me</h2>
                          <p className="text-muted fs-14">
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using normal distribution of letters, as opposed to using
                            'Content here, content here', making it look like readable English..
                          </p>
                          <ul
                            className="nav nav-pills mb-3 mt-4 pt-2"
                            id="pills-tab"
                            role="tablist"
                          >
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link active"
                                id="pills-home-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-home"
                                type="button"
                                role="tab"
                                aria-controls="pills-home"
                                aria-selected="true"
                              >
                                Skills
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-profile-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-profile"
                                type="button"
                                role="tab"
                                aria-controls="pills-profile"
                                aria-selected="false"
                                tabIndex={-1}
                              >
                                Experience
                              </button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button
                                className="nav-link"
                                id="pills-contact-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-contact"
                                type="button"
                                role="tab"
                                aria-controls="pills-contact"
                                aria-selected="false"
                                tabIndex={-1}
                              >
                                Education
                              </button>
                            </li>
                          </ul>
                          <div className="tab-content" id="pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="pills-home"
                              role="tabpanel"
                              aria-labelledby="pills-home-tab"
                            >
                              <div className="skill-item mt-4 pt-2">
                                <div className="d-flex justify-content-between">
                                  <h6>Development</h6>
                                  <h6>65%</h6>
                                </div>
                                <div className="progress" style={{ height: 5 }}>
                                  <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow={65}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "65%" }}
                                  />
                                </div>
                              </div>
                              <div className="skill-item mt-4 pt-2">
                                <div className="d-flex justify-content-between">
                                  <h6>Design</h6>
                                  <h6>95%</h6>
                                </div>
                                <div className="progress" style={{ height: 5 }}>
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-valuenow={95}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "95%" }}
                                  />
                                </div>
                              </div>
                              <div className="skill-item mt-4 pt-2">
                                <div className="d-flex justify-content-between">
                                  <h6>Branding</h6>
                                  <h6>80%</h6>
                                </div>
                                <div className="progress" style={{ height: 5 }}>
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-valuenow={80}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-profile"
                              role="tabpanel"
                              aria-labelledby="pills-profile-tab"
                            >
                              <div className="experience">
                                <div className="row position-relative">
                                  <div className="col-2">
                                    <div className="border-left" />
                                  </div>
                                  <div className="col-10">
                                    <div className="mt-4 pt-2">
                                      <h5>Developer</h5>
                                      <p className="text-muted fs-15">
                                        2000-2004 (4 year Experience)
                                      </p>
                                      <p className="text-muted fs-15">
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have fered altation in some
                                        form, by injmour, or randomised words which don't look
                                        even slightlievable.{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="pills-contact"
                              role="tabpanel"
                              aria-labelledby="pills-contact-tab"
                            >
                              <div className="experience">
                                <div className="row position-relative">
                                  <div className="col-2">
                                    <div className="border-left" />
                                  </div>
                                  <div className="col-10">
                                    <div className="mt-4 pt-2">
                                      <h5>Basic Computer Application</h5>
                                      <p className="text-muted fs-15 mb-0">
                                        1996-1998 (3 year)
                                      </p>
                                      <p className="text-muted fs-15 mb-0">
                                        There are many variations of passages of Lorem Ipsum
                                        available.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="row position-relative">
                                  <div className="col-2">
                                    <div className="border-left" />
                                  </div>
                                  <div className="col-10">
                                    <div className="mt-4 pt-2">
                                      <h5>Mastar Computer Application</h5>
                                      <p className="text-muted fs-15 mb-0">
                                        1999-2000 (2 year)
                                      </p>
                                      <p className="text-muted fs-15">
                                        The majority have fered altation in some form, by
                                        injmour, or randomised words which don't look even
                                        slightlievable.{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </motion.div>

          


  
   <div className="section service" id="service">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
                  <div className="text-center mb-5">
                      <h6 className="mb-0 text-muted fs-15">WHAT WE OFFER</h6>
                      <h2>Affordable Services</h2>
                      <p className="para-width text-muted mb-0 fs-15">
                        {" "}
                        is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley
                      </p>
                    </div>
            
          </motion.div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-purple text-center">
                <i className="mdi mdi-cached fs-24 text-purple" />
              </div>
              <h6 className="mt-4">Lorem Ipsum Dolor</h6>
              <p className="text-muted fs-15">
                {" "}
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-danger text-center">
                <i className="mdi mdi-comment-plus-outline fs-24 text-danger" />
              </div>
              <h6 className="mt-4"> Lorem Ipsum Dolor </h6>
              <p className="text-muted fs-15">
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-warning text-center">
                <i className="mdi mdi-layers fs-24 text-warning" />
              </div>
              <h6 className="mt-4">Lorem Ipsum Dolor</h6>
              <p className="text-muted fs-15 ">
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-blue text-center">
                <i className="mdi mdi-inbox-arrow-up fs-24 text-blue" />
              </div>
              <h6 className="mt-4"> Lorem Ipsum Dolor </h6>
              <p className="text-muted fs-15">
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-primary text-center">
                <i className="mdi mdi-chart-line fs-24 text-primary" />
              </div>
              <h6 className="mt-4">Lorem Ipsum Dolor</h6>
              <p className="text-muted fs-15">
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="info-item box-shadow mt-4 pt-2">
            <div className="p-4">
              <div className="research avatar-sm bg-soft-pink text-center">
                <i className="mdi mdi-email-open fs-24 text-pink" />
              </div>
              <h6 className="mt-4">Lorem Ipsum Dolor</h6>
              <p className="text-muted fs-15">
                {" "}
                It is a long established fact that a reader will be distracted by
                gnose to keep away for people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div className='section container my-work'> 
     <h2> My Latest Work </h2>
     <p> Prefect solution for digital experience </p>
     <CardSlider />
  </div>

  
  <section className="contact pt-5 pb-0" id="contact">
  <div className="container">
    <div className="shape-1">
      <img src={Shape1} alt="" className="img-fluid" />
    </div>
    <div className="contact-item">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="contact-info">
            <div className="mb-4">
              <h3>Let's Connect</h3>
              <p className="text-muted mb-0">
                Looking for help? Fill the form and start a new adventure.
              </p>
            </div>
            <hr />
            <div className="info-content mt-4">
              <h6>Address :</h6>
              <div className="d-flex">
                <div className="icon">
                  <i className="mdi mdi-home-outline fs-24 text-primary" />
                </div>
                <div className="icon-content ms-3">
                  <p className="mb-0 fs-15">
                    744 New York Ave, Brooklyn, Kings,
                    <br />
                    New York 10224
                  </p>
                </div>
              </div>
            </div>
            <div className="info-content mt-4 pt-2">
              <h6>Phone :</h6>
              <div className="d-flex">
                <div className="icon">
                  <i className="mdi mdi-phone-outline fs-24 text-primary" />
                </div>
                <div className="icon-content ms-3">
                  <p className="mb-0 fs-15">(+642) 245 356 432</p>
                  <p className="mb-0 fs-15">(+420) 336 476 328</p>
                </div>
              </div>
            </div>
            <div className="info-content mt-4 pt-2">
              <h6>Support :</h6>
              <div className="d-flex">
                <div className="icon">
                  <i className="mdi mdi-email-outline fs-24 text-primary" />
                </div>
                <div className="icon-content ms-3">
                  <p className="mb-0 fs-15">hellosuppot@gmail.com</p>
                  <p className="mb-0 fs-15">help@.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 ">
          <div className="custom-form mt-4 ">
            <form method="post" name="myForm" onsubmit="return validateForm()">
              <h6 className="mb-0 text-muted">Let's talk</h6>
              <h3>Enter your project details</h3>
              <p className=" fs-15 text-muted">
                Content here, content here', making it look like readable
                English. Many desktop publishing packages.
              </p>
              <p id="error-msg" style={{ opacity: 1 }}>
                {/* <div class="alert alert-warning">*Please enter a Name*</div> */}
              </p>
              <div id="simple-msg" />
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-control contact-form"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-control contact-form"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      type="text"
                      className="form-control contact-form"
                      id="subject"
                      placeholder="Your Subject.."
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      rows={4}
                      className="form-control contact-form h-auto"
                      placeholder="Your message..."
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-lg-12 d-grid">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    className="submitBnt btn btn-rounded btn-primary hover-lift"
                    defaultValue="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-2">
      <img src="images/testi/shape-2.png" alt="" className="img-fluid" />
    </div>
    <div className="shape-3 ">
      <img src="images/testi/shape-3.png" alt="" className="img-fluid" />
    </div>
  </div>
</section>


  





 


  

</div>
  )
}

export default Home

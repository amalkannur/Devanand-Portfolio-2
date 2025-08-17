import React from 'react'
import DevanImg from "../images/DevanandImg.png"


function About() {
  return (
    <section className="About">
      
      <div className="container">
        <div className="row">
          <div className="col-md-4 px-2">
            <img className='abt-img' src={DevanImg} alt="" />
            <h4> Lorem Ipsum </h4>
            <p> Lorem ipsum doloe dehj amet in csggb hyu ihshd sdsdd aass as </p>
            <div className="d-flex">
              <a href="#">
                <div className="social-icon facebook avatar-xs">
                  <i className="mdi mdi-facebook " />
                </div>
              </a>
              <a href="#">
                <div className="social-icon instagram avatar-xs">
                  <i className="mdi mdi-instagram " />
                </div>
              </a>
              <a href="#">
                <div className="social-icon twitter avatar-xs">
                  <i className="mdi mdi-twitter" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon linkedin avatar-xs">
                  <i className="mdi mdi-linkedin" />
                </div>
              </a>
              <a href="#">
                <div className="social-icon pinterest avatar-xs">
                  <i className="mdi mdi-pinterest" />
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-8 px-2">
            <h2> About ME</h2>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button className='abt-btn hover-lift'> Contact me </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About

import React from 'react'
import LogoLight from "../images/logo-light.png"

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="mt-4">
              <a className=" logo text-uppercase" href="index.html">
                <img src={LogoLight}  className="logo-light"  alt=""  height={32}  />
                {/* <img src="images/logo-light.png" class="logo-dark" alt="" height="28"> */}
              </a>
              <p className="fs-15 text-white-50 mt-4">
                A Private Limited is the most popular type of partnership Malta. The
                limited liability is, in fact, the only type of company allowed by
                Companies.
              </p>
              <div className="icon-item mt-4">
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
            </div>
          </div>
          <div className="col-lg-3 mt-4">
            <h5 className="text-white">Company</h5>
            <ul className="footer-text list-unstyled mt-4">
              <li>
                <a href="#">
                  <i className="mdi mdi-arrow-right me-2" />
                  Security &amp; Provciy
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="mdi mdi-arrow-right me-2" />
                  Lorem ipsum
                </a>
              </li>
             
              <li>
                <a href="#">
                  <i className="mdi mdi-arrow-right me-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="mdi mdi-arrow-right me-2" />
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5 mt-4">
            <h5 className="text-white">Linkedin</h5>
            <div className="row">
              <div className="col-lg-10">
                <div className="linkedin-box mt-4">
                  <p className="mb-0 text-white-50 fs-15 mb-2">
                    The full monty spiffing good time .
                  </p>
                  <a href="#" className="fs-15">
                    @Devanand.com
                  </a>
                </div>
              </div>
            </div>
            <div className="linkedin-content d-flex align-items-center">
              <div className="icon">
                <i className="mdi mdi-linkedin text-white fs-40" />
              </div>
              <div className="icon-content ms-2">
                <a href="#" className="text-white-50">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>    
  </footer>
  )
}

export default Footer

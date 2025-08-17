import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Submitted Data:", formData);
    alert("Message submitted successfully!");
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="Contact">
      <div className="container">
        <h2 className="text-start">Contact Me</h2>
        <p  className="text-start">If you'd like to work together or just say hello, feel free to reach out.  </p>

           <div className="row"> 
              <div className="col-md-6 d-flex align-items-end"> 
                 <div className="contact-info text-start">
                  <h2>Contact Me</h2>
                      <p> " If you'd like to work together or just say hello, feel free to reach out. " </p>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt" />
                    <span>123 Main Street, Trivandrum, India</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-envelope" />
                    <span>amalashok.knr@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone-alt" />
                    <span>+91 8921112198</span>
                  </div>
                </div>
              </div> 
              <div className="col-md-6"> 
                  <form onSubmit={handleSubmit} className="contact-form d-flex flex-column">
                    <h2> Send Message </h2>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  
                  <button className="send-btn hover-lift" type="submit">Send Message</button>
                </form>
              </div>
           </div>
        
       
      </div>
    </section>
  );
};

export default Contact;

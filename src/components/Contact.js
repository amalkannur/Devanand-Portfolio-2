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
    <section className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you'd like to work together or just say hello, feel free to reach out.</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
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
          
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: <a href="mailto:devanandwrites@gmail.com">devanandwrites@gmail.com</a></p>
          {/* Optional: Add LinkedIn or other social links here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

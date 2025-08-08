import React from 'react'

function Portfolio() {
  return (
    <section className="portfolio-section">
        <div className="container">
        <h2>My Portfolio</h2>
        <p className="intro">Here are some of my recent writing projects.</p>
        <div className="portfolio-grid">
            {/* {portfolioItems.map((item, index) => (
            <div className="portfolio-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>
            ))} */}

            <div className="portfolio-card" >
                <h3>Demo </h3>
                <p> item.description</p>
                <a href="#" target="_blank" rel="noopener noreferrer">
                View Project
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Portfolio

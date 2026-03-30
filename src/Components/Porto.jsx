import React from 'react'
// import './Porto.css'
import Port1 from '../assets/images/port1.avif'
import Port2 from '../assets/images/port2.avif'
import Port3 from '../assets/images/port3.avif'
import '../App.css'
const Porto = () => {
  return (
    <div className='portfolios'>
      <div className="main-container">
        <h3 className="pre-title" data-aos="fade-up" data-aos-delay="200" data-aos-animate="aos-init aos-animate">My Works</h3>
        <h1 className="section-title" data-aos="fade-up" data-aos-delay="300" data-aos-animate="aos-init aos-animate">Featured Portfolios</h1>

        <div className="grid-3" data-aos="fate-up">
          
          <div className="portfolio" data-aos="fade-up" data-aos-delay="400" data-aos-animate="aos-init aos-animate">
            <div className="portfolio-cover">
              <img src={Port1} alt="Portfolio 1"/>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Number one</h4>
                <a href="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="portfolio-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                    />
                  </svg>
                </a>
              </div>
              <div className="portfolio-tags"> 
                <div>React</div>
                <div>Tailwind</div>
              </div>
            </div>
          </div>

          
          <div className="portfolio" data-aos="fade-down" data-aos-delay="600" data-aos-animate="aos-init aos-animate">
            <div className="portfolio-cover">
              <img src={Port2} alt="Portfolio 2"/>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Number two</h4>
                <a href="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="portfolio-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                    />
                  </svg>
                </a>
              </div>
              <div className="portfolio-tags">
                <div>Vue</div>
                <div>Contentful</div>
              </div>
            </div>
          </div>
         
          <div className="portfolio" data-aos="fade-up" data-aos-delay="800" data-aos-animate="aos-init aos-animate">
            <div className="portfolio-cover">
              <img src={Port3} alt="Portfolio 3"/>
            </div>
            <div className="portfolio-info">
              <div className="portfolio-title">
                <h4>Number tree</h4>
                <a href="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="portfolio-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"
                    />
                  </svg>
                </a>
              </div>
              <div className="portfolio-tags"> 
                <div>React</div>
                <div>Materialize</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Porto

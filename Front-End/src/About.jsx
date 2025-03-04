import React from 'react'
import Navb from './Navb'
import './About.css'
import Footer from './Footer'

function About() {
    return (
        <div>
            <div className='navabout'>
                <Navb />
            </div>

            <div className='bdabout'>
                <div class="containerabout">
                    <div class="about-card">
                        <h2 className='h2about'>PERFORMANCE</h2>
                        <p className='paraabout'>Car performance is influenced by multiple factors, including engine power, fuel efficiency, aerodynamics, and handling. High-performance cars focus on speed, acceleration, and agility, often featuring powerful engines and advanced suspension systems. On the other hand, everyday vehicles prioritize reliability, comfort, and fuel economy, making them ideal for daily commuting. Technological advancements have significantly improved braking systems, safety features, and hybrid or electric powertrains, enhancing both efficiency and sustainability. Whether it's a sports car built for thrill or a family sedan for convenience, modern automobiles continue to evolve, offering a balance between performance, efficiency, and innovation.</p>
                    </div>
                </div>
                <div class="containerabout">
                    <div class="about-card">
                        <h2 className='h2about'>DESIGN</h2>
                        <p className='paraabout'>Car design is a combination of aesthetics, functionality, and innovation. It encompasses everything from the sleek, aerodynamic shape of the exterior to the ergonomic and tech-enhanced interiors. Designers focus on creating visually appealing vehicles while ensuring comfort, safety, and efficiency. Modern materials, such as lightweight alloys and sustainable composites, help improve fuel economy and performance. Additionally, advanced features like LED lighting, panoramic sunroofs, and digital dashboards enhance both style and usability. Whether it's a luxury sedan or a rugged SUV, car design continues to evolve, blending creativity with cutting-edge technology to shape the future of transportation.</p>
                    </div>
                </div>
                <div class="containerabout">
                    <div class="about-card">
                        <h2 className='h2about'>SAFETY</h2>
                        <p className='paraabout'>Car safety is a crucial aspect of modern automobile design, ensuring the protection of drivers, passengers, and pedestrians. Vehicles are now equipped with advanced safety features such as airbags, anti-lock braking systems (ABS), electronic stability control, and collision avoidance technology. Structural integrity, including reinforced frames and crumple zones, plays a key role in minimizing impact damage. Additionally, modern cars incorporate driver-assist technologies like lane departure warnings, adaptive cruise control, and automatic emergency braking to prevent accidents. Continuous innovation in automotive safety aims to reduce road fatalities and enhance overall driving security.</p>
                    </div>
                </div>
                <div class="containerabout">
                    <div class="about-card">
                        <h2 className='h2about'>CUSTOMER REVIEWS</h2>
                        <p className='paraabout'>Customer reviews play a crucial role in assessing a car's overall quality and performance. Many drivers appreciate vehicles that offer a perfect balance of comfort, fuel efficiency, and safety, while others prioritize power, speed, and advanced technology. Positive feedback often highlights smooth handling, durability, and interior comfort, while some concerns may revolve around fuel consumption, maintenance costs, or specific feature limitations. Real-world experiences shared by customers provide valuable insights for potential buyers, helping them make informed decisions before investing in a vehicle.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
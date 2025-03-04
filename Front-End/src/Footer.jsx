import React from 'react'
import './Footer.css'

function Footer() {

    return (
        <>
            <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h6>Nitro-Wheels</h6>
            <p>
            Nitro-Wheels is a leading automotive brand committed to innovation, performance, and style. We offer a diverse range of high-quality vehicles, from powerful sports cars to eco-friendly electric models, ensuring an exceptional driving experience for every customer.
            </p>
          </div>

          <div className="footer-section">
            <h6>Products</h6>
            <ul>
              <li><a href="#">MDBootstrap</a></li>
              <li><a href="#">MDWordPress</a></li>
              <li><a href="#">BrandFlow</a></li>
              <li><a href="#">Bootstrap Angular</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6>Useful Links</h6>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Become an Affiliate</a></li>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h6>Contact</h6>
            <p><i className="fas fa-home"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope"></i> info@gmail.com</p>
            <p><i className="fas fa-phone"></i> +01 234 567 88</p>
            <p><i className="fas fa-print"></i> +01 234 567 89</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Nitro-Wheels. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social"><i className="fab fa-google"></i></a>
            <a href="#" className="social"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
        </>
    )
}

export default Footer
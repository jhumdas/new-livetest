import React from 'react'
import logo from '../images/logo.png'
export default function Footer() {
  return (
    <>

      <footer className='footer'>
        <div className='container'>
          <div className='wrap'>
            <div className='leftBox'>
              <img src={logo} />
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              <span>Copyright © All rights reserved</span>
            </div>
            <div className='rgtBox'>
              <ul>
                <h5>SUPPORT</h5>
                <li><a>About</a></li>
                <li><a>Contact Us</a></li>
                <li><a>Privacy & Policy</a></li>
              </ul>
              <ul>
                <h5>Service</h5>
                <li><a>E Store</a></li>
                <li><a>Bushido</a></li>
                <li><a>Podcast</a></li>
                <li><a>OTT</a></li>
                <li><a>Partners</a></li>
                <li><a>Learning</a></li>
                <li><a>virtual id card</a></li>
                <li><a>News</a></li>
                <li><a>Business</a></li>
              </ul>
              <ul>
                <h5>About</h5>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
                <li><a>lorem ipsum</a></li>
              </ul>
              <div className='social-media'>
                <h5>Social Link</h5>
                <div>
                <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

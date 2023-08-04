import React from 'react'
import a from "../../images/pana2.png"
import b from '../../images/Vector 6.png'
import c from '../../images/pana.png'
import d from '../../images/Charity-cuate 1.82a746d10aacb163d065.png'
import e from '../../images/pana3.png'
import f from '../../images/pana4.png'
import g from '../../images/rafiki.png'
import About from './About'
import Gallery from './Gallery'
import Newsletter from './Newsletter'
import Application from './Application'
import Faq from './Faq'
import Recharge from './Recharge'
import Transaction from './Transaction'
import DigitalMoney from './DigitalMoney'
import bannerimage from '../../images/New Project (1).png'

export default function index() {
  return (
    <>
      <DigitalMoney />
      <section className='zigzag' style={{ background: "#F7F7F7" }}>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-6 col-md-6 col-12 orderTwo'>
              <div className='right'>
                <h3>Welcome to the Power of Bushido SuperAPP

                </h3>
                <ul>
                  <li>
                    <span>
                      Bushido is a global community of like-minded souls who are commitment to making a difference and motivated to achieve extraordinary growth.


                    </span>
                  </li>

                  <a href="#" className='exploreBtn'>Explore</a>
                  <div className='btnGroup'>
                    <div className='p-btn'>Community projects </div>
                    <div className='p-btn'>Funding
                    </div>
                    <div className='p-btn'>Market Place
                    </div>
                    <div className='p-btn'>Loyalty and Rewards
                    </div>
                  </div>
                </ul>

              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 orderOne'>
              <div className='left'>
                <img src={c} />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Recharge />
      <section className='zigzag FirstStep' style={{ backgroundImage: `url('${b}')`, position: 'relative' }}>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='left'>
                <img src={a} />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='right'>
                <h3> Buy & sell your products in The Bushido in APP market place
                </h3>
                <ul>
                  <li>
                    {/* Increase on-site conversions with social galleries */}

                    <span>Bushido helps businesses to showcase, market and sell their products and services, users can donate to sustainable projects or cash out their commissions and earnings.
                    </span>
                  </li>

                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='zigzag donation'>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='left'>
                <img src={d} />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='right'>
                <h3>Enhancing Humanity and Purpose</h3>
                <p className='mb-2'>The Bushido digital platform helps individuals and communities enhance their social and impact footprint.

                </p>
                <ul>

                  <li>

                    <span>Augment “matched funding” and sponsorship opportunities.</span>
                  </li>
                  <li>

                    <span>Social Entrepreneurship </span>
                  </li>
                  <li>

                    <span>Seek grant funding and sponsorship for both Bushido, businesses and/or other entities
                    </span>
                  </li>
                  <li>

                    <span>Provide startup business advice to those within our community.
                    </span>
                  </li>
                  <li>

                    <span>Create fundraising campaigns, stage events and provide training and resources.
                    </span>
                  </li>
                  <li>

                    <span>Foster creative content development.
                    </span>
                  </li>
                  <li>

                    <span>Financing and delivering affordable housing projects.

                    </span>
                  </li>
                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <section className='zigzag bigger' style={{ backgroundImage: `url('${bannerimage}')`, position: 'relative' }}>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>

            <div className='col-lg-6 col-md-6 col-12 orderTwo'>
              <div className='right'>
                <h3>Together we make a bigger difference</h3>
                <ul>
                  <li>
                    <span>Investing in Transformative Change through Community, Social & Impact Investment. </span>


                  </li>
                  <li>
                    <span> Community – use our platform to create online virtual communities and talks / showcases

                    </span>
                  </li>
                  <li>
                    <span> Create new social and impact investing initiatives

                    </span>
                  </li>
                  <li><span>
                    Be part of the one of the biggest personal and business growth platforms which rewards you for making a difference


                  </span>
                  </li>
                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 orderOne'>
              <div className='left'>
                <img src={e} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='zigzag'>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='left'>
                <img src={f} />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12'>
              <div className='right'>
                <h3>You can create easily Virtual ID card</h3>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section> */}
      {/* <section className='zigzag LastStep'>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-6 col-md-6 col-12 orderTwo'>
              <div className='right'>
                <h3>You can  easily enjoy your
                  Favorite movies & episodes</h3>
                <ul>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy
                    <span>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                  </li>
                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 orderOne'>
              <div className='left'>
                <img src={g} />
              </div>
            </div>


          </div>
        </div>
      </section> */}



      <Faq />
      <Application />
      <Newsletter />



    </>
  )
}



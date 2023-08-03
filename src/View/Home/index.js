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

export default function index() {
  return (
    <>
      <DigitalMoney />
      <section className='zigzag' style={{ background: "#F7F7F7" }}>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-7 col-md-7 col-12 orderTwo'>
              <div className='right'>
                <h3>The Power of The Bushido SuperAPP.
                </h3>
                <ul>
                  <li>
                    <span>
                    Get involved, showcase or join communities and Projects

                    </span>
                  </li>
                  <li>
                    <span>Contribute to growth content that helps others prosper and grow</span>


                  </li>
                  <li>
                   <span> Earn Loyalty points and Donate to projects of your choice</span>


                  </li>
                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
            <div className='col-lg-5 col-md-5 col-12 orderOne'>
              <div className='left'>
                <img src={c} />
              </div>
            </div>

          </div>
        </div>
      </section>
      <Transaction />
      <Recharge />
      <section className='zigzag FirstStep' style={{ backgroundImage: `url('${b}')`, position: 'relative' }}>
        <div className='cust-container'>
          <div className='row' style={{ alignItems: "center" }}>
            <div className='col-lg-5 col-md-5 col-12'>
              <div className='left'>
                <img src={a} />
              </div>
            </div>
            <div className='col-lg-7 col-md-7 col-12'>
              <div className='right'>
                <h3>You can easily buy & sell your products in this marketplace</h3>
                <ul>
                  <li>
                    Increase on-site conversions with social galleries

                    <span>Bushido helps businesses to showcase, market and sell – we help them develop affiliate revenues with our innovative conversion technologies. Margins are shared with everyone in their networks, users can donate to sustainable projects or cash out their earnings.
                    </span>
                  </li>

                  <a href="#" className='exploreBtn'>Explore</a>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
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
                <h3>For Humanity purpose Donation & Charity</h3>
                <p className='mb-2'>A digital platform where the providers of Community, Social & impact investment opportunities can meet those that are interested in Community, Social & Impact Investing.
                  </p>
                <ul>
              
                  <li>

                    <span>Augment “matched funding” and sponsorship opportunities.</span>
                  </li>
                  <li>

                    <span>Create learning programmes to promote social entrepreneurship. </span>
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
      <section className='zigzag'>
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



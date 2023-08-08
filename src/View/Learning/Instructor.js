import React from 'react'
import bb from '../../images/Ellipse 323.png'
export default function Instructor() {
    return (
        <>

            <div className='wrap instructor-detail'>
                <ul className='instructor mr-4'>
                    <img src={bb} />
                </ul>
                <ul className=''>
                    <li className='A'>Instructor Details</li>
                    <li className='B'>Chance Torff</li>
                    <li className='C'>IT Software Consultant</li>

                </ul>

            </div>
            <div className='d-flex review-no'>
                <div>
                    <span>Reviews</span>
                    <h2>20,000</h2>
                </div>
                <div className='ml-4'>
                    <span>Total students</span>
                    <h2>17,000</h2>
                </div>
            </div>

            <div className='social-media'>
                <h4>Social Links</h4>
                <div><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-linkedin"></i><i class="fa-brands fa-youtube"></i></div>
            </div>

            <div className='ins-about'>
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur. Amet congue pellentesque sit vestibulum sed commodo id neque sit. Sit tristique risus scelerisque sagittis ac nisl velit integer fringilla. Pulvinar ac et ut in purus. Fermentum in lacus etiam sit amet. Ac augue elit morbi est elementum dictum velit vitae dapibus. Iaculis rutrum porttitor morbi sed. Mi morbi dictum condimentum felis. Et mauris ultricies posuere at nisi semper dolor urna. Cursus ullamcorper eget dignissim in ullamcorper porttitor urna.</p>
            </div>

        </>
    )
}

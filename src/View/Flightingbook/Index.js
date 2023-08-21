import React from 'react';
import airplane from '../../images/airplane.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import flight_img_sld from '../../images/flight_img_sld.png'
import bushido_logo from "../../images/bushido_logo.png";
import airplane_img from "../../images/airplane_img.png";

export default function Index() {
    const loop = [1, 2, 3, 4, 5];

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2.10,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <section className='flightbook_main'>
                <div className='flight_book_bg'></div>
                <div className='container'>
                    <div className='flight_book_box'>
                        <div className='flight_img_txt'>
                            <div className='flight_img'>
                                <img src={airplane} alt='/' />
                            </div>
                            <p className='flighimg_txt'>Flight Booking</p>
                        </div>

                        <div className='flight_book_way'>
                            <div class="flight_way">
                                <div className='flight_input_txt'>
                                    <input type="radio" id="" name="crd" class="input-radio on" value="">
                                    </input>
                                </div>
                                <div className='flight_way_txt'>
                                    <p className='flight_way_txt_ppp'>One Way</p>
                                </div>
                            </div>
                            <div class="flight_way">
                                <div className='flight_input_txt'>
                                    <input type="radio" id="" name="crd" class="input-radio on" value="">
                                    </input>
                                </div>
                                <div className='flight_way_txt'>
                                    <p className='flight_way_txt_ppp'>Round Trip</p>
                                </div>
                            </div>
                        </div>

                        <div className='flight_form'>

                        </div>
                    </div>
                    {/* bushido react slick */}
                    <div className='flight_book_slckslide'>
                        <Slider {...settings}>
                            {loop.map((key, index) => {

                                return (
                                    <div className='bushido_flight'>
                                        <div className='bushido_flight_dcnmt'>
                                            <div className='bushido_flight_img_logo_flx'>
                                                <div className='bushido_flight_img'>
                                                    <img src={airplane_img} alt="/" />
                                                </div>

                                                <div className='bushido_img_logo'>
                                                    <img src={bushido_logo} alt="/" />
                                                </div>



                                            </div>
                                            <div className='bushido_txt_dcmnt'>
                                                <h4>Grab upto $1000</h4>
                                                <h4>Cashback on Domestic Flight</h4>
                                            </div>

                                            <div className='srch_flght_btn'>
                                                <a href="/" className='srch_flght_btn_rd'>Search Flight</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}




                        </Slider>
                    </div>

                    {/* bushido_srch_flight_lst */}
                    <div className='flght_srch_frm_to_main'>
                        <div className='flght_srch_frm_to'>
                            <div className='flght_srch_frm_to_flx table-responsive'>
                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>Manchester <span>(MAN)</span> <i class="fa-solid fa-minus"></i> Manchester  <span>(MAN)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <table className='table'>
                                    <tbody>
                                        <tr style={{}}>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>


                        </div>
                    </div>

                    <div className='flght_srch_frm_to_main'>
                        <div className='flght_srch_frm_to'>
                            <p className='tp_internrts'>Top International Routes</p>
                            <div className='flght_srch_frm_to_flx table-responsive'>

                                <table className='table'>
                                    <tbody>
                                        <tr>
                                            <td >
                                                <div className='placefrm'>London<span>(LHR)</span> <i class="fa-solid fa-minus"></i>Delhi<span>(DEL)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>London<span>(LHR)</span> <i class="fa-solid fa-minus"></i>Delhi<span>(DEL)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>



                                        <tr>
                                            <td >
                                                <div className='placefrm'>London<span>(LHR)</span> <i class="fa-solid fa-minus"></i>Delhi<span>(DEL)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                            <td >
                                                <div className='placefrm'>London<span>(LHR)</span> <i class="fa-solid fa-minus"></i>Delhi<span>(DEL)</span>
                                                    <a href="#" className='btnsrchflght'>Search Flight</a>
                                                </div>
                                                <div className='' style={{ borderBottom: "1px solid #D9D9D9", marginTop: "15px" }}></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

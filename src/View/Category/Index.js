import React from 'react'
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import best_selling1 from '../../images/best_selling1.png';
import best_selling2 from '../../images/best_selling2.png';
import best_selling3 from '../../images/best_selling3.png';
import best_selling_icon from '../../images/best_selling_icon.png';
export default function Index() {
    const handleClickFilteropen =()=>{
        document.getElementById('filterPart').style.display="block";
    }
    const handleClickFilterclose =()=>{
        document.getElementById('filterPart').style.display="none";
    }
    const [value, setValue] = React.useState("12.85");
    const [value2, setValue2] = React.useState("80.85");



    var settings1 = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
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

            <section className='category'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-12 col-12'>

                            <div className='sidewrap'>
                                <div className='filterIcon'><a href="#" onClick={handleClickFilteropen}><i class="fa-solid fa-sliders"></i></a></div>

                                <div className='filterPart' id='filterPart'>
                                <a className='filterCloseBtn' onClick={handleClickFilterclose}><i class="fa-solid fa-xmark"></i></a>
                                    <h4>Categories</h4>
                                    <a className='shoe'>Shoes</a>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Men's
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                                        <label className="form-check-label" htmlFor="gridCheck">
                                            Women’s
                                        </label>
                                    </div>
                                    <div className='price mt-3 mb-3'>
                                        <h5>Price</h5>
                                        <div class="slider">

                                            <div class="slider__input range-slide">
                                                {/* <div className="slide">
                                                <div className="line" id="line" style={{ left: "0%", right: "0%" }} />
                                                <span className="thumb" id="thumbMin" style={{ left: "0%" }} />
                                                <span className="thumb" id="thumbMax" style={{ left: "100%" }} />
                                            </div> */}
                                                <input
                                                    className="slider__input_slider"
                                                    type="range"
                                                    min="0"
                                                  
                                                    step="0.05"
                                                    value={value}
                                                    onChange={e => setValue(e.target.value)}
                                                />
                                                <input
                                                    className="slider__input_slider"
                                                    type="range"
                                                   
                                                    max="100"
                                                    step="0.05"
                                                    value={value2}
                                                    onChange={e => setValue2(e.target.value)}
                                                />

                                            </div>
                                            <div className='display'>
                                                <p> ${value}</p>
                                                <p> ${value2}</p>
                                            </div>
                                        </div>


                                        {/* <div className="range-slide">
                                            <div className="slide">
                                                <div className="line" id="line" style={{ left: "0%", right: "0%" }} />
                                                <span className="thumb" id="thumbMin" style={{ left: "0%" }} />
                                                <span className="thumb" id="thumbMax" style={{ left: "100%" }} />
                                            </div>
                                            <input
                                                id="rangeMin"
                                                type="range"
                                                max={100}
                                                min={10}
                                                step={5}
                                                defaultValue={0}
                                            />
                                            <input
                                                id="rangeMax"
                                                type="range"
                                                max={100}
                                                min={10}
                                                step={5}
                                                defaultValue={100}
                                            />
                                        </div>
                                        <div className="display">
                                            <span id="min">10</span>
                                            <span id="max">100</span>
                                        </div> */}



                                    </div>
                                    <div id="accordion" role="tablist" aria-multiselectable="true">

                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingFour">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyFour"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyFour"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Brands</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyFour"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingFour"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    Puma
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    Nike
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    Adidas
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    Woodland
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    Sparx
                                                                </label>
                                                            </div>
                                                            <span className='more-disc'>More 500 Brands</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingThree">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyThree"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyThree"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Size - UK</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyThree"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingThree"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    2.5
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    3.5
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    4.5
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    5.5
                                                                </label>
                                                            </div>

                                                            <span className='more-disc'>10 More size </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingTwo">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyTwo"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyTwo"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Color</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyThree"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingTwo"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    2.5
                                                                </label>
                                                            </div>



                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingOne">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodyOne"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodyOne"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Type</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodyOne"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingOne"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    Casual
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    Party
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    Sports
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    Weeding
                                                                </label>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" role="tab" id="accordionHeadingSix">
                                                <div className="mb-0 row">
                                                    <div className="col-12 no-padding accordion-head">
                                                        <a
                                                            data-toggle="collapse"
                                                            data-parent="#accordion"
                                                            href="#accordionBodySix"
                                                            aria-expanded="false"
                                                            aria-controls="accordionBodySix"
                                                            className="collapsed"
                                                        >
                                                            <i className="fa fa-angle-down" aria-hidden="true" />
                                                            <h3>Discount Range</h3>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                id="accordionBodySix"
                                                className="collapse"
                                                role="tabpanel"
                                                aria-labelledby="accordionHeadingSix"
                                                aria-expanded="false"
                                                data-parent="accordion"
                                                style={{}}
                                            >
                                                <div className="card-block col-12">
                                                    <div className="widget dz-widget_services d-flex justify-content-between">
                                                        <div className="">
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    10% Discount
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    20% Discount
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    30% Discount
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    40% Discount
                                                                </label>
                                                            </div>
                                                            <div className="form-check search-content">
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    50% Discount
                                                                </label>
                                                            </div>
                                                            <span className='more-disc'>2 More Discounts</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-9 col-md-12 col-12 mt-3'>
                            <div>
                                <form action="">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search for products"
                                        />
                                        <div className="searchIcon">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgBvZaBcYMwDEU/maAbVBuk3UCbdISyQegEzQbQCTJC6QTJBkkmIBu09iHHhtrgFDXv7p8PEPoSJMIF8mAjElkuRgejFgqQ0btRZ/Sd0NGohi8gSZE4/2pUGT3I8Ql99Wc5Xkvyp+AeG/+GTGziHXzFtlqeiCejJojfwRc3iTM5zhiMYbnHmU2yCUwIt0OBWTkV5Npn/B2WHB0Sxdbw72QpjeTaxi66lgnLYfiuohf20MMVzu7ECv6/cIYeX7JSaOR+9wfocYoZ3YVV4P4IPdayXmJGDD1I1l+vw01oho6JmzBX3Dv6kPUFy9nI2iJRhUZXDD/KKBVUQm+oVnPBGp+JrFEW+/DRjEEdxHe48alUGO4N9lJAJaox7MAalBg+vmwzG9SMEo5lDbajhFGzAnkw+uEbblasWqSL/JTVxj3jHyH0HVW4A9cd0Q+LBXxOweEU5gAAAABJRU5ErkJggg==" />
                                        </div>
                                    </div>
                                </form>
                                <div className='shop_best_selling_prdt pb-0'>
                                    <div className=''>

                                        <Slider {...settings1}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className='shop_best_selling_prdt pb-0'>
                                    <div className=''>

                                        <Slider {...settings1}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                                <div className='shop_best_selling_prdt pb-0'>
                                    <div className=''>

                                        <Slider {...settings1}>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>

                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling1} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling2} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='best_selling_product'>
                                                <div className='best_selling_product_bg_img_txt'>
                                                    <div className='best_selling_product_bg'>
                                                        <img src={best_selling3} alt='/'></img>
                                                        <div className='best_selling_product_icon'>
                                                            <img src={best_selling_icon} alt='' />
                                                        </div>
                                                    </div>
                                                    <div className='best_selling_product_txt_main'>
                                                        <h4 className='best_selling_product_txt1'>
                                                            Product Name
                                                        </h4>
                                                        <p className='best_selling_product_txt2'>
                                                            $ 100
                                                        </p>
                                                    </div>

                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

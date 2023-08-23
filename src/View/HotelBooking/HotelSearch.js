import React from 'react'
import icon3 from '../../images/cart.png';
import d from '../../images/Rectangle 522.png';
import f from '../../images/system_uicons_filtering.png'
export default function HotelSearch() {
    return (
        <>
            <div className='container mt-5'>
                <div className='all_course category hotel-search'>

                    <div className='row'>
                        <div className='col-lg-3 col-md-5 col-12'>
                            <div className='sidewrap'>

                                <div className='pop-select pb-3' style={{ justifyContent: "space-between", border: "0" }}>
                                    <div><img src={f} /><span>Filter </span></div>
                                    <div>Clear all</div>
                                </div>
                                <div id="accordion" role="tablist" aria-multiselectable="true">
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
                                                        <h3>Popular Filters</h3>
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
                                                                Free Cancellation
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
                                                                Book@ $1
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
                                                                Pay At Hotel Avalable
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
                                                                Free Breakfast Included
                                                            </label>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                        <h3>Price Range</h3>
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
                                                                Upto $3,000
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
                                                                $4,000 - $6,000
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
                                                                $7,000 - $9,000
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
                                                                $10,000+
                                                            </label>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="accordionHeadingFive">
                                            <div className="mb-0 row">
                                                <div className="col-12 no-padding accordion-head">
                                                    <a
                                                        data-toggle="collapse"
                                                        data-parent="#accordion"
                                                        href="#accordionBodyFive"
                                                        aria-expanded="false"
                                                        aria-controls="accordionBodyFive"
                                                        className="collapsed"
                                                    >
                                                        <i className="fa fa-angle-down" aria-hidden="true" />
                                                        <h3>Rating</h3>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="accordionBodyFive"
                                            className="collapse"
                                            role="tabpanel"
                                            aria-labelledby="accordionHeadingFive"
                                            aria-expanded="false"
                                            data-parent="accordion"
                                            style={{}}
                                        >
                                            <div className="card-block col-12">
                                                <div className="widget dz-widget_services">
                                                    <div className="">
                                                        <div className="form-check search-content">
                                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                                <input
                                                                    name="language[]"
                                                                    id="allLanguage"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="all"
                                                                />
                                                                <label className="form-check-label" htmlFor="allLanguage">
                                                                    5.0
                                                                </label>
                                                            </div>
                                                            <div> <span className='star'>
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                            </span></div>
                                                            <div><span>(12,000)</span></div>
                                                        </div>
                                                        <div className="form-check search-content">
                                                            <div>
                                                                <input
                                                                    name="language[]"
                                                                    id="English"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="English"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="English">
                                                                    4.5
                                                                </label>
                                                            </div>
                                                            <div> <span className='star'>
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                            </span></div>
                                                            <div><span>(10,000)</span></div>
                                                        </div>
                                                        <div className="form-check search-content">
                                                            <div>
                                                                <input
                                                                    name="language[]"
                                                                    id="Bengali"
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    defaultValue="Bengali"
                                                                    onclick="ifAllSelected()"
                                                                />
                                                                <label className="form-check-label" htmlFor="Bengali">
                                                                    4.0
                                                                </label>
                                                            </div>
                                                            <div> <span className='star'>
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                            </span></div>
                                                            <div><span>(8,000)</span></div>
                                                        </div>
                                                        <div className="form-check search-content">
                                                            <div>
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
                                                            <div> <span className='star'>
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                                <i className="fa-solid fa-star" />
                                                            </span></div>
                                                            <div>
                                                                <span>(6,000)</span></div>
                                                        </div>

                                                       
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
                                                        <h3>Flooding & Dining  </h3>
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
                                                                Breakfast Included
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
                                                                Breakfast & Dinner Included
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
                                                                All Meals Avalable
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
                                                        <h3>Suggested for Homestays</h3>
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
                                                            Entire Property
                                                            </label>
                                                        </div>
                                                        <h6>Whole place for private stay</h6>
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
                                                            Caretaker Available 
                                                            </label>
                                                        </div>
                                                        <h6>Local expert for assistance</h6>
                                                    



                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                            

                                </div>


                            </div>
                        </div>
                        <div className='col-lg-9 col-md-7 col-12'>
                            <div className='dream-job course'>
                                <div className='box'>
                                    <div className='imge'>
                                        <img src={d} />
                                    </div>
                                    <div className='popCourse-boxCnt'>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                            <div className="from_icon_whish_cart1">
                                                <a href="/ott-download">
                                                    <img
                                                        src={icon3}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                        <h5><strong>By Angel Levin</strong></h5>
                                        <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div>
                                <div className='box mt-3'>
                                    <div className='imge'>
                                        <img src={d} />
                                    </div>
                                    <div className='popCourse-boxCnt'>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}><h4>Relational Database Design</h4>
                                            <div className="from_icon_whish_cart1">
                                                <a href="/ott-download">
                                                    <img
                                                        src={icon3}
                                                        alt=""
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur. Natoque tempus ut semper at cras.</p>
                                        <h5><strong>By Angel Levin</strong></h5>
                                        <h5><strong style={{ display: "flex", alignItems: "center" }}>5 hours<span className='m-dot Lcourse'></span>36 Lecture<span className='m-dot Lcourse'></span>All Levels</strong></h5>
                                        <h6>4.9<span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span>( 50k)</h6>
                                        <h3>$500</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

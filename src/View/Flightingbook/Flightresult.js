import React from "react";
import airplane from "../../images/airplane.png";
import system_uicons_filtering from "../../images/system_uicons_filtering.png";
import FlightCancell from "../../Component/Modal/FlightCancell";
import FlightDetails from "../../Component/Modal/FlightDetails";
export default function Flightresult() {
  const [value3, setValue3] = React.useState("10000");
  const [value4, setValue4] = React.useState("80000");
  return (
    <>
      <section className="flightreslt_main">
        <div className="flight_book_bg"></div>
        <div className="container">
          <div className="flight_book_box">
            <div className="flight_img_txt">
              <div className="flight_img">
                <img src={airplane} alt="/" />
              </div>
              <p className="flighimg_txt">Flight Booking</p>
            </div>

            <div className="flight_book_way">
              <div class="flight_way">
                <div className="flight_input_txt">
                  <input
                    type="radio"
                    id=""
                    name="crd"
                    class="input-radio on"
                    value=""
                  ></input>
                </div>
                <div className="flight_way_txt">
                  <p className="flight_way_txt_ppp">One Way</p>
                </div>
              </div>
              <div class="flight_way">
                <div className="flight_input_txt">
                  <input
                    type="radio"
                    id=""
                    name="crd"
                    class="input-radio on"
                    value=""
                  ></input>
                </div>
                <div className="flight_way_txt">
                  <p className="flight_way_txt_ppp">Round Trip</p>
                </div>
              </div>
            </div>

            <div className="flight_form"></div>
          </div>

          <div className="flght_fltr">
            <div className="row">
              <div className="col-lg-4 col-xl-4 col-md-12 col-12">
                <div className="side_fltrwrap">
                  <div
                    className="fltr_icon_txt"
                    style={{ borderBottom: "1px solid #716E6E" }}
                  >
                    <div className="fltr_icon">
                      <img src={system_uicons_filtering} alt="/" />
                    </div>
                    <div className="fltr_txt">
                      <h5 className="fltr_txt_hh">Filter</h5>
                    </div>

                    <div className="fltr_clr_all">
                      <h5 className="fltr_clr_all_hhh">Clear All</h5>
                    </div>
                  </div>

                  <div className="stps_fltr">
                    <h4 className="stps_hhh">Stops</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        Non Stop
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        1 Stop
                        <span className="stpspn">$10,000</span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" htmlFor="gridCheck">
                        2 Stop
                      </label>
                    </div>
                  </div>

                  <div className="fltr_prc_main">
                    <div className="fltr_prc_flx">
                      <div className="fltr_prc">
                        <h4>Price</h4>
                      </div>
                      <div className="fltr_prc">
                        <p>
                          {" "}
                          ${value3} - ${value4}{" "}
                        </p>
                      </div>
                    </div>
                    <div class="slider">
                      <div class="slider__input range-slide">
                        <input
                          className="slider__input_slider"
                          type="range"
                          min="10,000"
                          step="0.05"
                          value={value3}
                          onChange={(e) => setValue3(e.target.value)}
                        />
                        <input
                          className="slider__input_slider"
                          type="range"
                          max="80,000"
                          step="0.05"
                          value={value4}
                          onChange={(e) => setValue4(e.target.value)}
                        />
                      </div>
                      {/* <div className='display'>
                                                <p> ${value}</p>
                                                <p> ${value2}</p>
                                            </div> */}
                    </div>
                  </div>

                  <div className="dpertr_fltr">
                    <div className="fltr_prc">
                      <h4>Departure form LHR</h4>
                    </div>
                    <div className="dprte_flx">
                      <div className="form-check search-content">
                        <input
                          name="language[]"
                          id="allLanguage"
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="all"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allLanguage"
                        >
                          Early Morning
                        </label>
                        <p>Before 6 AM</p>
                      </div>

                      <div className="form-check search-content">
                        <input
                          name="language[]"
                          id="allLanguage"
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="all"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allLanguage"
                        >
                          Morning
                        </label>
                        <p>Before 6 AM</p>
                      </div>
                    </div>
                    <div className="dprte_flx">
                      <div className="form-check search-content">
                        <input
                          name="language[]"
                          id="allLanguage"
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="all"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allLanguage"
                        >
                          Early Morning
                        </label>
                        <p>Before 6 AM</p>
                      </div>

                      <div className="form-check search-content">
                        <input
                          name="language[]"
                          id="allLanguage"
                          className="form-check-input"
                          type="checkbox"
                          defaultValue="all"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="allLanguage"
                        >
                          Morning
                        </label>
                        <p>Before 6 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FlightCancell/> */}
{/* 
      <FlightDetails /> */}
    </>
  );
}

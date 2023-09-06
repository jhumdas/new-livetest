import React from "react";
import a from "../../images/Emirates - jpeg.png";
import c from "../../images/fillclock.png";
import b from "../../images/uim_lock.png";
import p from "../../images/octicon_person-24.png";
import f from "../../images/ph_phone-thin.png";
import g from "../../images/fluent_food-20-filled.png";
export default function FlightResultTiming() {
  return (
    <>
      <section className="flightResultTiming hotel_info_wrapper_cnt">
        <div className="flight_book_bg"></div>
        <div className="inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div>
                <div>
                  <h3>Review your Booking</h3>
                  <div className="FlightTimingBox">
                    <div className="FlightbigBox">
                      <div className="text-center">
                        <img src={a} />
                        <h6>Emirates</h6>
                        <h6>Em- xxxx</h6>
                      </div>
                      <div className="FlightwrapBox">
                        <div>
                          <h4>15:10</h4>
                          <h5>Thu, 10 Aug</h5>
                          <h5>(T2) Heathrow Airport</h5>
                        </div>
                        <div>
                          <h5>
                            <span className="leftBorder"></span>1h 25m{" "}
                            <span className="rightBorder"></span>
                          </h5>
                        </div>
                        <div>
                          <h4>15:10</h4>
                          <h5>Thu, 10 Aug</h5>
                          <h5>(T2) Heathrow Airport</h5>
                        </div>
                      </div>
                    </div>
                    <div className="Flightwrapper" style={{ margin: "0 10px" }}>
                      <h5>
                        <img src={c} className="mr-2" />
                        2h 30m layover in Dublin
                      </h5>
                    </div>
                    <div className="FlightbigBox">
                      <div className="text-center">
                        <img src={a} />
                        <h6>Emirates</h6>
                        <h6>Em- xxxx</h6>
                      </div>
                      <div className="FlightwrapBox">
                        <div>
                          <h4>15:10</h4>
                          <h5>Thu, 10 Aug</h5>
                          <h5>(T2) Heathrow Airport</h5>
                        </div>
                        <div>
                          <h5>
                            <span className="leftBorder"></span>1h 25m{" "}
                            <span className="rightBorder"></span>
                          </h5>
                        </div>
                        <div>
                          <h4>15:10</h4>
                          <h5>Thu, 10 Aug</h5>
                          <h5 className="">(T2) Heathrow Airport</h5>
                        </div>
                      </div>
                    </div>
                    <div
                      className="Flightwrapper"
                      style={{ borderRadius: "0px 0px 10px 10px" }}
                    >
                      <h5>
                        <img src={b} className="mr-2" />
                        2h 30m layover in Dublin
                      </h5>
                      <h5 style={{ color: "#FB0000" }}>
                        Reschedule & Cancellation Policy{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    {" "}
                    <h3>
                      <img src={p} className="mr-2" />
                      Enter Passenger Details{" "}
                      <span style={{ color: "#716E6E" }}>0/1 Added</span>
                    </h3>
                    <span
                      className="mt-2 d-block"
                      style={{ fontSize: "14px", color: "#716E6E" }}
                    >
                      Choose from saved list or add new passenger
                    </span>
                  </div>
                  <div id="accordionExample" className="accordion ">
                    <div className="card mt-3">
                      <div id="headingTwo" className="card-header bg-white ">
                        <h2 className="mb-0">
                          <button
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            className="btn btn-link collapsible-link"
                          >
                            Adult 1
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                        className="collapse"
                      >
                        <div className="card-body">
                          <div className="guest-details">
                            <div className="d-flex">
                              <div className="form-check mr-2">
                                <input
                                  className="form-check-input input-radio on"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  defaultValue="option1"
                                  defaultChecked=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  Mr.
                                </label>
                              </div>
                              <div className="form-check mr-2">
                                <input
                                  className="form-check-input input-radio on"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  defaultValue="option1"
                                  defaultChecked=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  Ms.
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  className="form-check-input input-radio on"
                                  type="radio"
                                  name="exampleRadios"
                                  id="exampleRadios1"
                                  defaultValue="option1"
                                  defaultChecked=""
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  Mrs.
                                </label>
                              </div>
                            </div>
                            <div className="row input_form mt-3">
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="First And Middle Name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Last Name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Passport Issue Date"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Passport Expiry Date"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Passenger Name"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Date Of Birth"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Passport Number"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="Passport Issue Country"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4 col-12">
                                <div>
                                  <a href="#" className="btnn_red">
                                    Save
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="gridCheck"
                              >
                                Frequent Flyer Number (optional)
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <h3>
                      <img src={f} className="mr-2" />
                      Enter Contact Information{" "}
                      <span style={{ color: "#716E6E" }}>0/1 Added</span>
                    </h3>
                    <span
                      className="mt-2 d-block"
                      style={{ fontSize: "14px", color: "#716E6E" }}
                    >
                      Your ticket SMS and Email will be sent here
                    </span>
                  </div>
                  <div className="pin_state mt-3">
                    <div className="row input_form mt-3">
                      <div className="col-md-6 col-12">
                        <div className="form-group d-flex">
                          <select
                            className="form-control"
                            id="exampleFormControlSelect1"
                            style={{ border: "0", width: "30%" }}
                          >
                            <option>+01</option>
                            <option>+01</option>
                            <option>+01</option>
                          </select>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mobile Number*"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email ID*"
                          />
                        </div>
                      </div>
                      <div className="col-md-2 col-12">
                        <div>
                          <a href="#" className="btnn_red">
                            Save
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="TC">
                    <h5 style={{ fontSize: "14px" }}>
                      By booking with Bushido, You Agreed to{" "}
                      <span style={{ color: "#FF3A44" }}>T&C</span>
                    </h5>
                    <div className="mt-3">
                      <a href="#" className="btnn mr-2">
                        Continue to add one
                      </a>
                      <a
                        href="#"
                        className="btnnn"
                        style={{ borderRadius: "5px" }}
                      >
                        Skip to Payment
                      </a>
                    </div>
                  </div>
                  <div className="pin_state mt-3">
                    <div className="d-flex">
                      <div>
                        <img src={g} className="mr-2" />
                      </div>
                      <h3>
                        AddOns
                        <span
                          className="mt-2 d-block"
                          style={{ fontSize: "14px", color: "#716E6E" }}
                        >
                          Add Seats, Meals and extra Baggage
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div className="imp_cnt">
                    <h3>Important</h3>
                    <span>Mandatory Checklist for traveller</span>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Integer massa
                        sem pellentesque dignissim viverra nisl est malesuada
                        molestie. Sit est interdum elit turpis et.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Integer massa
                        sem pellentesque dignissim viverra nisl est malesuada
                        molestie. Sit est interdum elit turpis et.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Integer massa
                        sem pellentesque dignissim viverra nisl est malesuada
                        molestie. Sit est interdum elit turpis et.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Integer massa
                        sem pellentesque dignissim viverra nisl est malesuada
                        molestie. Sit est interdum elit turpis et.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Integer massa
                        sem pellentesque dignissim viverra nisl est malesuada
                        molestie. Sit est interdum elit turpis et.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <h3>Fare Breakup</h3>
              <div className="breakup">
                <h6>Base Fair</h6>
                <h6>Adult (S)(0 X $0)</h6>
                <div className="d-flex justify-content-between">
                  <h6>Taxes & Fees</h6>
                  <h6>$4,000</h6>
                </div>
                <hr />
                <div className="strongText d-flex justify-content-between">
                  <h6>Taxes & Fees</h6>
                  <h6>$4,000</h6>
                </div>
                <hr />
                <div className="strongText d-flex justify-content-between">
                  <h6>Taxes & Fees</h6>
                  <h6>$4,000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

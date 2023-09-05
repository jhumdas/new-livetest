import React, { useState } from "react";
import p from "../../images/fluent_person-28-filled.png";
import a from "../../images/Emirates - jpeg.png";
import c from "../../images/fillclock.png";
import b from "../../images/Airport.png";
import e from "../../images/system-uicons_cross.png";
export default function FlightDetails() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="Buycourse">
        <div className="Flight_details_modal">
          <a href="#" className="flight_close"><img src={e}/></a>
          <div className="left">
            <button
              className={
                toggleState === 1
                  ? "flight_tab active_flight_tab"
                  : "flight_tab"
              }
              onClick={() => toggleTab(1)}
            >
              Flight Details
            </button>

            <button
              className={
                toggleState === 2
                  ? "flight_tab active_flight_tab"
                  : "flight_tab"
              }
              onClick={() => toggleTab(2)}
            >
              Baggage Allowance
            </button>
            <button
              className={
                toggleState === 3
                  ? "flight_tab active_flight_tab"
                  : "flight_tab"
              }
              onClick={() => toggleTab(3)}
            >
              Cancellation Fee
            </button>

            <button
              className={
                toggleState === 4
                  ? "flight_tab active_flight_tab"
                  : "flight_tab"
              }
              onClick={() => toggleTab(4)}
            >
              Reschedule Fee
            </button>
          </div>
          <div className="right">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div>
                <div className="top">
                  <h3>London - Birmingham</h3>
                  <div>
                    <span>6th Aug 23</span>
                    <img src={p} />
                    <span>1 adult</span>
                  </div>
                </div>
                <div className="bigBox">
                  <div className="text-center">
                    <img src={a} />
                    <h6>Emirates</h6>
                    <h6>Em- xxxx</h6>
                  </div>
                  <div className="wrapBox">
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
                <div className="wrapper">
                  <h5>
                    <img src={c} className="mr-2" />
                    2h 30m layover in Dublin
                  </h5>
                </div>
                <div className="bigBox">
                  <div className="text-center">
                    <img src={a} />
                    <h6>Emirates</h6>
                    <h6>Em- xxxx</h6>
                  </div>
                  <div className="wrapBox">
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
              </div>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div>
                <div className="top">
                  <h3>London - Birmingham</h3>
                  <div>
                    <span>6th Aug 23</span>
                  </div>
                </div>
                <h5 className="mt-3">
                  <img src={b} className="mr-2" />
                  London - Birmingham
                </h5>
                <div className="mt-4 flight_table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>PASSENGER</th>
                        <th>CABIN</th>
                        <th>CHECK IN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Adult</td>
                        <td>Not Allow</td>
                        <td>Not Allow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <div>
                <div className="top">
                  <h3>London - Birmingham</h3>
                  <div>
                    <span>6th Aug 23</span>
                  </div>
                </div>
                <h5 className="mt-3">
                  <img src={b} className="mr-2" />
                  London - Birmingham
                </h5>
                <div className="mt-4 flight_table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          Time Frame
                          <span
                            className="d-block"
                            style={{ fontSize: "11px" }}
                          >
                            (Form Departure Time){" "}
                          </span>
                        </th>
                        <th>
                          Airline fee{" "}
                          <span
                            className="d-block"
                            style={{ fontSize: "11px" }}
                          >
                            (Form Departure Time){" "}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>More than 0 Hours</td>
                        <td>As per airline policy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flight_para">
                  <h5>Important</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Porttitor mi
                    malesuada facilisis sagittis lacus amet aenean vitae. Felis
                    id pellentesque lacinia placerat platea enim.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Porttitor mi
                    malesuada facilisis sagittis lacus amet aenean vitae. Felis
                    id pellentesque lacinia placerat platea enim.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={
                toggleState === 4 ? "content  active-content" : "content"
              }
            >
                <div>
                <div className="top">
                  <h3>London - Birmingham</h3>
                  <div>
                    <span>6th Aug 23</span>
                  </div>
                </div>
                <h5 className="mt-3">
                  <img src={b} className="mr-2" />
                  London - Birmingham
                </h5>
                <div className="mt-4 flight_table table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>
                          Time Frame
                          <span
                            className="d-block"
                            style={{ fontSize: "11px" }}
                          >
                            (Form Departure Time){" "}
                          </span>
                        </th>
                        <th>
                          Airline fee{" "}
                          <span
                            className="d-block"
                            style={{ fontSize: "11px" }}
                          >
                            (Form Departure Time){" "}
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>More than 0 Hours</td>
                        <td>As per airline policy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

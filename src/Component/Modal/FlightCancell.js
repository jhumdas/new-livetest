import React from "react";
import a from "../../images/system-uicons_cross.png";
import b from "../../images/baggage.png";
import c from "../../images/Emirates - jpeg.png";
import d from "../../images/fluent_document-dismiss-24-regular.png";
import e from "../../images/clarity_date-line.png";
export default function FlightCancell() {
  return (
    <>
      <div className="flight_cancellation">
        <div className="flight_cancellationModal ">
          <div className="flight-close mb-2">
            <img src={a} style={{ cursor: "pointer" }} />
          </div>
          <div className="pop_cnt">
            <h3>London- Birmingham</h3>
            <h6>6 Aug 23</h6>
            <h4>
              <img src={b} />
              Baggage Allowance
            </h4>
            <h4>
              <img src={c} />
              London - Birmingham
            </h4>
            <div className="flight_table table-responsive">
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
                    <td>
                      <div>
                        7 Kg<span className="d-block">1 piece</span>
                      </div>
                    </td>
                    <td>1 piece</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h4>
              <img src={d} />
              Cancellation Fee
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h4>
                <img src={c} />
                London - Birmingham
              </h4>
              <a
                href="#"
                className="btnnn"
                style={{ borderRadius: "10px", marginBottom: "15px" }}
              >
                NON REFUNDABLE
              </a>
            </div>
            <div className="flight_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      Time Frame
                      <span className="d-block" style={{ fontSize: "11px" }}>
                        (Form Departure Time){" "}
                      </span>
                    </th>
                    <th>
                      Airline fee
                      <span className="d-block" style={{ fontSize: "11px" }}>
                        (Per Passenger)
                      </span>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <h5 style={{ fontSize: "14px", color: "#000" }}>
                          More Than 24 hours
                        </h5>
                        <span>(up to Aug 5 14:15 pm GBT)</span>
                      </div>
                    </td>
                    <td>
                      <h5 style={{ fontSize: "14px", color: "#000" }}>
                        $10,000
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flight_para">
              {" "}
              <h5>Important</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur. Porttitor mi malesuada
                facilisis sagittis lacus amet aenean vitae. Felis id
                pellentesque lacinia placerat platea enim.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Porttitor mi malesuada
                facilisis sagittis lacus amet aenean vitae. Felis id
                pellentesque lacinia placerat platea enim.
              </p>
            </div>
            <h4>
              <img src={e} />
              Reschedule Fee
            </h4>
            <h4>
              <img src={c} />
              London - Birmingham
            </h4>
            <div className="flight_table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      Time Frame
                      <br />
                      (Form Departure Time){" "}
                    </th>
                    <th>
                      Airline fee
                      <br />
                      (Per Passenger){" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <h5 style={{ fontSize: "14px", color: "#000" }}>
                          More Than 24 hours
                        </h5>
                        <span>(up to Aug 5 14:15 pm GBT)</span>
                      </div>
                    </td>
                    <td>
                      <h5 style={{ fontSize: "14px", color: "#000" }}>
                        $4,000+ FAIR DIFFERENCE
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

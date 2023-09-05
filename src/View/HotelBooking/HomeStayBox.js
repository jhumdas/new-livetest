import React, { useState } from "react";
import s from "../../images/iconamoon_search-thin.png";
import { Link } from "react-router-dom";
import SearchableDropdown from "../../Component/SearchableDropdown";
import DatePicker from "react-multi-date-picker";
export default function HomeStayBox() {
  const [room, setRoom] = useState(false);
  const [family, setFamily] = useState(false);
  let [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1;
    setCount(count);
  };
  const decrementCount = () => {
    count = count - 1;
    setCount(count);
  };
  return (
    <>
      <div>
        <div className="hotel_search">
          <h6>Book Hotel & Homestay</h6>
          <div className="location">
            <label>Where</label>
            <SearchableDropdown />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="location check_in mt-3 ">
                <label>Check-in</label>
                <div className="inputBox">
                  <h4>Aug 10, 2023</h4>
                  <a className="night_count">2 Nights</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location check_in mt-3 ">
               
                <label htmlFor="datepick">Check-out</label>
                <div className="inputBox">
                  <h4>Aug 12, 2023</h4>
                </div>
                <DatePicker
                id="datepick"
                // style={{visibility:"hidden"}}
                format="MM/DD/YYYY"
                formatMonth={""}
                numberOfMonths={2}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="location check_in mt-3 ">
                <label>Guests</label>
                <div className="inputBox">
                  <h4 onClick={() => setFamily(!family)}>
                    2 Adults | 0 Children
                  </h4>
                  {family && (
                    <div className="room_needBox">
                      <div className="room_need">
                        <div>
                          <h5>Adult</h5>
                          <span>+12 years</span>
                        </div>
                        <div className="d-flex" style={{ gap: "10px" }}>
                          <button onClick={decrementCount}>
                            <i class="fa-sharp fa-solid fa-minus"></i>
                          </button>
                          <div className="input_value">{count}</div>
                          <button onClick={incrementCount}>
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="room_need mt-3">
                        <div>
                          <h5>Children</h5>
                          <span>0-12 Years</span>
                        </div>
                        <div className="d-flex" style={{ gap: "10px" }}>
                          <button onClick={decrementCount}>
                            <i class="fa-sharp fa-solid fa-minus"></i>
                          </button>
                          <div className="input_value">{count}</div>
                          <button onClick={incrementCount}>
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="location check_in mt-3 ">
                <label>Rooms</label>
                <div className="inputBox">
                  <h4 onClick={() => setRoom(!room)}>1 Rooms</h4>
                  {room && (
                    <div className="room_needBox">
                      <div className="room_need">
                        <div>
                          <h5>Rooms</h5>
                          <span>(Max 8)</span>
                        </div>
                        <div className="d-flex" style={{ gap: "10px" }}>
                          <button onClick={decrementCount}>
                            <i class="fa-sharp fa-solid fa-minus"></i>
                          </button>
                          <div className="input_value"> {count}</div>
                          <button onClick={incrementCount}>
                            <i class="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/hotel-search" className="search_hotel_Btn">
          Search Hotel
        </Link>
      </div>
    </>
  );
}

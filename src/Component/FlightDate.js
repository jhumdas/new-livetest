import React from "react";

export default function FlightDate() {
  return (
    <>
      <div className="Buycourse"></div>
      <div className="FlightDate">
        <div className="sjdp-calendar  ">
          <div className="top-header">
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className="sjdp-arrow-container sjdp-left ">
                <i class="fa-solid fa-chevron-left"></i>
              </span>
              <div className="sjdp-header-values">
                <span style={{ cursor: "pointer" }}>September</span>
                <span style={{ cursor: "pointer" }}>2023</span>
              </div>
              <div className="sjdp-header-values">
                <span style={{ cursor: "pointer" }}>October</span>
                <span style={{ cursor: "pointer" }}>2023</span>
              </div>
              <span className="sjdp-arrow-container sjdp-right ">
                <i class="fa-solid fa-chevron-right"></i>
              </span>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="sjdp-day-picker " style={{ display: "flex" }}>
              <div style={{ marginRight: 10 }}>
                <div className="sjdp-week">
                  <div className="sjdp-week-day">S</div>
                  <div className="sjdp-week-day">M</div>
                  <div className="sjdp-week-day">T</div>
                  <div className="sjdp-week-day">W</div>
                  <div className="sjdp-week-day">T</div>
                  <div className="sjdp-week-day">F</div>
                  <div className="sjdp-week-day">S</div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">1</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">2</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">3</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">4</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">5</span>
                  </div>
                  <div className="sjdp-day activedate">
                    <span className="sd ">6</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">7</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">8</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">9</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">10</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">11</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">12</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">13</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">14</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">15</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">16</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">17</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">18</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">19</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">20</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">21</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">22</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">23</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">24</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">25</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">26</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">27</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">28</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">29</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">30</span>
                  </div>
                </div>
              </div>
              <div className="v-line"></div>
              <div>
                <div className="sjdp-week">
                  <div className="sjdp-week-day">S</div>
                  <div className="sjdp-week-day">M</div>
                  <div className="sjdp-week-day">T</div>
                  <div className="sjdp-week-day">W</div>
                  <div className="sjdp-week-day">T</div>
                  <div className="sjdp-week-day">F</div>
                  <div className="sjdp-week-day">S</div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">1</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">2</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">3</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">4</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">5</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">6</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">7</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">8</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">9</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">10</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">11</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">12</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">13</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">14</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">15</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">16</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">17</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">18</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">19</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">20</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">21</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">22</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">23</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">24</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">25</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">26</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">27</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">28</span>
                  </div>
                </div>
                <div className="sjdp-week">
                  <div className="sjdp-day">
                    <span className="sd ">29</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">30</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="sd ">31</span>
                  </div>
                  <div className="sjdp-day">
                    <span className="" />
                  </div>
                  <div className="sjdp-day">
                    <span className="" />
                  </div>
                  <div className="sjdp-day">
                    <span className="" />
                  </div>
                  <div className="sjdp-day sjdp-day-hidden">
                    <span className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from 'react'

export default function FlightDetails() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  };
  return (
    <>
      <div className="Buycourse">
        <div className="Flight_details_modal">
          <div className="left">

              <button
                className={
                  toggleState === 1
                    ? "podcast_tab active_episode_tab"
                    : "podcast_tab"
                }
                onClick={() => toggleTab(1)}
              >
                All
              </button>

              <button
                className={
                  toggleState === 2
                    ? "podcast_tab active_episode_tab"
                    : "podcast_tab"
                }
                onClick={() => toggleTab(2)}
              >
                wildlife
              </button>
              <button
                className={
                  toggleState === 3
                    ? "podcast_tab active_episode_tab"
                    : "podcast_tab"
                }
                onClick={() => toggleTab(3)}
              >
                education
              </button>
         
          
              <button
                className={
                  toggleState === 6
                    ? "podcast_tab active_episode_tab"
                    : "podcast_tab"
                }
                onClick={() => toggleTab(6)}
              >
                environment
              </button>
      
      
          </div>
          <div className="right">
          <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <div>
                       
                     fhghgh

                    </div>


                </div>
                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >


                    <div>
                     ghgfhhfg
                    

                    </div>
                </div>
                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >


                    <div>
                      hghghgh
                    </div>
                </div>
                <div
                    className={toggleState === 4 ? "content  active-content" : "content"}
                >


                    <div>
                      gfghfgh
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

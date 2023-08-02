import React from 'react'
import b from '../../images/video-icon.png'
import c from '../../images/Rectangle 508.png'
import d from '../../images/Rectangle 509.png'
import e from '../../images/Rectangle 510.png'

export default function OTTWatchlist() {
  return (
    <div>
         <div className='ott-watch'><h3>My Watchlist</h3>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-12'>
            <div className='Ott-download-bg' style={{ backgroundImage: `url('${c}')`, position: 'relative' }}>
              <div className='box'>
                <div className="">
                  <img src={b} style={{ height: "40px", width: "40px", margin: "0 auto", display: "table" }} />
                </div>
                <div className='mt-3 w-100'>
                  <a href="#" className='watch-btn'>Watch  now</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-12'>
            <div className='Ott-download-bg' style={{ backgroundImage: `url('${d}')`, position: 'relative' }}>
              <div className='box'>
                <div className="">
                  <img src={b} style={{ height: "40px", width: "40px", margin: "0 auto", display: "table" }} />
                </div>
                <div className='mt-3 w-100'>
                  <a href="#" className='watch-btn'>Watch  now</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-12'>
            <div className='Ott-download-bg' style={{ backgroundImage: `url('${e}')`, position: 'relative' }}>
              <div className='box'>
                <div className="">
                  <img src={b} style={{ height: "40px", width: "40px", margin: "0 auto", display: "table" }} />
                </div>
                <div className='mt-3 w-100'>
                  <a href="#" className='watch-btn'>Watch  now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

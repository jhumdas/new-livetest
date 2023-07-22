import React from 'react'
import p from "../images/profile2.png";
export default function ProfileBox() {
  return (
    <div className="profileBox mb-4">
            <div className="profileImg">
              <img src={p} />
            </div>
            <div className="profile-cnt">
              <h6>Hello</h6>
              <p>Lorem Ipsum</p>
            </div>
          </div>
  )
}

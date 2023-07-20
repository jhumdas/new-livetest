import React from 'react'
import p from '../../images/fontisto_google-play (1).png'
import b from '../../images/bi_qr-code.png'
export default function LoginModal() {
    return (
        <>
            <div className='loginModalWrapper'>
                <div className='loginModal'>
                    <div>
                        <h5>To Login into your Bushido web account</h5>
                        <ul>
                            <li>1. Open Bushido App </li>
                            <li>2. Tap scan Qr Available at the top  </li>
                            <li>3. Point Bushido scan at Qr code to login   </li>
                        </ul>
                        <h6>To create the account Download the app on</h6>
                        <a>Download The App <img src={p} style={{ marginLeft: "15px" }} /></a>
                    </div>
                    <div className='barCode'>
                        <img src={b}/>
                    </div>
                </div>
            </div>

        </>
    )
}

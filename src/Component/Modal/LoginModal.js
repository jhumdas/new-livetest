import React from 'react'
import p from '../../images/fontisto_google-play (1).png'
import b from '../../images/bi_qr-code.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import wallet from '../../images/wallet.png'
import addmoney from '../../images/addmoney.png'
export default function LoginModal() {
    const [modalmoney, setModalmoney] = useState(false);
    const handleClickmoney = () => {
        setModalmoney(!modalmoney)
    }
    return (
        <>
            <div className='loginModalWrapper'>

                <div className='loginModal' >
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

                        <img src={b} onClick={handleClickmoney} />

                    </div>


                </div>




            </div>

            {modalmoney && <div className='moneyModalWrapper'>
                <div className='money_modal_box'>
                    <div className='money_modal_wallet_money'>
                        <Link to="/wallet">
                            <div className='money_modal_wallet' style={{ display: "flex", alignItems: "center" }}>
                                <div className='wallet_img'>
                                    <img src={wallet} alt="/" />
                                </div>
                                <h5 className='wallet_txt' style={{ marginLeft: "8px" }}>Wallet Balance</h5>
                            </div>
                        </Link>
                        <div className='money_modal_wallet' style={{ display: "flex", display: "flex", alignItems: "center" }}>
                            <div className='wallet_img'>
                                <img src={addmoney} alt="/" />
                            </div>
                            <h5 className='wallet_txt' style={{ marginLeft: "8px" }}>Add Money</h5>
                        </div>



                    </div>

                </div>
                <div className='wallet_profile_main'>
                    <div className='wallet_money'>
                        <p className='wallet_money_pp'>
                            $1500
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            View Profile
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            Your Wallet
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            Rewards
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            Orders
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            Virtual ID Card
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            24 x 7 Help
                        </p>
                    </div>
                    <div className='wallet_profile'>
                        <p className='wallet_profile_pp'>
                            Sign out
                        </p>
                    </div>
                </div>
            </div>}

        </>
    )
}

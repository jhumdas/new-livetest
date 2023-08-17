import React, { useState } from 'react';
import logo from '../../images/logo.png';

export default function Index() {
    const loop = [1, 2, 3]

    const [modalwallet, setModalwallet] = useState(false);

    const handleClickwallet = () => {
        setModalwallet(true);

    }
    const handleClickcross = () => {
        setModalwallet(false);
    }
    return (
        <>
            <section className='wallet_main'>
                <div className='wallet_main_bg'>  </div>
                <div className='container'>
                    <div className='wallet_main_bg_brdr'>
                        <div className='wallet_blance'>
                            <div className='wallet_wallet_blance'>
                                <div className='wallet_txt'>
                                    <p className='wallet_txt_ppp'>Bushido Wallet</p>
                                </div>

                                <div className='wallet_balance_txt'>
                                    <p className='wallet_balance_txt_ppp'>
                                        Total Balance : $ 0
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='wallet_blance'>
                            <div className='wallet_txt_add_csh'>
                                <p className='wallet_txt_add_csh_ppp'>Add cash to your wallet</p>
                            </div>

                            <div className='wallet_amnt_add'>
                                <div className='wallet_amnt'>
                                    <input type="text" id="" name="" placeholder="$ Enter Amount"></input>
                                </div>

                                <div className='wallet_add'>
                                    <a href="#" className='wallet_add_btn' onClick={handleClickwallet}>Add</a>
                                </div>
                            </div>

                        </div>

                        <div className='wallet_blance'>
                            <div className='wallt_trancsit_amnt_stts'>
                                <div className='wallt_trancsit_txt'>
                                    <p className='wallt_trancsit_txt_ppp'>Transactions</p>
                                </div>
                                <div className='wallt_trancsit_txt'>
                                    <p className='wallt_trancsit_txt_ppp'>Amount</p>
                                </div>
                                <div className='wallt_trancsit_txt'>
                                    <p className='wallt_trancsit_txt_ppp'>Status</p>
                                </div>
                            </div>

                        </div>


                        <div className='wallet_blance' style={{ border: "none" }}>
                            <div className='wallet_blance_month_txt'>

                                <div className='month_txt'>
                                    <p className='month_txt_ppp'>
                                        This month jun 2023
                                    </p>
                                </div>

                                {loop.map((key, index) => {
                                    return (
                                        <div className='paid_amnt_succs'>
                                            <div className='paid_img_txt'>
                                                <div className='paid_bg'>
                                                    <i class="fa-solid fa-bag-shopping"></i>
                                                </div>
                                                <div className='paid_txt_main'>
                                                    <p className='paid_txt_p'>
                                                        Paid for order at XYZ
                                                    </p>
                                                    <p className='time_txt_p'>
                                                        00 Aug, 0:00 AM
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='amnt_prc'>
                                                <p className='amnt_prc_txt_pp'>- $ 00.00</p>
                                            </div>

                                            <div className='amnt_succs'>
                                                <p className='amnt_succs_txt_pp'>Success</p>
                                            </div>

                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>




            </section>
            {modalwallet &&
                <div className='wallet_modal'>
                    <div className='bushido_wallet_main'>
                        <div className='bushido_wallet_logo_icon'>
                            <div className='bushido_img'>
                                <img src={logo}></img>
                            </div>

                            <div className='bushido_logo_icon'  >
                                <a href='#' onClick={handleClickcross}><i class="fa-solid fa-xmark"></i></a>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

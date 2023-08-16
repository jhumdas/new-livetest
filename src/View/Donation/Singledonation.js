import React from 'react';
import { Link } from 'react-router-dom';
import document from '../../images/document.png'
import campaigner from '../../images/campaigner.png'
import campaigner_email from '../../images/campaigner_email.png';
import love_react from '../../images/love_react.png'
export default function Singledonation() {
    const loop = [1, 2];
    const loop1 =[1,2,3,4];
    return (
        <>
            <section className='singledonation'>
                <div className='container'>
                    <div className='singledonation_icon'>
                        <Link to="/">
                            <div className='donation_icon_txt_main' style={{ display: "flex", alignItems: "center" }}>
                                <i class="fa-solid fa-chevron-left"></i>
                                <p className='impct'>lorem is fighting</p>
                            </div>
                        </Link>

                    </div>

                    <div className='singledonation_book_bg_img'>
                        <div className='singledonation_book_img'>
                            {/* <img src={flight_img} alt="/" /> */}
                            <div className='singledonation_left_txt'>
                                <p className='singledonation_txt'>5 Days Left</p>
                            </div>
                        </div>
                        <div className='single_book_img_txt'>
                            <p className='single_txt_pp'>My lorem is fighting for her life and we need your support to save her from stage 4 cancer</p>
                        </div>
                    </div>

                    <div className='donation_icon_social_flx'>
                        <div className='donation_icon_social_flx_main'>
                            <Link to="/" className='whtsapp_txt_icon_btn'>
                                <i class="fa-brands fa-whatsapp"></i>
                                <p className='flight_icon_whts'>share via whatsapp</p>
                            </Link>

                            <Link to="/" className='whtsapp_txt_icon_btn fb_txt_icon_btn'>
                                <i class="fa-brands fa-facebook-f"></i>
                                <p className='flight_icon_whts'>share via whatsapp</p>
                            </Link>
                        </div>
                    </div>

                    <div className='donation_amount_hour_main'>
                        <div className='donation_amount_hour_bg'>
                            <div className='donation_amount_hour_bg_flx'>
                                <div className='donation_amount_hour_amnt_pp'>
                                    <p className='donation_amount_pp'>
                                        $ 5,80,765
                                    </p>

                                    <p className='donation_amount_raised_pp'>
                                        raised out of $60,00,000
                                    </p>
                                </div>
                                <div class="progress progress_share_impact">
                                    <div class="progress-bar progress_shre_bar progress_impct w-50" role="progressbar" aria-valuenow="" aria-valuemin="" aria-valuemax=""></div>
                                </div>

                                <div className='donation_txt_pppp'></div>
                                <p className='donation_txt_lst_pp'>

                                    last donation 5 hours ago
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className='donation_amount_document_main donation_document'>
                        <div className='donation_amount_hour_bg'>
                            <div id="accordionExample" className="accordion1">
                                {/* Accordion item 1 */}
                                <div className="card">
                                    <div
                                        id="headingOne"
                                        className="card-header  border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                className="btn btn-link collapsible-link"
                                            >
                                                <h5 className='donation_dctmn_hhh'>Documents</h5>
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseOne"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='document_img_main'>
                                                <img src={document} alt="/" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>
                    </div>

                    <div className='donation_amount_document_main  donation_document donation_campaigner '>
                        <div className='donation_amount_hour_bg'>

                            {loop.map((key, index) => {
                                return (
                                    <div className='donation_campaigner_main' style={index == loop.length - 1 ? { border: "none" } : {}}>

                                        <div className='donation_campaigner_txt'>
                                            <p className='donation_campaigner_txt_ppp'>
                                                campaigner
                                            </p>
                                        </div>
                                        <div className='donation_campaigner_img_frm'>
                                            <div className='donation_campaigner_img'>
                                                <img src={campaigner} alt="/" />
                                            </div>

                                            <div className='donation_campaigner_frm'>
                                                <img src={campaigner_email} alt="/" />
                                            </div>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className='donation_amount_document_main  donation_document donation_fundarise'>
                    <div className='donation_amount_hour_bg'>
                            <div id="accordionExample" className="accordion1">
                                {/* Accordion item 1 */}
                                <div className="card">
                                    <div
                                        id="headingOne"
                                        className="card-header border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                className="btn btn-link collapsible-link"
                                            >
                                                <h5 className='donation_dctmn_hhh'>About The Fundraiser</h5>
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseOne"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">
                                            <div className='fundraiser_main_txt_main'>
                                                <div className='fundraiser_main_txt1'>
                                                    <p className='fundraiser_main_txt_ppp'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                    </p>

                                                    <p className='fundraiser_main_txt_ppp'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>


                                                    <p className='fundraiser_main_txt_ppp'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                                    </p>
                                                    <p className='fundraiser_main_txt_ppp'>
                                                        Thank Y
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>

                    <div className='donation_amount_document_main  donation_document  donation_fundarise'>
                    <div className='donation_amount_hour_bg'>
                            <div id="accordionExample" className="accordion1">
                                {/* Accordion item 1 */}
                                <div className="card">
                                    <div
                                        id="headingOne"
                                        className="card-header border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                                className="btn btn-link collapsible-link"
                                            >
                                                <div className='donation_dctmn_hhh'>
                                                    <img src={love_react} alt="/" />
                                                    <p className='supports'>5,0021 supports</p>
                                                </div>
                                            </button>
                                        </h2>
                                        {/* <div className='icon'></div> */}
                                    </div>
                                    <div
                                        id="collapseOne"
                                        aria-labelledby="headingOne"
                                        data-parent="#accordionExample"
                                        className="collapse show"
                                    >
                                        <div className="card-body">

                                           {loop1.map((key,index)=>{
                                           return(
                                           <div className='donation_supports_main'>
                                                <div className='donation_supports_main_flax'>
                                                    <div className='donation_supports_main_img_txt'>
                                                        <div className='donation_supports_main_img'>
                                                            <img src={campaigner} alt="/" />
                                                        </div>
                                                        <div className='donation_supports_main_txt'>
                                                            <p className='donation_supports_main_txt_ppp'>
                                                                Lorem ipsum
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className='donation_prc'>
                                                        <p className='donation_prc_ppp'>
                                                        $1000
                                                        </p>

                                                    </div>
                                                </div>

                                            </div>
                                           )
                                             })}
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

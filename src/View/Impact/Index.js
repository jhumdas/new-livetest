import React from 'react';
import { Link } from 'react-router-dom';
import impact_img from '../../images/impact_img.png';
export default function Index() {
    return (
        <>
            <section className='impact_home'>
                <div className='container'>
                    <div className='impact_icon_txt'>
                        <Link to="/">
                            <i class="fa-solid fa-chevron-left"></i>
                        </Link>
                        <p className='impct'>Impact</p>
                    </div>

                    <div className='impact_prgress_txt'>
                        <p className='impact_prgress_txt_ppp'>
                            Your progress bar, your donation, your achievement
                        </p>
                    </div>

                    <div className='impact_img_txt_prgrs_brdr_main'>
                        <div className='impact_img_txt_prgrs_brdr'>
                            <div className='impact_img_txt_prgrs'>
                                <div className='impact_img'>
                                    <img src={impact_img} alt="/" />
                                </div>
                                <div className='impact_txt_prgrs'>
                                    <p className='impact_txt_ppp'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
                                    <p className='impact_txt_prc'>
                                        $ 5,80,765
                                    </p>

                                    <div class="progress progress_share">
                                        <div class="progress-bar progress_shre_bar progress_impct w-50" role="progressbar" aria-valuenow="" aria-valuemin="" aria-valuemax=""></div>
                                    </div>
                                    <div className='progress_goal'>
                                        <p className='progress_goal_ppp'>
                                            $60,00,000 goals
                                        </p>
                                    </div>
                                    <div class="progress progress_share">
                                        <div class="progress-bar progress_shre_bar progress_impct_rd w-50" role="progressbar" aria-valuenow="" aria-valuemin="" aria-valuemax=""></div>
                                    </div>

                                    <div className='progress_txt_contribution'>
                                        <p className='progress_txt_contribution_ppp'>your contribution $500</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}


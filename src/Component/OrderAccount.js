import React from 'react'
import { Link } from 'react-router-dom';
import b from "../images/Mask group.png";
export default function OrderAccount() {
    return (
        <>

            <div>
                <Link to="/order"><div className="ReviewFirstBox">
                    <img src={b} />
                    MY ORDERS
                </div></Link>
                <div className="ReviewSecondBox mt-3">
                    <div id="accordionExample" className="accordion ">
                        <div className="card">
                            <div
                                id="headingOne"
                                className="card-header bg-white border-0"
                            >
                                <h2 className="mb-0">
                                    <i class="fa-solid fa-user"></i>
                                    <button
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                        className="btn btn-link collapsible-link"
                                    >
                                        ACCOUNT SETTINGS
                                    </button>
                                </h2>
                            </div>
                            <div
                                id="collapseOne"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                                className="collapse show"
                            >
                                <div className="card-body">
                                    <Link to="/manage-address">Manage Addresses</Link>
                                    <Link to="/review">Review & ratings</Link>
                                    <a href="#">Notification</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

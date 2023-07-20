import React from 'react'

export default function Faq() {
    return (
        <>

            <section className='Faq'>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h1 className="display-4">Frequently ask question </h1>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-12 mx-auto">
                            {/* Accordion */}
                            <div id="accordionExample" className="accordion ">
                                {/* Accordion item 1 */}
                                <div className="card">
                                    <div
                                        id="headingOne"
                                        className="card-header bg-white border-0"
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
                                                Lorem ipsum dolor sit amet consectetur. Volutpat magna phasellus interdum?
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
                                            <p className="font-weight-light m-0">
                                                Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque gravida diam magna amet. Ut sed dui leo amet blandit nisl. In urna id facilisis volutpat mauris malesuada. Quisque eu massa amet aliquam. Tincidunt enim sed pellentesque magna tellus eros. Tellus venenatis scelerisque enim interdum in id. Nullam in vitae nibh sit leo. Volutpat orci imperdiet pharetra faucibus suspendisse in id urna posuere. Venenatis dui nam fermentum quisque tempus dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}
                                {/* Accordion item 2 */}
                                <div className="card">
                                    <div
                                        id="headingTwo"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                                className="btn btn-link collapsed  collapsible-link"
                                            >
                                                Lorem ipsum dolor sit amet consectetur. Volutpat magna?
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="collapseTwo"
                                        aria-labelledby="headingTwo"
                                        data-parent="#accordionExample"
                                        className="collapse"
                                    >
                                        <div className="card-body">
                                            <p className="font-weight-light m-0">
                                                Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque gravida diam magna amet. Ut sed dui leo amet blandit nisl. In urna id facilisis volutpat mauris malesuada. Quisque eu massa amet aliquam. Tincidunt enim sed pellentesque magna tellus eros. Tellus venenatis scelerisque enim interdum in id. Nullam in vitae nibh sit leo. Volutpat orci imperdiet pharetra faucibus suspendisse in id urna posuere. Venenatis dui nam fermentum quisque tempus dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}
                                {/* Accordion item 3 */}
                                <div className="card">
                                    <div
                                        id="headingThree"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                                className="btn btn-link collapsed  collapsible-link"
                                            >
                                                Lorem ipsum dolor sit amet consectetur. Volutpat magna?
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="collapseThree"
                                        aria-labelledby="headingThree"
                                        data-parent="#accordionExample"
                                        className="collapse"
                                    >
                                        <div className="card-body">
                                            <p className="font-weight-light m-0">
                                                Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque gravida diam magna amet. Ut sed dui leo amet blandit nisl. In urna id facilisis volutpat mauris malesuada. Quisque eu massa amet aliquam. Tincidunt enim sed pellentesque magna tellus eros. Tellus venenatis scelerisque enim interdum in id. Nullam in vitae nibh sit leo. Volutpat orci imperdiet pharetra faucibus suspendisse in id urna posuere. Venenatis dui nam fermentum quisque tempus dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}

                                {/* Accordion item 4 */}
                                <div className="card">
                                    <div
                                        id="headingFour"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                                className="btn btn-link collapsed  collapsible-link"
                                            >
                                                Lorem ipsum dolor sit amet consectetur. Volutpat magna?
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="collapseFour"
                                        aria-labelledby="headingFour"
                                        data-parent="#accordionExample"
                                        className="collapse"
                                    >
                                        <div className="card-body">
                                            <p className="font-weight-light m-0">
                                                Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque gravida diam magna amet. Ut sed dui leo amet blandit nisl. In urna id facilisis volutpat mauris malesuada. Quisque eu massa amet aliquam. Tincidunt enim sed pellentesque magna tellus eros. Tellus venenatis scelerisque enim interdum in id. Nullam in vitae nibh sit leo. Volutpat orci imperdiet pharetra faucibus suspendisse in id urna posuere. Venenatis dui nam fermentum quisque tempus dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}
                                      {/* Accordion item 5 */}
                                      <div className="card">
                                    <div
                                        id="headingFive"
                                        className="card-header bg-white border-0"
                                    >
                                        <h2 className="mb-0">
                                            <button
                                                type="button"
                                                data-toggle="collapse"
                                                data-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                                className="btn btn-link collapsed  collapsible-link"
                                            >
                                                Lorem ipsum dolor sit amet consectetur. Volutpat magna?
                                            </button>
                                        </h2>
                                    </div>
                                    <div
                                        id="collapseFive"
                                        aria-labelledby="headingFive"
                                        data-parent="#accordionExample"
                                        className="collapse"
                                    >
                                        <div className="card-body">
                                            <p className="font-weight-light m-0">
                                                Lorem ipsum dolor sit amet consectetur. Sed eleifend pellentesque gravida diam magna amet. Ut sed dui leo amet blandit nisl. In urna id facilisis volutpat mauris malesuada. Quisque eu massa amet aliquam. Tincidunt enim sed pellentesque magna tellus eros. Tellus venenatis scelerisque enim interdum in id. Nullam in vitae nibh sit leo. Volutpat orci imperdiet pharetra faucibus suspendisse in id urna posuere. Venenatis dui nam fermentum quisque tempus dolor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End */}
                            </div>
                            {/* End */}
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

import React from 'react'
import prev from  "../images/prev-icon.png"
import next from  "../images/next-icon.png"
function Pagination() {
    return (
        <div className="paginationwrapper">
             
            <ul className="pagination" style={{marginLeft:"10px"}}>
                <li className="page-item">
                    <a className="page-icon " href="#" >
                        <img src={prev} alt="Prev" className="img-fluid" />
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        1
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        2
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-icon" href="#">
                        <img src={next} className="img-fluid" alt="Next" />
                    </a>
                </li>
            </ul>
        </div>


    )
}

export default Pagination
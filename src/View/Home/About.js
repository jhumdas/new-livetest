import React from 'react'
import a from '../../images/Group 35296.png'
export default function About() {
    return (
        <>
            <section className='about-bushido' style={{ backgroundImage: `url('${a}')`, position: 'relative' }}>
                <div className='container'>
                    <div>
                        <h2>About Bushido</h2>
                        <p>
                        Is a global community of like-minded souls who want to expand and grow, we provide a range of tools and services to help everyone prosper and shift from the norm to extraordinary growth. 

                        </p>
                        <a className='read-more'>Read More</a>
                    </div>
                </div>
            </section>

        </>
    )
}

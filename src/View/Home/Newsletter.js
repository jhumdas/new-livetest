import React from 'react'

export default function Newsletter() {
    return (
        <>

            <section className='newsletter'>
                <div className='container'>
                    <h3>Newsletter Subscription</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Enim adipiscing elementum scelerisque ultrices maecenas suspendisse. Dui aliquam sollicitudin augue non enim eros </p>
                    <div className='mailBox'>
                        <input type="email" placeholder='Type your Email address'></input>
                        <a href="#" className='subscription'>Subscription</a>
                    </div>
                </div>
            </section>
        </>
    )
}

import React from 'react'

export default function Newsletter() {
    return (
        <>

            <section className='newsletter'>
                <div className='container'>
                    <h3>Newsletter Subscription</h3>
                    <p>Sign up to our global newsletter where we will showcase projects and people who truly make a difference, learn about our progress and network with others. 
 </p>
                    <div className='mailBox'>
                        <input type="email" placeholder='Type your Email address'></input>
                        <a href="#" className='subscription'>Subscription</a>
                    </div>
                </div>
            </section>
        </>
    )
}

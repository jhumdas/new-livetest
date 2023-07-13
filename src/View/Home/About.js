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
                            Lorem ipsum dolor sit amet consectetur. Enim adipiscing elementum scelerisque ultrices maecenas suspendisse. Dui aliquam sollicitudin augue non enim eros blandit ipsum. Vulputate viverra augue purus consectetur amet habitant nam. Sapien quam mi sodales id lacus quis nibh convallis.
                        </p>
                        <a className='read-more'>Read More</a>
                    </div>
                </div>
            </section>

        </>
    )
}

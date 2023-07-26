import React from 'react'
import SelectPodcast from '../../Component/SelectPodcast'
import v from '../../images/Rectangle 446 (1).png'
export default function Index() {
    return (
        <>

            <section className='select-song selectpodcast-details'>
                <div className='container'>
                    <SelectPodcast image={v} name="Lorem ipsum dolor sit amet consectetur." Forsongtype={true} forSongName={true}/>
                </div>
            </section>

        </>
    )
}

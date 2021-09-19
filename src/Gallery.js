import React from 'react';

import './gallery.css'
import Img1 from './images/art1.jpeg';
import Img2 from './images/art2.jpeg';
import Img3 from './images/art3.jpeg';
import Img4 from './images/art4.jpeg';
import Img5 from './images/art5.jpeg';
import Img6 from './images/art6.jpeg';
import Img7 from './images/art7.jpeg';
import Img8 from './images/art8.jpeg';


const Gallery = () => {

    let data = [

        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc: Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc: Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
    ];

    return (
        <>
            <div className="gallery">
                {data.map((item, index) => {

                    return (
                        <div className="art" key={index}>
                            <img src={item.imgSrc} alt='Art' style={{ width: '100%' }} />

                        </div>

                    )
                })}
            </div>



        </>
    )

}

export default Gallery;
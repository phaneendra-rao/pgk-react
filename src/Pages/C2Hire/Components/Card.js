import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 468,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
    ],
};

function Card(props) {
    const { list = [] } = props;

    return (
        <>
            <Slider {...settings}>
                {list.map((item) => (<div
                    className="card"
                    onClick={(_) => props.openMember(item)}
                    data-toggle="modal"
                    data-target={`#member${item.id}`}
                >
                    <span className="bg-blue"></span>
                    <div className="center-bck">
                        <span className="circle">
                            <img
                                src={item.imageUrl}
                                alt=""
                            />
                        </span>
                        <span className="name">{item.name}</span>
                        <span className="designation">{item.designation}</span>
                        <div className="socials">
                            <span className="linkedin">
                                <i className="fab fa-linkedin"></i>
                            </span>
                            <span className="twitter">
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span className="facebook">
                                <i className="fab fa-facebook-f"></i>
                            </span>
                        </div>
                    </div>
                </div>))}
            </Slider>
        </>

    )
}

export default Card

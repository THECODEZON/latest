import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../component/Cards";

import list from '../../public/list.json';

function Freebook() {
  
      const filterData=list.filter((data)=>data.category==="Free")
      console.log(filterData);

      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

 
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
      <h1 className="font-bold text-2xl pb-2">Free Courses</h1>
      <p className="pt-5 text-1xl mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur velit rerum quae obcaecati laborum harum pariatur deleniti esse dolore earum saepe sunt voluptas praesentium non consectetur, sed amet magni qui.</p>
      </div>
 

    <div>
    <Slider {...settings}>
        {filterData.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  );
}
export default Freebook;

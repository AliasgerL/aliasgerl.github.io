import React from 'react'
import Image1 from "../../assets/shopping.png"
import Image2 from "../../assets/women.png"
import Image3 from "../../assets/sale.png"
import Slider from "react-slick";

const ImageList = [
    {
        id:1,
        img: Image1,
        title: "Upto 50% off on all Men's Wear",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illo beatae, atque, obcaecati labore repudiandae necessitatibus quos vitae, ut quod reprehenderit aspernatur voluptates placeat quidem."
    },
    {
        id:2,
        img: Image2,
        title: "30% off on all Women's Wear",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illo beatae, atque, obcaecati labore repudiandae necessitatibus quos vitae, ut quod reprehenderit aspernatur voluptates placeat quidem."
    },
    {
        id:3,
        img: Image3,
        title: "60% off on all Products",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti illo beatae, atque, obcaecati labore repudiandae necessitatibus quos vitae, ut quod reprehenderit aspernatur voluptates placeat quidem."
    }
]

const Hero = ({handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div>
        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
            <div className='container mx-auto pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data)=>(
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 ml-16 sm:ml-8 lg:ml-32'>
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                                    <p 
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    className='text-sm'
                                    >{data.desc}</p>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                    >
                                        <button 
                                        onClick={handleOrderPopup}
                                        className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full cursor-pointer'
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                                <div className='order-2 sm:order-1'>
                                    <div 
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10'
                                    >
                                        <img src={data.img} alt="" 
                                        className='w-[500px] h-[500px] lg:scale-120 sm:scale-90 object-contain mx-auto'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </Slider>
                
            </div>
        </div>
    </div>
  )
}

export default Hero
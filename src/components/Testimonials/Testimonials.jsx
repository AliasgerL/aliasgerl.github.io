import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus magnam aliquid commodi, quisquam obcaecati ut quo beatae tempore quas?",
        img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    },
    {
        id: 2,
        name: "James",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus magnam aliquid commodi, quisquam obcaecati ut quo beatae tempore quas?",
        img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    },
    {
        id: 3,
        name: "Leroy",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus magnam aliquid commodi, quisquam obcaecati ut quo beatae tempore quas?",
        img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    },
    {
        id: 4,
        name: "Anderson",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus magnam aliquid commodi, quisquam obcaecati ut quo beatae tempore quas?",
        img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    },
    {
        id: 5,
        name: "Karl",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus magnam aliquid commodi, quisquam obcaecati ut quo beatae tempore quas?",
        img: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid",
    },
]

const Testimonials = () => {

    var settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <div className='py-10 mb-10'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
              <p data-aos="fade-up" className='text-sm text-primary'>What our customers say</p>
              <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
              <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, corrupti.</p>
            </div>

            <div data-aos="zoom-in" className='px-4 sm:px-16'>
                <Slider {...settings}>{
                    TestimonialData.map((data)=> (
                        <div className='my-6'>
                            <div
                            key={data.id}
                            className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                            >
                                <div className='mb-4'>
                                    <img src={data.img} alt="" 
                                    className='rounded-full w-20 h-20'
                                    />
                                </div>

                                <div className='flex flex-col items-center gap-4'>
                                    <div className='space-y-3'>
                                        <p 
                                        className='text-xs text-gray-400'
                                        >{data.text}</p>
                                        <h1
                                        className='text-xl font-bold text-black/80 dark:text-white'
                                        >{data.name}</h1>
                                    </div>
                                </div>
                                <p
                                className='text-black/20 dark:text-black/80 text-9xl font-serif absolute top-0 right-0'
                                >''</p>
                            </div>
                        </div>
                    ))
                }</Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;
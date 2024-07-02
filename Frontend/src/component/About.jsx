import React from 'react'

function About() {
  return (
   <>
   <div className="max-w-screen-3xl container mx-auto md:px-20  px-4 flex flex-col md:flex-row my-10">
   <div className="order-2 md:order-1 carousel carousel-vertical w-120 rounded-box h-96">
  <div className="carousel-item w-full h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
  </div>
</div>

<div className='order-1 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
  <div>
    <h1 className='text-7xl animate-bounce'>About</h1>
    <p className='text-2xl animate-pulse text-green-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In placeat, ut, maxime distinctio quos eum consectetur amet id doloremque reprehenderit soluta delectus minima laborum accusamus aliquam esse? Maxime, temporibus rem.</p>
    <div class="py-5 group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-900 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden mt-20 ml-40">
      <div class="w-28 h-28 bg-blue-700 mt-4 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500"></div>
      <div class="z-10 group-hover:-translate-y-10 transition-all duration-500">
        <span class="text-2xl font-semibold">Deepa Das</span>
        <p>Mern stack developer</p>
      </div>
      <a class="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Follow</a>
    </div>
  </div>
</div>

    
  </div>








   </>
  )
}

export default About

import React from 'react'

function Cards({item}) {

  return (
   <>
   <div className="mt-4 my-3 px-8" >
   <div className="card w-91 bg-base-100 shadow-xl hover:scale-105 ">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-4">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px]  hover:text-white hover:bg-green-700 duration-200">Buy</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards

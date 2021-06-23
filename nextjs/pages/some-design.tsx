import React from "react";

const Home = () => {

  // https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg
  return (
    <div className="h-screen p-10 overflow-hidden">
      <div className="bg-gray-200	rounded-xl w-full h-5/6 	">
        <div className="bg-gradient-to-r from-yellow-400  via-pink-50 to-red-500  transform -rotate-3 rounded-xl w-full  grid justify-items-center md:h-screen  h-full p-10	">
          <div className="bg-white overflow-hidden transform rotate-3  md:h-5/6 rounded-xl w-full flex flex-row md:flex-col ">
            <img className="w-3/8 h-full md:h-24 md:object-cover md:h-2/6" src={"/pic.jpg"} />
            <div className="h-full  w-full p-6 flex md:h-4/6 flex-col">
              <div className="h-full w-full  flex justify-between" >
                <p className="font-black md:text-xl font-semibold text-2xl" >
                  Classic  Utility Jacket
                  </p>
                <p className="font-black md:text-xl font-semibold text-2xl text-gray-500">
                  $110.00
                </p>

              </div>
              <div className="h-full w-full flex justify-between" >
                <p className="font-normal md:text-sm text-lg text-gray-500 relative -top-3 " >
                  In Stock
                  </p>
              </div>
              <div className="h-full w-full flex justify-between" >
                <p className="bg-gray-200 rounded-xl font-normal md:text-sm text-lg w-10 h-10 flex items-center justify-center	 " >
                  XS
                  </p>
                <p className="font-normal md:text-sm text-lg w-10 h-10 flex items-center justify-center	text-gray-500 " >
                  S
                  </p>
                <p className="font-normal md:text-sm text-lg w-10 h-10 flex items-center justify-center	text-gray-500 " >
                  M
                  </p>
                <p className="font-normal md:text-sm text-lg w-10 h-10 flex items-center justify-center	text-gray-500 " >
                  L
                  </p>
                <p className="font-normal md:text-sm text-lg w-10 h-10 flex items-center justify-center	text-gray-500 " >
                  XL
                  </p>
                <p className="font-normal md:text-sm pt-1 md:pt-2 underline text-lg text-gray-500 items-center justify-center">
                  size Guid
                </p>
              </div>
              <div className="h-full relative top-1 w-full flex justify-between" >
                <button className="font-nomal h-9 border rounded-xl w-5/12 text-lg text-white bg-black border-gray-300" >
                  Buy Now
                  </button>
                <button className="font-nomal h-9 border rounded-xl w-5/12 text-lg text-gray-500" >
                  Add to bag
                  </button>
                <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                  <svg width="20" height="20" fill="currentColor">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </button>
              </div>
              <div className="h-full w-full  flex  justify-between" >
                <p className="font-nomal text-lg text-gray-500" >
                  Free shipping on all continental US orders.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home

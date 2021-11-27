import React from "react";

const Home = () => {
  const arrayItem = [
    {
      heading: "Api Integration",
      subHeading: "Engineering",
    },
    {
      heading: "New Benefits Plan",
      subHeading: "Homen Resource Department",

    }, {
      heading: "Onboarding Emails",
      subHeading: "Customer Success"
    }

  ]
  return (
    <div className="md:p-0 p-10 pt:10 overflow-hidden">
      <div className="transform md:p-5 p-8  rotate-1 bg-blue-400	rounded-xl w-full h-full ">
        <div className="bg-white overflow-auto box-border flex-col transform -rotate-1 p-8 md:p-3 h-full  md:h-5/6 rounded-xl w-full flex flex-row ">
          <div className="flex justify-between flex-row w-full ">
            <p className="font-semibold">
              Project
            </p>
            <button className="p-2 relive -top-4 bg-blue-200 text-gray-500 rounded-md ">
              <span>+</span> ADD
          </button>
          </div>
          <div className="w-full flex-row relative ">
            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
            <input placeholder="filter project" className="w-full pl-10 text-thin focus:outline-none border-2  p-2 focus:border-blue-500 rounded-lg h-10	mt-5 mb-5" />
          </div>
          <div className="w-secreen justify-start flex flex-wrap flex-row relative">
            {arrayItem.map((item, index) => {
              return <div key={index} className="w-2/6 box-border  md:w-full lg-w-3/6 sm:w-full p-2 ">
                <div className="group border w-full hover:bg-blue-500 flex md:flex-row justify-between sm:flex-col flex-col flex-wrap rounded-xl p-4">
                  <div>
                    <p className="font-semibold group-hover:text-white text-black"> {item.heading}</p>
                    <p className="truncate font-normal w-full overflow-hidden  overflow-ellipsis group-hover:text-white text-gray-500"> {item.subHeading}</p>
                  </div>
                  <div className="flex pt-3 flex justfy-start  -space-x-2">
                    <img className="w-7 h-7 rounded-full border-2  border-white" src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"} />
                    <img className="w-7 h-7 relative rounded-full border-2 border-white" src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"} />
                    <img className="w-7 h-7 relative rounded-full border-2 border-white" src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"} />

                    <img className="w-7 h-7  relative rounded-full border-2 border-white" src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"} />
                  </div>
                </div>
              </div>
            })}
            <div className="w-2/6 box-border  md:w-full lg-w-3/6 sm:w-full p-2 ">
              <div className="hover:border-white border-3 border-dashed w-full  hover:shadow-lg text-gray-500  flex items-center justify-center  rounded-xl p-4">
                New Project
              </div>
            </div>

          </div>
        </div>


      </div>
    </div >
  )
}

export default Home

{/* <div className="bg-white overflow-hidden transform rotate-3  md:h-5/6 rounded-xl w-full flex flex-row md:flex-col ">
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
                <p className="bg-gray-200 rounded-xl font-normal md:text-sm text-lg w-10 flex items-center justify-center	 " >
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
        </div> */}
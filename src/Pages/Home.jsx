import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  let searchRef = useRef();

  const [search, setsearch] = useState("Pizza");
  const [arr, setarr] = useState([]);
  // console.log(arr);

  const fetchData = async () => {
    let res = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=4e5dfb47&app_key=e7896e893e4886d83e5a46ac356bb752`
    );

    let data = await res.json();
    console.log(data.hits); //Give a data to Asked you
    setarr(data.hits);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  // const handelChange = (e) => {
  //   let value = e.target.value;
  //   setsearch(value);
  // };


  const handelSearch = (e) => {
    console.log("run");
    let value = searchRef.current.value
    setsearch(value)
  };

  return (
    <div>
      <div className="w-max m-auto mt-20 mb-6 flex gap-5">
        <input
       ref={searchRef}
          type="text"
          placeholder="Search a Recipe"
          className="py-2 px-4 rounded-md bg-pink-100"
        />
        <button
          onClick={handelSearch}
          className="bg-blue-500 py-2 px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-12 py-4 px-6 gap-4 ">
        {arr.map((ele, i) => {
          return (
            <div
              key={i}
              class=" flex flex-col justify-between  lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-800"
            >
              <a href="#">
                <img
                  class="p-8 h-[250px] w-full rounded-t-lg"
                  src={ele.recipe.image}
                  alt="product image"
                />
              </a>
              <div class="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {ele.recipe.label}
                  </h5>
                </a>

                <div class="flex items-center justify-between mt-3">
                  <Link
                    to="/Single"
                    state={ele.recipe}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Recipe
                  </Link>
                  {/* <button onClick={()=>handelClick(ele)} className="bg-blue-300 p-2">Click me</button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;

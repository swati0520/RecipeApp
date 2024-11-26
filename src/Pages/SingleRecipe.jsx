import React from "react";
import { Link, useLocation } from "react-router-dom";

const SingleRecipe = () => {
  let locaction = useLocation();
  // console.log(locaction.state);
  let recipe = locaction.state;
  return (
    <div>
      <div className=" flex md:flex-row flex-col gap-5 bg-slate-300 w-max m-auto mt-20 p-3 rounded-md">
        <div className="left">
          <img src={recipe.image} alt="" />
        </div>
        <div className="right">
          <h3 className="mb-2lg:text-3xl md:text-2xl  ">
            {" "}
            <span>Titel:</span>
            {recipe.label}
          </h3>
          <h3 className="mb-2">DishType:{recipe.dishType} </h3>
          <h3 className="mb-2">MealType:{recipe.mealType} </h3>
          <h3 className="mb-2">CuisineType:{recipe.cuisineType} </h3>
          <Link to={recipe.url} className="bg-amber-800  p-2 w-max my-3 block rounded-md">
            Recipe Method
          </Link>
        </div>
      </div>

      <div className="w-[80%] mx-auto my-4 bg-blue-300">
        <ul>
          <b className="text-xl">Ingredients</b>
          {recipe.ingredientLines.map((ele)=>{
            return <li>{ele}</li>
          })}

        </ul>
      </div>

      <div className="relative overflow-x-auto mt-3 w-[80%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
              Nutrients
              </th>
              <th scope="col" className="px-6 py-3">
                Label
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Unit
              </th>
            </tr>
          </thead>
          <tbody>
            
            {
            Object.entries(recipe.totalNutrients).map(([key, value], i) => {
              return (
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {key}
                  </th>
                  <td className="px-6 py-4">{value.label}</td>
                  <td className="px-6 py-4">{value.quantity}</td>
                  <td className="px-6 py-4">{value.unit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <ul>
        {
            Object.entries(recipe.totalNutrients).map(([key, value], i) => {
              return (
                <li className="bg-white flex justify-between dark:bg-gray-200">
                  <span
                    scope="row"
                    class="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {key}
                  </span>
                  <span className="px-6  py-4">{value.label}</span>
                  <span className="px-6 py-4">{value.quantity}</span>
                  <span className="px-6  py-4">{value.unit}</span>
                </li>
              );
            })
            }

        </ul> */}
      </div>
    </div>
  );
};

export default SingleRecipe;

import React, { useState } from 'react'
import { useParams } from 'react-router';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const {restaurantId} = useParams();
    const restoData = useRestaurantMenu(restaurantId); //created custom hook "useRestaurantMenu" for fetching restaurant menu data
    const [showItems, setShowItems] = useState(null);
    
    if(restoData === null){
        return <Shimmer />
    }
    console.log(restoData);
    /* siwggy live api data accessing
    const {name, avgRating, costForTwoMessage, cuisines} = restoData?.cards[2]?.card?.card?.info;
    const categories = (restoData.cards[4].groupedCard.cardGroupMap.REGULAR.cards).filter((c)=> c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    //console.log(categories);
    */
   const {name, avgRating, costForTwoMessage, cuisines} = restoData?.card?.card?.info;
    const categories = (restoData.groupedCard.cardGroupMap.REGULAR.cards).filter((c)=> c.card.card["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    const handleToggle = (categoryId)=>{
        setShowItems(showItems === categoryId ? null : categoryId);
    }
    
  return (
    <div className='m-auto p-6 bg-white rounded-2xl shadow-lg border border-gray-100 max-w-2xl hover:shadow-xl transition-shadow'>
         <h1 className='text-3xl font-extrabold text-gray-900 mb-3'>{name}</h1>
        <div className="flex items-center gap-4 mb-4">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
            avgRating >= 4.3
            ? "bg-green-500 text-white"
            : avgRating >= 3.5
            ? "bg-orange-400 text-white"
            : "bg-red-500 text-white"
           }`}>
             {avgRating} ★
          </span>
          <span className="text-gray-600 text-sm">{costForTwoMessage}</span>
        </div>
         <h2 className='text-gray-500 text-sm mb-5'>{cuisines.join(",")}</h2>
         <ul className="space-y-3">
          {/* for each category, we should have an accordion */}
          {categories?.map((category)=>{
                return <RestaurantCategory key={category?.card?.card?.categoryId} categoryData={category?.card?.card} onToggle={ ()=> handleToggle(category?.card?.card?.categoryId)} isOpen = {showItems === category?.card?.card?.categoryId }/>
          }
          )}
         </ul>
    </div>
   
  )
}

export default RestaurantMenu;
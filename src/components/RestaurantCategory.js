import React, { useState } from "react";
import {CHEVRON_DOWN} from "../utils/constants";
import ItemList from "./ItemList";

const RestaurantCategory = ({categoryData,onToggle, isOpen})=>{

/* commented becuase lifting the state up to implement one accordion to be opened at a time

    const [showItems, setShowItems] = useState(false);
    const handleClick = ()=>{
        setShowItems(!showItems);
    }
*/
    return(
        <div>
            <div className="w-full bg-gray-50  shadow-lg p-4 " >
                 <div className="flex justify-between items-center cursor-pointer" onClick={onToggle}>
                     <span className="font-bold">{categoryData.title} ({categoryData.itemCards.length })</span>
                     <img src={CHEVRON_DOWN} className="size-4">
                     </img>
                 </div>
                  {/* {showItems && <ItemList items={categoryData.itemCards} />} */}
                  {isOpen && <ItemList items={categoryData.itemCards} showAddBtn = {true} />}
            
            </div>
        </div>
       
    )
}

export default RestaurantCategory;
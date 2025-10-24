import React, { useState } from "react";
import { VEG_ICON, NON_VEG_ICON, MEDIA_ASSETS_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";


const ItemCard = ({item, index, showAddBtn, isLast})=>{

    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);
    const itemInCart = cartItems.find(
        (cartItem) => cartItem.card.info.id === item.card.info.id
    );
    const quantity = itemInCart ? itemInCart.quantity : 0;

    const handleAddItem = () => dispatch(addItem(item));
    const handleRemove = () => dispatch(removeItem(item.card.info.id));

    const {isVeg, name, price, defaultPrice, finalPrice, imageId } = item.card.info;
    const basePrice = (price ?? defaultPrice) / 100;  // if price exists, use it, else defaultPrice
    const discountedPrice = finalPrice ? finalPrice / 100 : null;
        const description = item?.card?.info?.description || "";
    const truncatedText = description.length>100 ? item.card.info.description.slice(0,100) + "..." : description;
    
    return (
        <div key={item.card.info.id} className="p-1.5" data-testid="foodItems">
            <img src={isVeg ? VEG_ICON : NON_VEG_ICON } className="w-5 mb-2"/>
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <span className="font-bold text-gray-600">{name}</span>

                    <p>{discountedPrice ? <><del className="text-gray-400 font-bold">₹{basePrice}</del><span className="font-bold"> ₹{discountedPrice}</span></> : <span className="font-bold">₹{basePrice}</span>}</p>

                    <p>{expanded ? description : truncatedText}{description.length>100 && <button className="text-blue-600 ml-1 font-semibold cursor-pointer" onClick={()=>setExpanded(!expanded)}>{expanded ? "less" : "more"}</button> }</p>
                    
                </div>
                    <div  className="relative w-full md:w-28 h-28">
                    {imageId && <img src={MEDIA_ASSETS_URL + imageId} className="w-full md:w-28 h-28 object-cover rounded-lg"/> }
                        {showAddBtn && (
                            <div
                            className={
                                (imageId ? "absolute bottom-[-12px] " : "") +
                                "bg-white w-20 mx-4 rounded-lg font-bold shadow-md text-center"
                            }
                            >
                            {quantity === 0 ? (
                                <button
                                className="text-green-600 w-full p-1 hover:bg-gray-100 cursor-pointer rounded-lg"
                                onClick={handleAddItem}
                                >
                                ADD
                                </button>
                            ) : (
                                <div className="flex items-center justify-between px-2 py-1 text-green-600">
                                <button
                                    onClick={handleRemove}
                                    className="px-2 text-lg font-bold hover:bg-gray-200 rounded cursor-pointer"
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button
                                    onClick={handleAddItem}
                                    className="px-2 text-lg font-bold hover:bg-gray-200 rounded cursor-pointer"
                                >
                                    +
                                </button>
                                </div>
                            )}
                            </div>
                        )}
                    </div>
            </div>
                    {!isLast && <div className="border-2 border-gray-300 w-full my-5"></div>}
        </div>
        
    )
}

const ItemList =({items, showAddBtn})=>{
    // console.log(items.length);
    
    return(
        <div className="mt-2">
                {items.map((item,index)=>(
                    // console.log(item);
                    //created ItemCard component as useState should not be used in map()
                   <ItemCard key={item.card.info.id} item={item} showAddBtn={showAddBtn} isLast={index === items.length - 1} />
                ))}      
        </div>
    )
}

export default ItemList;
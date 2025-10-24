import React from "react";
import ReactDOM from "react-dom/client";
import {MEDIA_ASSETS_URL} from "../utils/constants";


// const RestaurantCard = () =>{
//     return (
//         <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73"></img>
//             <h3></h3>
//             <h4></h4>
//             <h4>4.4 stars</h4>
//             <h4>38 min</h4>
//         </div>
//     )
// }


// const RestaurantCard = (props) =>{
//     console.log(props);
//     return (
//         <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73"></img>
//             <h3>{props.resName}</h3>
//             <h4>{props.cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 min</h4>
//         </div>
//     )
// }



// const RestaurantCard = ({resName, cuisine}) =>{
//     return (
//         <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt = "res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/o6prrzzimmmnsgeuxf73"></img>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.4 stars</h4>
//             <h4>38 min</h4>
//         </div>
//     )
// }


/*
// this is for zomato mock data coming from mockData.js

const RestaurantCard = (props) =>{
    const {resName} = props;
    console.log({resName});
    return (
        <div className="restaurant-card">
            <img className="res-logo" alt="res-logo" src={resName.image.url} />
            <div className="res-details">
                <div className="row1">
                    <h3>{resName.name}</h3>
                    <div className="rating" style={{background: resName.rating.aggregate_rating >=4 ? "#48c479" : resName.rating.aggregate_rating >= 3.5 ? "#db7c38": "#e55252" }}>
                        <span className="rating-val">{resName.rating.aggregate_rating} </span>
                        <span className="rating-star">★</span>
                   </div>
                </div>
                
                <span className="cuisines">
                    {resName.cuisine.map((c) => c.name).join(", ")}
                </span>
            </div>
                <h4>{resName.costText.text}</h4>
            
        </div>
    )
}
    */


const RestaurantCard = (props) =>{
   // const {resName} = props;
    const {name, cloudinaryImageId, avgRating, cuisines, costForTwo } = props.resName;
    //console.log(props.resName);
    return (
        <div data-testid= "resCard" className="m-4 p-4 w-64 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition duration-300">
            <img className="rounded-lg w-full h-40 object-cover" alt="res-logo" src={MEDIA_ASSETS_URL + cloudinaryImageId} />
            <div className="mt-3">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg text-gray-800 truncate">{name}</h3>
                    <div className={`flex items-center px-2 py-1 text-sm font-semibold rounded-2xl ${
    avgRating >= 4.3 ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`}>
                        <span>{avgRating} </span>
                        <span className="ml-1">★</span>
                   </div>
                </div>
                
                <p className="text-gray-600 text-sm truncate">
                    {cuisines.join(",")}
                </p>
            </div>
                <h4 className="mt-2 font-medium text-gray-700">{costForTwo}</h4>
            
        </div>
    )
}



// higher order component
// takes RestaurantCard as input and return enhanced component RestaurantCardPromoted having promoted label
export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return (
            <div className="relative">
                <label className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase shadow-md transform -rotate-25 z-10">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}



export default RestaurantCard;
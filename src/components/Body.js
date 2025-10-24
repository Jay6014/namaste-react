import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//import resList from "../utils/mockData";
import UserContext from "../utils/UserContext";

const Body = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    let [listOfRestaurants , setListOfRestaurants] = useState([]);
    const [searchBoxVal, setSearchBoxVal] = useState("");


    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{

       /*
       appending corsproxy to api worked before, but not working anymore
       const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&pageis-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       */

       /* swiggy live api
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4325894&lng=78.4070691&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       */

       const data = await fetch("http://localhost:5000/dapi/restaurants/list/v5");

        const jsonData = await data.json();
        //console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //const restaurantsData = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants; // this is not a good way to write. we should use optional chaining
        const restaurantsData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(restaurantsData);
        setAllRestaurants(restaurantsData);
    }

    /*
   //   show loading if data is not loaded yet does not give good user experience. Instead we use Shimmer UI
    if(listOfRestaurants.length === 0){
        return (
            
            <div className="loading-container">
                <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="Loading..." />
            </div>
        )
    }
*/


/*
  // if listOfRestaurants length is 0 shows shimmer ui and return or else shows cards component. This can be written with terinary operator also
     if(listOfRestaurants.length === 0){
        return (
            <Shimmer />   // conditional rendering
        )
    }
*/
   const {loggedInUser,setUserName} = useContext(UserContext); 
   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false)
    return <h1>Looks like you're offline!! Please connect your internet connection</h1>
    
    return listOfRestaurants?.length === 0 ? ( <Shimmer /> ) : (
        // this is for zomato mockData
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white shadow-md rounded-lg p-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-6 px-4 sm:px-6">
                    <input className = "w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter here" value={searchBoxVal} data-testid="searchInput" onChange={(e)=>{ // In this input box, text value is tied(that means i have to give textbox value to a locla state variable) to searchBoxVal. so whenever we will type something inside this textbox, we want to update searchBoxVal. To update we should write setSearchBoxVal(e.target.value). here you are changing react state varibale while typing, that means react will re-renders this component
                        setSearchBoxVal(e.target.value); 
                    }} ></input>
                    <button className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition cursor-pointer" onClick={()=>{
                       const filtertedSearchofRestaurants = allRestaurants.filter((resto)=>{
                            return (
                                resto.info.name.toLowerCase().includes(searchBoxVal.toLowerCase())
                            );
                        })
                        setListOfRestaurants(filtertedSearchofRestaurants);
                    }}>Search</button>
                    
                </div>
                <div className="flex flex-col items-center gap-4 px-4 sm:px-6 my-6">
                <label className="self-start text-gray-700">User Name:</label>
                <input className = "w-full sm:w-80 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Enter here" value={loggedInUser} onChange={(e)=> setUserName(e.target.value)} ></input>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer" onClick={()=>{
                    setListOfRestaurants(allRestaurants);
                }}>See All Restaurants</button>
                <button className="w-full sm:w-auto bg-pink-400 text-white px-5 py-2 rounded-lg hover:bg-pink-500 transition cursor-pointer" onClick={()=>{
                    const filtertedListofRestaurants = allRestaurants.filter(
                        (restaurant)=> restaurant.info.avgRating >= 4.4
                    );
                    setListOfRestaurants(filtertedListofRestaurants);
                }}>Top Rated Restaurants</button>
                </div>
            </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {listOfRestaurants.map((restaurant)=>(
                    <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id} className="restaurant-link">
                        {/* if the restaurant is promoted then add a promoted label to it */}
                        {Object.keys(restaurant.info.badges).length === 0 ?
                        <RestaurantCard  resName={restaurant.info} /> :
                        <RestaurantCardPromoted resName={restaurant.info}/>}
                    </Link>
                ))} 
            </div>
        </div>
    )
}


export default Body;
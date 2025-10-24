import React, { useState, useEffect } from 'react';

const useRestaurantMenu = (resId) => {

    const [resMenuData, setResMenuData] = useState(null);
    useEffect(()=>{
        fetchrestoData();
    },[])

const fetchrestoData = async()=>{
    //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

    /* swiggy live api

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3924982&lng=78.46796379999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    */

    const data = await fetch("http://localhost:5000/dapi/menu/pl?restaurantId=" + resId);
    const jsonData = await data.json();
    setResMenuData(jsonData?.data);
    };

  return resMenuData;
}

export default useRestaurantMenu;
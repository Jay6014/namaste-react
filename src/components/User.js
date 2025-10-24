import React, { useEffect } from "react";

const User = ()=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Luna");
        },1000)

        return ()=>{
            clearInterval(timer);
            console.log("useEffect Return");
        }
    },[]);
    return (
        <div className="user-card">
            <h2>name: Kalix</h2>
            <h3>Location: Korea</h3>
            <h4>Contact: @Kalix123</h4>
        </div>
    )
}

export default User;
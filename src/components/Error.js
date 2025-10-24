import React from "react";
import { useRouteError } from "react-router";

const Error = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Oops!!</h1>
            <h1>Something went Wrong</h1>
             <h1>{err.data}</h1> {/*shows detailed error */}
        </div>
    );
}

export default Error;
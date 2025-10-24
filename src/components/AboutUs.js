import React from "react";
import ReactDOM from "react-dom/client";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


/*
Functional based component
---------------------------

const AboutUs = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <User />
            <UserClass name = {"Kalix (class:))"} location = {"Korea"} />
        </div>
    )
}

*/

// class based component
class AboutUs extends React.Component{
    
    constructor(props){
        super(props);
        console.log("Parent - About Class Constructor");  
    }

    componentDidMount(){
        console.log("Parent - About Class Component Did Mount");
        
    }
    render(){
        console.log("Parent - About Class Render");
        return (
        <div>
            <h1>About Us</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {(value) => {
                        return (
                        <div>
                            {console.log(value.loggedInUser)}
                            <h1 className="font-bold">LoggedIn User : {value.loggedInUser}</h1>
                        </div>
                        );
                    }}
                </UserContext.Consumer>

            </div>
            <h1></h1>
            <User />
            { /*<UserClass name = {"Kalix (class:))"} location = {"Korea"} /> */}
        </div>
        )
    }
}




export default AboutUs;
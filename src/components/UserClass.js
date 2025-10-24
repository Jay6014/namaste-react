import React from "react";

/*
Increment and decrement count
-----------------------------

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Child - UserClass Constructor"); 

        this.state = {
            count1: 0,
            count2: 1
        }
    }
     
    async componentDidMount(){
        console.log("Child - UserClass Component Did Mount");
        
    }

    render(){
        console.log("Child - UserClass Render");
        const {name,location} = this.props;
        const {count1, count2} = this.state;
        return(
            <div className="user-card">
                <h2>name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @Kalix123</h4>
                <h3>Count1 : {count1}</h3>
                <button onClick = {()=>{
                    this.setState({
                        count1: this.state.count1 + 1
                    })
                }}>Increment Count</button>
                <h3>Count2 : {count2}</h3>
                <button onClick={()=>{
                    this.setState({
                        count2: this.state.count2 -1
                    })
                }}>Decrement Count</button>
            </div>
        )
    }
}


export default UserClass;

*/


/*
//Making an API call inside class based component:
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Child - UserClass Constructor"); 

        this.state = {
            userData:{
                name: "Dummy",             // passing the default values to state variable
                email: "dummy@gmail.com",
                address: "India",
                phone: "090-879-7999" 
            }
        }
    }
     
    async componentDidMount(){
        console.log("Child - UserClass Component Did Mount");
        const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const jsonData = await data.json();
        //console.log(jsonData);

        //updating state variable. setState() is used to update the state variable in class based components
        this.setState({
            userData:jsonData
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }

    render(){
        console.log("Child - UserClass Render");
        const {name, email, address, phone} = this.state.userData;
        return(
            <div className="user-card">
                <h4>Name: {name}</h4>
                <h4>Location: {address.city}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phone}</h4>
                
            </div>
        )
    }
}


export default UserClass;
*/

// componentWillUnmount usage - clearing time interval
class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log("Child - UserClass Constructor"); 
    }
     
    componentDidMount(){
        console.log("Child - UserClass Component Did Mount");
        this.timer = setInterval(()=>{
            console.log("Akira");
        },1000);
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("Component Will Unmount")
    }

    render(){
        console.log("Child - UserClass Render");
        return(
            <div className="user-card">
                <h4>Name</h4>
                <h4>Location</h4>
                <h4></h4>
                <h4>Phone</h4>
                
            </div>
        )
    }
}


export default UserClass;
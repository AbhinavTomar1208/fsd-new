function Car1(props){
    const mystyle={
        color:"blue",
        backgroundColor:"lightgrey",
        height:"400px",
        width:"600px",
        textAlign:"center"
    }
    return(
       <>
        <h1>Car {props.example} </h1>
        <p> Car model {props.example} </p>
        <img style={mystyle} src={props.imlinks} alt="car1"/>
       </>
    )
}
export default Car1;
function Car3(props){
    return(
        <>
            <h1>This is Component Example</h1>
            <p style={{color:props.color}}>This is {props.color} one</p>
            <button>First</button>
            <button>Second</button>
            <button>Third</button>
        </>
    )
}
export default Car3;
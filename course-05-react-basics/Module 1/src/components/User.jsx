// function declartion
function User(props){
    return( 
       <h1>this is user page hello {props.user} </h1>
    )
    }
// function expression
const User2 = function(props){
    return(
        <h3>this is function expression</h3>
    )
}


export default User
function CurrentMessage() {
    const day = new Date().getDay();

    return (
        day>=1 && day<=5
       ?  <Workdays/>
        : <Weekend/>
      );
}
function Workdays(){
    const message = 'it is time to work'
    return(
        <h1>
            {message}
        </h1>
    )
}
function Weekend(){
    const message = 'it is weekend'
    return(
        <h1>
            {message}
        </h1>
    )
}
export default CurrentMessage;
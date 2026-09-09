import Child from "./Child";
function Parent() {
    const data = {
        heading : 'there is 90 discount'
        
    }

    return ( 
        <>
                <Child heading = {data.heading} />

        </>
     );
}

export default Parent;
function Btn() {
    const clickHandel=() =>{
        console.log('clicked')

    }

    return ( 
        <button onMouseOver={clickHandel}>click me</button>
     );
}

export default Btn;
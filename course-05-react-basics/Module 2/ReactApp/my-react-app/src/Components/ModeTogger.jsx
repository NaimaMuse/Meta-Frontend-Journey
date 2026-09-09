function ModeTogger() {
    const DarkModeOn = false;
    const darkMode = <h1>dark mode in one</h1>;
    const lightMode = <h1>light mode is one</h1>;
    return ( 
        <>
        {DarkModeOn? darkMode : lightMode}
        </>
     );
}

export default ModeTogger;
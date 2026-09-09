function Login() {
    const isLoggedIn  = false
  
    return (
    <h1>
      {isLoggedIn ? "Welcome!" : "Please log in"}
    </h1>
  )
}

export default Login;
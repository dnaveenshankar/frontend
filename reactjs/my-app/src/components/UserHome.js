function UserHome(){

    let isLoggedIn = true;

    return(
        <div>
        <h3>User Home</h3>

        {
            isLoggedIn ? <button >Logout</button> : <button>Login</button>
        }
        </div>)

}

export default UserHome;
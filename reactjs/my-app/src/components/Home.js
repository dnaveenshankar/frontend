import UserDashboard from "./UserDashboard";
import GuestDashboard
 from "./GuestDashboard";
function Home(){

    const isLoggedIn = false;

    if(isLoggedIn){
        return <UserDashboard />
    }
    else{
        return <GuestDashboard />
    }
}

export default Home;
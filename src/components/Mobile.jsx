import Aboutpage from "./Aboutpage"
import Contactpage from "./Contactpage"
import Header from "./Header"
import Projectlist from "./Projectlist"
import HomePage from "./HomePage"

function Mobile(){
    return(
        <>
        <Header/>
        <HomePage/>
        <Aboutpage/>
        <Projectlist/>
        <Contactpage/>
        </>
    )
}
export default Mobile
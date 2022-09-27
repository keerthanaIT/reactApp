import SectionFour from "../Components/SectionFour"
import SectionThree from "../Components/SectionThree"
import SectionTwo from "../Components/SectionTwo"
import Header from "./Header"
import Main from "./Main"

const Layout = () =>{
    return(
        <>
        <Header />
        <Main />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        </>
    )
}

export default Layout
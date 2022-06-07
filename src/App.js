import {Routes, Route} from "react-router";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import Writers from "./Pages/Writer/writer";
import SingleWriter from "./Pages/Writer/SingleWriter";
import BasicGrid from "./Pages/News/Cards";
import SingleCard from "./Pages/News/SingleCard";

// import Books from "./Pages/Books";


function App() {
    return (
        <div>
            {/*<Header/>*/}
            {/*<Toolbar/>*/}
            <Routes>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/writers"} element={<Writers limit={1000}/>}/>
                <Route path={'/writer'} element={<SingleWriter/>}/>
                <Route path={'/news'} element={<BasicGrid limit={1000}/>}/>
                <Route path={'/new'} element={<SingleCard/>}/>
                <Route path={"/"} element={<Main/>}/>
            </Routes>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;

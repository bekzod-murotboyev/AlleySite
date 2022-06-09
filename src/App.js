import {Routes, Route} from "react-router";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Main from "./Pages/Main";
import Writers from "./Pages/Writer/writer";
import SingleWriter from "./Pages/Writer/SingleWriter";
import News from "./Pages/News/index";
import SingleCard from "./Pages/News/SingleCard";
import Footer from "./components/Footer";
import SingleNews from "./Pages/Writer/writerNews/SingleNews";

// import Books from "./Pages/Books";


function App() {
    return (
        <div>
            <Routes>
                <Route path={"/login"} element={<SignIn/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={"/published_news"} element={<SingleNews/>}/>
                <Route path={"/writers"} element={<Writers limit={1000}/>}/>
                <Route path={'/writer'} element={<SingleWriter/>}/>
                <Route path={'/news'} element={<News limit={1000}/>}/>
                <Route path={'/new'} element={<SingleCard/>}/>
                <Route path={"/"} element={<Main/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

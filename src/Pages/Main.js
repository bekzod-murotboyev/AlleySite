import Header from "../components/Header";
import MainPage from "./MainPage";
import News from "./News";
import Writers from "./Writer/writer";
import Books from "./Books";
import Picture from "./PicturePage";
import Video from "../Pages/VideoPage/video"
import Map from "./MapPage/Map";
import Title from "./News/title";
function Main() {

    return (
        <div>
            <Header/>
            <MainPage/>
            <Video />
            <Writers limit={4}/>
            <Title/>
            <News limit={4}/>
            <Books />
            <Picture/>
            <Map/>
        </div>
    )
}

export default Main
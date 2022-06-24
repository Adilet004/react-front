import './App.css';
// import Footer from "./components/Footer";
import Example from "./component/Example";
import {Routes, Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Meat from "./component/Meat";
import About from "./component/About";
import Blog from "./component/Blog";
import Support from "./component/Support";
import Popular from "./component/pages/Popular";
import TopRated from "./component/pages/TopRated";
function App() {


    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                {/*<Route path={"/recipes"} element={<Example/>}/>*/}
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                {/*<Route path={"/blog"} element={<Blog/>}/>*/}
                {/*<Route path={"/support"} element={<Support/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;

import {Home} from "./components/Home";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import "./style.scss"

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;

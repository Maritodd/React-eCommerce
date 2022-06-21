import {Items} from "./components/Items";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import "./style.scss"

function App(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Items items={props.store._state.items}/>
            <Footer/>
        </div>
    );
}

export default App;

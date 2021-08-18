import logo from "./logo.svg";
import "./style/App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <NavBar></NavBar>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;

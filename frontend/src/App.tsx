import HomePage from "./pages/HomePage.tsx";
import {Link, Route, Routes} from "react-router-dom";
import IncomePage from "./pages/IncomePage.tsx";
import OutputPage from "./pages/OutputPage.tsx";

function App() {

    return (
        <>
            <div className="nav-bar">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/income"}>Einnahmen</Link></li>
                    <li><Link to={"/output"}>Ausgaben</Link></li>

                </ul>
            </div>

            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/income"} element={<IncomePage/>}/>
                <Route path={"/output"} element={<OutputPage/>}/>
            </Routes>
        </>
    )
}

export default App

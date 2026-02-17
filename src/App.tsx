import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsDetail from "./components/NewsDetail";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<News />}></Route>
                    <Route path="/:id" element={<NewsDetail />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

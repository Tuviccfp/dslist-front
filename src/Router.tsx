import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ViewGameID from "./components/GameID";
import FormGame from "./components/FormGame";

export default function Navigation() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<App />} />
                <Route path={'/games/search/:id'} element={<ViewGameID />} />
                <Route path={'/save-games'} element={<FormGame/>} />
            </Routes>
        </BrowserRouter>
    )
}
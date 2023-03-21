import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AllAlbums from "./components/album/All-albums";
import Album from "./components/album/Album";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Router>
                <Routes>
                    <Route path="/" element={<AllAlbums/>}/>
                    <Route path="/photos/:albumId" element={<Album/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App;

import React from "react";
import { PhotoList } from "./component/photoList";
import Footer from "./component/footer";
import FavoriteList from "./component/favoriteList";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from "./component/navbar";
import Home from "./component/home";

function App() {

  return (
    <div style={{backgroundColor: '#000000'}}>
    <BrowserRouter>
      <NavBar />
      <Home />
      <Routes>
        <Route path="/home" element={<PhotoList />} />
        <Route path="/favorite" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
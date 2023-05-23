import React from "react";

import { RootStoreProvider } from "../store/RootStoreProvider";
import Header from "./Header/HeaderComponent";
import Main from "./Main/MainComponent";
import Footer from "./Footer/FooterComponent";

import '../styles/scss/App.scss';

function App() {
    return (
        <RootStoreProvider>
            <Header />
            <Main />
            <Footer />
        </RootStoreProvider>
    );
}
 
export default App;
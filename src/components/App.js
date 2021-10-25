import React from "react";

import { StoreRootProvider } from "../providers/StoreRootProvider";
import Header from "./Header/HeaderComponent";
import Main from "./Main/MainComponent";
import Footer from "./Footer/FooterComponent";

import '../scss/App.scss';

function App() {
    return (
        <StoreRootProvider>
            <Header />
            <Main />
            <Footer />
        </StoreRootProvider>
    );
}
 
export default App;
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import GlobalProvider from "./store/GlobalContext";

const App = () => {
    const [deleted, setDeleted] = useState(false);

    return (
        <GlobalProvider>
            <div className="min-h-screen py-1 flex flex-col items-center">
                {!deleted && <UseEffect setDeleted={setDeleted} className="order-1" />}
                <UseState className="order-2" />
                <UseContext className="order-3" />
            </div>
        </GlobalProvider>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
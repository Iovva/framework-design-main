import { useContext } from "react";
import PaddedDiv from "./PaddedDiv";
import { GlobalContext } from "../store/GlobalContext";

const UseContext = () => {
    const { background, toggleBackground } = useContext(GlobalContext);
    const isDarkMode = background === "bg-gradient-to-b from-gray-900 to-black";

    return (
        <PaddedDiv title={"useContext"}>
            <div className={`flex flex-col items-center gap-10 p-10 rounded-lg shadow-inner`}>

                <div className="text-center text-xl font-light">
                useContext is a React hook commonly employed for managing global data across components<br></br> 
                It fosters a cleaner and more efficient codebase by centralizing state management logic.
                </div>

                <hr className="w-full border-gray-400" />


                <div className="text-center text-xl font-light">

                The button below toggles the website theme.
                </div>

                <button
                    className={`${
                        isDarkMode ? "bg-white text-black" : "bg-black text-white"
                    } hover:scale-110 transform transition-transform duration-300 font-semibold py-3 px-8 rounded-lg`}
                    onClick={toggleBackground}
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </PaddedDiv>
    );
};

export default UseContext;
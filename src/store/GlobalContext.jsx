import { useState, createContext } from "react";

const initialValue = {
    background: "black", // Initial background set to dark mode
    toggleBackground: () => {}, // Function to toggle background color
}

export const GlobalContext = createContext(initialValue);

const GlobalProvider = ({ children }) => {
    const [background, setBackground] = useState("bg-gradient-to-b from-gray-900 to-black");

    const toggleBackground = () => {
        setBackground(prevBackground =>
            prevBackground === "bg-gradient-to-b from-gray-900 to-black"
                ? "bg-gradient-to-b from-gray-100 to-white"
                : "bg-gradient-to-b from-gray-900 to-black"
        );
    };

    return (
        <GlobalContext.Provider value={{ background, toggleBackground }}>
            <div className={`${background} min-h-screen`}>
                {children}
            </div>
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;
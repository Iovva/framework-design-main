import { useState, useContext } from "react";
import PaddedDiv from "./PaddedDiv";
import { GlobalContext } from "../store/GlobalContext";

const COLORS = Object.freeze(["indigo", "purple"]);

const UseState = () => {
    const [color, setColor] = useState(0);
    const [textBoxVisible, setTextBoxVisible] = useState(true);
    const { background } = useContext(GlobalContext);

    const handleButtonClick = () => {
        setColor(1 - color); // Toggle color
        setTextBoxVisible(prevState => !prevState); // Toggle text box visibility
    };

    return (
        <PaddedDiv title={"useState"}>
            <div className={`flex flex-col items-center gap-10 bg-${background}-200 p-10 rounded-lg shadow-inner`}>
                <div className="text-center text-xl font-light">
                useState, a fundamental React hook, facilitates state management within components.<br></br>
                When the state value changes, it prompts a re-render, ensuring the UI reflects the updated data. <br></br>
                When the Re-Render happens, it does not trigger this effect for other components. <br></br>
                In this scenario, the 'color' state alters upon button click, leading to a re-render and the display of the new (transparent) color.

                
                </div>

                <hr className="w-full border-gray-400" />

                <button
                    className="bg-purple-600 hover:bg-purple-400 text-white font-semibold py-3 px-8 rounded-lg transform transition-transform duration-300 hover:scale-110"
                    onClick={handleButtonClick}
                >
                    Change state
                </button>

                {textBoxVisible && ( // Render text box only if it's visible
                    <div className={`w-fit p-4 h-14 bg-${COLORS[color]}-400 text-white rounded-lg text-2xl font-medium`}>
                        Lorem Ipsum
                    </div>
                )}
            </div>
        </PaddedDiv>
    );
};

export default UseState;

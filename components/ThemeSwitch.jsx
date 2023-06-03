import { useEffect, useState } from "react";
import LightTheme from "./LightTheme";

// Custom hook to manage the light mode state and localStorage
function useLightMode() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Retrieve the lightMode value from localStorage
    const lightModeValue = JSON.parse(localStorage.getItem("lightMode"));
    // If the lightMode value is not null, set the lightMode state to the lightModeValue
    if (lightModeValue !== null) {
      setLightMode(lightModeValue);
    }
  }, []);

  const toggleLightMode = () => {
    localStorage.setItem("lightMode", JSON.stringify(!lightMode));
    setLightMode(!lightMode);
  };

  return [lightMode, toggleLightMode];
}

function ThemeSwitch() {
  // Use the custom hook to get the light mode state and the toggle function
  const [lightMode, toggleLightMode] = useLightMode();

  console.log("[ThemeSwitch] lightMode: ", lightMode);
  const text = lightMode ? "Dark Mode" : "Light Mode";

  return (
    <>
      <button onClick={toggleLightMode}>
        {/* Change the text according to the text variable value! */}
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            color: #b2b2b2;
          }

          button:focus {
            outline: none;
          }

          button:active {
            color: #d5d5d5;
          }
        `}
      </style>
      {/* Use a ternary operator to conditionally render the LightTheme component */}
      {lightMode ? <LightTheme /> : null}
    </>
  );
}

export default ThemeSwitch;

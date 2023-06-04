import { useEffect, useState, useCallback, useMemo } from "react";
import LightTheme from "./LightTheme";

// Custom hook to manage the light mode state and localStorage
function useLightMode() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    // Retrieve the lightMode value from localStorage
    const lightModeValue = localStorage.getItem("lightMode");
    
    // If the lightMode value is not null and is valid JSON, set the lightMode state to the parsed value
    if (lightModeValue !== null) {
      try {
        const parsedValue = JSON.parse(lightModeValue);
        if (typeof parsedValue === "boolean") {
          setLightMode(parsedValue);
        }
      } catch (error) {
        console.error("Error parsing lightMode value from localStorage:", error);
      }
    }
  }, []);

  // Toggle the lightMode state and set the localStorage value
  const toggleLightMode = useCallback(() => {
    const newLightMode = !lightMode;
    localStorage.setItem("lightMode", JSON.stringify(newLightMode));
    setLightMode(newLightMode);
  }, [lightMode]);

  return [lightMode, toggleLightMode];
}

function ThemeSwitch() {
  // Use the custom hook to get the light mode state and the toggle function
  const [lightMode, toggleLightMode] = useLightMode();

  console.log("[ThemeSwitch] lightMode: ", lightMode);
  const text = useMemo(() => (lightMode ? "Dark Mode" : "Light Mode"), [lightMode]);

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
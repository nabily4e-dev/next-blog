function LightTheme() {
  return (
    <style jsx global>
      {`
        /* Light Theme */
        :root {
          --background-color: #fff;
          --text-color: #000;
          --primary-color: #0070f3;
          --secondary-color: #eaeaea;
          --border-color: #eaeaea;
          --box-shadow-color: #000;
          --link-color: #34c0a9;
        }
      `}
    </style>
  );
}

export default LightTheme;

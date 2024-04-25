document.addEventListener("DOMContentLoaded", function () {
  const lightTheme = {
    "--accent-color": "#5bb9f3",
    "--accent-color-dimmed": "#48a3dc",
    "--background-color": "#e6e9ec",
    "--background-color-secondary": "#bfc1c5",
    "--background-color-tertiary": "#d9dde0",
    "--text-color-primary": "#222324",
    "--text-color-secondary": "#343436",
    "--border-small": "2px",
    "--border-medium": "4px",
    "--border-large": "8px",
    "--font-size-small": "1.5rem",
    "--font-size-smallish": "2rem",
    "--font-size-medium": "3rem",
    "--font-size-mediumish": "4rem",
    "--font-size-large": "5rem",
    "--font-size-xlarge": "8rem",
    "--font-size-jumbo": "10rem",
  };

  const darkTheme = {
    "--accent-color": "#3c95cc",
    "--accent-color-dimmed": "#2c7eb1",
    "--background-color": "#111",
    "--background-color-secondary": "rgb(61, 58, 58)",
    "--background-color-tertiary": "#1a1a1b",
    "--text-color-primary": "#cfd2d6",
    "--text-color-secondary": "#919196",
    "--border-small": "2px",
    "--border-medium": "4px",
    "--border-large": "8px",
    "--font-size-small": "1.5rem",
    "--font-size-smallish": "2rem",
    "--font-size-medium": "3rem",
    "--font-size-mediumish": "4rem",
    "--font-size-large": "5rem",
    "--font-size-xlarge": "8rem",
    "--font-size-jumbo": "10rem",
  };

  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  let isDarkMode = true;

  themeToggle.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    const theme = isDarkMode ? darkTheme : lightTheme;
    applyTheme(theme);
  });

  function applyTheme(theme) {
    console.log("Script loaded");

    Object.keys(theme).forEach((key) => {
      root.style.setProperty(key, theme[key]);
    });
  }
});

export const themModeHeanDiler = (mode: string) => {
  // Whenever the user explicitly chooses light mode
  localStorage.theme = mode;
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  document.documentElement.classList.toggle(
    "dark-theme",
    localStorage.theme === "dark-theme" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

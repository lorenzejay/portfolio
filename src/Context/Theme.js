import { createContext } from "react";

const DarkThemeContext = createContext();

export const DarkThemeProvider = DarkThemeContext.Provider;
export const DarkThemeConsumer = DarkThemeContext.Consumer;

export default DarkThemeContext;

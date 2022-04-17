import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { Catalog } from "../../features/Catalog/Catalog";
import { Header } from "./Header";



function App() {
  const [darkMode,setDarkMode] = useState(false);
  const palatteType = darkMode ? 'dark':'light';
  const theme = createTheme({
    palette:{
      mode: palatteType,
      background:{
       default: palatteType === 'light'? '#eaeaea':'#121212'
      } 
    }
  })

  const handleThemeChange=()=>{
    setDarkMode(!darkMode);
}

  return (
    <ThemeProvider theme = {theme}>
    <CssBaseline />
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container>
    <Catalog/>
    </Container>
    </ThemeProvider>
  );
}

export default App;

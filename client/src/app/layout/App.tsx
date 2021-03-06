import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "../../features/about/AboutPage";
import { Catalog } from "../../features/Catalog/Catalog";
import { ProductDetails } from "../../features/Catalog/ProductDetails";
import { ContactPage } from "../../features/contact/ContactPage";
import { HomePage } from "../../features/home/HomePage";
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
        <Routes>
        <Route path = '/' element ={<HomePage />} />
        <Route path = '/catalog' element ={<Catalog />}/>
        <Route path = '/catalog/:id' element={<ProductDetails/>}/>
        <Route path = '/about' element={<AboutPage/>}/>
        <Route path = '/contact' element={<ContactPage/>}/>
        </Routes>
    </Container>
    </ThemeProvider>
  );
}

export default App;

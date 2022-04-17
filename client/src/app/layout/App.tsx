import { Container, CssBaseline, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Catalog } from "../../features/Catalog/Catalog";
import { Product } from "../models/product";
import { Header } from "./Header";



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  //fetches data
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
  //adds new product to an existing product
  const addProduct=()=>{
    setProducts(prevState => [...prevState,
      {
        id: prevState.length +101,
        name:'product' + ( prevState.length + 1 ),
        price:(prevState.length * 100),
        brand: 'Gcse',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/200'
      }]) //spread operater ...
  }

  return (
    <>
    <CssBaseline />
    <Header />
    <Container>
    <Catalog products ={products} addProduct={addProduct}/>
    </Container>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Catalog } from "../../features/Catalog/Catalog";
import { Product } from "../models/product";



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  },[])
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
    <div>
    <h1>Re-Store</h1>
    <Catalog products ={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;

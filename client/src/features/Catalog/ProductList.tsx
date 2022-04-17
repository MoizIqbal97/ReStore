import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import { Product } from "../../app/models/product"
import { ProductCard } from "./ProductCard";

interface Props {
    products: Product[];
}

export const ProductList =({products}:Props)=>{
    return(
    <List>
        {products.map(product =>(
          <ProductCard key={product.id} product={product}/>
        ))}
    </List>
    )
}
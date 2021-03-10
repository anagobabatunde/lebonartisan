import { useEffect, useState } from "react";
import API from "../api/api";
import Card from "../components/Card";

const Products = () => {
    const [products, setProducts] = useState({});
    useEffect(() => {
        API.getProducts().then(data => {
            console.log("je syis la")
            setProducts(data)
        })
    }, []);


    return (
        <div>
            <Card />
        </div>
    );
};

export default Products;

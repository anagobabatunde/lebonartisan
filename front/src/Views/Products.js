import { useEffect, useState } from "react";
import API from "../api/api";
import Card from "../components/Card";
import faker from "faker"
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        API.getProducts().then(data => {
            console.log("je syis la", data.data)
            setProducts(data.data)
        })
    }, []);


    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            {products.map((item, i) => {
                return (
                    <div key={i} style={{ margin: "5px" }}>
                        <Card product={item} image={"https://www.york.ac.uk/media/study/courses/undergraduate/electronics/Yellow-circuit-EE-crop1200.jpg"} key={item._id} />
                    </div>
                )
            })}
        </div>
    );
};

export default Products;

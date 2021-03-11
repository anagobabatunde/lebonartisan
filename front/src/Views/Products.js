import { useEffect, useState } from "react";
import API from "../api/api";
import Card from "../components/Card";
import faker from "faker"
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5000";

const Products = () => {
    const [products, setProducts] = useState([]);
    const socket = socketIOClient(ENDPOINT);
    useEffect(() => {
        API.getProducts().then(data => {
            setProducts(data.data)
        })
    }, []);

    useEffect(() => {
        socket.on("onProductAdd", data => {
            console.log("product", data.ops[0]);
            API.getProducts().then(data => {
                setProducts(data.data)
            })
        });
    }, [socket]);


    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            { products.length > 0 ? products.map((item, i) => {
                return (
                    <div key={i} style={{ margin: "5px" }}>
                        <Card product={item} image={"https://www.york.ac.uk/media/study/courses/undergraduate/electronics/Yellow-circuit-EE-crop1200.jpg"} key={item._id} />
                    </div>
                )
            }) : (<h1>O product</h1>)}
        </div>
    );
};

export default Products;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/api"
import Loader from "../../components/Loader"
import UpdateProduct from "../../components/UpdateProductForm";


const Products = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(async () => {
        setLoading(true)
        await API.getOne(id).then(data => {
            setProduct(data.data)
            setLoading(false)
            console.log("ici", data.data)
        }).catch(err => console.log(err))
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: "100%" }}>
            {loading ? (<Loader />) : (
                <UpdateProduct id={id} product={product} />
            )}
        </div>
    );
};

export default Products;
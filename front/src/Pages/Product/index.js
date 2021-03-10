// import { useEffect, useState } from "react";
// // import API from "../api/api";
// // import Card from "../components/Card";
// // import faker from "faker"
// export default function Products = () => {
//     useEffect(() => {
//         // API.getProducts().then(data => {
//         //     console.log("je syis la", data.data)
//         //     setProducts(data.data)
//         // })
//     }, []);


//     return (
//         <div>
//             je suis ixi
//         </div>
//     );
// };

// export default Products;

import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";

const ProductDetail = () => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: IFormInput) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ onChange, value }) => <input onChange={onChange} value={value} />}
            />
            <Controller
                name="iceCreamType"
                control={control}
                options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" }
                ]}
                as={Select}
            />
            <input type="submit" />
        </form>
    );
};
export default ProductDetail;
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Button,
    TextField,
    Select,
    MenuItem,
    Typography,
    Checkbox
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Rating from '@material-ui/lab/Rating';
import Message from "../../components/Message"
import API from "../../api/api"

const validationSchema = yup.object({
    name: yup
        .string('Enter the name Product')
        .required('Name is required'),
    type: yup
        .string().required("Required"),
    price: yup
        .number().required("Price is required"),
    rating: yup
        .number().required("Rating is required"),
    warranty_years: yup
        .number().required('Warranty is required'),
});

const WithMaterialUI = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")
    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            type: "",
            rating: "",
            warranty_years: "",
            available: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            API.createProduct(values).then(data => {
                console.log(data)
                setIsOpen(true)
                setType(data.status)
                setMessage(data.message)

                setTimeout(function () {
                    setIsOpen(false)
                    history.push('/products')
                }, 2000);
            })
        },
    });

    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: "100%" }}>
            <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                <div style={{ display: "flex", width: "50%", flexDirection: "column", justifyContent: "space-around", margin: "0 auto" }}>
                    <TextField
                        style={{ marginBottom: "30px" }}
                        id="name"
                        name="name"
                        label="Name"
                        variant="filled"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        style={{ marginBottom: "30px" }}
                        id="price"
                        name="price"
                        label="Price"
                        variant="filled"
                        type="number"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        error={formik.touched.price && Boolean(formik.errors.price)}
                        helperText={formik.touched.price && formik.errors.price}
                    />

                    <Select
                        style={{ marginBottom: "30px" }}
                        name="type"
                        label="Type"
                        labelId="demo-simple-select-label"
                        id="type"
                        variant="filled"
                        value={formik.values.type}
                        onChange={formik.handleChange}
                        error={formik.touched.type && Boolean(formik.errors.type)}
                        helperText={formik.touched.type && formik.errors.type}
                    >
                        <MenuItem value={"phone"}>Phone</MenuItem>
                        <MenuItem value={"computer"}>Computer</MenuItem>
                        <MenuItem value={"display"}>Display</MenuItem>
                    </Select>

                    <TextField
                        style={{ marginBottom: "30px" }}
                        id="warranty_years"
                        name="warranty_years"
                        label="Warranty"
                        variant="filled"
                        type="number"
                        value={formik.values.warranty_years}
                        onChange={formik.handleChange}
                        error={formik.touched.warranty_years && Boolean(formik.errors.warranty_years)}
                        helperText={formik.touched.warranty_years && formik.errors.warranty_years}
                    />
                    <Typography component="legend">Rating :</Typography>
                    <Rating
                        style={{ marginBottom: "30px" }}
                        id="rating"
                        name="rating"
                        value={formik.values.rating}
                        onChange={formik.handleChange}
                        error={formik.touched.rating && Boolean(formik.errors.rating)}
                        helperText={formik.touched.rating && formik.errors.rating}
                    />

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography component="legend">Available :</Typography>

                        <Checkbox
                            id="available"
                            name="available"
                            onChange={formik.handleChange}
                            checked={formik.values.available}
                            error={formik.touched.available && Boolean(formik.errors.available)}
                            helperText={formik.touched.available && formik.errors.available}
                        />
                    </div>

                    <Button color="primary" variant="contained" type="submit">
                        Create
        </Button>
                </div>
                <Message message={message} isOpen={isOpen} type={type} />
            </form>
        </div>
    );
};

export default WithMaterialUI;
import { useEffect, useState } from "react";
import { TextField, Checkbox } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import API from "../../api/api"
import Message from "../../components/Message"
import Button from '@material-ui/core/Button';
import Select from "react-select";
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Loader from "../../components/Loader"

const Products = () => {
    const methods = useForm();
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")
    const [loading, setLoading] = useState(false);
    const { handleSubmit, control, reset } = methods;
    const history = useHistory()
    const onSubmit = data => {
        console.log(data)
        let Product = {
            name: data.name,
            price: data.price,
            type: data.type.value,
            rating: data.rating,
            warranty_years: data.warranty_years,
            available: data.available
        }
        API.updateProduct(id, Product).then((data) => {
            console.log(data)
            setIsOpen(true)
            setType(data.status)
            setMessage(data.message)

            setTimeout(function () {
                setIsOpen(false)
                history.push('/products')
            }, 2000);
        })
    };
    const [product, setProduct] = useState({});
    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 200,
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }
    console.log("example");
    useEffect(async () => {
        setLoading(true)
        await API.getOne(id).then(data => {
            setProduct(data.data)
            setLoading(false)
            console.log(data.data)
        })
    }, []);


    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', width: "100%" }}>
            {loading ? (<Loader />) : (
                <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
                    <div style={{ display: "flex", width: "50%", flexDirection: "column", justifyContent: "space-around", margin: "0 auto" }}>
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={product.name}
                            rules={{ required: true }}
                            render={props =>
                                <TextField
                                    style={{ marginBottom: "30px" }}
                                    label="name"
                                    defaultValue={product.name}
                                    variant="filled"
                                    onChange={e => props.onChange(e.target.value)}
                                />
                            } // props contains: onChange, onBlur and value
                        />
                        <div style={{ marginBottom: "30px" }}>
                            <Controller
                                name="type"
                                control={control}
                                defaultValue={{
                                    value: product.type,
                                    label: product.type == "phone" ?
                                        "Phone" : product.type == "computer" ?
                                            "Computer" : product.type == "display" ?
                                                "Display" : "none"
                                }}
                                options={[
                                    { value: "phone", label: "Phone" },
                                    { value: "computer", label: "Computer" },
                                    { value: "display", label: "Display" }
                                ]}
                                as={Select}
                            /></div>
                        <Controller
                            name="price"
                            control={control}
                            defaultValue={product.price}
                            rules={{ required: true }}
                            render={props =>
                                <TextField
                                    label="Price"
                                    type="number"
                                    defaultValue={product.price}
                                    style={{ marginBottom: "30px" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => props.onChange(e.target.value)}
                                    variant="filled"
                                />
                            }
                        />
                        <Typography component="legend">Rating</Typography>

                        <Controller
                            name="rating"
                            control={control}
                            defaultValue={product.rating}
                            rules={{ required: true }}
                            render={props => (
                                <Rating
                                    style={{ marginBottom: "30px" }}
                                    defaultValue={product.rating}
                                    name="simple-controlled"
                                    onChange={e => props.onChange(e.target.value)}
                                />
                            )
                            } // props contains: onChange, onBlur and value
                        />

                        <Controller
                            name="warranty_years"
                            control={control}
                            defaultValue={product.warranty_years}
                            rules={{ required: true }}
                            render={props =>
                                <TextField
                                    label="Warranty"
                                    type="number"
                                    defaultValue={product.warranty_years}
                                    style={{ marginBottom: "30px" }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={e => props.onChange(e.target.value)}
                                    variant="filled"
                                />
                            }
                        />
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Typography component="legend">Available :</Typography>
                            <Controller
                                name="available"
                                control={control}
                                defaultValue={product.available}
                                // rules={{ required: true }}
                                render={props =>
                                    <Checkbox
                                        defaultValue={product.available}
                                        onChange={e => props.onChange(e.target.checked)}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                        checked={props.value}
                                    />
                                }
                            />
                        </div>
                        <Button variant="contained" color="primary" type="submit">
                            Edit
            </Button>
                    </div>
                    <Message message={message} isOpen={isOpen} type={type} />
                </form>
            )}
        </div>
    );
};

export default Products;
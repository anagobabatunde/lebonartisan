import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from "../components/Rating"
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function CardProducts({ product, image }) {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={image}
                    title="Contemplative Reptile"
                />
                <div style={{ display: "flex" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom component="h6">
                            Type : {product.type}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {product.price} $
          </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography gutterBottom component="h2">
                            <Rating rating={product.rating} />
                        </Typography>
                        <Typography gutterBottom component="h6">
                            Warranty : {product.warranty_years} years
                        </Typography>
                    </CardContent>
                </div>
            </CardActionArea>
            <CardActions>
                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                        Edit
        </Button>
                </Link>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardActions, CardContent, CardMedia, Typography, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props{
    product: Product;
}

export default function ProductCard({product}: Props) {
    return( <>
    
    {/* <ListItem key={product.id}>
        <ListItemAvatar>
            <Avatar src={product.pictureUrl} />
        </ListItemAvatar>
        <ListItemText>
            {product.name} --{product.price}
        </ListItemText>
    </ListItem> */}

    
    <Card>

            <CardHeader
            avatar={
                <Avatar sx={{bgcolor: 'secondary.main' }} >
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }

            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight: 'bold', color: "primary.main" }
            }}

            >

            </CardHeader>


            <CardMedia
                sx={{backgroundSize:'contain', height:140, bgcolor:'primary.light' }}                         
                
                image={product.pictureUrl}
                title={product.name}
                 />
            <CardContent>
                <Typography gutterBottom variant="h5" color='secondary' >
                    ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
                <Button size="small" component={Link} to={`/catalog/${product.id}`} >View</Button>
            </CardActions>
        </Card>
        
        </>


          )
}
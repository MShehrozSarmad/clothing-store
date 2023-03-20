import { ProductsContext } from "../../contexts/product.context";
import { useContext } from "react";


const Shoop = () => {
    const {products} = useContext(ProductsContext);
    return(
        <div>
            {products.map(({id,name}) => <h1 key={id}>{name}</h1>)}
        </div>
    );
};

export default Shoop;
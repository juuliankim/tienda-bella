import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartWidgetComponent = () => {

    const { quantItem } = useContext(CartContext);

    return (
        <>
        <ShoppingCartIcon/>
        ({quantItem})
        </>
    )
}

export default CartWidgetComponent;
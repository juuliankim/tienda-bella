import { btn, btnb } from "./itemCount.module.scss"

const ItemCountComponent = ({
    onAdd,
    stock,
    descripcion,
    inicial,
    contador,
    setContador
  }) => {
    const incrementar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      } else {
        alert("Nos quedamos sin stock");
      }
    };
  
    const decrementar = () => {
      if (contador > inicial) setContador(contador - 1);
    };
  
    const handlerOnAdd = () => {
      onAdd(contador);
    };
  
    return (
      <>
        <button className={btn} onClick={decrementar}>-</button>
        <b> {contador} </b>
        <button className={btn} onClick={incrementar}>+</button>
        <div>
          <p>
            {descripcion}: {stock}
          </p>
        </div>
        <div>
          <button className={btnb} onClick={handlerOnAdd}>Comprar</button>
        </div>
      </>
    );
  };
  
  export default ItemCountComponent;
  
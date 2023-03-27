import {useEffect, useState} from "react";

const ItemCount = ({stock}) => {
    const [items,setItems] = useState(1);
    const [itemStock,setItemStock] = useState(stock);

    const sumarStock = () => {
        if (items < itemStock){
            setItems(items + 1);
        }
    }
    const restarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    }

    const onAdd= () => {
        if(itemStock >= items){
            setItemStock(itemStock - items);
            setItems(1);
            console.log("Agregaste: " + items + " Productos al Carrito");
        }  
    }

    useEffect (() => {
        setItemStock(stock);
    },[stock]);

    return (
        <div className="container text-center">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group">
                        <button href="#" className="btn btn-warning" onClick={restarStock}>-</button>
                        <button href="#" className="btn btn-warning active">{items}</button>
                        <button href="#" className="btn btn-warning" onClick={sumarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn btn-warning" onClick={onAdd}>Al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;
//ProductItem.jsx file
import styles from './ProductItem.module.css';

console.log(styles);


function ProductItem ({item}) {
    return (
        <li >
            <p>                                       
            {item.name} - {item.price} Gold
            <br /> 
           <em className={styles.itemtext}> {item.description} </em>
            </p>       
        </li>
    );

}   

export default ProductItem;

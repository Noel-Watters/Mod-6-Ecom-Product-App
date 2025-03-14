import ProductItem from './ProductItem';
import styles from './ProductList.module.css';




function ProductList ({ items }) { //access items via props from App.jsx
return (
    <ul className={styles.itemlist}>
    {items.map((item, index) => (   //loops over every array object  
        <ProductItem key={index} item={item}/>
      ))}
    </ul>
);

}

export default ProductList;
//
import { useState } from 'react'
import ProductList from './ProductList';
import './App.css'; 


function App() {
const [shopitems] = useState([
  {name:'Healing Potion', price: 50, description:'Restores 50 hp' },  //An array of products
  {name:'Short Sword +1', price: 250, description: 'Finely crafted sword'}, 
  {name:'Leather Armor', price: 75, description: 'Basic medium armor'}
]); 

  return (
    <div className='shop-container'>
      <div>
        <h3>Shop Items</h3>
        <ProductList items={shopitems} />
      </div>

  </div>
 
  )
}

export default App





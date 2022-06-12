import React,{useState, useEffect} from 'react'
import ProductState from './ProductState';

const ProductData = ({setProd}) => {

    const [items, setItems] = useState([]);

    const fetchdata= async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await  response.json()
        console.log(data)
        setItems(data)
    }
    useEffect(() => {
      fetchdata();
    }, [])
    
    
  return (
    <>
    <div className="category">
      <h2>Shop By Category</h2>
      <span>Sort By <input className='inputsort' type="text" placeholder='newest first' /></span>
    </div>
    <div className="product-data">
        {items.map((item)=>{
            return <ProductState item={item} key={item.id} setProd={setProd} />
        })}

    </div>
    </>
    

  )
}

export default ProductData
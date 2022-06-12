import React from 'react'
import './product.css'
import { useNavigate } from 'react-router-dom'
const ProductState = (props) => {
    const {item,setProd} = props
    const navigate =useNavigate()
  return (
    <div className='ProductState' onClick={()=>{
        setProd(item);
        navigate('/prod')
    }} >
        <div className="products-heading">
            <p className='product-category'>Category : {item.category}</p>
            <p className='product-title'>{item.title}</p>
            {/* <p>{item.description}</p> */}
        </div>
        <div className="image-middle">
            <img className='middle' src={item.image} alt="img" />
        </div>
        <div className="details-bottom">
            <p className='product-price'>Price $: {item.price}</p>
            <p className='product-rating'>Ratings ⭐⭐⭐⭐ : {item.rating.rate}</p>

        </div>
    </div>
  )
}

export default ProductState
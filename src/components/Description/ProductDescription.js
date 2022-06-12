import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './productdescription.css'
const ProductDescription = ({ prod }) => {

    const addProduct = async () => {
        const response = await fetch('https://afternoon-everglades-99219.herokuapp.com/api/v1/order', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(prod)
        })
        const data = await response.json();
        console.log(data)
        window.alert("Product Added Sucessfully")

    }

    return (
        <>
            <Header />
            <div className="product-container">
                <div className="topbar">
                    <h4>Invite Friends & Get upto $50 off//</h4>
                </div>
                <div className="container">
                    <img src={prod.image} alt="prodimage" width='500px' />
                    <div className="content-right">
                        <h3 className='product-title'>{prod.title}</h3>
                        <hr />
                        <h5 className='prod-ratings'> Ratings ⭐⭐⭐⭐{prod.rating.rate}</h5>
                        <h4 className='prod-price'>Price ${prod.price}</h4>
                        <hr />
                        <div className="sizechart">
                            <h4>SELECT SIZE</h4>
                            <h4 className='size-chart'>SIZE CHART :</h4>
                        </div>
                        <div className="circlechart">
                            <button className="size-m">M</button>
                            <button className="size-l">L</button>
                            <button className="size-xl">XL</button>
                        </div>
                        <hr />
                        <div className="button">
                            <button className='addtobag' onClick={addProduct}>ADD TO BAG</button>
                            <button className='wishlist'>WISHLIST ❤</button>
                        </div>
                        <hr />
                        <div className="deliveryoption">
                            <h3>DELIVERY OPTIONS 🚚</h3>
                            <input type="text" placeholder='Enter Pincode' className='pincode' />
                            <h6 className='available'>Please enter PIN code to check delivery time & Pay on Delivery Availability</h6>
                        </div>
                        <hr />
                        <div className="dellivery-desc">
                            <h4>100% Original Products</h4>
                            <h4>Pay on delivery might be available</h4>
                            <h4>Easy 7 days returns and exchanges</h4>
                            <h4>Try & Buy might be available</h4>
                        </div>
                        <hr />
                        <div className="bestoffer">
                            <h4>BEST OFFERS</h4>
                            <h5>Best Price: ${prod.price}</h5>
                            <ul>
                                <li>Applicable on: Orders above Rs. 2999 (only on first purchase)</li>
                                <li>Coupon code: Wardrobe500</li>
                                <li>Coupon Discount: $ 73 off (check cart for final savings)</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="describe">
                            <h3>Product Description</h3>
                            <p>{prod.description}</p>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDescription
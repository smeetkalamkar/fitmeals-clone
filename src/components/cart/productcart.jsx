
import { useState } from "react"
import "./productcart.css"

export const ProductCart=()=>{
    const [cartdata,setcartdata]=useState([
        {
            "title":"Almond Butter",
            "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/05/1.jpg",
            "price":800,
            "description":"Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy snacks and smoothies.",
            "quantity":500,
            "categories":["Nut butters","Products"],
            "subcategories":"Nut butters",
            "NOS":2
        },
        {
            "title":"Arrabiata Sauce",
            "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1.jpg",
            "price":220,
            "description":"Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients.",
            "quantity":500,
            "categories":["Low Calorie Sauces","Products"] ,
            "subcategories":"Low Calorie Sauces",
            "NOS":3
        },
        {
            "title":"Almond Date Chocolate",
            "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
            "price":1200,
            "description":"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the core, surrounded by irresistible luscious dates and enveloped with soft and delectable chocolate, combine to give you three layers of happiness.",
            "quantity":500,
            "categories":["vegan Sweets","Products"],
            "subcategories":"vegan sweets",
            "NOS":4
        },
        {
            "title":"Almond Date Chocolate",
            "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
            "price":1200,
            "description":"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the core, surrounded by irresistible luscious dates and enveloped with soft and delectable chocolate, combine to give you three layers of happiness.",
            "quantity":500,
            "categories":["vegan Sweets","Products"],
            "subcategories":"vegan sweets",
            "NOS":4
        }
    ])
    let sum=0;
    cartdata.forEach((e)=> sum+=e.price)
    return <div className="maindiv">
       <div className="firstdiv"></div>
       <div className="secdiv">
           <h1>Cart</h1>
       </div>
       <div className="thirddiv">
<div>
    <div>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
    </div>

  {
   cartdata.map((e)=>{
       return <div className="productsdiv">
<div>x</div>
<div><img src={e.image} alt="" /></div>
<div>

    <h4>{e.title}</h4>
 <h4>Quatity: <span className="smaltext">{e.quantity} g</span></h4>
  
</div>
<div>₹{e.price.toFixed(2)}</div>
<div>
    <input defaultValue={e.NOS} className="increaseProduct" type="number" name="" id="" />
</div>
<div>
    <h4>
        ₹{((e.NOS*e.price).toFixed(2)).toLocaleString()}
    </h4>
</div>
       </div>
   })   
  }
<div className="coupans">
    <input type="text" name="" id="" placeholder="Coupon code" />
    <button>Apply Coupon</button>
    <h4>UPDATE CART</h4>
</div>
<div className="finaldiv">
    <div>
        <div>
            <div>Subtotal</div>
            <div><p>₹{(1121212).toLocaleString()} </p></div>
        </div>
        <div>
            <div>Shipping</div>
            <div className="texteditor">
                 <p>Flat rate: ₹50.00</p>
            <span>
            <p>Shipping to </p>
            <p>Telangana.</p>
            </span>
      <p>CHANGE ADDRESS</p>
</div>
        </div>
        <div>
            <div>Total</div>
            <div><p>₹{(sum+50).toLocaleString()}</p></div>
        </div>
        <button className="butonj">Proceed to checkout</button>
    </div>
</div>
</div>

       </div>
    </div>
}
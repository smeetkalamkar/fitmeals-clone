
import { useState } from "react"
import "./productcart.css"
import tractor from "../mealplans/pictures/tractor.jpg"
import {useSelector} from "react-redux"
export const ProductCart=()=>{
    const tokenkey=useSelector((store)=> store.token.token)
    const [cartdata,setcartdata]=useState([])
    let sum=0;
    cartdata.forEach((e)=> sum+=e.price)
    return <div className="maindiv">
       <div className="firstdiv"></div>
       <div className="secdiv">
           <h1>Cart</h1>
       </div>
       {
           tokenkey==null||cartdata.length==0 ? <h1>Cart Is Empty</h1> :<div className="thirddiv">
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
           
               <h4 className="hoir">{e.title}</h4>
            <h4 className="hoir" style={{color:"black"}}>Quatity: <span style={{color:"black"}} className="smaltext">{e.quantity} g</span></h4>
             
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
               <h4 className="ghut">UPDATE CART</h4>
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
                     
                     <p>  <span>Shipping to</span> Telangana.</p>
                     
                     <div className="tractor">
                     <p className="opk"> CHANGE ADDRESS</p>
                     <img  src={tractor} alt="" />
                     </div>
                     
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
       }
       
    </div>
}
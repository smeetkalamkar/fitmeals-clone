import { useState } from "react"
import "./seprateproduct.css"
import styled from "styled-components"
const MainImage=styled.div`
    background-image: ${(props) => `url(${props.maindata})`};
    
`
export const SeprateProduct=()=>{
    const [data,setData]=useState({
        "title":"Arrabiata Sauce",
    "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1.jpg",
    "price":220,
    "description":"Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients.",
    "quantity":500,
    "categories":["Low Calorie Sauces","Products"] ,
    "subcategories":"Low Calorie Sauces"
    })
    return <div className="maindiv">
<MainImage maindata={data.image} className="firstdiv">
    <h1>{data.title}</h1>
</MainImage>
<div className="seconddiv">
    <div>
        <img src={data.image} alt="" />
    </div>
    <div>
        <p>₹{data.price}</p>
        <p>{data.description}</p>
             <h2>About This Product</h2> 
             <ul>
                 
             {
                 data.categories.map((e)=>{
                     return <li>{e}</li>
                 })
             }  
             </ul>
             <p>Quantity</p>
             <div> <span><input type="radio" defaultChecked="ture"/> </span> <span> {data.quantity} g</span></div>
             <div><span><input type="number" defaultValue={1} className="increaseProduct" /></span><span><button className="addtocartbutt">Add to cart</button></span></div>
             <p><span>Categories:</span><span>{data.subcategories}, Products</span></p>    
    </div>

</div>
<div className="thirddiv">
    <div><h2><span>Description</span><span>Reviews (0)</span></h2></div>
</div>
<div className="mainmedea">
<div className="fourthdiv">
    <p>
   {data.description}
    </p>
    <p>About This Product</p>
    <span>
    <p>Gluten Free</p>
    <p>Soy Free</p>
    </span>
</div>
</div>

<div className="fifthdiver">
<h2>Related products</h2>
<div>
    <div></div>
    <div></div>
    <div></div>
</div>
</div>
    </div>
}

import { useEffect, useState } from "react"
import "./seprateproduct.css"
import styled from "styled-components"
const MainImage=styled.div`
    background-image: ${(props) => `url(${props.maindata})`};
    
`
export const SeprateProduct=()=>{
    const [procounter,setProcounter]=useState(1)
    useEffect(()=>{
        console.log(procounter)
    },[procounter])
    
    const [data,setData]=useState({
        "title":"Arrabiata Sauce",
    "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1.jpg",
    "price":220,
    "description":"Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients.",
    "quantity":500,
    "categories":["Low Calorie Sauces","Products"] ,
    "subcategories":"Low Calorie Sauces"
    })

const [relateproduct,setRelateproduct]=useState([
    {
        "title":"Almond Butter",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/05/1.jpg",
        "price":800,
        "description":"Delectable almond butter prepared in-house, serves as the perfect guilt-free accompaniment with your healthy snacks and smoothies.",
        "quantity":500,
        "categories":["Nut butters","Products"],
        "subcategories":"Nut butters"
    },
    {
        "title":"Arrabiata Sauce",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/arrabbiata-sauce-680x900-1.jpg",
        "price":220,
        "description":"Fitmeals Arrabbiata sauce is a delicious blend of spicy chillies, tomatoes and authentic Italian ingredients.",
        "quantity":500,
        "categories":["Low Calorie Sauces","Products"] ,
        "subcategories":"Low Calorie Sauces"
    },
    {
        "title":"Almond Date Chocolate",
        "image":"https://www.fitmeals.co.in/wp-content/uploads/2021/06/25.jpg",
        "price":1200,
        "description":"Delicious Dates stuffed with a Almonds and covered in dark chocolate. With the finest golden almonds at the core, surrounded by irresistible luscious dates and enveloped with soft and delectable chocolate, combine to give you three layers of happiness.",
        "quantity":500,
        "categories":["vegan Sweets","Products"],
        "subcategories":"vegan sweets" 
    }
])

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
             <div><span><input onChange={(e)=>{
                 setProcounter(e.target.value)
             }} type="number" defaultValue={1} className="increaseProduct" /></span><span><button  className="addtocartbutt">Add to cart</button></span></div>
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
   {
     relateproduct.map((e)=>{
         return <div>
             <div>
                 <img src={e.image} alt="" />
             </div>
             <h2>{e.title}</h2>
             <h2>₹{e.price.toFixed(2)}</h2>
             <button>Select options</button>
             <p>Read more</p>
         </div>
     })  
   }
   
</div>
</div>
    </div>
}

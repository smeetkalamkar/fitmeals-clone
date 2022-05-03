import styled from "styled-components"
import weightlosspic from "./pictures/weightloss.jpg"

const MainDiv=styled.div`
    width:100%;
    height:auto;
    position:absolute;
    &>div:nth-child(1){
        width:100%;
        height:380px;
        position:fixed;
        z-index:-1;
        &>img{
            width:100%;
            height:100%;
        }
    }
    &>div:nth-child(2){
        width:100%;
        height:380px;
        top:0;
        display:flex;
        background-color:transparent;
        justify-content:center;
        align-items:center;
        font-size:26px;
    }
    &>div:nth-child(3){
        width:100%;
        height:690px;
        position:absolute;
        background-color:white;
        &>div{
            width:100%;
            height:500px;
            background-color:#f3f5ed;
            position:relative;
            margin-top:95px;
            margin-bottom:95px;
            display:flex;
            justify-content:center;
            align-items:center;


            &>div:nth-child(1){
            width:35%;
            display:flex;
            flex-direction:column;
            margin-left:15%;
&>p{
  font-size:16px;
  text-align:left; 
  line-height: 2em 
}
&>button{
    display: inline-block;
    padding: 8px 20px;
    text-align: center;
    background: #e91e63;
    color: #fff;
    border-radius: 3px;
    width:180px;
    height:48px;
    border:none;
}
}
&>div:nth-child(2){
width:40%;
&>div:nth-child(1){
    width:60%;
    height:90px;
    margin-left:60px;
    &>h6{
    font-family: 'Sacramento', serif;
    font-family: var(--font-subheaders),serif;
    font-weight: 400;
    font-size: 40px;
    }
}
}

        }
    }

`
const SecondDiv=styled.div`
&&&{
    width:100%;
    height:520px;
    background-color:yellow;
    &>h6{
        font-family: 'Sacramento', serif;
    font-family: var(--font-subheaders),serif;
    font-weight: 400;
    font-size: 40px;
    }
}
    
`
export const WeightLossMealPlan=()=>{
    return <MainDiv>
        <div>
        <img src={weightlosspic} alt="" />
        </div>
        <div>
<h1 style={{color:"white"}}>Weight Loss Meal Plan</h1>
        </div>
    <div>
   <div>

       <div>
<p>
If your aim is to lose weight in a gradual, healthy manner then 
this diet would meet your requirements. The meals are well balanced and 
consist of complex carbohydrates, lean protein, healthy fats and generous portions
of fruits and vegetables which add all the essential vitamins, minerals and fibre to your diet.
<br />
<br />
Disclaimer: This isn’t going to be any type of a crash diet which will 
give you magical results; we’ll aim for 2-4kgs 
per month and all your meals will be designed by our nutritionists
 who focus not only on seeing results but also on ensuring that there’s 
 no compromise on your mental and physical health.
</p>
<button>View Sample Menu</button>
       </div>
       <div>
<div>
<h6>What our meals look like:</h6>
</div>
<div>

</div>
       </div>
   </div>
   <SecondDiv>
<h6>How Does It Work?</h6>
DI
</SecondDiv>
    </div>


    </MainDiv>
}
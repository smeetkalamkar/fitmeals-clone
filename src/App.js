import logo from './logo.svg';
import './App.css';
import {WeightLossMealPlan} from "./components/weightlossmealplan"
import {MaintenanceMealPlan} from "./components/maintenancemealplan"
import {AthleticPlan} from "./components/athleticmealplan"
import {KetoMealPlan} from "./components/ketomealplan.jsx"
import {SeprateProduct} from "./components/seprateproduct.jsx"
import {Navbar} from "./components/navbar"
import {Link} from "react-router-dom"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        
        <Route path='/' element={<WeightLossMealPlan></WeightLossMealPlan>}/>
        <Route path='/maintenancemealplan' element={<MaintenanceMealPlan></MaintenanceMealPlan>}/>
        <Route path='/athleticmealplan' element={<AthleticPlan></AthleticPlan>}/>
        <Route path='/Ketomealplan' element={<KetoMealPlan></KetoMealPlan>}/>
        <Route path='/seprateproduct' element={<SeprateProduct></SeprateProduct>}/>
      </Routes>
      
    </div>
  );
}

export default App;

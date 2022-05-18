import './App.css';
import BMIForm from './components/BMIForm';
import { useState } from 'react';
// import test from './components/test';




function App() {

  const[ bmi, setBMI ] = useState();
  const[ description, setDescription ] = useState();

  const CalculateBMI = (height, weight) => {

    let curbmi =  (Math.round((weight / ((height / 100) ** 2)) * 10 )) / 10
  
    if (curbmi < 18.5){
      setDescription("You are: Underweight")
    } else if (curbmi >= 18.5 && curbmi <= 24.9){
      setDescription("You are: Normal weight")
    } else if (curbmi >= 25 && curbmi <= 29.9){
      setDescription("You are: Overweight")
    } else {
      setDescription("You are: Obese")
    }
  
    setBMI("Your BMI: " + curbmi)
  }

  return (
    <div className="App">
      <div className='App-header'>
        <BMIForm calcBMI={CalculateBMI}/>
        <h1>{bmi}</h1>
        <h1>{description}</h1>
      </div>
    </div>
  );
}


export default App;

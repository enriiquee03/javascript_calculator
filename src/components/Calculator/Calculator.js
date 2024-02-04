import React, {useState} from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  
  const handleButtonClick =  (value) =>{
    switch (value) {
      case 'ac':
          setDisplay('0')
          setExpression('')
        break;
      case '=':
          try {
            //utilizamos la funcion eval para llevar a cabo las operaciones
            setDisplay(eval(expression).toString())
            setExpression(eval(expression).toString())
          } catch (error) {
            setDisplay("Error al realizar el calculo")
            setExpression("")
            console.log(error)
          }
        break;
    
      default:
          //Asi podemos tomar el valor anterior del estado que es necesario en este caso para llevar a cabo la nuva actualizacion
          setExpression((prevExpression) => prevExpression + value)
          setDisplay((prevDisplay) => (prevDisplay === '0'? value : prevDisplay + value))
        break;
    }
  }

return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded shadow">
      <div className="mb-4 text-right text-3xl font-bold">{display}</div>
      <div className="grid grid-cols-4 gap-2">
        <button className="col-span-3 bg-gray-200 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('ac')}>AC</button>
        <button className="bg-yellow-300 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('/')}>/</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('7')}>7</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('8')}>8</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('9')}>9</button>
        <button className="bg-yellow-300 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('*')}>*</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('4')}>4</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('5')}>5</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('6')}>6</button>
        <button className="bg-yellow-300 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('-')}>-</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('1')}>1</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('2')}>2</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('3')}>3</button>
        <button className="bg-yellow-300 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('+')}>+</button>
        <button className="col-span-2 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('0')}>0</button>
        <button className="p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('.')}>.</button>
        <button className="bg-yellow-300 p-2 text-xl font-semibold rounded" onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
);
};

export default Calculator;

import React, {useState}  from 'react'
import NewComponent from './NewComponent';
import './App.css'
const App = () => {
  const [firstText, setText] = useState('I am new component');
  const handleChange = () => {
    if(firstText === 'I am new component') {
      setText("changed");
    } else {
      setText("I am new component")
    }
  }
  return (
    <div className="app">
      <button onClick={handleChange}>change text</button>
      <NewComponent 
      textToChnage = {firstText}
      />
    </div>
  );
}

export default App;

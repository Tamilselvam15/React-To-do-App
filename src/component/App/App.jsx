import Header from '../Header/Header.jsx';
import Content from '../content/Content.jsx';
import Footer from '../Footer/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import List from '../Header/List';
import './App.css';
import About from '../Header/About'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [storedData, setStoredData] = useState([]);
  

 



  const handleClick = () => {
    if (!inputValue && !inputDate) {
      // <div className='alert'>

      alert("enter somthing in your both box")
    } else if (!inputDate) {
      alert("select the date")
    } else if (!inputValue) {
      alert("please Enter something in the text field")
    } else {
    
      setStoredData([{ value: inputValue, date: inputDate }, ...storedData]);
      setInputValue('')
      setInputDate('')
    }
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleDateValue = (event) => {
    setInputDate(event.target.value);
  };

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Content
              handleClick={handleClick}
              handleInputValue={handleInputValue}
              handleDateValue={handleDateValue}
              inputDate={inputDate}
              inputValue={inputValue}
            />
          }
        />
        <Route path='/list' element={<List storedData={storedData}  />} />
        <Route path='/about' element={<About /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

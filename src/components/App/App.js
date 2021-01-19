import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {

  const [toDosValue, setToDosValue] = useState([]);
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('value')) {
      const value = localStorage.getItem('value');
      const savedValues = JSON.parse(value);
      setToDosValue(savedValues);
    }
  }, []);

  React.useEffect(() => {
    if (toDosValue.length === 0) {
      localStorage.removeItem('value');
      setShow(false);
    } else {
      localStorage.setItem('value', JSON.stringify(toDosValue));
      setShow(true);
    }
  }, [toDosValue]);

  function handleAddToDo(value) {
    setToDosValue([...toDosValue, value]);
  }

  function booleanChange(boolean, newValue) {
    setToDosValue(toDosValue.map(c => {
      if (c.id === newValue.id) {
        return { ...c, сhecked: boolean }
      }
      return c
    }))
  }

  function handleCheckboxChange(newValue) {
    if (!newValue.сhecked) {
      booleanChange(true, newValue);
    } else {
      booleanChange(false, newValue);
    }
  }

  return (

    <div className="app">

      <Header />

      <Main
        onAddToDo={handleAddToDo}
        toDosValue={toDosValue}
        setToDosValue={setToDosValue}
        onCheckboxChange={handleCheckboxChange}
        show={show}
      />

      <Footer />

    </div>

  );

}

export default App;

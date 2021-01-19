import React from 'react';
import NewToDoForm from '../NewToDoForm/NewToDoForm';
import ToDosContainer from '../ToDosContainer/ToDosContainer';

function Main(props) {

    const { 
        onAddToDo,
        toDosValue,
        onCheckboxChange,
        setToDosValue,
        show,
    } = props;

    return (

        <main className="main">

            <NewToDoForm
                valueArray={toDosValue}
                addToDo={onAddToDo}
            />

            <ToDosContainer
                value={toDosValue}
                setValue={setToDosValue}
                show={show}
                onCheckboxChange={onCheckboxChange}
            />

        </main>
    );
}

export default Main;
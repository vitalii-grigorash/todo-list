import React from 'react';
import ToDos from "../ToDos/ToDos"
import TrashPlace from '../TrashPlace/TrashPlace'

function ToDosContainer(props) {

    const {
        value,
        setValue,
        show,
        onCheckboxChange,
    } = props;

    const [currentValue, setCurrentValue] = React.useState(null);

    function dragStart(e, newValue) {
        setCurrentValue(newValue);
    }

    function dragEnd(e) {
        e.target.style.background = 'white'
    }

    function dragOver(e) {
        e.preventDefault();
        e.target.style.background = 'lightgrey'
    }

    function dragDrop(e, newValue) {
        e.preventDefault();
        setValue(value.map(c => {
            if (c.id === newValue.id) {
                return { ...c, order: currentValue.order }
            } if (c.id === currentValue.id) {
                return { ...c, order: newValue.order }
            }
            return c
        }))
        e.target.style.background = 'white'
    }

    const sortToDos = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    return (

        <>
            {show &&
                (
                    <>

                        <section className="todos-container">

                            {value.sort(sortToDos).map((newToDosValue) => (
                                <ToDos
                                    newValue={newToDosValue}
                                    checkboxChange={onCheckboxChange}
                                    key={newToDosValue.id}
                                    dragStart={dragStart}
                                    dragEnd={dragEnd}
                                    dragOver={dragOver}
                                    dragDrop={dragDrop}
                                />
                            ))}

                        </section>

                        <TrashPlace
                            value={currentValue}
                            array={value}
                            setValue={setValue}
                        />
                    </>
                )
            }
        </>
    );
}

export default ToDosContainer;
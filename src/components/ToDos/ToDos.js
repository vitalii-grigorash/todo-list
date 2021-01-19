import React from 'react';

function ToDos(props) {

    const {
        newValue, 
        checkboxChange,
        dragStart,
        dragEnd,
        dragOver,
        dragDrop,
    } = props;

    return (
        <section
            className="todos"
            draggable={true}
            onDragStart={(e) => dragStart(e, newValue)}
            onDragLeave={(e) => dragEnd(e)}
            onDragEnd={(e) => dragEnd(e)}
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dragDrop(e, newValue)}
        >
            <input 
                className="todos__checkbox" 
                type="checkbox" 
                id="button" 
                checked={newValue.сhecked}
                onChange={() => checkboxChange(newValue)}
            />
            <label
                className={`todos__value ${newValue.сhecked && 'todos__value_active'}`}
                htmlFor="button"
            >
                {newValue.keyword}
            </label>
        </section>
    );
}

export default ToDos;
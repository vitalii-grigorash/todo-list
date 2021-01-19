import React from 'react';
import trashIcon from '../../images/svg/trash-button.svg'

function TrashPlace(props) {

    const {
        value,
        array,
        setValue,
    } = props;

    function dragOver(e) {
        e.preventDefault();
    }

    function dragDrop (e, toDoForRemove) {
        e.preventDefault();
        setValue(() => {
            const idx = array.findIndex((el) => el.id === toDoForRemove.id)
            const newArray = [
                ...array.slice(0, idx),
                ...array.slice(idx + 1)
            ]
            return newArray;
        })
    }

    return (

        <section 
            className="trash-place"
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => dragDrop(e, value)}
        >
           <img 
                draggable={false}
                className="trash-place__icon" 
                alt={'Иконка корзины'} 
                src={trashIcon}
            />
            <p className="trash-place__description">Перетащите задачу в эту область для удаления</p>
       </section>  

    );
}

export default TrashPlace;
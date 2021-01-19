import React from 'react';
import { Validation } from '../../utils/Validation';

function NewToDoForm({addToDo, valueArray}) {

    const search = Validation();

    function idGenerate () {
        if (valueArray.length < 1) {
            return 1;
        } else {
            const allIdArray = valueArray.map((arr) => { 
                return arr.id
            });
            return Math.max(...allIdArray) + 1;
        }
    }

    function submitForm(evt) {
        evt.preventDefault();
        if (!search.value) {
            search.setErrorMessage('Нужно ввести новую задачу');
            return;
        }
        addToDo({
            keyword: search.value,
            id: idGenerate(),
            order: idGenerate(),
            сhecked: false,
        });
        search.setValue('');
    };

    return (
        <form
            className="search-form"
            onSubmit={submitForm}
        >
            <input
                type="text"
                className="search-form__input"
                id="search-form-input"
                name="search"
                placeholder='Введите новую задачу'
                value={search.value}
                onChange={search.onChange}
            />
            <span id="search-form-input-error" className="search-form__input_error">{search.errorMessage}</span>
            <button type="submit" className="search-form__search-button">Добавить</button>
        </form>
    );
}

export default NewToDoForm;
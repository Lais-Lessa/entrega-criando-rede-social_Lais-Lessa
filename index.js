/* Desenvolva sua lógica aqui */

    // Evento de pegar o valor do input

    const renderList = document.querySelector(".main");
    const renderMainList = document.querySelector(".main__list");
    function renderizaObject(){
        
    }


    const inputValueModal = document.querySelector('.modal__input');
    const buttonInputValue = document.querySelector('#btn_inputEntry');

    buttonInputValue.addEventListener('click',(event) => {
    event.preventDefault()     
    insertedValues.push({id:insertedValues.length + 1, value:inputValueModal.value, categoryID:0}); //Adicionando 
    let newValue = insertedValues

    });



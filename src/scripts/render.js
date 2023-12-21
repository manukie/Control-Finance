import { insertedValues } from "./valuesData.js"

export const render = (array) => {
    const valueList = document.querySelector(".mainContent__Bottom__list")
    valueList.innerHTML = ''

    array.forEach(value => {
        const item = createItem(value)

        valueList.appendChild(item)
    })
    handleDelete(insertedValues)
    totalValue(insertedValues)
}

const createItem = (value => {
    const item = document.createElement('li')
    const itemBox = document.createElement('div')
    const sideBox = document.createElement('div')
    const price = document.createElement('p')
    const type = document.createElement('p')
    const img = document.createElement('img')
    const imgBox = document.createElement('div')

    item.classList.add('list__item')
    itemBox.classList.add('list__item__outsideBox')
    sideBox.classList.add('list__item__insideBox')
    price.classList.add('list__item__price')
    type.classList.add('list__item__type')
    imgBox.classList.add('list__item__imgBox')
    img.classList.add('list__item__img')
    
    img.setAttribute('src', value.trash)
    img.dataset.valueId = value.id;
    price.innerHTML = `R$ ${value.value}`
    type.innerHTML = value.categoryID

    if (value.categoryID === 0) {
        type.innerHTML = "Entrada"
    } else if (value.categoryID === 1) {
        type.innerHTML = "Saída";
    }

    item.appendChild(itemBox)
    itemBox.append(price, sideBox)
    imgBox.appendChild(img)
    sideBox.append(type, imgBox)

    return item
})

export const totalValue = (array) => {
    const span = document.querySelector('.mainContent__Middle__Sum')
    span.innerHTML = ''

    const sumValue = array.reduce((acumulador, actualValue) => {
        return acumulador + actualValue.value
      }, 0)

    span.innerHTML = `R$ ${sumValue}`
}

export const handleForm = (array) => {
    const modal = document.querySelector("#modal__controller");
    const input = document.querySelectorAll(".modal__insert");
    const button = document.querySelector(".insertValueButton");
    const entradaButton = document.querySelector("#entrada_button")
    const saidaButton = document.querySelector("#saida_button")

  
    let newValue = {};
    let count = 0;
    let newValueCategory = ''

    entradaButton.setAttribute("typeOf", "Entrada");
    saidaButton.setAttribute("typeOf", "Saída");
    
    entradaButton.addEventListener("click", (event) => {
      newValueCategory = event.target.getAttribute("typeOf");
    });
    
    saidaButton.addEventListener("click", (event) => {
      newValueCategory = event.target.getAttribute("typeOf");
    });

    button.addEventListener("click", (event) => {
        event.preventDefault();
    
        let newValueId = newValue.id = array.length + 1;
    
        input.forEach((input) => {
            if (input.value === "") {
                count++;
              }
        
              if (input.name === "valor") {
                newValue.valor = Number(input.value);
              } 
            });
        
            if (count !== 0) {
              count = 0;
        
              return alert("Preencha todos os campos do formulário!");
            }
        
            array.push({
                id: newValueId,
                value: newValue.valor,
                categoryID: newValueCategory,
                trash: "./src/assets/trash.svg",
            })
            newValue = {};
            input.forEach((input) => {
              input.value = "";
            });
            render(array)
            totalValue(insertedValues)
        
            modal.close();
          });
        };
      
export const handleDelete = (array) => {
            const buttons = document.querySelectorAll('.list__item__img')
          
            buttons.forEach(button => {
              button.addEventListener('click', (event) => {
                const datasetButtonId = event.target.dataset.valueId
          
                const findValueIndex = array.findIndex(value => value.id === Number(datasetButtonId))
          
                const removedItem = array.splice(findValueIndex, 1)

                render(array)
              })
            })
          }
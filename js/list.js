// Variables
// ================================================================================
let list = [];

const createItemInput = document.querySelector('.create-item__input');
const createItemButton = document.querySelector('.create-item__button');

const listUl = document.querySelector('#list ul');
const iconClose = `<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;
const removeItemButton = document.querySelectorAll('.list-item__remove');



// Functions
// ================================================================================
const log = content => { console.log(content) } // for logging during dev

const createItemId = () => {
    return Math.random().toString(16).slice(-6); // for random id, aplha-numeric
};

const createListItem = (title) => { // create new list item
    list.push(
        {
            id: createItemId(),
            title: title,
            rank: ""
        }
    );
};

const removeListItem = (id) => { // remove list item
    listUl.innerHTML = '';
    list.splice(id, 1);
    outputList();
};

const outputList = () => { // output list to page
    listUl.innerHTML = '';
    let ul = listUl;
    for (let i = 0; i < list.length; i++) {
        const listItem = list[i];

        let li = `
            <li id="item-${listItem.id}" class="list-item">
                <input class="list-item__field" type="text" value="${listItem.title}">
                <button class="list-item__remove" onclick="removeListItem(${i})">${iconClose}</button>
            </li>
        `;
        ul.innerHTML += li;
    }
};

// add items to list using input
createItemButton.addEventListener("click", () => {
    createListItem(createItemInput.value);
    outputList();
    createItemInput.value = '';
});

// change item title based on input value
for (let i = 0; i < list.length; i++) {
    const listItem = list[i];
    const listItemId = listItem.id;
    const listItemField = document.querySelector(`#item-${listItemId} .list-item__field`);
    listItemField.addEventListener('input', (event) => {
        listItem.title = listItemField.value;
    });
}
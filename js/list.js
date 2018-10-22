let list = [
    {
        title: "Chocolate",
        rank: "",
    },
    {
        title: "Vanilla",
        rank: "",
    },
    {
        title: "Strawberry",
        rank: "",
    }
];

console.log("test");

const createItemInput = document.querySelector('.create-item__input');
const createItemButton = document.querySelector('.create-item__button');
const listUl = document.querySelector('#list ul');

// Log function
const log = content => { console.log(content) }

// print list to page
const printList = () => {
    listUl.innerHTML = '';
    let ul = listUl;
    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        const listItem = list[i];
        li.textContent = listItem.title;
        ul.appendChild(li);
    }
};
printList();

// add items to list
createItemButton.addEventListener("click", () => {
    list.push({
        title: createItemInput.value,
        rank: ""
    });
    printList();
    createItemInput.value = '';
});


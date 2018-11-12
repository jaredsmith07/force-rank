// Start Program
// ================================================================================
createListItem("Chocolate");
createListItem("Vanilla");
createListItem("Strawberry");
createListItem("Mint Chocolate Chip");
createListItem("Cookies n' Creme");

outputList();



// For Dev
// ================================================================================
// document.addEventListener("click", (event) => {
//     log(event.target);
// });

// log list button
const logListButton = document.querySelector('#loglist');
logListButton.addEventListener("click", () => {
    log(list);
});


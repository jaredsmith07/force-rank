// Creates a unique matchup for each object in a given array
// n = array.length
// const createMatches = (n) => {
//     let round = 1;
    
//     // Round
//     for (let r = 1; r <= n; r++) {
        
//         // Match
//         for (let m = 1; m <= (n - (r - 1)); m++) {

//             let match = m + (r - 1);

//             if ( round != match ) {
//                 document.write(` [${list[round - 1].title}, ${list[match - 1].title}] <br>`);
//             }
//             match++;

//         }
//         round++;

//     }
// };
// createMatches(list.length);



// Variables
// ================================================================================
const testHTML = document.querySelector('#test');


// Functions
// ================================================================================
const createMatches = (n) => { // Create Matches
    let round = 1;
    
    // Round
    for (let r = 1; r <= n; r++) {
        
        // Match
        for (let m = 1; m <= (n - (r - 1)); m++) {

            let match = m + (r - 1);

            if ( round != match ) {
                const optionA = list[round - 1];
                const optionB = list[match - 1];
                testHTML.innerHTML += `
                    <div class="test__match">
                        <h2>Which one ranks higher?</h2>
                        <input name="match-${round}-${match}" type="radio" id="radio-${round}-${match}-${optionA.id}" value="${optionA.title}">
                        <label for="radio-${round}-${match}-${optionA.id}">${optionA.title}</label>
                        <br>
                        <input name="match-${round}-${match}" type="radio" id="radio-${round}-${match}-${optionB.id}" value="${optionB.title}">
                        <label for="radio-${round}-${match}-${optionB.id}">${optionB.title}</label>
                        <br>
                        <button class="button-md primary-button">Continue</button>
                    </div>
                `;
            }
            match++;

        }
        round++;

    }
};


let round = 1;
let match = 1;

const createMatch = (n, r, m) => {

    let round = 1;
    let match = m + (r - 1);

    const optionA = list[round - 1];
    const optionB = list[match - 1];
    testHTML.innerHTML += `
        <div class="test__match">
            <h2>Which one ranks higher?</h2>
            <input name="match-${round}-${match}" type="radio" id="radio-${round}-${match}-${optionA.id}" value="${optionA.title}">
            <label for="radio-${round}-${match}-${optionA.id}">${optionA.title}</label>
            <br>
            <input name="match-${round}-${match}" type="radio" id="radio-${round}-${match}-${optionB.id}" value="${optionB.title}">
            <label for="radio-${round}-${match}-${optionB.id}">${optionB.title}</label>
            <br>
            <button class="button-md primary-button">Continue</button>
        </div>
    `;
    if ( next button ) {
        round++;
        match++;
        createMatch();
    } else if ( back button ) {
        round--;
        match--;
        createMatch();
    }

}

const startRanking = () => {
    createMatches(list.length);
};
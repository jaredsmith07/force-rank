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
const testHTML = document.querySelector('#testing');


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
                matchHTML = `

                `;
                document.write(` [${list[round - 1].title}, ${list[match - 1].title}] <br>`);
            }
            match++;

        }
        round++;

    }
};

const startRanking = () => {
    testHTML.innerHTML = createMatches(list.length);
};
import db from "./firebase_init.js";

// Create
function createDB(thisId, thisName, thisPart){
    db.ref('member/' + thisId).set({
        id: thisId,
        name: thisName,
        part: thisPart
    });
};

function hoge(){
    
}

// Read
// const readDB = (thisId) => {
//     db.ref('member/' + thisId).on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(data.id);
//         console.log(data.name);
//         console.log(data.part);
//     });
// };


// // Update (Name)
// const updateName = (thisId, thisName) => {
//     db.ref('member/' + thisId).update({
//         name: thisName,
//     });
// };


// // Update (Part)
// const updatePart = (thisId, thisPart) => {
//     db.ref('member/' + thisId).update({
//         part: thisPart,
//     });
// };


// // Delete
// const deleteDB = (thisId) => {
//     db.ref('member/' + thisId).remove();
// };
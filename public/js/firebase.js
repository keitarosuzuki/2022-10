const firebaseConfig = {
    apiKey: "AIzaSyBeqV83o_P3J83eNGvyGMMoQmyAQXA-A8A",
    authDomain: "project-7557393833465315465.firebaseapp.com",
    databaseURL: "https://project-7557393833465315465-default-rtdb.firebaseio.com",
    projectId: "project-7557393833465315465",
    storageBucket: "project-7557393833465315465.appspot.com",
    messagingSenderId: "441497478773",
    appId: "1:441497478773:web:f3279c855452b3d321fa3c",
    measurementId: "G-YR6NTGEEP0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Create
function createDB(thisId, thisName, thisPart){
    db.ref('member/' + thisId).set({
        id: thisId,
        name: thisName,
        part: thisPart
    });
};

// Read ⇒ 使わない
// function readDB(thisId){
//     db.ref('member/' + thisId).on('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(data.id);
//         console.log(data.name);
//         console.log(data.part);
//     });
// };

// allRead
function allReadDB(){
    db.ref('member/').on('value', (snapshot) => {
        const data = snapshot.val();
        const ary = data.filter(x => data != null);
        console.log(ary);
    });
};

// Update (Name)
function updateName(thisId, thisName){
    db.ref('member/' + thisId).update({
        name: thisName,
    });
};


// Update (Part)
function updatePart(thisId, thisPart){
    db.ref('member/' + thisId).update({
        part: thisPart,
    });
};


// Delete
function deleteDB(thisId){
    db.ref('member/' + thisId).remove();
};

export {createDB, allReadDB, updateName, updatePart, deleteDB}
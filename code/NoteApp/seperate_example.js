const note = {
    id: 1,
    text: "Hello all",
    pinned: false
}

const myNotes = [
    {
        id: 1,
        text: "Hello all",
        pinned: false
    },
    {
        id: 2,
        text: "Hello all again",
        pinned: true
    },
    {
        id: 3,
        text: "Hello all once more",
        pinned: true
    },
    {
        id: 4,
        text: "Hello all for the final time",
        pinned: false
    }
];


// const filterPinnedNotes = (notes = []) => {
//     return notes.filter(note => note.pinned)
// }

function filterPinnedNotes(notes) {
    const filtered = notes.filter(function(note) {
        if (note.pinned == true) {
            return true;
        } else {
            return false;
        }
    });
    return filtered;
}

const myPinnedNotes = filterPinnedNotes(myNotes);

console.log(myPinnedNotes);
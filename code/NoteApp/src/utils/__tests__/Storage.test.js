import Storage from '../Storage'
import {describe, it, afterEach, expect, beforeEach } from "vitest"

describe('Storage', () => {
    
    beforeEach(() => {
        console.log("A new test is about to run...")
    })

    afterEach(() => localStorage.clear())

    describe('saveNotes', () => {
        it('saves stringified notes to localStorage', () => {
            const notes = getNotes();
            Storage.saveNotes(notes);

            const storedNotes = localStorage.getItem("notes");
            expect(storedNotes).toEqual(JSON.stringify(notes));
        })
    })

    describe('getSavedNotes', () => {
        it('gets savedNotes from localStorage and parses them', () => {
            const notes = getNotes();
            Storage.saveNotes(notes);

            const storedNotes = Storage.getSavedNotes([]);
            
            expect(storedNotes).toEqual(notes);
        })

        it('when no notes have been saved returns default value', () => {
            const storedNotes = Storage.getSavedNotes([]);
            
            expect(storedNotes).toEqual([]);
        })
    })

    describe('deleteAllNotes', () => {
        it('deletes all saved notes', () => {
            Storage.deleteAllNotes();
            
            const storedNotes = localStorage.getItem("notes");
            expect(storedNotes).toBeNull;
        })
    })
})

// Helpers
const getNotes = () => [
    { text: 'Hello World', id: 'note-1', pinned: true },
    { text: 'Hello Hamburg', id: 'note-2', pinned: false },
    { text: 'This is a note', id: 'note-3', pinned: true },
    { text: 'This is text', id: 'note-4', pinned: false },
    { text: 'Test data is hard to make up', id: 'note-5', pinned: true },
]
import { describe, expect, it } from "vitest";
import Filter from "../Filter";

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

const myPinnedNotes = [
    {
        id: 2,
        text: "Hello all again",
        pinned: true
    },
    {
        id: 3,
        text: "Hello all once more",
        pinned: true
    }
];

describe("test filter pinned note function", () => {

    it("returns all pinned notes", () => {

        const actual = Filter.filterPinnedNotes(myNotes);
        
        expect(actual).toEqual(myPinnedNotes);
    });
    
    it("returns empty when no notes are given", () => {

        const actual = Filter.filterPinnedNotes();
        
        const emptyArray = [];

        expect(actual).toEqual(emptyArray);
    });
});
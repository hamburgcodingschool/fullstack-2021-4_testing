import Storage from '../Storage'
import {describe, it, afterEach } from "vitest"

describe('Storage', () => {
    afterEach(() => localStorage.clear())

    describe('saveNotes', () => {
        it('saves stringified notes to localStorage', () => {

        })
    })

    describe('getSavedNotes', () => {
        it('gets savedNotes from localStorage and parses them', () => {

        })

        it('when no notes have been saved returns default value', () => {

        })
    })

    describe('deleteAllNotes', () => {
        it('deletes all saved notes', () => {

        })
    })
})

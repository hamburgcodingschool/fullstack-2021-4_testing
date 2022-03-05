<template>
  
    <SearchHeader
        :searchValue="searchValue"
        @onSearchValueChange="handleSearchValueChange"
        :pinnedChecked="showOnlyPinned"
        @onPinnedChange="handlePinnedChange"
    />
    <NotesList
        :notes="filteredNotes"
        @onDeleteNote="handleDeleteNote"
        @onPinNote="handlePinNote"
        @onDeleteAllNotes="handleDeleteAllNotes"
    />
    <NoteComposer @onCreateNote="handleCreateNote" />

</template>

<script>
import SearchHeader from "./components/SearchHeader.vue";
import NotesList from "./components/NotesList.vue";
import NoteComposer from "./components/NoteComposer.vue";

import Storage from "./utils/Storage";
import NoteUtilities from "./utils/NoteUtilities";
import Filter from "./utils/Filter";

export default {
  components: {
    SearchHeader,
    NotesList,
    NoteComposer
  },
  data: function() {
    return {
      showOnlyPinned: false,
      searchValue: "",
      notes: Storage.getSavedNotes([]),
      filteredNotes: Storage.getSavedNotes([]),
    }
  },
  methods: {
    handleSearchValueChange(event) {
        this.searchValue = event.target.value;
        this.filteredNotes = Filter.filterByText(this.notes, this.searchValue);
    },
    handlePinnedChange(event) {
        this.showOnlyPinned = event.target.checked
        this.filteredNotes = this.showOnlyPinned ? Filter.filterPinnedNotes(this.notes) : this.notes;
    },
    handleDeleteNote(note) {
      this.notes = Filter.removeNoteById(this.notes, note.id);
      Storage.saveNotes(this.notes);
      this.resetSearch();
    },
    handlePinNote(note) {
      const notes = NoteUtilities.togglePinnedNote(this.notes, note.id);
      this.notes = notes;
      Storage.saveNotes(this.notes);
      const filteredNotes = Filter.filterByText(this.notes, this.searchValue)
      this.filteredNotes = filteredNotes;
    },
    handleDeleteAllNotes() {
      Storage.deleteAllNotes();
      this.showOnlyPinned = false;
      this.searchValue = '';
      this.notes = Storage.getSavedNotes([]);
      this.filteredNotes = Storage.getSavedNotes([]);
    },
    handleCreateNote(noteText) {
      const note = NoteUtilities.createNote(noteText);
      this.notes.push(note);
      Storage.saveNotes(this.notes);
      this.resetSearch();
    },
    resetSearch() {
      this.searchValue = "";
      this.filteredNotes = this.notes;
    }
  }
}
</script>

<style scoped>
#app {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    height: 100vh;
    overflow: hidden;
}
</style>
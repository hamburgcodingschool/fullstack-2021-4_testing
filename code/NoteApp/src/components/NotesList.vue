<template>
    <main class="notes_list">
        <section v-if="notes.length > 0">
            
            <Note
                v-for="note in notes" :key="note.id"
                :note="note"
                @onDeleteClick="onDeleteNote"
                @onPinClick="onPinNote" />
        </section>
        <section v-else class="empty_screen" data-testid="empty-illustration">
            <img src="@/assets/empty.svg" alt="No notes yet" />
            No notes yet.
        </section>
        <DeleteAllButton v-if="notes.length >= 1" @onClick="onDeleteAllNotes" />
    </main>
</template>

<script>
import Note from "./Note.vue";
import DeleteAllButton from "./DeleteAllButton.vue";

export default {
    components: {
        Note,
        DeleteAllButton
    },
    props: ["notes"],
    emits: ["onDeleteNote", "onPinNote", "onDeleteAllNotes"],
    methods: {
        onDeleteNote(note) {
            this.$emit("onDeleteNote", note);
        },
        onPinNote(note) {
            this.$emit("onPinNote", note);
        },
        onDeleteAllNotes() {
            this.$emit("onDeleteAllNotes");
        }
    }
}
</script>

<style scoped>
.notes_list {
    width: 80%;
    margin: 20px auto;
    flex-grow: 1;
    overflow: auto;
}

.notes_list .empty_screen {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: var(--normal-font-size);
    align-items: center;
}

.notes_list .empty_screen img {
    width: 40%;
    margin-bottom: 20px;
}
</style>
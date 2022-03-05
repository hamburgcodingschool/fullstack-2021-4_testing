<template>
    <div class="note" data-testid={note.id}>
        <div class="note__container">
            <p data-testid="note-content" class="note--text">
                {{ expanded ? note.text : shortenNote() }}
                
                <button
                    v-if="note.text.length > 80"
                    data-testid="toggle-expanded"
                    @click="toggleExpanded"
                    class="text"
                >
                    {{ expanded ? 'Collapse note' : 'Expand note' }}
                </button>
            </p>
            <footer class="note__actions">
                <button data-testid="pin-note" class="simple" @click="onPinClick">
                    {{ note.pinned ? '📌 – Unpin note' : '📌 – Pin note' }}
                </button>
                <button data-testid="delete-note" class="simple danger" @click="onDeleteClick">
                    🗑 – Delete Note
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
import NoteUtilities from "../utils/NoteUtilities";

export default {
    props: ["note"],
    emits: ["onDeleteClick", "onPinClick"],
    data: function() {
        return {
            expanded: false
        }
    },
    methods: {
        toggleExpanded() {
            this.expanded = !this.expanded;
        },
        shortenNote() {
            return NoteUtilities.shortenNote(this.note.text, 80)
        },
        onPinClick() {
            this.$emit("onPinClick", this.note);
        },
        onDeleteClick() {
            this.$emit("onDeleteClick", this.note);
        }
    }
}
</script>

<style scoped>
.note {
    padding: 20px;
    background-color: white;
    position: relative;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 5px;
}

.note--text {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    display: inline-block;
    background-color: var(--secondary-color-light);
    padding: 10px;
    width: 100%;
}

.note__actions {
    padding-top: 10px;
    display: flex;
    flex-direction: row-reverse;
}

.note__actions button {
    /* border: none;
    background: none; */
}
.note__actions button:hover {
    /* box-shadow: none; */
    /* background: none;
    border: none;
    text-decoration: underline; */
}

.note__actions button:first-of-type {
    margin-left: 5px;
}

.note + .note {
    margin-top: 10px;
}
</style>
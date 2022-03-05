<template>
    <form class="note_composer" @submit="handleSubmit">
        <input
            data-testid="composer-input"
            :value="composerValue"
            @change="handleComposerValueChange"
            placeholder="Write a new note"
            autoFocus
        />
        <button class="primary" data-testid="submit-button" type="submit">
            Add Note
        </button>
    </form>
</template>

<script>
export default {
    emits: ["onCreateNote"],
    data: function() {
        return {
            composerValue: ""
        }
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();
            this.$emit("onCreateNote", this.composerValue);
            this.composerValue = "";
        },
        handleComposerValueChange(event) {
            this.composerValue = event.target.value;
        }
    }
}
</script>

<style scoped>
.note_composer {
    display: flex;
    padding: 20px 0;
    flex-shrink: 0;
    width: 80%;
    margin: 0 auto;
}

.note_composer input {
    flex-grow: 1;
}

.note_composer button {
    margin-left: 10px;
    flex-shrink: 0;
}
</style>
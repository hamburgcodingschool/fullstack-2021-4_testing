<template>
    <div v-if="showConfirmation" class="delete_all__confirmation">
        <button
            data-testid="confirm-deletion"
            class="delete_all__confirmation--delete danger"
            @click="handleConfirmationClick">
            Are you sure? This cannot be undone.
        </button>
        <button
            data-testid="cancel-deletion"
            class="delete_all__confirmation--cancel primary"
            @click="handleHideConfirmation">
            Cancel
        </button>
    </div>
    <button
        v-else
        data-testid="delete-all"
        class="delete_all simple danger"
        @click="handleShowConfirmation"
    >
        Delete All Notes
    </button>
</template>

<script>
export default {
    emits: ["onClick"],
    data: function() {
        return {
            showConfirmation: false
        }
    },
    methods: {
        handleShowConfirmation() {
            this.showConfirmation = true;
        },
        handleHideConfirmation() {
            this.showConfirmation = false;
        },
        handleConfirmationClick(event) {
            this.showConfirmation = false;
            this.$emit("onClick", event);
        }

    }
}
</script>

<style scoped>
.delete_all {
    margin-top: 20px;
    color: gray;
}

.delete_all__confirmation {
    margin-top: 20px;
}
.delete_all__confirmation button:first-of-type {
    margin-right: 10px;
}

</style>
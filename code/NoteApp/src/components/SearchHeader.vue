<template>
     <header class="search_header">
        <div class="search_header__title">
            <h1>Notes</h1>
        </div>
        <div class="search_header__form">
            <div class="search_header__search">
                <input
                    data-testid="search-input"
                    placeholder="Search"
                    :value="searchValue"
                    @input="onSearchValueChange"
                />
            </div>

            <div class="search_header__toggle">
                <label>
                    {{ pinnedChecked ? 'Show all notes' : 'Show pinned notes only' }}
                    <input
                        data-testid="pinned-toggle"
                        class="pinned_togle"
                        type="checkbox"
                        :checked="pinnedChecked"
                        @change="onPinnedChange"
                    />
                </label>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ["searchValue", "pinnedChecked"],
    emits: ["onSearchValueChange", "onPinnedChange"],
    methods: {
        onPinnedChange(event) {
            this.$emit("onPinnedChange", event)
        },
        onSearchValueChange(event) {
            this.$emit("onSearchValueChange", event)
        }
    }
}
</script>

<style scoped>

.search_header {
    background-color: var(--primary-color);
    display: flex;
    padding: 20px;
    color: white;
    flex-shrink: 0;
    flex-direction: column;
}

.search_header__title h1 {
    margin: 0 0 10px 0;
    padding: 0;
    font-size: 3rem;
}

.search_header__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.search_header__search {
    flex-grow: 1;
    max-width: 50%;
}

.search_header__search input {
    width: 100%;
}

.search_header__toggle {
    flex-shrink: 0;
}

.search_header__toggle label {
    font-size: var(--normal-font-size);
    user-select: none;
}

.search_header__toggle label input {
    margin-left: 10px;
}

</style>
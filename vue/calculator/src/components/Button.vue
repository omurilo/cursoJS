<template>
    <button class="button"
        @click="$emit('onCalcButtonClick', label)"
        :class="{ double, operation }">
        {{label}}
    </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: { type: Boolean },
        double: { type:  Boolean }
    }
}
</script>

<style>
    :root {
        --bg-button: #f0f0f0;
        --border-button: 1px solid #888;
    }

    .button {
        font-size: 1.4em;
        background-color: var(--bg-button);
        border: none;
        border-right: var(--border-button);
        border-bottom: var(--border-button);
        outline: none;
    }

    .button:active {
        background-color: #ccc;
    }

    .button.double {
        grid-column: span 2;
    }

    .button.operation {
        background-color: #fa8231;
        color: #fff;   
    }

    .button.operation:active {
        background-color: #fa8231cc;
    }
</style>

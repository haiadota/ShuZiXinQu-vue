<template>
    <div class="right_view selectablefalse">
        <div class="content">
            <div class="border_left"></div>
            <div class="border_right"></div>
            <slot></slot>
        </div>
        <slot name="sidebar"></slot>
    </div>
</template>

<script>
    export default {
        name: "RightView",
    }
</script>

<style scoped>

</style>
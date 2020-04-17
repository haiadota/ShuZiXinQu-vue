<template>
    <div :class="['left_view selectablefalse',{ 'hide_inner': false }]">
        <div class="white_bar"></div>
        <div :class="['content',{'left-hide': false}]">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LeftView",
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
    .hide_inner {
        width: 1.7rem;
    }

    .content {
        width: 100%;
        height: 100%;
        transition: all 1.2s ease;
        position: relative;
    }

    .left-hide {
        transition: all 1s ease;
        transform: translateX(-8.15rem);
    }
</style>
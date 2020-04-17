<template>
    <div class="box main_view">
        <LeftView>
        </LeftView>
        <MidView></MidView>
        <RightView>
        </RightView>
    </div>
</template>

<script>
    import MidView from '@/components/MidView.vue'
    import LeftView from '@/components/LeftView.vue'
    import RightView from '@/components/RightView.vue'
    import Theme from '@/components/Theme.vue'

    export default {
        name: 'Home',
        components: {
            MidView,
            LeftView,
            RightView,
            Theme
        },
        data() {
            return {

            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>

</style>


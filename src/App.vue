<template>
    <div id="app">
        <Background/>

        <router-view/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Background from '@/components/Background.vue'

    export default {
        name: 'App',
        components: {
            Background,
        },
    }
</script>

<style lang="scss">
    body {
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>

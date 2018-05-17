<template>
    <form @submit.prevent="submit()">
        <input type="text" v-model.trim="query">
        <button type="submit">submit</button>

        <p>{{ this.info }}</p>
    </form>
</template>

<script>
    const wtf = require('wtf_wikipedia')

    export default {
        name: 'Home',

        computed: {
            query: {
                get() {
                    return this.$store.state.query;
                },
                set(query) {
                    this.$store.commit('setQuery', query);
                },
            },
            info() {
                if (this.$store.state.deathState === null) {
                    return '';
                }

                if (this.$store.state.deathState === 'dead') {
                    return 'Die is hartstikke dood!';
                }

                if (this.$store.state.deathState === 'alive') {
                    return 'Deze persoon leeft nog.';
                }
            },
        },

        methods: {
            submit() {
                this.$store.commit('setDeathState', null);

                if (this.$store.state.query.length < 1) {
                    return;
                }

                wtf.fetch(this.query, 'en', (err, doc) => {
                    // Check if we have an infobox present...
                    if (doc.infobox(0)) {
                        let data = doc.infobox(0).data

                        if ('death_date' in data) {
                            this.$store.commit('setDeathState', 'dead');
                        } else {
                            this.$store.commit('setDeathState', 'alive');
                        }
                    }
                })
            },
        },
    }
</script>

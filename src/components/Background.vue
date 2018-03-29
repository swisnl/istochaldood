<template>
    <svg class="background" viewBox="0 0 375 667" xmlns="http://www.w3.org/2000/svg" @click="toggleDark">
        <path ref="background" fill="#316FB8" d="M0 0H375V667H0z"/>
        <g ref="stars" fill="#fff" transform="translate(0, 70)">
            <circle opacity=".5" cx="231.5" cy="35.5" r="2.5"/>
            <circle opacity=".5" cx="29" cy="62" r="2"/>
            <circle opacity=".5" cx="391" cy="62" r="2"/>
            <circle opacity=".4" cx="79" cy="2" r="2"/>
            <circle opacity=".4" cx="441" cy="2" r="2"/>
            <circle opacity=".5" cx="139.5" cy="82.5" r="2.5"/>
            <circle opacity=".3" cx="289" cy="12" r="2"/>
            <circle opacity=".3" cx="249" cy="212" r="2"/>
            <circle opacity=".3" cx="29" cy="152" r="2"/>
            <circle opacity=".3" cx="391" cy="152" r="2"/>
            <circle opacity=".5" cx="290" cy="236" r="3"/>
            <circle opacity=".5" cx="186" cy="131" r="3"/>
            <circle opacity=".5" cx="60" cy="202" r="3"/>
            <circle opacity=".5" cx="422" cy="202" r="3"/>
            <circle opacity=".5" cx="-24.5" cy="146.5" r="2.5"/>
            <circle opacity=".5" cx="337.5" cy="146.5" r="2.5"/>
            <circle opacity=".5" cx="-96" cy="177" r="2"/>
            <circle opacity=".3" cx="-96" cy="87" r="2"/>
            <circle opacity=".5" cx="-42.5" cy="92.5" r="2.5"/>
            <circle opacity=".5" cx="275.5" cy="303.5" r="2.5"/>
            <circle opacity=".5" cx="73" cy="330" r="2"/>
            <circle opacity=".5" cx="435" cy="330" r="2"/>
            <circle opacity=".4" cx="123" cy="270" r="2"/>
            <circle opacity=".4" cx="485" cy="270" r="2"/>
            <circle opacity=".5" cx="183.5" cy="350.5" r="2.5"/>
            <circle opacity=".3" cx="333" cy="280" r="2"/>
            <circle opacity=".3" cx="293" cy="480" r="2"/>
            <circle opacity=".3" cx="73" cy="420" r="2"/>
            <circle opacity=".3" cx="435" cy="420" r="2"/>
            <circle opacity=".5" cx="334" cy="504" r="3"/>
            <circle opacity=".5" cx="230" cy="399" r="3"/>
            <circle opacity=".5" cx="104" cy="470" r="3"/>
            <circle opacity=".5" cx="466" cy="470" r="3"/>
            <circle opacity=".5" cx="19.5" cy="414.5" r="2.5"/>
            <circle opacity=".5" cx="381.5" cy="414.5" r="2.5"/>
            <circle opacity=".5" cx="-52" cy="445" r="2"/>
            <circle opacity=".4" cx="-102" cy="505" r="2"/>
            <circle opacity=".3" cx="-52" cy="355" r="2"/>
            <circle opacity=".5" cx="-83" cy="305" r="3"/>
            <circle opacity=".5" cx="1.5" cy="360.5" r="2.5"/>
            <circle opacity=".5" cx="363.5" cy="360.5" r="2.5"/>
        </g>
        <ellipse ref="hillBack" fill="#255756" cx="125.5" cy="562.5" rx="333.5" ry="269.5"/>
        <path ref="hillMiddle"
              d="M-31 691.733v-190.77c50.109-21.663 88.875-33.314 93.38-34.616l-.878-3.924 5.295-3.659-5.933-14.644c1.738-3.67 4.194-6.158 7.368-7.465 2.956-1.217 6.63-1.253 11.021-.108l1.78 17.21 6.66 1.484.119 3.523 5.753-1.144-.886-3.147 6.325-3.426-5.449-19.871c2.4-3.581 5.345-5.825 8.837-6.731 3.729-.968 8.003-.598 12.824 1.109v21.735h7.962l1.065 3.758 10.268-2.712-2.114-3.958 8.473-3.057-6.36-19.922c3.715-3.226 7.379-5.086 10.99-5.58 3.871-.53 7.69.307 11.458 2.51l1.79 18.327 8.01-.655v6.09C257.768 426.238 369.812 409.134 434 408v283.733H-31z"
              fill="#293234"/>
        <path ref="hillFront"
              d="M-47.907 784L458 789c-31.593-104.58-50.357-158.91-56.293-162.991-.523-.36 4.793-8.585 15.95-24.677l-11.533-13.847 22.144-81.765c-12.563-8.158-25.577-12.682-39.042-13.57-13.658-.902-27.766 1.831-42.326 8.199l-17.217 64.422-14.699-2.992-5.396 12.021c-7.203-2.417-10.698-4.154-18.483-6.364-.84-.238 1.709-4.065 7.645-11.48l-16.924-9.382 18.145-51.084c-6.789-9.328-16.455-15.067-28.998-17.218-9.103-1.56-21.084.468-35.942 6.085L229.067 538l-17.2-1.732-2.453 13.822-15.423-4.955 1.31-16.138h-14.415l6.797-46.553c-9.053-8.704-18.773-13.68-29.161-14.93-9.856-1.186-20.378 1.355-31.568 7.623l-2.805 46.307-18.562-1.187v18.593c-6.9-.114-75.587-9.853-153.494 3.803V784z"
              fill="#220d31"/>
    </svg>
</template>

<script>
    import { TweenMax, TimelineMax, Circ, Linear, Sine } from 'gsap'

    export default {
        name: 'background',

        data () {
            return {
                introDone: false,
                dark: false,
            }
        },

        mounted () {
            this.$options.timelines = {}

            // Stars
            this.startStars()

            // Intro
            this.$options.timelines.intro = new TimelineMax({
                paused: true,
                onComplete: () => {
                    this.introDone = true
                },
            })
            this.$options.timelines.intro.add([
                TweenMax.from(this.$refs.stars, 2, {opacity: 0, ease: Circ.easeOut}),
                TweenMax.from(this.$refs.hillBack, 1, {opacity: 0, delay: 0.5, y: '+=25', ease: Circ.easeOut}),
                TweenMax.from(this.$refs.hillMiddle, 1, {opacity: 0, delay: 0.5, y: '+=50', ease: Circ.easeOut}),
                TweenMax.from(this.$refs.hillFront, 1, {opacity: 0, delay: 0.5, y: '+=200', ease: Circ.easeOut}),
            ])

            // Dark
            this.$options.timelines.dark = new TimelineMax({
                paused: true,
                onComplete: () => {
                    this.startStars()
                },
                onReverseComplete: () => {
                    this.startStars()
                },
            })
            this.$options.timelines.dark.add([
                TweenMax.to(this.$refs.background, 1, {
                    ease: Sine.easeInOut,
                    fill: '#001d3e',
                }),
                TweenMax.to(this.$refs.hillBack, 1, {
                    ease: Sine.easeInOut,
                    svgOrigin: '187.5 333.5',
                    y: '+=100',
                    scale: 1,
                }),
                TweenMax.to(this.$refs.hillMiddle, 1, {
                    ease: Sine.easeInOut,
                    svgOrigin: '225 333.5',
                    y: '-=300',
                    scale: 1.5,
                    fill: '#03082f',
                }),
                TweenMax.to(this.$refs.hillFront, 1, {
                    ease: Sine.easeInOut,
                    svgOrigin: '100 333.5',
                    y: '-=650',
                    scale: 3,
                    fill: '#0e0317',
                }),
            ])

            this.playIntro()
        },

        watch: {
            dark (newValue) {
                if (newValue) {
                    this.playDarkIn()
                } else {
                    this.playDarkOut()
                }
            },
        },

        methods: {
            startStars () {
                if (this.$options.timelines.stars) {
                    this.$options.timelines.stars.kill()
                }

                this.$options.timelines.stars = TweenMax.to(this.$refs.stars, 240, {
                    ease: Linear.easeNone,
                    svgOrigin: '187.5 323.5',
                    rotation: '+=360',
                    repeat: -1,
                })
            },

            speedUpStars () {
                if (this.$options.timelines.stars) {
                    this.$options.timelines.stars.kill()
                }

                this.$options.timelines.stars = TweenMax.to(this.$refs.stars, 1, {
                    ease: Sine.easeInOut,
                    svgOrigin: '187.5 323.5',
                    rotation: '+=60',
                })
            },

            playIntro () {
                this.$options.timelines.intro.play()
            },

            playDarkIn () {
                this.speedUpStars()
                this.$options.timelines.dark.play()
            },

            playDarkOut () {
                this.speedUpStars()
                this.$options.timelines.dark.reverse()
            },

            toggleDark () {
                if (!this.introDone) {
                    return
                }

                this.dark = !this.dark
            },
        },

        timelines: null,
    }
</script>

<style lang="scss">
    .background {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        z-index: -1;
    }
</style>

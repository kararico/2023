<template>
    <section class="works" v-show="wroks"  ref="trigger">
        <div class="inner">
            <h2 ref="titles">HOW DO<br />I WORK?</h2>
            <div class="works_list_content">
                <ul class="works_list">
                    <li v-for="(item, index) in project[0]" :key="index">
                 
                        <router-link :to="`/product/${item.id}`" tag="a">
                        <span>({{ index < 9 ? '0' + item.id : item.id }})</span>
                                    <span>{{ item.project }}</span>
                        </router-link> 
                    </li>
                    <div class="cursor"></div>
                </ul>
                <div class="works_cricle_box">
                    <svg viewBox="0 0 244.1 244.1">
                        <path id="circlePath" d="M226.6,122.1c0,57.7-46.8,104.5-104.5,104.5S17.6,179.8,17.6,122.1S64.4,17.6,122.1,17.6
                        S226.6,64.4,226.6,122.1z" fill="transparent" />
                        <text>
                            <textPath xlink:href="#circlePath">
                                Pro-v front-end developer - Pro-v front-end developer
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { gsap, TimelineMax, Expo } from "gsap";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import axios from 'axios'

export default {
    components: {
    },
    data() {
        return {
            wroks: false,
            isActive: false,
            scrollY: 0,
            project: [],
            items: []
        }
    },
    async  created() {
        window.addEventListener('scroll', this.handleScroll);
        const db = firebase.firestore();
        const storage = firebase.storage();
        const storageRef = storage.ref()
        const objectRef = storageRef.child('works.json')
        const downloadUrl = await objectRef.getDownloadURL();
        const response = await axios.get(downloadUrl);
        const data = await response.data;
        this.project.push( data );

        this.$store.dispatch("FETCH_ASK");
    },
    mounted() {
        this.$nextTick(() => {
            this.emitter.on("loading-checkmessage",
                msg => {
                    this.wroks = msg;
                    if( msg ){
                        this.worksListHover();
                        // this.workScrollMotions();
                        // this.handleScroll();
                        // const db = firebase.firestore();
                        // const collectionRef = db.collection('collectionName');
                        // console.log( db );
                        // collectionRef.get()
                        //     .then(querySnapshot => {
                        //         const data = querySnapshot.docs.map(doc => doc.data());
                        //         console.log(data);
                        //         // this.items = data;
                        //     })
                        //     .catch(error => {
                        //         console.error(error);
                        //     });
                    }
                }
            );


        });
    },
    methods: {
        toggleClass() {
            this.isActive = !this.isActive;
        },
        worksListHover() {
            const menuItems = document.querySelectorAll(".works_list > li");
            const cursor = document.querySelector(".cursor");
            let getXY = function (e) {
                return [
                    e.clientX,
                    e.clientY
                ];
            };

            menuItems.forEach(menuItem => {
                menuItem.addEventListener("mouseenter", e => {
                    let [x, y] = getXY(e);
                    cursor.animate(
                        [
                            {
                                opacity: 0,
                                transform: `translate(${x}px, ${y}px) scale(0)`
                            },
                            {
                                opacity: 1,
                                transform: `translate(${x}px, ${y}px) scale(1)`
                            }
                        ],
                        { duration: 300, fill: "forwards" }
                    );
                    menuItem.addEventListener("mouseleave", e => {
                        let [x, y] = getXY(e);
                        cursor.animate(
                            [
                                {
                                    opacity: 1,
                                    transform: `translate(${x}px, ${y}px) scale(1)`
                                },
                                {
                                    opacity: 0,
                                    transform: `translate(${x}px, ${y}px) scale(0)`
                                }
                            ],
                            { duration: 100, fill: "forwards" }
                        );
                    });
                });
                // move the cursor when mouse moves.
                menuItem.addEventListener("mousemove", e => {
                    let [x, y] = getXY(e);
                    cursor.animate(
                        [
                            {
                                transform: `translate(${x}px, ${y}px)`
                            },
                            {
                                transform: `translate(${x}px, ${y}px)`
                            }
                        ],
                        { duration: 500, delay: 50, fill: "forwards" }
                    );
                });
            });
        },
        workScrollMotions(){

        const timeline1 = new TimelineMax();
           timeline1.fromTo(this.$refs.titles, { opacity: 0, x:-window.innerWidth /2 }, {opacity: 1, x: 0, css:{className:'active'} })
           this.$scrollTrigger.create({
               trigger: this.$refs.trigger,
               animation: timeline1,
               start: (this.$refs.trigger.offsetTop/2),
               end: () => `+=${this.$refs.trigger.clientHeight}`,
               scrub: 1, 
               markers:true
           });
        },
        handleScroll(){
        }
    },
}
</script>

<style lang="scss" scoped>
$menu-image-urls: url('@/assets/images/f&f_visual.jpg'),
    url('@/assets/images/casamia_visual.jpg'),
    url('@/assets/images/hodooenglish_visual.jpg'),
    url('@/assets/images/bullsone_visual.jpg'),
    url('@/assets/images/pampers_visual.jpg'),
    url('@/assets/images/bing_visual.jpg');

$animated-circle-text-color: #111;
$animated-circle-text-size: 300px;
$animated-circle-text-font-family: sans-serif;
$animated-circle-text-font-size: 25px;
$animated-circle-text-letter-spacing: 4px;


.works {
    margin-top: 10em;
    .inner {
        position: relative;
        margin: 4em 3em 0;

        h2 {
            position: relative;
            font-size: 18em;
            @extend %en-font;
            font-weight: bold;
            letter-spacing: -0.04em;
        }

        .works_list_content {
            margin: 10em 0 5em;

            .works_list {
                position: relative;
                border-bottom: 1px solid #000;

                li {
                    position: relative;
                    z-index: 0;
                    border-top: 1px solid #000;

                    @for $i from 1 through 6 {
                        &:nth-child(#{$i}):hover~.cursor {
                            background-image: nth($menu-image-urls, $i);
                        }
                    }

                    a {
                        padding: 1em  1.5em;
                        display: flex;
                        justify-content: flex-start;
                        color: #111;
                        text-decoration: none;
                        font-size: 2em;

                        span {
                            @extend %en-font;
                            font-weight: bold;
                            letter-spacing: -0.04em;
                            text-transform: uppercase;

                            &:last-child {
                                margin-left: auto
                            }
                        }
                    }

                    &:hover {
                        a {
                            span {
                                color: rgb(85, 85, 85);
                            }
                        }
                    }
                }

                .cursor {
                    position: fixed;
                    top: -15em;
                    left: -15em;
                    z-index: -1;
                    width: 40em;
                    height: 40em;
                    transform: translate(-25%, -25%);
                    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
                    background-position: center center;
                    background-size: auto 100%;
                    opacity: 0;
                }
            }

            .works_cricle_box {
                position: absolute;
                top: 0;
                right: 0;
                width: 40em;
                height: 36em;
                overflow: hidden;

                svg {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    animation-name: rotate;
                    animation-duration: 10s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }

                text {
                    font-family: $animated-circle-text-font-family;
                    font-size: $animated-circle-text-font-size;
                    fill: $animated-circle-text-color;

                    textPath {
                        letter-spacing: $animated-circle-text-letter-spacing;
                    }
                }
            }

            @keyframes rotate {
                from {
                    transform: rotate(360deg)
                }

                to {
                    transform: rotate(0)
                }
            }


        }

    }
}</style>

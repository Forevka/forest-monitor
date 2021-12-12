<template>
    <div class="container" :style="{
        'background-image': imageUrl
    }">
        <div class="main">
            <h1>{{ title }}</h1>
            <p>{{ description }}
            </p>
            <div class="source-link">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
                <g id="XMLID_1_">
                    <rect id="XMLID_3_" x="67.5" y="112.7" class="st0" width="365" height="274.7"/>
                    <path id="XMLID_4_" class="st1" d="M259.2,209c0,1.3-0.4,2.6-1.6,3.6c-1.2,1-3.2,1.8-6.5,1.8h-6.7v-10.7h6.4c3,0,5.1,0.6,6.4,1.6
                        C258.6,206.2,259.2,207.5,259.2,209"/>
                    <path id="XMLID_5_" class="st1" d="M253.7,196.2c1.2-0.9,1.8-2.2,1.9-4.1c0-1.3-0.4-2.4-1.3-3.3c-0.9-0.8-2.5-1.4-5.1-1.4h-4.7
                        v10.2h3.3C250.5,197.6,252.5,197.1,253.7,196.2"/>
                    <path id="XMLID_8_" class="st1" d="M266.4,209.8c0-5-3.3-8.7-8.6-10.2c1.4-0.7,2.6-1.6,3.4-2.7c1.1-1.5,1.6-3.2,1.6-5.3
                        c0-2.6-1-5.2-3.2-7.1c-2.2-2-5.4-3.2-9.9-3.2h-12.4v39.4h14.5h0c5.2,0,8.8-1.4,11.2-3.5C265.4,215,266.4,212.3,266.4,209.8
                        M280.2,228.2h-58.1v-54.7h58.1V228.2z"/>
                    <path id="XMLID_9_" class="st1" d="M186.8,196.2c1.2-0.9,1.8-2.2,1.9-4.1c0-1.3-0.4-2.4-1.3-3.3c-0.9-0.8-2.5-1.4-5.1-1.4h-4.7
                        v10.2h3.3C183.5,197.6,185.6,197.1,186.8,196.2"/>
                    <path id="XMLID_10_" class="st1" d="M190.3,205.3c-1.3-0.9-3.4-1.6-6.4-1.6h-6.4v10.7h6.7c3.3,0,5.3-0.8,6.5-1.8
                        c1.2-1,1.6-2.3,1.6-3.6C192.2,207.5,191.6,206.2,190.3,205.3"/>
                    <path id="XMLID_13_" class="st1" d="M199.5,209.8c0-5-3.3-8.7-8.6-10.2c1.4-0.7,2.6-1.6,3.4-2.7c1.1-1.5,1.6-3.2,1.6-5.3
                        c0-2.6-1-5.2-3.2-7.1c-2.2-2-5.4-3.2-9.9-3.2h-12.4v39.4h14.5h0c5.2,0,8.8-1.4,11.2-3.5C198.5,215,199.5,212.3,199.5,209.8
                        M213.3,228.2h-58.1v-54.7h58.1V228.2z"/>
                    <path id="XMLID_16_" class="st1" d="M335.6,210.1l-0.9,0.6c-4.5,2.7-9.4,4.2-13.8,4.2c-9.5,0-15.8-5.7-15.8-13.9
                        c0-8,6.6-14,15.6-14c4.6,0,8.7,1.2,13.7,3.9l0.9,0.5v-7.3l-0.4-0.2c-5.6-2.2-9.9-3.2-14.1-3.2c-6.6,0-12.3,2.2-16.4,5.9
                        c-4.1,3.7-6.5,8.9-6.5,14.9c0,4.2,1.7,9.1,5.4,12.9c3.7,3.9,9.3,6.7,17.1,6.7h0c6.4,0,10.9-1.4,14.9-3.4l0.3-0.2L335.6,210.1
                        L335.6,210.1z M347.1,228.2H289v-54.7h58.1V228.2z"/>
                    <polygon id="XMLID_17_" class="st1" points="170.2,258.6 179,258.6 179,323.1 171.1,323.1 127.9,273.4 127.9,323.1 119.2,323.1 
                        119.2,258.6 126.7,258.6 170.2,308.7 	"/>
                    <polygon id="XMLID_18_" class="st1" points="195.7,258.6 232.2,258.6 232.2,266.8 204.9,266.8 204.9,286.5 231.3,286.5 
                        231.3,294.8 204.9,294.8 204.9,314.8 233.1,314.8 233.1,323.1 195.7,323.1 	"/>
                    <polygon id="XMLID_19_" class="st1" points="330.9,258.6 340.1,258.6 314,323.4 311.9,323.4 290.8,270.9 269.5,323.4 267.5,323.4 
                        241.5,258.6 250.8,258.6 268.6,303.1 286.5,258.6 295.3,258.6 313.3,303.1 	"/>
                    <path id="XMLID_20_" class="st1" d="M365.1,296.1l-7-4.3c-4.4-2.7-7.5-5.3-9.4-7.9c-1.9-2.6-2.8-5.6-2.8-9c0-5.1,1.8-9.2,5.3-12.4
                        c3.5-3.2,8.1-4.8,13.7-4.8c5.4,0,10.3,1.5,14.8,4.5v10.5c-4.7-4.5-9.7-6.7-15-6.7c-3,0-5.5,0.7-7.4,2.1c-1.9,1.4-2.9,3.2-2.9,5.4
                        c0,1.9,0.7,3.7,2.1,5.4c1.4,1.7,3.7,3.5,6.9,5.3l7.1,4.2c7.9,4.7,11.8,10.7,11.8,18c0,5.2-1.7,9.4-5.2,12.6
                        c-3.5,3.2-8,4.8-13.5,4.8c-6.4,0-12.2-2-17.4-5.9v-11.7c5,6.3,10.8,9.5,17.3,9.5c2.9,0,5.3-0.8,7.2-2.4s2.9-3.6,2.9-6.1
                        C373.6,303.4,370.8,299.6,365.1,296.1"/>
                </g>
                </svg>
            </div>
            <div class="info">
            <span>{{author}}</span>
            <i class="fas fa-thumbs-up"></i>
            <i class="fas fa-share"></i>
            </div>
        </div>
    </div>
    <div class="body"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    computed: {
        imageUrl() {
            return `url(${this.image})`
        }
    },
    props: {
        'title': {
            type: String,
            required: false,
            default() {
                ''
            }
        }, 
        'id': {
            type: Number,
            required: false,
            default() {
                ''
            }
        }, 
        'description': {
            type: String,
            required: false,
            default() {
                ''
            }
        }, 
        'image': {
            type: String,
            required: false,
            default() {
                ''
            }
        }, 
        'author': {
            type: String,
            required: false,
            default() {
                ''
            }
        }
    }
})
</script>

<style lang="scss" scoped>

.st0{fill:#9D0A0E;}
.st1{fill:#FFFFFF;}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container
{
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  transition: 1s;
  //transform: translate(-50%, -50%);
  height: 360px;
  width: 640px;
  //background-image: url("https://i.guim.co.uk/img/media/d3a38ee967ac688087fbbba6e4c0d3cb93da47ce/55_7_4387_2632/master/4387.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=01b97c8610475105ff7d7f555557c69c");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  border-radius: 6px;
}

.container:hover {
  background-size: 110%;
}

.main
{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.main h1
{
  text-transform: uppercase;
  color: white;
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, white, transparent) 1;
  margin: 0 auto 0 1rem;
  padding: 0.5rem 0;
}
.main p
{
  color: white;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  padding: 0.75rem 1rem;
}
.main h1, .main p {
  position: relative;
  top: 20%;
}
.main::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient( transparent, rgb(27, 27, 27), black);
  z-index: -1;
  opacity: 0.8;
}

.source-link {
  height: 40px;
  width: 40px;
  position: relative;
  top: 20%;
  left: 2%;
}
.info {
  position: relative;
  top: 12%;
  left: 10%;
  width: 100%;
  color: white;
  cursor: pointer;
}
.info i {
  position: relative;
  left: 50%;
  margin: 0 0.75rem;
}

.fa-thumbs-up:hover{
  color: rgb(113, 113, 199);
}
.fa-share:hover {
  color: rgb(204, 160, 79);
}
</style>
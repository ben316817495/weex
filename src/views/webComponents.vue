<template>
    <div class="webComponents-view">
        <app-header></app-header>
       
              <web :src="url" class="webview" :style="{'height':windowHeight}"></web>
       
        <div class="loading" v-if="loading">
            <text class="loading-text">{{windowHeight}}</text>
        </div>
    </div>
</template>

<script>
    // const webview = weex.requireModule('webview')
    let windowHeight = (WXEnvironment.deviceHeight -50 )+'px'
    import AppHeader from '../components/app-header.vue'
    export default {
        components: { AppHeader },
        data () {
            return {
                loading: true,
                url:'https://www.baidu.com/',
                windowHeight:windowHeight,
            }
        },
        methods:{

        },
     }
</script>

<style scoped>
    .loading {
    width: 750px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
  }
   .webview {
    /* margin-left: 75px; */
     width: 100%; 
    height: 750px;
    border-width: 2px;
    /* border-style: solid;
    border-color: #41B883; */
  }
</style>
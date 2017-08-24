<template>
    <div class="webComponents-view">
         <!-- <app-header></app-header>  -->
       
        <web :src="url" class="webview" :style="{'height':windowHeight,'width':windowWidth}"></web>
       
        <!-- <div class="loading" v-if="loading">
            <text class="loading-text">loading ...</text>
        </div> -->
    </div>
</template>

<script>
    // const webview = weex.requireModule('webview')
    let windowHeight = (WXEnvironment.deviceHeight -50 )+'px'
    let windowWidth =WXEnvironment.deviceWidth +'px'
    
    import AppHeader from '../components/app-header.vue'
    export default {
        components: { AppHeader },
        data () {
            return {
                loading: true,
                url:'https://ben316817495.github.io/mixedApplication/showpage/',
                windowHeight:windowHeight,
                windowWidth:windowWidth,
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
   
  
  }
</style>
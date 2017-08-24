<template>
    <div class="webComponents-view">
         <!-- <app-header></app-header>  -->
        
        <loading v-if="loading" :style="{'height':windowHeight}"></loading>
        <networkError v-if="networkError"></networkError>
        <web :src="url" class="webview" :style="{'height':windowHeight,'width':windowWidth}"  @pagestart="start" @pagefinish="finish"></web>
       
        <!-- -->
    </div>
</template>

<script>
    // const webview = weex.requireModule('webview')
    let windowHeight = WXEnvironment.deviceHeight+'px'
    let windowWidth =WXEnvironment.deviceWidth +'px'
    
    import AppHeader from '../components/app-header.vue'
    import loading from '../components/loading.vue'
    import networkError from '../components/networkError.vue'
    


    export default {
        components: { AppHeader,loading,networkError },
        data () {
            return {
                loading: true,
                networkError:false,
                url:'https://ben316817495.github.io/mixedApplication/showpage/',
                windowHeight:windowHeight,
                windowWidth:windowWidth,
            }
        },
        methods:{
            start(){
            },
            finish (event) {
                this.loading = false;
            },

        },
     }
</script>

<style scoped>
   .webview {
   
  
  }
</style>
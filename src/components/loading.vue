<template>
    <div class="loading">
        <!-- {{loadingImg}} -->
       

        <image class="image" src="http://vue.wangmc.cn/img/loading.gif"></image>   
       
         <text class="loading-text">拼命加载中,请稍后...</text> 
    </div>
</template>

<script>
// import loadingImg from '../assets/img/123demo.png'
// console.log(loadingImg)
export default {
    data() {
        return {
            //  loadingImg,
        }
    }
}
</script>

<style scoped>
.image{
    height:168px ;
    width: 160px;
    position:absolute;
    top:200px;
}
.loading {
    width: 750px;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: url('../assets/img/123demo.png')  */
}

.loading-text {
    margin: auto;
    text-align: center;
    font-size: 40px;
    color: #BBB;
}
</style>
  

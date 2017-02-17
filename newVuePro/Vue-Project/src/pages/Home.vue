<template>
    <div class="container">
        <home-header></home-header>
        <div class="content">
            <ul class="cont_ul">
                <list
                    v-for="item in items"
                    :price = "item.price"
                    :title = "item.title"
                    >
                </list>
            </ul>
        </div>
    </div>
</template>
<style media="screen">
    .container{
        max-width: 640px;
        margin: 0 auto;
        overflow: hidden;
    }
    .cont_ul{
        padding-top: 0.05rem;
        margin: 0 -0.12rem;

    }
    .cont_ul:after{
        content: "";
        display: block;
        width: 0;
        height: 0;
        clear:both;
    }
</style>

<script>
    import HomeHeader from '../components/HomeHeader'
    import List from '../components/List'

    export default{
        data(){
            return {
                items : [
                    {'price':'129.00','title':'武侠'},
                    {'price':'229.00','title':'言情'},
                    {'price':'29.00','title':'都市'},
                    {'price':'1129.00','title':'玄幻'},
                    {'price':'161.00','title':'奇幻'},
                    {'price':'130.00','title':'竞技'},
                    {'price':'199.00','title':'烧恼'},
                    {'price':'139.00','title':'科幻'}
                ]
            }
        },
        components:{
            HomeHeader,
            List
        }
    }
</script>

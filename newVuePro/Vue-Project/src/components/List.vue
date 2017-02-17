<template>
    <li class="sec_li">
        <router-link to="/detail" class="lp_li_a">
            <div class="lp-li-imgWrap">
                <img src="../assets/img/01.jpg" alt="">
            </div>
            <p class="lp_li_name">{{ title }}</p>
            <p class="lp_li_price">{{ price }}元</p>
        </router-link>

    </li>
</template>
<style media="screen" scoped>
    .sec_li{
        float: left;
        width: 50%;
        margin-bottom: 0.1rem;
    }
    .lp_li_a{
        display: block;
        padding: 0.3rem 0;
        margin: 0 0.05rem;
        text-align: center;
        background: #fff;
    }
    .lp-li-imgWrap{
        padding: 0.24rem 0;
    }
    .lp_li_name,.lp_li_price{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 16px;
        color: #333;
        text-align: center;
    }
    .lp_li_price{
        color: #fb3b3b;
    }
</style>
<script type="text/javascript">
    export default{
        props : ['price','title']
    }
</script>

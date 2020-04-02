<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :title="['流行','新款','精品']" class="tab-control"></tab-control>
    <ul>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
      <li>&</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import {getHomeMultidata,getHomeGoods} from 'network/home'
  import HomeSwiper from 'views/home/childComps/HomeSwiper.vue'
  import RecommendView from 'views/home/childComps/RecommendView.vue'
  import FeatureView from 'views/home/childComps/FeatureView.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:  {
          'pop': {page: 0, list: []},
          'news': {page: 0, list: []},
          'sell': {page: 0, list: []}
        }
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>

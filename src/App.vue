<template>
  <div id="app">
    <aside>
      <ul>
        <li v-for="(item, index) in pages" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </aside>
    <section>
      <router-view /> 
    </section>    
  </div>
</template>
<script>
import store from './store/index'
export default {
  data() {
    return {
      pages: store.state.routes
    }
  }
};
</script>
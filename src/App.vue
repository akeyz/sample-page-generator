<template>
  <div id="app">
    <aside>
      <ul>
        <li v-for="(item, index) in pages" :key="index">
          <router-link :to="item.path">{{item.name}}</router-link>
          <ul v-if="item.children">
            <li v-for="(child, idx) in item.children" :key="idx">
              <router-link :to="item.path + '/' + child.path">{{child.name}}</router-link>
            </li>
          </ul>
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
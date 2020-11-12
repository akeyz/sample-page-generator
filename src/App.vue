<template>
  <div id="app">
    <aside>
      <ul>
        <li v-for="(item, index) in pages" :key="index">
          <router-link :to="item.path">{{ item.name }}</router-link>
          <ul v-if="item.children">
            <li v-for="(child, idx) in item.children" :key="idx">
              <router-link :to="item.path + '/' + child.path">{{
                child.name
              }}</router-link>
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
import store from "./store/index";
export default {
  data() {
    return {
      pages: store.state.routes,
    };
  },
  mounted() {
    this.flexible();
  },
  methods: {
    flexible() {
      (function flexible(window, document) {
        let docEl = document.documentElement;
        let dpr = window.devicePixelRatio || 1;

        // adjust body font size
        function setBodyFontSize() {
          if (document.body) {
            document.body.style.fontSize = 12 * dpr + "px";
          } else {
            document.addEventListener("DOMContentLoaded", setBodyFontSize);
          }
        }
        setBodyFontSize();

        // set 1rem = viewWidth / 10
        function setRemUnit() {
          let rem = docEl.clientWidth / 24;
          docEl.style.fontSize = rem + "px";
        }

        setRemUnit();

        // reset rem unit on page resize
        window.addEventListener("resize", setRemUnit);
        window.addEventListener("pageshow", function (e) {
          if (e.persisted) {
            setRemUnit();
          }
        });

        // detect 0.5px supports
        if (dpr >= 2) {
          let fakeBody = document.createElement("body");
          let testElement = document.createElement("div");
          testElement.style.border = ".5px solid transparent";
          fakeBody.appendChild(testElement);
          docEl.appendChild(fakeBody);
          if (testElement.offsetHeight === 1) {
            docEl.classList.add("hairlines");
          }
          docEl.removeChild(fakeBody);
        }
      })(window, document);
    },
  },
};
</script>
<template>
  <div
    id="scrren-layout"
    :style="{ width: layout.width + 'px', height: layout.height + 'px' }"
  >
    <div
      v-for="(item, index) in config"
      :key="index"
      class="grid"
      :style="{
        top: (layout.gap + layout.colHeight) * item.y + layout.gap + 'px',
        left: (layout.gap + layout.colWidth) * item.x + layout.gap + 'px',
        width: (layout.gap + layout.colWidth) * item.cols - layout.gap + 'px',
        height: (layout.gap + layout.colHeight) * item.rows - layout.gap + 'px',
      }"
    >
      {{ index }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartsLayout",
  props: {},
  data() {
    return {
      config: [],
      layout: {
        width: 0,
        height: 0,
        cols: 0,
        rows: 0,
        gap: 0,
        colWidth: 0,
        colHeight: 0,
      },
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.fetchLayout().then((res) => {
        this.genHtmlLayout(res);
      });
    },

    fetchLayout() {
      return fetch("./data/layout.json").then((res) => {
        return res.json();
      });
    },

    genHtmlLayout(data) {
      if (!data) return false;

      this.config = data.layout;

      this.layout.width = data.screen.width;
      this.layout.height = data.screen.height;
      this.layout.cols = data.screen.cols;
      this.layout.rows = data.screen.rows;
      this.layout.gap = data.screen.gap;
      this.layout.colWidth =
        (this.layout.width - this.layout.gap) / this.layout.cols -
        this.layout.gap;
      this.layout.colHeight =
        (this.layout.height - this.layout.gap) / this.layout.rows -
        this.layout.gap;
    },
  },
};
</script>

<style lang="less" scoped>
#scrren-layout {
  position: relative;
  .grid {
    position: absolute;
    background: #0099ff75;
    box-sizing: border-box;
    border: 1px dashed #ff7c11;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #5050503d;
  }
}
</style>

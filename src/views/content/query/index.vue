<template>
  <div>
    <h2>查询</h2>
    <el-row :gutter="20">
      <el-col class="label" :span="3">name</el-col>
      <el-col :span="6">
        <el-input v-model="query.name" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col class="label" :span="3">gender</el-col>
      <el-col :span="6">
        <el-select v-model="query.gender" placeholder="请选择">
          <el-option label="male" value="male"></el-option>
          <el-option label="female" value="female"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col class="label" :span="3">register date</el-col>
      <el-col :span="8">
        <el-date-picker
          v-model="query.date"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="queryAction">search</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="registered" label="registered date" width="150">
      </el-table-column>
      <el-table-column prop="name" label="name" width="160"> </el-table-column>
      <el-table-column prop="address" label="address"> </el-table-column>
      <el-table-column prop="gender" label="gender" width="100">
      </el-table-column>
      <el-table-column prop="email" label="email"> </el-table-column>
      <el-table-column label="action" width="200">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="primary" size="small"
            >查看</el-button
          >
          <el-button type="primary" plain size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      @current-change="fetchTableData"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Query",
  props: {},
  data() {
    return {
      query: {
        name: "",
        date: "",
        gender: "",
      },
      tableData: [],
    };
  },
  created() {
    this.fetchTableData().then((r) => {
      this.tableData = r;
    });
  },
  mounted() {},
  methods: {
    handleClick(row) {
      console.log(row);
    },
    fetchTableData() {
      return fetch("./data/query.json").then((r) => {
        return r.json();
      });
    },
    queryAction() {
      // 此处逻辑需要服务端自己实现，这边仅作示例，可能不正确
      this.fetchTableData().then((r) => {
        this.tableData = r.filter((item) => {
          if (this.query.date) {
            return (
              new Date(item.registered).getTime() >=
                new Date(this.query.date[0]).getTime() &&
              new Date(item.registered).getTime() <=
                new Date(this.query.date[1]).getTime() &&
              item.name.indexOf(this.query.name) > -1 &&
              item.gender.indexOf(this.query.gender) > -1
            );
          } else {
            return (
              item.name.indexOf(this.query.name) > -1 &&
              item.gender.indexOf(this.query.gender) > -1
            );
          }
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 16px;
  .label {
    line-height: 40px;
    text-align: right;
  }
}
</style>

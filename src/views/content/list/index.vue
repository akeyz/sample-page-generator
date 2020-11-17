<template>
  <div>
    <h2>列表</h2>
    <el-button
      @click="handleNewClick()"
      type="primary"
      size="small"
      style="margin-bottom: 20px"
      >新建</el-button
    >
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="province" label="省份" width="250">
      </el-table-column>
      <el-table-column prop="city" label="市区" width="200"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click="handleViewClick(scope.row)"
            type="primary"
            size="small"
            >查看</el-button
          >
          <el-button
            @click="handleEditClick(scope.row)"
            type="primary"
            plain
            size="small"
            >编辑</el-button
          >
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

    <el-dialog :visible.sync="viewNew">
      <ContentNew />
    </el-dialog>

    <el-dialog :visible.sync="viewDetail">
      <ContentDetail :id="selectedId" />
    </el-dialog>

    <el-dialog :visible.sync="editDetail">
      <ContentEdit :id="selectedId" />
    </el-dialog>
  </div>
</template>

<script>
import ContentNew from "../new/index";
import ContentDetail from "../detail/index";
import ContentEdit from "../edit/index";

export default {
  name: "ContentList",
  components: {
    ContentNew,
    ContentDetail,
    ContentEdit,
  },
  props: {},
  data() {
    return {
      selectedId: null,
      viewNew: false,
      viewDetail: false,
      editDetail: false,
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
    handleNewClick() {
      this.viewNew = true;
    },
    handleViewClick(row) {
      this.selectedId = row.zip;

      this.viewDetail = true;
    },
    handleEditClick(row) {
      this.selectedId = row.zip;

      this.editDetail = true;
    },
    fetchTableData() {
      return fetch("./data/list.json").then((r) => {
        return r.json();
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>

<template>
    <div>
        <h2>编辑</h2>
        <template v-if="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="上海" value="sh"></el-option>
                        <el-option label="背景" value="bj"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                    <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" value-format="yyyy-MM-dd"
                            style="width: 100%;">
                        </el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-time-picker placeholder="选择时间" v-model="form.date2" value-format="HH:mm:ss"
                            style="width: 100%;"></el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox :label="1" name="type">美食/餐厅线上活动</el-checkbox>
                        <el-checkbox :label="2" name="type">地推活动</el-checkbox>
                        <el-checkbox :label="3" name="type">线下主题活动</el-checkbox>
                        <el-checkbox :label="4" name="type">单纯品牌曝光</el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                        <el-radio :label="1">线上品牌商赞助</el-radio>
                        <el-radio :label="2">线下场地免费</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                    <el-input type="textarea" v-model="form.desc" :rows="16"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">保存</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Edit',
        props: {},
        data() {
            return {
                form: null,
            };
        },
        created() {
            this.fetchDetailData();
        },
        mounted() { },
        methods: {
            onSubmit() {
                console.log(this.form);
            },
            fetchDetailData() {
                fetch("./data/detail.json")
                    .then((r) => {
                        return r.json();
                    })
                    .then((r) => {
                        this.form = r;
                    });
            },
        },
    };
</script>

<style lang="less" scoped>

</style>

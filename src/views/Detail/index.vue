<template>
    <div>
        <h2>详情</h2>
        <template v-if="form">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    {{ form.name }}
                </el-form-item>
                <el-form-item label="活动区域">
                    {{ form.region }}
                </el-form-item>
                <el-form-item label="活动时间">
                    {{ form.date1 }} - {{ form.date2 }}
                </el-form-item>
                <el-form-item label="即时配送">
                    {{ form.delivery }}
                </el-form-item>
                <el-form-item label="活动性质">
                    {{ form.type }}
                </el-form-item>
                <el-form-item label="特殊资源">
                    {{ form.resource }}
                </el-form-item>
                <el-form-item label="活动形式">
                    {{ form.desc }}
                </el-form-item>
            </el-form>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'Detail',
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

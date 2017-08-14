<template>
    <div class="content mt40">
        <div class="newsList">
            <ul>
                <li v-for="(item,index) in arr" :key="index">
                    <a href="javascript:;">
                        <h2>{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.mt40 {
    margin-top: 60px;
}
</style>
<script>
export default {
    data: function () {
        return {
            arr: []
        }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.$http.get("/src/data/follow.data").then(function (res) {
                this.arr = res.data;
            }.bind(this)).catch(function (e) {
                console.log(e)
            });
        }
    }
}
</script>


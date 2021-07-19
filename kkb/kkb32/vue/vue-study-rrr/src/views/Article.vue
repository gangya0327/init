<template>
  <div class="list">
    <div class="item" v-for="(item, index) in 15" :key="index">
      <div class="content">
        <div class="info">
          <div class="title">标题</div>
          <div class="time">2021-07-15</div>
        </div>
        <div class="more">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 830px;
  margin: 0 auto;
}

.item {
  width: 150px;
  height: 242px;
  background-size: cover;
  background-position: center;
  background-image: url('../assets/eileen.jpg');
  margin: 10px 8px;
  border-radius: 4px;
  position: relative;
}

.content {
  position: absolute;
  bottom: 15px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  text-align: center;
  margin: 0 5%;
}

.info {
  text-align: left;
}

.title{

}

.time {
  color:#ccc;
  font-size: 12px;
}

.more {
  background: #f36f01;
  border-radius: 10px;
  padding: 1px 6px;
  font-size: 12px;
}
</style>
<template>
  <div class="camera-container">
    <h3>Camera</h3>
    <div v-if="camera_info">
      <table style="width:100%">
        <tr v-for="(value, name) in camera_info" v-bind:key="name">
          <td>{{name}}</td>
          <td>{{value}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p class="no-info">Camera info not found.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CameraInfo',
  props: ['camera_info'],
  created() {
    console.log(this.camera_info);
  }
}
</script>
<style scoped>
.no-info{
  color: red;
}
.camera-container{
  min-height: 20px;
  padding: 19px;
  margin: 20px;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 5%);
}
</style>

<template>
  <div class="exif-container">
    <h3>EXIF</h3>
    <div v-if="exif_info">
      <table style="width:100%">
        <tr v-for="(value, name) in exif_info" v-bind:key="name">
          <td>{{name}}</td>
          <td>{{value}}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p class="no-info">Exif info not found.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExifInfo',
  props: ['exif_info'],
  created() {
    console.log(this.exif_info);
  }
}
</script>
<style scoped>
.no-info{
  color: red;
}
.exif-container{
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

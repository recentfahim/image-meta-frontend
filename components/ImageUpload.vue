<template>
  <div>
    <div class="image-container">
      <div class="helper"></div>
      <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop" v-bind:class="{height: !image}">
        <div class="helper"></div>
        <label v-if="!image" class="btn display-inline">
          SELECT OR DROP AN IMAGE
          <input type="file" name="image" @change="onChange">
        </label>
        <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
            <img :src="image" alt="" class="img" />
            <br>
            <br>
            <button class="btn remove-btn" @click="removeFile">REMOVE</button>
          </div>
        </label>
      </div>
    </div>
    <div class="picture-url-container">
      <h3>or enter the picture URL</h3>
      <div>
        <input type="text" v-model="photo_url" placeholder="Insert Photo URL"><button type="button" @click="onPictureURLClick" class="ml-2">Click Me!</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'ImageUpload',
  data() {
    return{
      image: null,
      exif_info: null,
      photo_url: null
    }
  },
  methods: {
    onDrop: function(e) {
      e.stopPropagation();
      e.preventDefault();
      var files = e.dataTransfer.files;
      console.log(files)
      this.createFile(files[0]);
    },

    onChange(e) {
      var files = e.target.files;
      console.log(files[0]);
      this.createFile(files[0]);
    },

    onPictureURLClick(){
      this.image = this.photo_url

      let formData = new FormData();

      if (this.photo_url){
        formData.append('image_url', this.photo_url);
        axios.post(process.env.baseUrl + '/api/image-meta/', formData).then((res) => {
          //this.$emit("handleUpload", res.data.result);
        })
      }
    },

    createFile(file) {
      if (!file.type.match('image.*')) {
        alert('Select an image');
        return;
      }
      var img = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = function(e) {
        vm.image = e.target.result;
        this.image = e.target.result;
      }
      reader.readAsDataURL(file);

      let formData = new FormData();
      formData.append('image', file);
      axios.post(process.env.baseUrl + '/api/image-meta/', formData).then((res) => {
          this.$emit("handleUpload", res.data.result);
        })

    },

    removeFile() {
      this.image = null;
      this.$emit("handleUpload", null);
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Arial';
  font-size: 12px;
}

*,
*:after,
*:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
}

html, body {
	height: 100%;
  text-align: center;
}

.btn {
  background-color: #d3394c;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  padding: 15px 35px;
  position: relative;
}

.btn:hover {
  background-color: #722040;
}
.remove-btn{
  margin-bottom: 20px;
}

input[type="file"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.align-center {
  text-align: center;
}

.helper {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  width: 0;
}

.hidden {
  display: none !important;
}

.hidden.image {
  display: inline-block !important;
}

.display-inline {
  display: inline-block;
  vertical-align: middle;
}

.img {
  border: 1px solid #f6f6f6;
  display: inline-block;
  height: auto;
  max-height: 365px;
  max-width: 80%;
  width: auto;
  margin-top: 20px;
}

.drop {
  background-color: #f2f2f2;
  border: 4px dashed #ccc;
  background-color: #f6f6f6;
  border-radius: 2px;
  max-height: 400px;
  max-width: 600px;
  width: 100%;
}

.image-container{
  text-align: center;
  margin-top: 20px;
}
.height{
  height: 400px;
}

.picture-url-container{
  margin-top: 20px;
  text-align: center;
}
</style>

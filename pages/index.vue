<template>
    <div>
      <nav-bar />
      <image-upload v-on:handleUpload="handleUpload"/>
      <div class="text-center mt-4" v-if="this.$store.state.loading">
         <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
      </div>
      <camera-info v-if="this.$store.state.info_flag" :camera_info="camera_info"/>
      <author-copyright-info v-if="this.$store.state.info_flag" :author_info="iptc_data"/>
      <exif-info v-if="this.$store.state.info_flag" :exif_info="exif_data"/>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ImageUpload from '../components/ImageUpload.vue'
import CameraInfo from '../components/CameraInfo.vue'
import AuthorCopyrightInfo from '../components/AuthorCopyrightInfo.vue'
import ExifInfo from '../components/ExifInfo.vue'

export default {
  name: 'Home',
  data () {
    return {
      exif_data: null,
      iptc_data: null,
      camera_info: null
    }
  },
  components: {
    NavBar,
    ImageUpload,
    CameraInfo,
    AuthorCopyrightInfo,
    ExifInfo
  },
  methods:
  {
    handleUpload(value){
      if (value){
        this.exif_data = value.exif_data
        this.iptc_data = value.iptc_data
        this.camera_info = value.camera_info
      }
      else{
        this.exif_data = null
        this.iptc_data = null
        this.camera_info = null
      }
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<template>
    <div>
      <nav-bar />
      <image-upload />
      <camera-info :camera_info="'test'"/>
      <author-copyright-info />
      <exif-info />
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
  components: {
    NavBar,
    ImageUpload,
    CameraInfo,
    AuthorCopyrightInfo,
    ExifInfo
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

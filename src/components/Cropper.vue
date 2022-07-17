<template>
  <div id="app">
    <div
      id="video-container"
      :style="{ width: `${naturalWidth}px`, height: `${naturalHeight}px` }"
    >
      <video
        :src="videoSrc"
        autoplay
        loop
        muted
        :style="{
          width: `${width}px`,
          height: `${height}px`,
          top: `${top}px`,
          left: `${left}px`,
        }"
      ></video>
    </div>

    <div id="crop-container">
      <canvas
        ref="cropCanvas"
        :width="naturalWidth"
        :height="naturalHeight"
      ></canvas>
    </div>

    <label for="zoom-slider">Zoom</label>
    <input
      id="zoom-slider"
      type="range"
      min="100"
      max="500"
      v-model="zoomValue"
    />
  </div>
</template>

<script>
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "App",
  data() {
    return {
      videoSrc:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      naturalWidth: 1000,
      naturalHeight: 562.5,
      width: 1000,
      height: 562.5,
      top: 0,
      left: 0,
      zoomValue: 100,
    };
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.cropCanvas, {
      background: false,
      modal: false,
      highlight: false,
      viewMode: 1,
    });
  },
  watch: {
    zoomValue(newVal) {
      const cropBoxData = this.cropper.getCropBoxData();
      this.cropper.zoomTo(newVal / 100, {
        x: cropBoxData.left + cropBoxData.width / 2,
        y: cropBoxData.top + cropBoxData.height / 2,
      });
      const canvasData = this.cropper.getCanvasData();
      this.width = canvasData.width;
      this.height = canvasData.height;
      this.top = canvasData.top;
      this.left = canvasData.left;
    },
  },
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
}

#app {
  width: 1000px;
  position: relative;
}

#video-container {
  overflow: hidden;
  position: relative;

  video {
    position: absolute;
  }
}

#crop-container {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  canvas {
    display: block;
    max-width: 100%;
  }
}

.cropper-face {
  background-color: transparent;
}

.cropper-crop-box {
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
}
</style>
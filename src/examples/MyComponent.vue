<template>
  <div v-intersect="{topOffset, bottomOffset, once}"
       class="box"
       :style="{backgroundColor: '#e6e6e6'}">
    <div class="top-info">
      <div>
        <h4>Is Intersecting: </h4>
        <h5>{{isIntersecting}}</h5>
      </div>
      <h4>Ratio: </h4>
      <h5>{{intersectionRatio}}</h5>
      <div>
        <h4>Is Above: </h4>
        <h5>{{isAbove}}</h5>
      </div>
      <div>
        <h4>Is Below: </h4>
        <h5>{{isBelow}}</h5>
      </div>
    </div>
    <div class="bottom-info">
      <div>
        <h4>Is Intersecting: </h4>
        <h5>{{isIntersecting}}</h5>
      </div>
      <h4>Ratio: </h4>
      <h5>{{intersectionRatio}}</h5>
      <div>
        <h4>Is Above: </h4>
        <h5>{{isAbove}}</h5>
      </div>
      <div>
        <h4>Is Below: </h4>
        <h5>{{isBelow}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      once: false,
      isIntersecting: null,
      intersectionRatio: null,
      isAbove: null,
      isBelow: null,
      topOffset: '-20%',
      bottomOffset: '-20%'
    }
  }
}
</script>

<style>
.box {
  height: 59vh;
  width: 100%;
  position: relative;
  padding: 30px;
}

.top-info {
  width: 100%;
  position: absolute;
  top: 30px;
}

.bottom-info {
  width: 100%;
  position: absolute;
  bottom: 30px;
}

.trigger {
  position: fixed;
  width: 100%;
  background: white;
  height: 3px;
}

.trigger.top {
  top: 20%;
}
.trigger.bottom {
  bottom: 20%;
}
</style>

<template>
  <div v-intersect="{topOffset, bottomOffset, repeat}">
    <!-- <slot :vueIntersect="{isIntersecting, isAbove, isBelow, isPartiallyAbove, isPartiallyBelow, intersectionRatio}" /> -->
  </div>
</template>

<script>
import VueIntersectMixin from '../lib/Mixin'

export default {
  name: 'VueIntersect',
  mixins: [VueIntersectMixin],
}
</script>


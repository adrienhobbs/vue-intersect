const VueIntersectMixin = {
  name: 'VueIntersectMixin',
  props: {
    topOffset: {
      type: String,
      default: '0%'
    },
    bottomOffset: {
      type: String,
      default: '0%'
    },
    repeat: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isIntersecting: null,
      intersectionRatio: null,
      isAbove: null,
      isBelow: null,
      isPartiallyAbove: null,
      isPartiallyBelow: null,
      rect: null
    }
  }
}

export default VueIntersectMixin

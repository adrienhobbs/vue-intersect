const VueIntersectMixin = {
  name: 'VueIntersectMixin',
  data() {
    return {
      isIntersecting: null,
      intersectionRatio: null,
      isAbove: null,
      isBelow: null,
      isPartiallyAbove: null,
      isPartiallyBelow: null
    }
  }
}

export default VueIntersectMixin

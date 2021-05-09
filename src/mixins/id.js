export default {
  data() {
    return {
      __id: null
    }
  },
  beforeMount() {
    this.$nextTick(() => {
      const componentName = this._name
        .replace(/[<>]/g, '')
        .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        .replace(/^-/, '')

      this.$data.__id = `${componentName}-${this._uid}`
    })
  }
}

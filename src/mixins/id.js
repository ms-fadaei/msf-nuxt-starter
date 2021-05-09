export default {
  data() {
    return {
      m__id: null
    }
  },
  created() {
    // Create ID in Server-Side
    if (this.$isServer) {
      const componentName = this.$options._componentTag
        .replace(/[<>]/g, '')
        .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
        .replace(/^-/, '')

      this.m__id = `${componentName}-${this._uid}`
    }
  },
  mounted() {
    // Create ID in Client-Side
    const componentName = this._name
      .replace(/[<>]/g, '')
      .replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
      .replace(/^-/, '')

    this.m__id = `${componentName}-${this._uid}`
  }
}

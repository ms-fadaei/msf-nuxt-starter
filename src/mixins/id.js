export default {
  data() {
    return {
      componentId: null
    }
  },
  beforeMount() {
    const componentName = this._name.replace(/[<>]/g, '').toLowerCase()
    this.componentId = componentName + '-' + this._uid
  }
}

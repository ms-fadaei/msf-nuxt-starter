export default {
  props: {
    layout: {
      type: String,
      required: false,
      default: ''
    },
    theme: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    layoutPrefix() {
      const layout = this.layout
      const theme = this.theme

      return (layout ? `-${layout} ` : '') + (theme ? ` --${theme}` : '')
    }
  }
}

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
    m__layoutClassName() {
      const layout = this.layout
      const theme = this.theme

      return (layout ? `-${layout} ` : '') + (theme ? ` --theme-${theme}` : '')
    }
  }
}

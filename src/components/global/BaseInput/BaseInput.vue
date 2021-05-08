<template>
  <div class="base-input">
    <label :for="id" class="base-input__label"></label>
    <input
      :id="id"
      :value="value"
      type="text"
      class="base-input__input bg-gray-100 border-2 border-gray-500"
      @input="syncValue"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: [String, null],
      required: false,
      default: null
    }
  },
  emits: ['update:value'],
  data() {
    return {
      id: null
    }
  },
  beforeMount() {
    this.id = 'base-input-' + this._uid
  },
  methods: {
    syncValue(e) {
      this.$emit('update:value', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input__input {
  @apply rounded;

  &:hover {
    @apply rounded-md bg-gray-400;
  }
}
</style>

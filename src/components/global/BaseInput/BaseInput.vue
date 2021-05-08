<template>
  <div :class="[`base-input${layoutPrefix}`]">
    <label
      :for="componentId"
      :class="[`base-input__label${layoutPrefix}`]"
    ></label>
    <input
      :id="componentId"
      :value="value"
      type="text"
      :class="[`base-input__input${layoutPrefix}`]"
      @input="syncValue"
    />
    <slot />
  </div>
</template>

<script>
import layout from '@/mixins/layout'
import id from '@/mixins/id'

export default {
  name: 'BaseInput',
  mixins: [layout, id],
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
  methods: {
    syncValue(e) {
      this.$emit('update:value', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input__input {
  @apply w-full rounded bg-gray-100 border-2 border-gray-500 p-1;

  &.--dark {
    @apply bg-gray-800 text-white;
  }
}
</style>

<template>
    <button class="Button">
        {{name}}
    </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    name: String
  }
}
</script>
<style scoped>

</style>
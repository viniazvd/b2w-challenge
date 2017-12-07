<template>
  <div>
    <span class="display-1">Page: {{ numPage }}</span>
  </div>
</template>

<script>
export default {
  name: 'NumPage',

  props: ['numPage']
}
</script>

<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p v-text="user.age"></p>
  </div>
</template>

<script>
export default {
  name: 'HasProps',
  props: {
    user: {
      type: Object,
      required: true
    },
  }
}
</script>

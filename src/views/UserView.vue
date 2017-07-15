<template>
  <div>
    <pre>
      {{user}}
    </pre>
  </div>
</template>

<script>

export default {
  name: 'user-view',

  computed: {
    user () {
      return [this.$store.state.items, this.$store.state.users]
    }
  },

  asyncData ({ store }) {
    return store.dispatch('FETCH_USER_DATA', "dummy")
  }
}
</script>
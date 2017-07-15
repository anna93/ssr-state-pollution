<template>
  <div>
    <pre>
      {{item}}
    </pre>
  </div>
</template>

<script>

export default {
  name: 'item-view',

  computed: {
    item () {
      return [this.$store.state.items, this.$store.state.users]
    }
  },

  // We only fetch the item itself before entering the view, because
  // it might take a long time to load threads with hundreds of comments
  // due to how the HN Firebase API works.
  asyncData ({ store }) {
    return store.dispatch('FETCH_ITEM_DATA', "dummy")
  }
}
</script>
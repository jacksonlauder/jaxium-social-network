<template>
  <v-card
    flat
    tile
    class="mx-auto"
    max-width="500"
  >
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
        />
        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title" />
            <v-list-item-subtitle v-html="item.subtitle" />
          </v-list-item-content>

          <v-btn
            fab
            top
            left
            icon
            @click.prevent="toMessageEdit"
          >
            <v-icon large color="blue-grey darken-2">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'wanderingbiscuits',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'giletcomposter',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'bouquetcoral',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'inborngroovy',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
            { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'attentionchapter',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
    ]
  }),
  methods: {
    toMessageEdit: function() {
      this.$router.push({ name: 'message-edit', params: { username: this.$store.state.username }})
    }
  }
}
</script>

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
            color="blue-grey darken-3"
            to="/:username/messages/:id"
          >
            <v-icon large>
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
        title: 'Account Name',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Account Name',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Account Name',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Account Name',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
            { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Account Name',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, incidunt!'
      },
    ]
  })
}
</script>

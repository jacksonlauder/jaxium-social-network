<template>
  <v-card
    flat
    tile
    class="mx-auto"
    max-width="500"
  >
    <v-list two-line>
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
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-menu
            right
            rounded
            offset-x
          >
            <template v-slot:activator="{ on }">
              <v-btn
                absolute
                top
                right
                icon
                color="blue-grey darken-2"
                v-on="on"
              >
                <v-icon large>
                  mdi-dots-horizontal
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                link
              >
                Clear Notification
              </v-list-item>
              <v-list-item
                link
              >
                View Post
              </v-list-item>
              <v-list-item
                link
              >
                View Profile
              </v-list-item>
            </v-list>
          </v-menu>
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
        title: 'bouquetcoral',
        subtitle: 'Accepted follow request.'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'wanderingbiscuits',
        subtitle: 'Asked to follow you.'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'giletcomposter',
        subtitle: 'Commented on your post.'
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'inborngroovy',
        subtitle: 'Liked your post.'
      },
            { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'attentionchapter',
        subtitle: 'Accepted follow request.'
      },
    ]
  })
}
</script>

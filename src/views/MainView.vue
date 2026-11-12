<template>
  <section class="postsArea">
    <PostComponent v-for="postId in postIds" :key="postId" :id="postId" />
  </section>
</template>
<script>

import PostComponent from '@/components/PostComponent.vue';

export default {
  name: 'MainView',
  components: { PostComponent },
  computed: {
    postIds() {
      return this.$store.state.posts.map(post => post.id);
    },
  },
};
</script>

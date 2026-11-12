<template>
  <section class="mainview">
    <aside class="leftbar">
  
    </aside>

    <section class="postsArea">
      <PostComponent v-for="postId in postIds" :key="postId" :id="postId" />
    </section>

    <aside class="rightbar">
  
    </aside>

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

<style scoped>
    .mainview {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      overflow: hidden; /* posts area and bars go under the footer and header to apply scrolling*/ 
      gap: 20px; /*Gap between the bars and posts area*/   
    }

    .leftbar, .rightbar {
      background-color: #b5d9e7;
      width: 20%;
      border-radius: 12px;
    }

    .postsArea {
      flex: 1; /*Fills the entire width of the page*/
      overflow-y: auto; /*Allows scrolling only in the posts area so the header and bars are always in place*/
      display: flex;
      flex-direction: column;
      gap: 20px; /*Gap between posts*/
      padding-right: 8px; /* So the scrollbar isn't too close to the posts*/
    }
    /* Posts scrollbar */
    .postsArea::-webkit-scrollbar {
      width: 10px;
    }

    .postsArea::-webkit-scrollbar-track {
      background-color: #eeeeee;
      border-radius: 10px;
    }

    .postsArea::-webkit-scrollbar-thumb {
      background-color: #b5d9e7;
      border-radius: 10px;
    }

    .postsArea::-webkit-scrollbar-thumb:hover {
      background-color: #b5d9e7;
    }
</style>

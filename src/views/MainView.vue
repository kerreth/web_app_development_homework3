<template>
  <section class="mainPage">
  <HeaderComponent />
  <section class="mainview">
    <aside class="leftbar">
  
    </aside>

    <section class="postsArea">
      <PostComponent v-for="postId in postIds" :key="postId" :id="postId" />
    </section>

    <aside class="rightbar">
  
    </aside>

  </section>
  <section class="resetButtonSection">
    <button class="resetButton" @click="resetLikes()">Reset Likes</button>
  </section>
  <FooterComponent />
  </section>
</template>

<script>

import PostComponent from '@/components/PostComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'; 
import FooterComponent from '@/components/Footer.vue'; 

export default {
  name: 'MainView',
  components: { PostComponent, HeaderComponent, FooterComponent },
  computed: {
    postIds() {
      return this.$store.state.posts.map(post => post.id);
    },
  },

  methods: {
      resetLikes() {
        this.$store.dispatch("ResetLikesAct");
      }
  }
};
</script>

<style scoped>

    .mainPage {
      height: 150vh;
      display: flex;
      flex-direction: column;
    }

    .mainview {
      flex: 1;
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      overflow: hidden; /* posts area and bars go under the footer and header to apply scrolling*/ 
      gap: 20px; /*Gap between the bars and posts area*/   
    }

    .leftbar, .rightbar {
      background-color: #b5d9e7;
      flex: 1;
      border-radius: 12px;
    }

    .postsArea {
      flex: 1 1 1000px; /*Fills the entire width of the page*/
      max-width: 1000px;
      overflow-y: auto; /*Allows scrolling only in the posts area so the header and bars are always in place*/
      display: flex;
      flex-direction: column;
      gap: 20px; /*Gap between posts*/
      padding-right: 8px; /* So the scrollbar isn't too close to the posts*/
    
    }

    .resetButton {
      background-color: #274075;
      color: white;
      padding: 12px 30px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 12px;
      cursor: pointer;
    }

    .resetButtonSection {
      display: flex;
      justify-content: center;
      margin-top: 10px;
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

    @media (max-width: 900px) {
      .leftbar, .rightbar {
         width: 10%;
         min-width: 50px;
    }
}


    @media (max-width: 450px) {
  .leftbar, .rightbar {
    display: none;
  }

  .mainview {
    gap: 0;
  }

  .postsArea {
    padding: 0 10px;
  }
}
  
</style>

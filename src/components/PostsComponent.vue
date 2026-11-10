<template>
  <section class="postsArea">
    <article class="post" v-for="post in posts" :key="post.id">
      <header class="post-header">
        <img
          :src="getImageUrl(post.profile_picture)"
          alt="Profile picture"
          class="post-avatar"
        />
        <span class="post-date">{{ post.creation_time }}</span>
      </header>
      <article class="post-body">
        <img
          v-if="post.post_attachment"
          :src="getImageUrl(post.post_attachment)"
          alt="Post attachment"
          class="post-image"
        />
        <p>{{ post.post_text }}</p>
      </article>
      <footer class="post-footer">
        <img src="@/assets/likebutton.png" alt="Like" />
      </footer>
    </article>
  </section>
</template>

<script>
export default {
  name: "PostsComponent",
  data: function () {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  methods: {
    getImageUrl(name) {
      return require(`@/assets/${name}`);
    },
  },
};
</script>

<style scoped>
* {
  font-family: Calibri, sans-serif;
}
html,
body {
  height: 100%; /*Body takes up the whole height of the viewport*/
}
p {
  color: #34495e;
}
header {
  background-color: #899b7a;
  border-radius: 12px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  /*Header stays above every element*/
}
.postsArea {
  flex: 1;
  /*Fills the entire width of the page*/
  overflow-y: auto;
  /*Allows scrolling only in the posts area so the header and bars are always in place*/
  display: flex;
  flex-direction: column;
  gap: 20px;
  /*Gap between posts*/
  padding-right: 8px;
  /* So the scrollbar isn't too close to the posts*/
}
.post {
  background-color: #a9b89d;
  border-radius: 12px;
  padding: 15px;
  flex-direction: column;
}
.post-header {
  background-color: #a9b89d;
}

.post-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.post-body {
  padding: 10px;
}

.post-date {
  font-size: 0.8em;
  color: #34495e;
}

.post-image {
  width: 100%;
  border-radius: 12px;
}

.post-footer img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

article > p {
  font-size: 1.5em;
  margin: 2px 0;
}
/* Posts scrollbar */
.postsArea::-webkit-scrollbar {
  width: 10px;
}

.postsArea::-webkit-scrollbar-track {
  background-color: #edf0e9;
  border-radius: 10px;
}

.postsArea::-webkit-scrollbar-thumb {
  background-color: #899b7a;
  border-radius: 10px;
}

.postsArea::-webkit-scrollbar-thumb:hover {
  background-color: #536747;
}
</style>
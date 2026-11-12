import { createStore } from 'vuex';

export default createStore({
  strict: true,
  state: {
    posts: [
      { "id": 10, "creation_time": "Oct 10, 2026", "profile_picture": "nature.png", "post_attachment": "deltamaja.png", "post_text": "Delta study building", "likes": 0 },
      { "id": 9, "creation_time": "Oct 8, 2026", "profile_picture": "profile-icon.jpg", "post_attachment": null, "post_text": "This is my first post here", "likes": 0 },
      { "id": 8, "creation_time": "Sept 2, 2026", "profile_picture": "stickfig.png", "post_attachment": null, "post_text": "What was the deadline for registering for courses?", "likes": 0 },
      { "id": 7, "creation_time": "Aug 27, 2026", "profile_picture": "antiai.png", "post_attachment": "ai.png", "post_text": "Me and my friend are ready for the semester", "likes": 0 },
      { "id": 6, "creation_time": "May 20, 2026", "profile_picture": "hacker.png", "post_attachment": "badcode.png", "post_text": "Guys will this code run? Exam rn need answer quick", "likes": 0 },
      { "id": 5, "creation_time": "June 3, 2019", "profile_picture": "jslogo.png", "post_attachment": null, "post_text": "Guys who is JSON?", "likes": 0 },
      { "id": 4, "creation_time": "Jan 19, 2019", "profile_picture": "nature.png", "post_attachment": null, "post_text": "I hope this is not saved in a JSON file.", "likes": 0 },
      { "id": 3, "creation_time": "Aug 4, 2018", "profile_picture": "hacker.png", "post_attachment": null, "post_text": "How do I upload pictures? Some guy in 1960 managed to.", "likes": 0 },
      { "id": 2, "creation_time": "Jan 1, 2015", "profile_picture": "oldman.jpg", "post_attachment": null, "post_text": "Am I the only one using this website?", "likes": 0 },
      { "id": 1, "creation_time": "Sept 2, 1960", "profile_picture": "oldman.jpg", "post_attachment": "oldcomp.png", "post_text": "Just got my first 5MB hard drive! EXCITED!", "likes": 0 }

    ]
  },
  getters: {
  },
  mutations: {
    ResetLikes: state => {
      state.posts.forEach(post => {
        post.likes = 0;
      })
    },

    AddLike: (state, postID) => {
      const post = state.posts.find(p => p.id === postID);
      if (post) post.likes++;
    }
  },
  actions: {
    ResetLikesAct: act => {
      act.commit("ResetLikes");
    },

    AddLikeAct: (act, postID) => {
      act.commit("AddLike", postID)
    }
  },
  modules: {
  },
});

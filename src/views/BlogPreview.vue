<template>
  <div class="post-view">
    <div class="container quillWrapper">
      <h2>{{ this.blogTitle }}</h2>
      <img class="cover" :src="blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="blogHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style>
.post-view {
  min-height: 100%;
}
.post-view .container {
  max-width: 1000px;
  padding: 60px 25px;
}
.post-view .ql-editor {
  padding: 0;
}
.post-view h2 {
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}
.cover {
  width: 100%;
}
.post-view img {
  margin-bottom: 32px;
}
</style>
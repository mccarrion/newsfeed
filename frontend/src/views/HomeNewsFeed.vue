<template>
  <div class="home-newsfeed">
    <RwvArticleList type="all" />
  </div>
</template>
<script>
  import RwvArticleList from '@/components/ArticleList'

  export default {
    name: 'rwv-home-newsfeed',
    components: {
      RwvArticleList
    }
  }
</script>

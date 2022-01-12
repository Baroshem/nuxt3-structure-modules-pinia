<template>
  <section>
    <p>Blog post with the id: {{ currentRoute.params.id }}</p>
    <BlogPost :blog="blog"/>
    <span>Current value from blogStore: {{ blogStore.value }}</span>
  </section>
</template>

<script setup lang="ts">
import { useBlog } from '../../composables/useBlog';
import BlogPost from '../../components/BlogPost.vue';
import { useBlogStore } from '../../store/store';


const { currentRoute } = useRouter()
const { blog } = useBlog()
const blogStore = useBlogStore()
</script>
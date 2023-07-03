<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>

  <div v-if="education" class="education">
    <EducationComp :education="education" />
  </div>
</template>


<script>
import EducationComp from '@/components/EducationComp.vue';

export default{
  components: { EducationComp },

  computed: {
    education() {
      return this.$store.state.education
    }
  },

  mounted() {
    return this.$store.dispatch("getEducation")
  },
}
</script>
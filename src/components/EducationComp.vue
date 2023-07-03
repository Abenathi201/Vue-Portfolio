<template>
    <!-- <router-link> -->
        <div class="education">

            <h3><i class="fa fa-graduation-cap">Education</i></h3>

            <ul>
              <li v-for="object in education" :key="object.id">
                {{ education.title }}
                <small>{{ education.place }}</small>
                <small>{{ education.year }}</small>
              </li>
            </ul>
        </div>
    <!-- </router-link> -->
</template>

<script>
export default{
    props: ["education"]
}
</script>
import { createStore } from 'vuex'

export default createStore({
  state: {
    education: null,
  },


  mutations: {
    setEducation: (state, education) => {
      state.education = education
    }
  },


  actions: {
    async getEducation(context) {
      try {
        const response = await fetch('https://abenathi201.github.io/data/education.json')
        const education = await response.json()
        context.commit('setEducation', education)
      } catch (error) {
        context.commit('educationError', error.message)
      }
    }
  },
})

export const state = () => ({
  sidebar: false,
  noti: {
    message: '',
    type: 'blue',
    show: false
  }
})

export const getters = {
  noti: state => state.noti
}

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setNoti (state, payload) {
    state.noti.message = payload.message
    state.noti.type = payload.type
    state.noti.show = true
  }
}

export const actions = {
  noti ({ commit }, payload) {
    commit('setNoti', payload)
  }
}

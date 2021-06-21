export const state = () => ({
  loading: false,
  info_flag: false
})

export const mutations = {
  changeLoadingState(state, data){
    state.loading = data
  },
  changeInfoFlag(state, data){
    state.info_flag = data
  }
}

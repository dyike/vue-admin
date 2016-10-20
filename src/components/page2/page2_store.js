import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 每个 Vuex实例是单独的 state 树
const state = {
    count: 0
}

// 当执行程序时 state 突然发生变化之行为，称为 mutations
// 每一个 mutation管理者，第一个参数为 完整的state树,  其次是附加的装载参数
// mutations 须是同步的，并且可以通过插件或调试目的记录
const mutations = {
    addone (state) {
        state.count++
    },
    subtractone (state) {
        state.count--
    }
}

// actions 引起副作用和异步操作函数
// action 不改变状态，只提交(commit) mutation。
// action 可以包含任意异步操作。
const actions = {
    addone: ({
        commit
    }) => commit('addone'),

    subtractone: ({
        commit
    }) => commit('subtractone'),

    addoneIfOdd({
        commit,
        state
    }) {
        if ((state.count + 1) % 2 === 0) {
            commit('addone')
        }
    },
    addonAsync({
        commit
    }) {
        return new Promise((resolve, reject) => {
            setTimeOut(() => {
                commit('addone')
                resolve()
            }, 1000)
        })
    }
}

const getters = {
    evenorodd: state => state.count % 2 === 0 ? '偶数' : '奇数'
}

// Vuex 实例依  state, mutations, actions,and getters 组合
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

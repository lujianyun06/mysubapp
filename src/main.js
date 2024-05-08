
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

let instance = null

function render(props = {}) {
    const { container } = props
    // 为了避免根id#app与其他DOM冲突，需要限制查找范围
    console.log(container)
    let appdom = container.querySelector('#app') 
    console.log(appdom)
    instance = createApp(App).use(router).mount(container ? container.querySelector('#app') : '#app')

}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

//--------- 生命周期函数------------//
export async function bootstrap() {
    console.log('[vue] vue app bootstraped')
}
export async function mount(props) {
    console.log('[vue] props from main framework', props)
    render(props)
}
export async function unmount() {
    instance.unmount
    instance.$el.innerHTML = ''
    instance = null
}
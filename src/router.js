// import Vue from 'vue'
import Router from 'vue-router'
import StoriesView from './views/StoriesView.vue'
import ArticleView from './views/ArticleView.vue'
import CommentView from './views/CommentView.vue'
import UserView from './views/UserView.vue'


//web组件
import webComponents from './views/webComponents.vue'


Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

function creatWebComponents(){
    return {
       render (createElement) {
        return createElement(webComponents)
      }
    }
}


export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/webComponents', component: creatWebComponents() },
    { path: '/top', component: createStoriesView('top') },
    { path: '/new', component: createStoriesView('new') },
    { path: '/show', component: createStoriesView('show') },
    { path: '/ask', component: createStoriesView('ask') },
    { path: '/job', component: createStoriesView('job') },
    { path: '/article/:url(.*)?', component: ArticleView },
    { path: '/item/:id(\\d+)', component: CommentView },
    { path: '/user/:id', component: UserView },
    //{ path: '/', redirect: '/top' }
    { path: '/', redirect: '/webComponents' }
  ]
})

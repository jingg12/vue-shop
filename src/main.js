import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import '@/mock/index'
import { createPinia } from 'pinia'
import {
  Swipe,
  SwipeItem,
  Lazyload,
  Search,
  Sticky,
  Image,
  Loading,
  Icon,
  Skeleton,
  Grid,
  GridItem,
  Tab,
  Tabs,
} from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible' //适配rem
import './assets/main.css'

const app = createApp(App)

app
  .use(Lazyload)
  .use(router)
  .use(createPinia())
  .use(Swipe)
  .use(SwipeItem)
  .use(Search)
  .use(Sticky)
  .use(Icon)
  .use(Loading)
  .use(Image)
  .use(Skeleton)
  .use(Grid)
  .use(GridItem)
  .use(Tab)
  .use(Tabs)
  .mount('#app')

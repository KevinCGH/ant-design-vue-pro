import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
import VueHighlightJS from "vue-highlightjs";

import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker,
  Badge,
  Tabs,
  Spin,
  List,
  Avatar,
  Tooltip,
  Tag,
  message
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";
import "highlight.js/styles/github.css";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(Avatar);
Vue.use(Tooltip);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(VueI18n);
Vue.use(VueHighlightJS);
Vue.use(Badge);
Vue.use(Tabs);
Vue.use(Spin);
Vue.use(List);
Vue.use(Tag);
Vue.prototype.$message = message;

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1154049_w87h4oeytph.js" // 在 iconfont.cn 上生成
});

Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

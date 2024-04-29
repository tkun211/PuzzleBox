import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import DefaultTheme from 'vitepress/theme';
import BaseLayout from './BaseLayout.vue';
import './base.less';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    const { app } = ctx;
    app.use(ElementPlus);
  },
  Layout: BaseLayout
};
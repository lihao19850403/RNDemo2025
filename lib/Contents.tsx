import { AppPageModel } from './main/models/AppPageModel.tsx';
/* ---------- 内容页面。 ---------- */
import AppOrigin from './origin/App_origin.tsx';
import HelloWorldApp from './helloworld/App_helloworld.tsx';
import AppCounter from './counter/App_counter.tsx';
import FlexDemo from './flex/App_flex.tsx';
import AppPropState from './propstate/APP_propstate.tsx';
import AppTimeWatch from './timewatch/App_timewatch.tsx';
import AppEvent from './event/App_event.tsx';
import AppHookApi from './hook/APP_hookapi.tsx';
import AppFlatList from './flatlist/App_flatlist.tsx';
import AppStorage from './storage/App_storage.tsx';

/** 所有页面内容。 */
const APP_PAGES: AppPageModel[] = [
  // 欢迎页。
  {
    pageName: 'AppOrigin',
    pageTitle: '欢迎页',
    pageContent: AppOrigin,
  },
  // Hello World。
  {
    pageName: 'HelloWorld',
    pageTitle: 'Hello World',
    pageContent: HelloWorldApp,
  },
  // 计数器。
  {
    pageName: 'AppCounter',
    pageTitle: '计数器',
    pageContent: AppCounter,
  },
  // 弹性盒子布局。
  {
    pageName: 'FlexDemo',
    pageTitle: '弹性盒子布局',
    pageContent: FlexDemo,
  },
  // 状态变量。
  {
    pageName: 'AppPropState',
    pageTitle: '状态变量',
    pageContent: AppPropState,
  },
  // 计时器。
  {
    pageName: 'AppTimeWatch',
    pageTitle: '计时器',
    pageContent: AppTimeWatch,
  },
  // 事件传递。
  {
    pageName: 'AppEvent',
    pageTitle: '事件传递',
    pageContent: AppEvent,
  },
  // HookApi。
  {
    pageName: 'AppHookApi',
    pageTitle: 'HookApi',
    pageContent: AppHookApi,
  },
  // 平坦列表。
  {
    pageName: 'AppFlatList',
    pageTitle: '平坦列表',
    pageContent: AppFlatList,
  },
  // 内置存储。
  {
    pageName: 'AppStorage',
    pageTitle: '内置存储',
    pageContent: AppStorage,
  },
];
export default APP_PAGES;

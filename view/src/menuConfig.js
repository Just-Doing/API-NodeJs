// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '我的工作台',
    path: '/',
  },
  {
    name: '业务办理',
    path: '/business',
  },
  {
    name: '案件查询',
    path: '/query',
  },
  {
    name: '统计分析',
    path: '/analysis',
  },
  {
    name: '系统设置',
    path: '/system',
  },
];

// ICON 配置： https://ice.alibaba-inc.com/component/foundationsymbol
const asideMenuConfig = [
  {
    name: '工作台',
    path: '/dashboard',
    icon: 'home2',
  },
  {
    name: '拆预收案',
    path: '/dismantling',
    icon: 'cascades',
  },
  {
    name: '案款账号分配',
    path: '/allocation',
    icon: 'person',
  },
  {
    name: '当事人自助收案',
    path: '/selfhelp',
    icon: 'exchange',
  },
  {
    name: '在办案件列表',
    path: '/list',
    icon: 'ol-list',
  },
  {
    name: '批量处理',
    path: '/batch',
    icon: 'copy',
  },
  {
    name: '案件录入',
    path: '/new',
    icon: 'copy',
  },
];

const systemMenuConfig = [
  {
    name: '用户管理',
    path: '/system/users',
    icon: 'person',
  },
  {
    name: '角色管理',
    path: '/system/roles',
    icon: 'cascades',
  },
  {
    name: '菜单管理',
    path: '/system/menus',
    icon: 'person',
  },
];

export { headerMenuConfig, asideMenuConfig, systemMenuConfig };

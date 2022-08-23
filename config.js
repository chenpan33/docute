docute.init({
  // 项目根目录里的 README.md
  // home: 'https://github.com/wugenqiang/algorithm-data-structure/blob/master/README.md',
  // true 将会默认使用 `landing.html`，也可以写成 landing: 'landing.html',
  landing: true,
  // 也可以用自定义页面
  landing: '_my-landing.html',
  // 当然 markdown 文件也可以
  landing: 'landing.md',


    // 显示 h2 到 h4 的标题
  tocVisibleDepth: 3,


  nav: [
    {title: '其他语言', type: 'dropdown', items: [
      {title: '中文', path: '/language/chinese'},
      {title: '日语', path: '/language/japanese'}
    ]}
  ],


  // slug for your github repo
  repo: 'wugenqiang/algorithm-data-structure',
  // twitter username
  twitter: 'enjoytoshare',
  // the link to source file of current page
  'edit-link': 'https://github.com/wugenqiang/algorithm-data-structure/blob/master/docs/'



})
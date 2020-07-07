module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig : {
    nav : [
      
        { text: 'Guide', link: '/guide/guide' },
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese/chinese' },
            { text: 'English', link: '/language/english/english' }
          ]
        },
        { text: 'External', link: 'https://www.baidu.com' },
    ],
    sidebarDepth: 2,
    sidebar: [
          
    ]
  }
}
/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '智能家居Smart Home服务中心', // 英雄区文字
  STARTER_HERO_TITLE_2: '我特别对智能安防和智能健康管理系统感兴趣,希望在未来的工作中能够通过技术创新，帮助您创造更加安全和智能的家居环境，科技改变生活', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '我们的产品', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://workable-angelfish-b60.notion.site/15940ea76d798045adfbc931141a49b7', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '我的社交平台', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://muselink.cc/xiaowei', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/starter/hero/hero-image.webp', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: '',
  STARTER_NAV_BUTTON_1_URL: '',

  STARTER_NAV_BUTTON_2_TEXT: '',
  STARTER_NAV_BUTTON_2_URL: '',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '', // 特性
  STARTER_FEATURE_TEXT_1: '什么是全屋智能呢？', // 特性
  STARTER_FEATURE_TEXT_2:
    '我们常在互联网短视频刷到全屋智能，看各大博主搭建的智能家居非常方便，我们很多小白也想做全屋智能 但什么是智能家居？品牌之间能不能互通？智能设备有哪些？断网了智能设备还能不能使用，让我们来一一解答', // 特性

  STARTER_FEATURE_1_TITLE_1: '智能家居的主流协议', // 特性1
  STARTER_FEATURE_1_TEXT_1: '国外协议【PLC KNX CAN RS485】国内协议【蓝牙Mesh Zigbee WIFI RF433 Z-WAVE】国外生态【苹果HomeKit 亚马逊Amazon 谷歌Google】国内生态【米家MIJIA 鸿蒙HarmonyoS 海令Hilink 涂鸦TUYA 绿米Aqara】', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://workable-angelfish-b60.notion.site/15340ea76d79803ea244d5ced7403471?pvs=73', // 特性1

  STARTER_FEATURE_2_TITLE_1: '智能家居装修顺序', // 特性2
  STARTER_FEATURE_2_TEXT_1: '设备方案 主体拆除 水电开槽 水电安装 木工施工 油工刷漆 安装设备 调试设备', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'http://workable-angelfish-b60.notion.site', // 特性2

  STARTER_FEATURE_3_TITLE_1: '全屋WIFI布控/智能灯具布线', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'AC+AP 有线Mesh组网 无线Mesh组网 单路由器 运营商FTTR', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'http://workable-angelfish-b60.notion.site', // 特性3

  STARTER_FEATURE_4_TITLE_1: '智能家居系统', // 特性4
  STARTER_FEATURE_4_TEXT_1: '智能照明系统 智能语音系统 智能环境系统 智能控制系统 智能安防系统', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://workable-angelfish-b60.notion.site/15440ea76d798098a4befaf2faa4eaf5?pvs=4', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套性价比高且实用的智能家居方案',
  STARTER_ABOUT_TEXT:
    '我们团队的愿景是帮助更多的家庭，最低成本、最高性价比搭建自己的AI智能家庭，帮助您将自己的家庭更加便携性和安全性。 <br /> <br /> 我们团队的宗旨是客户至上，科技创新，用户体验',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: 'https://docs.tangly1024.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: '1500+',
  STARTER_ABOUT_TIPS_2: '智能家居部署',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（详细内容可私信博主！）',

  STARTER_PRICING_1_TITLE: '入门版',
  STARTER_PRICING_1_PRICE: '199',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '永久',
  STARTER_PRICING_1_HEADER: '功能点',
  STARTER_PRICING_1_FEATURES: '包含米家 涂鸦 生态互联方案图纸设计,智能点位规划,产品搭配，对接水电预留，产品入网，场景搭配', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/c1a38a65-362e-44c5-8065-733fee39eb54',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '基础版',
  STARTER_PRICING_2_PRICE: '499',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '永久',
  STARTER_PRICING_2_HEADER: '功能点',
  STARTER_PRICING_2_FEATURES: '包含绿米Aqara 华为HiLink 苹果HomeKit 入门版所有项目,APPLE生态互联,APPLETV调试,魔法上网,ISO美区ID', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/590ad70a-c3b7-4caf-94ec-9ca27bde06d4',

  STARTER_PRICING_3_TITLE: '高阶版',
  STARTER_PRICING_3_PRICE: '1499',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '永久',
  STARTER_PRICING_3_HEADER: '功能点',
  STARTER_PRICING_3_FEATURES: '包含HomeAssistant 设备调试,彩图UI定制，车载互联', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:
    'https://tangly1024.lemonsqueezy.com/checkout/buy/df924d66-09dc-42a4-a632-a6b0c5cc4f28',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位用户选择用我们搭建自己的智能家居,通过专业的人员指导、交流以及设备安装，使自己的家庭更加智慧化',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '非常感谢博主帮忙搭建的智能家居，性价比非常高，感觉家庭设备智能真的太方便了 ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'biog',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '黄生',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '非常喜欢博主分享的各种教程，在博主的教学中我自己也搭配了简易的智能家居',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '博主的智能家居点位布局非常的好，父亲自己单独在家，自己很是不放心让博主搭建了安防系统在手机就可以观看父亲的动向',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '爱笑的小花',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '在博主这购买了基础版的部署教程，非常专业帮我解决了appletv的上网问题新家装修装上苹果的生态，非常智能',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '春风化雨',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '在这力购买的设备很实惠，跟网上相比我更喜欢在这个购买，品质有保障',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用了很久非常不错没有掉线的问题，上次设备有一个不想在那个方位博主上门帮我更改位置',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: '智能家居布线成本高吗？',
  STARTER_FAQ_1_ANSWER:
    '不同品牌不同协议布线成本都不一样，像无线智能系统布线成本少，只是额外增加部分网线和电源，但是有线成本布线相对较高，额外要增加信号线。',

  STARTER_FAQ_2_QUESTION: '智能家居一整套需要多少钱？',
  STARTER_FAQ_2_ANSWER:
    '智能家居的费用通常在几千元到上万元甚至更多，取决于你选择的配置产品和系统复杂性。',

  STARTER_FAQ_3_QUESTION: '有了智能中控屏家里还需要开关吗？',
  STARTER_FAQ_3_ANSWER:
    '需要，中控屏更适合年轻人使用，家里预留开关不仅是满足传统灯光的控制使用，无线系统智能中控屏和开关是必须要有的。',

  STARTER_FAQ_4_QUESTION: '智能家居有线无线如何选？',
  STARTER_FAQ_4_ANSWER:
    '面积小追求性价比选无线，面积大追求稳定选有线。',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的团队',
  STARTER_TEAM_TEXT_2:
    '我们的团队非常专业，致力于各种户型来设计属于自己的智能家居',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa06c61bb-980e-4180-bc18-c15f92c78bb4%2Ftangly1024.jpg?table=collection&id=8e7acf17-de09-4fa1-abde-b5b80ad4a813&t=8e7acf17-de09-4fa1-abde-b5b80ad4a813&width=100&cache=v2',
      STARTER_TEAM_ITEM_NICKNAME: 'Tangly',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Melissa Tatcher',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing Expert'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Stuard Ferrel',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Digital Marketer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/starter/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Eva Hudson',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Creative Designer'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于智能家居最新动态，包括新的动向、新的未来计划，以及新功能的特性',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，河北，衡水',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'sel340569@gmail.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/jkbywd', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '用最简单的方法玩转智能家居。',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Notion写作',
      LINK_GROUP: [
        { TITLE: '官方主页', URL: '/#home' },
        { TITLE: 'Notion快捷键提升效率', URL: 'https://docs.tangly1024.com/about' },
        {
          TITLE: 'Notion开始写作',
          URL: 'https://docs.tangly1024.com/article/how-to-question'
        },
        {
          TITLE: '中国大陆使用Notion',
          URL: 'https://docs.tangly1024.com/article/my-service'
        }
      ]
    },
    {
      TITLE: '设备调试',
      LINK_GROUP: [
        {
          TITLE: '设备入网',
          URL: 'https://docs.tangly1024.com/article/vercel-deploy-notion-next'
        },
        {
          TITLE: '智能开关接线原理图',
          URL: 'https://docs.tangly1024.com/article/how-to-update-notionnext'
        },
        { TITLE: '智能开关智能灯具布线图', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: '常见问题',
      LINK_GROUP: [
        {
          TITLE: '设备本地化执行',
          URL: 'https://docs.tangly1024.com/article/start-to-write'
        },
        {
          TITLE: '智能家居场景模式',
          URL: 'https://docs.tangly1024.com/article/notion-short-key'
        },
        {
          TITLE: '智能家居常见离线故障',
          URL: 'https://docs.tangly1024.com/article/notion-faster'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIOTN:
    '访问置顶的部署操作，让我们开始吧。',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL:
    'https://docs.tangly1024.com/article/vercel-deploy-notion-next',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

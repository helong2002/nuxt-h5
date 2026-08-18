# Handoff: TokyoDoor 日本代购电商 H5(移动端全站)

## Overview
TokyoDoor(tokyodoor.com)是面向台湾市场的日本代购平台。本交接包是其 **H5(移动端 Web)全站设计还原稿**,共 15 个页面,覆盖完整购物流程:启动页 → 首页 → 搜索/分类 → 商品列表/详情 → 购物车 → 订单确认 → 支付方式,以及优惠券体系、内容体系(每日话题)、账户体系(登录/我的)。

## About the Design Files
`design/` 目录下的 HTML 文件是**用 HTML 制作的设计参考稿**(打开即可在浏览器预览),不是可直接上线的生产代码。你的任务是在目标代码库(GitHub: `helong2002/nuxt-h5`,Nuxt 工程)中**按其现有技术栈重新实现这些设计**。

目标技术方案(已与需求方确认):
- **Vue 3 + Nuxt + Vant 4 + Tailwind CSS**,375 设计宽度 + vw/rem 适配,hash 路由(WebView 嵌入 App)
- 页面中的 HTML 注释(如 `<!-- 顶部栏 van-nav-bar -->`)标注了每个区块对应的 **Vant 组件**:van-nav-bar / van-search / van-tabs / van-notice-bar / van-swipe / van-sidebar / van-steps / van-switch / van-action-sheet(支付弹窗)/ van-share-sheet(分享弹窗)/ van-dialog(兑换/领取成功弹窗)/ van-tabbar / van-goods-action(详情页底栏)
- 计划嵌入本地 App:需封装 JSBridge(支付/分享/登录/LINE 唤起),登录态由 App 注入
- 设计稿源文件(20 张 UI PNG)在项目 `uploads/` 目录,如需比对可向需求方索取

## Fidelity
**High-fidelity(高保真)**。颜色、字号、间距、圆角、文案均为最终值,请按像素级还原;所有图标、广告图、商品图、插画都已从原设计稿裁切,存放于 `design/assets/`(82 个文件),可直接复制到 Nuxt 的 `public/assets/`。

## Screens / Views(15 页)
路由建议与文件对照:

| 设计文件 | 建议路由 | 说明 |
| --- | --- | --- |
| 启动页.dc.html | /splash | 全屏品牌插画(assets/splash.png),点击进入首页 |
| 首页.dc.html | / | 顶栏(logo+汇率+登入/注册+菜单)、搜索条(原/译切换)、频道 tab、主 banner、公告栏、热门日本平台、分类入口、优惠券广告条、本周人气商品格、五步流程、客服卡、自由购卡、LINE 浮标、TabBar |
| 搜索.dc.html | /search | 分类筛选(全部/新品/二手)、搜索历史、热门关键词 |
| 分类.dc.html | /category | 左侧 van-sidebar(12 个一级分类,红条选中态)+ 右侧 3 列图片网格(14 个二级分类) |
| 商品列表.dc.html | /goods/list | 平台 chips(全部/mercari/Rakuma/Sundrug/Rakuten/01World/ZOZOTOWN)、排序栏(综合/最新/销量/价格+币种下拉)、双列商品卡 |
| 商品详情.dc.html | /goods/:id | 主图轮播、平台徽标+商品ID+翻译按钮、日文标题、TWD 价格卡(923 TWD ≈ 4,367 JPY)、商家/数量、红字注意事项、运费三栏、日本→TokyoDoor→台湾物流线、描述 tabs、代购保障 6 宫格、五步流程、底部操作栏(收藏/客服/加入购物车/立即购买) |
| 购物车.dc.html | /cart | 三步进度条(1 高亮)、按平台分组(mercari logo)、卖家行、商品卡(规格/数量步进器/总价)、删除+收藏按钮、两个服务开关(拍照¥0/检查¥500)、付款明细、全选+前往结账 |
| 订单确认.dc.html | /order/confirm | 三步进度条(2 高亮)、收货地址(可多选,已选蓝框)、国际物流(SGXpress)、可选服务 4 项(检品已选)、选购商品、优惠券/积分入口、付款明细、帐单支付按钮 → 弹出支付方式 action-sheet(信用卡 2%/街口 1.5%/PayPal 3.8%/帐户余额) |
| 优惠券中心.dc.html | /coupon/center | 蓝色渐变头部(本月已省 NT$1,240、4 张可用)、三 tab(未使用/已使用/已过期)、商品券(¥700/¥300 橙色渐变)+运费券(NT$100/9.6折 蓝色渐变)、兑换弹窗、领取成功弹窗 |
| 使用优惠券.dc.html | /coupon/use | 已选运费券卡、自动套用说明、使用说明、我知道了按钮 |
| 每日话题.dc.html | /topic/list | 8 个分类 chips、头条大图(渐变遮罩+标签+日期)、文章列表(缩略图+分类标签+爱心) |
| 话题详情.dc.html | /topic/:id | 文章头(标签/时间/标题/#话题)、活动影片图、三栏信息、优惠券领取条、文章内容(红色提醒块)、图片集(主图+4缩略图)、猜你喜欢横滑、留言评论+输入框、分享弹窗(FB/X/LINE/Google+复制链接) |
| 登录.dc.html | /login | 看板娘头像+欢迎回来、邮箱/密码输入(图标+眼睛)、记住我/忘记密码、登入按钮、LINE/Facebook 第三方登录、立即注册 |
| 我的.dc.html | /me | 蓝色用户卡(头像/一般会员/ID/邮箱/余额 NT$2,450/储值)、四宫格(优惠券3/积分1,280/喜欢12/收藏8)、我的订单 10 状态图标(订单付款有角标2)、菜单列表 6 项、专属客服/常见问题 |
| 乐天入口.dc.html | /platform/rakuten | 平台头(R logo+官方入口+水印)、热门分类、热门品牌(DHC/LEGO/Kao/Canon/NISSIN)、推荐商店 1-2-3、筛选 chips、本周人气 |

各页面精确布局、组件尺寸、颜色、文案**以 design/*.dc.html 内的标记为准**(每个元素都是内联 Tailwind 类,即规格说明本身)。

## Interactions & Behavior
- 底部 TabBar 五项:首页/分类/自由购/购物车(角标 2)/我的;激活态用蓝色图标(assets/tab-*-on.png)
- 商品详情:加入购物车→/cart,立即购买→/order/confirm
- 订单确认「帐单支付」→ 底部 action-sheet(遮罩点击关闭)
- 优惠券中心「兑换」→ 居中 dialog → 提交后切换「领取成功」dialog
- 话题详情右上分享 → 底部 share-sheet
- 列表/横滑区域均为横向滚动、隐藏滚动条(`.no-scrollbar`)
- 需接 JSBridge 的动作:支付四种方式、LINE 客服/分享、第三方登录

## State Management
- 购物车:商品项(平台/卖家/规格/数量/单价 JPY/估算 TWD)、服务开关、选中集合、全选
- 订单:地址选中、物流方案、可选服务集合、优惠券/积分抵扣、总价 = 商品+手续费+服务费-券-积分
- 弹窗开关:payOpen / redeemOpen / successOpen / shareOpen
- 汇率:¥1 ≈ NT$0.21,全站顶栏展示

## Design Tokens
- 主色 brand-blue `#0b7ce6`(主站 Tailwind sky 体系,渐变搭配 `#0b64d8`/`#1287ec`)
- 文字:标题 `#12233d`、正文 `#26415f`、次要 `#3d5573`、弱化 `#7a90a8`、占位 `#9db1c7`
- 强调红(价格/徽标/角标)`#e02929`,支付红 `#e8434f`
- 背景 `#eef4fb`/`#f0f5fb`,卡片白,边框 `#e6eef7`/`#dbe7f5`/`#c8d8ea`
- 辅助:LINE 绿 `#06c755`、FB 蓝 `#1877f2`、乐天红 `#bf0000`、橙券渐变 `#f2695c→#f5a05c`
- 圆角:卡片 16px、输入/按钮 12px、chips 全圆;阴影 `0 3px 8px rgba(11,124,230,.35)`(蓝按钮)
- 字体:Noto Sans TC(400/500/700/900);标题 17-22px、正文 13-14px、价格 17-26px black

## Assets(design/assets/,82 个)
全部从原 UI 设计稿 PNG 裁切:logo、banner-free/banner-festival(广告图)、plat-*(平台图标)、cat-*/cat2-*(分类图)、prod-*(商品图)、step-*(流程插画)、tab-*(TabBar 图标,含激活态)、ic-*(功能图标)、th-*(文章缩略图)、topic-*(话题图)、login-mascot/me-avatar/cs-girl(看板娘)、coupon-strip(券广告条)、rk-*(乐天页素材)、splash(启动图)、line(LINE 浮标)。

## Files
- `design/*.dc.html` — 15 个高保真页面(浏览器直接打开预览;`support.js` 为预览运行时,实现时忽略)
- `design/assets/` — 全部切图素材
- 页面互链关系即路由跳转关系

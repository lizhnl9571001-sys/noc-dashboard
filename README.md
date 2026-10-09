# 网络运营大屏 React + TypeScript

这是基于 1005-1.html 和 Figma 规范整理的第一版复用项目，采用 React 19、TypeScript 5.7、Vite 6。无真实接口；数据为固定示例。全国地图尚未移植，使用明确标注的城市入口与城域拓扑示例。原始 HTML 完整保留。

## 启动

Node.js 20.19+ 或 22.12+，npm。执行：

```sh
npm install
npm run dev
npm run typecheck
npm test
npm run build
```

浏览器打开终端输出的地址。原稿文件在 references/1005-1.html；Vite 开发时原稿链接可直接访问。

## 复用

从 src/components 导入 KpiCard、Panel、StatusBadge、LayerTabs、AlarmList、DetailCard、ProgressRow、Gauge、TrendChart、Topology、EventTicker、Screen。从 src/types.ts 引用数据类型，样式导入 src/styles/tokens.css 与 dashboard.css。

```tsx
<KpiCard label="在线设备" value={18620} unit="台" status="normal" />
```

这是源码组件库，不是已发布npm包。组件为受控数据传入；请求和刷新由业务层负责。后续如果公司用已有脚手架，只复制组件、类型与样式，不必使用Vite。

## 设计与 Skill

规范：https://www.figma.com/design/D8cf68XwZMH4BYNXh7LACM?node-id=4-2

skills/noc-react-dashboard/SKILL.md 是研发AI助手的工作规则。支持项目 Skill 的工具可按其文档复制到项目技能目录；不支持的工具可明确要求读取此文件。文件存在不等于所有AI工具自动识别。

## GitHub 上传

1. 创建公司组织的 Private 仓库 noc-dashboard。
2. 解压本包，用网页 Upload files 上传文件夹里的内容（不是仅上传zip）。保留 .gitignore。
3. Settings / Collaborators 或组织团队权限中授予研发写入权限。
4. 每次改动新建分支，提交 Pull Request，检查通过后合并 main。
5. 已附 package-lock.json，首次使用建议 npm ci 安装锁定版本。

终端上传：

```sh
git init -b main
git add .
git commit -m "Initial React dashboard and design skill"
git remote add origin <替换为你的仓库地址>
git push -u origin main
```

不要提交 node_modules、dist、接口密钥或真实敏感数据。设计师维护规范与验收，研发维护组件与数据接入。

## 验证记录

TypeScript检查、Vite生产构建、组件服务端渲染与数据语义测试通过。开发服务器已启动验证。当前环境没有Chromium可执行文件，未完成浏览器截图和点击流程验证；交付后请研发在浏览器检查交互与增强字号。

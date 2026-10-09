---
name: noc-react-dashboard
description: Build or modify React and TypeScript network operations dashboards using the NOC technology-blue design specification. Use for reusable dashboard components, KPI cards, alarm lists, trend charts, topology interactions, and integration into the noc-dashboard repository.
---

# 网络运营大屏 React Skill

1. 找到项目根目录 package.json，确认 React 与 TypeScript。先阅读 src/types.ts、src/components/index.tsx、src/styles/tokens.css。若仓库未提供，要求提供仓库，禁止声称已有组件可用。
2. 阅读 references/design-spec.md 确认配色、布局、数据状态和交互约束。阅读 references/components.md 选择组件与字段。
3. 优先组合现有组件，不复制全屏HTML或用iframe替代迁移。不引入另一套UI库；不得将技术栈改为Vue。
4. 使用CSS变量；业务数据由页面层传入，保留稳定资源ID。随机模拟值必须显式标注，真实采集更新时间不得由系统时间伪造。
5. 保持缺失与零值区别；严重等级与处理状态分开；恢复与关闭分开。图表缺失点断线。告警联动按resourceId，不依赖名字。
6. 新增组件使用明确Props类型，禁用any逃避数据契约。对外导出组件和类型，写清用法。适配公司React版本时先检查已有package.json，不能无条件升级。
7. 维持1920×1080比例；远距离字号增强同时控制内容密度。交互元素使用按钮及键盘焦点。自动动效可暂停并响应prefers-reduced-motion。
8. 改完运行 npm run typecheck、npm test、npm run build。未能运行要如实记录阻碍，禁止声称通过。检查关键流程：城市下钻/返回、告警联动、高亮、详情关闭、暂停滚动、缺失/失败状态。
9. 汇报已实现功能、验证证据和未实现范围；地图边界、接口、真实刷新必须单独说明。不要自动发布、推送公司GitHub或加入真实凭证。

源规范 Figma：https://www.figma.com/design/D8cf68XwZMH4BYNXh7LACM?node-id=4-2

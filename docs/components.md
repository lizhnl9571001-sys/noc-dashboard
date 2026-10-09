# 组件与字段

| 组件 | 主要属性 |
|---|---|
| KpiCard | label,value,unit,decimals,status,description,updatedAt |
| Panel | title,source,state,onRetry,children |
| LayerTabs | items,value,onChange |
| AlarmList | alarms,onSelect |
| DetailCard | title,rows,onClose |
| ProgressRow | label,value,total,unit,status |
| Gauge | value,label |
| TrendChart | points,time/current/previous,unit |
| Topology | nodes,links,selectedId,onSelect |
| EventTicker | events |
| Screen | children |

Health=normal/warning/critical。DataState=ready/loading/empty/error/stale。Alarm包含稳定id、resourceId、time、severity、processStatus、recovered。NetworkNode包含id、name、type、status、x、y；NetworkLink使用source/target稳定ID。TrendPoint允许null，缺失数据断线。

新增组件先扩展类型，复用 CSS 变量。所有演示与真实数据通过业务层隔离；不要在组件内随机生成指标。

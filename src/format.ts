export function formatMetric(value:number|null|undefined, decimals=0):string {return value==null||!Number.isFinite(value)?'—':value.toLocaleString('zh-CN',{minimumFractionDigits:decimals,maximumFractionDigits:decimals});}
export function clampPercent(value:number){return Math.min(100,Math.max(0,value));}

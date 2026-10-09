export type Health = 'normal' | 'warning' | 'critical';
export type DataState = 'ready' | 'loading' | 'empty' | 'error' | 'stale';
export type Severity = 'critical' | 'warning' | 'info';
export type ProcessStatus = 'pending' | 'processing' | 'closed';
export interface Alarm {id:string;resourceId:string;time:string;severity:Severity;message:string;processStatus:ProcessStatus;recovered:boolean;}
export interface NetworkNode {id:string;name:string;type:'core'|'aggregation'|'access';status:Health;x:number;y:number;}
export interface NetworkLink {id:string;source:string;target:string;status:Health;}
export interface TrendPoint {time:string;current:number|null;previous:number|null;}

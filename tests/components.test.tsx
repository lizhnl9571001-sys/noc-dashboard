import {describe,it,expect} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import {KpiCard,Panel,AlarmList,TrendChart} from '../src/components';
describe('数据状态和业务表达',()=>{
 it('缺失值保留—而非虚假零',()=>{const s=renderToStaticMarkup(<KpiCard label="在线设备" value={null} unit="台"/>);expect(s).toContain('—');expect(s).toContain('暂无数据')});
 it('失败保留已有内容',()=>{const s=renderToStaticMarkup(<Panel title="带宽" state="error">上次值328</Panel>);expect(s).toContain('获取失败');expect(s).toContain('上次值328')});
 it('恢复与处理状态分别展示',()=>{const s=renderToStaticMarkup(<AlarmList alarms={[{id:'a',resourceId:'r',time:'12:00',severity:'critical',message:'告警',recovered:true,processStatus:'processing'}]} onSelect={()=>{}}/>);expect(s).toContain('已恢复');expect(s).toContain('处理中')});
 it('缺失趋势点断线',()=>{const s=renderToStaticMarkup(<TrendChart unit="Tbps" points={[{time:'0',current:1,previous:1},{time:'1',current:null,previous:1},{time:'2',current:2,previous:1}]}/>);expect(s).toContain('M30 82.5  M450 30')});
});

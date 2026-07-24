import{s as qt,d as _t,a as Te,p as Ne,b as bt,c as l,e as o,i as G,f as he,g as S,t as F,h as e,j as L,k as we,l as Se,m as W,n as xe,o as Ie,q as Ve,r as Ae,u as ke,v as Bt,w as Pt,x as N,y as K,z as Oe,A as Ot,B as _,C as U,D as mt,E as Fe,F as gt,G as Ce,H as Mt,I as Ft,J as Lt,K as Wt,L as Jt}from"./vendor-CY_2qwWA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function zt(n,t){let r,a;try{const h=ae.__wbindgen_add_to_stack_pointer(-16),E=at(n,ae.__wbindgen_export,ae.__wbindgen_export2),p=Be,M=at(t,ae.__wbindgen_export,ae.__wbindgen_export2),R=Be;ae.compile_ruleset(h,E,p,M,R);var i=Me().getInt32(h+0,!0),s=Me().getInt32(h+4,!0),d=Me().getInt32(h+8,!0),b=Me().getInt32(h+12,!0),c=i,k=s;if(b)throw c=0,k=0,ft(d);return r=c,a=k,nt(c,k)}finally{ae.__wbindgen_add_to_stack_pointer(16),ae.__wbindgen_export3(r,a,1)}}function Ut(n,t){let r,a;try{const h=ae.__wbindgen_add_to_stack_pointer(-16),E=at(n,ae.__wbindgen_export,ae.__wbindgen_export2),p=Be,M=at(t,ae.__wbindgen_export,ae.__wbindgen_export2),R=Be;ae.evaluate_ruleset_with_trace(h,E,p,M,R);var i=Me().getInt32(h+0,!0),s=Me().getInt32(h+4,!0),d=Me().getInt32(h+8,!0),b=Me().getInt32(h+12,!0),c=i,k=s;if(b)throw c=0,k=0,ft(d);return r=c,a=k,nt(c,k)}finally{ae.__wbindgen_add_to_stack_pointer(16),ae.__wbindgen_export3(r,a,1)}}function Kt(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,r){throw new Error(nt(t,r))},__wbg_getTime_7a770f8a2ec8d634:function(t){return Ze(t).getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return Ze(t).getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return Ye(new Date)},__wbg_new_47ab770c8bd3b6bb:function(t){const r=new Date(Ze(t));return Ye(r)},__wbindgen_cast_0000000000000001:function(t){return Ye(t)},__wbindgen_cast_0000000000000002:function(t,r){const a=nt(t,r);return Ye(a)},__wbindgen_object_drop_ref:function(t){ft(t)}}}}function Ye(n){Ue===Re.length&&Re.push(Re.length+1);const t=Ue;return Ue=Re[t],Re[t]=n,t}function Xt(n){n<1028||(Re[n]=Ue,Ue=n)}let De=null;function Me(){return(De===null||De.buffer.detached===!0||De.buffer.detached===void 0&&De.buffer!==ae.memory.buffer)&&(De=new DataView(ae.memory.buffer)),De}function nt(n,t){return Yt(n>>>0,t)}let We=null;function Qe(){return(We===null||We.byteLength===0)&&(We=new Uint8Array(ae.memory.buffer)),We}function Ze(n){return Re[n]}let Re=new Array(1024).fill(void 0);Re.push(void 0,null,!0,!1);let Ue=Re.length;function at(n,t,r){if(r===void 0){const b=Ke.encode(n),c=t(b.length,1)>>>0;return Qe().subarray(c,c+b.length).set(b),Be=b.length,c}let a=n.length,i=t(a,1)>>>0;const s=Qe();let d=0;for(;d<a;d++){const b=n.charCodeAt(d);if(b>127)break;s[i+d]=b}if(d!==a){d!==0&&(n=n.slice(d)),i=r(i,a,a=d+n.length*3,1)>>>0;const b=Qe().subarray(i+d,i+a),c=Ke.encodeInto(n,b);d+=c.written,i=r(i,a,d,1)>>>0}return Be=d,i}function ft(n){const t=Ze(n);return Xt(n),t}let $e=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});$e.decode();const Vt=2146435072;let ot=0;function Yt(n,t){return ot+=t,ot>=Vt&&($e=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),$e.decode(),ot=t),$e.decode(Qe().subarray(n,n+t))}const Ke=new TextEncoder;"encodeInto"in Ke||(Ke.encodeInto=function(n,t){const r=Ke.encode(n);return t.set(r),{read:n.length,written:r.length}});let Be=0,ae;function Ht(n,t){return ae=n.exports,De=null,We=null,ae}async function Gt(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(i){if(n.ok&&r(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function r(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function Qt(n){if(ae!==void 0)return ae;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-CaVvRRgX.wasm",import.meta.url));const t=Kt();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:a}=await Gt(await n,t);return Ht(r)}const Zt=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" id="Definitions_Mortgage" name="Mortgage Eligibility" namespace="http://datalila.com/bre/examples">
  <decision id="Decision_Mortgage" name="Mortgage Eligibility">
    <decisionTable id="DecisionTable_Mortgage" hitPolicy="FIRST">
      <input id="Input_1" label="Debt-to-income ratio">
        <inputExpression id="InputExpression_1" typeRef="number"><text>dti</text></inputExpression>
      </input>
      <input id="Input_2" label="Credit score">
        <inputExpression id="InputExpression_2" typeRef="number"><text>credit_score</text></inputExpression>
      </input>
      <output id="Output_1" label="Approved" name="approved" typeRef="boolean" />
      <output id="Output_2" label="Rate" name="amount" typeRef="number" />
      <rule id="Rule_1">
        <inputEntry id="IE_1_1"><text>&lt;= 0.20</text></inputEntry>
        <inputEntry id="IE_1_2"><text>&gt;= 800</text></inputEntry>
        <outputEntry id="OE_1_1"><text>true</text></outputEntry>
        <outputEntry id="OE_1_2"><text>3.0</text></outputEntry>
      </rule>
      <rule id="Rule_2">
        <inputEntry id="IE_2_1"><text>&lt;= 0.36</text></inputEntry>
        <inputEntry id="IE_2_2"><text>&gt;= 740</text></inputEntry>
        <outputEntry id="OE_2_1"><text>true</text></outputEntry>
        <outputEntry id="OE_2_2"><text>3.5</text></outputEntry>
      </rule>
      <rule id="Rule_3">
        <inputEntry id="IE_3_1"><text>&lt;= 0.43</text></inputEntry>
        <inputEntry id="IE_3_2"><text>&gt;= 680</text></inputEntry>
        <outputEntry id="OE_3_1"><text>true</text></outputEntry>
        <outputEntry id="OE_3_2"><text>4.2</text></outputEntry>
      </rule>
      <rule id="Rule_4">
        <inputEntry id="IE_4_1"><text>&lt;= 0.48</text></inputEntry>
        <inputEntry id="IE_4_2"><text>&gt;= 640</text></inputEntry>
        <outputEntry id="OE_4_1"><text>true</text></outputEntry>
        <outputEntry id="OE_4_2"><text>5.5</text></outputEntry>
      </rule>
      <rule id="Rule_5">
        <inputEntry id="IE_5_1"><text>-</text></inputEntry>
        <inputEntry id="IE_5_2"><text>-</text></inputEntry>
        <outputEntry id="OE_5_1"><text>false</text></outputEntry>
        <outputEntry id="OE_5_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,$t=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" id="Definitions_Underwriting" name="Insurance Underwriting" namespace="http://datalila.com/bre/examples">
  <decision id="Decision_Underwriting" name="Insurance Underwriting">
    <decisionTable id="DecisionTable_Underwriting" hitPolicy="FIRST">
      <input id="Input_1" label="Driver age">
        <inputExpression id="InputExpression_1" typeRef="number"><text>driver_age</text></inputExpression>
      </input>
      <input id="Input_2" label="At-fault claims (5yr)">
        <inputExpression id="InputExpression_2" typeRef="number"><text>at_fault_claims</text></inputExpression>
      </input>
      <output id="Output_1" label="Insurable" name="approved" typeRef="boolean" />
      <output id="Output_2" label="Premium" name="amount" typeRef="number" />
      <rule id="Rule_1">
        <inputEntry id="IE_1_1"><text>[25..65]</text></inputEntry>
        <inputEntry id="IE_1_2"><text>= 0</text></inputEntry>
        <outputEntry id="OE_1_1"><text>true</text></outputEntry>
        <outputEntry id="OE_1_2"><text>89</text></outputEntry>
      </rule>
      <rule id="Rule_2">
        <inputEntry id="IE_2_1"><text>[25..65]</text></inputEntry>
        <inputEntry id="IE_2_2"><text>[1..2]</text></inputEntry>
        <outputEntry id="OE_2_1"><text>true</text></outputEntry>
        <outputEntry id="OE_2_2"><text>134</text></outputEntry>
      </rule>
      <rule id="Rule_3">
        <inputEntry id="IE_3_1"><text>[18..24]</text></inputEntry>
        <inputEntry id="IE_3_2"><text>[0..1]</text></inputEntry>
        <outputEntry id="OE_3_1"><text>true</text></outputEntry>
        <outputEntry id="OE_3_2"><text>168</text></outputEntry>
      </rule>
      <rule id="Rule_4">
        <inputEntry id="IE_4_1"><text>[66..80]</text></inputEntry>
        <inputEntry id="IE_4_2"><text>= 0</text></inputEntry>
        <outputEntry id="OE_4_1"><text>true</text></outputEntry>
        <outputEntry id="OE_4_2"><text>110</text></outputEntry>
      </rule>
      <rule id="Rule_5">
        <inputEntry id="IE_5_1"><text>-</text></inputEntry>
        <inputEntry id="IE_5_2"><text>-</text></inputEntry>
        <outputEntry id="OE_5_1"><text>false</text></outputEntry>
        <outputEntry id="OE_5_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,en=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" id="Definitions_VolumeDiscount" name="Volume Discount Pricing" namespace="http://datalila.com/bre/examples">
  <decision id="Decision_VolumeDiscount" name="Volume Discount Pricing">
    <decisionTable id="DecisionTable_VolumeDiscount" hitPolicy="FIRST">
      <input id="Input_1" label="Order quantity">
        <inputExpression id="InputExpression_1" typeRef="number"><text>order_quantity</text></inputExpression>
      </input>
      <input id="Input_2" label="Loyalty years">
        <inputExpression id="InputExpression_2" typeRef="number"><text>loyalty_years</text></inputExpression>
      </input>
      <output id="Output_1" label="Discount applied" name="approved" typeRef="boolean" />
      <output id="Output_2" label="Discount" name="amount" typeRef="number" />
      <rule id="Rule_1">
        <inputEntry id="IE_1_1"><text>&gt;= 500</text></inputEntry>
        <inputEntry id="IE_1_2"><text>&gt;= 3</text></inputEntry>
        <outputEntry id="OE_1_1"><text>true</text></outputEntry>
        <outputEntry id="OE_1_2"><text>22</text></outputEntry>
      </rule>
      <rule id="Rule_2">
        <inputEntry id="IE_2_1"><text>&gt;= 500</text></inputEntry>
        <inputEntry id="IE_2_2"><text>-</text></inputEntry>
        <outputEntry id="OE_2_1"><text>true</text></outputEntry>
        <outputEntry id="OE_2_2"><text>15</text></outputEntry>
      </rule>
      <rule id="Rule_3">
        <inputEntry id="IE_3_1"><text>&gt;= 100</text></inputEntry>
        <inputEntry id="IE_3_2"><text>&gt;= 3</text></inputEntry>
        <outputEntry id="OE_3_1"><text>true</text></outputEntry>
        <outputEntry id="OE_3_2"><text>10</text></outputEntry>
      </rule>
      <rule id="Rule_4">
        <inputEntry id="IE_4_1"><text>[100..499]</text></inputEntry>
        <inputEntry id="IE_4_2"><text>[0..2]</text></inputEntry>
        <outputEntry id="OE_4_1"><text>true</text></outputEntry>
        <outputEntry id="OE_4_2"><text>5</text></outputEntry>
      </rule>
      <rule id="Rule_5">
        <inputEntry id="IE_5_1"><text>-</text></inputEntry>
        <inputEntry id="IE_5_2"><text>-</text></inputEntry>
        <outputEntry id="OE_5_1"><text>false</text></outputEntry>
        <outputEntry id="OE_5_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,tn=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" id="Definitions_PremiumRating" name="Insurance Premium Rating" namespace="http://datalila.com/bre/examples">
  <decision id="Decision_AgeFactor" name="age_factor">
    <literalExpression id="LE_Age"><text>if driver_age &gt;= 25 and driver_age &lt;= 65 then 0.9 else if driver_age &gt;= 18 and driver_age &lt; 25 then 1.3 else 1.1</text></literalExpression>
  </decision>
  <decision id="Decision_ClaimsFactor" name="claims_factor">
    <literalExpression id="LE_Claims"><text>if at_fault_claims = 0 then 1.0 else if at_fault_claims &lt;= 2 then 1.4 else 1.9</text></literalExpression>
  </decision>
  <decision id="Decision_FinalPremium" name="final_premium">
    <informationRequirement id="InfoReq_1">
      <requiredDecision href="#Decision_AgeFactor" />
    </informationRequirement>
    <informationRequirement id="InfoReq_2">
      <requiredDecision href="#Decision_ClaimsFactor" />
    </informationRequirement>
    <literalExpression id="LE_Final"><text>400 * age_factor * claims_factor</text></literalExpression>
  </decision>
</definitions>
`,Le=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:Zt,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:$t,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:en,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:tn,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"}],Tt=new qt;async function nn(n){const{rootElement:t}=await Tt.fromXML(n);return t}function je(n,t={}){return Tt.create(n,t)}const an=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function Dt(n){return n.get("drgElement")||[]}function rn(n){return n.$type==="dmn:Decision"}function on(n){const t=[],r=a=>a.replace(/^#/,"");for(const a of n.get("informationRequirement")||[]){const i=a.get("requiredInput")||a.get("requiredDecision");i&&i.href&&t.push(r(i.href))}for(const a of n.get("knowledgeRequirement")||[]){const i=a.get("requiredKnowledge");i&&i.href&&t.push(r(i.href))}return t}const st={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},yt={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function sn(n){const t=Dt(n),r=new _t.graphlib.Graph;r.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),r.setDefaultEdgeLabel(()=>({}));for(const c of t){const k=st[c.$type];if(!k)continue;const h=yt[k];r.setNode(c.id,{...h})}const a=[];for(const c of t)if(st[c.$type])for(const k of on(c))r.node(k)&&(r.setEdge(k,c.id),a.push([k,c.id]));_t.layout(r);const i=[];let s=0,d=0;for(const c of t){const k=st[c.$type];if(!k)continue;const h=r.node(c.id),E=yt[k];i.push({id:c.id,name:c.get("name")||c.id,type:k,x:h.x-E.width/2,y:h.y-E.height/2,width:E.width,height:E.height,element:c}),s=Math.max(s,h.x+E.width/2),d=Math.max(d,h.y+E.height/2)}const b=a.map(([c,k])=>{var h;return{from:c,to:k,points:(((h=r.edge(c,k))==null?void 0:h.points)||[]).map(E=>({x:E.x,y:E.y}))}});return{nodes:i,edges:b,width:s+40,height:d+40}}var ln=N('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),cn=N("<option> </option>"),un=N('<select class="svelte-1qozfr"></select>'),dn=N('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),ht=N('<div class="dt-col-label svelte-1qozfr"> </div>'),pn=N('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),vn=N('<th class="dt-input-col svelte-1qozfr"><!></th>'),mn=N('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),gn=N('<th class="dt-output-col svelte-1qozfr"><!></th>'),fn=N('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),xt=N('<input class="svelte-1qozfr"/>'),wt=N('<td class="svelte-1qozfr"><!></td>'),_n=N('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),bn=N('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr></thead><tbody></tbody></table></div></div>');function yn(n,t){Ne(t,!0);let r=bt(t,"readonly",3,!1),a=bt(t,"matchedRuleIndices",19,()=>[]),i=ke(()=>t.decision.get("decisionLogic")),s=ke(()=>e(i).get("input")),d=ke(()=>e(i).get("output")),b=ke(()=>e(i).get("rule"));function c(j){var f;e(i).set("hitPolicy",j),(f=t.onchange)==null||f.call(t)}function k(j,f){var w;j.set("label",f),(w=t.onchange)==null||w.call(t)}function h(j,f){var w;j.get("inputExpression").set("text",f),(w=t.onchange)==null||w.call(t)}function E(j,f){var w;j.get("inputExpression").set("typeRef",f),(w=t.onchange)==null||w.call(t)}function p(j,f){var w;j.set("name",f),(w=t.onchange)==null||w.call(t)}function M(j,f){var w;j.set("label",f),(w=t.onchange)==null||w.call(t)}function R(j,f){var w;j.set("typeRef",f),(w=t.onchange)==null||w.call(t)}function I(j,f,w){var A;j.get("inputEntry")[f].set("text",w),(A=t.onchange)==null||A.call(t)}function C(j,f,w){var A;j.get("outputEntry")[f].set("text",w),(A=t.onchange)==null||A.call(t)}function z(){var w;const j=je("dmn:LiteralExpression",{text:""}),f=je("dmn:InputClause",{label:"New Input",inputExpression:j});e(i).get("input").push(f);for(const A of e(b))A.get("inputEntry").push(je("dmn:UnaryTests",{text:"-"}));(w=t.onchange)==null||w.call(t)}function J(j){var f;e(i).get("input").splice(j,1);for(const w of e(b))w.get("inputEntry").splice(j,1);(f=t.onchange)==null||f.call(t)}function y(){var f;const j=je("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(i).get("output").push(j);for(const w of e(b))w.get("outputEntry").push(je("dmn:LiteralExpression",{text:'""'}));(f=t.onchange)==null||f.call(t)}function u(j){var f;e(i).get("output").splice(j,1);for(const w of e(b))w.get("outputEntry").splice(j,1);(f=t.onchange)==null||f.call(t)}function O(){var w;const j=e(s).map(()=>je("dmn:UnaryTests",{text:"-"})),f=e(d).map(()=>je("dmn:LiteralExpression",{text:'""'}));e(i).get("rule").push(je("dmn:DecisionRule",{inputEntry:j,outputEntry:f})),(w=t.onchange)==null||w.call(t)}function Y(j){var f;e(i).get("rule").splice(j,1),(f=t.onchange)==null||f.call(t)}var te=bn(),q=o(te),ne=o(q),re=l(o(ne));{var se=j=>{var f=ln(),w=o(f);F(A=>L(w,A),[()=>e(i).get("hitPolicy")||"UNIQUE"]),S(j,f)},ue=j=>{var f=un();he(f,21,()=>an,xe,(A,ce)=>{var ve=cn(),fe=o(ve),$={};F(()=>{L(fe,e(ce)),$!==($=e(ce))&&(ve.value=(ve.__value=e(ce))??"")}),S(A,ve)});var w;Bt(f),F(A=>{w!==(w=A)&&(f.value=(f.__value=A)??"",Pt(f,A))},[()=>e(i).get("hitPolicy")||"UNIQUE"]),W("change",f,A=>c(A.currentTarget.value)),S(j,f)};G(re,j=>{r()?j(se):j(ue,-1)})}var v=l(ne,2);{var x=j=>{var f=dn(),w=we(f),A=l(w,2),ce=l(A,2);W("click",w,z),W("click",A,y),W("click",ce,O),S(j,f)};G(v,j=>{r()||j(x)})}var m=l(q,2),D=o(m);let X;var ie=o(D),de=o(ie),le=l(o(de));he(le,17,()=>e(s),xe,(j,f,w)=>{var A=vn(),ce=o(A);{var ve=$=>{var me=ht(),pe=o(me);F(V=>L(pe,V),[()=>e(f).get("label")||""]),S($,me)},fe=$=>{var me=pn(),pe=we(me),V=l(pe,2),ee=l(V,2),g=o(ee),B=l(g,2);F((T,P,Q)=>{Se(pe,T),Se(V,P),Se(g,Q)},[()=>e(f).get("label")||"",()=>e(f).get("inputExpression").get("text")||"",()=>e(f).get("inputExpression").get("typeRef")||""]),W("input",pe,T=>k(e(f),T.currentTarget.value)),W("input",V,T=>h(e(f),T.currentTarget.value)),W("input",g,T=>E(e(f),T.currentTarget.value)),W("click",B,()=>J(w)),S($,me)};G(ce,$=>{r()?$(ve):$(fe,-1)})}S(j,A)});var be=l(le);he(be,17,()=>e(d),xe,(j,f,w)=>{var A=gn(),ce=o(A);{var ve=$=>{var me=ht(),pe=o(me);F(V=>L(pe,V),[()=>e(f).get("label")||""]),S($,me)},fe=$=>{var me=mn(),pe=we(me),V=l(pe,2),ee=l(V,2),g=o(ee),B=l(g,2);F((T,P,Q)=>{Se(pe,T),Se(V,P),Se(g,Q)},[()=>e(f).get("label")||"",()=>e(f).get("name")||"",()=>e(f).get("typeRef")||""]),W("input",pe,T=>M(e(f),T.currentTarget.value)),W("input",V,T=>p(e(f),T.currentTarget.value)),W("input",g,T=>R(e(f),T.currentTarget.value)),W("click",B,()=>u(w)),S($,me)};G(ce,$=>{r()?$(ve):$(fe,-1)})}S(j,A)});var ye=l(ie);he(ye,21,()=>e(b),xe,(j,f,w)=>{var A=_n();let ce;var ve=o(A),fe=o(ve);fe.nodeValue=`${w+1} `;var $=l(fe);{var me=ee=>{var g=fn();W("click",g,()=>Y(w)),S(ee,g)};G($,ee=>{r()||ee(me)})}var pe=l(ve);he(pe,17,()=>e(f).get("inputEntry"),xe,(ee,g,B)=>{var T=wt(),P=o(T);{var Q=H=>{var Z=Ve();F(_e=>L(Z,_e),[()=>e(g).get("text")||"-"]),S(H,Z)},ge=H=>{var Z=xt();F(_e=>Se(Z,_e),[()=>e(g).get("text")||""]),W("input",Z,_e=>I(e(f),B,_e.currentTarget.value)),S(H,Z)};G(P,H=>{r()?H(Q):H(ge,-1)})}S(ee,T)});var V=l(pe);he(V,17,()=>e(f).get("outputEntry"),xe,(ee,g,B)=>{var T=wt(),P=o(T);{var Q=H=>{var Z=Ve();F(_e=>L(Z,_e),[()=>e(g).get("text")||""]),S(H,Z)},ge=H=>{var Z=xt();F(_e=>Se(Z,_e),[()=>e(g).get("text")||""]),W("input",Z,_e=>C(e(f),B,_e.currentTarget.value)),S(H,Z)};G(P,H=>{r()?H(Q):H(ge,-1)})}S(ee,T)}),F(ee=>ce=Ie(A,1,"svelte-1qozfr",null,ce,ee),[()=>({matched:a().includes(w)})]),S(j,A)}),F(()=>X=Ie(D,1,"dt-table svelte-1qozfr",null,X,{readonly:r()})),S(n,te),Ae()}Te(["change","click","input"]);Te(["input"]);var hn=Fe('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),xn=Fe('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),wn=Fe('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),En=Fe('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),Sn=Fe('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),kn=Fe('<g role="button" tabindex="0"><!><!></g>'),Rn=N('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function In(n,t){Ne(t,!0);let r=ke(()=>sn(t.definitions)),a=K(Oe({x:0,y:0,w:800,h:500})),i=K(!1),s={x:0,y:0},d={x:0,y:0};Ot(()=>{_(a,{x:0,y:0,w:Math.max(e(r).width,400),h:Math.max(e(r).height,300)},!0)});function b(y){y.preventDefault();const u=y.deltaY>0?1.1:.9,O=Math.max(200,Math.min(4e3,e(a).w*u)),Y=Math.max(150,Math.min(3e3,e(a).h*u));_(a,{...e(a),w:O,h:Y},!0)}function c(y){y.target.closest(".drd-node")||(_(i,!0),s={x:y.clientX,y:y.clientY},d={x:e(a).x,y:e(a).y})}function k(y,u){if(!e(i))return;const O=e(a).w/u.clientWidth;_(a,{...e(a),x:d.x-(y.clientX-s.x)*O,y:d.y-(y.clientY-s.y)*O},!0)}function h(){_(i,!1)}function E(y){switch(y){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function p(y){switch(y){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function M(y){return y.points.length?y.points.map((u,O)=>`${O===0?"M":"L"} ${u.x} ${u.y}`).join(" "):""}function R(y){if(!t.nodeValues)return null;const u=y.id in t.nodeValues?t.nodeValues[y.id]:t.nodeValues[y.name];return u===void 0?null:t.formatNodeValue?t.formatNodeValue(y.id,u):String(u)}var I=Rn(),C=o(I),z=l(o(C));he(z,17,()=>e(r).edges,xe,(y,u)=>{var O=hn();F(Y=>U(O,"d",Y),[()=>M(e(u))]),S(y,O)});var J=l(z);he(J,17,()=>e(r).nodes,xe,(y,u)=>{const O=ke(()=>R(e(u)));var Y=kn();let te;var q=o(Y);{var ne=x=>{var m=xn();F((D,X)=>{U(m,"x",e(u).x),U(m,"y",e(u).y),U(m,"width",e(u).width),U(m,"height",e(u).height),U(m,"fill",D),U(m,"stroke",X),U(m,"stroke-width",e(u).id===t.activeId?2.5:1.5)},[()=>E(e(u).type),()=>p(e(u).type)]),S(x,m)},re=x=>{var m=wn();F((D,X)=>{U(m,"x",e(u).x),U(m,"y",e(u).y),U(m,"width",e(u).width),U(m,"height",e(u).height),U(m,"fill",D),U(m,"stroke",X),U(m,"stroke-width",e(u).id===t.activeId?2.5:1.5)},[()=>E(e(u).type),()=>p(e(u).type)]),S(x,m)};G(q,x=>{e(u).type==="inputData"?x(ne):x(re,-1)})}var se=l(q);{var ue=x=>{var m=En(),D=we(m),X=o(D),ie=l(D),de=o(ie);F(()=>{U(D,"x",e(u).x+e(u).width/2),U(D,"y",e(u).y+e(u).height*.4),L(X,e(u).name),U(ie,"x",e(u).x+e(u).width/2),U(ie,"y",e(u).y+e(u).height*.68),L(de,e(O))}),S(x,m)},v=x=>{var m=Sn(),D=o(m);F(()=>{U(m,"x",e(u).x+e(u).width/2),U(m,"y",e(u).y+e(u).height/2),L(D,e(u).name)}),S(x,m)};G(se,x=>{e(O)!==null?x(ue):x(v,-1)})}F(()=>te=Ie(Y,0,"drd-node svelte-1jgcg8n",null,te,{active:e(u).id===t.activeId,static:!t.onselect})),W("click",Y,()=>{var x;return(x=t.onselect)==null?void 0:x.call(t,e(u).id)}),W("keydown",Y,x=>{var m;return x.key==="Enter"&&((m=t.onselect)==null?void 0:m.call(t,e(u).id))}),S(y,Y)}),F(()=>U(C,"viewBox",`${e(a).x??""} ${e(a).y??""} ${e(a).w??""} ${e(a).h??""}`)),mt("wheel",C,b),W("pointerdown",C,c),W("pointermove",C,y=>k(y,y.currentTarget)),W("pointerup",C,h),mt("pointerleave",C,h),S(n,I),Ae()}Te(["pointerdown","pointermove","pointerup","click","keydown"]);const Je=Oe({current:null});var Et=N('<button type="button"> </button>'),jn=N('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),On=N('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Mn=N('<div class="table-host svelte-175p7lt"><!></div>'),Tn=N('<h2 class="svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),Dn=N('<div class="graph-host svelte-175p7lt"><!></div>'),Cn=N(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Nn=N('<h2 class="svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),An=N('<div class="tabs svelte-175p7lt"></div> <div class="stage svelte-175p7lt"><div class="panel svelte-175p7lt"><h2 class="svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <div class="presets svelte-175p7lt"></div> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <input class="val-input mono svelte-175p7lt" type="number"/></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <input class="val-input mono svelte-175p7lt" type="number"/></label> <input id="input2" type="range" class="svelte-175p7lt"/></div> <!> <button type="button" class="open-in-studio svelte-175p7lt">Edit this example in Studio →</button></div> <div class="panel svelte-175p7lt"><!></div></div>',1);function qn(n,t){Ne(t,!0);let r=K(0),a=ke(()=>Le[e(r)]);Ot(()=>{Je.current=e(a)});let i=K(Oe(Le[0].defaultInput1)),s=K(Oe(Le[0].defaultInput2)),d=K("loading the engine…"),b=K(!1),c=!1,k=K(null),h=null,E=K(!0),p=K(null),M=K(Oe([])),R=K(Oe({})),I=K(0),C=ke(()=>e(k)?Dt(e(k)).filter(rn)[0]:null);async function z(g){_(k,await nn(g.dmnXml),!0),h=zt("dmn-xml",JSON.stringify(g.dmnXml))}function J(){if(!h)return;const g=e(a),B={};B[g.input1.name]=e(i),B[g.input2.name]=e(s);const T=Ut(h,JSON.stringify(B)),P=JSON.parse(T);if(g.kind==="graph"){const ge=P.trace&&P.trace.intermediates||{},H={};for(const Z of g.nodes)H[Z.id]=ge[Z.id];_(R,H,!0);return}const Q=P.result;_(M,P.trace&&P.trace.matched_rules||[],!0),_(E,!!Q[g.flagField]),_(p,Q[g.flagField]?Q[g.amountField]:null,!0)}async function y(g){_(r,g,!0);const B=Le[g];_(i,B.defaultInput1,!0),_(s,B.defaultInput2,!0),_(I,0),c&&(await z(B),J())}function u(g){_(i,e(a).presets[g].input1,!0),_(s,e(a).presets[g].input2,!0),_(I,g,!0),J()}function O(){_(I,null),J()}function Y(g,B){const T=g===1?e(a).input1:e(a).input2;let P=parseFloat(B);isNaN(P)&&(P=g===1?e(i):e(s)),P=Math.min(T.max,Math.max(T.min,P)),g===1?_(i,P,!0):_(s,P,!0),_(I,null),J()}const te="bre_studio_handoff";function q(){localStorage.setItem(te,JSON.stringify({dmnXml:e(a).dmnXml})),window.location.href="/bre/studio/"}function ne(g,B){const T=e(a).kind==="graph"?e(a).nodes.find(P=>P.id===g):void 0;return T?T.format(B):String(B)}gt(async()=>{try{await Qt(),c=!0,await z(e(a)),_(d,"compiled and running — real engine, in your browser, zero network calls."),J()}catch(g){_(b,!0),_(d,"engine failed to load: "+((g==null?void 0:g.message)??String(g))),console.error(g)}});var re=An(),se=we(re);he(se,21,()=>Le,xe,(g,B,T)=>{var P=Et();let Q;var ge=o(P);F(()=>{Q=Ie(P,1,"svelte-175p7lt",null,Q,{active:e(r)===T}),L(ge,e(B).title)}),W("click",P,()=>y(T)),S(g,P)});var ue=l(se,2),v=o(ue),x=l(o(v),2),m=o(x),D=l(x,2);he(D,21,()=>e(a).presets,xe,(g,B,T)=>{var P=Et();let Q;var ge=o(P);F(()=>{Q=Ie(P,1,"svelte-175p7lt",null,Q,{active:e(I)===T}),L(ge,e(B).label)}),W("click",P,()=>u(T)),S(g,P)});var X=l(D,2),ie=o(X),de=o(ie),le=l(de),be=l(ie,2),ye=l(X,2),j=o(ye),f=o(j),w=l(f),A=l(j,2),ce=l(ye,2);{var ve=g=>{var B=jn();let T;var P=o(B),Q=o(P),ge=l(P,2),H=o(ge);F(()=>{T=Ie(B,1,"verdict svelte-175p7lt",null,T,{good:e(E),bad:!e(E)}),L(Q,e(E)?e(a).flagLabel.good:e(a).flagLabel.bad),L(H,e(E)&&e(p)!==null?`${e(p)}${e(a).amountUnit}`:"—")}),S(g,B)},fe=g=>{var B=On(),T=o(B),P=o(T),Q=l(T,2),ge=o(Q);F((H,Z)=>{L(P,H),L(ge,Z)},[()=>{var H;return(H=e(a).nodes.find(Z=>Z.id===e(a).terminalNodeId))==null?void 0:H.label},()=>e(R)[e(a).terminalNodeId]!==void 0?ne(e(a).terminalNodeId,e(R)[e(a).terminalNodeId]):"—"]),S(g,B)};G(ce,g=>{e(a).kind==="table"?g(ve):g(fe,-1)})}var $=l(ce,2),me=l(v,2),pe=o(me);{var V=g=>{var B=Tn(),T=l(we(B),2),P=o(T),Q=l(T,2);{var ge=H=>{var Z=Mn(),_e=o(Z);yn(_e,{get decision(){return e(C)},readonly:!0,get matchedRuleIndices(){return e(M)}}),S(H,Z)};G(Q,H=>{e(C)&&H(ge)})}F(()=>L(P,e(d))),S(g,B)},ee=g=>{var B=Nn(),T=l(we(B),2),P=o(T),Q=l(T,2);{var ge=Ee=>{var qe=Dn(),At=o(qe);In(At,{get definitions(){return e(k)},activeId:null,get nodeValues(){return e(R)},formatNodeValue:ne}),S(Ee,qe)};G(Q,Ee=>{e(k)&&Ee(ge)})}var H=l(Q,2),Z=o(H);{var _e=Ee=>{var qe=Cn();S(Ee,qe)},Nt=Ee=>{var qe=Ve("Waiting on the engine…");S(Ee,qe)};G(Z,Ee=>{e(R)[e(a).terminalNodeId]!==void 0?Ee(_e):e(b)||Ee(Nt,1)})}F(()=>L(P,`${e(d)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),S(g,B)};G(pe,g=>{e(a).kind==="table"?g(V):g(ee,-1)})}F(()=>{L(m,e(a).description),L(de,`${e(a).input1.label??""} `),U(le,"min",e(a).input1.min),U(le,"max",e(a).input1.max),U(le,"step",e(a).input1.step),Se(le,e(i)),U(be,"min",e(a).input1.min),U(be,"max",e(a).input1.max),U(be,"step",e(a).input1.step),L(f,`${e(a).input2.label??""} `),U(w,"min",e(a).input2.min),U(w,"max",e(a).input2.max),U(w,"step",e(a).input2.step),Se(w,e(s)),U(A,"min",e(a).input2.min),U(A,"max",e(a).input2.max),U(A,"step",e(a).input2.step)}),W("change",le,g=>Y(1,g.currentTarget.value)),W("input",be,O),Ce(be,()=>e(i),g=>_(i,g)),W("change",w,g=>Y(2,g.currentTarget.value)),W("input",A,O),Ce(A,()=>e(s),g=>_(s,g)),W("click",$,q),S(n,re),Ae()}Te(["click","change","input"]);var Bn=N('<button type="button" class="google-button svelte-11w59y9">Sign in with Google</button> <div class="divider svelte-11w59y9"><span>or</span></div>',1),Pn=N('<label class="svelte-11w59y9">Organization name <input type="text" required="" class="svelte-11w59y9"/></label>'),Fn=N('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),Ln=N('<div class="tabs svelte-11w59y9"><button type="button">Sign up</button> <button type="button">Log in</button></div> <!> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <input type="email" required="" class="svelte-11w59y9"/></label> <label class="svelte-11w59y9">Password <input type="password" required="" minlength="8" class="svelte-11w59y9"/></label> <button type="submit" class="primary svelte-11w59y9"> </button></form> <!>',1),Wn=N('<div class="empty svelte-11w59y9">None yet.</div>'),Jn=N('<li class="mono"> </li>'),zn=N('<ul class="svelte-11w59y9"></ul>'),Un=N('<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span> </span> <button type="button" class="svelte-11w59y9">Log out</button></div> <button type="button" class="primary svelte-11w59y9"> </button> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <!></div></div>'),Kn=N('<div class="error mono svelte-11w59y9"> </div>'),Xn=N('<div class="account-panel svelte-11w59y9"><div class="intro svelte-11w59y9"><h1 class="svelte-11w59y9">Your account</h1> <p class="svelte-11w59y9">Sign up or log in to save Playground rulesets to a real bre-service backend.</p></div> <!> <!></div>');function Vn(n,t){Ne(t,!0);const r="https://api.datalila.com",a="bre_playground_token",i="bre_playground_tenant";let s=K("signup"),d=K(""),b=K(""),c=K(""),k=K(""),h=K(null),E=K(null),p=K(!1),M=K(null),R=K(Oe([])),I=K(!1);gt(()=>{_(h,localStorage.getItem(a),!0),_(E,localStorage.getItem(i),!0),e(h)&&O(),C(),fetch(`${r}/health`).then(v=>v.ok?v.json():null).then(v=>{_(I,!!(v!=null&&v.google_signin_available))}).catch(()=>{})});function C(){const v=window.location.hash;if(!v||!v.includes("google_auth="))return;const x=new URLSearchParams(v.replace(/^#/,"")),m=x.get("google_auth");if(m==="success"){const D=x.get("token"),X=x.get("tenant_id");D&&(_(h,D,!0),_(E,X,!0),localStorage.setItem(a,D),X&&localStorage.setItem(i,X),O())}else m==="error"&&_(M,x.get("message")??"Google sign-in failed.",!0);history.replaceState(null,"",window.location.pathname+window.location.search)}function z(){window.location.href=`${r}/api/v1/auth/oidc/signup/google`}async function J(){_(M,null),_(p,!0);try{if(e(s)==="signup"){const v=await fetch(`${r}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(d),email:e(b),password:e(c)})});if(!v.ok)throw new Error(await v.text());const x=await v.json();_(k,x.api_key,!0),_(E,x.tenant_id,!0),await y()}else await y()}catch(v){_(M,(v==null?void 0:v.message)??String(v),!0)}finally{_(p,!1)}}async function y(){const v=await fetch(`${r}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(b),password:e(c)})});if(!v.ok){const m=await v.text();throw new Error(m||`login failed (HTTP ${v.status}): check email/password`)}const x=await v.json();if(_(h,x.token??x.access_token??x.jwt,!0),!e(h))throw new Error("login succeeded but no token found in response: "+JSON.stringify(x));localStorage.setItem(a,e(h)),e(E)&&localStorage.setItem(i,e(E)),await O()}function u(){_(h,null),_(k,""),localStorage.removeItem(a),localStorage.removeItem(i),_(R,[],!0)}async function O(){if(e(h))try{const v=await fetch(`${r}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${e(h)}`}});if(!v.ok)throw new Error(await v.text());const x=await v.json();_(R,Array.isArray(x)?x.map(m=>m.name??String(m)):[],!0)}catch(v){_(M,"Could not load saved rulesets: "+((v==null?void 0:v.message)??String(v)))}}async function Y(){if(!e(h))return;const v=Je.current;if(!v){_(M,"No example is currently open in Playground to save.");return}_(M,null),_(p,!0);try{const x=await fetch(`${r}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${e(h)}`},body:JSON.stringify({name:v.id,format:"dmn-xml",content:v.dmnXml})});if(!x.ok)throw new Error(await x.text());const m=await x.json();if(m&&typeof m=="object"&&"Err"in m)throw new Error(m.Err);await O()}catch(x){_(M,(x==null?void 0:x.message)??String(x),!0)}finally{_(p,!1)}}var te=Xn(),q=l(o(te),2);{var ne=v=>{var x=Ln(),m=we(x),D=o(m);let X;var ie=l(D,2);let de;var le=l(m,2);{var be=V=>{var ee=Bn(),g=we(ee);W("click",g,z),S(V,ee)};G(le,V=>{e(I)&&V(be)})}var ye=l(le,2),j=o(ye);{var f=V=>{var ee=Pn(),g=l(o(ee));Ce(g,()=>e(d),B=>_(d,B)),S(V,ee)};G(j,V=>{e(s)==="signup"&&V(f)})}var w=l(j,2),A=l(o(w)),ce=l(w,2),ve=l(o(ce)),fe=l(ce,2),$=o(fe),me=l(ye,2);{var pe=V=>{var ee=Fn(),g=l(o(ee),2),B=o(g);F(()=>L(B,e(k))),S(V,ee)};G(me,V=>{e(k)&&V(pe)})}F(()=>{X=Ie(D,1,"svelte-11w59y9",null,X,{active:e(s)==="signup"}),de=Ie(ie,1,"svelte-11w59y9",null,de,{active:e(s)==="login"}),fe.disabled=e(p),L($,e(p)?"Working…":e(s)==="signup"?"Create account":"Log in")}),W("click",D,()=>_(s,"signup")),W("click",ie,()=>_(s,"login")),mt("submit",ye,V=>{V.preventDefault(),J()}),Ce(A,()=>e(b),V=>_(b,V)),Ce(ve,()=>e(c),V=>_(c,V)),S(v,x)},re=v=>{var x=Un(),m=o(x),D=o(m),X=o(D),ie=l(D,2),de=l(m,2),le=o(de),be=l(de,2),ye=l(o(be),2);{var j=w=>{var A=Wn();S(w,A)},f=w=>{var A=zn();he(A,21,()=>e(R),xe,(ce,ve)=>{var fe=Jn(),$=o(fe);F(()=>L($,e(ve))),S(ce,fe)}),S(w,A)};G(ye,w=>{e(R).length===0?w(j):w(f,-1)})}F(()=>{L(X,`Signed in${e(E)?` — tenant ${e(E)}`:""}`),de.disabled=e(p)||!Je.current,L(le,e(p)?"Saving…":Je.current?`Save "${Je.current.title}" to your account`:"Open an example in Playground to save it")}),W("click",ie,u),W("click",de,Y),S(v,x)};G(q,v=>{e(h)?v(re,-1):v(ne)})}var se=l(q,2);{var ue=v=>{var x=Kn(),m=o(x);F(()=>L(m,e(M))),S(v,x)};G(se,v=>{e(M)&&v(ue)})}S(n,te),Ae()}Te(["click"]);function Yn(n,t){let r,a;try{const d=it(n,oe.__wbindgen_malloc,oe.__wbindgen_realloc),b=Pe,c=it(t,oe.__wbindgen_malloc,oe.__wbindgen_realloc),k=Pe,h=oe.compile_ruleset(d,b,c,k);var i=h[0],s=h[1];if(h[3])throw i=0,s=0,Ct(h[2]);return r=i,a=s,rt(i,s)}finally{oe.__wbindgen_free(r,a,1)}}function Hn(n,t){let r,a;try{const d=it(n,oe.__wbindgen_malloc,oe.__wbindgen_realloc),b=Pe,c=it(t,oe.__wbindgen_malloc,oe.__wbindgen_realloc),k=Pe,h=oe.evaluate_ruleset_with_trace(d,b,c,k);var i=h[0],s=h[1];if(h[3])throw i=0,s=0,Ct(h[2]);return r=i,a=s,rt(i,s)}finally{oe.__wbindgen_free(r,a,1)}}function Gn(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,r){throw new Error(rt(t,r))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,r){return rt(t,r)},__wbindgen_init_externref_table:function(){const t=oe.__wbindgen_externrefs,r=t.grow(4);t.set(0,void 0),t.set(r+0,void 0),t.set(r+1,null),t.set(r+2,!0),t.set(r+3,!1)}}}}function rt(n,t){return Zn(n>>>0,t)}let ze=null;function et(){return(ze===null||ze.byteLength===0)&&(ze=new Uint8Array(oe.memory.buffer)),ze}function it(n,t,r){if(r===void 0){const b=Xe.encode(n),c=t(b.length,1)>>>0;return et().subarray(c,c+b.length).set(b),Pe=b.length,c}let a=n.length,i=t(a,1)>>>0;const s=et();let d=0;for(;d<a;d++){const b=n.charCodeAt(d);if(b>127)break;s[i+d]=b}if(d!==a){d!==0&&(n=n.slice(d)),i=r(i,a,a=d+n.length*3,1)>>>0;const b=et().subarray(i+d,i+a),c=Xe.encodeInto(n,b);d+=c.written,i=r(i,a,d,1)>>>0}return Pe=d,i}function Ct(n){const t=oe.__wbindgen_externrefs.get(n);return oe.__externref_table_dealloc(n),t}let tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});tt.decode();const Qn=2146435072;let lt=0;function Zn(n,t){return lt+=t,lt>=Qn&&(tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),tt.decode(),lt=t),tt.decode(et().subarray(n,n+t))}const Xe=new TextEncoder;"encodeInto"in Xe||(Xe.encodeInto=function(n,t){const r=Xe.encode(n);return t.set(r),{read:n.length,written:r.length}});let Pe=0,oe;function $n(n,t){return oe=n.exports,ze=null,oe.__wbindgen_start(),oe}async function ea(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(i){if(n.ok&&r(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i);else throw i}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function r(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function ta(n){if(oe!==void 0)return oe;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=Gn();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:a}=await ea(await n,t);return $n(r)}let ct=null;function na(){return ct||(ct=ta()),ct}const aa=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:Yn,ensureReady:na,evaluate_ruleset_with_trace:Hn},Symbol.toStringTag,{value:"Module"})),ra=Mt(aa),ia={},oa=Object.freeze(Object.defineProperty({__proto__:null,default:ia},Symbol.toStringTag,{value:"Module"})),St=Mt(oa);var ut,kt;function sa(){if(kt)return ut;kt=1;let n,t;try{n=St,t=St}catch{n=null,t=null}function r(s){const d=()=>t.join(t.dirname(s),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(s)?n.readFileSync(s,"utf8"):null},writeRawMetaFile(b){const c=t.dirname(s);n.existsSync(c)||n.mkdirSync(c,{recursive:!0}),n.writeFileSync(s,b,"utf8")},hasBlob(b){return n.existsSync(t.join(d(),`${b}.bin`))},readBlob(b){return n.readFileSync(t.join(d(),`${b}.bin`)).toString("utf8")},writeBlob(b,c){const k=d();n.existsSync(k)||n.mkdirSync(k,{recursive:!0}),n.writeFileSync(t.join(k,`${b}.bin`),c,"utf8")}}}function a(s){const d="bre-js-cache",c=`${s}::meta`,k=y=>`${s}::blob::${y}`;let h=null;const E=new Map;function p(){return new Promise((y,u)=>{const O=indexedDB.open(d,1);O.onupgradeneeded=()=>{O.result.objectStoreNames.contains("kv")||O.result.createObjectStore("kv")},O.onsuccess=()=>y(O.result),O.onerror=()=>u(O.error)})}function M(y,u){return new Promise((O,Y)=>{const q=y.transaction("kv","readonly").objectStore("kv").get(u);q.onsuccess=()=>O(q.result),q.onerror=()=>Y(q.error)})}function R(y,u){return new Promise((O,Y)=>{const q=y.transaction("kv","readonly").objectStore("kv"),ne=IDBKeyRange.bound(u,u+"￿"),re=new Map,se=q.openCursor(ne);se.onsuccess=()=>{const ue=se.result;if(!ue){O(re);return}re.set(ue.key.slice(u.length),ue.value),ue.continue()},se.onerror=()=>Y(se.error)})}function I(y,u,O){return new Promise((Y,te)=>{const q=y.transaction("kv","readwrite");q.objectStore("kv").put(O,u),q.oncomplete=()=>Y(),q.onerror=()=>te(q.error)})}let C=null;function z(){return C||(C=p()),C}return{ready:(async()=>{const y=await z(),u=await M(y,c);u!==void 0&&(h=u);const O=`${s}::blob::`,Y=await R(y,O);for(const[te,q]of Y)E.set(te,q)})(),isSync:!1,readRawMetaFile(){return h},writeRawMetaFile(y){h=y,z().then(u=>I(u,c,y)).catch(u=>{console.error("bre-js: failed to persist cache to IndexedDB:",u)})},hasBlob(y){return E.has(y)},readBlob(y){return E.get(y)},writeBlob(y,u){E.set(y,u),z().then(O=>I(O,k(y),u)).catch(O=>{console.error("bre-js: failed to persist blob to IndexedDB:",O)})}}}function i(s){return typeof window<"u"&&typeof window.indexedDB<"u"?a(s):r(s)}return ut={createCacheStore:i},ut}var dt,Rt;function la(){if(Rt)return dt;Rt=1;const n=ra,{parse:t,stringify:r}=Ft(),a=Lt(),{createCacheStore:i}=sa(),s={test:E=>a.isDecimal(E),stringify:E=>E.toString()};function d(E){if(/^-?\d+$/.test(E)){const p=Number(E);if(Number.isSafeInteger(p))return p}return new a(E)}function b(E){return t(E,void 0,{parseNumber:d})}function c(E,p){return r(E,void 0,p,[s])}class k{constructor({endpoint:p,apiKey:M,tenantId:R,cacheDbPath:I,syncIntervalMs:C=5e3,auditFlushIntervalMs:z=5e3}){if(this.endpoint=p.replace(/\/$/,""),this.apiKey=M,this.tenantId=R||"default",this.cacheDbPath=I||"./bre_js_cache.json",this.syncIntervalMs=C,this.auditFlushIntervalMs=z,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=i(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const J=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,J]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const p=this.store.readRawMetaFile();if(p){const M=b(p);this.rulesetsMeta=M.rulesetsMeta||{},this.auditQueue=M.auditQueue||[];for(const[R,I]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(I.hash)){const C=this.store.readBlob(I.hash);let z;I.format==="dmn-xml"?z=C:z=JSON.parse(C);try{const J=n.compile_ruleset(I.format,JSON.stringify(z));this.rulesetCache[R]=JSON.parse(J)}catch(J){console.error(`Failed to compile cached ruleset ${R}:`,J)}}}}catch(p){console.error("Failed to load local cache:",p)}}saveLocalCache(){try{const p={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(c(p,2))}catch(p){console.error("Failed to save local cache:",p)}}async syncOnce(){const p={"X-API-Key":this.apiKey},M=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:p});if(!M.ok)throw new Error(`Server returned error: ${M.status}`);const R=await M.json();for(const I of R){const C=this.rulesetsMeta[I.name];if(!C||C.hash!==I.latest_hash){const z=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${I.latest_hash}`,{headers:p});if(!z.ok)continue;const J=z.headers.get("X-Ruleset-Format")||I.format,y=new TextDecoder("utf-8").decode(await z.arrayBuffer());this.store.writeBlob(I.latest_hash,y),this.rulesetsMeta[I.name]={id:I.id,name:I.name,version:I.version,format:J,hash:I.latest_hash};let u;J==="dmn-xml"?u=y:u=JSON.parse(y);try{const O=n.compile_ruleset(J,JSON.stringify(u));this.rulesetCache[I.name]=JSON.parse(O)}catch(O){console.error(`Compile error for ${I.name}:`,O)}}}this.saveLocalCache()}evaluate(p,M){const R=this.rulesetCache[p],I=this.rulesetsMeta[p];if(!R||!I)throw new Error(`Ruleset not found in cache: ${p}`);try{const C=JSON.stringify(R),z=c(M),J=n.evaluate_ruleset_with_trace(C,z),y=b(J),u=y.result,O=y.trace;return this.queueAuditLog(p,M,u,!0,null,O),u}catch(C){const z=C.message||String(C);throw this.queueAuditLog(p,M,null,!1,z,{matched_rules:[],duration_us:0}),C}}queueAuditLog(p,M,R,I,C,z){const J=this.rulesetsMeta[p];J&&(this.auditQueue.push({ruleset_id:J.id,version:J.version,definition_hash:J.hash,inputs:M,outputs:R,success:I,error_message:C,trace_json:z}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const p=[...this.auditQueue],M={"X-API-Key":this.apiKey,"Content-Type":"application/json"},R=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:M,body:c({logs:p})});if(R.ok)this.auditQueue=this.auditQueue.slice(p.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${R.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(p=>console.error("JS Client sync failed:",p))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(p=>console.error("JS Client audit flush failed:",p))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class h{constructor({policy:p={},defaultRoute:M="local",local:R,remote:I}={}){this.policy=p,this.defaultRoute=M,R instanceof k?this.localClient=R:R?this.localClient=new k(R):this.localClient=null,I?(this.remoteEndpoint=I.endpoint.replace(/\/$/,""),this.remoteApiKey=I.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(p){return this.policy[p]||this.defaultRoute}async evaluate(p,M){const R=this.routeFor(p);if(R==="server"||R==="remote")return this.evaluateRemote(p,M);if(R==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${p}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(p,M)}throw new Error(`SmartBreClient: unknown route '${R}' for ruleset '${p}' (expected 'local' or 'server')`)}async evaluateRemote(p,M){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${p}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const R={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},I=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:R,body:c({ruleSet:p,facts:M})});if(!I.ok)throw new Error(`Remote evaluate failed for '${p}': ${I.status} ${await I.text()}`);const C=b(await I.text());if(!C.success)throw new Error(`Remote evaluate failed for '${p}': ${C.error_message}`);return C.output_payload}close(){this.localClient&&this.localClient.close()}}return dt={BreClient:k,SmartBreClient:h,Decimal:a},dt}var It=la(),ca=N('<div class="error svelte-1yde3g3"> </div>'),ua=N('<div class="result"><div class="result-label svelte-1yde3g3">client.evaluate() returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),da=N(`<div class="sandbox svelte-1yde3g3"><h2 class="svelte-1yde3g3">Try the JS / TS SDK</h2> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip.</p> <div class="grid svelte-1yde3g3"><div class="panel svelte-1yde3g3"><h3 class="svelte-1yde3g3">Code</h3> <pre class="code svelte-1yde3g3"> </pre></div> <div class="panel svelte-1yde3g3"><h3 class="svelte-1yde3g3">Live inputs</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <input type="number" step="0.01" min="0" max="0.6" class="svelte-1yde3g3"/></label> <label class="svelte-1yde3g3">Credit score <input type="number" step="5" min="500" max="850" class="svelte-1yde3g3"/></label> <div class="status svelte-1yde3g3"> </div> <!> <!></div></div></div>`);function pa(n,t){Ne(t,!0);let r=K("Registering local sandbox..."),a=K(!1),i=K(.28),s=K(780),d=K(null),b=K(null),c=null,k=ke(()=>`import { BreClient } from 'datalila-bre';

const client = new BreClient({
  endpoint: 'https://api.datalila.com',   // <- swap this one line for production
  apiKey: 'YOUR_API_KEY',
});
await client.ready;
await client.syncOnce();                  // pulls your registered rulesets

const result = client.evaluate('mortgage_eligibility', {
  dti: ${e(i)},
  credit_score: ${e(s)},
});
console.log(result); // { approved: ..., amount: ... }`);async function h(){if(!("serviceWorker"in navigator)){_(b,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){_(r,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function E(){_(b,null);try{_(r,"Running real datalila-bre code against the local sandbox..."),c=new It.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await c.ready,await c.syncOnce(),_(d,c.evaluate("mortgage_eligibility",{dti:e(i),credit_score:e(s)}),!0),_(r,"Done -- zero network calls left the browser."),_(a,!0)}catch(v){_(b,(v==null?void 0:v.message)??String(v),!0),_(r,"Failed.")}}function p(){if(c)try{_(d,c.evaluate("mortgage_eligibility",{dti:e(i),credit_score:e(s)}),!0),_(b,null)}catch(v){_(b,(v==null?void 0:v.message)??String(v),!0)}}gt(async()=>{var v;await h(),(v=navigator.serviceWorker)!=null&&v.controller&&await E()});var M=da(),R=l(o(M),4),I=o(R),C=l(o(I),2),z=o(C),J=l(I,2),y=l(o(J),2),u=l(o(y)),O=l(y,2),Y=l(o(O)),te=l(O,2),q=o(te),ne=l(te,2);{var re=v=>{var x=ca(),m=o(x);F(()=>L(m,e(b))),S(v,x)};G(ne,v=>{e(b)&&v(re)})}var se=l(ne,2);{var ue=v=>{var x=ua(),m=l(o(x),2),D=o(m);F(X=>L(D,X),[()=>JSON.stringify(e(d),(X,ie)=>{var de,le;return(le=(de=It.Decimal).isDecimal)!=null&&le.call(de,ie)?ie.toString():ie},2)]),S(v,x)};G(se,v=>{e(d)&&v(ue)})}F(()=>{L(z,e(k)),L(q,e(r))}),W("input",u,p),Ce(u,()=>e(i),v=>_(i,v)),W("input",Y,p),Ce(Y,()=>e(s),v=>_(s,v)),S(n,M),Ae()}Te(["input"]);const He=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
use serde_json::json;

fn main() {
    // Same DMN XML every other language's example evaluates (BRE-089: one
    // shared piece of logic across all 8 targets so a reader can compare).
    let dmn_xml = include_str!("../../mortgage_eligibility.dmn");

    // "dmn-xml" hands the raw XML straight to bre-core's DMN parser.
    let ruleset = Engine::compile("dmn-xml", &json!(dmn_xml))
        .expect("failed to compile mortgage_eligibility.dmn");

    let strong = json!({ "dti": 0.30, "credit_score": 760 });
    let result_strong = Engine::evaluate(&ruleset, &strong).unwrap();
    println!("Strong applicant  {} -> {}", strong, result_strong);

    let weak = json!({ "dti": 0.55, "credit_score": 600 });
    let result_weak = Engine::evaluate(&ruleset, &weak).unwrap();
    println!("Weak applicant    {} -> {}", weak, result_weak);
}`,runSteps:["cd docs/sdk-examples/rust",`# Cargo.toml points bre-core = { path = "../../../bre-core" } -- that's the entire "install" step.`,"cargo run"],output:`Strong applicant  {"credit_score":760,"dti":0.3} -> {"amount":3.5,"approved":true}
Weak applicant    {"credit_score":600,"dti":0.55} -> {"amount":0,"approved":false}`,note:'There is no separate Rust "SDK" package -- bre-core is the engine crate itself, so using it from Rust is literally adding it as a dependency.'},{id:"js",label:"JavaScript",packageName:"datalila-bre (bre-js)",language:"javascript",sourcePath:"docs/sdk-examples/js/example.js",code:`const fs = require('fs');
const path = require('path');
// The same module bre-js's own BreClient requires internally
// (bre-js/index.js: require('../bre-core/pkg/bre_core.js')).
const breCore = require('../../../bre-core/pkg/bre_core.js');

// Same DMN XML every other language's example evaluates (BRE-089).
const dmnXml = fs.readFileSync(path.join(__dirname, '..', 'mortgage_eligibility.dmn'), 'utf8');

const compiled = breCore.compile_ruleset('dmn-xml', JSON.stringify(dmnXml));

const strong = { dti: 0.30, credit_score: 760 };
const weak = { dti: 0.55, credit_score: 600 };

const resultStrong = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(strong)));
const resultWeak = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(weak)));

console.log('Strong applicant', strong, '->', resultStrong);
console.log('Weak applicant  ', weak, '->', resultWeak);`,runSteps:["cd docs/sdk-examples/js","# Uses ../../../bre-core/pkg/bre_core.js directly (built via scripts/rebuild_bindings.sh),","# the same module bre-js's own BreClient requires internally -- no npm install needed here.","node example.js"],output:`Strong applicant { dti: 0.3, credit_score: 760 } -> { amount: 3.5, approved: true }
Weak applicant   { dti: 0.55, credit_score: 600 } -> { amount: 0, approved: false }`,note:"The full BreClient class needs a running bre-service instance to sync rulesets and upload audit logs (see bre-js/test.js). This calls bre-core's compiled WASM module directly -- exactly what BreClient does internally -- for a real example with nothing to stand up first."},{id:"ts",label:"TypeScript",packageName:"datalila-bre (bre-js)",language:"typescript",sourcePath:"docs/sdk-examples/ts/example.ts",code:`// bre-js does not yet ship its own index.d.ts (BRE-087, still open),
// so this declares minimal ambient types for the two WASM functions used.
declare module '../../../bre-core/pkg/bre_core.js' {
    export function compile_ruleset(format: string, definitionJson: string): string;
    export function evaluate_ruleset(rulesetJson: string, contextJson: string): string;
}

import * as fs from 'fs';
import * as path from 'path';
import * as breCore from '../../../bre-core/pkg/bre_core.js';

interface MortgageInput { dti: number; credit_score: number; }

const dmnXml: string = fs.readFileSync(path.join(__dirname, '..', 'mortgage_eligibility.dmn'), 'utf8');
const compiled: string = breCore.compile_ruleset('dmn-xml', JSON.stringify(dmnXml));

const strong: MortgageInput = { dti: 0.30, credit_score: 760 };
const weak: MortgageInput = { dti: 0.55, credit_score: 600 };

const resultStrong = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(strong)));
const resultWeak = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(weak)));

console.log('Strong applicant', strong, '->', resultStrong);
console.log('Weak applicant  ', weak, '->', resultWeak);`,runSteps:["cd docs/sdk-examples/ts","npm install --save-dev typescript @types/node","npx tsc example.ts --target ES2020 --module commonjs --esModuleInterop --skipLibCheck --types node","node example.js"],output:`Strong applicant { dti: 0.3, credit_score: 760 } -> { amount: 3.5, approved: true }
Weak applicant   { dti: 0.55, credit_score: 600 } -> { amount: 0, approved: false }`,note:"Same npm package as the JS example, same no-server-needed pattern. bre-js does not have hand-written TypeScript types yet (tracked by BRE-087) -- this file declares just enough ambient typing to compile cleanly."},{id:"python",label:"Python",packageName:"datalila-bre (bre-python)",language:"python",sourcePath:"docs/sdk-examples/python/example.py",code:`import os
import datalila_bre

# Same DMN XML every other language's example evaluates (BRE-089).
_here = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(_here, "..", "mortgage_eligibility.dmn")) as f:
    dmn_xml = f.read()

strong = {"dti": 0.30, "credit_score": 760}
weak = {"dti": 0.55, "credit_score": 600}

result_strong = datalila_bre.evaluate_dmn(dmn_xml, strong)
result_weak = datalila_bre.evaluate_dmn(dmn_xml, weak)

print(f"Strong applicant {strong} -> {result_strong}")
print(f"Weak applicant   {weak} -> {result_weak}")`,runSteps:["python3 -m venv .venv && source .venv/bin/activate","pip install maturin requests","(cd bre-python && maturin develop --release)   # builds the datalila_bre native extension","cd docs/sdk-examples/python","python3 example.py"],output:`Strong applicant {'dti': 0.3, 'credit_score': 760} -> {'amount': Decimal('3.5'), 'approved': True}
Weak applicant   {'dti': 0.55, 'credit_score': 600} -> {'amount': 0, 'approved': False}`,note:"bre-python ships a module-level evaluate_dmn(xml, context) helper that compiles and evaluates raw DMN XML in one call, entirely offline. Numeric results come back as decimal.Decimal to preserve exact precision."},{id:"go",label:"Go",packageName:"datalila-bre (bre-go)",language:"go",sourcePath:"docs/sdk-examples/go/main.go",code:`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	bre "datalila-bre"
)

// Same dti/credit_score -> approved/amount decision logic as
// mortgage_eligibility.dmn, expressed as json-table (see note below).
const rulesetJSON = \`{
  "name": "mortgage_eligibility", "hit_policy": "FIRST",
  "inputs": [{"name":"dti","type_ref":"number"},{"name":"credit_score","type_ref":"number"}],
  "outputs": [{"name":"approved","type_ref":"boolean"},{"name":"amount","type_ref":"number"}],
  "rules": [
    {"input_entries":["<= 0.36",">= 740"],"output_entries":["true","3.5"]},
    {"input_entries":["<= 0.43",">= 680"],"output_entries":["true","4.2"]},
    {"input_entries":["-","-"],"output_entries":["false","0"]}
  ]
}\`

func main() {
	serverAddr := "http://127.0.0.1:8094"

	var content interface{}
	json.Unmarshal([]byte(rulesetJSON), &content)
	reqBytes, _ := json.Marshal(map[string]interface{}{
		"name": "mortgage_eligibility", "format": "json-table", "content": content,
	})
	http.Post(serverAddr+"/api/v1/rulesets/register", "application/json", bytes.NewReader(reqBytes))

	wasmBytes, _ := os.ReadFile("../../../bre-core/pkg/bre_core_bg.wasm")
	client, _ := bre.NewBreClient(serverAddr, "dummy_key", "default", "./go_example_cache", wasmBytes)
	defer client.Close()
	client.SyncOnce()

	strong := map[string]interface{}{"dti": 0.30, "credit_score": 760}
	resultStrong, _ := client.Evaluate("mortgage_eligibility", strong)
	fmt.Printf("Strong applicant %v -> %v\\n", strong, resultStrong)

	weak := map[string]interface{}{"dti": 0.55, "credit_score": 600}
	resultWeak, _ := client.Evaluate("mortgage_eligibility", weak)
	fmt.Printf("Weak applicant   %v -> %v\\n", weak, resultWeak)
}`,runSteps:["# 1. Start a local bre-service (bre-go's public API only loads rulesets over HTTP):","JWT_SECRET=dev BRE_MASTER_ENCRYPTION_KEY=0000000000000000000000000000000000000000000000000000000000000001 \\","  cargo run --release --package bre-service --bin bre-service","","# 2. In another terminal:","cd docs/sdk-examples/go","go run main.go"],output:`Strong applicant map[credit_score:760 dti:0.3] -> map[amount:3.5 approved:true]
Weak applicant   map[credit_score:600 dti:0.55] -> map[amount:0 approved:false]`,note:"bre-go's public BreClient only populates its ruleset cache via SyncOnce() against a running bre-service -- there's no exported in-process compile call. This example also uses json-table instead of the shared DMN file: registering as dmn-xml and syncing through bre-go hits a real bug (raw XML text gets passed unencoded into a JSON parser). See the Discussion Log entry in BRE-089 for the reproduction; flagged for a follow-up ticket, not fixed here."},{id:"java",label:"Java",packageName:"com.datalila.bre:sdk (bre-java, backed by bre-jni)",language:"java",sourcePath:"docs/sdk-examples/java/Example.java",code:`import com.datalila.bre.BreClient;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

public class Example {
    public static void main(String[] args) throws Exception {
        String dmnXml = Files.readString(Path.of("../mortgage_eligibility.dmn"));

        BreClient client = BreClient.builder()
                .endpoint("http://localhost:8080") // never contacted: sync/audit disabled below
                .cachePath("java_example_cache.sqlite")
                .syncIntervalMs(0)
                .auditFlushIntervalMs(0)
                .build();

        String compiled = client.compile("dmn-xml", dmnXml);
        client.registerRuleset("mortgage_eligibility", compiled);

        Map<String, Object> strong = new HashMap<>();
        strong.put("dti", 0.30);
        strong.put("credit_score", 760);
        System.out.println("Strong applicant " + strong + " -> " +
            client.evaluate("mortgage_eligibility", strong));

        Map<String, Object> weak = new HashMap<>();
        weak.put("dti", 0.55);
        weak.put("credit_score", 600);
        System.out.println("Weak applicant   " + weak + " -> " +
            client.evaluate("mortgage_eligibility", weak));

        client.close();
    }
}`,runSteps:["# 1. Build the native library bre-java's BreClient loads via JNI:","cargo build -p bre-jni","","# 2. Build the sdk JAR + fetch its Gradle dependencies:","(cd bre-java && gradle -q :sdk:jar)","","# 3. Compile and run Example.java against that jar + its runtime deps","#    (jackson-databind, jackson-core, jackson-annotations, slf4j-api, sqlite-jdbc)","#    with -Djava.library.path pointing at target/debug so BreClient finds bre_jni:","cd docs/sdk-examples/java","javac -cp <classpath> Example.java",'java -Djava.library.path=../../../target/debug -cp "<classpath>:." Example'],output:`Strong applicant {credit_score=760, dti=0.3} -> {amount=3.5, approved=true}
Weak applicant   {credit_score=600, dti=0.55} -> {amount=0, approved=false}`,note:"BreClient.compile()/registerRuleset() run entirely offline (no bre-service needed) -- setting syncIntervalMs(0) and auditFlushIntervalMs(0) disables the background HTTP loops that would otherwise expect a real endpoint."},{id:"kotlin",label:"Kotlin",packageName:"No dedicated package -- JVM interop against bre-java",language:"kotlin",sourcePath:"docs/sdk-examples/kotlin/example.kts",code:`import com.datalila.bre.BreClient
import java.io.File
import java.nio.file.Files
import java.nio.file.Path

val dmnXml = Files.readString(Path.of("../mortgage_eligibility.dmn"))

val client = BreClient.builder()
    .endpoint("http://localhost:8080") // never contacted: sync/audit disabled below
    .cachePath("kotlin_example_cache.sqlite")
    .syncIntervalMs(0)
    .auditFlushIntervalMs(0)
    .build()

val compiled = client.compile("dmn-xml", dmnXml)
client.registerRuleset("mortgage_eligibility", compiled)

val strong = mapOf("dti" to 0.30, "credit_score" to 760)
println("Strong applicant $strong -> \${client.evaluate("mortgage_eligibility", strong)}")

val weak = mapOf("dti" to 0.55, "credit_score" to 600)
println("Weak applicant   $weak -> \${client.evaluate("mortgage_eligibility", weak)}")

client.close()`,runSteps:["# Same jar + native lib as the Java example above (cargo build -p bre-jni; gradle :sdk:jar), then:","cd docs/sdk-examples/kotlin",'JAVA_OPTS="-Djava.library.path=../../../target/debug" kotlinc -classpath <classpath> -script example.kts'],output:`Strong applicant {dti=0.3, credit_score=760} -> {amount=3.5, approved=true}
Weak applicant   {dti=0.55, credit_score=600} -> {amount=0, approved=false}`,note:"There is no dedicated Kotlin package for bre -- Kotlin has first-class interop with any Java class, so this calls straight into the same com.datalila.bre.BreClient JAR the Java example uses."},{id:"clojure",label:"Clojure",packageName:"No dedicated package -- JVM interop against bre-java",language:"clojure",sourcePath:"docs/sdk-examples/clojure/example.clj",code:`(import 'com.datalila.bre.BreClient
        'java.io.File
        'java.nio.file.Files
        'java.nio.file.Path)

(defn- to-string-keyed-map [m]
  (java.util.HashMap. ^java.util.Map (into {} (map (fn [[k v]] [(name k) v]) m))))

(def dmn-xml (Files/readString (Path/of "../mortgage_eligibility.dmn" (make-array String 0))))

(def client
  (-> (BreClient/builder)
      (.endpoint "http://localhost:8080") ; never contacted: sync/audit disabled below
      (.cachePath "clojure_example_cache.sqlite")
      (.syncIntervalMs 0)
      (.auditFlushIntervalMs 0)
      (.build)))

(def compiled (.compile client "dmn-xml" dmn-xml))
(.registerRuleset client "mortgage_eligibility" compiled)

(def strong {:dti 0.30 :credit_score 760})
(println "Strong applicant" strong "->"
  (into {} (.evaluate client "mortgage_eligibility" (to-string-keyed-map strong))))

(def weak {:dti 0.55 :credit_score 600})
(println "Weak applicant  " weak "->"
  (into {} (.evaluate client "mortgage_eligibility" (to-string-keyed-map weak))))

(.close client)`,runSteps:["# Same jar + native lib as the Java example above (cargo build -p bre-jni; gradle :sdk:jar), then:","brew install clojure/tools/clojure   # or your platform's Clojure CLI install","cd docs/sdk-examples/clojure",'JAVA_OPTS="-Djava.library.path=../../../target/debug" clojure -Scp <classpath> -M example.clj'],output:`Strong applicant {:dti 0.3, :credit_score 760} -> {amount 3.5M, approved true}
Weak applicant   {:dti 0.55, :credit_score 600} -> {amount 0, approved false}`,note:"Same story as Kotlin: no dedicated Clojure package, just ordinary Java interop (import, .method) against the bre-java sdk JAR."},{id:"mode-c-tier1",label:"Mixed Mode (Tier 1)",packageName:"bre-core WASM (local) + bre-service REST (remote) -- one Node process",language:"javascript",sourcePath:"docs/sdk-examples/mode-c-tier1/example.js",code:`// "Mode C, Tier 1" (BRE-092): an application can already choose, per
// ruleset name, whether to evaluate locally (Mode B, in-process WASM, no
// server) or remotely (Mode A, a real REST call to bre-service) -- in the
// SAME process. Nothing new needed: both call surfaces already exist.
const fs = require('fs');
const breCore = require('../../../bre-core/pkg/bre_core.js');
const SERVICE_ADDR = process.env.BRE_SERVICE_ADDR || 'http://127.0.0.1:8097';

// The whole pattern is this table + a branch.
const ROUTE = {
  mortgage_eligibility: 'local',  // Mode B
  loyalty_discount: 'remote',     // Mode A
};

// ---- Mode B: local WASM path, no server ----
const dmnXml = fs.readFileSync('../mortgage_eligibility.dmn', 'utf8');
const compiledMortgage = breCore.compile_ruleset('dmn-xml', JSON.stringify(dmnXml));
function evaluateLocal(name, facts) {
  return JSON.parse(breCore.evaluate_ruleset(compiledMortgage, JSON.stringify(facts)));
}

// ---- Mode A: remote REST call to a real bre-service instance ----
async function evaluateRemote(name, facts) {
  const resp = await fetch(\`\${SERVICE_ADDR}/api/v1/decide\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ruleSet: name, facts }),
  });
  const body = await resp.json();
  return body.output_payload;
}

// ---- The router: pick a backend per ruleset name ----
async function evaluateRuleset(name, facts) {
  const mode = ROUTE[name] || 'local';
  return mode === 'remote' ? evaluateRemote(name, facts) : evaluateLocal(name, facts);
}
// (registerRemoteRuleset() + the two evaluateRuleset() calls per ruleset
// are omitted here for length -- see the full runnable file at the path
// above for the exact commands and every call made.)`,runSteps:["# Terminal 1 -- start a real bre-service instance:","JWT_SECRET=... BRE_MASTER_ENCRYPTION_KEY=... PORT=8097 GRPC_PORT=50057 \\","  DATABASE_URL=/tmp/bre_mode_c_tier1_example.sqlite ./target/release/bre-service","","# Terminal 2:","cd docs/sdk-examples/mode-c-tier1","BRE_SERVICE_ADDR=http://127.0.0.1:8097 node example.js"],output:`Using bre-service at http://127.0.0.1:8097 (start it first -- see README.md)
Registered loyalty_discount on bre-service.

[local  / Mode B / WASM, no server]  mortgage_eligibility { dti: 0.3, credit_score: 760 } -> { amount: 3.5, approved: true }
[local  / Mode B / WASM, no server]  mortgage_eligibility { dti: 0.55, credit_score: 600 } -> { amount: 0, approved: false }
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 6, orders_last_year: 25 } -> { discount_pct: 15, tier: 'gold' }
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Not a new feature -- this is a documentation/example ticket (BRE-092). Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, and BRE-093/BRE-094 for the (not-yet-built) policy-driven and single-graph variants of this idea.'}],va={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},ma={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function pt(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ge=" ";function ga(n,t){const r=ma[t]??"//",a=n.indexOf(r),i=a>=0?n.slice(0,a):n,s=a>=0?n.slice(a):"",d=[],b=i.replace(/"[^"]*"|'[^']*'/g,E=>(d.push(E),Ge+"STR"+(d.length-1)+Ge));let c=pt(b);c=c.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const k=va[t]??[];if(k.length){const E=new RegExp(`\\b(${k.join("|")})\\b`,"g");c=c.replace(E,'<span class="tok-kw">$1</span>')}const h=new RegExp(Ge+"STR(\\d+)"+Ge,"g");return c=c.replace(h,(E,p)=>`<span class="tok-str">${pt(d[Number(p)])}</span>`),s&&(c+=`<span class="tok-comment">${pt(s)}</span>`),c}function fa(n,t){return n.split(`
`).map(r=>ga(r,t)).join(`
`)}var _a=N('<button type="button"> </button>'),ba=N('<p class="note svelte-65i1x3"> </p>'),ya=N(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="svelte-65i1x3">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">website/src/lib/dmn-examples/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav class="tabs svelte-65i1x3" aria-label="SDK language"></nav> <section class="panel svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></section></div>`);function ha(n,t){Ne(t,!0);let r=K(Oe(He[0].id)),a=ke(()=>He.find(q=>q.id===e(r))??He[0]);var i=ya(),s=l(o(i),2);he(s,21,()=>He,q=>q.id,(q,ne)=>{var re=_a();let se;var ue=o(re);F(()=>{se=Ie(re,1,"tab svelte-65i1x3",null,se,{active:e(ne).id===e(r)}),L(ue,e(ne).label)}),W("click",re,()=>_(r,e(ne).id,!0)),S(q,re)});var d=l(s,2),b=o(d),c=o(b),k=o(c),h=l(c,2),E=o(h),p=l(b,2);{var M=q=>{var ne=ba(),re=o(ne);F(()=>L(re,e(a).note)),S(q,ne)};G(p,q=>{e(a).note&&q(M)})}var R=l(p,2),I=o(R),C=l(R,2),z=o(C);Wt(z,()=>fa(e(a).code,e(a).language),!0);var J=l(C,4),y=o(J),u=o(y),O=l(J,4),Y=o(O),te=o(Y);F(q=>{L(k,e(a).label),L(E,e(a).packageName),L(I,`Example (${e(a).sourcePath??""})`),L(u,q),L(te,e(a).output)},[()=>e(a).runSteps.join(`
`)]),S(n,i),Ae()}Te(["click"]);const vt={};var xa=N('<button type="button" class="account-toggle svelte-1n46o8q"> </button>'),jt=N('<div class="account-wrap svelte-1n46o8q"><!></div>'),wa=N("<!> <!>",1),Ea=N('<span class="build-info-detail svelte-1n46o8q">commit <code class="svelte-1n46o8q"></code> </span>'),Sa=N('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><a class="studio-link svelte-1n46o8q" href="/bre/studio/">Open Studio ↗</a> <button type="button" class="studio-link sdk-toggle svelte-1n46o8q"> </button> <button type="button" class="account-toggle svelte-1n46o8q"> </button> <!></nav></header> <main class="svelte-1n46o8q"><!></main> <footer class="fine svelte-1n46o8q">Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!> <span class="build-info">· <button type="button" class="build-info-toggle svelte-1n46o8q">Build info</button> <!></span></footer>',1);function ka(n,t){Ne(t,!0);const r=(vt==null?void 0:vt.VITE_ENABLE_ACCOUNTS)!=="false";let a=K(!1),i=K(!1),s=K(!1),d=K(!1);function b(){_(s,!e(s)),e(s)&&_(d,!1)}function c(){_(d,!e(d)),e(d)&&_(s,!1)}var k=Sa(),h=we(k),E=l(o(h),2),p=l(o(E),2),M=o(p),R=l(p,2),I=o(R),C=l(R,2);{var z=m=>{var D=xa(),X=o(D);F(()=>L(X,e(a)?"Hide Account":"Sign in to save rulesets")),W("click",D,()=>_(a,!e(a))),S(m,D)};G(C,m=>{r&&m(z)})}var J=l(h,2),y=o(J);{var u=m=>{ha(m,{})},O=m=>{var D=jt(),X=o(D);pa(X,{}),S(m,D)},Y=m=>{var D=wa(),X=we(D);{var ie=le=>{var be=jt(),ye=o(be);Vn(ye,{}),S(le,be)};G(X,le=>{e(a)&&le(ie)})}var de=l(X,2);qn(de,{}),S(m,D)};G(y,m=>{e(d)?m(u):e(s)?m(O,1):m(Y,-1)})}var te=l(J,2),q=l(o(te));{var ne=m=>{var D=Ve("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");S(m,D)},re=m=>{var D=Ve("No network calls. No server round-trips.");S(m,D)};G(q,m=>{r?m(ne):m(re,-1)})}var se=l(q,2),ue=l(o(se)),v=l(ue,2);{var x=m=>{var D=Ea(),X=l(o(D));U(X,"title","2fd4290c49031bcdb0f87ba9f4e171483f804200"),X.textContent="2fd4290";var ie=l(X);ie.nodeValue=`,
        built 2026-07-24T00:41:32.518Z`,S(m,D)};G(v,m=>{e(i)&&m(x)})}F(()=>{L(M,e(s)?"Hide SDK Sandbox":"Try the JS/TS SDK"),L(I,e(d)?"Back to Playground":"SDK Docs")}),W("click",p,b),W("click",R,c),W("click",ue,()=>_(i,!e(i))),S(n,k),Ae()}Te(["click"]);Jt(ka,{target:document.getElementById("app")});

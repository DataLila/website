import{s as jt,d as ct,a as je,p as Te,b as ut,c as d,e as o,i as $,f as he,g as w,t as B,h as e,j as P,k as ke,l as Ee,m as J,n as xe,o as Re,q as Je,r as De,u as Se,v as Ot,w as Mt,x as C,y as V,z as Oe,A as Tt,B as b,C as X,D as ot,E as qe,F as lt,G as Me,H as xt,I as Dt,J as Ct,K as Nt,L as At}from"./vendor-CY_2qwWA.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();function qt(n,t){let i,a;try{const p=Qe(n,ie.__wbindgen_malloc,ie.__wbindgen_realloc),g=Ne,c=Qe(t,ie.__wbindgen_malloc,ie.__wbindgen_realloc),S=Ne,h=ie.compile_ruleset(p,g,c,S);var r=h[0],s=h[1];if(h[3])throw r=0,s=0,wt(h[2]);return i=r,a=s,He(r,s)}finally{ie.__wbindgen_free(i,a,1)}}function Bt(n,t){let i,a;try{const p=Qe(n,ie.__wbindgen_malloc,ie.__wbindgen_realloc),g=Ne,c=Qe(t,ie.__wbindgen_malloc,ie.__wbindgen_realloc),S=Ne,h=ie.evaluate_ruleset_with_trace(p,g,c,S);var r=h[0],s=h[1];if(h[3])throw r=0,s=0,wt(h[2]);return i=r,a=s,He(r,s)}finally{ie.__wbindgen_free(i,a,1)}}function Pt(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(He(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,i){return He(t,i)},__wbindgen_init_externref_table:function(){const t=ie.__wbindgen_externrefs,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)}}}}function He(n,t){return Lt(n>>>0,t)}let Pe=null;function Ke(){return(Pe===null||Pe.byteLength===0)&&(Pe=new Uint8Array(ie.memory.buffer)),Pe}function Qe(n,t,i){if(i===void 0){const g=Le.encode(n),c=t(g.length,1)>>>0;return Ke().subarray(c,c+g.length).set(g),Ne=g.length,c}let a=n.length,r=t(a,1)>>>0;const s=Ke();let p=0;for(;p<a;p++){const g=n.charCodeAt(p);if(g>127)break;s[r+p]=g}if(p!==a){p!==0&&(n=n.slice(p)),r=i(r,a,a=p+n.length*3,1)>>>0;const g=Ke().subarray(r+p,r+a),c=Le.encodeInto(n,g);p+=c.written,r=i(r,a,p,1)>>>0}return Ne=p,r}function wt(n){const t=ie.__wbindgen_externrefs.get(n);return ie.__externref_table_dealloc(n),t}let Xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Xe.decode();const Ft=2146435072;let $e=0;function Lt(n,t){return $e+=t,$e>=Ft&&(Xe=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Xe.decode(),$e=t),Xe.decode(Ke().subarray(n,n+t))}const Le=new TextEncoder;"encodeInto"in Le||(Le.encodeInto=function(n,t){const i=Le.encode(n);return t.set(i),{read:n.length,written:i.length}});let Ne=0,ie;function Wt(n,t){return ie=n.exports,Pe=null,ie.__wbindgen_start(),ie}async function Jt(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(r){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function zt(n){if(ie!==void 0)return ie;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-DaM9FmR0.wasm",import.meta.url));const t=Pt();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await Jt(await n,t);return Wt(i)}const Ut=`<?xml version="1.0" encoding="UTF-8"?>
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
        <inputEntry id="IE_1_1"><text>&lt;= 0.36</text></inputEntry>
        <inputEntry id="IE_1_2"><text>&gt;= 740</text></inputEntry>
        <outputEntry id="OE_1_1"><text>true</text></outputEntry>
        <outputEntry id="OE_1_2"><text>3.5</text></outputEntry>
      </rule>
      <rule id="Rule_2">
        <inputEntry id="IE_2_1"><text>&lt;= 0.43</text></inputEntry>
        <inputEntry id="IE_2_2"><text>&gt;= 680</text></inputEntry>
        <outputEntry id="OE_2_1"><text>true</text></outputEntry>
        <outputEntry id="OE_2_2"><text>4.2</text></outputEntry>
      </rule>
      <rule id="Rule_3">
        <inputEntry id="IE_3_1"><text>-</text></inputEntry>
        <inputEntry id="IE_3_2"><text>-</text></inputEntry>
        <outputEntry id="OE_3_1"><text>false</text></outputEntry>
        <outputEntry id="OE_3_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,Kt=`<?xml version="1.0" encoding="UTF-8"?>
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
        <inputEntry id="IE_4_1"><text>-</text></inputEntry>
        <inputEntry id="IE_4_2"><text>-</text></inputEntry>
        <outputEntry id="OE_4_1"><text>false</text></outputEntry>
        <outputEntry id="OE_4_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,Xt=`<?xml version="1.0" encoding="UTF-8"?>
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
        <inputEntry id="IE_4_1"><text>-</text></inputEntry>
        <inputEntry id="IE_4_2"><text>-</text></inputEntry>
        <outputEntry id="OE_4_1"><text>false</text></outputEntry>
        <outputEntry id="OE_4_2"><text>0</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
</definitions>
`,Vt=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Be=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:Ut,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:Kt,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:Xt,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:Vt,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"}],Et=new jt;async function Yt(n){const{rootElement:t}=await Et.fromXML(n);return t}function Ie(n,t={}){return Et.create(n,t)}const Ht=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function St(n){return n.get("drgElement")||[]}function Qt(n){return n.$type==="dmn:Decision"}function Gt(n){const t=[],i=a=>a.replace(/^#/,"");for(const a of n.get("informationRequirement")||[]){const r=a.get("requiredInput")||a.get("requiredDecision");r&&r.href&&t.push(i(r.href))}for(const a of n.get("knowledgeRequirement")||[]){const r=a.get("requiredKnowledge");r&&r.href&&t.push(i(r.href))}return t}const et={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},dt={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function Zt(n){const t=St(n),i=new ct.graphlib.Graph;i.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),i.setDefaultEdgeLabel(()=>({}));for(const c of t){const S=et[c.$type];if(!S)continue;const h=dt[S];i.setNode(c.id,{...h})}const a=[];for(const c of t)if(et[c.$type])for(const S of Gt(c))i.node(S)&&(i.setEdge(S,c.id),a.push([S,c.id]));ct.layout(i);const r=[];let s=0,p=0;for(const c of t){const S=et[c.$type];if(!S)continue;const h=i.node(c.id),y=dt[S];r.push({id:c.id,name:c.get("name")||c.id,type:S,x:h.x-y.width/2,y:h.y-y.height/2,width:y.width,height:y.height,element:c}),s=Math.max(s,h.x+y.width/2),p=Math.max(p,h.y+y.height/2)}const g=a.map(([c,S])=>{var h;return{from:c,to:S,points:(((h=i.edge(c,S))==null?void 0:h.points)||[]).map(y=>({x:y.x,y:y.y}))}});return{nodes:r,edges:g,width:s+40,height:p+40}}var $t=C('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),en=C("<option> </option>"),tn=C('<select class="svelte-1qozfr"></select>'),nn=C('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),pt=C('<div class="dt-col-label svelte-1qozfr"> </div>'),an=C('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),rn=C('<th class="dt-input-col svelte-1qozfr"><!></th>'),sn=C('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),on=C('<th class="dt-output-col svelte-1qozfr"><!></th>'),ln=C('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),mt=C('<input class="svelte-1qozfr"/>'),vt=C('<td class="svelte-1qozfr"><!></td>'),cn=C('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),un=C('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr></thead><tbody></tbody></table></div></div>');function dn(n,t){Te(t,!0);let i=ut(t,"readonly",3,!1),a=ut(t,"matchedRuleIndices",19,()=>[]),r=Se(()=>t.decision.get("decisionLogic")),s=Se(()=>e(r).get("input")),p=Se(()=>e(r).get("output")),g=Se(()=>e(r).get("rule"));function c(E){var v;e(r).set("hitPolicy",E),(v=t.onchange)==null||v.call(t)}function S(E,v){var x;E.set("label",v),(x=t.onchange)==null||x.call(t)}function h(E,v){var x;E.get("inputExpression").set("text",v),(x=t.onchange)==null||x.call(t)}function y(E,v){var x;E.get("inputExpression").set("typeRef",v),(x=t.onchange)==null||x.call(t)}function m(E,v){var x;E.set("name",v),(x=t.onchange)==null||x.call(t)}function O(E,v){var x;E.set("label",v),(x=t.onchange)==null||x.call(t)}function j(E,v){var x;E.set("typeRef",v),(x=t.onchange)==null||x.call(t)}function k(E,v,x){var A;E.get("inputEntry")[v].set("text",x),(A=t.onchange)==null||A.call(t)}function T(E,v,x){var A;E.get("outputEntry")[v].set("text",x),(A=t.onchange)==null||A.call(t)}function z(){var x;const E=Ie("dmn:LiteralExpression",{text:""}),v=Ie("dmn:InputClause",{label:"New Input",inputExpression:E});e(r).get("input").push(v);for(const A of e(g))A.get("inputEntry").push(Ie("dmn:UnaryTests",{text:"-"}));(x=t.onchange)==null||x.call(t)}function L(E){var v;e(r).get("input").splice(E,1);for(const x of e(g))x.get("inputEntry").splice(E,1);(v=t.onchange)==null||v.call(t)}function _(){var v;const E=Ie("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(r).get("output").push(E);for(const x of e(g))x.get("outputEntry").push(Ie("dmn:LiteralExpression",{text:'""'}));(v=t.onchange)==null||v.call(t)}function l(E){var v;e(r).get("output").splice(E,1);for(const x of e(g))x.get("outputEntry").splice(E,1);(v=t.onchange)==null||v.call(t)}function I(){var x;const E=e(s).map(()=>Ie("dmn:UnaryTests",{text:"-"})),v=e(p).map(()=>Ie("dmn:LiteralExpression",{text:'""'}));e(r).get("rule").push(Ie("dmn:DecisionRule",{inputEntry:E,outputEntry:v})),(x=t.onchange)==null||x.call(t)}function Y(E){var v;e(r).get("rule").splice(E,1),(v=t.onchange)==null||v.call(t)}var ae=un(),F=o(ae),ne=o(F),u=d(o(ne));{var R=E=>{var v=$t(),x=o(v);B(A=>P(x,A),[()=>e(r).get("hitPolicy")||"UNIQUE"]),w(E,v)},K=E=>{var v=tn();he(v,21,()=>Ht,xe,(A,oe)=>{var G=en(),pe=o(G),te={};B(()=>{P(pe,e(oe)),te!==(te=e(oe))&&(G.value=(G.__value=e(oe))??"")}),w(A,G)});var x;Ot(v),B(A=>{x!==(x=A)&&(v.value=(v.__value=A)??"",Mt(v,A))},[()=>e(r).get("hitPolicy")||"UNIQUE"]),J("change",v,A=>c(A.currentTarget.value)),w(E,v)};$(u,E=>{i()?E(R):E(K,-1)})}var N=d(ne,2);{var U=E=>{var v=nn(),x=ke(v),A=d(x,2),oe=d(A,2);J("click",x,z),J("click",A,_),J("click",oe,I),w(E,v)};$(N,E=>{i()||E(U)})}var D=d(F,2),H=o(D);let re;var ce=o(H),be=o(ce),de=d(o(be));he(de,17,()=>e(s),xe,(E,v,x)=>{var A=rn(),oe=o(A);{var G=te=>{var le=pt(),me=o(le);B(ve=>P(me,ve),[()=>e(v).get("label")||""]),w(te,le)},pe=te=>{var le=an(),me=ke(le),ve=d(me,2),ge=d(ve,2),f=o(ge),W=d(f,2);B((M,q,Z)=>{Ee(me,M),Ee(ve,q),Ee(f,Z)},[()=>e(v).get("label")||"",()=>e(v).get("inputExpression").get("text")||"",()=>e(v).get("inputExpression").get("typeRef")||""]),J("input",me,M=>S(e(v),M.currentTarget.value)),J("input",ve,M=>h(e(v),M.currentTarget.value)),J("input",f,M=>y(e(v),M.currentTarget.value)),J("click",W,()=>L(x)),w(te,le)};$(oe,te=>{i()?te(G):te(pe,-1)})}w(E,A)});var ye=d(de);he(ye,17,()=>e(p),xe,(E,v,x)=>{var A=on(),oe=o(A);{var G=te=>{var le=pt(),me=o(le);B(ve=>P(me,ve),[()=>e(v).get("label")||""]),w(te,le)},pe=te=>{var le=sn(),me=ke(le),ve=d(me,2),ge=d(ve,2),f=o(ge),W=d(f,2);B((M,q,Z)=>{Ee(me,M),Ee(ve,q),Ee(f,Z)},[()=>e(v).get("label")||"",()=>e(v).get("name")||"",()=>e(v).get("typeRef")||""]),J("input",me,M=>O(e(v),M.currentTarget.value)),J("input",ve,M=>m(e(v),M.currentTarget.value)),J("input",f,M=>j(e(v),M.currentTarget.value)),J("click",W,()=>l(x)),w(te,le)};$(oe,te=>{i()?te(G):te(pe,-1)})}w(E,A)});var _e=d(ce);he(_e,21,()=>e(g),xe,(E,v,x)=>{var A=cn();let oe;var G=o(A),pe=o(G);pe.nodeValue=`${x+1} `;var te=d(pe);{var le=ge=>{var f=ln();J("click",f,()=>Y(x)),w(ge,f)};$(te,ge=>{i()||ge(le)})}var me=d(G);he(me,17,()=>e(v).get("inputEntry"),xe,(ge,f,W)=>{var M=vt(),q=o(M);{var Z=Q=>{var ee=Je();B(fe=>P(ee,fe),[()=>e(f).get("text")||"-"]),w(Q,ee)},ue=Q=>{var ee=mt();B(fe=>Ee(ee,fe),[()=>e(f).get("text")||""]),J("input",ee,fe=>k(e(v),W,fe.currentTarget.value)),w(Q,ee)};$(q,Q=>{i()?Q(Z):Q(ue,-1)})}w(ge,M)});var ve=d(me);he(ve,17,()=>e(v).get("outputEntry"),xe,(ge,f,W)=>{var M=vt(),q=o(M);{var Z=Q=>{var ee=Je();B(fe=>P(ee,fe),[()=>e(f).get("text")||""]),w(Q,ee)},ue=Q=>{var ee=mt();B(fe=>Ee(ee,fe),[()=>e(f).get("text")||""]),J("input",ee,fe=>T(e(v),W,fe.currentTarget.value)),w(Q,ee)};$(q,Q=>{i()?Q(Z):Q(ue,-1)})}w(ge,M)}),B(ge=>oe=Re(A,1,"svelte-1qozfr",null,oe,ge),[()=>({matched:a().includes(x)})]),w(E,A)}),B(()=>re=Re(H,1,"dt-table svelte-1qozfr",null,re,{readonly:i()})),w(n,ae),De()}je(["change","click","input"]);je(["input"]);var pn=qe('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),mn=qe('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),vn=qe('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),gn=qe('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),fn=qe('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),_n=qe('<g role="button" tabindex="0"><!><!></g>'),bn=C('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function hn(n,t){Te(t,!0);let i=Se(()=>Zt(t.definitions)),a=V(Oe({x:0,y:0,w:800,h:500})),r=V(!1),s={x:0,y:0},p={x:0,y:0};Tt(()=>{b(a,{x:0,y:0,w:Math.max(e(i).width,400),h:Math.max(e(i).height,300)},!0)});function g(_){_.preventDefault();const l=_.deltaY>0?1.1:.9,I=Math.max(200,Math.min(4e3,e(a).w*l)),Y=Math.max(150,Math.min(3e3,e(a).h*l));b(a,{...e(a),w:I,h:Y},!0)}function c(_){_.target.closest(".drd-node")||(b(r,!0),s={x:_.clientX,y:_.clientY},p={x:e(a).x,y:e(a).y})}function S(_,l){if(!e(r))return;const I=e(a).w/l.clientWidth;b(a,{...e(a),x:p.x-(_.clientX-s.x)*I,y:p.y-(_.clientY-s.y)*I},!0)}function h(){b(r,!1)}function y(_){switch(_){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function m(_){switch(_){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function O(_){return _.points.length?_.points.map((l,I)=>`${I===0?"M":"L"} ${l.x} ${l.y}`).join(" "):""}function j(_){if(!t.nodeValues)return null;const l=_.id in t.nodeValues?t.nodeValues[_.id]:t.nodeValues[_.name];return l===void 0?null:t.formatNodeValue?t.formatNodeValue(_.id,l):String(l)}var k=bn(),T=o(k),z=d(o(T));he(z,17,()=>e(i).edges,xe,(_,l)=>{var I=pn();B(Y=>X(I,"d",Y),[()=>O(e(l))]),w(_,I)});var L=d(z);he(L,17,()=>e(i).nodes,xe,(_,l)=>{const I=Se(()=>j(e(l)));var Y=_n();let ae;var F=o(Y);{var ne=U=>{var D=mn();B((H,re)=>{X(D,"x",e(l).x),X(D,"y",e(l).y),X(D,"width",e(l).width),X(D,"height",e(l).height),X(D,"fill",H),X(D,"stroke",re),X(D,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>y(e(l).type),()=>m(e(l).type)]),w(U,D)},u=U=>{var D=vn();B((H,re)=>{X(D,"x",e(l).x),X(D,"y",e(l).y),X(D,"width",e(l).width),X(D,"height",e(l).height),X(D,"fill",H),X(D,"stroke",re),X(D,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>y(e(l).type),()=>m(e(l).type)]),w(U,D)};$(F,U=>{e(l).type==="inputData"?U(ne):U(u,-1)})}var R=d(F);{var K=U=>{var D=gn(),H=ke(D),re=o(H),ce=d(H),be=o(ce);B(()=>{X(H,"x",e(l).x+e(l).width/2),X(H,"y",e(l).y+e(l).height*.4),P(re,e(l).name),X(ce,"x",e(l).x+e(l).width/2),X(ce,"y",e(l).y+e(l).height*.68),P(be,e(I))}),w(U,D)},N=U=>{var D=fn(),H=o(D);B(()=>{X(D,"x",e(l).x+e(l).width/2),X(D,"y",e(l).y+e(l).height/2),P(H,e(l).name)}),w(U,D)};$(R,U=>{e(I)!==null?U(K):U(N,-1)})}B(()=>ae=Re(Y,0,"drd-node svelte-1jgcg8n",null,ae,{active:e(l).id===t.activeId,static:!t.onselect})),J("click",Y,()=>{var U;return(U=t.onselect)==null?void 0:U.call(t,e(l).id)}),J("keydown",Y,U=>{var D;return U.key==="Enter"&&((D=t.onselect)==null?void 0:D.call(t,e(l).id))}),w(_,Y)}),B(()=>X(T,"viewBox",`${e(a).x??""} ${e(a).y??""} ${e(a).w??""} ${e(a).h??""}`)),ot("wheel",T,g),J("pointerdown",T,c),J("pointermove",T,_=>S(_,_.currentTarget)),J("pointerup",T,h),ot("pointerleave",T,h),w(n,k),De()}je(["pointerdown","pointermove","pointerup","click","keydown"]);var gt=C('<button type="button"> </button>'),yn=C('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),xn=C('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),wn=C('<div class="table-host svelte-175p7lt"><!></div>'),En=C('<h2 class="svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),Sn=C('<div class="graph-host svelte-175p7lt"><!></div>'),kn=C(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Rn=C('<h2 class="svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),In=C('<div class="tabs svelte-175p7lt"></div> <div class="stage svelte-175p7lt"><div class="panel svelte-175p7lt"><h2 class="svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <div class="presets svelte-175p7lt"></div> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <input class="val-input mono svelte-175p7lt" type="number"/></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <input class="val-input mono svelte-175p7lt" type="number"/></label> <input id="input2" type="range" class="svelte-175p7lt"/></div> <!> <button type="button" class="open-in-studio svelte-175p7lt">Edit this example in Studio →</button></div> <div class="panel svelte-175p7lt"><!></div></div>',1);function jn(n,t){Te(t,!0);let i=V(0),a=Se(()=>Be[e(i)]),r=V(Oe(Be[0].defaultInput1)),s=V(Oe(Be[0].defaultInput2)),p=V("loading the engine…"),g=V(!1),c=!1,S=V(null),h=null,y=V(!0),m=V(null),O=V(Oe([])),j=V(Oe({})),k=V(0),T=Se(()=>e(S)?St(e(S)).filter(Qt)[0]:null);async function z(f){b(S,await Yt(f.dmnXml),!0),h=qt("dmn-xml",JSON.stringify(f.dmnXml))}function L(){if(!h)return;const f=e(a),W={};W[f.input1.name]=e(r),W[f.input2.name]=e(s);const M=Bt(h,JSON.stringify(W)),q=JSON.parse(M);if(f.kind==="graph"){const ue=q.trace&&q.trace.intermediates||{},Q={};for(const ee of f.nodes)Q[ee.id]=ue[ee.id];b(j,Q,!0);return}const Z=q.result;b(O,q.trace&&q.trace.matched_rules||[],!0),b(y,!!Z[f.flagField]),b(m,Z[f.flagField]?Z[f.amountField]:null,!0)}async function _(f){b(i,f,!0);const W=Be[f];b(r,W.defaultInput1,!0),b(s,W.defaultInput2,!0),b(k,0),c&&(await z(W),L())}function l(f){b(r,e(a).presets[f].input1,!0),b(s,e(a).presets[f].input2,!0),b(k,f,!0),L()}function I(){b(k,null),L()}function Y(f,W){const M=f===1?e(a).input1:e(a).input2;let q=parseFloat(W);isNaN(q)&&(q=f===1?e(r):e(s)),q=Math.min(M.max,Math.max(M.min,q)),f===1?b(r,q,!0):b(s,q,!0),b(k,null),L()}const ae="bre_studio_handoff";function F(){localStorage.setItem(ae,JSON.stringify({dmnXml:e(a).dmnXml})),window.location.href="/bre/studio/"}function ne(f,W){const M=e(a).kind==="graph"?e(a).nodes.find(q=>q.id===f):void 0;return M?M.format(W):String(W)}lt(async()=>{try{await zt(),c=!0,await z(e(a)),b(p,"compiled and running — real engine, in your browser, zero network calls."),L()}catch(f){b(g,!0),b(p,"engine failed to load: "+((f==null?void 0:f.message)??String(f))),console.error(f)}});var u=In(),R=ke(u);he(R,21,()=>Be,xe,(f,W,M)=>{var q=gt();let Z;var ue=o(q);B(()=>{Z=Re(q,1,"svelte-175p7lt",null,Z,{active:e(i)===M}),P(ue,e(W).title)}),J("click",q,()=>_(M)),w(f,q)});var K=d(R,2),N=o(K),U=d(o(N),2),D=o(U),H=d(U,2);he(H,21,()=>e(a).presets,xe,(f,W,M)=>{var q=gt();let Z;var ue=o(q);B(()=>{Z=Re(q,1,"svelte-175p7lt",null,Z,{active:e(k)===M}),P(ue,e(W).label)}),J("click",q,()=>l(M)),w(f,q)});var re=d(H,2),ce=o(re),be=o(ce),de=d(be),ye=d(ce,2),_e=d(re,2),E=o(_e),v=o(E),x=d(v),A=d(E,2),oe=d(_e,2);{var G=f=>{var W=yn();let M;var q=o(W),Z=o(q),ue=d(q,2),Q=o(ue);B(()=>{M=Re(W,1,"verdict svelte-175p7lt",null,M,{good:e(y),bad:!e(y)}),P(Z,e(y)?e(a).flagLabel.good:e(a).flagLabel.bad),P(Q,e(y)&&e(m)!==null?`${e(m)}${e(a).amountUnit}`:"—")}),w(f,W)},pe=f=>{var W=xn(),M=o(W),q=o(M),Z=d(M,2),ue=o(Z);B((Q,ee)=>{P(q,Q),P(ue,ee)},[()=>{var Q;return(Q=e(a).nodes.find(ee=>ee.id===e(a).terminalNodeId))==null?void 0:Q.label},()=>e(j)[e(a).terminalNodeId]!==void 0?ne(e(a).terminalNodeId,e(j)[e(a).terminalNodeId]):"—"]),w(f,W)};$(oe,f=>{e(a).kind==="table"?f(G):f(pe,-1)})}var te=d(oe,2),le=d(N,2),me=o(le);{var ve=f=>{var W=En(),M=d(ke(W),2),q=o(M),Z=d(M,2);{var ue=Q=>{var ee=wn(),fe=o(ee);dn(fe,{get decision(){return e(T)},readonly:!0,get matchedRuleIndices(){return e(O)}}),w(Q,ee)};$(Z,Q=>{e(T)&&Q(ue)})}B(()=>P(q,e(p))),w(f,W)},ge=f=>{var W=Rn(),M=d(ke(W),2),q=o(M),Z=d(M,2);{var ue=we=>{var Ce=Sn(),It=o(Ce);hn(It,{get definitions(){return e(S)},activeId:null,get nodeValues(){return e(j)},formatNodeValue:ne}),w(we,Ce)};$(Z,we=>{e(S)&&we(ue)})}var Q=d(Z,2),ee=o(Q);{var fe=we=>{var Ce=kn();w(we,Ce)},Rt=we=>{var Ce=Je("Waiting on the engine…");w(we,Ce)};$(ee,we=>{e(j)[e(a).terminalNodeId]!==void 0?we(fe):e(g)||we(Rt,1)})}B(()=>P(q,`${e(p)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),w(f,W)};$(me,f=>{e(a).kind==="table"?f(ve):f(ge,-1)})}B(()=>{P(D,e(a).description),P(be,`${e(a).input1.label??""} `),X(de,"min",e(a).input1.min),X(de,"max",e(a).input1.max),X(de,"step",e(a).input1.step),Ee(de,e(r)),X(ye,"min",e(a).input1.min),X(ye,"max",e(a).input1.max),X(ye,"step",e(a).input1.step),P(v,`${e(a).input2.label??""} `),X(x,"min",e(a).input2.min),X(x,"max",e(a).input2.max),X(x,"step",e(a).input2.step),Ee(x,e(s)),X(A,"min",e(a).input2.min),X(A,"max",e(a).input2.max),X(A,"step",e(a).input2.step)}),J("change",de,f=>Y(1,f.currentTarget.value)),J("input",ye,I),Me(ye,()=>e(r),f=>b(r,f)),J("change",x,f=>Y(2,f.currentTarget.value)),J("input",A,I),Me(A,()=>e(s),f=>b(s,f)),J("click",te,F),w(n,u),De()}je(["click","change","input"]);var On=C('<label class="svelte-11w59y9">Organization name <input type="text" required="" class="svelte-11w59y9"/></label>'),Mn=C('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),Tn=C('<div class="tabs svelte-11w59y9"><button type="button">Sign up</button> <button type="button">Log in</button></div> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <input type="email" required="" class="svelte-11w59y9"/></label> <label class="svelte-11w59y9">Password <input type="password" required="" minlength="8" class="svelte-11w59y9"/></label> <button type="submit" class="primary svelte-11w59y9"> </button></form> <!>',1),Dn=C('<div class="empty svelte-11w59y9">None yet.</div>'),Cn=C('<li class="mono"> </li>'),Nn=C('<ul class="svelte-11w59y9"></ul>'),An=C('<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span> </span> <button type="button" class="svelte-11w59y9">Log out</button></div> <button type="button" class="primary svelte-11w59y9"> </button> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <!></div></div>'),qn=C('<div class="error mono svelte-11w59y9"> </div>'),Bn=C('<div class="account-panel svelte-11w59y9"><!> <!></div>');function Pn(n,t){Te(t,!0);const i="https://api.datalila.com",a="bre_playground_token",r="bre_playground_tenant";let s=V("signup"),p=V(""),g=V(""),c=V(""),S=V(""),h=V(null),y=V(null),m=V(!1),O=V(null),j=V(Oe([]));lt(()=>{b(h,localStorage.getItem(a),!0),b(y,localStorage.getItem(r),!0),e(h)&&L()});async function k(){b(O,null),b(m,!0);try{if(e(s)==="signup"){const u=await fetch(`${i}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(p),email:e(g),password:e(c)})});if(!u.ok)throw new Error(await u.text());const R=await u.json();b(S,R.api_key,!0),b(y,R.tenant_id,!0),await T()}else await T()}catch(u){b(O,(u==null?void 0:u.message)??String(u),!0)}finally{b(m,!1)}}async function T(){const u=await fetch(`${i}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(g),password:e(c)})});if(!u.ok){const K=await u.text();throw new Error(K||`login failed (HTTP ${u.status}): check email/password`)}const R=await u.json();if(b(h,R.token??R.access_token??R.jwt,!0),!e(h))throw new Error("login succeeded but no token found in response: "+JSON.stringify(R));localStorage.setItem(a,e(h)),e(y)&&localStorage.setItem(r,e(y)),await L()}function z(){b(h,null),b(S,""),localStorage.removeItem(a),localStorage.removeItem(r),b(j,[],!0)}async function L(){if(e(h))try{const u=await fetch(`${i}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${e(h)}`}});if(!u.ok)throw new Error(await u.text());const R=await u.json();b(j,Array.isArray(R)?R.map(K=>K.name??String(K)):[],!0)}catch(u){b(O,"Could not load saved rulesets: "+((u==null?void 0:u.message)??String(u)))}}async function _(){if(e(h)){b(O,null),b(m,!0);try{const u=await fetch(`${i}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${e(h)}`},body:JSON.stringify({name:"mortgage_eligibility_demo",format:"json-table",content:{name:"mortgage_eligibility_demo",hit_policy:"FIRST",inputs:[{name:"dti",type_ref:"number"},{name:"credit_score",type_ref:"number"}],outputs:[{name:"approved",type_ref:"boolean"},{name:"rate",type_ref:"number"}],rules:[{input_entries:["<= 0.36",">= 740"],output_entries:["true","3.5"]},{input_entries:["<= 0.43",">= 680"],output_entries:["true","4.2"]},{input_entries:["-","-"],output_entries:["false","0"]}]}})});if(!u.ok)throw new Error(await u.text());const R=await u.json();if(R&&typeof R=="object"&&"Err"in R)throw new Error(R.Err);await L()}catch(u){b(O,(u==null?void 0:u.message)??String(u),!0)}finally{b(m,!1)}}}var l=Bn(),I=o(l);{var Y=u=>{var R=Tn(),K=ke(R),N=o(K);let U;var D=d(N,2);let H;var re=d(K,2),ce=o(re);{var be=G=>{var pe=On(),te=d(o(pe));Me(te,()=>e(p),le=>b(p,le)),w(G,pe)};$(ce,G=>{e(s)==="signup"&&G(be)})}var de=d(ce,2),ye=d(o(de)),_e=d(de,2),E=d(o(_e)),v=d(_e,2),x=o(v),A=d(re,2);{var oe=G=>{var pe=Mn(),te=d(o(pe),2),le=o(te);B(()=>P(le,e(S))),w(G,pe)};$(A,G=>{e(S)&&G(oe)})}B(()=>{U=Re(N,1,"svelte-11w59y9",null,U,{active:e(s)==="signup"}),H=Re(D,1,"svelte-11w59y9",null,H,{active:e(s)==="login"}),v.disabled=e(m),P(x,e(m)?"Working…":e(s)==="signup"?"Create account":"Log in")}),J("click",N,()=>b(s,"signup")),J("click",D,()=>b(s,"login")),ot("submit",re,G=>{G.preventDefault(),k()}),Me(ye,()=>e(g),G=>b(g,G)),Me(E,()=>e(c),G=>b(c,G)),w(u,R)},ae=u=>{var R=An(),K=o(R),N=o(K),U=o(N),D=d(N,2),H=d(K,2),re=o(H),ce=d(H,2),be=d(o(ce),2);{var de=_e=>{var E=Dn();w(_e,E)},ye=_e=>{var E=Nn();he(E,21,()=>e(j),xe,(v,x)=>{var A=Cn(),oe=o(A);B(()=>P(oe,e(x))),w(v,A)}),w(_e,E)};$(be,_e=>{e(j).length===0?_e(de):_e(ye,-1)})}B(()=>{P(U,`Signed in${e(y)?` — tenant ${e(y)}`:""}`),H.disabled=e(m),P(re,e(m)?"Saving…":"Save the mortgage example to your account")}),J("click",D,z),J("click",H,_),w(u,R)};$(I,u=>{e(h)?u(ae,-1):u(Y)})}var F=d(I,2);{var ne=u=>{var R=qn(),K=o(R);B(()=>P(K,e(O))),w(u,R)};$(F,u=>{e(O)&&u(ne)})}w(n,l),De()}je(["click"]);function Fn(n,t){let i,a;try{const p=Ze(n,se.__wbindgen_malloc,se.__wbindgen_realloc),g=Ae,c=Ze(t,se.__wbindgen_malloc,se.__wbindgen_realloc),S=Ae,h=se.compile_ruleset(p,g,c,S);var r=h[0],s=h[1];if(h[3])throw r=0,s=0,kt(h[2]);return i=r,a=s,Ge(r,s)}finally{se.__wbindgen_free(i,a,1)}}function Ln(n,t){let i,a;try{const p=Ze(n,se.__wbindgen_malloc,se.__wbindgen_realloc),g=Ae,c=Ze(t,se.__wbindgen_malloc,se.__wbindgen_realloc),S=Ae,h=se.evaluate_ruleset_with_trace(p,g,c,S);var r=h[0],s=h[1];if(h[3])throw r=0,s=0,kt(h[2]);return i=r,a=s,Ge(r,s)}finally{se.__wbindgen_free(i,a,1)}}function Wn(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Ge(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,i){return Ge(t,i)},__wbindgen_init_externref_table:function(){const t=se.__wbindgen_externrefs,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)}}}}function Ge(n,t){return zn(n>>>0,t)}let Fe=null;function Ve(){return(Fe===null||Fe.byteLength===0)&&(Fe=new Uint8Array(se.memory.buffer)),Fe}function Ze(n,t,i){if(i===void 0){const g=We.encode(n),c=t(g.length,1)>>>0;return Ve().subarray(c,c+g.length).set(g),Ae=g.length,c}let a=n.length,r=t(a,1)>>>0;const s=Ve();let p=0;for(;p<a;p++){const g=n.charCodeAt(p);if(g>127)break;s[r+p]=g}if(p!==a){p!==0&&(n=n.slice(p)),r=i(r,a,a=p+n.length*3,1)>>>0;const g=Ve().subarray(r+p,r+a),c=We.encodeInto(n,g);p+=c.written,r=i(r,a,p,1)>>>0}return Ae=p,r}function kt(n){const t=se.__wbindgen_externrefs.get(n);return se.__externref_table_dealloc(n),t}let Ye=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ye.decode();const Jn=2146435072;let tt=0;function zn(n,t){return tt+=t,tt>=Jn&&(Ye=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ye.decode(),tt=t),Ye.decode(Ve().subarray(n,n+t))}const We=new TextEncoder;"encodeInto"in We||(We.encodeInto=function(n,t){const i=We.encode(n);return t.set(i),{read:n.length,written:i.length}});let Ae=0,se;function Un(n,t){return se=n.exports,Fe=null,se.__wbindgen_start(),se}async function Kn(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(r){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function Xn(n){if(se!==void 0)return se;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=Wn();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await Kn(await n,t);return Un(i)}let nt=null;function Vn(){return nt||(nt=Xn()),nt}const Yn=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:Fn,ensureReady:Vn,evaluate_ruleset_with_trace:Ln},Symbol.toStringTag,{value:"Module"})),Hn=xt(Yn),Qn={},Gn=Object.freeze(Object.defineProperty({__proto__:null,default:Qn},Symbol.toStringTag,{value:"Module"})),ft=xt(Gn);var at,_t;function Zn(){if(_t)return at;_t=1;let n,t;try{n=ft,t=ft}catch{n=null,t=null}function i(s){const p=()=>t.join(t.dirname(s),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(s)?n.readFileSync(s,"utf8"):null},writeRawMetaFile(g){const c=t.dirname(s);n.existsSync(c)||n.mkdirSync(c,{recursive:!0}),n.writeFileSync(s,g,"utf8")},hasBlob(g){return n.existsSync(t.join(p(),`${g}.bin`))},readBlob(g){return n.readFileSync(t.join(p(),`${g}.bin`)).toString("utf8")},writeBlob(g,c){const S=p();n.existsSync(S)||n.mkdirSync(S,{recursive:!0}),n.writeFileSync(t.join(S,`${g}.bin`),c,"utf8")}}}function a(s){const p="bre-js-cache",c=`${s}::meta`,S=_=>`${s}::blob::${_}`;let h=null;const y=new Map;function m(){return new Promise((_,l)=>{const I=indexedDB.open(p,1);I.onupgradeneeded=()=>{I.result.objectStoreNames.contains("kv")||I.result.createObjectStore("kv")},I.onsuccess=()=>_(I.result),I.onerror=()=>l(I.error)})}function O(_,l){return new Promise((I,Y)=>{const F=_.transaction("kv","readonly").objectStore("kv").get(l);F.onsuccess=()=>I(F.result),F.onerror=()=>Y(F.error)})}function j(_,l){return new Promise((I,Y)=>{const F=_.transaction("kv","readonly").objectStore("kv"),ne=IDBKeyRange.bound(l,l+"￿"),u=new Map,R=F.openCursor(ne);R.onsuccess=()=>{const K=R.result;if(!K){I(u);return}u.set(K.key.slice(l.length),K.value),K.continue()},R.onerror=()=>Y(R.error)})}function k(_,l,I){return new Promise((Y,ae)=>{const F=_.transaction("kv","readwrite");F.objectStore("kv").put(I,l),F.oncomplete=()=>Y(),F.onerror=()=>ae(F.error)})}let T=null;function z(){return T||(T=m()),T}return{ready:(async()=>{const _=await z(),l=await O(_,c);l!==void 0&&(h=l);const I=`${s}::blob::`,Y=await j(_,I);for(const[ae,F]of Y)y.set(ae,F)})(),isSync:!1,readRawMetaFile(){return h},writeRawMetaFile(_){h=_,z().then(l=>k(l,c,_)).catch(l=>{console.error("bre-js: failed to persist cache to IndexedDB:",l)})},hasBlob(_){return y.has(_)},readBlob(_){return y.get(_)},writeBlob(_,l){y.set(_,l),z().then(I=>k(I,S(_),l)).catch(I=>{console.error("bre-js: failed to persist blob to IndexedDB:",I)})}}}function r(s){return typeof window<"u"&&typeof window.indexedDB<"u"?a(s):i(s)}return at={createCacheStore:r},at}var rt,bt;function $n(){if(bt)return rt;bt=1;const n=Hn,{parse:t,stringify:i}=Dt(),a=Ct(),{createCacheStore:r}=Zn(),s={test:y=>a.isDecimal(y),stringify:y=>y.toString()};function p(y){if(/^-?\d+$/.test(y)){const m=Number(y);if(Number.isSafeInteger(m))return m}return new a(y)}function g(y){return t(y,void 0,{parseNumber:p})}function c(y,m){return i(y,void 0,m,[s])}class S{constructor({endpoint:m,apiKey:O,tenantId:j,cacheDbPath:k,syncIntervalMs:T=5e3,auditFlushIntervalMs:z=5e3}){if(this.endpoint=m.replace(/\/$/,""),this.apiKey=O,this.tenantId=j||"default",this.cacheDbPath=k||"./bre_js_cache.json",this.syncIntervalMs=T,this.auditFlushIntervalMs=z,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=r(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const L=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,L]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const m=this.store.readRawMetaFile();if(m){const O=g(m);this.rulesetsMeta=O.rulesetsMeta||{},this.auditQueue=O.auditQueue||[];for(const[j,k]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(k.hash)){const T=this.store.readBlob(k.hash);let z;k.format==="dmn-xml"?z=T:z=JSON.parse(T);try{const L=n.compile_ruleset(k.format,JSON.stringify(z));this.rulesetCache[j]=JSON.parse(L)}catch(L){console.error(`Failed to compile cached ruleset ${j}:`,L)}}}}catch(m){console.error("Failed to load local cache:",m)}}saveLocalCache(){try{const m={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(c(m,2))}catch(m){console.error("Failed to save local cache:",m)}}async syncOnce(){const m={"X-API-Key":this.apiKey},O=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:m});if(!O.ok)throw new Error(`Server returned error: ${O.status}`);const j=await O.json();for(const k of j){const T=this.rulesetsMeta[k.name];if(!T||T.hash!==k.latest_hash){const z=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${k.latest_hash}`,{headers:m});if(!z.ok)continue;const L=z.headers.get("X-Ruleset-Format")||k.format,_=new TextDecoder("utf-8").decode(await z.arrayBuffer());this.store.writeBlob(k.latest_hash,_),this.rulesetsMeta[k.name]={id:k.id,name:k.name,version:k.version,format:L,hash:k.latest_hash};let l;L==="dmn-xml"?l=_:l=JSON.parse(_);try{const I=n.compile_ruleset(L,JSON.stringify(l));this.rulesetCache[k.name]=JSON.parse(I)}catch(I){console.error(`Compile error for ${k.name}:`,I)}}}this.saveLocalCache()}evaluate(m,O){const j=this.rulesetCache[m],k=this.rulesetsMeta[m];if(!j||!k)throw new Error(`Ruleset not found in cache: ${m}`);try{const T=JSON.stringify(j),z=c(O),L=n.evaluate_ruleset_with_trace(T,z),_=g(L),l=_.result,I=_.trace;return this.queueAuditLog(m,O,l,!0,null,I),l}catch(T){const z=T.message||String(T);throw this.queueAuditLog(m,O,null,!1,z,{matched_rules:[],duration_us:0}),T}}queueAuditLog(m,O,j,k,T,z){const L=this.rulesetsMeta[m];L&&(this.auditQueue.push({ruleset_id:L.id,version:L.version,definition_hash:L.hash,inputs:O,outputs:j,success:k,error_message:T,trace_json:z}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const m=[...this.auditQueue],O={"X-API-Key":this.apiKey,"Content-Type":"application/json"},j=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:O,body:c({logs:m})});if(j.ok)this.auditQueue=this.auditQueue.slice(m.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${j.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(m=>console.error("JS Client sync failed:",m))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(m=>console.error("JS Client audit flush failed:",m))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class h{constructor({policy:m={},defaultRoute:O="local",local:j,remote:k}={}){this.policy=m,this.defaultRoute=O,j instanceof S?this.localClient=j:j?this.localClient=new S(j):this.localClient=null,k?(this.remoteEndpoint=k.endpoint.replace(/\/$/,""),this.remoteApiKey=k.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(m){return this.policy[m]||this.defaultRoute}async evaluate(m,O){const j=this.routeFor(m);if(j==="server"||j==="remote")return this.evaluateRemote(m,O);if(j==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${m}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(m,O)}throw new Error(`SmartBreClient: unknown route '${j}' for ruleset '${m}' (expected 'local' or 'server')`)}async evaluateRemote(m,O){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${m}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const j={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},k=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:j,body:c({ruleSet:m,facts:O})});if(!k.ok)throw new Error(`Remote evaluate failed for '${m}': ${k.status} ${await k.text()}`);const T=g(await k.text());if(!T.success)throw new Error(`Remote evaluate failed for '${m}': ${T.error_message}`);return T.output_payload}close(){this.localClient&&this.localClient.close()}}return rt={BreClient:S,SmartBreClient:h,Decimal:a},rt}var ht=$n(),ea=C('<div class="error svelte-1yde3g3"> </div>'),ta=C('<div class="result"><div class="result-label svelte-1yde3g3">client.evaluate() returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),na=C(`<div class="sandbox svelte-1yde3g3"><h2 class="svelte-1yde3g3">Try the JS / TS SDK</h2> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip.</p> <div class="grid svelte-1yde3g3"><div class="panel svelte-1yde3g3"><h3 class="svelte-1yde3g3">Code</h3> <pre class="code svelte-1yde3g3"> </pre></div> <div class="panel svelte-1yde3g3"><h3 class="svelte-1yde3g3">Live inputs</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <input type="number" step="0.01" min="0" max="0.6" class="svelte-1yde3g3"/></label> <label class="svelte-1yde3g3">Credit score <input type="number" step="5" min="500" max="850" class="svelte-1yde3g3"/></label> <div class="status svelte-1yde3g3"> </div> <!> <!></div></div></div>`);function aa(n,t){Te(t,!0);let i=V("Registering local sandbox..."),a=V(!1),r=V(.28),s=V(780),p=V(null),g=V(null),c=null,S=Se(()=>`import { BreClient } from 'datalila-bre';

const client = new BreClient({
  endpoint: 'https://api.datalila.com',   // <- swap this one line for production
  apiKey: 'YOUR_API_KEY',
});
await client.ready;
await client.syncOnce();                  // pulls your registered rulesets

const result = client.evaluate('mortgage_eligibility', {
  dti: ${e(r)},
  credit_score: ${e(s)},
});
console.log(result); // { approved: ..., amount: ... }`);async function h(){if(!("serviceWorker"in navigator)){b(g,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){b(i,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function y(){b(g,null);try{b(i,"Running real datalila-bre code against the local sandbox..."),c=new ht.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await c.ready,await c.syncOnce(),b(p,c.evaluate("mortgage_eligibility",{dti:e(r),credit_score:e(s)}),!0),b(i,"Done -- zero network calls left the browser."),b(a,!0)}catch(N){b(g,(N==null?void 0:N.message)??String(N),!0),b(i,"Failed.")}}function m(){if(c)try{b(p,c.evaluate("mortgage_eligibility",{dti:e(r),credit_score:e(s)}),!0),b(g,null)}catch(N){b(g,(N==null?void 0:N.message)??String(N),!0)}}lt(async()=>{var N;await h(),(N=navigator.serviceWorker)!=null&&N.controller&&await y()});var O=na(),j=d(o(O),4),k=o(j),T=d(o(k),2),z=o(T),L=d(k,2),_=d(o(L),2),l=d(o(_)),I=d(_,2),Y=d(o(I)),ae=d(I,2),F=o(ae),ne=d(ae,2);{var u=N=>{var U=ea(),D=o(U);B(()=>P(D,e(g))),w(N,U)};$(ne,N=>{e(g)&&N(u)})}var R=d(ne,2);{var K=N=>{var U=ta(),D=d(o(U),2),H=o(D);B(re=>P(H,re),[()=>JSON.stringify(e(p),(re,ce)=>{var be,de;return(de=(be=ht.Decimal).isDecimal)!=null&&de.call(be,ce)?ce.toString():ce},2)]),w(N,U)};$(R,N=>{e(p)&&N(K)})}B(()=>{P(z,e(S)),P(F,e(i))}),J("input",l,m),Me(l,()=>e(r),N=>b(r,N)),J("input",Y,m),Me(Y,()=>e(s),N=>b(s,N)),w(n,O),De()}je(["input"]);const ze=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
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
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Not a new feature -- this is a documentation/example ticket (BRE-092). Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, and BRE-093/BRE-094 for the (not-yet-built) policy-driven and single-graph variants of this idea.'}],ra={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},ia={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function it(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Ue=" ";function sa(n,t){const i=ia[t]??"//",a=n.indexOf(i),r=a>=0?n.slice(0,a):n,s=a>=0?n.slice(a):"",p=[],g=r.replace(/"[^"]*"|'[^']*'/g,y=>(p.push(y),Ue+"STR"+(p.length-1)+Ue));let c=it(g);c=c.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const S=ra[t]??[];if(S.length){const y=new RegExp(`\\b(${S.join("|")})\\b`,"g");c=c.replace(y,'<span class="tok-kw">$1</span>')}const h=new RegExp(Ue+"STR(\\d+)"+Ue,"g");return c=c.replace(h,(y,m)=>`<span class="tok-str">${it(p[Number(m)])}</span>`),s&&(c+=`<span class="tok-comment">${it(s)}</span>`),c}function oa(n,t){return n.split(`
`).map(i=>sa(i,t)).join(`
`)}var la=C('<button type="button"> </button>'),ca=C('<p class="note svelte-65i1x3"> </p>'),ua=C(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="svelte-65i1x3">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">website/src/lib/dmn-examples/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav class="tabs svelte-65i1x3" aria-label="SDK language"></nav> <section class="panel svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></section></div>`);function da(n,t){Te(t,!0);let i=V(Oe(ze[0].id)),a=Se(()=>ze.find(F=>F.id===e(i))??ze[0]);var r=ua(),s=d(o(r),2);he(s,21,()=>ze,F=>F.id,(F,ne)=>{var u=la();let R;var K=o(u);B(()=>{R=Re(u,1,"tab svelte-65i1x3",null,R,{active:e(ne).id===e(i)}),P(K,e(ne).label)}),J("click",u,()=>b(i,e(ne).id,!0)),w(F,u)});var p=d(s,2),g=o(p),c=o(g),S=o(c),h=d(c,2),y=o(h),m=d(g,2);{var O=F=>{var ne=ca(),u=o(ne);B(()=>P(u,e(a).note)),w(F,ne)};$(m,F=>{e(a).note&&F(O)})}var j=d(m,2),k=o(j),T=d(j,2),z=o(T);Nt(z,()=>oa(e(a).code,e(a).language),!0);var L=d(T,4),_=o(L),l=o(_),I=d(L,4),Y=o(I),ae=o(Y);B(F=>{P(S,e(a).label),P(y,e(a).packageName),P(k,`Example (${e(a).sourcePath??""})`),P(l,F),P(ae,e(a).output)},[()=>e(a).runSteps.join(`
`)]),w(n,r),De()}je(["click"]);const st={};var pa=C('<button type="button" class="account-toggle svelte-1n46o8q"> </button>'),yt=C('<div class="account-wrap svelte-1n46o8q"><!></div>'),ma=C("<!> <!>",1),va=C('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><a class="studio-link svelte-1n46o8q" href="/bre/studio/">Open Studio ↗</a> <button type="button" class="studio-link sdk-toggle svelte-1n46o8q"> </button> <button type="button" class="account-toggle svelte-1n46o8q"> </button> <!></nav></header> <main class="svelte-1n46o8q"><!></main> <footer class="fine svelte-1n46o8q">Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!></footer>',1);function ga(n,t){Te(t,!0);const i=(st==null?void 0:st.VITE_ENABLE_ACCOUNTS)!=="false";let a=V(!1),r=V(!1),s=V(!1);function p(){b(r,!e(r)),e(r)&&b(s,!1)}function g(){b(s,!e(s)),e(s)&&b(r,!1)}var c=va(),S=ke(c),h=d(o(S),2),y=d(o(h),2),m=o(y),O=d(y,2),j=o(O),k=d(O,2);{var T=u=>{var R=pa(),K=o(R);B(()=>P(K,e(a)?"Hide Account":"Sign in to save rulesets")),J("click",R,()=>b(a,!e(a))),w(u,R)};$(k,u=>{i&&u(T)})}var z=d(S,2),L=o(z);{var _=u=>{da(u,{})},l=u=>{var R=yt(),K=o(R);aa(K,{}),w(u,R)},I=u=>{var R=ma(),K=ke(R);{var N=D=>{var H=yt(),re=o(H);Pn(re,{}),w(D,H)};$(K,D=>{e(a)&&D(N)})}var U=d(K,2);jn(U,{}),w(u,R)};$(L,u=>{e(s)?u(_):e(r)?u(l,1):u(I,-1)})}var Y=d(z,2),ae=d(o(Y));{var F=u=>{var R=Je("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");w(u,R)},ne=u=>{var R=Je("No network calls. No server round-trips.");w(u,R)};$(ae,u=>{i?u(F):u(ne,-1)})}B(()=>{P(m,e(r)?"Hide SDK Sandbox":"Try the JS/TS SDK"),P(j,e(s)?"Back to Playground":"SDK Docs")}),J("click",y,p),J("click",O,g),w(n,c),De()}je(["click"]);At(ga,{target:document.getElementById("app")});

const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-ZVQDIJrW.js","assets/vendor-SKzc_Nev.js","assets/index-CaUT83wN.css"])))=>i.map(i=>d[i]);
var tn=n=>{throw TypeError(n)};var Un=(n,t,i)=>t.has(n)||tn("Cannot "+i);var at=(n,t,i)=>(Un(n,t,"read from private field"),i?i.call(n):t.get(n)),Lt=(n,t,i)=>t.has(n)?tn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,i);import{s as Kn,d as nn,a as Ge,p as Le,b as he,c as u,e as s,i as X,f as Ne,g as Oe,h as e,t as N,j as Pe,k as r,l as Be,u as pe,m as P,n as It,o as Mt,q as le,r as ve,v as b,w as Ae,x as qe,y as we,z as ie,A as ee,B as Fe,C as Ze,D as y,E as Ht,F as nt,G as ct,H as pt,I as In,J as Nt,K as Tt,L as Mn,M as Ft,N as an,O as Nn,P as zn,Q as Jn,R as Bt,S as rn,T as Xn,U as Hn,V as Gn,W as Yn,X as Qn,Y as Zn,Z as $n,_ as ea,$ as ta,a0 as na,a1 as aa,a2 as ia,a3 as ra,a4 as oa,a5 as sa,a6 as la,a7 as ua,a8 as da,a9 as ca}from"./vendor-SKzc_Nev.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();const pa="modulepreload",ma=function(n){return"/bre/"+n},on={},va=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let p=function(R){return Promise.all(R.map(D=>Promise.resolve(D).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),d=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=p(i.map(R=>{if(R=ma(R),R in on)return;on[R]=!0;const D=R.endsWith(".css"),k=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${R}"]${k}`))return;const v=document.createElement("link");if(v.rel=D?"stylesheet":pa,D||(v.as="script"),v.crossOrigin="",v.href=R,d&&v.setAttribute("nonce",d),document.head.appendChild(v),D)return new Promise((O,A)=>{v.addEventListener("load",O),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${R}`)))})}))}function c(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return o.then(p=>{for(const m of p||[])m.status==="rejected"&&c(m.reason);return t().catch(c)})};function fa(n,t){let i,a;try{const D=Ee.__wbindgen_add_to_stack_pointer(-16),k=At(n,Ee.__wbindgen_export,Ee.__wbindgen_export2),v=et,O=At(t,Ee.__wbindgen_export,Ee.__wbindgen_export2),A=et;Ee.compile_ruleset(D,k,v,O,A);var o=Je().getInt32(D+0,!0),c=Je().getInt32(D+4,!0),p=Je().getInt32(D+8,!0),m=Je().getInt32(D+12,!0),d=o,R=c;if(m)throw d=0,R=0,Gt(p);return i=d,a=R,Ot(d,R)}finally{Ee.__wbindgen_add_to_stack_pointer(16),Ee.__wbindgen_export3(i,a,1)}}function sn(n,t){let i,a;try{const D=Ee.__wbindgen_add_to_stack_pointer(-16),k=At(n,Ee.__wbindgen_export,Ee.__wbindgen_export2),v=et,O=At(t,Ee.__wbindgen_export,Ee.__wbindgen_export2),A=et;Ee.evaluate_ruleset_with_trace(D,k,v,O,A);var o=Je().getInt32(D+0,!0),c=Je().getInt32(D+4,!0),p=Je().getInt32(D+8,!0),m=Je().getInt32(D+12,!0),d=o,R=c;if(m)throw d=0,R=0,Gt(p);return i=d,a=R,Ot(d,R)}finally{Ee.__wbindgen_add_to_stack_pointer(16),Ee.__wbindgen_export3(i,a,1)}}function ga(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Ot(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return Dt(t).getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return Dt(t).getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return ht(new Date)},__wbg_new_47ab770c8bd3b6bb:function(t){const i=new Date(Dt(t));return ht(i)},__wbindgen_cast_0000000000000001:function(t){return ht(t)},__wbindgen_cast_0000000000000002:function(t,i){const a=Ot(t,i);return ht(a)},__wbindgen_object_drop_ref:function(t){Gt(t)}}}}function ht(n){st===Ve.length&&Ve.push(Ve.length+1);const t=st;return st=Ve[t],Ve[t]=n,t}function _a(n){n<1028||(Ve[n]=st,st=n)}let Ye=null;function Je(){return(Ye===null||Ye.buffer.detached===!0||Ye.buffer.detached===void 0&&Ye.buffer!==Ee.memory.buffer)&&(Ye=new DataView(Ee.memory.buffer)),Ye}function Ot(n,t){return ha(n>>>0,t)}let it=null;function Et(){return(it===null||it.byteLength===0)&&(it=new Uint8Array(Ee.memory.buffer)),it}function Dt(n){return Ve[n]}let Ve=new Array(1024).fill(void 0);Ve.push(void 0,null,!0,!1);let st=Ve.length;function At(n,t,i){if(i===void 0){const m=lt.encode(n),d=t(m.length,1)>>>0;return Et().subarray(d,d+m.length).set(m),et=m.length,d}let a=n.length,o=t(a,1)>>>0;const c=Et();let p=0;for(;p<a;p++){const m=n.charCodeAt(p);if(m>127)break;c[o+p]=m}if(p!==a){p!==0&&(n=n.slice(p)),o=i(o,a,a=p+n.length*3,1)>>>0;const m=Et().subarray(o+p,o+a),d=lt.encodeInto(n,m);p+=d.written,o=i(o,a,p,1)>>>0}return et=p,o}function Gt(n){const t=Dt(n);return _a(n),t}let Rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Rt.decode();const ya=2146435072;let Wt=0;function ha(n,t){return Wt+=t,Wt>=ya&&(Rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Rt.decode(),Wt=t),Rt.decode(Et().subarray(n,n+t))}const lt=new TextEncoder;"encodeInto"in lt||(lt.encodeInto=function(n,t){const i=lt.encode(n);return t.set(i),{read:n.length,written:i.length}});let et=0,Ee;function ba(n,t){return Ee=n.exports,Ye=null,it=null,Ee}async function xa(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function wa(n){if(Ee!==void 0)return Ee;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-CaVvRRgX.wasm",import.meta.url));const t=ga();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await xa(await n,t);return ba(i)}const Ea=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Da=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ra=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Sa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ka=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1" name="DRD" namespace="http://camunda.org/schema/1.0/bpmn" exporter="Camunda Modeler" exporterVersion="5.0.0">
  <decision id="Decision_LoanApproval" name="Loan Approval">
    <decisionTable id="DecisionTable_1" hitPolicy="FIRST">
      <input id="Input_1" label="Credit Score">
        <inputExpression id="InputExpression_1" typeRef="number">
          <text>creditScore</text>
        </inputExpression>
      </input>
      <input id="Input_2" label="Monthly Income">
        <inputExpression id="InputExpression_2" typeRef="number">
          <text>monthlyIncome</text>
        </inputExpression>
      </input>
      <output id="Output_1" label="Approved" name="approved" typeRef="boolean" />
      <output id="Output_2" label="Limit" name="limit" typeRef="number" />
      <rule id="DecisionRule_1">
        <inputEntry id="UnaryTests_1">
          <text>&gt;= 700</text>
        </inputEntry>
        <inputEntry id="UnaryTests_2">
          <text>&gt;= 5000</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_1">
          <text>true</text>
        </outputEntry>
        <outputEntry id="LiteralExpression_2">
          <text>50000</text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_2">
        <inputEntry id="UnaryTests_3">
          <text>&gt;= 600</text>
        </inputEntry>
        <inputEntry id="UnaryTests_4">
          <text>&gt;= 3000</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_3">
          <text>true</text>
        </outputEntry>
        <outputEntry id="LiteralExpression_4">
          <text>20000</text>
        </outputEntry>
      </rule>
      <rule id="DecisionRule_3">
        <inputEntry id="UnaryTests_5">
          <text>&lt; 600</text>
        </inputEntry>
        <inputEntry id="UnaryTests_6">
          <text>-</text>
        </inputEntry>
        <outputEntry id="LiteralExpression_5">
          <text>false</text>
        </outputEntry>
        <outputEntry id="LiteralExpression_6">
          <text>0</text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_1">
      <dmndi:DMNShape id="DMNShape_Decision_1" dmnElementRef="Decision_LoanApproval">
        <dc:Bounds height="80" width="180" x="150" y="150" />
      </dmndi:DMNShape>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,Ia=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<definitions exporter="DMN Modeler" exporterVersion="5.0.32.2; 1.0; 1.0" expressionLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" namespace="http://www.trisotech.com/definitions/_edbd2d8e-a5a8-4660-9bb9-adaa792d900c" typeLanguage="https://www.omg.org/spec/DMN/20230324/FEEL/" name="0004-simpletable-U" triso:logoChoice="Default" xsi:schemaLocation="https://www.omg.org/spec/DMN/20230324/DMN15.xsd ../../dmn.xsd" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c" xmlns="https://www.omg.org/spec/DMN/20230324/MODEL/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" xmlns:dmndi="https://www.omg.org/spec/DMN/20230324/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:triso="http://www.trisotech.com/2015/triso/modeling" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <decision name="Approval Status" id="_3b2953a3-745f-4d2e-b55d-75c8c5ae653c">
        <variable typeRef="string" name="Approval Status"/>
        <informationRequirement id="c565bfc1-53ae-4e25-ad35-b26767a9b1d9">
            <requiredInput href="#_5a4bdb64-f0ef-4978-9e03-6f1ae64a1f17"/>
        </informationRequirement>
        <informationRequirement id="ac23f1ad-562f-47e9-a369-d9cc01f8b415">
            <requiredInput href="#_41effb45-b3c4-46ac-b1da-122b3e428a98"/>
        </informationRequirement>
        <informationRequirement id="ae239e86-d326-4513-a01b-24e18269de29">
            <requiredInput href="#_8ff18665-84e9-49f2-a8df-8981b1844549"/>
        </informationRequirement>
        <decisionTable hitPolicy="UNIQUE" outputLabel="Approval Status" preferredOrientation="Rule-as-Row">
            <input id="_bf7fc56f-ea82-464e-a541-f3221dc07e78" label="Age">
                <inputExpression typeRef="number">
                    <text>Age</text>
                </inputExpression>
            </input>
            <input id="_bb73bf86-b399-490a-a635-c6f2c04ff75d" label="RiskCategory">
                <inputExpression typeRef="string">
                    <text>RiskCategory</text>
                </inputExpression>
                <inputValues>
                    <text>"High", "Low", "Medium"</text>
                </inputValues>
            </input>
            <input id="_af5e5c2a-5124-4277-9409-d07421dcb5a4" label="isAffordable">
                <inputExpression typeRef="boolean">
                    <text>isAffordable</text>
                </inputExpression>
            </input>
            <output id="_bffba7a1-f0a2-4679-b6e2-50e27bb27968">
                <outputValues>
                    <text>"Approved", "Declined"</text>
                </outputValues>
            </output>
            <rule id="_7f03803d-2636-40ab-8346-7fd7f38ab695">
                <inputEntry id="_7f03803d-2636-40ab-8346-7fd7f38ab695-0">
                    <text>&gt;=18</text>
                </inputEntry>
                <inputEntry id="_7f03803d-2636-40ab-8346-7fd7f38ab695-1">
                    <text>"Medium","Low"</text>
                </inputEntry>
                <inputEntry id="_7f03803d-2636-40ab-8346-7fd7f38ab695-2">
                    <text>true</text>
                </inputEntry>
                <outputEntry id="_7f03803d-2636-40ab-8346-7fd7f38ab695-3">
                    <text>"Approved"</text>
                </outputEntry>
            </rule>
            <rule id="_887acecd-40fc-42da-9443-eeba476f5516">
                <inputEntry id="_887acecd-40fc-42da-9443-eeba476f5516-0">
                    <text>&lt;18</text>
                </inputEntry>
                <inputEntry id="_887acecd-40fc-42da-9443-eeba476f5516-1">
                    <text>"Medium","Low"</text>
                </inputEntry>
                <inputEntry id="_887acecd-40fc-42da-9443-eeba476f5516-2">
                    <text>true</text>
                </inputEntry>
                <outputEntry id="_887acecd-40fc-42da-9443-eeba476f5516-3">
                    <text>"Declined"</text>
                </outputEntry>
            </rule>
            <rule id="_18058414-a571-4375-991f-77b9ea7fc699">
                <inputEntry id="_18058414-a571-4375-991f-77b9ea7fc699-0">
                    <text>-</text>
                </inputEntry>
                <inputEntry id="_18058414-a571-4375-991f-77b9ea7fc699-1">
                    <text>"High"</text>
                </inputEntry>
                <inputEntry id="_18058414-a571-4375-991f-77b9ea7fc699-2">
                    <text>true</text>
                </inputEntry>
                <outputEntry id="_18058414-a571-4375-991f-77b9ea7fc699-3">
                    <text>"Declined"</text>
                </outputEntry>
            </rule>
            <rule id="_ede3e62a-43f3-49d3-90a4-ffaf1f698f54">
                <inputEntry id="_ede3e62a-43f3-49d3-90a4-ffaf1f698f54-0">
                    <text>-</text>
                </inputEntry>
                <inputEntry id="_ede3e62a-43f3-49d3-90a4-ffaf1f698f54-1">
                    <text>-</text>
                </inputEntry>
                <inputEntry id="_ede3e62a-43f3-49d3-90a4-ffaf1f698f54-2">
                    <text>false</text>
                </inputEntry>
                <outputEntry id="_ede3e62a-43f3-49d3-90a4-ffaf1f698f54-3">
                    <text>"Declined"</text>
                </outputEntry>
            </rule>
        </decisionTable>
    </decision>
    <inputData name="Age" id="_41effb45-b3c4-46ac-b1da-122b3e428a98">
        <variable typeRef="number" name="Age"/>
    </inputData>
    <inputData name="RiskCategory" id="_5a4bdb64-f0ef-4978-9e03-6f1ae64a1f17">
        <variable typeRef="string" name="RiskCategory"/>
    </inputData>
    <inputData name="isAffordable" id="_8ff18665-84e9-49f2-a8df-8981b1844549">
        <variable typeRef="boolean" name="isAffordable"/>
    </inputData>
    <dmndi:DMNDI>
        <dmndi:DMNDiagram id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_D1">
            <dmndi:Size height="650.0" width="879.0"/>
            <dmndi:DMNShape dmnElementRef="_3b2953a3-745f-4d2e-b55d-75c8c5ae653c" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_s1">
                <dc:Bounds height="61.0" width="154.0" x="362.0" y="150.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNShape dmnElementRef="_41effb45-b3c4-46ac-b1da-122b3e428a98" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_s2">
                <dc:Bounds height="60.0" width="153.0" x="150.0" y="331.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNShape dmnElementRef="_5a4bdb64-f0ef-4978-9e03-6f1ae64a1f17" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_s3">
                <dc:Bounds height="60.0" width="153.0" x="363.0" y="331.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNShape dmnElementRef="_8ff18665-84e9-49f2-a8df-8981b1844549" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_s4">
                <dc:Bounds height="60.0" width="153.0" x="576.0" y="331.0"/>
            </dmndi:DMNShape>
            <dmndi:DMNEdge dmnElementRef="c565bfc1-53ae-4e25-ad35-b26767a9b1d9" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_e1">
                <di:waypoint x="439.0" y="331.0"/>
                <di:waypoint x="439.0" y="211.0"/>
            </dmndi:DMNEdge>
            <dmndi:DMNEdge dmnElementRef="ac23f1ad-562f-47e9-a369-d9cc01f8b415" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_e2">
                <di:waypoint x="226.0" y="331.0"/>
                <di:waypoint x="439.0" y="211.0"/>
            </dmndi:DMNEdge>
            <dmndi:DMNEdge dmnElementRef="ae239e86-d326-4513-a01b-24e18269de29" id="_edbd2d8e-a5a8-4660-9bb9-adaa792d900c_e3">
                <di:waypoint x="652.0" y="331.0"/>
                <di:waypoint x="439.0" y="211.0"/>
            </dmndi:DMNEdge>
        </dmndi:DMNDiagram>
    </dmndi:DMNDI>
</definitions>
`,Ma=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" id="Definitions_Tier" name="Tier Routing" namespace="http://camunda.org/schema/1.0/bpmn">
  <decision id="Decision_TierRouting" name="Customer Tier Routing">
    <decisionTable id="DecisionTable_Tier" hitPolicy="FIRST">
      <input id="Input_Tier_1" label="Member Status">
        <inputExpression id="InputExpr_Tier_1" typeRef="string">
          <text>memberStatus</text>
        </inputExpression>
      </input>
      <input id="Input_Tier_2" label="Cart Value">
        <inputExpression id="InputExpr_Tier_2" typeRef="number">
          <text>cartValue</text>
        </inputExpression>
      </input>
      <output id="Output_Tier_1" label="Discount %" name="discount" typeRef="number" />
      <output id="Output_Tier_2" label="Priority Shipping" name="priorityShipping" typeRef="boolean" />
      <rule id="Rule_Tier_1">
        <inputEntry id="TEntry_1">
          <text>"gold"</text>
        </inputEntry>
        <inputEntry id="TEntry_2">
          <text>&gt;= 100</text>
        </inputEntry>
        <outputEntry id="TOEntry_1">
          <text>20</text>
        </outputEntry>
        <outputEntry id="TOEntry_2">
          <text>true</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Tier_2">
        <inputEntry id="TEntry_3">
          <text>"gold"</text>
        </inputEntry>
        <inputEntry id="TEntry_4">
          <text>&lt; 100</text>
        </inputEntry>
        <outputEntry id="TOEntry_3">
          <text>10</text>
        </outputEntry>
        <outputEntry id="TOEntry_2_1">
          <text>true</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Tier_3">
        <inputEntry id="TEntry_5">
          <text>"silver"</text>
        </inputEntry>
        <inputEntry id="TEntry_6">
          <text>&gt;= 150</text>
        </inputEntry>
        <outputEntry id="TOEntry_5">
          <text>10</text>
        </outputEntry>
        <outputEntry id="TOEntry_6">
          <text>false</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Tier_4">
        <inputEntry id="TEntry_7">
          <text>-</text>
        </inputEntry>
        <inputEntry id="TEntry_8">
          <text>-</text>
        </inputEntry>
        <outputEntry id="TOEntry_7">
          <text>0</text>
        </outputEntry>
        <outputEntry id="TOEntry_8">
          <text>false</text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_Tier">
      <dmndi:DMNShape id="DMNShape_Decision_Tier" dmnElementRef="Decision_TierRouting">
        <dc:Bounds height="80" width="180" x="150" y="150" />
      </dmndi:DMNShape>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,Na=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" id="Definitions_Fraud" name="Fraud Assessment" namespace="http://camunda.org/schema/1.0/bpmn">
  <decision id="Decision_Fraud" name="Fraud Score Calculation">
    <decisionTable id="DecisionTable_Fraud" hitPolicy="FIRST">
      <input id="Input_Fraud_1" label="Amount">
        <inputExpression id="InputExpr_Fraud_1" typeRef="number">
          <text>amount</text>
        </inputExpression>
      </input>
      <input id="Input_Fraud_2" label="International Tx">
        <inputExpression id="InputExpr_Fraud_2" typeRef="boolean">
          <text>isInternational</text>
        </inputExpression>
      </input>
      <output id="Output_Fraud_1" label="Risk Score" name="riskScore" typeRef="number" />
      <output id="Output_Fraud_2" label="Action" name="action" typeRef="string" />
      <rule id="Rule_Fraud_1">
        <inputEntry id="FEntry_1">
          <text>&gt;= 10000</text>
        </inputEntry>
        <inputEntry id="FEntry_2">
          <text>-</text>
        </inputEntry>
        <outputEntry id="FOEntry_1">
          <text>95</text>
        </outputEntry>
        <outputEntry id="FOEntry_2">
          <text>"block"</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Fraud_2">
        <inputEntry id="FEntry_3">
          <text>&gt; 1000</text>
        </inputEntry>
        <inputEntry id="FEntry_4">
          <text>true</text>
        </inputEntry>
        <outputEntry id="FOEntry_3">
          <text>80</text>
        </outputEntry>
        <outputEntry id="FOEntry_4">
          <text>"review"</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Fraud_3">
        <inputEntry id="FEntry_5">
          <text>&gt; 1000</text>
        </inputEntry>
        <inputEntry id="FEntry_6">
          <text>false</text>
        </inputEntry>
        <outputEntry id="FOEntry_5">
          <text>30</text>
        </outputEntry>
        <outputEntry id="FOEntry_6">
          <text>"approve"</text>
        </outputEntry>
      </rule>
      <rule id="Rule_Fraud_4">
        <inputEntry id="FEntry_7">
          <text>-</text>
        </inputEntry>
        <inputEntry id="FEntry_8">
          <text>-</text>
        </inputEntry>
        <outputEntry id="FOEntry_7">
          <text>10</text>
        </outputEntry>
        <outputEntry id="FOEntry_8">
          <text>"approve"</text>
        </outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_Fraud">
      <dmndi:DMNShape id="DMNShape_Decision_Fraud" dmnElementRef="Decision_Fraud">
        <dc:Bounds height="80" width="180" x="150" y="150" />
      </dmndi:DMNShape>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,Ta=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" id="Definitions_Full" name="Full DRD Elements" namespace="http://camunda.org/schema/1.0/bpmn">
  <inputData id="InputData_1" name="Raw Input" />
  <knowledgeSource id="KnowledgeSource_1" name="Regulation Docs" />
  <businessKnowledgeModel id="BKM_1" name="Scoring Logic">
    <!-- BRE-122: bre-core's compiler rejects any businessKnowledgeModel
         lacking encapsulatedLogic, even one no decision actually invokes
         (found by real testing -- this file previously had none, since it
         only ever needed to render for the DRD-diagram structural demo,
         not compile). This trivial literalExpression makes the whole file
         compile cleanly without changing what Decision_Full computes --
         nothing here invokes this BKM. -->
    <encapsulatedLogic>
      <literalExpression><text>"scored"</text></literalExpression>
    </encapsulatedLogic>
    <authorityRequirement id="AuthorityReq_1">
      <requiredAuthority href="#KnowledgeSource_1" />
    </authorityRequirement>
  </businessKnowledgeModel>
  <decision id="Decision_Full" name="Final Decision">
    <informationRequirement id="InfoReq_1">
      <requiredInput href="#InputData_1" />
    </informationRequirement>
    <knowledgeRequirement id="KnowReq_1">
      <requiredKnowledge href="#BKM_1" />
    </knowledgeRequirement>
    <decisionTable id="DecisionTable_Full" hitPolicy="FIRST">
      <input id="Input_F_1" label="Raw Input">
        <inputExpression id="InputExpr_F_1" typeRef="string">
          <text>Raw Input</text>
        </inputExpression>
      </input>
      <output id="Output_F_1" label="Result" name="Result" typeRef="string" />
      <rule id="Rule_F_1">
        <inputEntry id="IEntry_1"><text>"valid"</text></inputEntry>
        <outputEntry id="OEntry_1"><text>"approved"</text></outputEntry>
      </rule>
      <rule id="Rule_F_2">
        <inputEntry id="IEntry_2"><text>-</text></inputEntry>
        <outputEntry id="OEntry_2"><text>"rejected"</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>
  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_Full">
      <dmndi:DMNShape id="DMNShape_Decision_Full" dmnElementRef="Decision_Full">
        <dc:Bounds height="80" width="180" x="160" y="80" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="DMNShape_BKM_1" dmnElementRef="BKM_1">
        <dc:Bounds height="46" width="135" x="400" y="97" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="DMNShape_InputData_1" dmnElementRef="InputData_1">
        <dc:Bounds height="45" width="125" x="187" y="280" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="DMNShape_KnowledgeSource_1" dmnElementRef="KnowledgeSource_1">
        <dc:Bounds height="63" width="100" x="417" y="271" />
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="DMNEdge_InfoReq_1" dmnElementRef="InfoReq_1">
        <di:waypoint x="250" y="280" />
        <di:waypoint x="250" y="160" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="DMNEdge_KnowReq_1" dmnElementRef="KnowReq_1">
        <di:waypoint x="400" y="120" />
        <di:waypoint x="340" y="120" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="DMNEdge_AuthReq_1" dmnElementRef="AuthorityReq_1">
        <di:waypoint x="467" y="271" />
        <di:waypoint x="467" y="143" />
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,Oa=`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" id="Definitions_LoanOrigination" name="Loan Origination Example" namespace="http://camunda.org/schema/1.0/bpmn">
  <inputData id="InputData_Income" name="applicant_income">
    <variable id="Var_Income" name="applicant_income" typeRef="number" />
  </inputData>
  <inputData id="InputData_Expenses" name="applicant_expenses">
    <variable id="Var_Expenses" name="applicant_expenses" typeRef="number" />
  </inputData>
  <inputData id="InputData_LoanAmount" name="loan_amount">
    <variable id="Var_LoanAmount" name="loan_amount" typeRef="number" />
  </inputData>
  <inputData id="InputData_CreditScore" name="credit_score">
    <variable id="Var_CreditScore" name="credit_score" typeRef="number" />
  </inputData>

  <decision id="Decision_Affordability" name="Affordability">
    <variable id="Var_Affordability" name="Affordability" typeRef="boolean" />
    <informationRequirement id="InfoReq_Income">
      <requiredInput href="#InputData_Income" />
    </informationRequirement>
    <informationRequirement id="InfoReq_Expenses">
      <requiredInput href="#InputData_Expenses" />
    </informationRequirement>
    <informationRequirement id="InfoReq_LoanAmount">
      <requiredInput href="#InputData_LoanAmount" />
    </informationRequirement>
    <decisionTable id="DecisionTable_Affordability" hitPolicy="FIRST">
      <input id="Input_Aff_Income" label="Applicant Income">
        <inputExpression id="Expr_Aff_Income" typeRef="number">
          <text>applicant_income</text>
        </inputExpression>
      </input>
      <input id="Input_Aff_Expenses" label="Applicant Expenses">
        <inputExpression id="Expr_Aff_Expenses" typeRef="number">
          <text>applicant_expenses</text>
        </inputExpression>
      </input>
      <input id="Input_Aff_Amount" label="Loan Amount">
        <inputExpression id="Expr_Aff_Amount" typeRef="number">
          <text>loan_amount</text>
        </inputExpression>
      </input>
      <output id="Output_Affordability" label="Is Affordable" name="Affordability" typeRef="boolean" />
      <rule id="Rule_Aff_1">
        <inputEntry id="I_Aff_1_1"><text>-</text></inputEntry>
        <inputEntry id="I_Aff_1_2"><text>-</text></inputEntry>
        <inputEntry id="I_Aff_1_3"><text>-</text></inputEntry>
        <outputEntry id="O_Aff_1_1"><text>applicant_income - applicant_expenses &gt;= loan_amount * 0.15</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>

  <decision id="Decision_RiskCategory" name="RiskCategory">
    <variable id="Var_RiskCategory" name="RiskCategory" typeRef="string" />
    <informationRequirement id="InfoReq_CreditScore">
      <requiredInput href="#InputData_CreditScore" />
    </informationRequirement>
    <decisionTable id="DecisionTable_RiskCategory" hitPolicy="FIRST">
      <input id="Input_Risk_Score" label="Credit Score">
        <inputExpression id="Expr_Risk_Score" typeRef="number">
          <text>credit_score</text>
        </inputExpression>
      </input>
      <output id="Output_RiskCategory" label="Risk Category" name="RiskCategory" typeRef="string" />
      <rule id="Rule_Risk_1">
        <inputEntry id="I_Risk_1_1"><text>&lt; 600</text></inputEntry>
        <outputEntry id="O_Risk_1_1"><text>"High Risk"</text></outputEntry>
      </rule>
      <rule id="Rule_Risk_2">
        <inputEntry id="I_Risk_2_1"><text>[600..700[</text></inputEntry>
        <outputEntry id="O_Risk_2_1"><text>"Medium Risk"</text></outputEntry>
      </rule>
      <rule id="Rule_Risk_3">
        <inputEntry id="I_Risk_3_1"><text>&gt;= 700</text></inputEntry>
        <outputEntry id="O_Risk_3_1"><text>"Low Risk"</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>

  <decision id="Decision_Routing" name="Routing">
    <variable id="Var_Routing" name="Routing" typeRef="string" />
    <informationRequirement id="InfoReq_Affordability">
      <requiredDecision href="#Decision_Affordability" />
    </informationRequirement>
    <informationRequirement id="InfoReq_RiskCategory">
      <requiredDecision href="#Decision_RiskCategory" />
    </informationRequirement>
    <decisionTable id="DecisionTable_Routing" hitPolicy="FIRST">
      <input id="Input_Route_Aff" label="Affordability">
        <inputExpression id="Expr_Route_Aff" typeRef="boolean">
          <text>Affordability</text>
        </inputExpression>
      </input>
      <input id="Input_Route_Risk" label="Risk Category">
        <inputExpression id="Expr_Route_Risk" typeRef="string">
          <text>RiskCategory</text>
        </inputExpression>
      </input>
      <output id="Output_Routing" label="Routing Action" name="Routing" typeRef="string" />
      <rule id="Rule_Route_1">
        <inputEntry id="I_Route_1_1"><text>false</text></inputEntry>
        <inputEntry id="I_Route_1_2"><text>-</text></inputEntry>
        <outputEntry id="O_Route_1_1"><text>"Decline"</text></outputEntry>
      </rule>
      <rule id="Rule_Route_2">
        <inputEntry id="I_Route_2_1"><text>true</text></inputEntry>
        <inputEntry id="I_Route_2_2"><text>"Low Risk"</text></inputEntry>
        <outputEntry id="O_Route_2_1"><text>"Auto-Approve"</text></outputEntry>
      </rule>
      <rule id="Rule_Route_3">
        <inputEntry id="I_Route_3_1"><text>true</text></inputEntry>
        <inputEntry id="I_Route_3_2"><text>"Medium Risk"</text></inputEntry>
        <outputEntry id="O_Route_3_1"><text>"Manual Review"</text></outputEntry>
      </rule>
      <rule id="Rule_Route_4">
        <inputEntry id="I_Route_4_1"><text>true</text></inputEntry>
        <inputEntry id="I_Route_4_2"><text>"High Risk"</text></inputEntry>
        <outputEntry id="O_Route_4_1"><text>"Decline"</text></outputEntry>
      </rule>
    </decisionTable>
  </decision>

  <dmndi:DMNDI>
    <dmndi:DMNDiagram id="DMNDiagram_Origination">
      <dmndi:DMNShape id="Shape_Routing" dmnElementRef="Decision_Routing">
        <dc:Bounds height="80" width="180" x="300" y="100" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_Affordability" dmnElementRef="Decision_Affordability">
        <dc:Bounds height="80" width="180" x="180" y="240" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_RiskCategory" dmnElementRef="Decision_RiskCategory">
        <dc:Bounds height="80" width="180" x="420" y="240" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_Income" dmnElementRef="InputData_Income">
        <dc:Bounds height="45" width="125" x="60" y="380" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_Expenses" dmnElementRef="InputData_Expenses">
        <dc:Bounds height="45" width="125" x="200" y="380" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_LoanAmount" dmnElementRef="InputData_LoanAmount">
        <dc:Bounds height="45" width="125" x="340" y="380" />
      </dmndi:DMNShape>
      <dmndi:DMNShape id="Shape_CreditScore" dmnElementRef="InputData_CreditScore">
        <dc:Bounds height="45" width="125" x="480" y="380" />
      </dmndi:DMNShape>
      <dmndi:DMNEdge id="Edge_Route_Aff" dmnElementRef="InfoReq_Affordability">
        <di:waypoint x="270" y="240" />
        <di:waypoint x="390" y="180" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="Edge_Route_Risk" dmnElementRef="InfoReq_RiskCategory">
        <di:waypoint x="510" y="240" />
        <di:waypoint x="390" y="180" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="Edge_Aff_Income" dmnElementRef="InfoReq_Income">
        <di:waypoint x="122" y="380" />
        <di:waypoint x="270" y="320" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="Edge_Aff_Expenses" dmnElementRef="InfoReq_Expenses">
        <di:waypoint x="262" y="380" />
        <di:waypoint x="270" y="320" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="Edge_Aff_Amount" dmnElementRef="InfoReq_LoanAmount">
        <di:waypoint x="402" y="380" />
        <di:waypoint x="270" y="320" />
      </dmndi:DMNEdge>
      <dmndi:DMNEdge id="Edge_Risk_Score" dmnElementRef="InfoReq_CreditScore">
        <di:waypoint x="542" y="380" />
        <di:waypoint x="510" y="320" />
      </dmndi:DMNEdge>
    </dmndi:DMNDiagram>
  </dmndi:DMNDI>
</definitions>
`,bt=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:Ea,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:Da,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:Ra,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:Sa,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"},{kind:"table",id:"loan_approval",title:"Loan approval",description:"Consumer loan approval & credit limit by credit score and monthly income — a FIRST-hit decision table. (Formerly one of Studio’s own hardcoded samples, unified here per BRE-122 so it also appears in Playground.)",dmnXml:ka,input1:{name:"creditScore",label:"Credit score",min:300,max:850,step:5,format:n=>String(n)},input2:{name:"monthlyIncome",label:"Monthly income",min:0,max:15e3,step:250,format:n=>`$${n.toLocaleString()}`},flagField:"approved",amountField:"limit",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"",amountFormat:n=>`$${n.toLocaleString()}`,presets:[{label:"Strong applicant",input1:720,input2:6500},{label:"Borderline",input1:610,input2:3200},{label:"Below threshold",input1:560,input2:2e3}],defaultInput1:720,defaultInput2:6500},{kind:"generic",id:"tck_0004",title:"DMN TCK: simple table (UNIQUE)",description:"An OMG DMN Technology Compatibility Kit conformance fixture (0004-simpletable-U), demonstrating the UNIQUE hit policy over 3 mixed-type inputs (number, string, boolean). Shown as plain fields, not curated sliders — a 3-input mixed-type table genuinely doesn’t fit the 2-numeric-slider model (see BRE-122).",dmnXml:Ia,inputs:[{name:"Age",label:"Age",type:"number",default:18},{name:"RiskCategory",label:"Risk category",type:"string",options:["High","Medium","Low"],default:"Medium"},{name:"isAffordable",label:"Is affordable",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"customer_tier_routing",title:"Customer tier routing",description:"Discount % and priority shipping by loyalty tier and cart value — one string input and one numeric input, so it’s shown as plain fields rather than forced onto two numeric sliders.",dmnXml:Ma,inputs:[{name:"memberStatus",label:"Member status",type:"string",options:["gold","silver"],default:"gold"},{name:"cartValue",label:"Cart value",type:"number",default:120}],display:"table"},{kind:"generic",id:"fraud_risk_scoring",title:"Fraud risk scoring",description:"Risk score & recommended action by transaction amount and whether it’s international — a numeric input plus a boolean input, shown as plain fields.",dmnXml:Na,inputs:[{name:"amount",label:"Amount",type:"number",default:1500},{name:"isInternational",label:"International transaction",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"full_drd_elements",title:"Full DRD element types (structural demo)",description:"A structural/edge-case demo, not a realistic business scenario: exercises every DRG element type DMN defines (input data, a business knowledge model, a knowledge source, an authority requirement) alongside one real decision table. Best explored via Studio’s DRD Diagram tab; the single text input below only drives the one decision’s table.",dmnXml:Ta,inputs:[{name:"Raw Input",label:"Raw input",type:"string",options:["valid","invalid"],default:"valid"}],display:"table"},{kind:"generic",id:"loan_origination",title:"Loan origination (multi-decision graph)",description:"A genuine 3-decision chain (Affordability, RiskCategory, then Routing, which requires both) over 4 primitive inputs — too many inputs and too structurally different from a flat table to force onto Playground’s 2-slider model, so it’s shown as plain fields plus the DRD diagram with live per-decision values overlaid after you run it.",dmnXml:Oa,inputs:[{name:"applicant_income",label:"Applicant income",type:"number",default:6e3},{name:"applicant_expenses",label:"Applicant expenses",type:"number",default:2500},{name:"loan_amount",label:"Loan amount",type:"number",default:1e4},{name:"credit_score",label:"Credit score",type:"number",default:720}],display:"graph"}];function ln(n){if(n.kind==="generic"){const t={};for(const i of n.inputs)t[i.name]=i.default;return t}return{[n.input1.name]:n.defaultInput1,[n.input2.name]:n.defaultInput2}}const $e="https://www.omg.org/spec/DMN/20191111/MODEL/",ut="https://www.omg.org/spec/DMN/20191111/DMNDI/",mt="https://www.omg.org/spec/DMN/20211108/MODEL/",Tn="https://www.omg.org/spec/DMN/20211108/DMNDI/",vt="https://www.omg.org/spec/DMN/20230324/MODEL/",On="https://www.omg.org/spec/DMN/20230324/DMNDI/",Qe="https://www.omg.org/spec/DMN/20250201/MODEL/",An="https://www.omg.org/spec/DMN/20250201/DMNDI/";let rt=Qe;function Cn(n){return n&&(n.includes(Qe)?n.replaceAll(Qe,$e).replaceAll(An,ut):n.includes(vt)?n.replaceAll(vt,$e).replaceAll(On,ut):n.includes(mt)?n.replaceAll(mt,$e).replaceAll(Tn,ut):n)}function to(n){return n&&(n.includes(Qe)?rt=Qe:n.includes(vt)?rt=vt:n.includes(mt)?rt=mt:rt=$e,Cn(n))}function jn(n){return Cn(n)}function no(n,t){if(!n)return n;const i=rt||Qe,a=i===Qe?An:i===vt?On:i===mt?Tn:ut;return i===$e?n:n.replaceAll($e,i).replaceAll(ut,a)}const Yt=new Kn;async function Aa(n){const{rootElement:t}=await Yt.fromXML(jn(n));return t}async function ao(n){const{xml:t}=await Yt.toXML(n,{format:!0});return t}function ze(n,t={}){return Yt.create(n,t)}const Ca=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function Qt(n){return n.get("drgElement")||[]}function ja(n){return n.$type==="dmn:Decision"}function io(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:DecisionTable"?t:null}function ro(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:LiteralExpression"?t:null}function qn(n){const t=[],i=a=>a.replace(/^#/,"");for(const a of n.get("informationRequirement")||[]){const o=a.get("requiredInput")||a.get("requiredDecision");o&&o.href&&t.push(i(o.href))}for(const a of n.get("knowledgeRequirement")||[]){const o=a.get("requiredKnowledge");o&&o.href&&t.push(i(o.href))}return t}const Vt={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},un={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function qa(n){const t=Qt(n),i=new nn.graphlib.Graph;i.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),i.setDefaultEdgeLabel(()=>({}));for(const d of t){const R=Vt[d.$type];if(!R)continue;const D=un[R];i.setNode(d.id,{...D})}const a=[];for(const d of t)if(Vt[d.$type])for(const R of qn(d))i.node(R)&&(i.setEdge(R,d.id),a.push([R,d.id]));nn.layout(i);const o=[];let c=0,p=0;for(const d of t){const R=Vt[d.$type];if(!R)continue;const D=i.node(d.id),k=un[R];o.push({id:d.id,name:d.get("name")||d.id,type:R,x:D.x-k.width/2,y:D.y-k.height/2,width:k.width,height:k.height,element:d}),c=Math.max(c,D.x+k.width/2),p=Math.max(p,D.y+k.height/2)}const m=a.map(([d,R])=>{var D;return{from:d,to:R,points:(((D=i.edge(d,R))==null?void 0:D.points)||[]).map(k=>({x:k.x,y:k.y}))}});return{nodes:o,edges:m,width:c+40,height:p+40}}var Fa=b('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),Pa=b("<option> </option>"),La=b('<select class="svelte-1qozfr"></select>'),Ba=b('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),dn=b('<div class="dt-col-label svelte-1qozfr"> </div>'),Wa=b('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Va=b('<th class="dt-input-col svelte-1qozfr"><!></th>'),Ua=b('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Ka=b('<th class="dt-output-col svelte-1qozfr"><!></th>'),za=b('<select class="dt-io-field svelte-1qozfr"><option>true</option><option>false</option></select>'),Ja=b('<input class="dt-io-field svelte-1qozfr"/>'),cn=b('<span class="dt-io-value svelte-1qozfr"> </span>'),Xa=b('<td class="dt-io-cell dt-io-input svelte-1qozfr"><!></td>'),Ha=b('<span class="dt-io-value dt-io-empty svelte-1qozfr">—</span>'),Ga=b('<td class="dt-io-cell dt-io-output svelte-1qozfr"><!></td>'),Ya=b('<tr class="dt-io-row svelte-1qozfr"><td class="dt-rownum dt-io-label svelte-1qozfr">Test</td><!><!></tr>'),Qa=b('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),pn=b('<input class="svelte-1qozfr"/>'),mn=b('<td class="svelte-1qozfr"><!></td>'),Za=b('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),$a=b('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr><!></thead><tbody></tbody></table></div></div>');function vn(n,t){Le(t,!0);let i=he(t,"readonly",3,!1),a=he(t,"matchedRuleIndices",19,()=>[]),o=pe(()=>t.decision.get("decisionLogic")),c=pe(()=>e(o).get("input")),p=pe(()=>e(o).get("output")),m=pe(()=>e(o).get("rule"));function d(_){var f;e(o).set("hitPolicy",_),(f=t.onchange)==null||f.call(t)}function R(_,f){var w;_.set("label",f),(w=t.onchange)==null||w.call(t)}function D(_,f){var w;_.get("inputExpression").set("text",f),(w=t.onchange)==null||w.call(t)}function k(_,f){var w;_.get("inputExpression").set("typeRef",f),(w=t.onchange)==null||w.call(t)}function v(_,f){var w;_.set("name",f),(w=t.onchange)==null||w.call(t)}function O(_,f){var w;_.set("label",f),(w=t.onchange)==null||w.call(t)}function A(_,f){var w;_.set("typeRef",f),(w=t.onchange)==null||w.call(t)}function C(_,f,w){var j;_.get("inputEntry")[f].set("text",w),(j=t.onchange)==null||j.call(t)}function W(_,f,w){var j;_.get("outputEntry")[f].set("text",w),(j=t.onchange)==null||j.call(t)}function te(){var w;const _=ze("dmn:LiteralExpression",{text:""}),f=ze("dmn:InputClause",{label:"New Input",inputExpression:_});e(o).get("input").push(f);for(const j of e(m))j.get("inputEntry").push(ze("dmn:UnaryTests",{text:"-"}));(w=t.onchange)==null||w.call(t)}function re(_){var f;e(o).get("input").splice(_,1);for(const w of e(m))w.get("inputEntry").splice(_,1);(f=t.onchange)==null||f.call(t)}function g(){var f;const _=ze("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(o).get("output").push(_);for(const w of e(m))w.get("outputEntry").push(ze("dmn:LiteralExpression",{text:'""'}));(f=t.onchange)==null||f.call(t)}function l(_){var f;e(o).get("output").splice(_,1);for(const w of e(m))w.get("outputEntry").splice(_,1);(f=t.onchange)==null||f.call(t)}function E(){var w;const _=e(c).map(()=>ze("dmn:UnaryTests",{text:"-"})),f=e(p).map(()=>ze("dmn:LiteralExpression",{text:'""'}));e(o).get("rule").push(ze("dmn:DecisionRule",{inputEntry:_,outputEntry:f})),(w=t.onchange)==null||w.call(t)}function H(_){var f;e(o).get("rule").splice(_,1),(f=t.onchange)==null||f.call(t)}var fe=$a(),se=s(fe),be=s(se),xe=u(s(be));{var me=_=>{var f=Fa(),w=s(f);N(j=>P(w,j),[()=>e(o).get("hitPolicy")||"UNIQUE"]),r(_,f)},ue=_=>{var f=La();Ne(f,21,()=>Ca,Oe,(j,Y)=>{var ae=Pa(),U=s(ae),L={};N(()=>{P(U,e(Y)),L!==(L=e(Y))&&(ae.value=(ae.__value=e(Y))??"")}),r(j,ae)});var w;It(f),N(j=>{w!==(w=j)&&(f.value=(f.__value=j)??"",Mt(f,j))},[()=>e(o).get("hitPolicy")||"UNIQUE"]),le("change",f,j=>d(j.currentTarget.value)),r(_,f)};X(xe,_=>{i()?_(me):_(ue,-1)})}var Re=u(be,2);{var I=_=>{var f=Ba(),w=ve(f),j=u(w,2),Y=u(j,2);le("click",w,te),le("click",j,g),le("click",Y,E),r(_,f)};X(Re,_=>{i()||_(I)})}var x=u(se,2),$=s(x);let oe;var M=s($),h=s(M),q=u(s(h));Ne(q,17,()=>e(c),Oe,(_,f,w)=>{var j=Va(),Y=s(j);{var ae=L=>{var z=dn(),Q=s(z);N(T=>P(Q,T),[()=>e(f).get("label")||""]),r(L,z)},U=L=>{var z=Wa(),Q=ve(z),T=u(Q,2),B=u(T,2),S=s(B),F=u(S,2);N((J,ge,ke)=>{Ae(Q,J),Ae(T,ge),Ae(S,ke)},[()=>e(f).get("label")||"",()=>e(f).get("inputExpression").get("text")||"",()=>e(f).get("inputExpression").get("typeRef")||""]),le("input",Q,J=>R(e(f),J.currentTarget.value)),le("input",T,J=>D(e(f),J.currentTarget.value)),le("input",S,J=>k(e(f),J.currentTarget.value)),le("click",F,()=>re(w)),r(L,z)};X(Y,L=>{i()?L(ae):L(U,-1)})}r(_,j)});var V=u(q);Ne(V,17,()=>e(p),Oe,(_,f,w)=>{var j=Ka(),Y=s(j);{var ae=L=>{var z=dn(),Q=s(z);N(T=>P(Q,T),[()=>e(f).get("label")||""]),r(L,z)},U=L=>{var z=Ua(),Q=ve(z),T=u(Q,2),B=u(T,2),S=s(B),F=u(S,2);N((J,ge,ke)=>{Ae(Q,J),Ae(T,ge),Ae(S,ke)},[()=>e(f).get("label")||"",()=>e(f).get("name")||"",()=>e(f).get("typeRef")||""]),le("input",Q,J=>O(e(f),J.currentTarget.value)),le("input",T,J=>v(e(f),J.currentTarget.value)),le("input",S,J=>A(e(f),J.currentTarget.value)),le("click",F,()=>l(w)),r(L,z)};X(Y,L=>{i()?L(ae):L(U,-1)})}r(_,j)});var Z=u(h);{var ne=_=>{var f=Ya(),w=u(s(f));Ne(w,17,()=>e(c),Oe,(Y,ae)=>{const U=pe(()=>e(ae).get("inputExpression").get("text")||""),L=pe(()=>(e(ae).get("inputExpression").get("typeRef")||"").toLowerCase());var z=Xa(),Q=s(z);{var T=S=>{var F=qe(),J=ve(F);{var ge=De=>{var G=za(),K=s(G);K.value=K.__value="true";var ce=u(K);ce.value=ce.__value="false";var Ie;It(G),N(Te=>{Ie!==(Ie=Te)&&(G.value=(G.__value=Te)??"",Mt(G,Te))},[()=>String(t.inputValues[e(U)])]),le("change",G,Te=>{var Me;return(Me=t.onInputValueChange)==null?void 0:Me.call(t,e(U),Te.currentTarget.value)}),r(De,G)},ke=De=>{var G=Ja();N(()=>{ie(G,"type",e(L)==="number"?"number":"text"),Ae(G,t.inputValues[e(U)])}),le("input",G,K=>{var ce;return(ce=t.onInputValueChange)==null?void 0:ce.call(t,e(U),K.currentTarget.value)}),r(De,G)};X(J,De=>{e(L)==="boolean"?De(ge):De(ke,-1)})}r(S,F)},B=S=>{var F=cn(),J=s(F);N(ge=>P(J,ge),[()=>String(t.outputValues[e(U)])]),r(S,F)};X(Q,S=>{t.inputValues&&t.inputValues[e(U)]!==void 0?S(T):t.outputValues&&t.outputValues[e(U)]!==void 0&&S(B,1)})}r(Y,z)});var j=u(w);Ne(j,17,()=>e(p),Oe,(Y,ae)=>{const U=pe(()=>e(ae).get("name")||"");var L=Ga(),z=s(L);{var Q=B=>{var S=cn(),F=s(S);N(J=>P(F,J),[()=>String(t.outputValues[e(U)])]),r(B,S)},T=B=>{var S=Ha();r(B,S)};X(z,B=>{t.outputValues&&t.outputValues[e(U)]!==void 0?B(Q):B(T,-1)})}r(Y,L)}),r(_,f)};X(Z,_=>{!i()&&(t.inputValues||t.outputValues)&&_(ne)})}var de=u(M);Ne(de,21,()=>e(m),Oe,(_,f,w)=>{var j=Za();let Y;var ae=s(j),U=s(ae);U.nodeValue=`${w+1} `;var L=u(U);{var z=B=>{var S=Qa();le("click",S,()=>H(w)),r(B,S)};X(L,B=>{i()||B(z)})}var Q=u(ae);Ne(Q,17,()=>e(f).get("inputEntry"),Oe,(B,S,F)=>{var J=mn(),ge=s(J);{var ke=G=>{var K=we();N(ce=>P(K,ce),[()=>e(S).get("text")||"-"]),r(G,K)},De=G=>{var K=pn();N(ce=>Ae(K,ce),[()=>e(S).get("text")||""]),le("input",K,ce=>C(e(f),F,ce.currentTarget.value)),r(G,K)};X(ge,G=>{i()?G(ke):G(De,-1)})}r(B,J)});var T=u(Q);Ne(T,17,()=>e(f).get("outputEntry"),Oe,(B,S,F)=>{var J=mn(),ge=s(J);{var ke=G=>{var K=we();N(ce=>P(K,ce),[()=>e(S).get("text")||""]),r(G,K)},De=G=>{var K=pn();N(ce=>Ae(K,ce),[()=>e(S).get("text")||""]),le("input",K,ce=>W(e(f),F,ce.currentTarget.value)),r(G,K)};X(ge,G=>{i()?G(ke):G(De,-1)})}r(B,J)}),N(B=>Y=Pe(j,1,"svelte-1qozfr",null,Y,B),[()=>({matched:a().includes(w)})]),r(_,j)}),N(()=>oe=Pe($,1,"dt-table svelte-1qozfr",null,oe,{readonly:i()})),r(n,fe),Be()}Ge(["change","click","input"]);var ei=b('<span class="le-type-static svelte-125hirw"> </span>'),ti=b('<input placeholder="e.g. number" class="svelte-125hirw"/>'),ni=b('<input class="le-io-input svelte-125hirw"/>'),ai=b('<span class="le-io-value svelte-125hirw"> </span>'),ii=b('<div class="le-io-field svelte-125hirw"><label class="svelte-125hirw"> </label> <!></div>'),ri=b('<div class="le-io-row svelte-125hirw"><!> <div class="le-io-field le-io-result svelte-125hirw"><label for="le-io-result" class="svelte-125hirw"> </label> <span id="le-io-result" class="le-io-value svelte-125hirw"> </span></div></div>'),oi=b('<pre class="le-textarea le-static svelte-125hirw"> </pre>'),si=b('<textarea class="le-textarea svelte-125hirw" placeholder="FEEL expression, e.g. 400 * age_factor * claims_factor" spellcheck="false"></textarea>'),li=b('<div class="le-editor svelte-125hirw"><div class="le-toolbar svelte-125hirw"><label class="svelte-125hirw">Result type <!></label></div> <!> <!></div>');function oo(n,t){Le(t,!0);let i=he(t,"readonly",3,!1),a=pe(()=>t.decision.get("decisionLogic"));function o(g){var l;e(a).set("text",g),(l=t.onchange)==null||l.call(t)}function c(g){var E;const l=t.decision.get("variable");l&&(l.set("typeRef",g),(E=t.onchange)==null||E.call(t))}let p=pe(()=>{const g=t.decision.$parent;if(!g)return[];const l=new Map(Qt(g).map(E=>[E.id,E]));return qn(t.decision).map(E=>l.get(E)).filter(E=>!!E).map(E=>({id:E.id,name:E.get("name")||E.id}))}),m=pe(()=>{var g;return((g=t.decision.get("variable"))==null?void 0:g.get("name"))||t.decision.get("name")});var d=li(),R=s(d),D=s(R),k=u(s(D));{var v=g=>{var l=ei(),E=s(l);N(H=>P(E,H),[()=>{var H;return((H=t.decision.get("variable"))==null?void 0:H.get("typeRef"))||""}]),r(g,l)},O=g=>{var l=ti();N(E=>Ae(l,E),[()=>{var E;return((E=t.decision.get("variable"))==null?void 0:E.get("typeRef"))||""}]),le("input",l,E=>c(E.currentTarget.value)),r(g,l)};X(k,g=>{i()?g(v):g(O,-1)})}var A=u(R,2);{var C=g=>{var l=ri(),E=s(l);Ne(E,17,()=>e(p),me=>me.id,(me,ue)=>{var Re=ii(),I=s(Re),x=s(I),$=u(I,2);{var oe=h=>{var q=ni();N(()=>{ie(q,"id",`le-io-${e(ue).id}`),Ae(q,t.inputValues[e(ue).name])}),le("input",q,V=>{var Z;return(Z=t.onInputValueChange)==null?void 0:Z.call(t,e(ue).name,V.currentTarget.value)}),r(h,q)},M=h=>{var q=ai(),V=s(q);N(Z=>{ie(q,"id",`le-io-${e(ue).id}`),P(V,Z)},[()=>t.outputValues&&t.outputValues[e(ue).name]!==void 0?String(t.outputValues[e(ue).name]):"—"]),r(h,q)};X($,h=>{t.inputValues&&t.inputValues[e(ue).name]!==void 0?h(oe):h(M,-1)})}N(()=>{ie(I,"for",`le-io-${e(ue).id}`),P(x,e(ue).name)}),r(me,Re)});var H=u(E,2),fe=s(H),se=s(fe),be=u(fe,2),xe=s(be);N(me=>{P(se,`${e(m)??""} (result)`),P(xe,me)},[()=>t.outputValues&&t.outputValues[e(m)]!==void 0?String(t.outputValues[e(m)]):"—"]),r(g,l)};X(A,g=>{!i()&&(t.inputValues||t.outputValues)&&(e(p).length>0||t.outputValues)&&g(C)})}var W=u(A,2);{var te=g=>{var l=oi(),E=s(l);N(H=>P(E,H),[()=>e(a).get("text")||""]),r(g,l)},re=g=>{var l=si();N(E=>Ae(l,E),[()=>e(a).get("text")||""]),le("input",l,E=>o(E.currentTarget.value)),r(g,l)};X(W,g=>{i()?g(te):g(re,-1)})}r(n,d),Be()}Ge(["input"]);var ui=nt('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),di=nt('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),ci=nt('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),pi=nt('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),mi=nt('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),vi=nt('<g role="button" tabindex="0"><!><!></g>'),fi=b('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function fn(n,t){Le(t,!0);let i=pe(()=>qa(t.definitions)),a=ee(Fe({x:0,y:0,w:800,h:500})),o=ee(!1),c={x:0,y:0},p={x:0,y:0};Ze(()=>{y(a,{x:0,y:0,w:Math.max(e(i).width,400),h:Math.max(e(i).height,300)},!0)});function m(g){g.preventDefault();const l=g.deltaY>0?1.1:.9,E=Math.max(200,Math.min(4e3,e(a).w*l)),H=Math.max(150,Math.min(3e3,e(a).h*l));y(a,{...e(a),w:E,h:H},!0)}function d(g){g.target.closest(".drd-node")||(y(o,!0),c={x:g.clientX,y:g.clientY},p={x:e(a).x,y:e(a).y})}function R(g,l){if(!e(o))return;const E=e(a).w/l.clientWidth;y(a,{...e(a),x:p.x-(g.clientX-c.x)*E,y:p.y-(g.clientY-c.y)*E},!0)}function D(){y(o,!1)}function k(g){switch(g){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function v(g){switch(g){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function O(g){return g.points.length?g.points.map((l,E)=>`${E===0?"M":"L"} ${l.x} ${l.y}`).join(" "):""}function A(g){if(!t.nodeValues)return null;const l=g.id in t.nodeValues?t.nodeValues[g.id]:t.nodeValues[g.name];return l===void 0?null:t.formatNodeValue?t.formatNodeValue(g.id,l):String(l)}var C=fi(),W=s(C),te=u(s(W));Ne(te,17,()=>e(i).edges,Oe,(g,l)=>{var E=ui();N(H=>ie(E,"d",H),[()=>O(e(l))]),r(g,E)});var re=u(te);Ne(re,17,()=>e(i).nodes,Oe,(g,l)=>{const E=pe(()=>A(e(l)));var H=vi();let fe;var se=s(H);{var be=I=>{var x=di();N(($,oe)=>{ie(x,"x",e(l).x),ie(x,"y",e(l).y),ie(x,"width",e(l).width),ie(x,"height",e(l).height),ie(x,"fill",$),ie(x,"stroke",oe),ie(x,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>k(e(l).type),()=>v(e(l).type)]),r(I,x)},xe=I=>{var x=ci();N(($,oe)=>{ie(x,"x",e(l).x),ie(x,"y",e(l).y),ie(x,"width",e(l).width),ie(x,"height",e(l).height),ie(x,"fill",$),ie(x,"stroke",oe),ie(x,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>k(e(l).type),()=>v(e(l).type)]),r(I,x)};X(se,I=>{e(l).type==="inputData"?I(be):I(xe,-1)})}var me=u(se);{var ue=I=>{var x=pi(),$=ve(x),oe=s($),M=u($),h=s(M);N(()=>{ie($,"x",e(l).x+e(l).width/2),ie($,"y",e(l).y+e(l).height*.4),P(oe,e(l).name),ie(M,"x",e(l).x+e(l).width/2),ie(M,"y",e(l).y+e(l).height*.68),P(h,e(E))}),r(I,x)},Re=I=>{var x=mi(),$=s(x);N(()=>{ie(x,"x",e(l).x+e(l).width/2),ie(x,"y",e(l).y+e(l).height/2),P($,e(l).name)}),r(I,x)};X(me,I=>{e(E)!==null?I(ue):I(Re,-1)})}N(()=>fe=Pe(H,0,"drd-node svelte-1jgcg8n",null,fe,{active:e(l).id===t.activeId,static:!t.onselect})),le("click",H,()=>{var I;return(I=t.onselect)==null?void 0:I.call(t,e(l).id)}),le("keydown",H,I=>{var x;return I.key==="Enter"&&((x=t.onselect)==null?void 0:x.call(t,e(l).id))}),r(g,H)}),N(()=>ie(W,"viewBox",`${e(a).x??""} ${e(a).y??""} ${e(a).w??""} ${e(a).h??""}`)),Ht("wheel",W,m),le("pointerdown",W,d),le("pointermove",W,g=>R(g,g.currentTarget)),le("pointerup",W,D),Ht("pointerleave",W,D),r(n,C),Be()}Ge(["pointerdown","pointermove","pointerup","click","keydown"]);const Ue=Fe({current:null,facts:{}});var gi=b("<div><!></div>");function Ct(n,t){let i=he(t,"direction",3,"row"),a=he(t,"bordered",3,!1),o=he(t,"gap",3,"var(--sp-2)"),c=he(t,"class",3,"");var p=gi();let m,d;var R=s(p);ct(R,()=>t.children??pt),N(()=>{m=Pe(p,1,`tab-group ${c()??""}`,"svelte-13apwse",m,{bordered:a()}),d=In(p,"",d,{"flex-direction":i(),gap:o()})}),r(n,p)}var _i=b("<button><!></button>");function ft(n,t){let i=he(t,"active",3,!1),a=he(t,"variant",3,"pill"),o=he(t,"fullWidth",3,!1),c=he(t,"disabled",3,!1),p=he(t,"type",3,"button");var m=_i();let d;var R=s(m);ct(R,()=>t.children??pt),N(()=>{ie(m,"type",p()),d=Pe(m,1,`tab tab-${a()??""}`,"svelte-184qymf",d,{active:i(),"full-width":o()}),m.disabled=c(),ie(m,"aria-pressed",i())}),le("click",m,function(...D){var k;(k=t.onclick)==null||k.apply(this,D)}),r(n,m)}Ge(["click"]);var yi=b("<div><!></div>");function He(n,t){let i=he(t,"padding",3,"var(--sp-5)"),a=he(t,"class",3,"");var o=yi();let c;var p=s(o);ct(p,()=>t.children??pt),N(()=>{Pe(o,1,`panel ${a()??""}`,"svelte-hxsa5u"),c=In(o,"",c,{padding:i()})}),r(n,o)}var hi=new Set(["$$slots","$$events","$$legacy","value","type","variant","class"]),gn=b("<input/>");function Xe(n,t){Le(t,!0);let i=he(t,"value",15),a=he(t,"type",3,"text"),o=he(t,"variant",3,"default"),c=he(t,"class",3,""),p=Mn(t,hi);var m=qe(),d=ve(m);{var R=k=>{var v=gn();Nt(v,()=>({type:"number",class:`input input-${o()??""} ${c()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),Tt(v,i),r(k,v)},D=k=>{var v=gn();Nt(v,()=>({type:a(),class:`input input-${o()??""} ${c()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),Tt(v,i),r(k,v)};X(d,k=>{a()==="number"?k(R):k(D,-1)})}r(n,m),Be()}var bi=b('<!> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <!></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <!></label> <input id="input2" type="range" class="svelte-175p7lt"/></div>',1),xi=b('<select class="generic-select svelte-175p7lt"><option>true</option><option>false</option></select>'),wi=b("<option> </option>"),Ei=b('<select class="generic-select svelte-175p7lt"></select>'),Di=b('<div class="field generic-field svelte-175p7lt"><label class="svelte-175p7lt"> </label> <!></div>'),Ri=b('<div class="verdict bad svelte-175p7lt"><div class="status svelte-175p7lt">Example error</div> <div class="error-detail mono svelte-175p7lt"> </div></div>'),Si=b('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),ki=b('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Ii=b('<pre class="generic-result mono svelte-175p7lt"> </pre>'),Mi=b('<div class="rate mono svelte-175p7lt">—</div>'),Ni=b('<div class="verdict good generic-verdict svelte-175p7lt"><div class="status svelte-175p7lt">Result</div> <!></div>'),Ti=b('<h2 class="eyebrow svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <!> <!>',1),Oi=b(`<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; unavailable</h2> <p class="lede svelte-175p7lt">This example didn't parse/compile cleanly -- see the error detail in the left panel.</p>`,1),_n=b('<div class="table-host svelte-175p7lt"><!></div>'),yn=b('<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),hn=b('<div class="graph-host svelte-175p7lt"><!></div>'),Ai=b(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Ci=b('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),ji=b('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),qi=b('<h1 class="page-title svelte-175p7lt">Playground</h1> <!> <div class="stage svelte-175p7lt"><!> <!></div>',1);function Fi(n,t){Le(t,!0);let i=ee(0),a=pe(()=>bt[e(i)]),o=ee(0),c=ee(0),p=ee(Fe({})),m=ee("loading the engine…"),d=ee(!1),R=!1,D=ee(null),k=null,v=ee(null),O=ee(!0),A=ee(null),C=ee(Fe([])),W=ee(Fe({})),te=ee(null),re=ee(Fe({})),g=ee(0),l=pe(()=>{if(!e(D))return null;const M=Qt(e(D)).filter(ja);return e(a).kind==="generic"&&e(a).display==="table"&&e(a).decisionId?M.find(h=>h.id===e(a).decisionId)||M[0]||null:M[0]||null});Ze(()=>{Ue.current=e(a),Ue.facts=e(a).kind==="generic"?{...e(p)}:{[e(a).input1.name]:e(o),[e(a).input2.name]:e(c)}});async function E(M){try{y(D,await Aa(M.dmnXml),!0),k=fa("dmn-xml",JSON.stringify(jn(M.dmnXml))),y(v,null)}catch(h){k=null,y(D,null),y(v,`This example failed to compile: ${(h==null?void 0:h.message)??String(h)}`),console.error("Failed to load/compile example",M.id,h)}}function H(){if(!k)return;const M=e(a);try{if(M.kind==="generic"){const ne={};for(const f of M.inputs)ne[f.name]=e(p)[f.name];const de=sn(k,JSON.stringify(ne)),_=JSON.parse(de);if(y(te,_.result,!0),M.display==="table")y(C,_.trace&&_.trace.matched_rules||[],!0);else{const f=_.trace&&_.trace.intermediates||{},w=typeof _.result=="object"&&_.result?_.result:{};y(re,{...f,...w},!0)}return}const h={};h[M.input1.name]=e(o),h[M.input2.name]=e(c);const q=sn(k,JSON.stringify(h)),V=JSON.parse(q);if(M.kind==="graph"){const ne=V.trace&&V.trace.intermediates||{},de={};for(const _ of M.nodes)de[_.id]=ne[_.id];y(W,de,!0);return}const Z=V.result;y(C,V.trace&&V.trace.matched_rules||[],!0),y(O,!!Z[M.flagField]),y(A,Z[M.flagField]?Z[M.amountField]:null,!0)}catch(h){y(v,`This example failed to evaluate: ${(h==null?void 0:h.message)??String(h)}`),console.error("Failed to evaluate example",M.id,h)}}async function fe(M){y(i,M,!0);const h=bt[M];y(g,h.kind==="generic"?null:0,!0),y(v,null),y(te,null),y(re,{},!0),y(C,[],!0),y(W,{},!0),h.kind==="generic"?y(p,ln(h),!0):(y(o,h.defaultInput1,!0),y(c,h.defaultInput2,!0)),R&&(await E(h),H())}function se(M){e(a).kind!=="generic"&&(y(o,e(a).presets[M].input1,!0),y(c,e(a).presets[M].input2,!0),y(g,M,!0),H())}function be(){y(g,null),H()}function xe(M,h){if(e(a).kind==="generic")return;const q=M===1?e(a).input1:e(a).input2;let V=parseFloat(h);isNaN(V)&&(V=M===1?e(o):e(c)),V=Math.min(q.max,Math.max(q.min,V)),M===1?y(o,V,!0):y(c,V,!0),y(g,null),H()}function me(M,h){y(p,{...e(p),[M]:h},!0),y(g,null),H()}function ue(M,h){const q=e(a).kind==="graph"?e(a).nodes.find(V=>V.id===M):void 0;return q?q.format(h):String(h)}Ft(async()=>{try{await wa(),R=!0;const M=bt[e(i)];M.kind==="generic"?y(p,ln(M),!0):(y(o,M.defaultInput1,!0),y(c,M.defaultInput2,!0)),await E(e(a)),y(m,"compiled and running — real engine, in your browser, zero network calls."),H()}catch(M){y(d,!0),y(m,"engine failed to load: "+((M==null?void 0:M.message)??String(M))),console.error(M)}});var Re=qi(),I=u(ve(Re),2);Ct(I,{class:"example-tabs",children:(M,h)=>{var q=qe(),V=ve(q);Ne(V,17,()=>bt,Oe,(Z,ne,de)=>{{let _=pe(()=>e(i)===de);ft(Z,{get active(){return e(_)},onclick:()=>fe(de),children:(f,w)=>{var j=we();N(()=>P(j,e(ne).title)),r(f,j)},$$slots:{default:!0}})}}),r(M,q)},$$slots:{default:!0}});var x=u(I,2),$=s(x);He($,{padding:"20px",children:(M,h)=>{var q=Ti(),V=u(ve(q),2),Z=s(V),ne=u(V,2);{var de=U=>{var L=bi(),z=ve(L);Ct(z,{direction:"column",gap:"6px",class:"presets",children:(K,ce)=>{var Ie=qe(),Te=ve(Ie);Ne(Te,17,()=>e(a).presets,Oe,(Me,We,Ke)=>{{let yt=pe(()=>e(g)===Ke);ft(Me,{variant:"list",get active(){return e(yt)},onclick:()=>se(Ke),children:(Pt,Zr)=>{var en=we();N(()=>P(en,e(We).label)),r(Pt,en)},$$slots:{default:!0}})}}),r(K,Ie)},$$slots:{default:!0}});var Q=u(z,2),T=s(Q),B=s(T),S=u(B);Xe(S,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input1.min},get max(){return e(a).input1.max},get step(){return e(a).input1.step},get value(){return e(o)},onchange:K=>xe(1,K.currentTarget.value)});var F=u(T,2),J=u(Q,2),ge=s(J),ke=s(ge),De=u(ke);Xe(De,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input2.min},get max(){return e(a).input2.max},get step(){return e(a).input2.step},get value(){return e(c)},onchange:K=>xe(2,K.currentTarget.value)});var G=u(ge,2);N(()=>{P(B,`${e(a).input1.label??""} `),ie(F,"min",e(a).input1.min),ie(F,"max",e(a).input1.max),ie(F,"step",e(a).input1.step),P(ke,`${e(a).input2.label??""} `),ie(G,"min",e(a).input2.min),ie(G,"max",e(a).input2.max),ie(G,"step",e(a).input2.step)}),le("input",F,be),Tt(F,()=>e(o),K=>y(o,K)),le("input",G,be),Tt(G,()=>e(c),K=>y(c,K)),r(U,L)},_=U=>{var L=qe(),z=ve(L);Ne(z,17,()=>e(a).inputs,Oe,(Q,T)=>{var B=Di(),S=s(B),F=s(S),J=u(S,2);{var ge=G=>{var K=xi(),ce=s(K);ce.value=ce.__value="true";var Ie=u(ce);Ie.value=Ie.__value="false";var Te;It(K),N(Me=>{ie(K,"id",`generic-${e(T).name}`),Te!==(Te=Me)&&(K.value=(K.__value=Me)??"",Mt(K,Me))},[()=>String(e(p)[e(T).name])]),le("change",K,Me=>me(e(T).name,Me.currentTarget.value==="true")),r(G,K)},ke=G=>{var K=Ei();Ne(K,21,()=>e(T).options,Oe,(Ie,Te)=>{var Me=wi(),We=s(Me),Ke={};N(()=>{P(We,e(Te)),Ke!==(Ke=e(Te))&&(Me.value=(Me.__value=e(Te))??"")}),r(Ie,Me)});var ce;It(K),N(()=>{ie(K,"id",`generic-${e(T).name}`),ce!==(ce=e(p)[e(T).name])&&(K.value=(K.__value=e(p)[e(T).name])??"",Mt(K,e(p)[e(T).name]))}),le("change",K,Ie=>me(e(T).name,Ie.currentTarget.value)),r(G,K)},De=G=>{{let K=pe(()=>`generic-${e(T).name}`),ce=pe(()=>e(T).type==="number"?"number":"text");Xe(G,{get id(){return e(K)},class:"mono",get type(){return e(ce)},get value(){return e(p)[e(T).name]},onchange:Ie=>me(e(T).name,e(T).type==="number"?parseFloat(Ie.currentTarget.value):Ie.currentTarget.value)})}};X(J,G=>{e(T).type==="boolean"?G(ge):e(T).options?G(ke,1):G(De,-1)})}N(()=>{ie(S,"for",`generic-${e(T).name}`),P(F,e(T).label)}),r(Q,B)}),r(U,L)};X(ne,U=>{e(a).kind!=="generic"?U(de):U(_,-1)})}var f=u(ne,2);{var w=U=>{var L=Ri(),z=u(s(L),2),Q=s(z);N(()=>P(Q,e(v))),r(U,L)},j=U=>{var L=Si();let z;var Q=s(L),T=s(Q),B=u(Q,2),S=s(B);N(F=>{z=Pe(L,1,"verdict svelte-175p7lt",null,z,{good:e(O),bad:!e(O)}),P(T,e(O)?e(a).flagLabel.good:e(a).flagLabel.bad),P(S,F)},[()=>e(O)&&e(A)!==null?e(a).amountFormat?e(a).amountFormat(e(A)):`${e(A)}${e(a).amountUnit}`:"—"]),r(U,L)},Y=U=>{var L=ki(),z=s(L),Q=s(z),T=u(z,2),B=s(T);N((S,F)=>{P(Q,S),P(B,F)},[()=>{var S;return(S=e(a).nodes.find(F=>F.id===e(a).terminalNodeId))==null?void 0:S.label},()=>e(W)[e(a).terminalNodeId]!==void 0?ue(e(a).terminalNodeId,e(W)[e(a).terminalNodeId]):"—"]),r(U,L)},ae=U=>{var L=Ni(),z=u(s(L),2);{var Q=B=>{var S=Ii(),F=s(S);N(J=>P(F,J),[()=>JSON.stringify(e(te),null,2)]),r(B,S)},T=B=>{var S=Mi();r(B,S)};X(z,B=>{e(te)?B(Q):B(T,-1)})}r(U,L)};X(f,U=>{e(v)?U(w):e(a).kind==="table"?U(j,1):e(a).kind==="graph"?U(Y,2):U(ae,-1)})}N(()=>P(Z,e(a).description)),r(M,q)},$$slots:{default:!0}});var oe=u($,2);He(oe,{padding:"20px",children:(M,h)=>{var q=qe(),V=ve(q);{var Z=w=>{var j=Oi();r(w,j)},ne=w=>{var j=yn(),Y=u(ve(j),2),ae=s(Y),U=u(Y,2);{var L=z=>{var Q=_n(),T=s(Q);vn(T,{get decision(){return e(l)},readonly:!0,get matchedRuleIndices(){return e(C)}}),r(z,Q)};X(U,z=>{e(l)&&z(L)})}N(()=>P(ae,e(m))),r(w,j)},de=w=>{var j=Ci(),Y=u(ve(j),2),ae=s(Y),U=u(Y,2);{var L=S=>{var F=hn(),J=s(F);fn(J,{get definitions(){return e(D)},activeId:null,get nodeValues(){return e(W)},formatNodeValue:ue}),r(S,F)};X(U,S=>{e(D)&&S(L)})}var z=u(U,2),Q=s(z);{var T=S=>{var F=Ai();r(S,F)},B=S=>{var F=we("Waiting on the engine…");r(S,F)};X(Q,S=>{e(W)[e(a).terminalNodeId]!==void 0?S(T):e(d)||S(B,1)})}N(()=>P(ae,`${e(m)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),r(w,j)},_=w=>{var j=yn(),Y=u(ve(j),2),ae=s(Y),U=u(Y,2);{var L=z=>{var Q=_n(),T=s(Q);vn(T,{get decision(){return e(l)},readonly:!0,get matchedRuleIndices(){return e(C)}}),r(z,Q)};X(U,z=>{e(l)&&z(L)})}N(()=>P(ae,e(m))),r(w,j)},f=w=>{var j=ji(),Y=u(ve(j),2),ae=s(Y),U=u(Y,2);{var L=z=>{var Q=hn(),T=s(Q);fn(T,{get definitions(){return e(D)},activeId:null,get nodeValues(){return e(re)}}),r(z,Q)};X(U,z=>{e(D)&&z(L)})}N(()=>P(ae,`${e(m)??""} A genuine multi-decision chain — each box is evaluated by the compiled engine; values appear once evaluated.`)),r(w,j)};X(V,w=>{e(v)?w(Z):e(a).kind==="table"?w(ne,1):e(a).kind==="graph"?w(de,2):e(a).display==="table"?w(_,3):w(f,-1)})}r(M,q)},$$slots:{default:!0}}),r(n,Re),Be()}Ge(["input","change"]);const Zt="bre_playground_token",$t="bre_playground_tenant",Fn="bre_playground_org_names";function Pn(){if(typeof window>"u")return{};try{const n=localStorage.getItem(Fn);return n?JSON.parse(n):{}}catch{return{}}}function Ln(n){return n?Pn()[n]??null:null}function Pi(){if(typeof window>"u")return{token:null,tenantId:null,orgName:null};const n=localStorage.getItem(Zt),t=localStorage.getItem($t);return{token:n,tenantId:t,orgName:Ln(t)}}const ye=Fe(Pi());function bn(n,t){ye.token=n,ye.tenantId=t,ye.orgName=Ln(t),localStorage.setItem(Zt,n),t&&localStorage.setItem($t,t)}function Li(n,t){const i=Pn();i[n]=t,localStorage.setItem(Fn,JSON.stringify(i)),ye.tenantId===n&&(ye.orgName=t)}function Bi(){ye.token=null,ye.tenantId=null,ye.orgName=null,localStorage.removeItem(Zt),localStorage.removeItem($t)}const Wi="bre_studio_handoff";function Bn(n){localStorage.setItem(Wi,JSON.stringify(n))}const Wn={playground:"","sdk-sandbox":"sdk-sandbox",docs:"docs",account:"account",studio:"studio",privacy:"privacy",terms:"terms"},Vi=Object.fromEntries(Object.entries(Wn).map(([n,t])=>[t,n]));function Ui(n){const t=n.replace(/^#\/?/,"").replace(/\/$/,"");return Vi[t]??"playground"}function xn(){return typeof window>"u"?"playground":Ui(window.location.hash)}function Ce(n){const t=Wn[n];return t?`#/${t}`:"#/"}var gt,_t;class Ki{constructor(){Lt(this,gt,ee(Fe(xn())));Lt(this,_t,ee(0));typeof window<"u"&&window.addEventListener("hashchange",()=>{this.current=xn()})}get current(){return e(at(this,gt))}set current(t){y(at(this,gt),t,!0)}get studioHandoffTick(){return e(at(this,_t))}set studioHandoffTick(t){y(at(this,_t),t,!0)}navigate(t){typeof window>"u"||(window.location.hash=Ce(t),this.current=t)}bumpStudioHandoff(){this.studioHandoffTick++}}gt=new WeakMap,_t=new WeakMap;const _e=new Ki;var zi=new Set(["$$slots","$$events","$$legacy","children","variant","fullWidth","disabled","type","href","onclick","class"]),Ji=b("<a><!></a>"),Xi=b("<button><!></button>");function je(n,t){let i=he(t,"variant",3,"secondary"),a=he(t,"fullWidth",3,!1),o=he(t,"disabled",3,!1),c=he(t,"type",3,"button"),p=he(t,"class",3,""),m=Mn(t,zi);var d=qe(),R=ve(d);{var D=v=>{var O=Ji();Nt(O,()=>({href:t.href,class:`btn btn-${i()??""} ${p()??""}`,"aria-disabled":o(),onclick:t.onclick,...m,[an]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var A=s(O);ct(A,()=>t.children??pt),r(v,O)},k=v=>{var O=Xi();Nt(O,()=>({type:c(),class:`btn btn-${i()??""} ${p()??""}`,disabled:o(),onclick:t.onclick,...m,[an]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var A=s(O);ct(A,()=>t.children??pt),r(v,O)};X(R,v=>{t.href?v(D):v(k,-1)})}r(n,d)}var wn=b("<!> <!>",1),Hi=b('<!> <div class="divider svelte-11w59y9"><span>or</span></div>',1),Gi=b('<label class="svelte-11w59y9">Organization name <!></label>'),Yi=b('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),Qi=b('<!> <!> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <!></label> <label class="svelte-11w59y9">Password <!></label> <!></form> <!>',1),Zi=b('<div class="empty svelte-11w59y9">None yet.</div>'),$i=b('<li class="ruleset-row svelte-11w59y9"><div class="ruleset-info svelte-11w59y9"><span class="mono name svelte-11w59y9"> </span> <span class="meta svelte-11w59y9"> </span></div> <div class="ruleset-actions svelte-11w59y9"><!> <!></div></li>'),er=b('<ul class="svelte-11w59y9"></ul>'),tr=b(`<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span>Signed in <!></span> <!></div> <!> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <p class="note svelte-11w59y9">Saved to your bre-service account — separate from Studio's local "Save to Library," which stays in this browser only.</p> <!></div></div>`),nr=b('<div class="error mono svelte-11w59y9"> </div>'),ar=b('<div class="intro svelte-11w59y9"><h1 class="page-title">Your account</h1> <p class="svelte-11w59y9">Sign up or log in to save Playground rulesets to a real bre-service backend.</p></div> <!> <!>',1),ir=b('<p class="viewer-status svelte-11w59y9">Loading…</p>'),rr=b('<p class="viewer-status error-text svelte-11w59y9"> </p>'),or=b('<pre class="viewer-content mono svelte-11w59y9"> </pre>'),sr=b('<div class="viewer-backdrop svelte-11w59y9" role="presentation"><div class="viewer-panel svelte-11w59y9" role="dialog" tabindex="-1"><div class="viewer-header svelte-11w59y9"><span class="mono"> </span> <!></div> <!></div></div>');function lr(n,t){Le(t,!0);const i="https://api.datalila.com";let a=ee("signup"),o=ee(""),c=ee(""),p=ee(""),m=ee(""),d=ee(!1),R=ee(null),D=ee(Fe([])),k=ee(null),v=ee(null),O=ee(!1),A=ee(null),C=ee(!1);Ft(()=>{ye.token&&E(),W(),fetch(`${i}/health`).then(I=>I.ok?I.json():null).then(I=>{y(C,!!(I!=null&&I.google_signin_available))}).catch(()=>{})});function W(){const I=window.location.hash;if(!I||!I.includes("google_auth="))return;const x=new URLSearchParams(I.replace(/^#/,"")),$=x.get("google_auth");if($==="success"){const oe=x.get("token"),M=x.get("tenant_id");oe&&(bn(oe,M),E())}else $==="error"&&y(R,x.get("message")??"Google sign-in failed.",!0);history.replaceState(null,"",window.location.pathname+window.location.search)}function te(){window.location.href=`${i}/api/v1/auth/oidc/signup/google`}async function re(){y(R,null),y(d,!0);try{if(e(a)==="signup"){const I=await fetch(`${i}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(o),email:e(c),password:e(p)})});if(!I.ok)throw new Error(await I.text());const x=await I.json();y(m,x.api_key,!0),x.tenant_id&&e(o)&&Li(x.tenant_id,e(o)),await g()}else await g()}catch(I){y(R,(I==null?void 0:I.message)??String(I),!0)}finally{y(d,!1)}}async function g(){const I=await fetch(`${i}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(c),password:e(p)})});if(!I.ok){const oe=await I.text();throw new Error(oe||`login failed (HTTP ${I.status}): check email/password`)}const x=await I.json(),$=x.token??x.access_token??x.jwt;if(!$)throw new Error("login succeeded but no token found in response: "+JSON.stringify(x));bn($,x.tenant_id??ye.tenantId??null),await E()}function l(){Bi(),y(m,""),y(D,[],!0),se()}async function E(){if(ye.token)try{const I=await fetch(`${i}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!I.ok)throw new Error(await I.text());const x=await I.json();y(D,Array.isArray(x)?x:[],!0)}catch(I){y(R,"Could not load saved rulesets: "+((I==null?void 0:I.message)??String(I)))}}async function H(){if(!ye.token)return;const I=Ue.current;if(!I){y(R,"No example is currently open in Playground to save.");return}y(R,null),y(d,!0);try{const x=await fetch(`${i}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${ye.token}`},body:JSON.stringify({name:I.id,format:"dmn-xml",content:I.dmnXml})});if(!x.ok)throw new Error(await x.text());const $=await x.json();if($&&typeof $=="object"&&"Err"in $)throw new Error($.Err);await E()}catch(x){y(R,(x==null?void 0:x.message)??String(x),!0)}finally{y(d,!1)}}async function fe(I){y(k,I,!0),y(v,null),y(A,null),y(O,!0);try{const x=await fetch(`${i}/api/v1/rulesets/blob/${I.latest_hash}`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!x.ok)throw new Error(await x.text());y(v,await x.text(),!0)}catch(x){y(A,(x==null?void 0:x.message)??String(x),!0)}finally{y(O,!1)}}function se(){y(k,null),y(v,null),y(A,null)}async function be(I){if(ye.token){y(R,null);try{const x=await fetch(`${i}/api/v1/rulesets/blob/${I.latest_hash}`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!x.ok)throw new Error(await x.text());const $=await x.text();Bn({dmnXml:$}),_e.bumpStudioHandoff(),_e.navigate("studio")}catch(x){y(R,`Could not open "${I.name}" in Studio: `+((x==null?void 0:x.message)??String(x)))}}}var xe=wn(),me=ve(xe);He(me,{class:"account-panel",padding:"20px",children:(I,x)=>{var $=ar(),oe=u(ve($),2);{var M=Z=>{var ne=Qi(),de=ve(ne);Ct(de,{class:"tabs",children:(S,F)=>{var J=wn(),ge=ve(J);{let De=pe(()=>e(a)==="signup");ft(ge,{fullWidth:!0,get active(){return e(De)},onclick:()=>y(a,"signup"),children:(G,K)=>{var ce=we("Sign up");r(G,ce)},$$slots:{default:!0}})}var ke=u(ge,2);{let De=pe(()=>e(a)==="login");ft(ke,{fullWidth:!0,get active(){return e(De)},onclick:()=>y(a,"login"),children:(G,K)=>{var ce=we("Log in");r(G,ce)},$$slots:{default:!0}})}r(S,J)},$$slots:{default:!0}});var _=u(de,2);{var f=S=>{var F=Hi(),J=ve(F);je(J,{variant:"secondary",fullWidth:!0,onclick:te,children:(ge,ke)=>{var De=we("Sign in with Google");r(ge,De)},$$slots:{default:!0}}),r(S,F)};X(_,S=>{e(C)&&S(f)})}var w=u(_,2),j=s(w);{var Y=S=>{var F=Gi(),J=u(s(F));Xe(J,{type:"text",required:!0,get value(){return e(o)},set value(ge){y(o,ge,!0)}}),r(S,F)};X(j,S=>{e(a)==="signup"&&S(Y)})}var ae=u(j,2),U=u(s(ae));Xe(U,{type:"email",required:!0,get value(){return e(c)},set value(S){y(c,S,!0)}});var L=u(ae,2),z=u(s(L));Xe(z,{type:"password",required:!0,minlength:8,get value(){return e(p)},set value(S){y(p,S,!0)}});var Q=u(L,2);je(Q,{type:"submit",variant:"primary",fullWidth:!0,get disabled(){return e(d)},children:(S,F)=>{var J=we();N(()=>P(J,e(d)?"Working…":e(a)==="signup"?"Create account":"Log in")),r(S,J)},$$slots:{default:!0}});var T=u(w,2);{var B=S=>{var F=Yi(),J=u(s(F),2),ge=s(J);N(()=>P(ge,e(m))),r(S,F)};X(T,S=>{e(m)&&S(B)})}Ht("submit",w,S=>{S.preventDefault(),re()}),r(Z,ne)},h=Z=>{var ne=tr(),de=s(ne),_=s(de),f=u(s(_));{var w=T=>{var B=we();N(()=>P(B,`— ${ye.orgName??""}`)),r(T,B)},j=T=>{var B=we();N(()=>P(B,`— tenant ${ye.tenantId??""}`)),r(T,B)};X(f,T=>{ye.orgName?T(w):ye.tenantId&&T(j,1)})}var Y=u(_,2);je(Y,{variant:"secondary",onclick:l,children:(T,B)=>{var S=we("Log out");r(T,S)},$$slots:{default:!0}});var ae=u(de,2);{let T=pe(()=>e(d)||!Ue.current);je(ae,{variant:"primary",fullWidth:!0,onclick:H,get disabled(){return e(T)},children:(B,S)=>{var F=we();N(()=>P(F,e(d)?"Saving…":Ue.current?`Save "${Ue.current.title}" to your account`:"Open an example in Playground to save it")),r(B,F)},$$slots:{default:!0}})}var U=u(ae,2),L=u(s(U),4);{var z=T=>{var B=Zi();r(T,B)},Q=T=>{var B=er();Ne(B,21,()=>e(D),S=>S.id,(S,F)=>{var J=$i(),ge=s(J),ke=s(ge),De=s(ke),G=u(ke,2),K=s(G),ce=u(ge,2),Ie=s(ce);je(Ie,{variant:"ghost",onclick:()=>fe(e(F)),children:(We,Ke)=>{var yt=we("View");r(We,yt)},$$slots:{default:!0}});var Te=u(Ie,2);{var Me=We=>{je(We,{variant:"ghost",onclick:()=>be(e(F)),children:(Ke,yt)=>{var Pt=we("Open in Studio →");r(Ke,Pt)},$$slots:{default:!0}})};X(Te,We=>{e(F).format==="dmn-xml"&&We(Me)})}N(()=>{P(De,e(F).name),P(K,`v${e(F).version??""} · ${e(F).format??""}`)}),r(S,J)}),r(T,B)};X(L,T=>{e(D).length===0?T(z):T(Q,-1)})}r(Z,ne)};X(oe,Z=>{ye.token?Z(h,-1):Z(M)})}var q=u(oe,2);{var V=Z=>{var ne=nr(),de=s(ne);N(()=>P(de,e(R))),r(Z,ne)};X(q,Z=>{e(R)&&Z(V)})}r(I,$)},$$slots:{default:!0}});var ue=u(me,2);{var Re=I=>{var x=sr(),$=s(x),oe=s($),M=s(oe),h=s(M),q=u(M,2);je(q,{variant:"secondary",onclick:se,children:(_,f)=>{var w=we("Close");r(_,w)},$$slots:{default:!0}});var V=u(oe,2);{var Z=_=>{var f=ir();r(_,f)},ne=_=>{var f=rr(),w=s(f);N(()=>P(w,e(A))),r(_,f)},de=_=>{var f=or(),w=s(f);N(()=>P(w,e(v))),r(_,f)};X(V,_=>{e(O)?_(Z):e(A)?_(ne,1):_(de,-1)})}N(()=>{ie($,"aria-label",`Viewing ${e(k).name}`),P(h,e(k).name)}),le("click",x,se),le("keydown",x,_=>{_.key==="Escape"&&se()}),le("click",$,_=>_.stopPropagation()),r(I,x)};X(ue,I=>{e(k)&&I(Re)})}r(n,xe),Be()}Ge(["click","keydown"]);function ur(n,t){let i,a;try{const p=qt(n,Se.__wbindgen_malloc,Se.__wbindgen_realloc),m=tt,d=qt(t,Se.__wbindgen_malloc,Se.__wbindgen_realloc),R=tt,D=Se.compile_ruleset(p,m,d,R);var o=D[0],c=D[1];if(D[3])throw o=0,c=0,Vn(D[2]);return i=o,a=c,jt(o,c)}finally{Se.__wbindgen_free(i,a,1)}}function dr(n,t){let i,a;try{const p=qt(n,Se.__wbindgen_malloc,Se.__wbindgen_realloc),m=tt,d=qt(t,Se.__wbindgen_malloc,Se.__wbindgen_realloc),R=tt,D=Se.evaluate_ruleset_with_trace(p,m,d,R);var o=D[0],c=D[1];if(D[3])throw o=0,c=0,Vn(D[2]);return i=o,a=c,jt(o,c)}finally{Se.__wbindgen_free(i,a,1)}}function cr(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(jt(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,i){return jt(t,i)},__wbindgen_init_externref_table:function(){const t=Se.__wbindgen_externrefs,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)}}}}function jt(n,t){return mr(n>>>0,t)}let ot=null;function St(){return(ot===null||ot.byteLength===0)&&(ot=new Uint8Array(Se.memory.buffer)),ot}function qt(n,t,i){if(i===void 0){const m=dt.encode(n),d=t(m.length,1)>>>0;return St().subarray(d,d+m.length).set(m),tt=m.length,d}let a=n.length,o=t(a,1)>>>0;const c=St();let p=0;for(;p<a;p++){const m=n.charCodeAt(p);if(m>127)break;c[o+p]=m}if(p!==a){p!==0&&(n=n.slice(p)),o=i(o,a,a=p+n.length*3,1)>>>0;const m=St().subarray(o+p,o+a),d=dt.encodeInto(n,m);p+=d.written,o=i(o,a,p,1)>>>0}return tt=p,o}function Vn(n){const t=Se.__wbindgen_externrefs.get(n);return Se.__externref_table_dealloc(n),t}let kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});kt.decode();const pr=2146435072;let Ut=0;function mr(n,t){return Ut+=t,Ut>=pr&&(kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),kt.decode(),Ut=t),kt.decode(St().subarray(n,n+t))}const dt=new TextEncoder;"encodeInto"in dt||(dt.encodeInto=function(n,t){const i=dt.encode(n);return t.set(i),{read:n.length,written:i.length}});let tt=0,Se;function vr(n,t){return Se=n.exports,ot=null,Se.__wbindgen_start(),Se}async function fr(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function gr(n){if(Se!==void 0)return Se;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=cr();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await fr(await n,t);return vr(i)}let Kt=null;function _r(){return Kt||(Kt=gr()),Kt}const yr=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:ur,ensureReady:_r,evaluate_ruleset_with_trace:dr},Symbol.toStringTag,{value:"Module"})),hr=Nn(yr),br={},xr=Object.freeze(Object.defineProperty({__proto__:null,default:br},Symbol.toStringTag,{value:"Module"})),En=Nn(xr);var zt,Dn;function wr(){if(Dn)return zt;Dn=1;let n,t;try{n=En,t=En}catch{n=null,t=null}function i(c){const p=()=>t.join(t.dirname(c),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(c)?n.readFileSync(c,"utf8"):null},writeRawMetaFile(m){const d=t.dirname(c);n.existsSync(d)||n.mkdirSync(d,{recursive:!0}),n.writeFileSync(c,m,"utf8")},hasBlob(m){return n.existsSync(t.join(p(),`${m}.bin`))},readBlob(m){return n.readFileSync(t.join(p(),`${m}.bin`)).toString("utf8")},writeBlob(m,d){const R=p();n.existsSync(R)||n.mkdirSync(R,{recursive:!0}),n.writeFileSync(t.join(R,`${m}.bin`),d,"utf8")}}}function a(c){const p="bre-js-cache",d=`${c}::meta`,R=g=>`${c}::blob::${g}`;let D=null;const k=new Map;function v(){return new Promise((g,l)=>{const E=indexedDB.open(p,1);E.onupgradeneeded=()=>{E.result.objectStoreNames.contains("kv")||E.result.createObjectStore("kv")},E.onsuccess=()=>g(E.result),E.onerror=()=>l(E.error)})}function O(g,l){return new Promise((E,H)=>{const se=g.transaction("kv","readonly").objectStore("kv").get(l);se.onsuccess=()=>E(se.result),se.onerror=()=>H(se.error)})}function A(g,l){return new Promise((E,H)=>{const se=g.transaction("kv","readonly").objectStore("kv"),be=IDBKeyRange.bound(l,l+"￿"),xe=new Map,me=se.openCursor(be);me.onsuccess=()=>{const ue=me.result;if(!ue){E(xe);return}xe.set(ue.key.slice(l.length),ue.value),ue.continue()},me.onerror=()=>H(me.error)})}function C(g,l,E){return new Promise((H,fe)=>{const se=g.transaction("kv","readwrite");se.objectStore("kv").put(E,l),se.oncomplete=()=>H(),se.onerror=()=>fe(se.error)})}let W=null;function te(){return W||(W=v()),W}return{ready:(async()=>{const g=await te(),l=await O(g,d);l!==void 0&&(D=l);const E=`${c}::blob::`,H=await A(g,E);for(const[fe,se]of H)k.set(fe,se)})(),isSync:!1,readRawMetaFile(){return D},writeRawMetaFile(g){D=g,te().then(l=>C(l,d,g)).catch(l=>{console.error("bre-js: failed to persist cache to IndexedDB:",l)})},hasBlob(g){return k.has(g)},readBlob(g){return k.get(g)},writeBlob(g,l){k.set(g,l),te().then(E=>C(E,R(g),l)).catch(E=>{console.error("bre-js: failed to persist blob to IndexedDB:",E)})}}}function o(c){return typeof window<"u"&&typeof window.indexedDB<"u"?a(c):i(c)}return zt={createCacheStore:o},zt}var Jt,Rn;function Er(){if(Rn)return Jt;Rn=1;const n=hr,{parse:t,stringify:i}=zn(),a=Jn(),{createCacheStore:o}=wr(),c={test:k=>a.isDecimal(k),stringify:k=>k.toString()};function p(k){if(/^-?\d+$/.test(k)){const v=Number(k);if(Number.isSafeInteger(v))return v}return new a(k)}function m(k){return t(k,void 0,{parseNumber:p})}function d(k,v){return i(k,void 0,v,[c])}class R{constructor({endpoint:v,apiKey:O,tenantId:A,cacheDbPath:C,syncIntervalMs:W=5e3,auditFlushIntervalMs:te=5e3}){if(this.endpoint=v.replace(/\/$/,""),this.apiKey=O,this.tenantId=A||"default",this.cacheDbPath=C||"./bre_js_cache.json",this.syncIntervalMs=W,this.auditFlushIntervalMs=te,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=o(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const re=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,re]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const v=this.store.readRawMetaFile();if(v){const O=m(v);this.rulesetsMeta=O.rulesetsMeta||{},this.auditQueue=O.auditQueue||[];for(const[A,C]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(C.hash)){const W=this.store.readBlob(C.hash);let te;C.format==="dmn-xml"?te=W:te=JSON.parse(W);try{const re=n.compile_ruleset(C.format,JSON.stringify(te));this.rulesetCache[A]=JSON.parse(re)}catch(re){console.error(`Failed to compile cached ruleset ${A}:`,re)}}}}catch(v){console.error("Failed to load local cache:",v)}}saveLocalCache(){try{const v={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(d(v,2))}catch(v){console.error("Failed to save local cache:",v)}}async syncOnce(){const v={"X-API-Key":this.apiKey},O=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:v});if(!O.ok)throw new Error(`Server returned error: ${O.status}`);const A=await O.json();for(const C of A){const W=this.rulesetsMeta[C.name];if(!W||W.hash!==C.latest_hash){const te=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${C.latest_hash}`,{headers:v});if(!te.ok)continue;const re=te.headers.get("X-Ruleset-Format")||C.format,g=new TextDecoder("utf-8").decode(await te.arrayBuffer());this.store.writeBlob(C.latest_hash,g),this.rulesetsMeta[C.name]={id:C.id,name:C.name,version:C.version,format:re,hash:C.latest_hash};let l;re==="dmn-xml"?l=g:l=JSON.parse(g);try{const E=n.compile_ruleset(re,JSON.stringify(l));this.rulesetCache[C.name]=JSON.parse(E)}catch(E){console.error(`Compile error for ${C.name}:`,E)}}}this.saveLocalCache()}evaluate(v,O){const A=this.rulesetCache[v],C=this.rulesetsMeta[v];if(!A||!C)throw new Error(`Ruleset not found in cache: ${v}`);try{const W=JSON.stringify(A),te=d(O),re=n.evaluate_ruleset_with_trace(W,te),g=m(re),l=g.result,E=g.trace;return this.queueAuditLog(v,O,l,!0,null,E),l}catch(W){const te=W.message||String(W);throw this.queueAuditLog(v,O,null,!1,te,{matched_rules:[],duration_us:0}),W}}queueAuditLog(v,O,A,C,W,te){const re=this.rulesetsMeta[v];re&&(this.auditQueue.push({ruleset_id:re.id,version:re.version,definition_hash:re.hash,inputs:O,outputs:A,success:C,error_message:W,trace_json:te}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const v=[...this.auditQueue],O={"X-API-Key":this.apiKey,"Content-Type":"application/json"},A=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:O,body:d({logs:v})});if(A.ok)this.auditQueue=this.auditQueue.slice(v.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${A.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(v=>console.error("JS Client sync failed:",v))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(v=>console.error("JS Client audit flush failed:",v))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class D{constructor({policy:v={},defaultRoute:O="local",local:A,remote:C}={}){this.policy=v,this.defaultRoute=O,A instanceof R?this.localClient=A:A?this.localClient=new R(A):this.localClient=null,C?(this.remoteEndpoint=C.endpoint.replace(/\/$/,""),this.remoteApiKey=C.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(v){return this.policy[v]||this.defaultRoute}async evaluate(v,O){const A=this.routeFor(v);if(A==="server"||A==="remote")return this.evaluateRemote(v,O);if(A==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(v,O)}throw new Error(`SmartBreClient: unknown route '${A}' for ruleset '${v}' (expected 'local' or 'server')`)}async evaluateRemote(v,O){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const A={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},C=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:A,body:d({ruleSet:v,facts:O})});if(!C.ok)throw new Error(`Remote evaluate failed for '${v}': ${C.status} ${await C.text()}`);const W=m(await C.text());if(!W.success)throw new Error(`Remote evaluate failed for '${v}': ${W.error_message}`);return W.output_payload}close(){this.localClient&&this.localClient.close()}}return Jt={BreClient:R,SmartBreClient:D,Decimal:a},Jt}var Sn=Er(),Dr=b('<div class="cm-host svelte-1g4qxuv"></div>');function Rr(n,t){Le(t,!0);let i=he(t,"value",15,""),a=he(t,"readOnly",3,!1),o,c=null;const p=Bt.theme({"&":{color:"var(--ink)",backgroundColor:"var(--bg)",fontSize:"12.5px",height:"100%"},".cm-content":{fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',padding:"10px 0",caretColor:"var(--accent)"},".cm-gutters":{backgroundColor:"var(--bg)",color:"var(--muted)",border:"none"},".cm-activeLine":{backgroundColor:"var(--accent-wash)"},".cm-activeLineGutter":{backgroundColor:"var(--accent-wash)"},"&.cm-focused":{outline:"none"},".cm-scroller":{overflow:"auto",fontFamily:"inherit"},".cm-matchingBracket":{backgroundColor:"var(--accent-wash)",outline:"1px solid var(--accent)"}});Ft(()=>{c=new Bt({parent:o,state:rn.create({doc:i(),extensions:[Xn(),Hn(),Gn(),Yn(),Qn(),Zn(),$n(sa,{fallback:!0}),ea({typescript:!0}),ta.of([{key:"Mod-Enter",run:()=>{var d;return(d=t.onRun)==null||d.call(t),!0}},na,...aa,...ia]),p,rn.readOnly.of(a()),Bt.updateListener.of(d=>{d.docChanged&&i(d.state.doc.toString())})]})})}),ra(()=>c==null?void 0:c.destroy()),Ze(()=>{c&&i()!==c.state.doc.toString()&&c.dispatch({changes:{from:0,to:c.state.doc.length,insert:i()}})});var m=Dr();oa(m,d=>o=d,()=>o),r(n,m),Be()}var Sr=b('<div class="panel-head svelte-1yde3g3"><h3 class="eyebrow svelte-1yde3g3">Code <span class="badge svelte-1yde3g3">editable</span></h3> <div class="actions svelte-1yde3g3"><button type="button" class="reset svelte-1yde3g3">Reset to example</button> <button type="button" class="run svelte-1yde3g3">Run <span class="hint svelte-1yde3g3">⌘/Ctrl+Enter</span></button></div></div> <div class="editor-host svelte-1yde3g3"><!></div>',1),kr=b('<div class="error svelte-1yde3g3"> </div>'),Ir=b('<div class="result"><div class="result-label svelte-1yde3g3">your code returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),Mr=b('<h3 class="eyebrow svelte-1yde3g3">Facts</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <!></label> <label class="svelte-1yde3g3">Credit score <!></label> <div class="status svelte-1yde3g3"> </div> <!> <!>',1),Nr=b(`<div class="sandbox svelte-1yde3g3"><h1 class="page-title">Try the JS / TS SDK</h1> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip. The code below is a real, editable
    CodeMirror editor — edit it and hit Run to see real output (or a real error) from your own edit.</p> <div class="grid svelte-1yde3g3"><!> <!></div> <p class="cross-link svelte-1yde3g3">This is JS/TS only — see <strong class="svelte-1yde3g3">SDK Docs</strong> (above) for real, actually-run examples in the other 7 languages.</p></div>`);function Tr(n,t){Le(t,!0);let i=ee("Registering local sandbox..."),a=ee(!1),o=ee(.28),c=ee(780),p=ee(null),m=ee(null),d=null;const R=`// \`client\` is a real, already-connected datalila-bre BreClient --
// the same WASM-backed engine a Node.js or browser caller would use.
// \`facts\` is the object on the right: edit the sliders, or edit
// \`facts\` directly, right here.
//
// Illustrative only (this block is not executed) -- a real app connects
// to your production tenant like this:
//
//   import { BreClient } from 'datalila-bre';
//   const client = new BreClient({
//     endpoint: 'https://api.datalila.com',   // <- your real endpoint
//     apiKey: 'YOUR_API_KEY',
//   });
//   await client.ready;
//   await client.syncOnce();
//
// This sandbox instead points \`client\` at a Service-Worker-intercepted
// mock backend (\`\${import.meta.env.BASE_URL}mock-api\`) so it runs with
// zero signup, zero API key, and zero network calls leaving your browser.
// Edit anything below and hit Run (or Ctrl/Cmd+Enter).

const result = client.evaluate('mortgage_eligibility', facts);
console.log(result);
return result;`;let D=ee(R),k=pe(()=>({dti:e(o),credit_score:e(c)}));async function v(){if(!("serviceWorker"in navigator)){y(m,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){y(i,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function O(){if(d){y(m,null);try{const l=Object.getPrototypeOf(async function(){}).constructor,E=new l("client","facts",e(D));y(p,await E(d,e(k)),!0),y(i,"Done -- zero network calls left the browser.")}catch(l){y(p,null),y(m,(l==null?void 0:l.message)??String(l),!0),y(i,"Failed.")}}}function A(){y(D,R),O()}async function C(){y(m,null);try{y(i,"Running real datalila-bre code against the local sandbox..."),d=new Sn.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await d.ready,await d.syncOnce(),y(a,!0),await O()}catch(l){y(m,(l==null?void 0:l.message)??String(l),!0),y(i,"Failed.")}}Ft(async()=>{var l;await v(),(l=navigator.serviceWorker)!=null&&l.controller&&await C()});var W=Nr(),te=u(s(W),4),re=s(te);He(re,{padding:"18px",class:"code-panel",children:(l,E)=>{var H=Sr(),fe=ve(H),se=u(s(fe),2),be=s(se),xe=u(be,2),me=u(fe,2),ue=s(me);Rr(ue,{onRun:O,get value(){return e(D)},set value(Re){y(D,Re,!0)}}),N(()=>xe.disabled=!e(a)),le("click",be,A),le("click",xe,O),r(l,H)},$$slots:{default:!0}});var g=u(re,2);He(g,{padding:"18px",children:(l,E)=>{var H=Mr(),fe=u(ve(H),2),se=u(s(fe));Xe(se,{type:"number",step:"0.01",min:"0",max:"0.6",oninput:O,get value(){return e(o)},set value(oe){y(o,oe,!0)}});var be=u(fe,2),xe=u(s(be));Xe(xe,{type:"number",step:"5",min:"500",max:"850",oninput:O,get value(){return e(c)},set value(oe){y(c,oe,!0)}});var me=u(be,2),ue=s(me),Re=u(me,2);{var I=oe=>{var M=kr(),h=s(M);N(()=>P(h,e(m))),r(oe,M)};X(Re,oe=>{e(m)&&oe(I)})}var x=u(Re,2);{var $=oe=>{var M=Ir(),h=u(s(M),2),q=s(h);N(V=>P(q,V),[()=>JSON.stringify(e(p),(V,Z)=>{var ne,de;return(de=(ne=Sn.Decimal).isDecimal)!=null&&de.call(ne,Z)?Z.toString():Z},2)]),r(oe,M)};X(x,oe=>{e(p)&&oe($)})}N(()=>P(ue,e(i))),r(l,H)},$$slots:{default:!0}}),r(n,W),Be()}Ge(["click"]);const xt=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
use serde_json::json;

fn main() {
    // Same DMN XML every other language's example evaluates -- one shared
    // piece of logic across all 8 targets so a reader can compare directly.
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

// Same DMN XML every other language's example evaluates.
const dmnXml = fs.readFileSync(path.join(__dirname, '..', 'mortgage_eligibility.dmn'), 'utf8');

const compiled = breCore.compile_ruleset('dmn-xml', JSON.stringify(dmnXml));

const strong = { dti: 0.30, credit_score: 760 };
const weak = { dti: 0.55, credit_score: 600 };

const resultStrong = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(strong)));
const resultWeak = JSON.parse(breCore.evaluate_ruleset(compiled, JSON.stringify(weak)));

console.log('Strong applicant', strong, '->', resultStrong);
console.log('Weak applicant  ', weak, '->', resultWeak);`,runSteps:["cd docs/sdk-examples/js","# Uses ../../../bre-core/pkg/bre_core.js directly (built via scripts/rebuild_bindings.sh),","# the same module bre-js's own BreClient requires internally -- no npm install needed here.","node example.js"],output:`Strong applicant { dti: 0.3, credit_score: 760 } -> { amount: 3.5, approved: true }
Weak applicant   { dti: 0.55, credit_score: 600 } -> { amount: 0, approved: false }`,note:"The full BreClient class needs a running bre-service instance to sync rulesets and upload audit logs (see bre-js/test.js). This calls bre-core's compiled WASM module directly -- exactly what BreClient does internally -- for a real example with nothing to stand up first."},{id:"ts",label:"TypeScript",packageName:"datalila-bre (bre-js)",language:"typescript",sourcePath:"docs/sdk-examples/ts/example.ts",code:`// bre-js does not yet ship its own index.d.ts, so this declares
// minimal ambient types for the two WASM functions used.
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
Weak applicant   { dti: 0.55, credit_score: 600 } -> { amount: 0, approved: false }`,note:"Same npm package as the JS example, same no-server-needed pattern. bre-js does not have hand-written TypeScript types yet -- this file declares just enough ambient typing to compile cleanly."},{id:"python",label:"Python",packageName:"datalila-bre (bre-python)",language:"python",sourcePath:"docs/sdk-examples/python/example.py",code:`import os
import datalila_bre

# Same DMN XML every other language's example evaluates.
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
Weak applicant   map[credit_score:600 dti:0.55] -> map[amount:0 approved:false]`,note:"bre-go's public BreClient only populates its ruleset cache via SyncOnce() against a running bre-service -- there's no exported in-process compile call. This example also uses json-table instead of the shared DMN file: registering as dmn-xml and syncing through bre-go currently hits a real bug where the raw XML text gets passed unencoded into a JSON parser, so json-table is used here until that's fixed."},{id:"java",label:"Java",packageName:"com.datalila.bre:sdk (bre-java, backed by bre-jni)",language:"java",sourcePath:"docs/sdk-examples/java/Example.java",code:`import com.datalila.bre.BreClient;
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
Weak applicant   {:dti 0.55, :credit_score 600} -> {amount 0, approved false}`,note:"Same story as Kotlin: no dedicated Clojure package, just ordinary Java interop (import, .method) against the bre-java sdk JAR."},{id:"mode-c-tier1",label:"Mixed Mode (Tier 1)",packageName:"bre-core WASM (local) + bre-service REST (remote) -- one Node process",language:"javascript",sourcePath:"docs/sdk-examples/mode-c-tier1/example.js",code:`// "Mode C, Tier 1": an application can already choose, per ruleset
// name, whether to evaluate locally (Mode B, in-process WASM, no server)
// or remotely (Mode A, a real REST call to bre-service) -- in the SAME
// process. Nothing new needed: both call surfaces already exist.
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
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, including two more advanced variants on the roadmap: a policy-driven "smart client" routing mode, and a true single-graph mixed-placement mode (via a remote-decision bridge).'}],Or={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},Ar={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function Xt(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const wt=" ";function Cr(n,t){const i=Ar[t]??"//",a=n.indexOf(i),o=a>=0?n.slice(0,a):n,c=a>=0?n.slice(a):"",p=[],m=o.replace(/"[^"]*"|'[^']*'/g,k=>(p.push(k),wt+"STR"+(p.length-1)+wt));let d=Xt(m);d=d.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const R=Or[t]??[];if(R.length){const k=new RegExp(`\\b(${R.join("|")})\\b`,"g");d=d.replace(k,'<span class="tok-kw">$1</span>')}const D=new RegExp(wt+"STR(\\d+)"+wt,"g");return d=d.replace(D,(k,v)=>`<span class="tok-str">${Xt(p[Number(v)])}</span>`),c&&(d+=`<span class="tok-comment">${Xt(c)}</span>`),d}function jr(n,t){return n.split(`
`).map(i=>Cr(i,t)).join(`
`)}var qr=b('<p class="note svelte-65i1x3"> </p>'),Fr=b('<div class="panel-body svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></div>'),Pr=b(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="page-title">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">packages/dmn-examples/src/dmn/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav aria-label="SDK language"><!></nav> <!></div>`);function Lr(n,t){Le(t,!0);let i=ee(Fe(xt[0].id)),a=pe(()=>xt.find(d=>d.id===e(i))??xt[0]);var o=Pr(),c=u(s(o),2),p=s(c);Ct(p,{bordered:!0,children:(d,R)=>{var D=qe(),k=ve(D);Ne(k,17,()=>xt,v=>v.id,(v,O)=>{{let A=pe(()=>e(O).id===e(i));ft(v,{get active(){return e(A)},onclick:()=>y(i,e(O).id,!0),children:(C,W)=>{var te=we();N(()=>P(te,e(O).label)),r(C,te)},$$slots:{default:!0}})}}),r(d,D)},$$slots:{default:!0}});var m=u(c,2);He(m,{padding:"20px 22px",children:(d,R)=>{var D=Fr(),k=s(D),v=s(k),O=s(v),A=u(v,2),C=s(A),W=u(k,2);{var te=ue=>{var Re=qr(),I=s(Re);N(()=>P(I,e(a).note)),r(ue,Re)};X(W,ue=>{e(a).note&&ue(te)})}var re=u(W,2),g=s(re),l=u(re,2),E=s(l);la(E,()=>jr(e(a).code,e(a).language),!0);var H=u(l,4),fe=s(H),se=s(fe),be=u(H,4),xe=s(be),me=s(xe);N(ue=>{P(O,e(a).label),P(C,e(a).packageName),P(g,`Example (${e(a).sourcePath??""})`),P(se,ue),P(me,e(a).output)},[()=>e(a).runSteps.join(`
`)]),r(d,D)},$$slots:{default:!0}}),r(n,o),Be()}var Br=b(`<p class="svelte-1p7i3l0">Datalila BRE ("we", "us") is an early-stage, self-service product. This
      policy describes what we collect when you use the Playground, Studio,
      SDK Sandbox, or Account features at datalila.com, and what we do with
      it. If you're evaluating whether to trust us with real data: the
      Playground, SDK Sandbox, and Studio's local "Save to Library" run
      entirely in your browser and send us nothing. The Account feature is
      the one part of the site that talks to our servers.</p> <h2 class="svelte-1p7i3l0">What we collect</h2> <ul class="svelte-1p7i3l0"><li class="svelte-1p7i3l0"><strong>Account signup</strong> &mdash; an email address, and either
        a password (stored as a salted hash, never in plain text) or, if you
        sign in with Google, whatever Google's OAuth flow shares with us
        (your email address and that Google has verified it).</li> <li class="svelte-1p7i3l0"><strong>Saved rulesets</strong> &mdash; if you save a ruleset to your
        account, its content (the DMN/decision-table you saved) is stored on
        our servers, associated with your account.</li> <li class="svelte-1p7i3l0"><strong>Basic operational logs</strong> &mdash; standard server logs
        (IP address, request timestamps, error traces) for debugging and
        abuse prevention. We don't run analytics or ad trackers on this
        site.</li></ul> <h2 class="svelte-1p7i3l0">What we don't do</h2> <ul class="svelte-1p7i3l0"><li class="svelte-1p7i3l0">We don't sell your data, to anyone, ever.</li> <li class="svelte-1p7i3l0">We don't share your data with third parties except the infrastructure providers necessary to run the service (currently Google Cloud Platform, which hosts our servers).</li> <li class="svelte-1p7i3l0">We don't use your saved rulesets or account data to train any model.</li></ul> <h2 class="svelte-1p7i3l0">Data retention and deletion</h2> <p class="svelte-1p7i3l0">You can delete a saved ruleset from your account at any time. If you'd
      like your entire account and its data permanently deleted, email us
      (below) and we'll do it by hand for now &mdash; self-service account
      deletion isn't built yet.</p> <h2 class="svelte-1p7i3l0">Where your data lives</h2> <p class="svelte-1p7i3l0">Our production infrastructure runs on Google Cloud Platform, currently
      in the United States. We don't yet offer region-specific data
      residency guarantees.</p> <h2 class="svelte-1p7i3l0">Cookies and local storage</h2> <p class="svelte-1p7i3l0">We use browser <code class="svelte-1p7i3l0">localStorage</code> (not cookies) to keep you
      signed in and to remember Studio's locally-saved rulesets. Nothing
      here is used for tracking or advertising.</p> <h2 class="svelte-1p7i3l0">Beta-stage disclaimer</h2> <p class="svelte-1p7i3l0">This product is in active early development. While we take reasonable
      care with your data (passwords are hashed, not stored in plain text;
      production traffic is encrypted in transit), we haven't yet completed
      a third-party security audit or formal compliance certification. Don't
      store anything in a saved ruleset that you wouldn't want in a beta
      product's database.</p> <h2 class="svelte-1p7i3l0">Contact</h2> <p class="svelte-1p7i3l0">Questions about this policy, or a deletion request: <a href="mailto:hello@datalila.com">hello@datalila.com</a>.</p>`,1),Wr=b('<div class="legal svelte-1p7i3l0"><h1 class="page-title">Privacy Policy</h1> <p class="updated svelte-1p7i3l0">Last updated: 2026-07-25</p> <!></div>');function Vr(n){var t=Wr(),i=u(s(t),4);He(i,{padding:"20px 22px",children:(a,o)=>{var c=Br();r(a,c)},$$slots:{default:!0}}),r(n,t)}var Ur=b(`<p class="svelte-10snna1">These terms cover your use of Datalila BRE (the Playground, Studio,
      SDK Sandbox, Account, and API features at datalila.com). By creating
      an account or using these features, you agree to them.</p> <h2 class="svelte-10snna1">The service, as-is, in beta</h2> <p class="svelte-10snna1">Datalila BRE is provided free of charge while it's in early
      development. It's offered "as is," without warranty of any kind. We
      don't guarantee uptime, data durability, or fitness for any particular
      purpose. Don't rely on it for anything where an outage or data loss
      would cause you real harm &mdash; back up anything important
      yourself.</p> <h2 class="svelte-10snna1">Acceptable use</h2> <p class="svelte-10snna1">You agree not to:</p> <ul class="svelte-10snna1"><li class="svelte-10snna1">Use the service to store or process unlawful content.</li> <li class="svelte-10snna1">Attempt to disrupt, overload, or gain unauthorized access to the service or other users' accounts or data.</li> <li class="svelte-10snna1">Use automated means to scrape or abuse the service beyond normal, good-faith use.</li></ul> <p class="svelte-10snna1">We reserve the right to suspend or terminate accounts that violate
      this, or that we reasonably believe are abusive or fraudulent.</p> <h2 class="svelte-10snna1">Your content</h2> <p class="svelte-10snna1">You own whatever rulesets, DMN files, or facts you save to your
      account. We don't claim any ownership over your content, and we don't
      use it for anything other than providing the service back to you (see
      our <a href="#/privacy">Privacy Policy</a>).</p> <h2 class="svelte-10snna1">No liability</h2> <p class="svelte-10snna1">To the fullest extent permitted by law, Datalila and its operators
      aren't liable for any indirect, incidental, or consequential damages
      arising from your use of (or inability to use) the service, including
      data loss.</p> <h2 class="svelte-10snna1">Changes</h2> <p class="svelte-10snna1">We may update these terms as the product evolves. We'll update the
      date above when we do; continued use after a change means you accept
      the updated terms.</p> <h2 class="svelte-10snna1">Contact</h2> <p class="svelte-10snna1">Questions: <a href="mailto:hello@datalila.com">hello@datalila.com</a>.
      Security issues: <a href="mailto:security@datalila.com">security@datalila.com</a>.</p>`,1),Kr=b('<div class="legal svelte-10snna1"><h1 class="page-title">Terms of Service</h1> <p class="updated svelte-10snna1">Last updated: 2026-07-25</p> <!></div>');function zr(n){var t=Kr(),i=u(s(t),4);He(i,{padding:"20px 22px",children:(a,o)=>{var c=Ur();r(a,c)},$$slots:{default:!0}}),r(n,t)}var kn=b('<div class="view-wrap svelte-1n46o8q"><!></div>'),Jr=b("<!> <!>",1),Xr=b('<p class="studio-loading svelte-1n46o8q">Loading Studio…</p>'),Hr=b("<div><!></div>"),Gr=b('<span class="build-info-detail svelte-1n46o8q">commit <code class="svelte-1n46o8q"></code> </span>'),Yr=b('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><!> <!> <!> <!></nav></header> <main><!></main> <!> <footer>Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!> <span class="build-info">· <a>Privacy</a> · <a>Terms</a> · <button type="button" class="build-info-toggle svelte-1n46o8q">Build info</button> <!></span></footer>',1);function Qr(n,t){Le(t,!0);let i=ee(!1);Ze(()=>{});const a={playground:"Playground","sdk-sandbox":"Try the JS / TS SDK",docs:"SDK examples",account:"Your account",studio:"Studio",privacy:"Privacy Policy",terms:"Terms of Service"};Ze(()=>{document.title=`Datalila BRE — ${a[_e.current]}`});let o=ee(!1),c=ee(null);Ze(()=>{_e.current==="studio"&&!e(o)&&(y(o,!0),va(()=>import("./index-ZVQDIJrW.js"),__vite__mapDeps([0,1,2])).then(h=>{y(c,h.StudioEditor,!0)}))});function p(){_e.current==="playground"&&Ue.current&&(Bn({dmnXml:Ue.current.dmnXml,facts:Ue.facts}),_e.bumpStudioHandoff())}var m=Yr(),d=ve(m),R=u(s(d),2),D=s(R);{let h=pe(()=>_e.current==="studio"?Ce("playground"):Ce("studio")),q=pe(()=>_e.current==="studio"?"page":void 0);je(D,{variant:"secondary",class:"nav-button",get href(){return e(h)},get"aria-current"(){return e(q)},onclick:p,children:(V,Z)=>{var ne=we();N(()=>P(ne,_e.current==="studio"?"Back to Playground":"Open Studio")),r(V,ne)},$$slots:{default:!0}})}var k=u(D,2);{let h=pe(()=>_e.current==="sdk-sandbox"?Ce("playground"):Ce("sdk-sandbox")),q=pe(()=>_e.current==="sdk-sandbox"?"page":void 0);je(k,{variant:"secondary",class:"nav-button",get href(){return e(h)},get"aria-current"(){return e(q)},children:(V,Z)=>{var ne=we();N(()=>P(ne,_e.current==="sdk-sandbox"?"Hide SDK Sandbox":"Try the JS/TS SDK")),r(V,ne)},$$slots:{default:!0}})}var v=u(k,2);{let h=pe(()=>_e.current==="docs"?Ce("playground"):Ce("docs")),q=pe(()=>_e.current==="docs"?"page":void 0);je(v,{variant:"secondary",class:"nav-button",get href(){return e(h)},get"aria-current"(){return e(q)},children:(V,Z)=>{var ne=we();N(()=>P(ne,_e.current==="docs"?"Back to Playground":"SDK Docs")),r(V,ne)},$$slots:{default:!0}})}var O=u(v,2);{var A=h=>{{let q=pe(()=>_e.current==="account"?Ce("playground"):Ce("account")),V=pe(()=>_e.current==="account"?"page":void 0);je(h,{variant:"secondary",class:"nav-button",get href(){return e(q)},get"aria-current"(){return e(V)},children:(Z,ne)=>{var de=qe(),_=ve(de);{var f=Y=>{var ae=we("Hide Account");r(Y,ae)},w=Y=>{var ae=we();N(()=>P(ae,`Signed in${ye.orgName?` — ${ye.orgName}`:""}`)),r(Y,ae)},j=Y=>{var ae=we("Sign in to save rulesets");r(Y,ae)};X(_,Y=>{_e.current==="account"?Y(f):ye.token?Y(w,1):Y(j,-1)})}r(Z,de)},$$slots:{default:!0}})}};X(O,h=>{h(A)})}var C=u(d,2);let W;var te=s(C);{var re=h=>{Lr(h,{})},g=h=>{var q=kn(),V=s(q);Tr(V,{}),r(h,q)},l=h=>{Vr(h)},E=h=>{zr(h)},H=h=>{var q=Jr(),V=ve(q);{var Z=de=>{var _=kn(),f=s(_);lr(f,{}),r(de,_)};X(V,de=>{_e.current==="account"&&de(Z)})}var ne=u(V,2);Fi(ne,{}),r(h,q)};X(te,h=>{_e.current==="docs"?h(re):_e.current==="sdk-sandbox"?h(g,1):_e.current==="privacy"?h(l,2):_e.current==="terms"?h(E,3):h(H,-1)})}var fe=u(C,2);{var se=h=>{var q=Hr();let V;var Z=s(q);{var ne=_=>{var f=qe(),w=ve(f);ua(w,()=>_e.studioHandoffTick,j=>{var Y=qe(),ae=ve(Y);da(ae,()=>e(c),(U,L)=>{L(U,{})}),r(j,Y)}),r(_,f)},de=_=>{var f=Xr();r(_,f)};X(Z,_=>{e(c)?_(ne):_(de,-1)})}N(()=>V=Pe(q,1,"studio-wrap svelte-1n46o8q",null,V,{hidden:_e.current!=="studio"})),r(h,q)};X(fe,h=>{e(o)&&h(se)})}var be=u(fe,2);let xe;var me=u(s(be));{var ue=h=>{var q=we("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");r(h,q)};X(me,h=>{h(ue)})}var Re=u(me,2),I=u(s(Re)),x=u(I,2),$=u(x,2),oe=u($,2);{var M=h=>{var q=Gr(),V=u(s(q));ie(V,"title","eace73dccb48107ef47fe7c7424bccaf6f597805"),V.textContent="eace73d";var Z=u(V);Z.nodeValue=`,
        built 2026-07-25T02:32:18.555Z`,r(h,q)};X(oe,h=>{e(i)&&h(M)})}N((h,q)=>{W=Pe(C,1,"svelte-1n46o8q",null,W,{hidden:_e.current==="studio"}),xe=Pe(be,1,"fine svelte-1n46o8q",null,xe,{hidden:_e.current==="studio"}),ie(I,"href",h),ie(x,"href",q)},[()=>Ce("privacy"),()=>Ce("terms")]),le("click",$,()=>y(i,!e(i))),r(n,m),Be()}Ge(["click"]);ca(Qr,{target:document.getElementById("app")});export{fn as D,bt as E,oo as L,Qt as a,vn as b,io as c,to as d,ln as e,ja as i,ro as l,Aa as p,ao as s,no as u};

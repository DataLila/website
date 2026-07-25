const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DXK64NlD.js","assets/vendor-JhnFXx_F.js","assets/index-CaUT83wN.css"])))=>i.map(i=>d[i]);
var on=n=>{throw TypeError(n)};var Gn=(n,t,i)=>t.has(n)||on("Cannot "+i);var it=(n,t,i)=>(Gn(n,t,"read from private field"),i?i.call(n):t.get(n)),Bt=(n,t,i)=>t.has(n)?on("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,i);import{s as Yn,d as sn,a as Ge,p as Fe,b as we,c,e as l,i as H,f as Te,g as Oe,h as e,t as M,j as We,k as o,l as Le,u as me,m as F,n as Nt,o as Tt,q as ue,r as ce,v as w,w as je,x as Pe,y as xe,z as ne,A as $,B as Be,C as $e,D as _,E as Yt,F as at,G as pt,H as mt,I as Tn,J as Ot,K as At,L as On,M as Lt,N as ln,O as An,P as Qn,Q as Zn,R as Wt,S as un,T as $n,U as ea,V as ta,W as na,X as aa,Y as ia,Z as ra,_ as oa,$ as sa,a0 as la,a1 as ua,a2 as da,a3 as ca,a4 as pa,a5 as ma,a6 as Cn,a7 as fa,a8 as va,a9 as ga,aa as _a}from"./vendor-JhnFXx_F.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=i(r);fetch(r.href,d)}})();const ya="modulepreload",ha=function(n){return"/bre/"+n},dn={},ba=function(t,i,a){let r=Promise.resolve();if(i&&i.length>0){let p=function(D){return Promise.all(D.map(E=>Promise.resolve(E).then(R=>({status:"fulfilled",value:R}),R=>({status:"rejected",reason:R}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),u=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));r=p(i.map(D=>{if(D=ha(D),D in dn)return;dn[D]=!0;const E=D.endsWith(".css"),R=E?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${R}`))return;const v=document.createElement("link");if(v.rel=E?"stylesheet":ya,E||(v.as="script"),v.crossOrigin="",v.href=D,u&&v.setAttribute("nonce",u),document.head.appendChild(v),E)return new Promise((T,C)=>{v.addEventListener("load",T),v.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${D}`)))})}))}function d(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return r.then(p=>{for(const m of p||[])m.status==="rejected"&&d(m.reason);return t().catch(d)})};function xa(n,t){let i,a;try{const E=ke.__wbindgen_add_to_stack_pointer(-16),R=jt(n,ke.__wbindgen_export,ke.__wbindgen_export2),v=tt,T=jt(t,ke.__wbindgen_export,ke.__wbindgen_export2),C=tt;ke.compile_ruleset(E,R,v,T,C);var r=Xe().getInt32(E+0,!0),d=Xe().getInt32(E+4,!0),p=Xe().getInt32(E+8,!0),m=Xe().getInt32(E+12,!0),u=r,D=d;if(m)throw u=0,D=0,Zt(p);return i=u,a=D,Ct(u,D)}finally{ke.__wbindgen_add_to_stack_pointer(16),ke.__wbindgen_export3(i,a,1)}}function cn(n,t){let i,a;try{const E=ke.__wbindgen_add_to_stack_pointer(-16),R=jt(n,ke.__wbindgen_export,ke.__wbindgen_export2),v=tt,T=jt(t,ke.__wbindgen_export,ke.__wbindgen_export2),C=tt;ke.evaluate_ruleset_with_trace(E,R,v,T,C);var r=Xe().getInt32(E+0,!0),d=Xe().getInt32(E+4,!0),p=Xe().getInt32(E+8,!0),m=Xe().getInt32(E+12,!0),u=r,D=d;if(m)throw u=0,D=0,Zt(p);return i=u,a=D,Ct(u,D)}finally{ke.__wbindgen_add_to_stack_pointer(16),ke.__wbindgen_export3(i,a,1)}}function wa(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Ct(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return Rt(t).getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return Rt(t).getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return xt(new Date)},__wbg_new_47ab770c8bd3b6bb:function(t){const i=new Date(Rt(t));return xt(i)},__wbindgen_cast_0000000000000001:function(t){return xt(t)},__wbindgen_cast_0000000000000002:function(t,i){const a=Ct(t,i);return xt(a)},__wbindgen_object_drop_ref:function(t){Zt(t)}}}}function xt(n){lt===Ue.length&&Ue.push(Ue.length+1);const t=lt;return lt=Ue[t],Ue[t]=n,t}function Ea(n){n<1028||(Ue[n]=lt,lt=n)}let Ye=null;function Xe(){return(Ye===null||Ye.buffer.detached===!0||Ye.buffer.detached===void 0&&Ye.buffer!==ke.memory.buffer)&&(Ye=new DataView(ke.memory.buffer)),Ye}function Ct(n,t){return Sa(n>>>0,t)}let rt=null;function St(){return(rt===null||rt.byteLength===0)&&(rt=new Uint8Array(ke.memory.buffer)),rt}function Rt(n){return Ue[n]}let Ue=new Array(1024).fill(void 0);Ue.push(void 0,null,!0,!1);let lt=Ue.length;function jt(n,t,i){if(i===void 0){const m=ut.encode(n),u=t(m.length,1)>>>0;return St().subarray(u,u+m.length).set(m),tt=m.length,u}let a=n.length,r=t(a,1)>>>0;const d=St();let p=0;for(;p<a;p++){const m=n.charCodeAt(p);if(m>127)break;d[r+p]=m}if(p!==a){p!==0&&(n=n.slice(p)),r=i(r,a,a=p+n.length*3,1)>>>0;const m=St().subarray(r+p,r+a),u=ut.encodeInto(n,m);p+=u.written,r=i(r,a,p,1)>>>0}return tt=p,r}function Zt(n){const t=Rt(n);return Ea(n),t}let kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});kt.decode();const Da=2146435072;let Vt=0;function Sa(n,t){return Vt+=t,Vt>=Da&&(kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),kt.decode(),Vt=t),kt.decode(St().subarray(n,n+t))}const ut=new TextEncoder;"encodeInto"in ut||(ut.encodeInto=function(n,t){const i=ut.encode(n);return t.set(i),{read:n.length,written:i.length}});let tt=0,ke;function Ra(n,t){return ke=n.exports,Ye=null,rt=null,ke}async function ka(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(r){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function Ia(n){if(ke!==void 0)return ke;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-CaVvRRgX.wasm",import.meta.url));const t=wa();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await ka(await n,t);return Ra(i)}const Ma=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Na=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ta=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Oa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Aa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ca=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
`,ja=`<?xml version="1.0" encoding="UTF-8"?>
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
`,qa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Pa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Fa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,wt=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:Ma,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:Na,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:Ta,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:Oa,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"},{kind:"table",id:"loan_approval",title:"Loan approval",description:"Consumer loan approval & credit limit by credit score and monthly income — a FIRST-hit decision table. (Formerly one of Studio’s own hardcoded samples, unified here per BRE-122 so it also appears in Playground.)",dmnXml:Aa,input1:{name:"creditScore",label:"Credit score",min:300,max:850,step:5,format:n=>String(n)},input2:{name:"monthlyIncome",label:"Monthly income",min:0,max:15e3,step:250,format:n=>`$${n.toLocaleString()}`},flagField:"approved",amountField:"limit",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"",amountFormat:n=>`$${n.toLocaleString()}`,presets:[{label:"Strong applicant",input1:720,input2:6500},{label:"Borderline",input1:610,input2:3200},{label:"Below threshold",input1:560,input2:2e3}],defaultInput1:720,defaultInput2:6500},{kind:"generic",id:"tck_0004",title:"DMN TCK: simple table (UNIQUE)",description:"An OMG DMN Technology Compatibility Kit conformance fixture (0004-simpletable-U), demonstrating the UNIQUE hit policy over 3 mixed-type inputs (number, string, boolean). Shown as plain fields, not curated sliders — a 3-input mixed-type table genuinely doesn’t fit the 2-numeric-slider model (see BRE-122).",dmnXml:Ca,inputs:[{name:"Age",label:"Age",type:"number",default:18},{name:"RiskCategory",label:"Risk category",type:"string",options:["High","Medium","Low"],default:"Medium"},{name:"isAffordable",label:"Is affordable",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"customer_tier_routing",title:"Customer tier routing",description:"Discount % and priority shipping by loyalty tier and cart value — one string input and one numeric input, so it’s shown as plain fields rather than forced onto two numeric sliders.",dmnXml:ja,inputs:[{name:"memberStatus",label:"Member status",type:"string",options:["gold","silver"],default:"gold"},{name:"cartValue",label:"Cart value",type:"number",default:120}],display:"table"},{kind:"generic",id:"fraud_risk_scoring",title:"Fraud risk scoring",description:"Risk score & recommended action by transaction amount and whether it’s international — a numeric input plus a boolean input, shown as plain fields.",dmnXml:qa,inputs:[{name:"amount",label:"Amount",type:"number",default:1500},{name:"isInternational",label:"International transaction",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"full_drd_elements",title:"Full DRD element types (structural demo)",description:"A structural/edge-case demo, not a realistic business scenario: exercises every DRG element type DMN defines (input data, a business knowledge model, a knowledge source, an authority requirement) alongside one real decision table. Best explored via Studio’s DRD Diagram tab; the single text input below only drives the one decision’s table.",dmnXml:Pa,inputs:[{name:"Raw Input",label:"Raw input",type:"string",options:["valid","invalid"],default:"valid"}],display:"table"},{kind:"generic",id:"loan_origination",title:"Loan origination (multi-decision graph)",description:"A genuine 3-decision chain (Affordability, RiskCategory, then Routing, which requires both) over 4 primitive inputs — too many inputs and too structurally different from a flat table to force onto Playground’s 2-slider model, so it’s shown as plain fields plus the DRD diagram with live per-decision values overlaid after you run it.",dmnXml:Fa,inputs:[{name:"applicant_income",label:"Applicant income",type:"number",default:6e3},{name:"applicant_expenses",label:"Applicant expenses",type:"number",default:2500},{name:"loan_amount",label:"Loan amount",type:"number",default:1e4},{name:"credit_score",label:"Credit score",type:"number",default:720}],display:"graph"}];function pn(n){if(n.kind==="generic"){const t={};for(const i of n.inputs)t[i.name]=i.default;return t}return{[n.input1.name]:n.defaultInput1,[n.input2.name]:n.defaultInput2}}const et="https://www.omg.org/spec/DMN/20191111/MODEL/",dt="https://www.omg.org/spec/DMN/20191111/DMNDI/",ft="https://www.omg.org/spec/DMN/20211108/MODEL/",jn="https://www.omg.org/spec/DMN/20211108/DMNDI/",vt="https://www.omg.org/spec/DMN/20230324/MODEL/",qn="https://www.omg.org/spec/DMN/20230324/DMNDI/",Qe="https://www.omg.org/spec/DMN/20250201/MODEL/",Pn="https://www.omg.org/spec/DMN/20250201/DMNDI/";let ot=Qe;function Fn(n){return n&&(n.includes(Qe)?n.replaceAll(Qe,et).replaceAll(Pn,dt):n.includes(vt)?n.replaceAll(vt,et).replaceAll(qn,dt):n.includes(ft)?n.replaceAll(ft,et).replaceAll(jn,dt):n)}function ro(n){return n&&(n.includes(Qe)?ot=Qe:n.includes(vt)?ot=vt:n.includes(ft)?ot=ft:ot=et,Fn(n))}function Ln(n){return Fn(n)}function oo(n,t){if(!n)return n;const i=ot||Qe,a=i===Qe?Pn:i===vt?qn:i===ft?jn:dt;return i===et?n:n.replaceAll(et,i).replaceAll(dt,a)}const $t=new Yn;async function La(n){const{rootElement:t}=await $t.fromXML(Ln(n));return t}async function so(n){const{xml:t}=await $t.toXML(n,{format:!0});return t}function Je(n,t={}){return $t.create(n,t)}const Ba=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function en(n){return n.get("drgElement")||[]}function Wa(n){return n.$type==="dmn:Decision"}function lo(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:DecisionTable"?t:null}function uo(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:LiteralExpression"?t:null}function Bn(n){const t=[],i=a=>a.replace(/^#/,"");for(const a of n.get("informationRequirement")||[]){const r=a.get("requiredInput")||a.get("requiredDecision");r&&r.href&&t.push(i(r.href))}for(const a of n.get("knowledgeRequirement")||[]){const r=a.get("requiredKnowledge");r&&r.href&&t.push(i(r.href))}return t}const Ut={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},mn={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function Va(n){const t=en(n),i=new sn.graphlib.Graph;i.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),i.setDefaultEdgeLabel(()=>({}));for(const u of t){const D=Ut[u.$type];if(!D)continue;const E=mn[D];i.setNode(u.id,{...E})}const a=[];for(const u of t)if(Ut[u.$type])for(const D of Bn(u))i.node(D)&&(i.setEdge(D,u.id),a.push([D,u.id]));sn.layout(i);const r=[];let d=0,p=0;for(const u of t){const D=Ut[u.$type];if(!D)continue;const E=i.node(u.id),R=mn[D];r.push({id:u.id,name:u.get("name")||u.id,type:D,x:E.x-R.width/2,y:E.y-R.height/2,width:R.width,height:R.height,element:u}),d=Math.max(d,E.x+R.width/2),p=Math.max(p,E.y+R.height/2)}const m=a.map(([u,D])=>{var E;return{from:u,to:D,points:(((E=i.edge(u,D))==null?void 0:E.points)||[]).map(R=>({x:R.x,y:R.y}))}});return{nodes:r,edges:m,width:d+40,height:p+40}}var Ua=w('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),Ka=w("<option> </option>"),za=w('<select class="svelte-1qozfr"></select>'),Ja=w('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),fn=w('<div class="dt-col-label svelte-1qozfr"> </div>'),Xa=w('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Ha=w('<th class="dt-input-col svelte-1qozfr"><!></th>'),Ga=w('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Ya=w('<th class="dt-output-col svelte-1qozfr"><!></th>'),Qa=w('<select class="dt-io-field svelte-1qozfr"><option>true</option><option>false</option></select>'),Za=w('<input class="dt-io-field svelte-1qozfr"/>'),vn=w('<span class="dt-io-value svelte-1qozfr"> </span>'),$a=w('<td class="dt-io-cell dt-io-input svelte-1qozfr"><!></td>'),ei=w('<span class="dt-io-value dt-io-empty svelte-1qozfr">—</span>'),ti=w('<td class="dt-io-cell dt-io-output svelte-1qozfr"><!></td>'),ni=w('<tr class="dt-io-row svelte-1qozfr"><td class="dt-rownum dt-io-label svelte-1qozfr">Test</td><!><!></tr>'),ai=w('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),gn=w('<input class="svelte-1qozfr"/>'),_n=w('<td class="svelte-1qozfr"><!></td>'),ii=w('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),ri=w('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr><!></thead><tbody></tbody></table></div></div>');function yn(n,t){Fe(t,!0);let i=we(t,"readonly",3,!1),a=we(t,"matchedRuleIndices",19,()=>[]),r=me(()=>t.decision.get("decisionLogic")),d=me(()=>e(r).get("input")),p=me(()=>e(r).get("output")),m=me(()=>e(r).get("rule"));function u(b){var f;e(r).set("hitPolicy",b),(f=t.onchange)==null||f.call(t)}function D(b,f){var x;b.set("label",f),(x=t.onchange)==null||x.call(t)}function E(b,f){var x;b.get("inputExpression").set("text",f),(x=t.onchange)==null||x.call(t)}function R(b,f){var x;b.get("inputExpression").set("typeRef",f),(x=t.onchange)==null||x.call(t)}function v(b,f){var x;b.set("name",f),(x=t.onchange)==null||x.call(t)}function T(b,f){var x;b.set("label",f),(x=t.onchange)==null||x.call(t)}function C(b,f){var x;b.set("typeRef",f),(x=t.onchange)==null||x.call(t)}function j(b,f,x){var A;b.get("inputEntry")[f].set("text",x),(A=t.onchange)==null||A.call(t)}function L(b,f,x){var A;b.get("outputEntry")[f].set("text",x),(A=t.onchange)==null||A.call(t)}function te(){var x;const b=Je("dmn:LiteralExpression",{text:""}),f=Je("dmn:InputClause",{label:"New Input",inputExpression:b});e(r).get("input").push(f);for(const A of e(m))A.get("inputEntry").push(Je("dmn:UnaryTests",{text:"-"}));(x=t.onchange)==null||x.call(t)}function ie(b){var f;e(r).get("input").splice(b,1);for(const x of e(m))x.get("inputEntry").splice(b,1);(f=t.onchange)==null||f.call(t)}function g(){var f;const b=Je("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(r).get("output").push(b);for(const x of e(m))x.get("outputEntry").push(Je("dmn:LiteralExpression",{text:'""'}));(f=t.onchange)==null||f.call(t)}function s(b){var f;e(r).get("output").splice(b,1);for(const x of e(m))x.get("outputEntry").splice(b,1);(f=t.onchange)==null||f.call(t)}function S(){var x;const b=e(d).map(()=>Je("dmn:UnaryTests",{text:"-"})),f=e(p).map(()=>Je("dmn:LiteralExpression",{text:'""'}));e(r).get("rule").push(Je("dmn:DecisionRule",{inputEntry:b,outputEntry:f})),(x=t.onchange)==null||x.call(t)}function G(b){var f;e(r).get("rule").splice(b,1),(f=t.onchange)==null||f.call(t)}var ge=ri(),pe=l(ge),_e=l(pe),Ee=c(l(_e));{var fe=b=>{var f=Ua(),x=l(f);M(A=>F(x,A),[()=>e(r).get("hitPolicy")||"UNIQUE"]),o(b,f)},re=b=>{var f=za();Te(f,21,()=>Ba,Oe,(A,Y)=>{var ae=Ka(),K=l(ae),W={};M(()=>{F(K,e(Y)),W!==(W=e(Y))&&(ae.value=(ae.__value=e(Y))??"")}),o(A,ae)});var x;Nt(f),M(A=>{x!==(x=A)&&(f.value=(f.__value=A)??"",Tt(f,A))},[()=>e(r).get("hitPolicy")||"UNIQUE"]),ue("change",f,A=>u(A.currentTarget.value)),o(b,f)};H(Ee,b=>{i()?b(fe):b(re,-1)})}var Me=c(_e,2);{var oe=b=>{var f=Ja(),x=ce(f),A=c(x,2),Y=c(A,2);ue("click",x,te),ue("click",A,g),ue("click",Y,S),o(b,f)};H(Me,b=>{i()||b(oe)})}var h=c(pe,2),I=l(h);let Z;var k=l(I),y=l(k),P=c(l(y));Te(P,17,()=>e(d),Oe,(b,f,x)=>{var A=Ha(),Y=l(A);{var ae=W=>{var X=fn(),Q=l(X);M(V=>F(Q,V),[()=>e(f).get("label")||""]),o(W,X)},K=W=>{var X=Xa(),Q=ce(X),V=c(Q,2),q=c(V,2),N=l(q),O=c(N,2);M((B,ve,he)=>{je(Q,B),je(V,ve),je(N,he)},[()=>e(f).get("label")||"",()=>e(f).get("inputExpression").get("text")||"",()=>e(f).get("inputExpression").get("typeRef")||""]),ue("input",Q,B=>D(e(f),B.currentTarget.value)),ue("input",V,B=>E(e(f),B.currentTarget.value)),ue("input",N,B=>R(e(f),B.currentTarget.value)),ue("click",O,()=>ie(x)),o(W,X)};H(Y,W=>{i()?W(ae):W(K,-1)})}o(b,A)});var z=c(P);Te(z,17,()=>e(p),Oe,(b,f,x)=>{var A=Ya(),Y=l(A);{var ae=W=>{var X=fn(),Q=l(X);M(V=>F(Q,V),[()=>e(f).get("label")||""]),o(W,X)},K=W=>{var X=Ga(),Q=ce(X),V=c(Q,2),q=c(V,2),N=l(q),O=c(N,2);M((B,ve,he)=>{je(Q,B),je(V,ve),je(N,he)},[()=>e(f).get("label")||"",()=>e(f).get("name")||"",()=>e(f).get("typeRef")||""]),ue("input",Q,B=>T(e(f),B.currentTarget.value)),ue("input",V,B=>v(e(f),B.currentTarget.value)),ue("input",N,B=>C(e(f),B.currentTarget.value)),ue("click",O,()=>s(x)),o(W,X)};H(Y,W=>{i()?W(ae):W(K,-1)})}o(b,A)});var de=c(y);{var ee=b=>{var f=ni(),x=c(l(f));Te(x,17,()=>e(d),Oe,(Y,ae)=>{const K=me(()=>e(ae).get("inputExpression").get("text")||""),W=me(()=>(e(ae).get("inputExpression").get("typeRef")||"").toLowerCase());var X=$a(),Q=l(X);{var V=N=>{var O=Pe(),B=ce(O);{var ve=De=>{var J=Qa(),U=l(J);U.value=U.__value="true";var le=c(U);le.value=le.__value="false";var Se;Nt(J),M(Ie=>{Se!==(Se=Ie)&&(J.value=(J.__value=Ie)??"",Tt(J,Ie))},[()=>String(t.inputValues[e(K)])]),ue("change",J,Ie=>{var Re;return(Re=t.onInputValueChange)==null?void 0:Re.call(t,e(K),Ie.currentTarget.value)}),o(De,J)},he=De=>{var J=Za();M(()=>{ne(J,"type",e(W)==="number"?"number":"text"),je(J,t.inputValues[e(K)])}),ue("input",J,U=>{var le;return(le=t.onInputValueChange)==null?void 0:le.call(t,e(K),U.currentTarget.value)}),o(De,J)};H(B,De=>{e(W)==="boolean"?De(ve):De(he,-1)})}o(N,O)},q=N=>{var O=vn(),B=l(O);M(ve=>F(B,ve),[()=>String(t.outputValues[e(K)])]),o(N,O)};H(Q,N=>{t.inputValues&&t.inputValues[e(K)]!==void 0?N(V):t.outputValues&&t.outputValues[e(K)]!==void 0&&N(q,1)})}o(Y,X)});var A=c(x);Te(A,17,()=>e(p),Oe,(Y,ae)=>{const K=me(()=>e(ae).get("name")||"");var W=ti(),X=l(W);{var Q=q=>{var N=vn(),O=l(N);M(B=>F(O,B),[()=>String(t.outputValues[e(K)])]),o(q,N)},V=q=>{var N=ei();o(q,N)};H(X,q=>{t.outputValues&&t.outputValues[e(K)]!==void 0?q(Q):q(V,-1)})}o(Y,W)}),o(b,f)};H(de,b=>{!i()&&(t.inputValues||t.outputValues)&&b(ee)})}var se=c(k);Te(se,21,()=>e(m),Oe,(b,f,x)=>{var A=ii();let Y;var ae=l(A),K=l(ae);K.nodeValue=`${x+1} `;var W=c(K);{var X=q=>{var N=ai();ue("click",N,()=>G(x)),o(q,N)};H(W,q=>{i()||q(X)})}var Q=c(ae);Te(Q,17,()=>e(f).get("inputEntry"),Oe,(q,N,O)=>{var B=_n(),ve=l(B);{var he=J=>{var U=xe();M(le=>F(U,le),[()=>e(N).get("text")||"-"]),o(J,U)},De=J=>{var U=gn();M(le=>je(U,le),[()=>e(N).get("text")||""]),ue("input",U,le=>j(e(f),O,le.currentTarget.value)),o(J,U)};H(ve,J=>{i()?J(he):J(De,-1)})}o(q,B)});var V=c(Q);Te(V,17,()=>e(f).get("outputEntry"),Oe,(q,N,O)=>{var B=_n(),ve=l(B);{var he=J=>{var U=xe();M(le=>F(U,le),[()=>e(N).get("text")||""]),o(J,U)},De=J=>{var U=gn();M(le=>je(U,le),[()=>e(N).get("text")||""]),ue("input",U,le=>L(e(f),O,le.currentTarget.value)),o(J,U)};H(ve,J=>{i()?J(he):J(De,-1)})}o(q,B)}),M(q=>Y=We(A,1,"svelte-1qozfr",null,Y,q),[()=>({matched:a().includes(x)})]),o(b,A)}),M(()=>Z=We(I,1,"dt-table svelte-1qozfr",null,Z,{readonly:i()})),o(n,ge),Le()}Ge(["change","click","input"]);var oi=w('<span class="le-type-static svelte-125hirw"> </span>'),si=w('<input placeholder="e.g. number" class="svelte-125hirw"/>'),li=w('<input class="le-io-input svelte-125hirw"/>'),ui=w('<span class="le-io-value svelte-125hirw"> </span>'),di=w('<div class="le-io-field svelte-125hirw"><label class="svelte-125hirw"> </label> <!></div>'),ci=w('<div class="le-io-row svelte-125hirw"><!> <div class="le-io-field le-io-result svelte-125hirw"><label for="le-io-result" class="svelte-125hirw"> </label> <span id="le-io-result" class="le-io-value svelte-125hirw"> </span></div></div>'),pi=w('<pre class="le-textarea le-static svelte-125hirw"> </pre>'),mi=w('<textarea class="le-textarea svelte-125hirw" placeholder="FEEL expression, e.g. 400 * age_factor * claims_factor" spellcheck="false"></textarea>'),fi=w('<div class="le-editor svelte-125hirw"><div class="le-toolbar svelte-125hirw"><label class="svelte-125hirw">Result type <!></label></div> <!> <!></div>');function co(n,t){Fe(t,!0);let i=we(t,"readonly",3,!1),a=me(()=>t.decision.get("decisionLogic"));function r(g){var s;e(a).set("text",g),(s=t.onchange)==null||s.call(t)}function d(g){var S;const s=t.decision.get("variable");s&&(s.set("typeRef",g),(S=t.onchange)==null||S.call(t))}let p=me(()=>{const g=t.decision.$parent;if(!g)return[];const s=new Map(en(g).map(S=>[S.id,S]));return Bn(t.decision).map(S=>s.get(S)).filter(S=>!!S).map(S=>({id:S.id,name:S.get("name")||S.id}))}),m=me(()=>{var g;return((g=t.decision.get("variable"))==null?void 0:g.get("name"))||t.decision.get("name")});var u=fi(),D=l(u),E=l(D),R=c(l(E));{var v=g=>{var s=oi(),S=l(s);M(G=>F(S,G),[()=>{var G;return((G=t.decision.get("variable"))==null?void 0:G.get("typeRef"))||""}]),o(g,s)},T=g=>{var s=si();M(S=>je(s,S),[()=>{var S;return((S=t.decision.get("variable"))==null?void 0:S.get("typeRef"))||""}]),ue("input",s,S=>d(S.currentTarget.value)),o(g,s)};H(R,g=>{i()?g(v):g(T,-1)})}var C=c(D,2);{var j=g=>{var s=ci(),S=l(s);Te(S,17,()=>e(p),fe=>fe.id,(fe,re)=>{var Me=di(),oe=l(Me),h=l(oe),I=c(oe,2);{var Z=y=>{var P=li();M(()=>{ne(P,"id",`le-io-${e(re).id}`),je(P,t.inputValues[e(re).name])}),ue("input",P,z=>{var de;return(de=t.onInputValueChange)==null?void 0:de.call(t,e(re).name,z.currentTarget.value)}),o(y,P)},k=y=>{var P=ui(),z=l(P);M(de=>{ne(P,"id",`le-io-${e(re).id}`),F(z,de)},[()=>t.outputValues&&t.outputValues[e(re).name]!==void 0?String(t.outputValues[e(re).name]):"—"]),o(y,P)};H(I,y=>{t.inputValues&&t.inputValues[e(re).name]!==void 0?y(Z):y(k,-1)})}M(()=>{ne(oe,"for",`le-io-${e(re).id}`),F(h,e(re).name)}),o(fe,Me)});var G=c(S,2),ge=l(G),pe=l(ge),_e=c(ge,2),Ee=l(_e);M(fe=>{F(pe,`${e(m)??""} (result)`),F(Ee,fe)},[()=>t.outputValues&&t.outputValues[e(m)]!==void 0?String(t.outputValues[e(m)]):"—"]),o(g,s)};H(C,g=>{!i()&&(t.inputValues||t.outputValues)&&(e(p).length>0||t.outputValues)&&g(j)})}var L=c(C,2);{var te=g=>{var s=pi(),S=l(s);M(G=>F(S,G),[()=>e(a).get("text")||""]),o(g,s)},ie=g=>{var s=mi();M(S=>je(s,S),[()=>e(a).get("text")||""]),ue("input",s,S=>r(S.currentTarget.value)),o(g,s)};H(L,g=>{i()?g(te):g(ie,-1)})}o(n,u),Le()}Ge(["input"]);var vi=at('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),gi=at('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),_i=at('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),yi=at('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),hi=at('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),bi=at('<g role="button" tabindex="0"><!><!></g>'),xi=w('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function hn(n,t){Fe(t,!0);let i=me(()=>Va(t.definitions)),a=$(Be({x:0,y:0,w:800,h:500})),r=$(!1),d={x:0,y:0},p={x:0,y:0};$e(()=>{_(a,{x:0,y:0,w:Math.max(e(i).width,400),h:Math.max(e(i).height,300)},!0)});function m(g){g.preventDefault();const s=g.deltaY>0?1.1:.9,S=Math.max(200,Math.min(4e3,e(a).w*s)),G=Math.max(150,Math.min(3e3,e(a).h*s));_(a,{...e(a),w:S,h:G},!0)}function u(g){g.target.closest(".drd-node")||(_(r,!0),d={x:g.clientX,y:g.clientY},p={x:e(a).x,y:e(a).y})}function D(g,s){if(!e(r))return;const S=e(a).w/s.clientWidth;_(a,{...e(a),x:p.x-(g.clientX-d.x)*S,y:p.y-(g.clientY-d.y)*S},!0)}function E(){_(r,!1)}function R(g){switch(g){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function v(g){switch(g){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function T(g){return g.points.length?g.points.map((s,S)=>`${S===0?"M":"L"} ${s.x} ${s.y}`).join(" "):""}function C(g){if(!t.nodeValues)return null;const s=g.id in t.nodeValues?t.nodeValues[g.id]:t.nodeValues[g.name];return s===void 0?null:t.formatNodeValue?t.formatNodeValue(g.id,s):String(s)}var j=xi(),L=l(j),te=c(l(L));Te(te,17,()=>e(i).edges,Oe,(g,s)=>{var S=vi();M(G=>ne(S,"d",G),[()=>T(e(s))]),o(g,S)});var ie=c(te);Te(ie,17,()=>e(i).nodes,Oe,(g,s)=>{const S=me(()=>C(e(s)));var G=bi();let ge;var pe=l(G);{var _e=oe=>{var h=gi();M((I,Z)=>{ne(h,"x",e(s).x),ne(h,"y",e(s).y),ne(h,"width",e(s).width),ne(h,"height",e(s).height),ne(h,"fill",I),ne(h,"stroke",Z),ne(h,"stroke-width",e(s).id===t.activeId?2.5:1.5)},[()=>R(e(s).type),()=>v(e(s).type)]),o(oe,h)},Ee=oe=>{var h=_i();M((I,Z)=>{ne(h,"x",e(s).x),ne(h,"y",e(s).y),ne(h,"width",e(s).width),ne(h,"height",e(s).height),ne(h,"fill",I),ne(h,"stroke",Z),ne(h,"stroke-width",e(s).id===t.activeId?2.5:1.5)},[()=>R(e(s).type),()=>v(e(s).type)]),o(oe,h)};H(pe,oe=>{e(s).type==="inputData"?oe(_e):oe(Ee,-1)})}var fe=c(pe);{var re=oe=>{var h=yi(),I=ce(h),Z=l(I),k=c(I),y=l(k);M(()=>{ne(I,"x",e(s).x+e(s).width/2),ne(I,"y",e(s).y+e(s).height*.4),F(Z,e(s).name),ne(k,"x",e(s).x+e(s).width/2),ne(k,"y",e(s).y+e(s).height*.68),F(y,e(S))}),o(oe,h)},Me=oe=>{var h=hi(),I=l(h);M(()=>{ne(h,"x",e(s).x+e(s).width/2),ne(h,"y",e(s).y+e(s).height/2),F(I,e(s).name)}),o(oe,h)};H(fe,oe=>{e(S)!==null?oe(re):oe(Me,-1)})}M(()=>ge=We(G,0,"drd-node svelte-1jgcg8n",null,ge,{active:e(s).id===t.activeId,static:!t.onselect})),ue("click",G,()=>{var oe;return(oe=t.onselect)==null?void 0:oe.call(t,e(s).id)}),ue("keydown",G,oe=>{var h;return oe.key==="Enter"&&((h=t.onselect)==null?void 0:h.call(t,e(s).id))}),o(g,G)}),M(()=>ne(L,"viewBox",`${e(a).x??""} ${e(a).y??""} ${e(a).w??""} ${e(a).h??""}`)),Yt("wheel",L,m),ue("pointerdown",L,u),ue("pointermove",L,g=>D(g,g.currentTarget)),ue("pointerup",L,E),Yt("pointerleave",L,E),o(n,j),Le()}Ge(["pointerdown","pointermove","pointerup","click","keydown"]);const Ke=Be({current:null,facts:{}});var wi=w("<div><!></div>");function qt(n,t){let i=we(t,"direction",3,"row"),a=we(t,"bordered",3,!1),r=we(t,"gap",3,"var(--sp-2)"),d=we(t,"class",3,"");var p=wi();let m,u;var D=l(p);pt(D,()=>t.children??mt),M(()=>{m=We(p,1,`tab-group ${d()??""}`,"svelte-13apwse",m,{bordered:a()}),u=Tn(p,"",u,{"flex-direction":i(),gap:r()})}),o(n,p)}var Ei=w("<button><!></button>");function gt(n,t){let i=we(t,"active",3,!1),a=we(t,"variant",3,"pill"),r=we(t,"fullWidth",3,!1),d=we(t,"disabled",3,!1),p=we(t,"type",3,"button");var m=Ei();let u;var D=l(m);pt(D,()=>t.children??mt),M(()=>{ne(m,"type",p()),u=We(m,1,`tab tab-${a()??""}`,"svelte-184qymf",u,{active:i(),"full-width":r()}),m.disabled=d(),ne(m,"aria-pressed",i())}),ue("click",m,function(...E){var R;(R=t.onclick)==null||R.apply(this,E)}),o(n,m)}Ge(["click"]);var Di=w("<div><!></div>");function Ze(n,t){let i=we(t,"padding",3,"var(--sp-5)"),a=we(t,"class",3,"");var r=Di();let d;var p=l(r);pt(p,()=>t.children??mt),M(()=>{We(r,1,`panel ${a()??""}`,"svelte-hxsa5u"),d=Tn(r,"",d,{padding:i()})}),o(n,r)}var Si=new Set(["$$slots","$$events","$$legacy","value","type","variant","class"]),bn=w("<input/>");function He(n,t){Fe(t,!0);let i=we(t,"value",15),a=we(t,"type",3,"text"),r=we(t,"variant",3,"default"),d=we(t,"class",3,""),p=On(t,Si);var m=Pe(),u=ce(m);{var D=R=>{var v=bn();Ot(v,()=>({type:"number",class:`input input-${r()??""} ${d()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),At(v,i),o(R,v)},E=R=>{var v=bn();Ot(v,()=>({type:a(),class:`input input-${r()??""} ${d()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),At(v,i),o(R,v)};H(u,R=>{a()==="number"?R(D):R(E,-1)})}o(n,m),Le()}var Ri=w('<!> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <!></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <!></label> <input id="input2" type="range" class="svelte-175p7lt"/></div>',1),ki=w('<select class="generic-select svelte-175p7lt"><option>true</option><option>false</option></select>'),Ii=w("<option> </option>"),Mi=w('<select class="generic-select svelte-175p7lt"></select>'),Ni=w('<div class="field generic-field svelte-175p7lt"><label class="svelte-175p7lt"> </label> <!></div>'),Ti=w('<div class="verdict bad svelte-175p7lt"><div class="status svelte-175p7lt">Example error</div> <div class="error-detail mono svelte-175p7lt"> </div></div>'),Oi=w('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Ai=w('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Ci=w('<pre class="generic-result mono svelte-175p7lt"> </pre>'),ji=w('<div class="rate mono svelte-175p7lt">—</div>'),qi=w('<div class="verdict good generic-verdict svelte-175p7lt"><div class="status svelte-175p7lt">Result</div> <!></div>'),Pi=w('<h2 class="eyebrow svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <!> <!>',1),Fi=w(`<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; unavailable</h2> <p class="lede svelte-175p7lt">This example didn't parse/compile cleanly -- see the error detail in the left panel.</p>`,1),xn=w('<div class="table-host svelte-175p7lt"><!></div>'),wn=w('<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),En=w('<div class="graph-host svelte-175p7lt"><!></div>'),Li=w(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Bi=w('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),Wi=w('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),Vi=w('<h1 class="page-title svelte-175p7lt">Playground</h1> <!> <div class="stage svelte-175p7lt"><!> <!></div>',1);function Ui(n,t){Fe(t,!0);let i=$(0),a=me(()=>wt[e(i)]),r=$(0),d=$(0),p=$(Be({})),m=$("loading the engine…"),u=$(!1),D=!1,E=$(null),R=null,v=$(null),T=$(!0),C=$(null),j=$(Be([])),L=$(Be({})),te=$(null),ie=$(Be({})),g=$(0),s=me(()=>{if(!e(E))return null;const k=en(e(E)).filter(Wa);return e(a).kind==="generic"&&e(a).display==="table"&&e(a).decisionId?k.find(y=>y.id===e(a).decisionId)||k[0]||null:k[0]||null});$e(()=>{Ke.current=e(a),Ke.facts=e(a).kind==="generic"?{...e(p)}:{[e(a).input1.name]:e(r),[e(a).input2.name]:e(d)}});async function S(k){try{_(E,await La(k.dmnXml),!0),R=xa("dmn-xml",JSON.stringify(Ln(k.dmnXml))),_(v,null)}catch(y){R=null,_(E,null),_(v,`This example failed to compile: ${(y==null?void 0:y.message)??String(y)}`),console.error("Failed to load/compile example",k.id,y)}}function G(){if(!R)return;const k=e(a);try{if(k.kind==="generic"){const ee={};for(const f of k.inputs)ee[f.name]=e(p)[f.name];const se=cn(R,JSON.stringify(ee)),b=JSON.parse(se);if(_(te,b.result,!0),k.display==="table")_(j,b.trace&&b.trace.matched_rules||[],!0);else{const f=b.trace&&b.trace.intermediates||{},x=typeof b.result=="object"&&b.result?b.result:{};_(ie,{...f,...x},!0)}return}const y={};y[k.input1.name]=e(r),y[k.input2.name]=e(d);const P=cn(R,JSON.stringify(y)),z=JSON.parse(P);if(k.kind==="graph"){const ee=z.trace&&z.trace.intermediates||{},se={};for(const b of k.nodes)se[b.id]=ee[b.id];_(L,se,!0);return}const de=z.result;_(j,z.trace&&z.trace.matched_rules||[],!0),_(T,!!de[k.flagField]),_(C,de[k.flagField]?de[k.amountField]:null,!0)}catch(y){_(v,`This example failed to evaluate: ${(y==null?void 0:y.message)??String(y)}`),console.error("Failed to evaluate example",k.id,y)}}async function ge(k){_(i,k,!0);const y=wt[k];_(g,y.kind==="generic"?null:0,!0),_(v,null),_(te,null),_(ie,{},!0),_(j,[],!0),_(L,{},!0),y.kind==="generic"?_(p,pn(y),!0):(_(r,y.defaultInput1,!0),_(d,y.defaultInput2,!0)),D&&(await S(y),G())}function pe(k){e(a).kind!=="generic"&&(_(r,e(a).presets[k].input1,!0),_(d,e(a).presets[k].input2,!0),_(g,k,!0),G())}function _e(){_(g,null),G()}function Ee(k,y){if(e(a).kind==="generic")return;const P=k===1?e(a).input1:e(a).input2;let z=parseFloat(y);isNaN(z)&&(z=k===1?e(r):e(d)),z=Math.min(P.max,Math.max(P.min,z)),k===1?_(r,z,!0):_(d,z,!0),_(g,null),G()}function fe(k,y){_(p,{...e(p),[k]:y},!0),_(g,null),G()}function re(k,y){const P=e(a).kind==="graph"?e(a).nodes.find(z=>z.id===k):void 0;return P?P.format(y):String(y)}Lt(async()=>{try{await Ia(),D=!0;const k=wt[e(i)];k.kind==="generic"?_(p,pn(k),!0):(_(r,k.defaultInput1,!0),_(d,k.defaultInput2,!0)),await S(e(a)),_(m,"compiled and running — real engine, in your browser, zero network calls."),G()}catch(k){_(u,!0),_(m,"engine failed to load: "+((k==null?void 0:k.message)??String(k))),console.error(k)}});var Me=Vi(),oe=c(ce(Me),2);qt(oe,{class:"example-tabs",children:(k,y)=>{var P=Pe(),z=ce(P);Te(z,17,()=>wt,Oe,(de,ee,se)=>{{let b=me(()=>e(i)===se);gt(de,{get active(){return e(b)},onclick:()=>ge(se),children:(f,x)=>{var A=xe();M(()=>F(A,e(ee).title)),o(f,A)},$$slots:{default:!0}})}}),o(k,P)},$$slots:{default:!0}});var h=c(oe,2),I=l(h);Ze(I,{padding:"20px",children:(k,y)=>{var P=Pi(),z=c(ce(P),2),de=l(z),ee=c(z,2);{var se=K=>{var W=Ri(),X=ce(W);qt(X,{direction:"column",gap:"6px",class:"presets",children:(U,le)=>{var Se=Pe(),Ie=ce(Se);Te(Ie,17,()=>e(a).presets,Oe,(Re,Ve,Ae)=>{{let ze=me(()=>e(g)===Ae);gt(Re,{variant:"list",get active(){return e(ze)},onclick:()=>pe(Ae),children:(bt,an)=>{var rn=xe();M(()=>F(rn,e(Ve).label)),o(bt,rn)},$$slots:{default:!0}})}}),o(U,Se)},$$slots:{default:!0}});var Q=c(X,2),V=l(Q),q=l(V),N=c(q);He(N,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input1.min},get max(){return e(a).input1.max},get step(){return e(a).input1.step},get value(){return e(r)},onchange:U=>Ee(1,U.currentTarget.value)});var O=c(V,2),B=c(Q,2),ve=l(B),he=l(ve),De=c(he);He(De,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input2.min},get max(){return e(a).input2.max},get step(){return e(a).input2.step},get value(){return e(d)},onchange:U=>Ee(2,U.currentTarget.value)});var J=c(ve,2);M(()=>{F(q,`${e(a).input1.label??""} `),ne(O,"min",e(a).input1.min),ne(O,"max",e(a).input1.max),ne(O,"step",e(a).input1.step),F(he,`${e(a).input2.label??""} `),ne(J,"min",e(a).input2.min),ne(J,"max",e(a).input2.max),ne(J,"step",e(a).input2.step)}),ue("input",O,_e),At(O,()=>e(r),U=>_(r,U)),ue("input",J,_e),At(J,()=>e(d),U=>_(d,U)),o(K,W)},b=K=>{var W=Pe(),X=ce(W);Te(X,17,()=>e(a).inputs,Oe,(Q,V)=>{var q=Ni(),N=l(q),O=l(N),B=c(N,2);{var ve=J=>{var U=ki(),le=l(U);le.value=le.__value="true";var Se=c(le);Se.value=Se.__value="false";var Ie;Nt(U),M(Re=>{ne(U,"id",`generic-${e(V).name}`),Ie!==(Ie=Re)&&(U.value=(U.__value=Re)??"",Tt(U,Re))},[()=>String(e(p)[e(V).name])]),ue("change",U,Re=>fe(e(V).name,Re.currentTarget.value==="true")),o(J,U)},he=J=>{var U=Mi();Te(U,21,()=>e(V).options,Oe,(Se,Ie)=>{var Re=Ii(),Ve=l(Re),Ae={};M(()=>{F(Ve,e(Ie)),Ae!==(Ae=e(Ie))&&(Re.value=(Re.__value=e(Ie))??"")}),o(Se,Re)});var le;Nt(U),M(()=>{ne(U,"id",`generic-${e(V).name}`),le!==(le=e(p)[e(V).name])&&(U.value=(U.__value=e(p)[e(V).name])??"",Tt(U,e(p)[e(V).name]))}),ue("change",U,Se=>fe(e(V).name,Se.currentTarget.value)),o(J,U)},De=J=>{{let U=me(()=>`generic-${e(V).name}`),le=me(()=>e(V).type==="number"?"number":"text");He(J,{get id(){return e(U)},class:"mono",get type(){return e(le)},get value(){return e(p)[e(V).name]},onchange:Se=>fe(e(V).name,e(V).type==="number"?parseFloat(Se.currentTarget.value):Se.currentTarget.value)})}};H(B,J=>{e(V).type==="boolean"?J(ve):e(V).options?J(he,1):J(De,-1)})}M(()=>{ne(N,"for",`generic-${e(V).name}`),F(O,e(V).label)}),o(Q,q)}),o(K,W)};H(ee,K=>{e(a).kind!=="generic"?K(se):K(b,-1)})}var f=c(ee,2);{var x=K=>{var W=Ti(),X=c(l(W),2),Q=l(X);M(()=>F(Q,e(v))),o(K,W)},A=K=>{var W=Oi();let X;var Q=l(W),V=l(Q),q=c(Q,2),N=l(q);M(O=>{X=We(W,1,"verdict svelte-175p7lt",null,X,{good:e(T),bad:!e(T)}),F(V,e(T)?e(a).flagLabel.good:e(a).flagLabel.bad),F(N,O)},[()=>e(T)&&e(C)!==null?e(a).amountFormat?e(a).amountFormat(e(C)):`${e(C)}${e(a).amountUnit}`:"—"]),o(K,W)},Y=K=>{var W=Ai(),X=l(W),Q=l(X),V=c(X,2),q=l(V);M((N,O)=>{F(Q,N),F(q,O)},[()=>{var N;return(N=e(a).nodes.find(O=>O.id===e(a).terminalNodeId))==null?void 0:N.label},()=>e(L)[e(a).terminalNodeId]!==void 0?re(e(a).terminalNodeId,e(L)[e(a).terminalNodeId]):"—"]),o(K,W)},ae=K=>{var W=qi(),X=c(l(W),2);{var Q=q=>{var N=Ci(),O=l(N);M(B=>F(O,B),[()=>JSON.stringify(e(te),null,2)]),o(q,N)},V=q=>{var N=ji();o(q,N)};H(X,q=>{e(te)?q(Q):q(V,-1)})}o(K,W)};H(f,K=>{e(v)?K(x):e(a).kind==="table"?K(A,1):e(a).kind==="graph"?K(Y,2):K(ae,-1)})}M(()=>F(de,e(a).description)),o(k,P)},$$slots:{default:!0}});var Z=c(I,2);Ze(Z,{padding:"20px",children:(k,y)=>{var P=Pe(),z=ce(P);{var de=x=>{var A=Fi();o(x,A)},ee=x=>{var A=wn(),Y=c(ce(A),2),ae=l(Y),K=c(Y,2);{var W=X=>{var Q=xn(),V=l(Q);yn(V,{get decision(){return e(s)},readonly:!0,get matchedRuleIndices(){return e(j)}}),o(X,Q)};H(K,X=>{e(s)&&X(W)})}M(()=>F(ae,e(m))),o(x,A)},se=x=>{var A=Bi(),Y=c(ce(A),2),ae=l(Y),K=c(Y,2);{var W=N=>{var O=En(),B=l(O);hn(B,{get definitions(){return e(E)},activeId:null,get nodeValues(){return e(L)},formatNodeValue:re}),o(N,O)};H(K,N=>{e(E)&&N(W)})}var X=c(K,2),Q=l(X);{var V=N=>{var O=Li();o(N,O)},q=N=>{var O=xe("Waiting on the engine…");o(N,O)};H(Q,N=>{e(L)[e(a).terminalNodeId]!==void 0?N(V):e(u)||N(q,1)})}M(()=>F(ae,`${e(m)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),o(x,A)},b=x=>{var A=wn(),Y=c(ce(A),2),ae=l(Y),K=c(Y,2);{var W=X=>{var Q=xn(),V=l(Q);yn(V,{get decision(){return e(s)},readonly:!0,get matchedRuleIndices(){return e(j)}}),o(X,Q)};H(K,X=>{e(s)&&X(W)})}M(()=>F(ae,e(m))),o(x,A)},f=x=>{var A=Wi(),Y=c(ce(A),2),ae=l(Y),K=c(Y,2);{var W=X=>{var Q=En(),V=l(Q);hn(V,{get definitions(){return e(E)},activeId:null,get nodeValues(){return e(ie)}}),o(X,Q)};H(K,X=>{e(E)&&X(W)})}M(()=>F(ae,`${e(m)??""} A genuine multi-decision chain — each box is evaluated by the compiled engine; values appear once evaluated.`)),o(x,A)};H(z,x=>{e(v)?x(de):e(a).kind==="table"?x(ee,1):e(a).kind==="graph"?x(se,2):e(a).display==="table"?x(b,3):x(f,-1)})}o(k,P)},$$slots:{default:!0}}),o(n,Me),Le()}Ge(["input","change"]);const tn="bre_playground_token",nn="bre_playground_tenant",Wn="bre_playground_org_names";function Vn(){if(typeof window>"u")return{};try{const n=localStorage.getItem(Wn);return n?JSON.parse(n):{}}catch{return{}}}function Un(n){return n?Vn()[n]??null:null}function Ki(){if(typeof window>"u")return{token:null,tenantId:null,orgName:null};const n=localStorage.getItem(tn),t=localStorage.getItem(nn);return{token:n,tenantId:t,orgName:Un(t)}}const be=Be(Ki());function Dn(n,t){be.token=n,be.tenantId=t,be.orgName=Un(t),localStorage.setItem(tn,n),t&&localStorage.setItem(nn,t)}function zi(n,t){const i=Vn();i[n]=t,localStorage.setItem(Wn,JSON.stringify(i)),be.tenantId===n&&(be.orgName=t)}function Ji(){be.token=null,be.tenantId=null,be.orgName=null,localStorage.removeItem(tn),localStorage.removeItem(nn)}const Xi="bre_studio_handoff";function Kn(n){localStorage.setItem(Xi,JSON.stringify(n))}const _t="/bre/",zn={playground:"","sdk-sandbox":"sdk-sandbox",docs:"docs",account:"account",studio:"studio",privacy:"privacy",terms:"terms"},Qt=Object.fromEntries(Object.entries(zn).map(([n,t])=>[t,n]));function Jn(n){const i=(n.startsWith(_t)?n.slice(_t.length):n.replace(/^\//,"")).replace(/\/$/,"");return Qt[i]??"playground"}function Sn(){var t;if(typeof window>"u")return"playground";if(window.location.hash.includes("google_auth="))return"account";const n=(t=window.location.hash.match(/^#\/?([a-z-]*)\/?$/))==null?void 0:t[1];if(n!==void 0&&n in Qt){const i=Qt[n];return history.replaceState(null,"",Ce(i)),i}return Jn(window.location.pathname)}function Ce(n){const t=zn[n];return t?`${_t}${t}`:_t}var yt,ht;class Hi{constructor(){Bt(this,yt,$(Be(Sn())));Bt(this,ht,$(0));typeof window<"u"&&(window.addEventListener("popstate",()=>{this.current=Sn()}),window.addEventListener("click",t=>{var d,p;if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;const i=(p=(d=t.target)==null?void 0:d.closest)==null?void 0:p.call(d,"a");if(!i||i.hasAttribute("download"))return;const a=i.getAttribute("target");if(a&&a!=="_self")return;const r=i.getAttribute("href");!r||!r.startsWith(_t)||(t.preventDefault(),history.pushState(null,"",r),this.current=Jn(r))}))}get current(){return e(it(this,yt))}set current(t){_(it(this,yt),t,!0)}get studioHandoffTick(){return e(it(this,ht))}set studioHandoffTick(t){_(it(this,ht),t,!0)}navigate(t){typeof window>"u"||(history.pushState(null,"",Ce(t)),this.current=t)}bumpStudioHandoff(){this.studioHandoffTick++}}yt=new WeakMap,ht=new WeakMap;const ye=new Hi;var Gi=new Set(["$$slots","$$events","$$legacy","children","variant","fullWidth","disabled","type","href","onclick","class"]),Yi=w("<a><!></a>"),Qi=w("<button><!></button>");function qe(n,t){let i=we(t,"variant",3,"secondary"),a=we(t,"fullWidth",3,!1),r=we(t,"disabled",3,!1),d=we(t,"type",3,"button"),p=we(t,"class",3,""),m=On(t,Gi);var u=Pe(),D=ce(u);{var E=v=>{var T=Yi();Ot(T,()=>({href:t.href,class:`btn btn-${i()??""} ${p()??""}`,"aria-disabled":r(),onclick:t.onclick,...m,[ln]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var C=l(T);pt(C,()=>t.children??mt),o(v,T)},R=v=>{var T=Qi();Ot(T,()=>({type:d(),class:`btn btn-${i()??""} ${p()??""}`,disabled:r(),onclick:t.onclick,...m,[ln]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var C=l(T);pt(C,()=>t.children??mt),o(v,T)};H(D,v=>{t.href?v(E):v(R,-1)})}o(n,u)}var Zi=w('<!> <div class="divider svelte-11w59y9"><span>or log in</span></div>',1),$i=w(`<p class="signup-disabled-note svelte-11w59y9">New accounts are created by signing in with Google. Already have an
        account? Log in below.</p> <!>`,1),Kt=w("<!> <!>",1),er=w('<!> <div class="divider svelte-11w59y9"><span>or</span></div>',1),tr=w('<label class="svelte-11w59y9">Organization name <!></label>'),nr=w('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),ar=w('<!> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <!></label> <label class="svelte-11w59y9">Password <!></label> <!></form> <!>',1),ir=w('<div class="empty svelte-11w59y9">None yet.</div>'),rr=w('<li class="ruleset-row svelte-11w59y9"><div class="ruleset-info svelte-11w59y9"><span class="mono name svelte-11w59y9"> </span> <span class="meta svelte-11w59y9"> </span></div> <div class="ruleset-actions svelte-11w59y9"><!> <!></div></li>'),or=w('<ul class="svelte-11w59y9"></ul>'),sr=w(`<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span>Signed in <!></span> <!></div> <!> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <p class="note svelte-11w59y9">Saved to your bre-service account — separate from Studio's local "Save to Library," which stays in this browser only.</p> <!></div></div>`),lr=w('<div class="error mono svelte-11w59y9"> </div>'),ur=w('<div class="intro svelte-11w59y9"><h1 class="page-title">Your account</h1> <p class="svelte-11w59y9">Sign up or log in to save Playground rulesets to a real bre-service backend.</p></div> <!> <!>',1),dr=w('<p class="viewer-status svelte-11w59y9">Loading…</p>'),cr=w('<p class="viewer-status error-text svelte-11w59y9"> </p>'),pr=w('<pre class="viewer-content mono svelte-11w59y9"> </pre>'),mr=w('<div class="viewer-backdrop svelte-11w59y9" role="presentation"><div class="viewer-panel svelte-11w59y9" role="dialog" tabindex="-1"><div class="viewer-header svelte-11w59y9"><span class="mono"> </span> <!></div> <!></div></div>');function fr(n,t){Fe(t,!0);const i="https://api.datalila.com";let a=$("signup"),r=$(""),d=$(""),p=$(""),m=$(""),u=$(!1),D=$(null),E=$(Be([])),R=$(null),v=$(null),T=$(!1),C=$(null),j=$(!1),L=$(!1);Lt(()=>{be.token&&G(),te(),fetch(`${i}/health`).then(h=>h.ok?h.json():null).then(h=>{_(j,!!(h!=null&&h.google_signin_available)),_(L,!!(h!=null&&h.public_signup_requires_google)),e(L)&&e(a)==="signup"&&_(a,"login")}).catch(()=>{})});function te(){const h=window.location.hash;if(!h||!h.includes("google_auth="))return;const I=new URLSearchParams(h.replace(/^#/,"")),Z=I.get("google_auth");if(Z==="success"){const k=I.get("token"),y=I.get("tenant_id");k&&(Dn(k,y),G())}else Z==="error"&&_(D,I.get("message")??"Google sign-in failed.",!0);history.replaceState(null,"",window.location.pathname+window.location.search)}function ie(){window.location.href=`${i}/api/v1/auth/oidc/signup/google`}async function g(){_(D,null),_(u,!0);try{if(e(a)==="signup"){const h=await fetch(`${i}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(r),email:e(d),password:e(p)})});if(!h.ok)throw new Error(await h.text());const I=await h.json();_(m,I.api_key,!0),I.tenant_id&&e(r)&&zi(I.tenant_id,e(r)),await s()}else await s()}catch(h){_(D,(h==null?void 0:h.message)??String(h),!0)}finally{_(u,!1)}}async function s(){const h=await fetch(`${i}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(d),password:e(p)})});if(!h.ok){const k=await h.text();throw new Error(k||`login failed (HTTP ${h.status}): check email/password`)}const I=await h.json(),Z=I.token??I.access_token??I.jwt;if(!Z)throw new Error("login succeeded but no token found in response: "+JSON.stringify(I));Dn(Z,I.tenant_id??be.tenantId??null),await G()}function S(){Ji(),_(m,""),_(E,[],!0),_e()}async function G(){if(be.token)try{const h=await fetch(`${i}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${be.token}`}});if(!h.ok)throw new Error(await h.text());const I=await h.json();_(E,Array.isArray(I)?I:[],!0)}catch(h){_(D,"Could not load saved rulesets: "+((h==null?void 0:h.message)??String(h)))}}async function ge(){if(!be.token)return;const h=Ke.current;if(!h){_(D,"No example is currently open in Playground to save.");return}_(D,null),_(u,!0);try{const I=await fetch(`${i}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${be.token}`},body:JSON.stringify({name:h.id,format:"dmn-xml",content:h.dmnXml})});if(!I.ok)throw new Error(await I.text());const Z=await I.json();if(Z&&typeof Z=="object"&&"Err"in Z)throw new Error(Z.Err);await G()}catch(I){_(D,(I==null?void 0:I.message)??String(I),!0)}finally{_(u,!1)}}async function pe(h){_(R,h,!0),_(v,null),_(C,null),_(T,!0);try{const I=await fetch(`${i}/api/v1/rulesets/blob/${h.latest_hash}`,{headers:{Authorization:`Bearer ${be.token}`}});if(!I.ok)throw new Error(await I.text());_(v,await I.text(),!0)}catch(I){_(C,(I==null?void 0:I.message)??String(I),!0)}finally{_(T,!1)}}function _e(){_(R,null),_(v,null),_(C,null)}async function Ee(h){if(be.token){_(D,null);try{const I=await fetch(`${i}/api/v1/rulesets/blob/${h.latest_hash}`,{headers:{Authorization:`Bearer ${be.token}`}});if(!I.ok)throw new Error(await I.text());const Z=await I.text();Kn({dmnXml:Z}),ye.bumpStudioHandoff(),ye.navigate("studio")}catch(I){_(D,`Could not open "${h.name}" in Studio: `+((I==null?void 0:I.message)??String(I)))}}}var fe=Kt(),re=ce(fe);Ze(re,{class:"account-panel",padding:"20px",children:(h,I)=>{var Z=ur(),k=c(ce(Z),2);{var y=ee=>{var se=ar(),b=ce(se);{var f=O=>{var B=$i(),ve=c(ce(B),2);{var he=De=>{var J=Zi(),U=ce(J);qe(U,{variant:"secondary",fullWidth:!0,onclick:ie,children:(le,Se)=>{var Ie=xe("Sign in with Google");o(le,Ie)},$$slots:{default:!0}}),o(De,J)};H(ve,De=>{e(j)&&De(he)})}o(O,B)},x=O=>{var B=Kt(),ve=ce(B);qt(ve,{class:"tabs",children:(J,U)=>{var le=Kt(),Se=ce(le);{let Re=me(()=>e(a)==="signup");gt(Se,{fullWidth:!0,get active(){return e(Re)},onclick:()=>_(a,"signup"),children:(Ve,Ae)=>{var ze=xe("Sign up");o(Ve,ze)},$$slots:{default:!0}})}var Ie=c(Se,2);{let Re=me(()=>e(a)==="login");gt(Ie,{fullWidth:!0,get active(){return e(Re)},onclick:()=>_(a,"login"),children:(Ve,Ae)=>{var ze=xe("Log in");o(Ve,ze)},$$slots:{default:!0}})}o(J,le)},$$slots:{default:!0}});var he=c(ve,2);{var De=J=>{var U=er(),le=ce(U);qe(le,{variant:"secondary",fullWidth:!0,onclick:ie,children:(Se,Ie)=>{var Re=xe("Sign in with Google");o(Se,Re)},$$slots:{default:!0}}),o(J,U)};H(he,J=>{e(j)&&J(De)})}o(O,B)};H(b,O=>{e(L)?O(f):O(x,-1)})}var A=c(b,2),Y=l(A);{var ae=O=>{var B=tr(),ve=c(l(B));He(ve,{type:"text",required:!0,get value(){return e(r)},set value(he){_(r,he,!0)}}),o(O,B)};H(Y,O=>{e(a)==="signup"&&!e(L)&&O(ae)})}var K=c(Y,2),W=c(l(K));He(W,{type:"email",required:!0,get value(){return e(d)},set value(O){_(d,O,!0)}});var X=c(K,2),Q=c(l(X));He(Q,{type:"password",required:!0,minlength:8,get value(){return e(p)},set value(O){_(p,O,!0)}});var V=c(X,2);qe(V,{type:"submit",variant:"primary",fullWidth:!0,get disabled(){return e(u)},children:(O,B)=>{var ve=xe();M(()=>F(ve,e(u)?"Working…":e(a)==="signup"&&!e(L)?"Create account":"Log in")),o(O,ve)},$$slots:{default:!0}});var q=c(A,2);{var N=O=>{var B=nr(),ve=c(l(B),2),he=l(ve);M(()=>F(he,e(m))),o(O,B)};H(q,O=>{e(m)&&O(N)})}Yt("submit",A,O=>{O.preventDefault(),g()}),o(ee,se)},P=ee=>{var se=sr(),b=l(se),f=l(b),x=c(l(f));{var A=q=>{var N=xe();M(()=>F(N,`— ${be.orgName??""}`)),o(q,N)},Y=q=>{var N=xe();M(()=>F(N,`— tenant ${be.tenantId??""}`)),o(q,N)};H(x,q=>{be.orgName?q(A):be.tenantId&&q(Y,1)})}var ae=c(f,2);qe(ae,{variant:"secondary",onclick:S,children:(q,N)=>{var O=xe("Log out");o(q,O)},$$slots:{default:!0}});var K=c(b,2);{let q=me(()=>e(u)||!Ke.current);qe(K,{variant:"primary",fullWidth:!0,onclick:ge,get disabled(){return e(q)},children:(N,O)=>{var B=xe();M(()=>F(B,e(u)?"Saving…":Ke.current?`Save "${Ke.current.title}" to your account`:"Open an example in Playground to save it")),o(N,B)},$$slots:{default:!0}})}var W=c(K,2),X=c(l(W),4);{var Q=q=>{var N=ir();o(q,N)},V=q=>{var N=or();Te(N,21,()=>e(E),O=>O.id,(O,B)=>{var ve=rr(),he=l(ve),De=l(he),J=l(De),U=c(De,2),le=l(U),Se=c(he,2),Ie=l(Se);qe(Ie,{variant:"ghost",onclick:()=>pe(e(B)),children:(Ae,ze)=>{var bt=xe("View");o(Ae,bt)},$$slots:{default:!0}});var Re=c(Ie,2);{var Ve=Ae=>{qe(Ae,{variant:"ghost",onclick:()=>Ee(e(B)),children:(ze,bt)=>{var an=xe("Open in Studio →");o(ze,an)},$$slots:{default:!0}})};H(Re,Ae=>{e(B).format==="dmn-xml"&&Ae(Ve)})}M(()=>{F(J,e(B).name),F(le,`v${e(B).version??""} · ${e(B).format??""}`)}),o(O,ve)}),o(q,N)};H(X,q=>{e(E).length===0?q(Q):q(V,-1)})}o(ee,se)};H(k,ee=>{be.token?ee(P,-1):ee(y)})}var z=c(k,2);{var de=ee=>{var se=lr(),b=l(se);M(()=>F(b,e(D))),o(ee,se)};H(z,ee=>{e(D)&&ee(de)})}o(h,Z)},$$slots:{default:!0}});var Me=c(re,2);{var oe=h=>{var I=mr(),Z=l(I),k=l(Z),y=l(k),P=l(y),z=c(y,2);qe(z,{variant:"secondary",onclick:_e,children:(f,x)=>{var A=xe("Close");o(f,A)},$$slots:{default:!0}});var de=c(k,2);{var ee=f=>{var x=dr();o(f,x)},se=f=>{var x=cr(),A=l(x);M(()=>F(A,e(C))),o(f,x)},b=f=>{var x=pr(),A=l(x);M(()=>F(A,e(v))),o(f,x)};H(de,f=>{e(T)?f(ee):e(C)?f(se,1):f(b,-1)})}M(()=>{ne(Z,"aria-label",`Viewing ${e(R).name}`),F(P,e(R).name)}),ue("click",I,_e),ue("keydown",I,f=>{f.key==="Escape"&&_e()}),ue("click",Z,f=>f.stopPropagation()),o(h,I)};H(Me,h=>{e(R)&&h(oe)})}o(n,fe),Le()}Ge(["click","keydown"]);function vr(n,t){let i,a;try{const p=Ft(n,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),m=nt,u=Ft(t,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),D=nt,E=Ne.compile_ruleset(p,m,u,D);var r=E[0],d=E[1];if(E[3])throw r=0,d=0,Xn(E[2]);return i=r,a=d,Pt(r,d)}finally{Ne.__wbindgen_free(i,a,1)}}function gr(n,t){let i,a;try{const p=Ft(n,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),m=nt,u=Ft(t,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),D=nt,E=Ne.evaluate_ruleset_with_trace(p,m,u,D);var r=E[0],d=E[1];if(E[3])throw r=0,d=0,Xn(E[2]);return i=r,a=d,Pt(r,d)}finally{Ne.__wbindgen_free(i,a,1)}}function _r(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Pt(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,i){return Pt(t,i)},__wbindgen_init_externref_table:function(){const t=Ne.__wbindgen_externrefs,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)}}}}function Pt(n,t){return hr(n>>>0,t)}let st=null;function It(){return(st===null||st.byteLength===0)&&(st=new Uint8Array(Ne.memory.buffer)),st}function Ft(n,t,i){if(i===void 0){const m=ct.encode(n),u=t(m.length,1)>>>0;return It().subarray(u,u+m.length).set(m),nt=m.length,u}let a=n.length,r=t(a,1)>>>0;const d=It();let p=0;for(;p<a;p++){const m=n.charCodeAt(p);if(m>127)break;d[r+p]=m}if(p!==a){p!==0&&(n=n.slice(p)),r=i(r,a,a=p+n.length*3,1)>>>0;const m=It().subarray(r+p,r+a),u=ct.encodeInto(n,m);p+=u.written,r=i(r,a,p,1)>>>0}return nt=p,r}function Xn(n){const t=Ne.__wbindgen_externrefs.get(n);return Ne.__externref_table_dealloc(n),t}let Mt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Mt.decode();const yr=2146435072;let zt=0;function hr(n,t){return zt+=t,zt>=yr&&(Mt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Mt.decode(),zt=t),Mt.decode(It().subarray(n,n+t))}const ct=new TextEncoder;"encodeInto"in ct||(ct.encodeInto=function(n,t){const i=ct.encode(n);return t.set(i),{read:n.length,written:i.length}});let nt=0,Ne;function br(n,t){return Ne=n.exports,st=null,Ne.__wbindgen_start(),Ne}async function xr(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(r){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function wr(n){if(Ne!==void 0)return Ne;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=_r();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await xr(await n,t);return br(i)}let Jt=null;function Er(){return Jt||(Jt=wr()),Jt}const Dr=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:vr,ensureReady:Er,evaluate_ruleset_with_trace:gr},Symbol.toStringTag,{value:"Module"})),Sr=An(Dr),Rr={},kr=Object.freeze(Object.defineProperty({__proto__:null,default:Rr},Symbol.toStringTag,{value:"Module"})),Rn=An(kr);var Xt,kn;function Ir(){if(kn)return Xt;kn=1;let n,t;try{n=Rn,t=Rn}catch{n=null,t=null}function i(d){const p=()=>t.join(t.dirname(d),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(d)?n.readFileSync(d,"utf8"):null},writeRawMetaFile(m){const u=t.dirname(d);n.existsSync(u)||n.mkdirSync(u,{recursive:!0}),n.writeFileSync(d,m,"utf8")},hasBlob(m){return n.existsSync(t.join(p(),`${m}.bin`))},readBlob(m){return n.readFileSync(t.join(p(),`${m}.bin`)).toString("utf8")},writeBlob(m,u){const D=p();n.existsSync(D)||n.mkdirSync(D,{recursive:!0}),n.writeFileSync(t.join(D,`${m}.bin`),u,"utf8")}}}function a(d){const p="bre-js-cache",u=`${d}::meta`,D=g=>`${d}::blob::${g}`;let E=null;const R=new Map;function v(){return new Promise((g,s)=>{const S=indexedDB.open(p,1);S.onupgradeneeded=()=>{S.result.objectStoreNames.contains("kv")||S.result.createObjectStore("kv")},S.onsuccess=()=>g(S.result),S.onerror=()=>s(S.error)})}function T(g,s){return new Promise((S,G)=>{const pe=g.transaction("kv","readonly").objectStore("kv").get(s);pe.onsuccess=()=>S(pe.result),pe.onerror=()=>G(pe.error)})}function C(g,s){return new Promise((S,G)=>{const pe=g.transaction("kv","readonly").objectStore("kv"),_e=IDBKeyRange.bound(s,s+"￿"),Ee=new Map,fe=pe.openCursor(_e);fe.onsuccess=()=>{const re=fe.result;if(!re){S(Ee);return}Ee.set(re.key.slice(s.length),re.value),re.continue()},fe.onerror=()=>G(fe.error)})}function j(g,s,S){return new Promise((G,ge)=>{const pe=g.transaction("kv","readwrite");pe.objectStore("kv").put(S,s),pe.oncomplete=()=>G(),pe.onerror=()=>ge(pe.error)})}let L=null;function te(){return L||(L=v()),L}return{ready:(async()=>{const g=await te(),s=await T(g,u);s!==void 0&&(E=s);const S=`${d}::blob::`,G=await C(g,S);for(const[ge,pe]of G)R.set(ge,pe)})(),isSync:!1,readRawMetaFile(){return E},writeRawMetaFile(g){E=g,te().then(s=>j(s,u,g)).catch(s=>{console.error("bre-js: failed to persist cache to IndexedDB:",s)})},hasBlob(g){return R.has(g)},readBlob(g){return R.get(g)},writeBlob(g,s){R.set(g,s),te().then(S=>j(S,D(g),s)).catch(S=>{console.error("bre-js: failed to persist blob to IndexedDB:",S)})}}}function r(d){return typeof window<"u"&&typeof window.indexedDB<"u"?a(d):i(d)}return Xt={createCacheStore:r},Xt}var Ht,In;function Mr(){if(In)return Ht;In=1;const n=Sr,{parse:t,stringify:i}=Qn(),a=Zn(),{createCacheStore:r}=Ir(),d={test:R=>a.isDecimal(R),stringify:R=>R.toString()};function p(R){if(/^-?\d+$/.test(R)){const v=Number(R);if(Number.isSafeInteger(v))return v}return new a(R)}function m(R){return t(R,void 0,{parseNumber:p})}function u(R,v){return i(R,void 0,v,[d])}class D{constructor({endpoint:v,apiKey:T,tenantId:C,cacheDbPath:j,syncIntervalMs:L=5e3,auditFlushIntervalMs:te=5e3}){if(this.endpoint=v.replace(/\/$/,""),this.apiKey=T,this.tenantId=C||"default",this.cacheDbPath=j||"./bre_js_cache.json",this.syncIntervalMs=L,this.auditFlushIntervalMs=te,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=r(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const ie=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,ie]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const v=this.store.readRawMetaFile();if(v){const T=m(v);this.rulesetsMeta=T.rulesetsMeta||{},this.auditQueue=T.auditQueue||[];for(const[C,j]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(j.hash)){const L=this.store.readBlob(j.hash);let te;j.format==="dmn-xml"?te=L:te=JSON.parse(L);try{const ie=n.compile_ruleset(j.format,JSON.stringify(te));this.rulesetCache[C]=JSON.parse(ie)}catch(ie){console.error(`Failed to compile cached ruleset ${C}:`,ie)}}}}catch(v){console.error("Failed to load local cache:",v)}}saveLocalCache(){try{const v={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(u(v,2))}catch(v){console.error("Failed to save local cache:",v)}}async syncOnce(){const v={"X-API-Key":this.apiKey},T=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:v});if(!T.ok)throw new Error(`Server returned error: ${T.status}`);const C=await T.json();for(const j of C){const L=this.rulesetsMeta[j.name];if(!L||L.hash!==j.latest_hash){const te=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${j.latest_hash}`,{headers:v});if(!te.ok)continue;const ie=te.headers.get("X-Ruleset-Format")||j.format,g=new TextDecoder("utf-8").decode(await te.arrayBuffer());this.store.writeBlob(j.latest_hash,g),this.rulesetsMeta[j.name]={id:j.id,name:j.name,version:j.version,format:ie,hash:j.latest_hash};let s;ie==="dmn-xml"?s=g:s=JSON.parse(g);try{const S=n.compile_ruleset(ie,JSON.stringify(s));this.rulesetCache[j.name]=JSON.parse(S)}catch(S){console.error(`Compile error for ${j.name}:`,S)}}}this.saveLocalCache()}evaluate(v,T){const C=this.rulesetCache[v],j=this.rulesetsMeta[v];if(!C||!j)throw new Error(`Ruleset not found in cache: ${v}`);try{const L=JSON.stringify(C),te=u(T),ie=n.evaluate_ruleset_with_trace(L,te),g=m(ie),s=g.result,S=g.trace;return this.queueAuditLog(v,T,s,!0,null,S),s}catch(L){const te=L.message||String(L);throw this.queueAuditLog(v,T,null,!1,te,{matched_rules:[],duration_us:0}),L}}queueAuditLog(v,T,C,j,L,te){const ie=this.rulesetsMeta[v];ie&&(this.auditQueue.push({ruleset_id:ie.id,version:ie.version,definition_hash:ie.hash,inputs:T,outputs:C,success:j,error_message:L,trace_json:te}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const v=[...this.auditQueue],T={"X-API-Key":this.apiKey,"Content-Type":"application/json"},C=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:T,body:u({logs:v})});if(C.ok)this.auditQueue=this.auditQueue.slice(v.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${C.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(v=>console.error("JS Client sync failed:",v))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(v=>console.error("JS Client audit flush failed:",v))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class E{constructor({policy:v={},defaultRoute:T="local",local:C,remote:j}={}){this.policy=v,this.defaultRoute=T,C instanceof D?this.localClient=C:C?this.localClient=new D(C):this.localClient=null,j?(this.remoteEndpoint=j.endpoint.replace(/\/$/,""),this.remoteApiKey=j.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(v){return this.policy[v]||this.defaultRoute}async evaluate(v,T){const C=this.routeFor(v);if(C==="server"||C==="remote")return this.evaluateRemote(v,T);if(C==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(v,T)}throw new Error(`SmartBreClient: unknown route '${C}' for ruleset '${v}' (expected 'local' or 'server')`)}async evaluateRemote(v,T){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const C={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},j=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:C,body:u({ruleSet:v,facts:T})});if(!j.ok)throw new Error(`Remote evaluate failed for '${v}': ${j.status} ${await j.text()}`);const L=m(await j.text());if(!L.success)throw new Error(`Remote evaluate failed for '${v}': ${L.error_message}`);return L.output_payload}close(){this.localClient&&this.localClient.close()}}return Ht={BreClient:D,SmartBreClient:E,Decimal:a},Ht}var Mn=Mr(),Nr=w('<div class="cm-host svelte-1g4qxuv"></div>');function Tr(n,t){Fe(t,!0);let i=we(t,"value",15,""),a=we(t,"readOnly",3,!1),r,d=null;const p=Wt.theme({"&":{color:"var(--ink)",backgroundColor:"var(--bg)",fontSize:"12.5px",height:"100%"},".cm-content":{fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',padding:"10px 0",caretColor:"var(--accent)"},".cm-gutters":{backgroundColor:"var(--bg)",color:"var(--muted)",border:"none"},".cm-activeLine":{backgroundColor:"var(--accent-wash)"},".cm-activeLineGutter":{backgroundColor:"var(--accent-wash)"},"&.cm-focused":{outline:"none"},".cm-scroller":{overflow:"auto",fontFamily:"inherit"},".cm-matchingBracket":{backgroundColor:"var(--accent-wash)",outline:"1px solid var(--accent)"}});Lt(()=>{d=new Wt({parent:r,state:un.create({doc:i(),extensions:[$n(),ea(),ta(),na(),aa(),ia(),ra(ma,{fallback:!0}),oa({typescript:!0}),sa.of([{key:"Mod-Enter",run:()=>{var u;return(u=t.onRun)==null||u.call(t),!0}},la,...ua,...da]),p,un.readOnly.of(a()),Wt.updateListener.of(u=>{u.docChanged&&i(u.state.doc.toString())})]})})}),ca(()=>d==null?void 0:d.destroy()),$e(()=>{d&&i()!==d.state.doc.toString()&&d.dispatch({changes:{from:0,to:d.state.doc.length,insert:i()}})});var m=Nr();pa(m,u=>r=u,()=>r),o(n,m),Le()}var Or=w('<div class="panel-head svelte-1yde3g3"><h3 class="eyebrow svelte-1yde3g3">Code <span class="badge svelte-1yde3g3">editable</span></h3> <div class="actions svelte-1yde3g3"><button type="button" class="reset svelte-1yde3g3">Reset to example</button> <button type="button" class="run svelte-1yde3g3">Run <span class="hint svelte-1yde3g3">⌘/Ctrl+Enter</span></button></div></div> <div class="editor-host svelte-1yde3g3"><!></div>',1),Ar=w('<div class="error svelte-1yde3g3"> </div>'),Cr=w('<div class="result"><div class="result-label svelte-1yde3g3">your code returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),jr=w('<h3 class="eyebrow svelte-1yde3g3">Facts</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <!></label> <label class="svelte-1yde3g3">Credit score <!></label> <div class="status svelte-1yde3g3"> </div> <!> <!>',1),qr=w(`<div class="sandbox svelte-1yde3g3"><h1 class="page-title">Try the JS / TS SDK</h1> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip. The code below is a real, editable
    CodeMirror editor — edit it and hit Run to see real output (or a real error) from your own edit.</p> <div class="grid svelte-1yde3g3"><!> <!></div> <p class="cross-link svelte-1yde3g3">This is JS/TS only — see <strong class="svelte-1yde3g3">SDK Docs</strong> (above) for real, actually-run examples in the other 7 languages.</p></div>`);function Pr(n,t){Fe(t,!0);let i=$("Registering local sandbox..."),a=$(!1),r=$(.28),d=$(780),p=$(null),m=$(null),u=null;const D=`// \`client\` is a real, already-connected datalila-bre BreClient --
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
return result;`;let E=$(D),R=me(()=>({dti:e(r),credit_score:e(d)}));async function v(){if(!("serviceWorker"in navigator)){_(m,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){_(i,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function T(){if(u){_(m,null);try{const s=Object.getPrototypeOf(async function(){}).constructor,S=new s("client","facts",e(E));_(p,await S(u,e(R)),!0),_(i,"Done -- zero network calls left the browser.")}catch(s){_(p,null),_(m,(s==null?void 0:s.message)??String(s),!0),_(i,"Failed.")}}}function C(){_(E,D),T()}async function j(){_(m,null);try{_(i,"Running real datalila-bre code against the local sandbox..."),u=new Mn.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await u.ready,await u.syncOnce(),_(a,!0),await T()}catch(s){_(m,(s==null?void 0:s.message)??String(s),!0),_(i,"Failed.")}}Lt(async()=>{var s;await v(),(s=navigator.serviceWorker)!=null&&s.controller&&await j()});var L=qr(),te=c(l(L),4),ie=l(te);Ze(ie,{padding:"18px",class:"code-panel",children:(s,S)=>{var G=Or(),ge=ce(G),pe=c(l(ge),2),_e=l(pe),Ee=c(_e,2),fe=c(ge,2),re=l(fe);Tr(re,{onRun:T,get value(){return e(E)},set value(Me){_(E,Me,!0)}}),M(()=>Ee.disabled=!e(a)),ue("click",_e,C),ue("click",Ee,T),o(s,G)},$$slots:{default:!0}});var g=c(ie,2);Ze(g,{padding:"18px",children:(s,S)=>{var G=jr(),ge=c(ce(G),2),pe=c(l(ge));He(pe,{type:"number",step:"0.01",min:"0",max:"0.6",oninput:T,get value(){return e(r)},set value(Z){_(r,Z,!0)}});var _e=c(ge,2),Ee=c(l(_e));He(Ee,{type:"number",step:"5",min:"500",max:"850",oninput:T,get value(){return e(d)},set value(Z){_(d,Z,!0)}});var fe=c(_e,2),re=l(fe),Me=c(fe,2);{var oe=Z=>{var k=Ar(),y=l(k);M(()=>F(y,e(m))),o(Z,k)};H(Me,Z=>{e(m)&&Z(oe)})}var h=c(Me,2);{var I=Z=>{var k=Cr(),y=c(l(k),2),P=l(y);M(z=>F(P,z),[()=>JSON.stringify(e(p),(z,de)=>{var ee,se;return(se=(ee=Mn.Decimal).isDecimal)!=null&&se.call(ee,de)?de.toString():de},2)]),o(Z,k)};H(h,Z=>{e(p)&&Z(I)})}M(()=>F(re,e(i))),o(s,G)},$$slots:{default:!0}}),o(n,L),Le()}Ge(["click"]);const Et=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
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
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, including two more advanced variants on the roadmap: a policy-driven "smart client" routing mode, and a true single-graph mixed-placement mode (via a remote-decision bridge).'}],Fr={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},Lr={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function Gt(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const Dt=" ";function Br(n,t){const i=Lr[t]??"//",a=n.indexOf(i),r=a>=0?n.slice(0,a):n,d=a>=0?n.slice(a):"",p=[],m=r.replace(/"[^"]*"|'[^']*'/g,R=>(p.push(R),Dt+"STR"+(p.length-1)+Dt));let u=Gt(m);u=u.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const D=Fr[t]??[];if(D.length){const R=new RegExp(`\\b(${D.join("|")})\\b`,"g");u=u.replace(R,'<span class="tok-kw">$1</span>')}const E=new RegExp(Dt+"STR(\\d+)"+Dt,"g");return u=u.replace(E,(R,v)=>`<span class="tok-str">${Gt(p[Number(v)])}</span>`),d&&(u+=`<span class="tok-comment">${Gt(d)}</span>`),u}function Wr(n,t){return n.split(`
`).map(i=>Br(i,t)).join(`
`)}var Vr=w('<p class="note svelte-65i1x3"> </p>'),Ur=w('<div class="panel-body svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></div>'),Kr=w(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="page-title">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">packages/dmn-examples/src/dmn/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav aria-label="SDK language"><!></nav> <!></div>`);function zr(n,t){Fe(t,!0);let i=$(Be(Et[0].id)),a=me(()=>Et.find(u=>u.id===e(i))??Et[0]);var r=Kr(),d=c(l(r),2),p=l(d);qt(p,{bordered:!0,children:(u,D)=>{var E=Pe(),R=ce(E);Te(R,17,()=>Et,v=>v.id,(v,T)=>{{let C=me(()=>e(T).id===e(i));gt(v,{get active(){return e(C)},onclick:()=>_(i,e(T).id,!0),children:(j,L)=>{var te=xe();M(()=>F(te,e(T).label)),o(j,te)},$$slots:{default:!0}})}}),o(u,E)},$$slots:{default:!0}});var m=c(d,2);Ze(m,{padding:"20px 22px",children:(u,D)=>{var E=Ur(),R=l(E),v=l(R),T=l(v),C=c(v,2),j=l(C),L=c(R,2);{var te=re=>{var Me=Vr(),oe=l(Me);M(()=>F(oe,e(a).note)),o(re,Me)};H(L,re=>{e(a).note&&re(te)})}var ie=c(L,2),g=l(ie),s=c(ie,2),S=l(s);Cn(S,()=>Wr(e(a).code,e(a).language),!0);var G=c(s,4),ge=l(G),pe=l(ge),_e=c(G,4),Ee=l(_e),fe=l(Ee);M(re=>{F(T,e(a).label),F(j,e(a).packageName),F(g,`Example (${e(a).sourcePath??""})`),F(pe,re),F(fe,e(a).output)},[()=>e(a).runSteps.join(`
`)]),o(u,E)},$$slots:{default:!0}}),o(n,r),Le()}const Jr=`# Privacy Policy

Datalila BRE ("we", "us") is an accurate, fast and local Business rules Engine. 
This policy describes the data that is stored on our database when the Playground, Studio, SDK Sandbox, or Account features at datalila.com.
The Playground, SDK Sandbox, and BRE Studio's local "Save to Library" run entirely in your browser.
The Account feature is the one part of the site that talks to our servers.

## What is stored on our servers.

- **Account signup** — As of now, only "sign in with Google" is possible, so 
  whatever Google's OAuth flow shares with us (your email address and that
  Google has verified it) is available for us to store.
- **Saved rulesets** — if you save a ruleset to your account, its content
  (the DMN/decision-table you saved) is stored on our servers, associated
  with your account so you can retrieve it next time you log in.
- **Basic operational logs** — standard server logs (IP address, request
  timestamps, error traces) for debugging and abuse prevention.
  We don't run analytics or ad trackers on this site.

## What we don't do
- We don't use your data for any thing except to offer the rules engine  service.
- We don't sell your data, to anyone, ever.
- We don't share your identity with third parties. Except the infrastructure
  providers necessary to run the service (currently Google Cloud Platform,
  which hosts our servers). 
- We don't use your saved rulesets or account data to train any model.

## Data retention and deletion

You can delete a saved ruleset from your account at any time. If you'd
like your entire account and its data permanently deleted, email us
(below) and we'll do it by hand for now — self-service account deletion
isn't built yet.

## Where your data lives

Our production infrastructure runs on the Google Cloud Platform, currently in
the United States. We don't yet offer region-specific data residency
guarantees.

## Cookies and local storage

We use browser \`localStorage\` (not cookies) to keep you signed in and to
remember Studio's locally-saved rulesets. Nothing here is used for
tracking or advertising.

## Beta-stage disclaimer

While we take reasonable care with your data (production traffic is encrypted at rest and in transit), we haven't yet completed a third-party security audit or formal compliance certification as of July 2026. 
Don't store anything in a saved ruleset that you wouldn't want in a beta product's database.

## Contact

Questions about this policy, or a deletion request:
[hello@datalila.com](mailto:hello@datalila.com).
`;var Xr=w('<div class="legal svelte-1gmktme"><!></div>');function Hn(n,t){Fe(t,!0);let i=me(()=>fa.parse(t.markdown,{async:!1}));var a=Xr(),r=l(a);Ze(r,{padding:"20px 22px",children:(d,p)=>{var m=Pe(),u=ce(m);Cn(u,()=>e(i)),o(d,m)},$$slots:{default:!0}}),o(n,a),Le()}function Hr(n){Hn(n,{get markdown(){return Jr}})}const Gr=`# Terms of Service

_Last updated: 2026-07-25_

These terms cover your use of Datalila BRE (the Playground, Studio, SDK
Sandbox, Account, and API features at datalila.com). By creating an
account or using these features, you agree to them.

## The service, as-is, in beta

Datalila BRE is provided free of charge while it's in early development.
It's offered "as is," without warranty of any kind. We don't guarantee
uptime, data durability, or fitness for any particular purpose. Don't
rely on it for anything where an outage or data loss would cause you real
harm — back up anything important yourself.

## Acceptable use

You agree not to:

- Use the service to store or process unlawful content.
- Attempt to disrupt, overload, or gain unauthorized access to the
  service or other users' accounts or data.
- Use automated means to scrape or abuse the service beyond normal,
  good-faith use.

We reserve the right to suspend or terminate accounts that violate this,
or that we reasonably believe are abusive or fraudulent.

## Your content

You own whatever rulesets, DMN files, or facts you save to your account.
We don't claim any ownership over your content, and we don't use it for
anything other than providing the service back to you (see our
[Privacy Policy](/bre/privacy)).

## No liability

To the fullest extent permitted by law, Datalila and its operators aren't
liable for any indirect, incidental, or consequential damages arising
from your use of (or inability to use) the service, including data loss.

## Changes

We may update these terms as the product evolves. We'll update the date
above when we do; continued use after a change means you accept the
updated terms.

## Contact

Questions: [hello@datalila.com](mailto:hello@datalila.com). Security
issues: [security@datalila.com](mailto:security@datalila.com).
`;function Yr(n){Hn(n,{get markdown(){return Gr}})}var Nn=w('<div class="view-wrap svelte-1n46o8q"><!></div>'),Qr=w("<!> <!>",1),Zr=w('<p class="studio-loading svelte-1n46o8q">Loading Studio…</p>'),$r=w("<div><!></div>"),eo=w('<span class="build-info-detail svelte-1n46o8q">commit <code class="svelte-1n46o8q"></code> </span>'),to=w('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><!> <!> <!> <!></nav></header> <main><!></main> <!> <footer>Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!> <span class="build-info">· <a>Privacy</a> · <a>Terms</a> · <button type="button" class="build-info-toggle svelte-1n46o8q">Build info</button> <!></span></footer>',1);function no(n,t){Fe(t,!0);let i=$(!1);$e(()=>{});const a={playground:"Playground","sdk-sandbox":"Try the JS / TS SDK",docs:"SDK examples",account:"Your account",studio:"Studio",privacy:"Privacy Policy",terms:"Terms of Service"};$e(()=>{document.title=`Datalila BRE — ${a[ye.current]}`});let r=$(!1),d=$(null);$e(()=>{ye.current==="studio"&&!e(r)&&(_(r,!0),ba(()=>import("./index-DXK64NlD.js"),__vite__mapDeps([0,1,2])).then(y=>{_(d,y.StudioEditor,!0)}))});function p(){ye.current==="playground"&&Ke.current&&(Kn({dmnXml:Ke.current.dmnXml,facts:Ke.facts}),ye.bumpStudioHandoff())}var m=to(),u=ce(m),D=c(l(u),2),E=l(D);{let y=me(()=>ye.current==="studio"?Ce("playground"):Ce("studio")),P=me(()=>ye.current==="studio"?"page":void 0);qe(E,{variant:"secondary",class:"nav-button",get href(){return e(y)},get"aria-current"(){return e(P)},onclick:p,children:(z,de)=>{var ee=xe();M(()=>F(ee,ye.current==="studio"?"Back to Playground":"Open Studio")),o(z,ee)},$$slots:{default:!0}})}var R=c(E,2);{let y=me(()=>ye.current==="sdk-sandbox"?Ce("playground"):Ce("sdk-sandbox")),P=me(()=>ye.current==="sdk-sandbox"?"page":void 0);qe(R,{variant:"secondary",class:"nav-button",get href(){return e(y)},get"aria-current"(){return e(P)},children:(z,de)=>{var ee=xe();M(()=>F(ee,ye.current==="sdk-sandbox"?"Hide SDK Sandbox":"Try the JS/TS SDK")),o(z,ee)},$$slots:{default:!0}})}var v=c(R,2);{let y=me(()=>ye.current==="docs"?Ce("playground"):Ce("docs")),P=me(()=>ye.current==="docs"?"page":void 0);qe(v,{variant:"secondary",class:"nav-button",get href(){return e(y)},get"aria-current"(){return e(P)},children:(z,de)=>{var ee=xe();M(()=>F(ee,ye.current==="docs"?"Back to Playground":"SDK Docs")),o(z,ee)},$$slots:{default:!0}})}var T=c(v,2);{var C=y=>{{let P=me(()=>ye.current==="account"?Ce("playground"):Ce("account")),z=me(()=>ye.current==="account"?"page":void 0);qe(y,{variant:"secondary",class:"nav-button",get href(){return e(P)},get"aria-current"(){return e(z)},children:(de,ee)=>{var se=Pe(),b=ce(se);{var f=Y=>{var ae=xe("Hide Account");o(Y,ae)},x=Y=>{var ae=xe();M(()=>F(ae,`Signed in${be.orgName?` — ${be.orgName}`:""}`)),o(Y,ae)},A=Y=>{var ae=xe("Sign in to save rulesets");o(Y,ae)};H(b,Y=>{ye.current==="account"?Y(f):be.token?Y(x,1):Y(A,-1)})}o(de,se)},$$slots:{default:!0}})}};H(T,y=>{y(C)})}var j=c(u,2);let L;var te=l(j);{var ie=y=>{zr(y,{})},g=y=>{var P=Nn(),z=l(P);Pr(z,{}),o(y,P)},s=y=>{Hr(y)},S=y=>{Yr(y)},G=y=>{var P=Qr(),z=ce(P);{var de=se=>{var b=Nn(),f=l(b);fr(f,{}),o(se,b)};H(z,se=>{ye.current==="account"&&se(de)})}var ee=c(z,2);Ui(ee,{}),o(y,P)};H(te,y=>{ye.current==="docs"?y(ie):ye.current==="sdk-sandbox"?y(g,1):ye.current==="privacy"?y(s,2):ye.current==="terms"?y(S,3):y(G,-1)})}var ge=c(j,2);{var pe=y=>{var P=$r();let z;var de=l(P);{var ee=b=>{var f=Pe(),x=ce(f);va(x,()=>ye.studioHandoffTick,A=>{var Y=Pe(),ae=ce(Y);ga(ae,()=>e(d),(K,W)=>{W(K,{})}),o(A,Y)}),o(b,f)},se=b=>{var f=Zr();o(b,f)};H(de,b=>{e(d)?b(ee):b(se,-1)})}M(()=>z=We(P,1,"studio-wrap svelte-1n46o8q",null,z,{hidden:ye.current!=="studio"})),o(y,P)};H(ge,y=>{e(r)&&y(pe)})}var _e=c(ge,2);let Ee;var fe=c(l(_e));{var re=y=>{var P=xe("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");o(y,P)};H(fe,y=>{y(re)})}var Me=c(fe,2),oe=c(l(Me)),h=c(oe,2),I=c(h,2),Z=c(I,2);{var k=y=>{var P=eo(),z=c(l(P));ne(z,"title","d07951aca0445e5ae3b8a25b6b781a874cff9f6b"),z.textContent="d07951a";var de=c(z);de.nodeValue=`,
        built 2026-07-25T20:34:25.670Z`,o(y,P)};H(Z,y=>{e(i)&&y(k)})}M((y,P)=>{L=We(j,1,"svelte-1n46o8q",null,L,{hidden:ye.current==="studio"}),Ee=We(_e,1,"fine svelte-1n46o8q",null,Ee,{hidden:ye.current==="studio"}),ne(oe,"href",y),ne(h,"href",P)},[()=>Ce("privacy"),()=>Ce("terms")]),ue("click",I,()=>_(i,!e(i))),o(n,m),Le()}Ge(["click"]);_a(no,{target:document.getElementById("app")});export{hn as D,wt as E,co as L,en as a,yn as b,lo as c,ro as d,pn as e,Wa as i,uo as l,La as p,so as s,oo as u};

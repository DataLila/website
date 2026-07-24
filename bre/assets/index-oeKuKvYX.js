const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DrOqShpV.js","assets/vendor-DwXze8Xq.js","assets/index-CaUT83wN.css"])))=>i.map(i=>d[i]);
var tn=n=>{throw TypeError(n)};var Un=(n,t,a)=>t.has(n)||tn("Cannot "+a);var it=(n,t,a)=>(Un(n,t,"read from private field"),a?a.call(n):t.get(n)),Pt=(n,t,a)=>t.has(n)?tn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,a);import{s as zn,d as nn,a as He,p as Le,b as he,c,e as l,i as X,f as Ne,g as Oe,h as e,t as M,j as Fe,k as r,l as Pe,u as de,m as F,n as It,o as Mt,q as oe,r as pe,v as E,w as Ae,x as je,y as xe,z as ne,A as $,B as qe,C as Qe,D as h,E as Ht,F as nt,G as ct,H as pt,I as In,J as Nt,K as Tt,L as Mn,M as Ft,N as an,O as Nn,P as Jn,Q as Kn,R as Bt,S as rn,T as Xn,U as Hn,V as Gn,W as Yn,X as Qn,Y as Zn,Z as $n,_ as ei,$ as ti,a0 as ni,a1 as ii,a2 as ai,a3 as ri,a4 as oi,a5 as si,a6 as li,a7 as ui,a8 as di,a9 as ci}from"./vendor-DwXze8Xq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const p of f.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function i(o){if(o.ep)return;o.ep=!0;const f=a(o);fetch(o.href,f)}})();const pi="modulepreload",mi=function(n){return"/bre/"+n},on={},fi=function(t,a,i){let o=Promise.resolve();if(a&&a.length>0){let p=function(D){return Promise.all(D.map(x=>Promise.resolve(x).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),d=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=p(a.map(D=>{if(D=mi(D),D in on)return;on[D]=!0;const x=D.endsWith(".css"),S=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${D}"]${S}`))return;const v=document.createElement("link");if(v.rel=x?"stylesheet":pi,x||(v.as="script"),v.crossOrigin="",v.href=D,d&&v.setAttribute("nonce",d),document.head.appendChild(v),x)return new Promise((T,A)=>{v.addEventListener("load",T),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${D}`)))})}))}function f(p){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=p,window.dispatchEvent(m),!m.defaultPrevented)throw p}return o.then(p=>{for(const m of p||[])m.status==="rejected"&&f(m.reason);return t().catch(f)})};function vi(n,t){let a,i;try{const x=Ee.__wbindgen_add_to_stack_pointer(-16),S=At(n,Ee.__wbindgen_export,Ee.__wbindgen_export2),v=$e,T=At(t,Ee.__wbindgen_export,Ee.__wbindgen_export2),A=$e;Ee.compile_ruleset(x,S,v,T,A);var o=Ke().getInt32(x+0,!0),f=Ke().getInt32(x+4,!0),p=Ke().getInt32(x+8,!0),m=Ke().getInt32(x+12,!0),d=o,D=f;if(m)throw d=0,D=0,Gt(p);return a=d,i=D,Ot(d,D)}finally{Ee.__wbindgen_add_to_stack_pointer(16),Ee.__wbindgen_export3(a,i,1)}}function sn(n,t){let a,i;try{const x=Ee.__wbindgen_add_to_stack_pointer(-16),S=At(n,Ee.__wbindgen_export,Ee.__wbindgen_export2),v=$e,T=At(t,Ee.__wbindgen_export,Ee.__wbindgen_export2),A=$e;Ee.evaluate_ruleset_with_trace(x,S,v,T,A);var o=Ke().getInt32(x+0,!0),f=Ke().getInt32(x+4,!0),p=Ke().getInt32(x+8,!0),m=Ke().getInt32(x+12,!0),d=o,D=f;if(m)throw d=0,D=0,Gt(p);return a=d,i=D,Ot(d,D)}finally{Ee.__wbindgen_add_to_stack_pointer(16),Ee.__wbindgen_export3(a,i,1)}}function _i(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,a){throw new Error(Ot(t,a))},__wbg_getTime_7a770f8a2ec8d634:function(t){return Dt(t).getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return Dt(t).getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return ht(new Date)},__wbg_new_47ab770c8bd3b6bb:function(t){const a=new Date(Dt(t));return ht(a)},__wbindgen_cast_0000000000000001:function(t){return ht(t)},__wbindgen_cast_0000000000000002:function(t,a){const i=Ot(t,a);return ht(i)},__wbindgen_object_drop_ref:function(t){Gt(t)}}}}function ht(n){st===We.length&&We.push(We.length+1);const t=st;return st=We[t],We[t]=n,t}function gi(n){n<1028||(We[n]=st,st=n)}let Ge=null;function Ke(){return(Ge===null||Ge.buffer.detached===!0||Ge.buffer.detached===void 0&&Ge.buffer!==Ee.memory.buffer)&&(Ge=new DataView(Ee.memory.buffer)),Ge}function Ot(n,t){return hi(n>>>0,t)}let at=null;function Et(){return(at===null||at.byteLength===0)&&(at=new Uint8Array(Ee.memory.buffer)),at}function Dt(n){return We[n]}let We=new Array(1024).fill(void 0);We.push(void 0,null,!0,!1);let st=We.length;function At(n,t,a){if(a===void 0){const m=lt.encode(n),d=t(m.length,1)>>>0;return Et().subarray(d,d+m.length).set(m),$e=m.length,d}let i=n.length,o=t(i,1)>>>0;const f=Et();let p=0;for(;p<i;p++){const m=n.charCodeAt(p);if(m>127)break;f[o+p]=m}if(p!==i){p!==0&&(n=n.slice(p)),o=a(o,i,i=p+n.length*3,1)>>>0;const m=Et().subarray(o+p,o+i),d=lt.encodeInto(n,m);p+=d.written,o=a(o,i,p,1)>>>0}return $e=p,o}function Gt(n){const t=Dt(n);return gi(n),t}let Rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Rt.decode();const yi=2146435072;let Vt=0;function hi(n,t){return Vt+=t,Vt>=yi&&(Rt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Rt.decode(),Vt=t),Rt.decode(Et().subarray(n,n+t))}const lt=new TextEncoder;"encodeInto"in lt||(lt.encodeInto=function(n,t){const a=lt.encode(n);return t.set(a),{read:n.length,written:a.length}});let $e=0,Ee;function bi(n,t){return Ee=n.exports,Ge=null,at=null,Ee}async function xi(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&a(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const i=await n.arrayBuffer();return await WebAssembly.instantiate(i,t)}else{const i=await WebAssembly.instantiate(n,t);return i instanceof WebAssembly.Instance?{instance:i,module:n}:i}function a(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function wi(n){if(Ee!==void 0)return Ee;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-CaVvRRgX.wasm",import.meta.url));const t=_i();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:a,module:i}=await xi(await n,t);return bi(a)}const Ei=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Di=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ri=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Si=`<?xml version="1.0" encoding="UTF-8"?>
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
`,ki=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ii=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
`,Mi=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ni=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ti=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Oi=`<?xml version="1.0" encoding="UTF-8"?>
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
`,bt=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:Ei,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:Di,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:Ri,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:Si,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"},{kind:"table",id:"loan_approval",title:"Loan approval",description:"Consumer loan approval & credit limit by credit score and monthly income — a FIRST-hit decision table. (Formerly one of Studio’s own hardcoded samples, unified here per BRE-122 so it also appears in Playground.)",dmnXml:ki,input1:{name:"creditScore",label:"Credit score",min:300,max:850,step:5,format:n=>String(n)},input2:{name:"monthlyIncome",label:"Monthly income",min:0,max:15e3,step:250,format:n=>`$${n.toLocaleString()}`},flagField:"approved",amountField:"limit",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"",amountFormat:n=>`$${n.toLocaleString()}`,presets:[{label:"Strong applicant",input1:720,input2:6500},{label:"Borderline",input1:610,input2:3200},{label:"Below threshold",input1:560,input2:2e3}],defaultInput1:720,defaultInput2:6500},{kind:"generic",id:"tck_0004",title:"DMN TCK: simple table (UNIQUE)",description:"An OMG DMN Technology Compatibility Kit conformance fixture (0004-simpletable-U), demonstrating the UNIQUE hit policy over 3 mixed-type inputs (number, string, boolean). Shown as plain fields, not curated sliders — a 3-input mixed-type table genuinely doesn’t fit the 2-numeric-slider model (see BRE-122).",dmnXml:Ii,inputs:[{name:"Age",label:"Age",type:"number",default:18},{name:"RiskCategory",label:"Risk category",type:"string",options:["High","Medium","Low"],default:"Medium"},{name:"isAffordable",label:"Is affordable",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"customer_tier_routing",title:"Customer tier routing",description:"Discount % and priority shipping by loyalty tier and cart value — one string input and one numeric input, so it’s shown as plain fields rather than forced onto two numeric sliders.",dmnXml:Mi,inputs:[{name:"memberStatus",label:"Member status",type:"string",options:["gold","silver"],default:"gold"},{name:"cartValue",label:"Cart value",type:"number",default:120}],display:"table"},{kind:"generic",id:"fraud_risk_scoring",title:"Fraud risk scoring",description:"Risk score & recommended action by transaction amount and whether it’s international — a numeric input plus a boolean input, shown as plain fields.",dmnXml:Ni,inputs:[{name:"amount",label:"Amount",type:"number",default:1500},{name:"isInternational",label:"International transaction",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"full_drd_elements",title:"Full DRD element types (structural demo)",description:"A structural/edge-case demo, not a realistic business scenario: exercises every DRG element type DMN defines (input data, a business knowledge model, a knowledge source, an authority requirement) alongside one real decision table. Best explored via Studio’s DRD Diagram tab; the single text input below only drives the one decision’s table.",dmnXml:Ti,inputs:[{name:"Raw Input",label:"Raw input",type:"string",options:["valid","invalid"],default:"valid"}],display:"table"},{kind:"generic",id:"loan_origination",title:"Loan origination (multi-decision graph)",description:"A genuine 3-decision chain (Affordability, RiskCategory, then Routing, which requires both) over 4 primitive inputs — too many inputs and too structurally different from a flat table to force onto Playground’s 2-slider model, so it’s shown as plain fields plus the DRD diagram with live per-decision values overlaid after you run it.",dmnXml:Oi,inputs:[{name:"applicant_income",label:"Applicant income",type:"number",default:6e3},{name:"applicant_expenses",label:"Applicant expenses",type:"number",default:2500},{name:"loan_amount",label:"Loan amount",type:"number",default:1e4},{name:"credit_score",label:"Credit score",type:"number",default:720}],display:"graph"}];function ln(n){if(n.kind==="generic"){const t={};for(const a of n.inputs)t[a.name]=a.default;return t}return{[n.input1.name]:n.defaultInput1,[n.input2.name]:n.defaultInput2}}const Ze="https://www.omg.org/spec/DMN/20191111/MODEL/",ut="https://www.omg.org/spec/DMN/20191111/DMNDI/",mt="https://www.omg.org/spec/DMN/20211108/MODEL/",Tn="https://www.omg.org/spec/DMN/20211108/DMNDI/",ft="https://www.omg.org/spec/DMN/20230324/MODEL/",On="https://www.omg.org/spec/DMN/20230324/DMNDI/",Ye="https://www.omg.org/spec/DMN/20250201/MODEL/",An="https://www.omg.org/spec/DMN/20250201/DMNDI/";let rt=Ye;function Cn(n){return n&&(n.includes(Ye)?n.replaceAll(Ye,Ze).replaceAll(An,ut):n.includes(ft)?n.replaceAll(ft,Ze).replaceAll(On,ut):n.includes(mt)?n.replaceAll(mt,Ze).replaceAll(Tn,ut):n)}function Gr(n){return n&&(n.includes(Ye)?rt=Ye:n.includes(ft)?rt=ft:n.includes(mt)?rt=mt:rt=Ze,Cn(n))}function jn(n){return Cn(n)}function Yr(n,t){if(!n)return n;const a=rt||Ye,i=a===Ye?An:a===ft?On:a===mt?Tn:ut;return a===Ze?n:n.replaceAll(Ze,a).replaceAll(ut,i)}const Yt=new zn;async function Ai(n){const{rootElement:t}=await Yt.fromXML(jn(n));return t}async function Qr(n){const{xml:t}=await Yt.toXML(n,{format:!0});return t}function Je(n,t={}){return Yt.create(n,t)}const Ci=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function Qt(n){return n.get("drgElement")||[]}function ji(n){return n.$type==="dmn:Decision"}function Zr(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:DecisionTable"?t:null}function $r(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:LiteralExpression"?t:null}function qn(n){const t=[],a=i=>i.replace(/^#/,"");for(const i of n.get("informationRequirement")||[]){const o=i.get("requiredInput")||i.get("requiredDecision");o&&o.href&&t.push(a(o.href))}for(const i of n.get("knowledgeRequirement")||[]){const o=i.get("requiredKnowledge");o&&o.href&&t.push(a(o.href))}return t}const Wt={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},un={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function qi(n){const t=Qt(n),a=new nn.graphlib.Graph;a.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),a.setDefaultEdgeLabel(()=>({}));for(const d of t){const D=Wt[d.$type];if(!D)continue;const x=un[D];a.setNode(d.id,{...x})}const i=[];for(const d of t)if(Wt[d.$type])for(const D of qn(d))a.node(D)&&(a.setEdge(D,d.id),i.push([D,d.id]));nn.layout(a);const o=[];let f=0,p=0;for(const d of t){const D=Wt[d.$type];if(!D)continue;const x=a.node(d.id),S=un[D];o.push({id:d.id,name:d.get("name")||d.id,type:D,x:x.x-S.width/2,y:x.y-S.height/2,width:S.width,height:S.height,element:d}),f=Math.max(f,x.x+S.width/2),p=Math.max(p,x.y+S.height/2)}const m=i.map(([d,D])=>{var x;return{from:d,to:D,points:(((x=a.edge(d,D))==null?void 0:x.points)||[]).map(S=>({x:S.x,y:S.y}))}});return{nodes:o,edges:m,width:f+40,height:p+40}}var Fi=E('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),Li=E("<option> </option>"),Pi=E('<select class="svelte-1qozfr"></select>'),Bi=E('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),dn=E('<div class="dt-col-label svelte-1qozfr"> </div>'),Vi=E('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Wi=E('<th class="dt-input-col svelte-1qozfr"><!></th>'),Ui=E('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),zi=E('<th class="dt-output-col svelte-1qozfr"><!></th>'),Ji=E('<select class="dt-io-field svelte-1qozfr"><option>true</option><option>false</option></select>'),Ki=E('<input class="dt-io-field svelte-1qozfr"/>'),cn=E('<span class="dt-io-value svelte-1qozfr"> </span>'),Xi=E('<td class="dt-io-cell dt-io-input svelte-1qozfr"><!></td>'),Hi=E('<span class="dt-io-value dt-io-empty svelte-1qozfr">—</span>'),Gi=E('<td class="dt-io-cell dt-io-output svelte-1qozfr"><!></td>'),Yi=E('<tr class="dt-io-row svelte-1qozfr"><td class="dt-rownum dt-io-label svelte-1qozfr">Test</td><!><!></tr>'),Qi=E('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),pn=E('<input class="svelte-1qozfr"/>'),mn=E('<td class="svelte-1qozfr"><!></td>'),Zi=E('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),$i=E('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr><!></thead><tbody></tbody></table></div></div>');function fn(n,t){Le(t,!0);let a=he(t,"readonly",3,!1),i=he(t,"matchedRuleIndices",19,()=>[]),o=de(()=>t.decision.get("decisionLogic")),f=de(()=>e(o).get("input")),p=de(()=>e(o).get("output")),m=de(()=>e(o).get("rule"));function d(_){var g;e(o).set("hitPolicy",_),(g=t.onchange)==null||g.call(t)}function D(_,g){var w;_.set("label",g),(w=t.onchange)==null||w.call(t)}function x(_,g){var w;_.get("inputExpression").set("text",g),(w=t.onchange)==null||w.call(t)}function S(_,g){var w;_.get("inputExpression").set("typeRef",g),(w=t.onchange)==null||w.call(t)}function v(_,g){var w;_.set("name",g),(w=t.onchange)==null||w.call(t)}function T(_,g){var w;_.set("label",g),(w=t.onchange)==null||w.call(t)}function A(_,g){var w;_.set("typeRef",g),(w=t.onchange)==null||w.call(t)}function j(_,g,w){var L;_.get("inputEntry")[g].set("text",w),(L=t.onchange)==null||L.call(t)}function W(_,g,w){var L;_.get("outputEntry")[g].set("text",w),(L=t.onchange)==null||L.call(t)}function ee(){var w;const _=Je("dmn:LiteralExpression",{text:""}),g=Je("dmn:InputClause",{label:"New Input",inputExpression:_});e(o).get("input").push(g);for(const L of e(m))L.get("inputEntry").push(Je("dmn:UnaryTests",{text:"-"}));(w=t.onchange)==null||w.call(t)}function ie(_){var g;e(o).get("input").splice(_,1);for(const w of e(m))w.get("inputEntry").splice(_,1);(g=t.onchange)==null||g.call(t)}function y(){var g;const _=Je("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(o).get("output").push(_);for(const w of e(m))w.get("outputEntry").push(Je("dmn:LiteralExpression",{text:'""'}));(g=t.onchange)==null||g.call(t)}function s(_){var g;e(o).get("output").splice(_,1);for(const w of e(m))w.get("outputEntry").splice(_,1);(g=t.onchange)==null||g.call(t)}function b(){var w;const _=e(f).map(()=>Je("dmn:UnaryTests",{text:"-"})),g=e(p).map(()=>Je("dmn:LiteralExpression",{text:'""'}));e(o).get("rule").push(Je("dmn:DecisionRule",{inputEntry:_,outputEntry:g})),(w=t.onchange)==null||w.call(t)}function H(_){var g;e(o).get("rule").splice(_,1),(g=t.onchange)==null||g.call(t)}var ve=$i(),ae=l(ve),be=l(ae),we=c(l(be));{var me=_=>{var g=Fi(),w=l(g);M(L=>F(w,L),[()=>e(o).get("hitPolicy")||"UNIQUE"]),r(_,g)},re=_=>{var g=Pi();Ne(g,21,()=>Ci,Oe,(L,se)=>{var ue=Li(),z=l(ue),B={};M(()=>{F(z,e(se)),B!==(B=e(se))&&(ue.value=(ue.__value=e(se))??"")}),r(L,ue)});var w;It(g),M(L=>{w!==(w=L)&&(g.value=(g.__value=L)??"",Mt(g,L))},[()=>e(o).get("hitPolicy")||"UNIQUE"]),oe("change",g,L=>d(L.currentTarget.value)),r(_,g)};X(we,_=>{a()?_(me):_(re,-1)})}var Re=c(be,2);{var I=_=>{var g=Bi(),w=pe(g),L=c(w,2),se=c(L,2);oe("click",w,ee),oe("click",L,y),oe("click",se,b),r(_,g)};X(Re,_=>{a()||_(I)})}var u=c(ae,2),C=l(u);let V;var k=l(C),O=l(k),Z=c(l(O));Ne(Z,17,()=>e(f),Oe,(_,g,w)=>{var L=Wi(),se=l(L);{var ue=B=>{var J=dn(),Y=l(J);M(N=>F(Y,N),[()=>e(g).get("label")||""]),r(B,J)},z=B=>{var J=Vi(),Y=pe(J),N=c(Y,2),P=c(N,2),R=l(P),q=c(R,2);M((K,_e,ke)=>{Ae(Y,K),Ae(N,_e),Ae(R,ke)},[()=>e(g).get("label")||"",()=>e(g).get("inputExpression").get("text")||"",()=>e(g).get("inputExpression").get("typeRef")||""]),oe("input",Y,K=>D(e(g),K.currentTarget.value)),oe("input",N,K=>x(e(g),K.currentTarget.value)),oe("input",R,K=>S(e(g),K.currentTarget.value)),oe("click",q,()=>ie(w)),r(B,J)};X(se,B=>{a()?B(ue):B(z,-1)})}r(_,L)});var Q=c(Z);Ne(Q,17,()=>e(p),Oe,(_,g,w)=>{var L=zi(),se=l(L);{var ue=B=>{var J=dn(),Y=l(J);M(N=>F(Y,N),[()=>e(g).get("label")||""]),r(B,J)},z=B=>{var J=Ui(),Y=pe(J),N=c(Y,2),P=c(N,2),R=l(P),q=c(R,2);M((K,_e,ke)=>{Ae(Y,K),Ae(N,_e),Ae(R,ke)},[()=>e(g).get("label")||"",()=>e(g).get("name")||"",()=>e(g).get("typeRef")||""]),oe("input",Y,K=>T(e(g),K.currentTarget.value)),oe("input",N,K=>v(e(g),K.currentTarget.value)),oe("input",R,K=>A(e(g),K.currentTarget.value)),oe("click",q,()=>s(w)),r(B,J)};X(se,B=>{a()?B(ue):B(z,-1)})}r(_,L)});var te=c(O);{var ce=_=>{var g=Yi(),w=c(l(g));Ne(w,17,()=>e(f),Oe,(se,ue)=>{const z=de(()=>e(ue).get("inputExpression").get("text")||""),B=de(()=>(e(ue).get("inputExpression").get("typeRef")||"").toLowerCase());var J=Xi(),Y=l(J);{var N=R=>{var q=je(),K=pe(q);{var _e=De=>{var G=Ji(),U=l(G);U.value=U.__value="true";var le=c(U);le.value=le.__value="false";var Ie;It(G),M(Te=>{Ie!==(Ie=Te)&&(G.value=(G.__value=Te)??"",Mt(G,Te))},[()=>String(t.inputValues[e(z)])]),oe("change",G,Te=>{var Me;return(Me=t.onInputValueChange)==null?void 0:Me.call(t,e(z),Te.currentTarget.value)}),r(De,G)},ke=De=>{var G=Ki();M(()=>{ne(G,"type",e(B)==="number"?"number":"text"),Ae(G,t.inputValues[e(z)])}),oe("input",G,U=>{var le;return(le=t.onInputValueChange)==null?void 0:le.call(t,e(z),U.currentTarget.value)}),r(De,G)};X(K,De=>{e(B)==="boolean"?De(_e):De(ke,-1)})}r(R,q)},P=R=>{var q=cn(),K=l(q);M(_e=>F(K,_e),[()=>String(t.outputValues[e(z)])]),r(R,q)};X(Y,R=>{t.inputValues&&t.inputValues[e(z)]!==void 0?R(N):t.outputValues&&t.outputValues[e(z)]!==void 0&&R(P,1)})}r(se,J)});var L=c(w);Ne(L,17,()=>e(p),Oe,(se,ue)=>{const z=de(()=>e(ue).get("name")||"");var B=Gi(),J=l(B);{var Y=P=>{var R=cn(),q=l(R);M(K=>F(q,K),[()=>String(t.outputValues[e(z)])]),r(P,R)},N=P=>{var R=Hi();r(P,R)};X(J,P=>{t.outputValues&&t.outputValues[e(z)]!==void 0?P(Y):P(N,-1)})}r(se,B)}),r(_,g)};X(te,_=>{!a()&&(t.inputValues||t.outputValues)&&_(ce)})}var fe=c(k);Ne(fe,21,()=>e(m),Oe,(_,g,w)=>{var L=Zi();let se;var ue=l(L),z=l(ue);z.nodeValue=`${w+1} `;var B=c(z);{var J=P=>{var R=Qi();oe("click",R,()=>H(w)),r(P,R)};X(B,P=>{a()||P(J)})}var Y=c(ue);Ne(Y,17,()=>e(g).get("inputEntry"),Oe,(P,R,q)=>{var K=mn(),_e=l(K);{var ke=G=>{var U=xe();M(le=>F(U,le),[()=>e(R).get("text")||"-"]),r(G,U)},De=G=>{var U=pn();M(le=>Ae(U,le),[()=>e(R).get("text")||""]),oe("input",U,le=>j(e(g),q,le.currentTarget.value)),r(G,U)};X(_e,G=>{a()?G(ke):G(De,-1)})}r(P,K)});var N=c(Y);Ne(N,17,()=>e(g).get("outputEntry"),Oe,(P,R,q)=>{var K=mn(),_e=l(K);{var ke=G=>{var U=xe();M(le=>F(U,le),[()=>e(R).get("text")||""]),r(G,U)},De=G=>{var U=pn();M(le=>Ae(U,le),[()=>e(R).get("text")||""]),oe("input",U,le=>W(e(g),q,le.currentTarget.value)),r(G,U)};X(_e,G=>{a()?G(ke):G(De,-1)})}r(P,K)}),M(P=>se=Fe(L,1,"svelte-1qozfr",null,se,P),[()=>({matched:i().includes(w)})]),r(_,L)}),M(()=>V=Fe(C,1,"dt-table svelte-1qozfr",null,V,{readonly:a()})),r(n,ve),Pe()}He(["change","click","input"]);var ea=E('<span class="le-type-static svelte-125hirw"> </span>'),ta=E('<input placeholder="e.g. number" class="svelte-125hirw"/>'),na=E('<input class="le-io-input svelte-125hirw"/>'),ia=E('<span class="le-io-value svelte-125hirw"> </span>'),aa=E('<div class="le-io-field svelte-125hirw"><label class="svelte-125hirw"> </label> <!></div>'),ra=E('<div class="le-io-row svelte-125hirw"><!> <div class="le-io-field le-io-result svelte-125hirw"><label for="le-io-result" class="svelte-125hirw"> </label> <span id="le-io-result" class="le-io-value svelte-125hirw"> </span></div></div>'),oa=E('<pre class="le-textarea le-static svelte-125hirw"> </pre>'),sa=E('<textarea class="le-textarea svelte-125hirw" placeholder="FEEL expression, e.g. 400 * age_factor * claims_factor" spellcheck="false"></textarea>'),la=E('<div class="le-editor svelte-125hirw"><div class="le-toolbar svelte-125hirw"><label class="svelte-125hirw">Result type <!></label></div> <!> <!></div>');function eo(n,t){Le(t,!0);let a=he(t,"readonly",3,!1),i=de(()=>t.decision.get("decisionLogic"));function o(y){var s;e(i).set("text",y),(s=t.onchange)==null||s.call(t)}function f(y){var b;const s=t.decision.get("variable");s&&(s.set("typeRef",y),(b=t.onchange)==null||b.call(t))}let p=de(()=>{const y=t.decision.$parent;if(!y)return[];const s=new Map(Qt(y).map(b=>[b.id,b]));return qn(t.decision).map(b=>s.get(b)).filter(b=>!!b).map(b=>({id:b.id,name:b.get("name")||b.id}))}),m=de(()=>{var y;return((y=t.decision.get("variable"))==null?void 0:y.get("name"))||t.decision.get("name")});var d=la(),D=l(d),x=l(D),S=c(l(x));{var v=y=>{var s=ea(),b=l(s);M(H=>F(b,H),[()=>{var H;return((H=t.decision.get("variable"))==null?void 0:H.get("typeRef"))||""}]),r(y,s)},T=y=>{var s=ta();M(b=>Ae(s,b),[()=>{var b;return((b=t.decision.get("variable"))==null?void 0:b.get("typeRef"))||""}]),oe("input",s,b=>f(b.currentTarget.value)),r(y,s)};X(S,y=>{a()?y(v):y(T,-1)})}var A=c(D,2);{var j=y=>{var s=ra(),b=l(s);Ne(b,17,()=>e(p),me=>me.id,(me,re)=>{var Re=aa(),I=l(Re),u=l(I),C=c(I,2);{var V=O=>{var Z=na();M(()=>{ne(Z,"id",`le-io-${e(re).id}`),Ae(Z,t.inputValues[e(re).name])}),oe("input",Z,Q=>{var te;return(te=t.onInputValueChange)==null?void 0:te.call(t,e(re).name,Q.currentTarget.value)}),r(O,Z)},k=O=>{var Z=ia(),Q=l(Z);M(te=>{ne(Z,"id",`le-io-${e(re).id}`),F(Q,te)},[()=>t.outputValues&&t.outputValues[e(re).name]!==void 0?String(t.outputValues[e(re).name]):"—"]),r(O,Z)};X(C,O=>{t.inputValues&&t.inputValues[e(re).name]!==void 0?O(V):O(k,-1)})}M(()=>{ne(I,"for",`le-io-${e(re).id}`),F(u,e(re).name)}),r(me,Re)});var H=c(b,2),ve=l(H),ae=l(ve),be=c(ve,2),we=l(be);M(me=>{F(ae,`${e(m)??""} (result)`),F(we,me)},[()=>t.outputValues&&t.outputValues[e(m)]!==void 0?String(t.outputValues[e(m)]):"—"]),r(y,s)};X(A,y=>{!a()&&(t.inputValues||t.outputValues)&&(e(p).length>0||t.outputValues)&&y(j)})}var W=c(A,2);{var ee=y=>{var s=oa(),b=l(s);M(H=>F(b,H),[()=>e(i).get("text")||""]),r(y,s)},ie=y=>{var s=sa();M(b=>Ae(s,b),[()=>e(i).get("text")||""]),oe("input",s,b=>o(b.currentTarget.value)),r(y,s)};X(W,y=>{a()?y(ee):y(ie,-1)})}r(n,d),Pe()}He(["input"]);var ua=nt('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),da=nt('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),ca=nt('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),pa=nt('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),ma=nt('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),fa=nt('<g role="button" tabindex="0"><!><!></g>'),va=E('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function vn(n,t){Le(t,!0);let a=de(()=>qi(t.definitions)),i=$(qe({x:0,y:0,w:800,h:500})),o=$(!1),f={x:0,y:0},p={x:0,y:0};Qe(()=>{h(i,{x:0,y:0,w:Math.max(e(a).width,400),h:Math.max(e(a).height,300)},!0)});function m(y){y.preventDefault();const s=y.deltaY>0?1.1:.9,b=Math.max(200,Math.min(4e3,e(i).w*s)),H=Math.max(150,Math.min(3e3,e(i).h*s));h(i,{...e(i),w:b,h:H},!0)}function d(y){y.target.closest(".drd-node")||(h(o,!0),f={x:y.clientX,y:y.clientY},p={x:e(i).x,y:e(i).y})}function D(y,s){if(!e(o))return;const b=e(i).w/s.clientWidth;h(i,{...e(i),x:p.x-(y.clientX-f.x)*b,y:p.y-(y.clientY-f.y)*b},!0)}function x(){h(o,!1)}function S(y){switch(y){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function v(y){switch(y){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function T(y){return y.points.length?y.points.map((s,b)=>`${b===0?"M":"L"} ${s.x} ${s.y}`).join(" "):""}function A(y){if(!t.nodeValues)return null;const s=y.id in t.nodeValues?t.nodeValues[y.id]:t.nodeValues[y.name];return s===void 0?null:t.formatNodeValue?t.formatNodeValue(y.id,s):String(s)}var j=va(),W=l(j),ee=c(l(W));Ne(ee,17,()=>e(a).edges,Oe,(y,s)=>{var b=ua();M(H=>ne(b,"d",H),[()=>T(e(s))]),r(y,b)});var ie=c(ee);Ne(ie,17,()=>e(a).nodes,Oe,(y,s)=>{const b=de(()=>A(e(s)));var H=fa();let ve;var ae=l(H);{var be=I=>{var u=da();M((C,V)=>{ne(u,"x",e(s).x),ne(u,"y",e(s).y),ne(u,"width",e(s).width),ne(u,"height",e(s).height),ne(u,"fill",C),ne(u,"stroke",V),ne(u,"stroke-width",e(s).id===t.activeId?2.5:1.5)},[()=>S(e(s).type),()=>v(e(s).type)]),r(I,u)},we=I=>{var u=ca();M((C,V)=>{ne(u,"x",e(s).x),ne(u,"y",e(s).y),ne(u,"width",e(s).width),ne(u,"height",e(s).height),ne(u,"fill",C),ne(u,"stroke",V),ne(u,"stroke-width",e(s).id===t.activeId?2.5:1.5)},[()=>S(e(s).type),()=>v(e(s).type)]),r(I,u)};X(ae,I=>{e(s).type==="inputData"?I(be):I(we,-1)})}var me=c(ae);{var re=I=>{var u=pa(),C=pe(u),V=l(C),k=c(C),O=l(k);M(()=>{ne(C,"x",e(s).x+e(s).width/2),ne(C,"y",e(s).y+e(s).height*.4),F(V,e(s).name),ne(k,"x",e(s).x+e(s).width/2),ne(k,"y",e(s).y+e(s).height*.68),F(O,e(b))}),r(I,u)},Re=I=>{var u=ma(),C=l(u);M(()=>{ne(u,"x",e(s).x+e(s).width/2),ne(u,"y",e(s).y+e(s).height/2),F(C,e(s).name)}),r(I,u)};X(me,I=>{e(b)!==null?I(re):I(Re,-1)})}M(()=>ve=Fe(H,0,"drd-node svelte-1jgcg8n",null,ve,{active:e(s).id===t.activeId,static:!t.onselect})),oe("click",H,()=>{var I;return(I=t.onselect)==null?void 0:I.call(t,e(s).id)}),oe("keydown",H,I=>{var u;return I.key==="Enter"&&((u=t.onselect)==null?void 0:u.call(t,e(s).id))}),r(y,H)}),M(()=>ne(W,"viewBox",`${e(i).x??""} ${e(i).y??""} ${e(i).w??""} ${e(i).h??""}`)),Ht("wheel",W,m),oe("pointerdown",W,d),oe("pointermove",W,y=>D(y,y.currentTarget)),oe("pointerup",W,x),Ht("pointerleave",W,x),r(n,j),Pe()}He(["pointerdown","pointermove","pointerup","click","keydown"]);const Ue=qe({current:null,facts:{}});var _a=E("<div><!></div>");function Ct(n,t){let a=he(t,"direction",3,"row"),i=he(t,"bordered",3,!1),o=he(t,"gap",3,"var(--sp-2)"),f=he(t,"class",3,"");var p=_a();let m,d;var D=l(p);ct(D,()=>t.children??pt),M(()=>{m=Fe(p,1,`tab-group ${f()??""}`,"svelte-13apwse",m,{bordered:i()}),d=In(p,"",d,{"flex-direction":a(),gap:o()})}),r(n,p)}var ga=E("<button><!></button>");function vt(n,t){let a=he(t,"active",3,!1),i=he(t,"variant",3,"pill"),o=he(t,"fullWidth",3,!1),f=he(t,"disabled",3,!1),p=he(t,"type",3,"button");var m=ga();let d;var D=l(m);ct(D,()=>t.children??pt),M(()=>{ne(m,"type",p()),d=Fe(m,1,`tab tab-${i()??""}`,"svelte-184qymf",d,{active:a(),"full-width":o()}),m.disabled=f(),ne(m,"aria-pressed",a())}),oe("click",m,function(...x){var S;(S=t.onclick)==null||S.apply(this,x)}),r(n,m)}He(["click"]);var ya=E("<div><!></div>");function et(n,t){let a=he(t,"padding",3,"var(--sp-5)"),i=he(t,"class",3,"");var o=ya();let f;var p=l(o);ct(p,()=>t.children??pt),M(()=>{Fe(o,1,`panel ${i()??""}`,"svelte-hxsa5u"),f=In(o,"",f,{padding:a()})}),r(n,o)}var ha=new Set(["$$slots","$$events","$$legacy","value","type","variant","class"]),_n=E("<input/>");function Xe(n,t){Le(t,!0);let a=he(t,"value",15),i=he(t,"type",3,"text"),o=he(t,"variant",3,"default"),f=he(t,"class",3,""),p=Mn(t,ha);var m=je(),d=pe(m);{var D=S=>{var v=_n();Nt(v,()=>({type:"number",class:`input input-${o()??""} ${f()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),Tt(v,a),r(S,v)},x=S=>{var v=_n();Nt(v,()=>({type:i(),class:`input input-${o()??""} ${f()??""}`,...p}),void 0,void 0,void 0,"svelte-8ff5h4",!0),Tt(v,a),r(S,v)};X(d,S=>{i()==="number"?S(D):S(x,-1)})}r(n,m),Pe()}var ba=E('<!> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <!></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <!></label> <input id="input2" type="range" class="svelte-175p7lt"/></div>',1),xa=E('<select class="generic-select svelte-175p7lt"><option>true</option><option>false</option></select>'),wa=E("<option> </option>"),Ea=E('<select class="generic-select svelte-175p7lt"></select>'),Da=E('<div class="field generic-field svelte-175p7lt"><label class="svelte-175p7lt"> </label> <!></div>'),Ra=E('<div class="verdict bad svelte-175p7lt"><div class="status svelte-175p7lt">Example error</div> <div class="error-detail mono svelte-175p7lt"> </div></div>'),Sa=E('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),ka=E('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Ia=E('<pre class="generic-result mono svelte-175p7lt"> </pre>'),Ma=E('<div class="rate mono svelte-175p7lt">—</div>'),Na=E('<div class="verdict good generic-verdict svelte-175p7lt"><div class="status svelte-175p7lt">Result</div> <!></div>'),Ta=E('<h2 class="eyebrow svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <!> <!>',1),Oa=E(`<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; unavailable</h2> <p class="lede svelte-175p7lt">This example didn't parse/compile cleanly -- see the error detail in the left panel.</p>`,1),gn=E('<div class="table-host svelte-175p7lt"><!></div>'),yn=E('<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),hn=E('<div class="graph-host svelte-175p7lt"><!></div>'),Aa=E(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Ca=E('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),ja=E('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),qa=E('<h1 class="page-title svelte-175p7lt">Playground</h1> <!> <div class="stage svelte-175p7lt"><!> <!></div>',1);function Fa(n,t){Le(t,!0);let a=$(0),i=de(()=>bt[e(a)]),o=$(0),f=$(0),p=$(qe({})),m=$("loading the engine…"),d=$(!1),D=!1,x=$(null),S=null,v=$(null),T=$(!0),A=$(null),j=$(qe([])),W=$(qe({})),ee=$(null),ie=$(qe({})),y=$(0),s=de(()=>{if(!e(x))return null;const k=Qt(e(x)).filter(ji);return e(i).kind==="generic"&&e(i).display==="table"&&e(i).decisionId?k.find(O=>O.id===e(i).decisionId)||k[0]||null:k[0]||null});Qe(()=>{Ue.current=e(i),Ue.facts=e(i).kind==="generic"?{...e(p)}:{[e(i).input1.name]:e(o),[e(i).input2.name]:e(f)}});async function b(k){try{h(x,await Ai(k.dmnXml),!0),S=vi("dmn-xml",JSON.stringify(jn(k.dmnXml))),h(v,null)}catch(O){S=null,h(x,null),h(v,`This example failed to compile: ${(O==null?void 0:O.message)??String(O)}`),console.error("Failed to load/compile example",k.id,O)}}function H(){if(!S)return;const k=e(i);try{if(k.kind==="generic"){const ce={};for(const g of k.inputs)ce[g.name]=e(p)[g.name];const fe=sn(S,JSON.stringify(ce)),_=JSON.parse(fe);if(h(ee,_.result,!0),k.display==="table")h(j,_.trace&&_.trace.matched_rules||[],!0);else{const g=_.trace&&_.trace.intermediates||{},w=typeof _.result=="object"&&_.result?_.result:{};h(ie,{...g,...w},!0)}return}const O={};O[k.input1.name]=e(o),O[k.input2.name]=e(f);const Z=sn(S,JSON.stringify(O)),Q=JSON.parse(Z);if(k.kind==="graph"){const ce=Q.trace&&Q.trace.intermediates||{},fe={};for(const _ of k.nodes)fe[_.id]=ce[_.id];h(W,fe,!0);return}const te=Q.result;h(j,Q.trace&&Q.trace.matched_rules||[],!0),h(T,!!te[k.flagField]),h(A,te[k.flagField]?te[k.amountField]:null,!0)}catch(O){h(v,`This example failed to evaluate: ${(O==null?void 0:O.message)??String(O)}`),console.error("Failed to evaluate example",k.id,O)}}async function ve(k){h(a,k,!0);const O=bt[k];h(y,O.kind==="generic"?null:0,!0),h(v,null),h(ee,null),h(ie,{},!0),h(j,[],!0),h(W,{},!0),O.kind==="generic"?h(p,ln(O),!0):(h(o,O.defaultInput1,!0),h(f,O.defaultInput2,!0)),D&&(await b(O),H())}function ae(k){e(i).kind!=="generic"&&(h(o,e(i).presets[k].input1,!0),h(f,e(i).presets[k].input2,!0),h(y,k,!0),H())}function be(){h(y,null),H()}function we(k,O){if(e(i).kind==="generic")return;const Z=k===1?e(i).input1:e(i).input2;let Q=parseFloat(O);isNaN(Q)&&(Q=k===1?e(o):e(f)),Q=Math.min(Z.max,Math.max(Z.min,Q)),k===1?h(o,Q,!0):h(f,Q,!0),h(y,null),H()}function me(k,O){h(p,{...e(p),[k]:O},!0),h(y,null),H()}function re(k,O){const Z=e(i).kind==="graph"?e(i).nodes.find(Q=>Q.id===k):void 0;return Z?Z.format(O):String(O)}Ft(async()=>{try{await wi(),D=!0;const k=bt[e(a)];k.kind==="generic"?h(p,ln(k),!0):(h(o,k.defaultInput1,!0),h(f,k.defaultInput2,!0)),await b(e(i)),h(m,"compiled and running — real engine, in your browser, zero network calls."),H()}catch(k){h(d,!0),h(m,"engine failed to load: "+((k==null?void 0:k.message)??String(k))),console.error(k)}});var Re=qa(),I=c(pe(Re),2);Ct(I,{class:"example-tabs",children:(k,O)=>{var Z=je(),Q=pe(Z);Ne(Q,17,()=>bt,Oe,(te,ce,fe)=>{{let _=de(()=>e(a)===fe);vt(te,{get active(){return e(_)},onclick:()=>ve(fe),children:(g,w)=>{var L=xe();M(()=>F(L,e(ce).title)),r(g,L)},$$slots:{default:!0}})}}),r(k,Z)},$$slots:{default:!0}});var u=c(I,2),C=l(u);et(C,{padding:"20px",children:(k,O)=>{var Z=Ta(),Q=c(pe(Z),2),te=l(Q),ce=c(Q,2);{var fe=z=>{var B=ba(),J=pe(B);Ct(J,{direction:"column",gap:"6px",class:"presets",children:(U,le)=>{var Ie=je(),Te=pe(Ie);Ne(Te,17,()=>e(i).presets,Oe,(Me,Be,ze)=>{{let yt=de(()=>e(y)===ze);vt(Me,{variant:"list",get active(){return e(yt)},onclick:()=>ae(ze),children:(Lt,Kr)=>{var en=xe();M(()=>F(en,e(Be).label)),r(Lt,en)},$$slots:{default:!0}})}}),r(U,Ie)},$$slots:{default:!0}});var Y=c(J,2),N=l(Y),P=l(N),R=c(P);Xe(R,{class:"mono",variant:"inline",type:"number",get min(){return e(i).input1.min},get max(){return e(i).input1.max},get step(){return e(i).input1.step},get value(){return e(o)},onchange:U=>we(1,U.currentTarget.value)});var q=c(N,2),K=c(Y,2),_e=l(K),ke=l(_e),De=c(ke);Xe(De,{class:"mono",variant:"inline",type:"number",get min(){return e(i).input2.min},get max(){return e(i).input2.max},get step(){return e(i).input2.step},get value(){return e(f)},onchange:U=>we(2,U.currentTarget.value)});var G=c(_e,2);M(()=>{F(P,`${e(i).input1.label??""} `),ne(q,"min",e(i).input1.min),ne(q,"max",e(i).input1.max),ne(q,"step",e(i).input1.step),F(ke,`${e(i).input2.label??""} `),ne(G,"min",e(i).input2.min),ne(G,"max",e(i).input2.max),ne(G,"step",e(i).input2.step)}),oe("input",q,be),Tt(q,()=>e(o),U=>h(o,U)),oe("input",G,be),Tt(G,()=>e(f),U=>h(f,U)),r(z,B)},_=z=>{var B=je(),J=pe(B);Ne(J,17,()=>e(i).inputs,Oe,(Y,N)=>{var P=Da(),R=l(P),q=l(R),K=c(R,2);{var _e=G=>{var U=xa(),le=l(U);le.value=le.__value="true";var Ie=c(le);Ie.value=Ie.__value="false";var Te;It(U),M(Me=>{ne(U,"id",`generic-${e(N).name}`),Te!==(Te=Me)&&(U.value=(U.__value=Me)??"",Mt(U,Me))},[()=>String(e(p)[e(N).name])]),oe("change",U,Me=>me(e(N).name,Me.currentTarget.value==="true")),r(G,U)},ke=G=>{var U=Ea();Ne(U,21,()=>e(N).options,Oe,(Ie,Te)=>{var Me=wa(),Be=l(Me),ze={};M(()=>{F(Be,e(Te)),ze!==(ze=e(Te))&&(Me.value=(Me.__value=e(Te))??"")}),r(Ie,Me)});var le;It(U),M(()=>{ne(U,"id",`generic-${e(N).name}`),le!==(le=e(p)[e(N).name])&&(U.value=(U.__value=e(p)[e(N).name])??"",Mt(U,e(p)[e(N).name]))}),oe("change",U,Ie=>me(e(N).name,Ie.currentTarget.value)),r(G,U)},De=G=>{{let U=de(()=>`generic-${e(N).name}`),le=de(()=>e(N).type==="number"?"number":"text");Xe(G,{get id(){return e(U)},class:"mono",get type(){return e(le)},get value(){return e(p)[e(N).name]},onchange:Ie=>me(e(N).name,e(N).type==="number"?parseFloat(Ie.currentTarget.value):Ie.currentTarget.value)})}};X(K,G=>{e(N).type==="boolean"?G(_e):e(N).options?G(ke,1):G(De,-1)})}M(()=>{ne(R,"for",`generic-${e(N).name}`),F(q,e(N).label)}),r(Y,P)}),r(z,B)};X(ce,z=>{e(i).kind!=="generic"?z(fe):z(_,-1)})}var g=c(ce,2);{var w=z=>{var B=Ra(),J=c(l(B),2),Y=l(J);M(()=>F(Y,e(v))),r(z,B)},L=z=>{var B=Sa();let J;var Y=l(B),N=l(Y),P=c(Y,2),R=l(P);M(q=>{J=Fe(B,1,"verdict svelte-175p7lt",null,J,{good:e(T),bad:!e(T)}),F(N,e(T)?e(i).flagLabel.good:e(i).flagLabel.bad),F(R,q)},[()=>e(T)&&e(A)!==null?e(i).amountFormat?e(i).amountFormat(e(A)):`${e(A)}${e(i).amountUnit}`:"—"]),r(z,B)},se=z=>{var B=ka(),J=l(B),Y=l(J),N=c(J,2),P=l(N);M((R,q)=>{F(Y,R),F(P,q)},[()=>{var R;return(R=e(i).nodes.find(q=>q.id===e(i).terminalNodeId))==null?void 0:R.label},()=>e(W)[e(i).terminalNodeId]!==void 0?re(e(i).terminalNodeId,e(W)[e(i).terminalNodeId]):"—"]),r(z,B)},ue=z=>{var B=Na(),J=c(l(B),2);{var Y=P=>{var R=Ia(),q=l(R);M(K=>F(q,K),[()=>JSON.stringify(e(ee),null,2)]),r(P,R)},N=P=>{var R=Ma();r(P,R)};X(J,P=>{e(ee)?P(Y):P(N,-1)})}r(z,B)};X(g,z=>{e(v)?z(w):e(i).kind==="table"?z(L,1):e(i).kind==="graph"?z(se,2):z(ue,-1)})}M(()=>F(te,e(i).description)),r(k,Z)},$$slots:{default:!0}});var V=c(C,2);et(V,{padding:"20px",children:(k,O)=>{var Z=je(),Q=pe(Z);{var te=w=>{var L=Oa();r(w,L)},ce=w=>{var L=yn(),se=c(pe(L),2),ue=l(se),z=c(se,2);{var B=J=>{var Y=gn(),N=l(Y);fn(N,{get decision(){return e(s)},readonly:!0,get matchedRuleIndices(){return e(j)}}),r(J,Y)};X(z,J=>{e(s)&&J(B)})}M(()=>F(ue,e(m))),r(w,L)},fe=w=>{var L=Ca(),se=c(pe(L),2),ue=l(se),z=c(se,2);{var B=R=>{var q=hn(),K=l(q);vn(K,{get definitions(){return e(x)},activeId:null,get nodeValues(){return e(W)},formatNodeValue:re}),r(R,q)};X(z,R=>{e(x)&&R(B)})}var J=c(z,2),Y=l(J);{var N=R=>{var q=Aa();r(R,q)},P=R=>{var q=xe("Waiting on the engine…");r(R,q)};X(Y,R=>{e(W)[e(i).terminalNodeId]!==void 0?R(N):e(d)||R(P,1)})}M(()=>F(ue,`${e(m)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),r(w,L)},_=w=>{var L=yn(),se=c(pe(L),2),ue=l(se),z=c(se,2);{var B=J=>{var Y=gn(),N=l(Y);fn(N,{get decision(){return e(s)},readonly:!0,get matchedRuleIndices(){return e(j)}}),r(J,Y)};X(z,J=>{e(s)&&J(B)})}M(()=>F(ue,e(m))),r(w,L)},g=w=>{var L=ja(),se=c(pe(L),2),ue=l(se),z=c(se,2);{var B=J=>{var Y=hn(),N=l(Y);vn(N,{get definitions(){return e(x)},activeId:null,get nodeValues(){return e(ie)}}),r(J,Y)};X(z,J=>{e(x)&&J(B)})}M(()=>F(ue,`${e(m)??""} A genuine multi-decision chain — each box is evaluated by the compiled engine; values appear once evaluated.`)),r(w,L)};X(Q,w=>{e(v)?w(te):e(i).kind==="table"?w(ce,1):e(i).kind==="graph"?w(fe,2):e(i).display==="table"?w(_,3):w(g,-1)})}r(k,Z)},$$slots:{default:!0}}),r(n,Re),Pe()}He(["input","change"]);const Zt="bre_playground_token",$t="bre_playground_tenant",Fn="bre_playground_org_names";function Ln(){if(typeof window>"u")return{};try{const n=localStorage.getItem(Fn);return n?JSON.parse(n):{}}catch{return{}}}function Pn(n){return n?Ln()[n]??null:null}function La(){if(typeof window>"u")return{token:null,tenantId:null,orgName:null};const n=localStorage.getItem(Zt),t=localStorage.getItem($t);return{token:n,tenantId:t,orgName:Pn(t)}}const ye=qe(La());function bn(n,t){ye.token=n,ye.tenantId=t,ye.orgName=Pn(t),localStorage.setItem(Zt,n),t&&localStorage.setItem($t,t)}function Pa(n,t){const a=Ln();a[n]=t,localStorage.setItem(Fn,JSON.stringify(a)),ye.tenantId===n&&(ye.orgName=t)}function Ba(){ye.token=null,ye.tenantId=null,ye.orgName=null,localStorage.removeItem(Zt),localStorage.removeItem($t)}const Va="bre_studio_handoff";function Bn(n){localStorage.setItem(Va,JSON.stringify(n))}const Vn={playground:"","sdk-sandbox":"sdk-sandbox",docs:"docs",account:"account",studio:"studio"},Wa=Object.fromEntries(Object.entries(Vn).map(([n,t])=>[t,n]));function Ua(n){const t=n.replace(/^#\/?/,"").replace(/\/$/,"");return Wa[t]??"playground"}function xn(){return typeof window>"u"?"playground":Ua(window.location.hash)}function Ve(n){const t=Vn[n];return t?`#/${t}`:"#/"}var _t,gt;class za{constructor(){Pt(this,_t,$(qe(xn())));Pt(this,gt,$(0));typeof window<"u"&&window.addEventListener("hashchange",()=>{this.current=xn()})}get current(){return e(it(this,_t))}set current(t){h(it(this,_t),t,!0)}get studioHandoffTick(){return e(it(this,gt))}set studioHandoffTick(t){h(it(this,gt),t,!0)}navigate(t){typeof window>"u"||(window.location.hash=Ve(t),this.current=t)}bumpStudioHandoff(){this.studioHandoffTick++}}_t=new WeakMap,gt=new WeakMap;const ge=new za;var Ja=new Set(["$$slots","$$events","$$legacy","children","variant","fullWidth","disabled","type","href","onclick","class"]),Ka=E("<a><!></a>"),Xa=E("<button><!></button>");function Ce(n,t){let a=he(t,"variant",3,"secondary"),i=he(t,"fullWidth",3,!1),o=he(t,"disabled",3,!1),f=he(t,"type",3,"button"),p=he(t,"class",3,""),m=Mn(t,Ja);var d=je(),D=pe(d);{var x=v=>{var T=Ka();Nt(T,()=>({href:t.href,class:`btn btn-${a()??""} ${p()??""}`,"aria-disabled":o(),onclick:t.onclick,...m,[an]:{"full-width":i()}}),void 0,void 0,void 0,"svelte-18sv61c");var A=l(T);ct(A,()=>t.children??pt),r(v,T)},S=v=>{var T=Xa();Nt(T,()=>({type:f(),class:`btn btn-${a()??""} ${p()??""}`,disabled:o(),onclick:t.onclick,...m,[an]:{"full-width":i()}}),void 0,void 0,void 0,"svelte-18sv61c");var A=l(T);ct(A,()=>t.children??pt),r(v,T)};X(D,v=>{t.href?v(x):v(S,-1)})}r(n,d)}var wn=E("<!> <!>",1),Ha=E('<!> <div class="divider svelte-11w59y9"><span>or</span></div>',1),Ga=E('<label class="svelte-11w59y9">Organization name <!></label>'),Ya=E('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),Qa=E('<!> <!> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <!></label> <label class="svelte-11w59y9">Password <!></label> <!></form> <!>',1),Za=E('<div class="empty svelte-11w59y9">None yet.</div>'),$a=E('<li class="ruleset-row svelte-11w59y9"><div class="ruleset-info svelte-11w59y9"><span class="mono name svelte-11w59y9"> </span> <span class="meta svelte-11w59y9"> </span></div> <div class="ruleset-actions svelte-11w59y9"><!> <!></div></li>'),er=E('<ul class="svelte-11w59y9"></ul>'),tr=E(`<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span>Signed in <!></span> <!></div> <!> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <p class="note svelte-11w59y9">Saved to your bre-service account — separate from Studio's local "Save to Library," which stays in this browser only.</p> <!></div></div>`),nr=E('<div class="error mono svelte-11w59y9"> </div>'),ir=E('<div class="intro svelte-11w59y9"><h1 class="page-title">Your account</h1> <p class="svelte-11w59y9">Sign up or log in to save Playground rulesets to a real bre-service backend.</p></div> <!> <!>',1),ar=E('<p class="viewer-status svelte-11w59y9">Loading…</p>'),rr=E('<p class="viewer-status error-text svelte-11w59y9"> </p>'),or=E('<pre class="viewer-content mono svelte-11w59y9"> </pre>'),sr=E('<div class="viewer-backdrop svelte-11w59y9" role="presentation"><div class="viewer-panel svelte-11w59y9" role="dialog" tabindex="-1"><div class="viewer-header svelte-11w59y9"><span class="mono"> </span> <!></div> <!></div></div>');function lr(n,t){Le(t,!0);const a="https://api.datalila.com";let i=$("signup"),o=$(""),f=$(""),p=$(""),m=$(""),d=$(!1),D=$(null),x=$(qe([])),S=$(null),v=$(null),T=$(!1),A=$(null),j=$(!1);Ft(()=>{ye.token&&b(),W(),fetch(`${a}/health`).then(I=>I.ok?I.json():null).then(I=>{h(j,!!(I!=null&&I.google_signin_available))}).catch(()=>{})});function W(){const I=window.location.hash;if(!I||!I.includes("google_auth="))return;const u=new URLSearchParams(I.replace(/^#/,"")),C=u.get("google_auth");if(C==="success"){const V=u.get("token"),k=u.get("tenant_id");V&&(bn(V,k),b())}else C==="error"&&h(D,u.get("message")??"Google sign-in failed.",!0);history.replaceState(null,"",window.location.pathname+window.location.search)}function ee(){window.location.href=`${a}/api/v1/auth/oidc/signup/google`}async function ie(){h(D,null),h(d,!0);try{if(e(i)==="signup"){const I=await fetch(`${a}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(o),email:e(f),password:e(p)})});if(!I.ok)throw new Error(await I.text());const u=await I.json();h(m,u.api_key,!0),u.tenant_id&&e(o)&&Pa(u.tenant_id,e(o)),await y()}else await y()}catch(I){h(D,(I==null?void 0:I.message)??String(I),!0)}finally{h(d,!1)}}async function y(){const I=await fetch(`${a}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(f),password:e(p)})});if(!I.ok){const V=await I.text();throw new Error(V||`login failed (HTTP ${I.status}): check email/password`)}const u=await I.json(),C=u.token??u.access_token??u.jwt;if(!C)throw new Error("login succeeded but no token found in response: "+JSON.stringify(u));bn(C,u.tenant_id??ye.tenantId??null),await b()}function s(){Ba(),h(m,""),h(x,[],!0),ae()}async function b(){if(ye.token)try{const I=await fetch(`${a}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!I.ok)throw new Error(await I.text());const u=await I.json();h(x,Array.isArray(u)?u:[],!0)}catch(I){h(D,"Could not load saved rulesets: "+((I==null?void 0:I.message)??String(I)))}}async function H(){if(!ye.token)return;const I=Ue.current;if(!I){h(D,"No example is currently open in Playground to save.");return}h(D,null),h(d,!0);try{const u=await fetch(`${a}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${ye.token}`},body:JSON.stringify({name:I.id,format:"dmn-xml",content:I.dmnXml})});if(!u.ok)throw new Error(await u.text());const C=await u.json();if(C&&typeof C=="object"&&"Err"in C)throw new Error(C.Err);await b()}catch(u){h(D,(u==null?void 0:u.message)??String(u),!0)}finally{h(d,!1)}}async function ve(I){h(S,I,!0),h(v,null),h(A,null),h(T,!0);try{const u=await fetch(`${a}/api/v1/rulesets/blob/${I.latest_hash}`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!u.ok)throw new Error(await u.text());h(v,await u.text(),!0)}catch(u){h(A,(u==null?void 0:u.message)??String(u),!0)}finally{h(T,!1)}}function ae(){h(S,null),h(v,null),h(A,null)}async function be(I){if(ye.token){h(D,null);try{const u=await fetch(`${a}/api/v1/rulesets/blob/${I.latest_hash}`,{headers:{Authorization:`Bearer ${ye.token}`}});if(!u.ok)throw new Error(await u.text());const C=await u.text();Bn({dmnXml:C}),ge.bumpStudioHandoff(),ge.navigate("studio")}catch(u){h(D,`Could not open "${I.name}" in Studio: `+((u==null?void 0:u.message)??String(u)))}}}var we=wn(),me=pe(we);et(me,{class:"account-panel",padding:"20px",children:(I,u)=>{var C=ir(),V=c(pe(C),2);{var k=te=>{var ce=Qa(),fe=pe(ce);Ct(fe,{class:"tabs",children:(R,q)=>{var K=wn(),_e=pe(K);{let De=de(()=>e(i)==="signup");vt(_e,{fullWidth:!0,get active(){return e(De)},onclick:()=>h(i,"signup"),children:(G,U)=>{var le=xe("Sign up");r(G,le)},$$slots:{default:!0}})}var ke=c(_e,2);{let De=de(()=>e(i)==="login");vt(ke,{fullWidth:!0,get active(){return e(De)},onclick:()=>h(i,"login"),children:(G,U)=>{var le=xe("Log in");r(G,le)},$$slots:{default:!0}})}r(R,K)},$$slots:{default:!0}});var _=c(fe,2);{var g=R=>{var q=Ha(),K=pe(q);Ce(K,{variant:"secondary",fullWidth:!0,onclick:ee,children:(_e,ke)=>{var De=xe("Sign in with Google");r(_e,De)},$$slots:{default:!0}}),r(R,q)};X(_,R=>{e(j)&&R(g)})}var w=c(_,2),L=l(w);{var se=R=>{var q=Ga(),K=c(l(q));Xe(K,{type:"text",required:!0,get value(){return e(o)},set value(_e){h(o,_e,!0)}}),r(R,q)};X(L,R=>{e(i)==="signup"&&R(se)})}var ue=c(L,2),z=c(l(ue));Xe(z,{type:"email",required:!0,get value(){return e(f)},set value(R){h(f,R,!0)}});var B=c(ue,2),J=c(l(B));Xe(J,{type:"password",required:!0,minlength:8,get value(){return e(p)},set value(R){h(p,R,!0)}});var Y=c(B,2);Ce(Y,{type:"submit",variant:"primary",fullWidth:!0,get disabled(){return e(d)},children:(R,q)=>{var K=xe();M(()=>F(K,e(d)?"Working…":e(i)==="signup"?"Create account":"Log in")),r(R,K)},$$slots:{default:!0}});var N=c(w,2);{var P=R=>{var q=Ya(),K=c(l(q),2),_e=l(K);M(()=>F(_e,e(m))),r(R,q)};X(N,R=>{e(m)&&R(P)})}Ht("submit",w,R=>{R.preventDefault(),ie()}),r(te,ce)},O=te=>{var ce=tr(),fe=l(ce),_=l(fe),g=c(l(_));{var w=N=>{var P=xe();M(()=>F(P,`— ${ye.orgName??""}`)),r(N,P)},L=N=>{var P=xe();M(()=>F(P,`— tenant ${ye.tenantId??""}`)),r(N,P)};X(g,N=>{ye.orgName?N(w):ye.tenantId&&N(L,1)})}var se=c(_,2);Ce(se,{variant:"secondary",onclick:s,children:(N,P)=>{var R=xe("Log out");r(N,R)},$$slots:{default:!0}});var ue=c(fe,2);{let N=de(()=>e(d)||!Ue.current);Ce(ue,{variant:"primary",fullWidth:!0,onclick:H,get disabled(){return e(N)},children:(P,R)=>{var q=xe();M(()=>F(q,e(d)?"Saving…":Ue.current?`Save "${Ue.current.title}" to your account`:"Open an example in Playground to save it")),r(P,q)},$$slots:{default:!0}})}var z=c(ue,2),B=c(l(z),4);{var J=N=>{var P=Za();r(N,P)},Y=N=>{var P=er();Ne(P,21,()=>e(x),R=>R.id,(R,q)=>{var K=$a(),_e=l(K),ke=l(_e),De=l(ke),G=c(ke,2),U=l(G),le=c(_e,2),Ie=l(le);Ce(Ie,{variant:"ghost",onclick:()=>ve(e(q)),children:(Be,ze)=>{var yt=xe("View");r(Be,yt)},$$slots:{default:!0}});var Te=c(Ie,2);{var Me=Be=>{Ce(Be,{variant:"ghost",onclick:()=>be(e(q)),children:(ze,yt)=>{var Lt=xe("Open in Studio →");r(ze,Lt)},$$slots:{default:!0}})};X(Te,Be=>{e(q).format==="dmn-xml"&&Be(Me)})}M(()=>{F(De,e(q).name),F(U,`v${e(q).version??""} · ${e(q).format??""}`)}),r(R,K)}),r(N,P)};X(B,N=>{e(x).length===0?N(J):N(Y,-1)})}r(te,ce)};X(V,te=>{ye.token?te(O,-1):te(k)})}var Z=c(V,2);{var Q=te=>{var ce=nr(),fe=l(ce);M(()=>F(fe,e(D))),r(te,ce)};X(Z,te=>{e(D)&&te(Q)})}r(I,C)},$$slots:{default:!0}});var re=c(me,2);{var Re=I=>{var u=sr(),C=l(u),V=l(C),k=l(V),O=l(k),Z=c(k,2);Ce(Z,{variant:"secondary",onclick:ae,children:(_,g)=>{var w=xe("Close");r(_,w)},$$slots:{default:!0}});var Q=c(V,2);{var te=_=>{var g=ar();r(_,g)},ce=_=>{var g=rr(),w=l(g);M(()=>F(w,e(A))),r(_,g)},fe=_=>{var g=or(),w=l(g);M(()=>F(w,e(v))),r(_,g)};X(Q,_=>{e(T)?_(te):e(A)?_(ce,1):_(fe,-1)})}M(()=>{ne(C,"aria-label",`Viewing ${e(S).name}`),F(O,e(S).name)}),oe("click",u,ae),oe("keydown",u,_=>{_.key==="Escape"&&ae()}),oe("click",C,_=>_.stopPropagation()),r(I,u)};X(re,I=>{e(S)&&I(Re)})}r(n,we),Pe()}He(["click","keydown"]);function ur(n,t){let a,i;try{const p=qt(n,Se.__wbindgen_malloc,Se.__wbindgen_realloc),m=tt,d=qt(t,Se.__wbindgen_malloc,Se.__wbindgen_realloc),D=tt,x=Se.compile_ruleset(p,m,d,D);var o=x[0],f=x[1];if(x[3])throw o=0,f=0,Wn(x[2]);return a=o,i=f,jt(o,f)}finally{Se.__wbindgen_free(a,i,1)}}function dr(n,t){let a,i;try{const p=qt(n,Se.__wbindgen_malloc,Se.__wbindgen_realloc),m=tt,d=qt(t,Se.__wbindgen_malloc,Se.__wbindgen_realloc),D=tt,x=Se.evaluate_ruleset_with_trace(p,m,d,D);var o=x[0],f=x[1];if(x[3])throw o=0,f=0,Wn(x[2]);return a=o,i=f,jt(o,f)}finally{Se.__wbindgen_free(a,i,1)}}function cr(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,a){throw new Error(jt(t,a))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,a){return jt(t,a)},__wbindgen_init_externref_table:function(){const t=Se.__wbindgen_externrefs,a=t.grow(4);t.set(0,void 0),t.set(a+0,void 0),t.set(a+1,null),t.set(a+2,!0),t.set(a+3,!1)}}}}function jt(n,t){return mr(n>>>0,t)}let ot=null;function St(){return(ot===null||ot.byteLength===0)&&(ot=new Uint8Array(Se.memory.buffer)),ot}function qt(n,t,a){if(a===void 0){const m=dt.encode(n),d=t(m.length,1)>>>0;return St().subarray(d,d+m.length).set(m),tt=m.length,d}let i=n.length,o=t(i,1)>>>0;const f=St();let p=0;for(;p<i;p++){const m=n.charCodeAt(p);if(m>127)break;f[o+p]=m}if(p!==i){p!==0&&(n=n.slice(p)),o=a(o,i,i=p+n.length*3,1)>>>0;const m=St().subarray(o+p,o+i),d=dt.encodeInto(n,m);p+=d.written,o=a(o,i,p,1)>>>0}return tt=p,o}function Wn(n){const t=Se.__wbindgen_externrefs.get(n);return Se.__externref_table_dealloc(n),t}let kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});kt.decode();const pr=2146435072;let Ut=0;function mr(n,t){return Ut+=t,Ut>=pr&&(kt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),kt.decode(),Ut=t),kt.decode(St().subarray(n,n+t))}const dt=new TextEncoder;"encodeInto"in dt||(dt.encodeInto=function(n,t){const a=dt.encode(n);return t.set(a),{read:n.length,written:a.length}});let tt=0,Se;function fr(n,t){return Se=n.exports,ot=null,Se.__wbindgen_start(),Se}async function vr(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&a(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const i=await n.arrayBuffer();return await WebAssembly.instantiate(i,t)}else{const i=await WebAssembly.instantiate(n,t);return i instanceof WebAssembly.Instance?{instance:i,module:n}:i}function a(i){switch(i){case"basic":case"cors":case"default":return!0}return!1}}async function _r(n){if(Se!==void 0)return Se;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=cr();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:a,module:i}=await vr(await n,t);return fr(a)}let zt=null;function gr(){return zt||(zt=_r()),zt}const yr=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:ur,ensureReady:gr,evaluate_ruleset_with_trace:dr},Symbol.toStringTag,{value:"Module"})),hr=Nn(yr),br={},xr=Object.freeze(Object.defineProperty({__proto__:null,default:br},Symbol.toStringTag,{value:"Module"})),En=Nn(xr);var Jt,Dn;function wr(){if(Dn)return Jt;Dn=1;let n,t;try{n=En,t=En}catch{n=null,t=null}function a(f){const p=()=>t.join(t.dirname(f),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(f)?n.readFileSync(f,"utf8"):null},writeRawMetaFile(m){const d=t.dirname(f);n.existsSync(d)||n.mkdirSync(d,{recursive:!0}),n.writeFileSync(f,m,"utf8")},hasBlob(m){return n.existsSync(t.join(p(),`${m}.bin`))},readBlob(m){return n.readFileSync(t.join(p(),`${m}.bin`)).toString("utf8")},writeBlob(m,d){const D=p();n.existsSync(D)||n.mkdirSync(D,{recursive:!0}),n.writeFileSync(t.join(D,`${m}.bin`),d,"utf8")}}}function i(f){const p="bre-js-cache",d=`${f}::meta`,D=y=>`${f}::blob::${y}`;let x=null;const S=new Map;function v(){return new Promise((y,s)=>{const b=indexedDB.open(p,1);b.onupgradeneeded=()=>{b.result.objectStoreNames.contains("kv")||b.result.createObjectStore("kv")},b.onsuccess=()=>y(b.result),b.onerror=()=>s(b.error)})}function T(y,s){return new Promise((b,H)=>{const ae=y.transaction("kv","readonly").objectStore("kv").get(s);ae.onsuccess=()=>b(ae.result),ae.onerror=()=>H(ae.error)})}function A(y,s){return new Promise((b,H)=>{const ae=y.transaction("kv","readonly").objectStore("kv"),be=IDBKeyRange.bound(s,s+"￿"),we=new Map,me=ae.openCursor(be);me.onsuccess=()=>{const re=me.result;if(!re){b(we);return}we.set(re.key.slice(s.length),re.value),re.continue()},me.onerror=()=>H(me.error)})}function j(y,s,b){return new Promise((H,ve)=>{const ae=y.transaction("kv","readwrite");ae.objectStore("kv").put(b,s),ae.oncomplete=()=>H(),ae.onerror=()=>ve(ae.error)})}let W=null;function ee(){return W||(W=v()),W}return{ready:(async()=>{const y=await ee(),s=await T(y,d);s!==void 0&&(x=s);const b=`${f}::blob::`,H=await A(y,b);for(const[ve,ae]of H)S.set(ve,ae)})(),isSync:!1,readRawMetaFile(){return x},writeRawMetaFile(y){x=y,ee().then(s=>j(s,d,y)).catch(s=>{console.error("bre-js: failed to persist cache to IndexedDB:",s)})},hasBlob(y){return S.has(y)},readBlob(y){return S.get(y)},writeBlob(y,s){S.set(y,s),ee().then(b=>j(b,D(y),s)).catch(b=>{console.error("bre-js: failed to persist blob to IndexedDB:",b)})}}}function o(f){return typeof window<"u"&&typeof window.indexedDB<"u"?i(f):a(f)}return Jt={createCacheStore:o},Jt}var Kt,Rn;function Er(){if(Rn)return Kt;Rn=1;const n=hr,{parse:t,stringify:a}=Jn(),i=Kn(),{createCacheStore:o}=wr(),f={test:S=>i.isDecimal(S),stringify:S=>S.toString()};function p(S){if(/^-?\d+$/.test(S)){const v=Number(S);if(Number.isSafeInteger(v))return v}return new i(S)}function m(S){return t(S,void 0,{parseNumber:p})}function d(S,v){return a(S,void 0,v,[f])}class D{constructor({endpoint:v,apiKey:T,tenantId:A,cacheDbPath:j,syncIntervalMs:W=5e3,auditFlushIntervalMs:ee=5e3}){if(this.endpoint=v.replace(/\/$/,""),this.apiKey=T,this.tenantId=A||"default",this.cacheDbPath=j||"./bre_js_cache.json",this.syncIntervalMs=W,this.auditFlushIntervalMs=ee,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=o(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const ie=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,ie]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const v=this.store.readRawMetaFile();if(v){const T=m(v);this.rulesetsMeta=T.rulesetsMeta||{},this.auditQueue=T.auditQueue||[];for(const[A,j]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(j.hash)){const W=this.store.readBlob(j.hash);let ee;j.format==="dmn-xml"?ee=W:ee=JSON.parse(W);try{const ie=n.compile_ruleset(j.format,JSON.stringify(ee));this.rulesetCache[A]=JSON.parse(ie)}catch(ie){console.error(`Failed to compile cached ruleset ${A}:`,ie)}}}}catch(v){console.error("Failed to load local cache:",v)}}saveLocalCache(){try{const v={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(d(v,2))}catch(v){console.error("Failed to save local cache:",v)}}async syncOnce(){const v={"X-API-Key":this.apiKey},T=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:v});if(!T.ok)throw new Error(`Server returned error: ${T.status}`);const A=await T.json();for(const j of A){const W=this.rulesetsMeta[j.name];if(!W||W.hash!==j.latest_hash){const ee=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${j.latest_hash}`,{headers:v});if(!ee.ok)continue;const ie=ee.headers.get("X-Ruleset-Format")||j.format,y=new TextDecoder("utf-8").decode(await ee.arrayBuffer());this.store.writeBlob(j.latest_hash,y),this.rulesetsMeta[j.name]={id:j.id,name:j.name,version:j.version,format:ie,hash:j.latest_hash};let s;ie==="dmn-xml"?s=y:s=JSON.parse(y);try{const b=n.compile_ruleset(ie,JSON.stringify(s));this.rulesetCache[j.name]=JSON.parse(b)}catch(b){console.error(`Compile error for ${j.name}:`,b)}}}this.saveLocalCache()}evaluate(v,T){const A=this.rulesetCache[v],j=this.rulesetsMeta[v];if(!A||!j)throw new Error(`Ruleset not found in cache: ${v}`);try{const W=JSON.stringify(A),ee=d(T),ie=n.evaluate_ruleset_with_trace(W,ee),y=m(ie),s=y.result,b=y.trace;return this.queueAuditLog(v,T,s,!0,null,b),s}catch(W){const ee=W.message||String(W);throw this.queueAuditLog(v,T,null,!1,ee,{matched_rules:[],duration_us:0}),W}}queueAuditLog(v,T,A,j,W,ee){const ie=this.rulesetsMeta[v];ie&&(this.auditQueue.push({ruleset_id:ie.id,version:ie.version,definition_hash:ie.hash,inputs:T,outputs:A,success:j,error_message:W,trace_json:ee}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const v=[...this.auditQueue],T={"X-API-Key":this.apiKey,"Content-Type":"application/json"},A=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:T,body:d({logs:v})});if(A.ok)this.auditQueue=this.auditQueue.slice(v.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${A.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(v=>console.error("JS Client sync failed:",v))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(v=>console.error("JS Client audit flush failed:",v))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class x{constructor({policy:v={},defaultRoute:T="local",local:A,remote:j}={}){this.policy=v,this.defaultRoute=T,A instanceof D?this.localClient=A:A?this.localClient=new D(A):this.localClient=null,j?(this.remoteEndpoint=j.endpoint.replace(/\/$/,""),this.remoteApiKey=j.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(v){return this.policy[v]||this.defaultRoute}async evaluate(v,T){const A=this.routeFor(v);if(A==="server"||A==="remote")return this.evaluateRemote(v,T);if(A==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(v,T)}throw new Error(`SmartBreClient: unknown route '${A}' for ruleset '${v}' (expected 'local' or 'server')`)}async evaluateRemote(v,T){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${v}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const A={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},j=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:A,body:d({ruleSet:v,facts:T})});if(!j.ok)throw new Error(`Remote evaluate failed for '${v}': ${j.status} ${await j.text()}`);const W=m(await j.text());if(!W.success)throw new Error(`Remote evaluate failed for '${v}': ${W.error_message}`);return W.output_payload}close(){this.localClient&&this.localClient.close()}}return Kt={BreClient:D,SmartBreClient:x,Decimal:i},Kt}var Sn=Er(),Dr=E('<div class="cm-host svelte-1g4qxuv"></div>');function Rr(n,t){Le(t,!0);let a=he(t,"value",15,""),i=he(t,"readOnly",3,!1),o,f=null;const p=Bt.theme({"&":{color:"var(--ink)",backgroundColor:"var(--bg)",fontSize:"12.5px",height:"100%"},".cm-content":{fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',padding:"10px 0",caretColor:"var(--accent)"},".cm-gutters":{backgroundColor:"var(--bg)",color:"var(--muted)",border:"none"},".cm-activeLine":{backgroundColor:"var(--accent-wash)"},".cm-activeLineGutter":{backgroundColor:"var(--accent-wash)"},"&.cm-focused":{outline:"none"},".cm-scroller":{overflow:"auto",fontFamily:"inherit"},".cm-matchingBracket":{backgroundColor:"var(--accent-wash)",outline:"1px solid var(--accent)"}});Ft(()=>{f=new Bt({parent:o,state:rn.create({doc:a(),extensions:[Xn(),Hn(),Gn(),Yn(),Qn(),Zn(),$n(si,{fallback:!0}),ei({typescript:!0}),ti.of([{key:"Mod-Enter",run:()=>{var d;return(d=t.onRun)==null||d.call(t),!0}},ni,...ii,...ai]),p,rn.readOnly.of(i()),Bt.updateListener.of(d=>{d.docChanged&&a(d.state.doc.toString())})]})})}),ri(()=>f==null?void 0:f.destroy()),Qe(()=>{f&&a()!==f.state.doc.toString()&&f.dispatch({changes:{from:0,to:f.state.doc.length,insert:a()}})});var m=Dr();oi(m,d=>o=d,()=>o),r(n,m),Pe()}var Sr=E('<div class="panel-head svelte-1yde3g3"><h3 class="eyebrow svelte-1yde3g3">Code <span class="badge svelte-1yde3g3">editable</span></h3> <div class="actions svelte-1yde3g3"><button type="button" class="reset svelte-1yde3g3">Reset to example</button> <button type="button" class="run svelte-1yde3g3">Run <span class="hint svelte-1yde3g3">⌘/Ctrl+Enter</span></button></div></div> <div class="editor-host svelte-1yde3g3"><!></div>',1),kr=E('<div class="error svelte-1yde3g3"> </div>'),Ir=E('<div class="result"><div class="result-label svelte-1yde3g3">your code returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),Mr=E('<h3 class="eyebrow svelte-1yde3g3">Facts</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <!></label> <label class="svelte-1yde3g3">Credit score <!></label> <div class="status svelte-1yde3g3"> </div> <!> <!>',1),Nr=E(`<div class="sandbox svelte-1yde3g3"><h1 class="page-title">Try the JS / TS SDK</h1> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip. The code below is a real, editable
    CodeMirror editor — edit it and hit Run to see real output (or a real error) from your own edit.</p> <div class="grid svelte-1yde3g3"><!> <!></div> <p class="cross-link svelte-1yde3g3">This is JS/TS only — see <strong class="svelte-1yde3g3">SDK Docs</strong> (above) for real, actually-run examples in the other 7 languages.</p></div>`);function Tr(n,t){Le(t,!0);let a=$("Registering local sandbox..."),i=$(!1),o=$(.28),f=$(780),p=$(null),m=$(null),d=null;const D=`// \`client\` is a real, already-connected datalila-bre BreClient --
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
return result;`;let x=$(D),S=de(()=>({dti:e(o),credit_score:e(f)}));async function v(){if(!("serviceWorker"in navigator)){h(m,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){h(a,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function T(){if(d){h(m,null);try{const s=Object.getPrototypeOf(async function(){}).constructor,b=new s("client","facts",e(x));h(p,await b(d,e(S)),!0),h(a,"Done -- zero network calls left the browser.")}catch(s){h(p,null),h(m,(s==null?void 0:s.message)??String(s),!0),h(a,"Failed.")}}}function A(){h(x,D),T()}async function j(){h(m,null);try{h(a,"Running real datalila-bre code against the local sandbox..."),d=new Sn.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await d.ready,await d.syncOnce(),h(i,!0),await T()}catch(s){h(m,(s==null?void 0:s.message)??String(s),!0),h(a,"Failed.")}}Ft(async()=>{var s;await v(),(s=navigator.serviceWorker)!=null&&s.controller&&await j()});var W=Nr(),ee=c(l(W),4),ie=l(ee);et(ie,{padding:"18px",class:"code-panel",children:(s,b)=>{var H=Sr(),ve=pe(H),ae=c(l(ve),2),be=l(ae),we=c(be,2),me=c(ve,2),re=l(me);Rr(re,{onRun:T,get value(){return e(x)},set value(Re){h(x,Re,!0)}}),M(()=>we.disabled=!e(i)),oe("click",be,A),oe("click",we,T),r(s,H)},$$slots:{default:!0}});var y=c(ie,2);et(y,{padding:"18px",children:(s,b)=>{var H=Mr(),ve=c(pe(H),2),ae=c(l(ve));Xe(ae,{type:"number",step:"0.01",min:"0",max:"0.6",oninput:T,get value(){return e(o)},set value(V){h(o,V,!0)}});var be=c(ve,2),we=c(l(be));Xe(we,{type:"number",step:"5",min:"500",max:"850",oninput:T,get value(){return e(f)},set value(V){h(f,V,!0)}});var me=c(be,2),re=l(me),Re=c(me,2);{var I=V=>{var k=kr(),O=l(k);M(()=>F(O,e(m))),r(V,k)};X(Re,V=>{e(m)&&V(I)})}var u=c(Re,2);{var C=V=>{var k=Ir(),O=c(l(k),2),Z=l(O);M(Q=>F(Z,Q),[()=>JSON.stringify(e(p),(Q,te)=>{var ce,fe;return(fe=(ce=Sn.Decimal).isDecimal)!=null&&fe.call(ce,te)?te.toString():te},2)]),r(V,k)};X(u,V=>{e(p)&&V(C)})}M(()=>F(re,e(a))),r(s,H)},$$slots:{default:!0}}),r(n,W),Pe()}He(["click"]);const xt=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
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
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, including two more advanced variants on the roadmap: a policy-driven "smart client" routing mode, and a true single-graph mixed-placement mode (via a remote-decision bridge).'}],Or={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},Ar={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function Xt(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const wt=" ";function Cr(n,t){const a=Ar[t]??"//",i=n.indexOf(a),o=i>=0?n.slice(0,i):n,f=i>=0?n.slice(i):"",p=[],m=o.replace(/"[^"]*"|'[^']*'/g,S=>(p.push(S),wt+"STR"+(p.length-1)+wt));let d=Xt(m);d=d.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const D=Or[t]??[];if(D.length){const S=new RegExp(`\\b(${D.join("|")})\\b`,"g");d=d.replace(S,'<span class="tok-kw">$1</span>')}const x=new RegExp(wt+"STR(\\d+)"+wt,"g");return d=d.replace(x,(S,v)=>`<span class="tok-str">${Xt(p[Number(v)])}</span>`),f&&(d+=`<span class="tok-comment">${Xt(f)}</span>`),d}function jr(n,t){return n.split(`
`).map(a=>Cr(a,t)).join(`
`)}var qr=E('<p class="note svelte-65i1x3"> </p>'),Fr=E('<div class="panel-body svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></div>'),Lr=E(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="page-title">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">packages/dmn-examples/src/dmn/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav aria-label="SDK language"><!></nav> <!></div>`);function Pr(n,t){Le(t,!0);let a=$(qe(xt[0].id)),i=de(()=>xt.find(d=>d.id===e(a))??xt[0]);var o=Lr(),f=c(l(o),2),p=l(f);Ct(p,{bordered:!0,children:(d,D)=>{var x=je(),S=pe(x);Ne(S,17,()=>xt,v=>v.id,(v,T)=>{{let A=de(()=>e(T).id===e(a));vt(v,{get active(){return e(A)},onclick:()=>h(a,e(T).id,!0),children:(j,W)=>{var ee=xe();M(()=>F(ee,e(T).label)),r(j,ee)},$$slots:{default:!0}})}}),r(d,x)},$$slots:{default:!0}});var m=c(f,2);et(m,{padding:"20px 22px",children:(d,D)=>{var x=Fr(),S=l(x),v=l(S),T=l(v),A=c(v,2),j=l(A),W=c(S,2);{var ee=re=>{var Re=qr(),I=l(Re);M(()=>F(I,e(i).note)),r(re,Re)};X(W,re=>{e(i).note&&re(ee)})}var ie=c(W,2),y=l(ie),s=c(ie,2),b=l(s);li(b,()=>jr(e(i).code,e(i).language),!0);var H=c(s,4),ve=l(H),ae=l(ve),be=c(H,4),we=l(be),me=l(we);M(re=>{F(T,e(i).label),F(j,e(i).packageName),F(y,`Example (${e(i).sourcePath??""})`),F(ae,re),F(me,e(i).output)},[()=>e(i).runSteps.join(`
`)]),r(d,x)},$$slots:{default:!0}}),r(n,o),Pe()}var kn=E('<div class="view-wrap svelte-1n46o8q"><!></div>'),Br=E("<!> <!>",1),Vr=E('<p class="studio-loading svelte-1n46o8q">Loading Studio…</p>'),Wr=E("<div><!></div>"),Ur=E('<span class="build-info-detail svelte-1n46o8q">commit <code class="svelte-1n46o8q"></code> </span>'),zr=E('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><!> <!> <!> <!></nav></header> <main><!></main> <!> <footer>Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!> <span class="build-info">· <button type="button" class="build-info-toggle svelte-1n46o8q">Build info</button> <!></span></footer>',1);function Jr(n,t){Le(t,!0);let a=$(!1);Qe(()=>{});const i={playground:"Playground","sdk-sandbox":"Try the JS / TS SDK",docs:"SDK examples",account:"Your account",studio:"Studio"};Qe(()=>{document.title=`Datalila BRE — ${i[ge.current]}`});let o=$(!1),f=$(null);Qe(()=>{ge.current==="studio"&&!e(o)&&(h(o,!0),fi(()=>import("./index-DrOqShpV.js"),__vite__mapDeps([0,1,2])).then(u=>{h(f,u.StudioEditor,!0)}))});function p(){ge.current==="playground"&&Ue.current&&(Bn({dmnXml:Ue.current.dmnXml,facts:Ue.facts}),ge.bumpStudioHandoff())}var m=zr(),d=pe(m),D=c(l(d),2),x=l(D);{let u=de(()=>ge.current==="studio"?Ve("playground"):Ve("studio")),C=de(()=>ge.current==="studio"?"page":void 0);Ce(x,{variant:"secondary",class:"nav-button",get href(){return e(u)},get"aria-current"(){return e(C)},onclick:p,children:(V,k)=>{var O=xe();M(()=>F(O,ge.current==="studio"?"Back to Playground":"Open Studio")),r(V,O)},$$slots:{default:!0}})}var S=c(x,2);{let u=de(()=>ge.current==="sdk-sandbox"?Ve("playground"):Ve("sdk-sandbox")),C=de(()=>ge.current==="sdk-sandbox"?"page":void 0);Ce(S,{variant:"secondary",class:"nav-button",get href(){return e(u)},get"aria-current"(){return e(C)},children:(V,k)=>{var O=xe();M(()=>F(O,ge.current==="sdk-sandbox"?"Hide SDK Sandbox":"Try the JS/TS SDK")),r(V,O)},$$slots:{default:!0}})}var v=c(S,2);{let u=de(()=>ge.current==="docs"?Ve("playground"):Ve("docs")),C=de(()=>ge.current==="docs"?"page":void 0);Ce(v,{variant:"secondary",class:"nav-button",get href(){return e(u)},get"aria-current"(){return e(C)},children:(V,k)=>{var O=xe();M(()=>F(O,ge.current==="docs"?"Back to Playground":"SDK Docs")),r(V,O)},$$slots:{default:!0}})}var T=c(v,2);{var A=u=>{{let C=de(()=>ge.current==="account"?Ve("playground"):Ve("account")),V=de(()=>ge.current==="account"?"page":void 0);Ce(u,{variant:"secondary",class:"nav-button",get href(){return e(C)},get"aria-current"(){return e(V)},children:(k,O)=>{var Z=je(),Q=pe(Z);{var te=_=>{var g=xe("Hide Account");r(_,g)},ce=_=>{var g=xe();M(()=>F(g,`Signed in${ye.orgName?` — ${ye.orgName}`:""}`)),r(_,g)},fe=_=>{var g=xe("Sign in to save rulesets");r(_,g)};X(Q,_=>{ge.current==="account"?_(te):ye.token?_(ce,1):_(fe,-1)})}r(k,Z)},$$slots:{default:!0}})}};X(T,u=>{u(A)})}var j=c(d,2);let W;var ee=l(j);{var ie=u=>{Pr(u,{})},y=u=>{var C=kn(),V=l(C);Tr(V,{}),r(u,C)},s=u=>{var C=Br(),V=pe(C);{var k=Z=>{var Q=kn(),te=l(Q);lr(te,{}),r(Z,Q)};X(V,Z=>{ge.current==="account"&&Z(k)})}var O=c(V,2);Fa(O,{}),r(u,C)};X(ee,u=>{ge.current==="docs"?u(ie):ge.current==="sdk-sandbox"?u(y,1):u(s,-1)})}var b=c(j,2);{var H=u=>{var C=Wr();let V;var k=l(C);{var O=Q=>{var te=je(),ce=pe(te);ui(ce,()=>ge.studioHandoffTick,fe=>{var _=je(),g=pe(_);di(g,()=>e(f),(w,L)=>{L(w,{})}),r(fe,_)}),r(Q,te)},Z=Q=>{var te=Vr();r(Q,te)};X(k,Q=>{e(f)?Q(O):Q(Z,-1)})}M(()=>V=Fe(C,1,"studio-wrap svelte-1n46o8q",null,V,{hidden:ge.current!=="studio"})),r(u,C)};X(b,u=>{e(o)&&u(H)})}var ve=c(b,2);let ae;var be=c(l(ve));{var we=u=>{var C=xe("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");r(u,C)};X(be,u=>{u(we)})}var me=c(be,2),re=c(l(me)),Re=c(re,2);{var I=u=>{var C=Ur(),V=c(l(C));ne(V,"title","66951f0b395579f509df7531e5bc2ab29a994d58"),V.textContent="66951f0";var k=c(V);k.nodeValue=`,
        built 2026-07-24T06:03:06.726Z`,r(u,C)};X(Re,u=>{e(a)&&u(I)})}M(()=>{W=Fe(j,1,"svelte-1n46o8q",null,W,{hidden:ge.current==="studio"}),ae=Fe(ve,1,"fine svelte-1n46o8q",null,ae,{hidden:ge.current==="studio"})}),oe("click",re,()=>h(a,!e(a))),r(n,m),Pe()}He(["click"]);ci(Jr,{target:document.getElementById("app")});export{vn as D,bt as E,eo as L,Qt as a,fn as b,Zr as c,Gr as d,ln as e,ji as i,$r as l,Ai as p,Qr as s,Yr as u};

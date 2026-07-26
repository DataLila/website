const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-DLcSBego.js","assets/vendor-D2YuypgY.css","assets/index-C75nSUYr.js","assets/index-CaUT83wN.css"])))=>i.map(i=>d[i]);
var cn=n=>{throw TypeError(n)};var na=(n,t,i)=>t.has(n)||cn("Cannot "+i);var st=(n,t,i)=>(na(n,t,"read from private field"),i?i.call(n):t.get(n)),Ut=(n,t,i)=>t.has(n)?cn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,i);import{a as aa,d as pn,b as Ge,p as Fe,c as we,e as u,f as s,i as K,g as Te,h as Ae,j as e,t as M,k as Ve,l as r,m as Le,u as me,n as L,o as Ct,q as Pt,r as de,v as ce,w as b,x as je,y as qe,z as be,A as ie,B as $,C as We,D as et,E as g,F as en,G as it,H as ft,I as gt,J as Pn,K as jt,L as qt,M as jn,N as Et,O as mn,P as qn,Q as ia,R as ra,S as Kt,T as vn,U as oa,V as sa,W as la,X as ua,Y as da,Z as ca,_ as pa,$ as ma,a0 as va,a1 as fa,a2 as ga,a3 as _a,a4 as ya,a5 as Fn,a6 as ha,a7 as Ln,a8 as ba,a9 as xa,aa as wa,ab as Ea,ac as Da,ad as Sa}from"./vendor-DLcSBego.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const v of c.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();const Ra="modulepreload",ka=function(n){return"/bre/"+n},fn={},tn=function(t,i,a){let o=Promise.resolve();if(i&&i.length>0){let v=function(E){return Promise.all(E.map(D=>Promise.resolve(D).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),m=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));o=v(i.map(E=>{if(E=ka(E),E in fn)return;fn[E]=!0;const D=E.endsWith(".css"),h=D?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${h}`))return;const d=document.createElement("link");if(d.rel=D?"stylesheet":Ra,D||(d.as="script"),d.crossOrigin="",d.href=E,m&&d.setAttribute("nonce",m),document.head.appendChild(d),D)return new Promise((N,C)=>{d.addEventListener("load",N),d.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${E}`)))})}))}function c(v){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=v,window.dispatchEvent(p),!p.defaultPrevented)throw v}return o.then(v=>{for(const p of v||[])p.status==="rejected"&&c(p.reason);return t().catch(c)})};function Ia(n,t){let i,a;try{const D=Ie.__wbindgen_add_to_stack_pointer(-16),h=Lt(n,Ie.__wbindgen_export,Ie.__wbindgen_export2),d=nt,N=Lt(t,Ie.__wbindgen_export,Ie.__wbindgen_export2),C=nt;Ie.compile_ruleset(D,h,d,N,C);var o=Je().getInt32(D+0,!0),c=Je().getInt32(D+4,!0),v=Je().getInt32(D+8,!0),p=Je().getInt32(D+12,!0),m=o,E=c;if(p)throw m=0,E=0,an(v);return i=m,a=E,Ft(m,E)}finally{Ie.__wbindgen_add_to_stack_pointer(16),Ie.__wbindgen_export3(i,a,1)}}function gn(n,t){let i,a;try{const D=Ie.__wbindgen_add_to_stack_pointer(-16),h=Lt(n,Ie.__wbindgen_export,Ie.__wbindgen_export2),d=nt,N=Lt(t,Ie.__wbindgen_export,Ie.__wbindgen_export2),C=nt;Ie.evaluate_ruleset_with_trace(D,h,d,N,C);var o=Je().getInt32(D+0,!0),c=Je().getInt32(D+4,!0),v=Je().getInt32(D+8,!0),p=Je().getInt32(D+12,!0),m=o,E=c;if(p)throw m=0,E=0,an(v);return i=m,a=E,Ft(m,E)}finally{Ie.__wbindgen_add_to_stack_pointer(16),Ie.__wbindgen_export3(i,a,1)}}function Ma(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Ft(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return Nt(t).getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return Nt(t).getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return St(new Date)},__wbg_new_47ab770c8bd3b6bb:function(t){const i=new Date(Nt(t));return St(i)},__wbindgen_cast_0000000000000001:function(t){return St(t)},__wbindgen_cast_0000000000000002:function(t,i){const a=Ft(t,i);return St(a)},__wbindgen_object_drop_ref:function(t){an(t)}}}}function St(n){ct===Ue.length&&Ue.push(Ue.length+1);const t=ct;return ct=Ue[t],Ue[t]=n,t}function Na(n){n<1028||(Ue[n]=ct,ct=n)}let Ze=null;function Je(){return(Ze===null||Ze.buffer.detached===!0||Ze.buffer.detached===void 0&&Ze.buffer!==Ie.memory.buffer)&&(Ze=new DataView(Ie.memory.buffer)),Ze}function Ft(n,t){return Aa(n>>>0,t)}let lt=null;function Mt(){return(lt===null||lt.byteLength===0)&&(lt=new Uint8Array(Ie.memory.buffer)),lt}function Nt(n){return Ue[n]}let Ue=new Array(1024).fill(void 0);Ue.push(void 0,null,!0,!1);let ct=Ue.length;function Lt(n,t,i){if(i===void 0){const p=pt.encode(n),m=t(p.length,1)>>>0;return Mt().subarray(m,m+p.length).set(p),nt=p.length,m}let a=n.length,o=t(a,1)>>>0;const c=Mt();let v=0;for(;v<a;v++){const p=n.charCodeAt(v);if(p>127)break;c[o+v]=p}if(v!==a){v!==0&&(n=n.slice(v)),o=i(o,a,a=v+n.length*3,1)>>>0;const p=Mt().subarray(o+v,o+a),m=pt.encodeInto(n,p);v+=m.written,o=i(o,a,v,1)>>>0}return nt=v,o}function an(n){const t=Nt(n);return Na(n),t}let Tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Tt.decode();const Ta=2146435072;let zt=0;function Aa(n,t){return zt+=t,zt>=Ta&&(Tt=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Tt.decode(),zt=t),Tt.decode(Mt().subarray(n,n+t))}const pt=new TextEncoder;"encodeInto"in pt||(pt.encodeInto=function(n,t){const i=pt.encode(n);return t.set(i),{read:n.length,written:i.length}});let nt=0,Ie;function Oa(n,t){return Ie=n.exports,Ze=null,lt=null,Ie}async function Ca(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function Pa(n){if(Ie!==void 0)return Ie;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-CaVvRRgX.wasm",import.meta.url));const t=Ma();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await Ca(await n,t);return Oa(i)}const ja=`<?xml version="1.0" encoding="UTF-8"?>
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
`,qa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Fa=`<?xml version="1.0" encoding="UTF-8"?>
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
`,La=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ba=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Wa=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
`,Va=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ua=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Ka=`<?xml version="1.0" encoding="UTF-8"?>
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
`,za=`<?xml version="1.0" encoding="UTF-8"?>
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
`,Rt=[{kind:"table",id:"mortgage_eligibility",title:"Mortgage eligibility",description:"Mortgage eligibility & rate assignment. Pick a scenario or drag the sliders — every change re-runs the real compiled decision table.",dmnXml:ja,input1:{name:"dti",label:"Debt-to-income ratio",min:0,max:.6,step:.01,format:n=>n.toFixed(2)},input2:{name:"credit_score",label:"Credit score",min:500,max:850,step:5,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"%",presets:[{label:"Prime applicant",input1:.28,input2:780},{label:"Standard approval",input1:.4,input2:700},{label:"Declined",input1:.5,input2:620}],defaultInput1:.3,defaultInput2:760},{kind:"table",id:"insurance_underwriting",title:"Insurance underwriting",description:"Auto insurance underwriting: eligibility & base premium by driver age and at-fault claims in the last 5 years.",dmnXml:qa,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Insurable",bad:"Declined"},amountUnit:"/mo",presets:[{label:"Clean record, 30s",input1:34,input2:0},{label:"Young driver, minor claim",input1:21,input2:1},{label:"High-risk history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0},{kind:"table",id:"volume_discount",title:"Volume discount pricing",description:"B2B order pricing: discount tier by order quantity and years as a loyalty customer — FIRST hit policy, most-specific rule wins.",dmnXml:Fa,input1:{name:"order_quantity",label:"Order quantity",min:1,max:1e3,step:5,format:n=>String(n)},input2:{name:"loyalty_years",label:"Loyalty years",min:0,max:20,step:1,format:n=>String(n)},flagField:"approved",amountField:"amount",flagLabel:{good:"Discount applied",bad:"List price"},amountUnit:"% off",presets:[{label:"Small one-off order",input1:40,input2:0},{label:"Bulk, new customer",input1:600,input2:0},{label:"Bulk, loyal customer",input1:600,input2:5}],defaultInput1:40,defaultInput2:0},{kind:"graph",id:"insurance_premium_rating",title:"Insurance premium rating (graph)",description:"Real insurance rating engines work this way: independent rating factors compute separately, then multiply into a final premium. This is a genuine multi-node decision graph, not a flat table — watch each intermediate factor update live.",dmnXml:La,input1:{name:"driver_age",label:"Driver age",min:16,max:80,step:1,format:n=>String(n)},input2:{name:"at_fault_claims",label:"At-fault claims (5yr)",min:0,max:6,step:1,format:n=>String(n)},presets:[{label:"Preferred driver",input1:34,input2:0},{label:"Young driver",input1:21,input2:0},{label:"High claims history",input1:45,input2:4}],defaultInput1:34,defaultInput2:0,nodes:[{id:"age_factor",label:"Age factor",format:n=>`×${n.toFixed(2)}`},{id:"claims_factor",label:"Claims factor",format:n=>`×${n.toFixed(2)}`},{id:"final_premium",label:"Final premium",format:n=>`$${n.toFixed(2)}/mo`}],terminalNodeId:"final_premium"},{kind:"table",id:"loan_approval",title:"Loan approval",description:"Consumer loan approval & credit limit by credit score and monthly income — a FIRST-hit decision table. (Formerly one of Studio’s own hardcoded samples, unified here per BRE-122 so it also appears in Playground.)",dmnXml:Ba,input1:{name:"creditScore",label:"Credit score",min:300,max:850,step:5,format:n=>String(n)},input2:{name:"monthlyIncome",label:"Monthly income",min:0,max:15e3,step:250,format:n=>`$${n.toLocaleString()}`},flagField:"approved",amountField:"limit",flagLabel:{good:"Approved",bad:"Declined"},amountUnit:"",amountFormat:n=>`$${n.toLocaleString()}`,presets:[{label:"Strong applicant",input1:720,input2:6500},{label:"Borderline",input1:610,input2:3200},{label:"Below threshold",input1:560,input2:2e3}],defaultInput1:720,defaultInput2:6500},{kind:"generic",id:"tck_0004",title:"DMN TCK: simple table (UNIQUE)",description:"An OMG DMN Technology Compatibility Kit conformance fixture (0004-simpletable-U), demonstrating the UNIQUE hit policy over 3 mixed-type inputs (number, string, boolean). Shown as plain fields, not curated sliders — a 3-input mixed-type table genuinely doesn’t fit the 2-numeric-slider model (see BRE-122).",dmnXml:Wa,inputs:[{name:"Age",label:"Age",type:"number",default:18},{name:"RiskCategory",label:"Risk category",type:"string",options:["High","Medium","Low"],default:"Medium"},{name:"isAffordable",label:"Is affordable",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"customer_tier_routing",title:"Customer tier routing",description:"Discount % and priority shipping by loyalty tier and cart value — one string input and one numeric input, so it’s shown as plain fields rather than forced onto two numeric sliders.",dmnXml:Va,inputs:[{name:"memberStatus",label:"Member status",type:"string",options:["gold","silver"],default:"gold"},{name:"cartValue",label:"Cart value",type:"number",default:120}],display:"table"},{kind:"generic",id:"fraud_risk_scoring",title:"Fraud risk scoring",description:"Risk score & recommended action by transaction amount and whether it’s international — a numeric input plus a boolean input, shown as plain fields.",dmnXml:Ua,inputs:[{name:"amount",label:"Amount",type:"number",default:1500},{name:"isInternational",label:"International transaction",type:"boolean",default:!0}],display:"table"},{kind:"generic",id:"full_drd_elements",title:"Full DRD element types (structural demo)",description:"A structural/edge-case demo, not a realistic business scenario: exercises every DRG element type DMN defines (input data, a business knowledge model, a knowledge source, an authority requirement) alongside one real decision table. Best explored via Studio’s DRD Diagram tab; the single text input below only drives the one decision’s table.",dmnXml:Ka,inputs:[{name:"Raw Input",label:"Raw input",type:"string",options:["valid","invalid"],default:"valid"}],display:"table"},{kind:"generic",id:"loan_origination",title:"Loan origination (multi-decision graph)",description:"A genuine 3-decision chain (Affordability, RiskCategory, then Routing, which requires both) over 4 primitive inputs — too many inputs and too structurally different from a flat table to force onto Playground’s 2-slider model, so it’s shown as plain fields plus the DRD diagram with live per-decision values overlaid after you run it.",dmnXml:za,inputs:[{name:"applicant_income",label:"Applicant income",type:"number",default:6e3},{name:"applicant_expenses",label:"Applicant expenses",type:"number",default:2500},{name:"loan_amount",label:"Loan amount",type:"number",default:1e4},{name:"credit_score",label:"Credit score",type:"number",default:720}],display:"graph"}];function _n(n){if(n.kind==="generic"){const t={};for(const i of n.inputs)t[i.name]=i.default;return t}return{[n.input1.name]:n.defaultInput1,[n.input2.name]:n.defaultInput2}}const tt="https://www.omg.org/spec/DMN/20191111/MODEL/",mt="https://www.omg.org/spec/DMN/20191111/DMNDI/",_t="https://www.omg.org/spec/DMN/20211108/MODEL/",Bn="https://www.omg.org/spec/DMN/20211108/DMNDI/",yt="https://www.omg.org/spec/DMN/20230324/MODEL/",Wn="https://www.omg.org/spec/DMN/20230324/DMNDI/",$e="https://www.omg.org/spec/DMN/20250201/MODEL/",Vn="https://www.omg.org/spec/DMN/20250201/DMNDI/";let ut=$e;function Un(n){return n&&(n.includes($e)?n.replaceAll($e,tt).replaceAll(Vn,mt):n.includes(yt)?n.replaceAll(yt,tt).replaceAll(Wn,mt):n.includes(_t)?n.replaceAll(_t,tt).replaceAll(Bn,mt):n)}function _o(n){return n&&(n.includes($e)?ut=$e:n.includes(yt)?ut=yt:n.includes(_t)?ut=_t:ut=tt,Un(n))}function Kn(n){return Un(n)}function yo(n,t){if(!n)return n;const i=ut||$e,a=i===$e?Vn:i===yt?Wn:i===_t?Bn:mt;return i===tt?n:n.replaceAll(tt,i).replaceAll(mt,a)}const rn=new aa;async function Ja(n){const{rootElement:t}=await rn.fromXML(Kn(n));return t}async function ho(n){const{xml:t}=await rn.toXML(n,{format:!0});return t}function ze(n,t={}){return rn.create(n,t)}const Xa=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function on(n){return n.get("drgElement")||[]}function Ha(n){return n.$type==="dmn:Decision"}function bo(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:DecisionTable"?t:null}function xo(n){const t=n.get("decisionLogic");return t&&t.$type==="dmn:LiteralExpression"?t:null}function zn(n){const t=[],i=a=>a.replace(/^#/,"");for(const a of n.get("informationRequirement")||[]){const o=a.get("requiredInput")||a.get("requiredDecision");o&&o.href&&t.push(i(o.href))}for(const a of n.get("knowledgeRequirement")||[]){const o=a.get("requiredKnowledge");o&&o.href&&t.push(i(o.href))}return t}const Jt={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},yn={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function Ga(n){const t=on(n),i=new pn.graphlib.Graph;i.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),i.setDefaultEdgeLabel(()=>({}));for(const m of t){const E=Jt[m.$type];if(!E)continue;const D=yn[E];i.setNode(m.id,{...D})}const a=[];for(const m of t)if(Jt[m.$type])for(const E of zn(m))i.node(E)&&(i.setEdge(E,m.id),a.push([E,m.id]));pn.layout(i);const o=[];let c=0,v=0;for(const m of t){const E=Jt[m.$type];if(!E)continue;const D=i.node(m.id),h=yn[E];o.push({id:m.id,name:m.get("name")||m.id,type:E,x:D.x-h.width/2,y:D.y-h.height/2,width:h.width,height:h.height,element:m}),c=Math.max(c,D.x+h.width/2),v=Math.max(v,D.y+h.height/2)}const p=a.map(([m,E])=>{var D;return{from:m,to:E,points:(((D=i.edge(m,E))==null?void 0:D.points)||[]).map(h=>({x:h.x,y:h.y}))}});return{nodes:o,edges:p,width:c+40,height:v+40}}var Ya=b('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),Qa=b("<option> </option>"),Za=b('<select class="svelte-1qozfr"></select>'),$a=b('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),hn=b('<div class="dt-col-label svelte-1qozfr"> </div>'),ei=b('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),ti=b('<th class="dt-input-col svelte-1qozfr"><!></th>'),ni=b('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),ai=b('<th class="dt-output-col svelte-1qozfr"><!></th>'),ii=b('<select class="dt-io-field svelte-1qozfr"><option>true</option><option>false</option></select>'),ri=b('<input class="dt-io-field svelte-1qozfr"/>'),bn=b('<span class="dt-io-value svelte-1qozfr"> </span>'),oi=b('<td class="dt-io-cell dt-io-input svelte-1qozfr"><!></td>'),si=b('<span class="dt-io-value dt-io-empty svelte-1qozfr">—</span>'),li=b('<td class="dt-io-cell dt-io-output svelte-1qozfr"><!></td>'),ui=b('<tr class="dt-io-row svelte-1qozfr"><td class="dt-rownum dt-io-label svelte-1qozfr">Test</td><!><!></tr>'),di=b('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),xn=b('<input class="svelte-1qozfr"/>'),wn=b('<td class="svelte-1qozfr"><!></td>'),ci=b('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),pi=b('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr><!></thead><tbody></tbody></table></div></div>');function En(n,t){Fe(t,!0);let i=we(t,"readonly",3,!1),a=we(t,"matchedRuleIndices",19,()=>[]),o=me(()=>t.decision.get("decisionLogic")),c=me(()=>e(o).get("input")),v=me(()=>e(o).get("output")),p=me(()=>e(o).get("rule"));function m(x){var _;e(o).set("hitPolicy",x),(_=t.onchange)==null||_.call(t)}function E(x,_){var w;x.set("label",_),(w=t.onchange)==null||w.call(t)}function D(x,_){var w;x.get("inputExpression").set("text",_),(w=t.onchange)==null||w.call(t)}function h(x,_){var w;x.get("inputExpression").set("typeRef",_),(w=t.onchange)==null||w.call(t)}function d(x,_){var w;x.set("name",_),(w=t.onchange)==null||w.call(t)}function N(x,_){var w;x.set("label",_),(w=t.onchange)==null||w.call(t)}function C(x,_){var w;x.set("typeRef",_),(w=t.onchange)==null||w.call(t)}function j(x,_,w){var I;x.get("inputEntry")[_].set("text",w),(I=t.onchange)==null||I.call(t)}function B(x,_,w){var I;x.get("outputEntry")[_].set("text",w),(I=t.onchange)==null||I.call(t)}function ee(){var w;const x=ze("dmn:LiteralExpression",{text:""}),_=ze("dmn:InputClause",{label:"New Input",inputExpression:x});e(o).get("input").push(_);for(const I of e(p))I.get("inputEntry").push(ze("dmn:UnaryTests",{text:"-"}));(w=t.onchange)==null||w.call(t)}function oe(x){var _;e(o).get("input").splice(x,1);for(const w of e(p))w.get("inputEntry").splice(x,1);(_=t.onchange)==null||_.call(t)}function y(){var _;const x=ze("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});e(o).get("output").push(x);for(const w of e(p))w.get("outputEntry").push(ze("dmn:LiteralExpression",{text:'""'}));(_=t.onchange)==null||_.call(t)}function l(x){var _;e(o).get("output").splice(x,1);for(const w of e(p))w.get("outputEntry").splice(x,1);(_=t.onchange)==null||_.call(t)}function k(){var w;const x=e(c).map(()=>ze("dmn:UnaryTests",{text:"-"})),_=e(v).map(()=>ze("dmn:LiteralExpression",{text:'""'}));e(o).get("rule").push(ze("dmn:DecisionRule",{inputEntry:x,outputEntry:_})),(w=t.onchange)==null||w.call(t)}function z(x){var _;e(o).get("rule").splice(x,1),(_=t.onchange)==null||_.call(t)}var ye=pi(),se=s(ye),Re=s(se),ke=u(s(Re));{var ve=x=>{var _=Ya(),w=s(_);M(I=>L(w,I),[()=>e(o).get("hitPolicy")||"UNIQUE"]),r(x,_)},le=x=>{var _=Za();Te(_,21,()=>Xa,Ae,(I,Y)=>{var J=Qa(),q=s(J),V={};M(()=>{L(q,e(Y)),V!==(V=e(Y))&&(J.value=(J.__value=e(Y))??"")}),r(I,J)});var w;Ct(_),M(I=>{w!==(w=I)&&(_.value=(_.__value=I)??"",Pt(_,I))},[()=>e(o).get("hitPolicy")||"UNIQUE"]),de("change",_,I=>m(I.currentTarget.value)),r(x,_)};K(ke,x=>{i()?x(ve):x(le,-1)})}var Me=u(Re,2);{var ue=x=>{var _=$a(),w=ce(_),I=u(w,2),Y=u(I,2);de("click",w,ee),de("click",I,y),de("click",Y,k),r(x,_)};K(Me,x=>{i()||x(ue)})}var ne=u(se,2),xe=s(ne);let S;var f=s(xe),T=s(f),R=u(s(T));Te(R,17,()=>e(c),Ae,(x,_,w)=>{var I=ti(),Y=s(I);{var J=V=>{var U=hn(),X=s(U);M(W=>L(X,W),[()=>e(_).get("label")||""]),r(V,U)},q=V=>{var U=ei(),X=ce(U),W=u(X,2),Z=u(W,2),F=s(Z),te=u(F,2);M((re,ae,_e)=>{je(X,re),je(W,ae),je(F,_e)},[()=>e(_).get("label")||"",()=>e(_).get("inputExpression").get("text")||"",()=>e(_).get("inputExpression").get("typeRef")||""]),de("input",X,re=>E(e(_),re.currentTarget.value)),de("input",W,re=>D(e(_),re.currentTarget.value)),de("input",F,re=>h(e(_),re.currentTarget.value)),de("click",te,()=>oe(w)),r(V,U)};K(Y,V=>{i()?V(J):V(q,-1)})}r(x,I)});var P=u(R);Te(P,17,()=>e(v),Ae,(x,_,w)=>{var I=ai(),Y=s(I);{var J=V=>{var U=hn(),X=s(U);M(W=>L(X,W),[()=>e(_).get("label")||""]),r(V,U)},q=V=>{var U=ni(),X=ce(U),W=u(X,2),Z=u(W,2),F=s(Z),te=u(F,2);M((re,ae,_e)=>{je(X,re),je(W,ae),je(F,_e)},[()=>e(_).get("label")||"",()=>e(_).get("name")||"",()=>e(_).get("typeRef")||""]),de("input",X,re=>N(e(_),re.currentTarget.value)),de("input",W,re=>d(e(_),re.currentTarget.value)),de("input",F,re=>C(e(_),re.currentTarget.value)),de("click",te,()=>l(w)),r(V,U)};K(Y,V=>{i()?V(J):V(q,-1)})}r(x,I)});var Q=u(T);{var fe=x=>{var _=ui(),w=u(s(_));Te(w,17,()=>e(c),Ae,(Y,J)=>{const q=me(()=>e(J).get("inputExpression").get("text")||""),V=me(()=>(e(J).get("inputExpression").get("typeRef")||"").toLowerCase());var U=oi(),X=s(U);{var W=F=>{var te=qe(),re=ce(te);{var ae=H=>{var A=ii(),O=s(A);O.value=O.__value="true";var G=u(O);G.value=G.__value="false";var Ee;Ct(A),M(De=>{Ee!==(Ee=De)&&(A.value=(A.__value=De)??"",Pt(A,De))},[()=>String(t.inputValues[e(q)])]),de("change",A,De=>{var Se;return(Se=t.onInputValueChange)==null?void 0:Se.call(t,e(q),De.currentTarget.value)}),r(H,A)},_e=H=>{var A=ri();M(()=>{ie(A,"type",e(V)==="number"?"number":"text"),je(A,t.inputValues[e(q)])}),de("input",A,O=>{var G;return(G=t.onInputValueChange)==null?void 0:G.call(t,e(q),O.currentTarget.value)}),r(H,A)};K(re,H=>{e(V)==="boolean"?H(ae):H(_e,-1)})}r(F,te)},Z=F=>{var te=bn(),re=s(te);M(ae=>L(re,ae),[()=>String(t.outputValues[e(q)])]),r(F,te)};K(X,F=>{t.inputValues&&t.inputValues[e(q)]!==void 0?F(W):t.outputValues&&t.outputValues[e(q)]!==void 0&&F(Z,1)})}r(Y,U)});var I=u(w);Te(I,17,()=>e(v),Ae,(Y,J)=>{const q=me(()=>e(J).get("name")||"");var V=li(),U=s(V);{var X=Z=>{var F=bn(),te=s(F);M(re=>L(te,re),[()=>String(t.outputValues[e(q)])]),r(Z,F)},W=Z=>{var F=si();r(Z,F)};K(U,Z=>{t.outputValues&&t.outputValues[e(q)]!==void 0?Z(X):Z(W,-1)})}r(Y,V)}),r(x,_)};K(Q,x=>{!i()&&(t.inputValues||t.outputValues)&&x(fe)})}var pe=u(f);Te(pe,21,()=>e(p),Ae,(x,_,w)=>{var I=ci();let Y;var J=s(I),q=s(J);q.nodeValue=`${w+1} `;var V=u(q);{var U=Z=>{var F=di();de("click",F,()=>z(w)),r(Z,F)};K(V,Z=>{i()||Z(U)})}var X=u(J);Te(X,17,()=>e(_).get("inputEntry"),Ae,(Z,F,te)=>{var re=wn(),ae=s(re);{var _e=A=>{var O=be();M(G=>L(O,G),[()=>e(F).get("text")||"-"]),r(A,O)},H=A=>{var O=xn();M(G=>je(O,G),[()=>e(F).get("text")||""]),de("input",O,G=>j(e(_),te,G.currentTarget.value)),r(A,O)};K(ae,A=>{i()?A(_e):A(H,-1)})}r(Z,re)});var W=u(X);Te(W,17,()=>e(_).get("outputEntry"),Ae,(Z,F,te)=>{var re=wn(),ae=s(re);{var _e=A=>{var O=be();M(G=>L(O,G),[()=>e(F).get("text")||""]),r(A,O)},H=A=>{var O=xn();M(G=>je(O,G),[()=>e(F).get("text")||""]),de("input",O,G=>B(e(_),te,G.currentTarget.value)),r(A,O)};K(ae,A=>{i()?A(_e):A(H,-1)})}r(Z,re)}),M(Z=>Y=Ve(I,1,"svelte-1qozfr",null,Y,Z),[()=>({matched:a().includes(w)})]),r(x,I)}),M(()=>S=Ve(xe,1,"dt-table svelte-1qozfr",null,S,{readonly:i()})),r(n,ye),Le()}Ge(["change","click","input"]);var mi=b('<span class="le-type-static svelte-125hirw"> </span>'),vi=b('<input placeholder="e.g. number" class="svelte-125hirw"/>'),fi=b('<input class="le-io-input svelte-125hirw"/>'),gi=b('<span class="le-io-value svelte-125hirw"> </span>'),_i=b('<div class="le-io-field svelte-125hirw"><label class="svelte-125hirw"> </label> <!></div>'),yi=b('<div class="le-io-row svelte-125hirw"><!> <div class="le-io-field le-io-result svelte-125hirw"><label for="le-io-result" class="svelte-125hirw"> </label> <span id="le-io-result" class="le-io-value svelte-125hirw"> </span></div></div>'),hi=b('<pre class="le-textarea le-static svelte-125hirw"> </pre>'),bi=b('<textarea class="le-textarea svelte-125hirw" placeholder="FEEL expression, e.g. 400 * age_factor * claims_factor" spellcheck="false"></textarea>'),xi=b('<div class="le-editor svelte-125hirw"><div class="le-toolbar svelte-125hirw"><label class="svelte-125hirw">Result type <!></label></div> <!> <!></div>');function wo(n,t){Fe(t,!0);let i=we(t,"readonly",3,!1),a=me(()=>t.decision.get("decisionLogic"));function o(y){var l;e(a).set("text",y),(l=t.onchange)==null||l.call(t)}function c(y){var k;const l=t.decision.get("variable");l&&(l.set("typeRef",y),(k=t.onchange)==null||k.call(t))}let v=me(()=>{const y=t.decision.$parent;if(!y)return[];const l=new Map(on(y).map(k=>[k.id,k]));return zn(t.decision).map(k=>l.get(k)).filter(k=>!!k).map(k=>({id:k.id,name:k.get("name")||k.id}))}),p=me(()=>{var y;return((y=t.decision.get("variable"))==null?void 0:y.get("name"))||t.decision.get("name")});var m=xi(),E=s(m),D=s(E),h=u(s(D));{var d=y=>{var l=mi(),k=s(l);M(z=>L(k,z),[()=>{var z;return((z=t.decision.get("variable"))==null?void 0:z.get("typeRef"))||""}]),r(y,l)},N=y=>{var l=vi();M(k=>je(l,k),[()=>{var k;return((k=t.decision.get("variable"))==null?void 0:k.get("typeRef"))||""}]),de("input",l,k=>c(k.currentTarget.value)),r(y,l)};K(h,y=>{i()?y(d):y(N,-1)})}var C=u(E,2);{var j=y=>{var l=yi(),k=s(l);Te(k,17,()=>e(v),ve=>ve.id,(ve,le)=>{var Me=_i(),ue=s(Me),ne=s(ue),xe=u(ue,2);{var S=T=>{var R=fi();M(()=>{ie(R,"id",`le-io-${e(le).id}`),je(R,t.inputValues[e(le).name])}),de("input",R,P=>{var Q;return(Q=t.onInputValueChange)==null?void 0:Q.call(t,e(le).name,P.currentTarget.value)}),r(T,R)},f=T=>{var R=gi(),P=s(R);M(Q=>{ie(R,"id",`le-io-${e(le).id}`),L(P,Q)},[()=>t.outputValues&&t.outputValues[e(le).name]!==void 0?String(t.outputValues[e(le).name]):"—"]),r(T,R)};K(xe,T=>{t.inputValues&&t.inputValues[e(le).name]!==void 0?T(S):T(f,-1)})}M(()=>{ie(ue,"for",`le-io-${e(le).id}`),L(ne,e(le).name)}),r(ve,Me)});var z=u(k,2),ye=s(z),se=s(ye),Re=u(ye,2),ke=s(Re);M(ve=>{L(se,`${e(p)??""} (result)`),L(ke,ve)},[()=>t.outputValues&&t.outputValues[e(p)]!==void 0?String(t.outputValues[e(p)]):"—"]),r(y,l)};K(C,y=>{!i()&&(t.inputValues||t.outputValues)&&(e(v).length>0||t.outputValues)&&y(j)})}var B=u(C,2);{var ee=y=>{var l=hi(),k=s(l);M(z=>L(k,z),[()=>e(a).get("text")||""]),r(y,l)},oe=y=>{var l=bi();M(k=>je(l,k),[()=>e(a).get("text")||""]),de("input",l,k=>o(k.currentTarget.value)),r(y,l)};K(B,y=>{i()?y(ee):y(oe,-1)})}r(n,m),Le()}Ge(["input"]);var wi=it('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),Ei=it('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),Di=it('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),Si=it('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),Ri=it('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),ki=it('<g role="button" tabindex="0"><!><!></g>'),Ii=b('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function Dn(n,t){Fe(t,!0);let i=me(()=>Ga(t.definitions)),a=$(We({x:0,y:0,w:800,h:500})),o=$(!1),c={x:0,y:0},v={x:0,y:0};et(()=>{g(a,{x:0,y:0,w:Math.max(e(i).width,400),h:Math.max(e(i).height,300)},!0)});function p(y){y.preventDefault();const l=y.deltaY>0?1.1:.9,k=Math.max(200,Math.min(4e3,e(a).w*l)),z=Math.max(150,Math.min(3e3,e(a).h*l));g(a,{...e(a),w:k,h:z},!0)}function m(y){y.target.closest(".drd-node")||(g(o,!0),c={x:y.clientX,y:y.clientY},v={x:e(a).x,y:e(a).y})}function E(y,l){if(!e(o))return;const k=e(a).w/l.clientWidth;g(a,{...e(a),x:v.x-(y.clientX-c.x)*k,y:v.y-(y.clientY-c.y)*k},!0)}function D(){g(o,!1)}function h(y){switch(y){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function d(y){switch(y){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function N(y){return y.points.length?y.points.map((l,k)=>`${k===0?"M":"L"} ${l.x} ${l.y}`).join(" "):""}function C(y){if(!t.nodeValues)return null;const l=y.id in t.nodeValues?t.nodeValues[y.id]:t.nodeValues[y.name];return l===void 0?null:t.formatNodeValue?t.formatNodeValue(y.id,l):String(l)}var j=Ii(),B=s(j),ee=u(s(B));Te(ee,17,()=>e(i).edges,Ae,(y,l)=>{var k=wi();M(z=>ie(k,"d",z),[()=>N(e(l))]),r(y,k)});var oe=u(ee);Te(oe,17,()=>e(i).nodes,Ae,(y,l)=>{const k=me(()=>C(e(l)));var z=ki();let ye;var se=s(z);{var Re=ue=>{var ne=Ei();M((xe,S)=>{ie(ne,"x",e(l).x),ie(ne,"y",e(l).y),ie(ne,"width",e(l).width),ie(ne,"height",e(l).height),ie(ne,"fill",xe),ie(ne,"stroke",S),ie(ne,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>h(e(l).type),()=>d(e(l).type)]),r(ue,ne)},ke=ue=>{var ne=Di();M((xe,S)=>{ie(ne,"x",e(l).x),ie(ne,"y",e(l).y),ie(ne,"width",e(l).width),ie(ne,"height",e(l).height),ie(ne,"fill",xe),ie(ne,"stroke",S),ie(ne,"stroke-width",e(l).id===t.activeId?2.5:1.5)},[()=>h(e(l).type),()=>d(e(l).type)]),r(ue,ne)};K(se,ue=>{e(l).type==="inputData"?ue(Re):ue(ke,-1)})}var ve=u(se);{var le=ue=>{var ne=Si(),xe=ce(ne),S=s(xe),f=u(xe),T=s(f);M(()=>{ie(xe,"x",e(l).x+e(l).width/2),ie(xe,"y",e(l).y+e(l).height*.4),L(S,e(l).name),ie(f,"x",e(l).x+e(l).width/2),ie(f,"y",e(l).y+e(l).height*.68),L(T,e(k))}),r(ue,ne)},Me=ue=>{var ne=Ri(),xe=s(ne);M(()=>{ie(ne,"x",e(l).x+e(l).width/2),ie(ne,"y",e(l).y+e(l).height/2),L(xe,e(l).name)}),r(ue,ne)};K(ve,ue=>{e(k)!==null?ue(le):ue(Me,-1)})}M(()=>ye=Ve(z,0,"drd-node svelte-1jgcg8n",null,ye,{active:e(l).id===t.activeId,static:!t.onselect})),de("click",z,()=>{var ue;return(ue=t.onselect)==null?void 0:ue.call(t,e(l).id)}),de("keydown",z,ue=>{var ne;return ue.key==="Enter"&&((ne=t.onselect)==null?void 0:ne.call(t,e(l).id))}),r(y,z)}),M(()=>ie(B,"viewBox",`${e(a).x??""} ${e(a).y??""} ${e(a).w??""} ${e(a).h??""}`)),en("wheel",B,p),de("pointerdown",B,m),de("pointermove",B,y=>E(y,y.currentTarget)),de("pointerup",B,D),en("pointerleave",B,D),r(n,j),Le()}Ge(["pointerdown","pointermove","pointerup","click","keydown"]);const Ke=We({current:null,facts:{}});var Mi=b("<div><!></div>");function Bt(n,t){let i=we(t,"direction",3,"row"),a=we(t,"bordered",3,!1),o=we(t,"gap",3,"var(--sp-2)"),c=we(t,"class",3,"");var v=Mi();let p,m;var E=s(v);ft(E,()=>t.children??gt),M(()=>{p=Ve(v,1,`tab-group ${c()??""}`,"svelte-13apwse",p,{bordered:a()}),m=Pn(v,"",m,{"flex-direction":i(),gap:o()})}),r(n,v)}var Ni=b("<button><!></button>");function ht(n,t){let i=we(t,"active",3,!1),a=we(t,"variant",3,"pill"),o=we(t,"fullWidth",3,!1),c=we(t,"disabled",3,!1),v=we(t,"type",3,"button");var p=Ni();let m;var E=s(p);ft(E,()=>t.children??gt),M(()=>{ie(p,"type",v()),m=Ve(p,1,`tab tab-${a()??""}`,"svelte-184qymf",m,{active:i(),"full-width":o()}),p.disabled=c(),ie(p,"aria-pressed",i())}),de("click",p,function(...D){var h;(h=t.onclick)==null||h.apply(this,D)}),r(n,p)}Ge(["click"]);var Ti=b("<div><!></div>");function He(n,t){let i=we(t,"padding",3,"var(--sp-5)"),a=we(t,"class",3,"");var o=Ti();let c;var v=s(o);ft(v,()=>t.children??gt),M(()=>{Ve(o,1,`panel ${a()??""}`,"svelte-hxsa5u"),c=Pn(o,"",c,{padding:i()})}),r(n,o)}var Ai=new Set(["$$slots","$$events","$$legacy","value","type","variant","class"]),Sn=b("<input/>");function Xe(n,t){Fe(t,!0);let i=we(t,"value",15),a=we(t,"type",3,"text"),o=we(t,"variant",3,"default"),c=we(t,"class",3,""),v=jn(t,Ai);var p=qe(),m=ce(p);{var E=h=>{var d=Sn();jt(d,()=>({type:"number",class:`input input-${o()??""} ${c()??""}`,...v}),void 0,void 0,void 0,"svelte-8ff5h4",!0),qt(d,i),r(h,d)},D=h=>{var d=Sn();jt(d,()=>({type:a(),class:`input input-${o()??""} ${c()??""}`,...v}),void 0,void 0,void 0,"svelte-8ff5h4",!0),qt(d,i),r(h,d)};K(m,h=>{a()==="number"?h(E):h(D,-1)})}r(n,p),Le()}var Oi=b('<!> <div class="field svelte-175p7lt"><label for="input1" class="svelte-175p7lt"> <!></label> <input id="input1" type="range" class="svelte-175p7lt"/></div> <div class="field svelte-175p7lt"><label for="input2" class="svelte-175p7lt"> <!></label> <input id="input2" type="range" class="svelte-175p7lt"/></div>',1),Ci=b('<select class="generic-select svelte-175p7lt"><option>true</option><option>false</option></select>'),Pi=b("<option> </option>"),ji=b('<select class="generic-select svelte-175p7lt"></select>'),qi=b('<div class="field generic-field svelte-175p7lt"><label class="svelte-175p7lt"> </label> <!></div>'),Fi=b('<div class="verdict bad svelte-175p7lt"><div class="status svelte-175p7lt">Example error</div> <div class="error-detail mono svelte-175p7lt"> </div></div>'),Li=b('<div><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Bi=b('<div class="verdict good svelte-175p7lt"><div class="status svelte-175p7lt"> </div> <div class="rate mono svelte-175p7lt"> </div></div>'),Wi=b('<pre class="generic-result mono svelte-175p7lt"> </pre>'),Vi=b('<div class="rate mono svelte-175p7lt">—</div>'),Ui=b('<div class="verdict good generic-verdict svelte-175p7lt"><div class="status svelte-175p7lt">Result</div> <!></div>'),Ki=b('<h2 class="eyebrow svelte-175p7lt">Facts</h2> <p class="lede svelte-175p7lt"> </p> <!> <!>',1),zi=b(`<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; unavailable</h2> <p class="lede svelte-175p7lt">This example didn't parse/compile cleanly -- see the error detail in the left panel.</p>`,1),Rn=b('<div class="table-host svelte-175p7lt"><!></div>'),kn=b('<h2 class="eyebrow svelte-175p7lt">Decision table &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),In=b('<div class="graph-host svelte-175p7lt"><!></div>'),Ji=b(`Every node above was actually evaluated by the real engine — the terminal node's own expression reads the
          other two nodes' <b>results</b>, not the raw facts, exactly like a real DMN decision requirements graph.`,1),Xi=b('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!> <div class="trace mono svelte-175p7lt"><!></div>',1),Hi=b('<h2 class="eyebrow svelte-175p7lt">Decision graph &mdash; live</h2> <p class="lede svelte-175p7lt"> </p> <!>',1),Gi=b('<h1 class="page-title svelte-175p7lt">Playground</h1> <!> <div class="stage svelte-175p7lt"><!> <!></div>',1);function Yi(n,t){Fe(t,!0);let i=$(0),a=me(()=>Rt[e(i)]),o=$(0),c=$(0),v=$(We({})),p=$("loading the engine…"),m=$(!1),E=!1,D=$(null),h=null,d=$(null),N=$(!0),C=$(null),j=$(We([])),B=$(We({})),ee=$(null),oe=$(We({})),y=$(0),l=me(()=>{if(!e(D))return null;const f=on(e(D)).filter(Ha);return e(a).kind==="generic"&&e(a).display==="table"&&e(a).decisionId?f.find(T=>T.id===e(a).decisionId)||f[0]||null:f[0]||null});et(()=>{Ke.current=e(a),Ke.facts=e(a).kind==="generic"?{...e(v)}:{[e(a).input1.name]:e(o),[e(a).input2.name]:e(c)}});async function k(f){try{g(D,await Ja(f.dmnXml),!0),h=Ia("dmn-xml",JSON.stringify(Kn(f.dmnXml))),g(d,null)}catch(T){h=null,g(D,null),g(d,`This example failed to compile: ${(T==null?void 0:T.message)??String(T)}`),console.error("Failed to load/compile example",f.id,T)}}function z(){if(!h)return;const f=e(a);try{if(f.kind==="generic"){const fe={};for(const _ of f.inputs)fe[_.name]=e(v)[_.name];const pe=gn(h,JSON.stringify(fe)),x=JSON.parse(pe);if(g(ee,x.result,!0),f.display==="table")g(j,x.trace&&x.trace.matched_rules||[],!0);else{const _=x.trace&&x.trace.intermediates||{},w=typeof x.result=="object"&&x.result?x.result:{};g(oe,{..._,...w},!0)}return}const T={};T[f.input1.name]=e(o),T[f.input2.name]=e(c);const R=gn(h,JSON.stringify(T)),P=JSON.parse(R);if(f.kind==="graph"){const fe=P.trace&&P.trace.intermediates||{},pe={};for(const x of f.nodes)pe[x.id]=fe[x.id];g(B,pe,!0);return}const Q=P.result;g(j,P.trace&&P.trace.matched_rules||[],!0),g(N,!!Q[f.flagField]),g(C,Q[f.flagField]?Q[f.amountField]:null,!0)}catch(T){g(d,`This example failed to evaluate: ${(T==null?void 0:T.message)??String(T)}`),console.error("Failed to evaluate example",f.id,T)}}async function ye(f){g(i,f,!0);const T=Rt[f];g(y,T.kind==="generic"?null:0,!0),g(d,null),g(ee,null),g(oe,{},!0),g(j,[],!0),g(B,{},!0),T.kind==="generic"?g(v,_n(T),!0):(g(o,T.defaultInput1,!0),g(c,T.defaultInput2,!0)),E&&(await k(T),z())}function se(f){e(a).kind!=="generic"&&(g(o,e(a).presets[f].input1,!0),g(c,e(a).presets[f].input2,!0),g(y,f,!0),z())}function Re(){g(y,null),z()}function ke(f,T){if(e(a).kind==="generic")return;const R=f===1?e(a).input1:e(a).input2;let P=parseFloat(T);isNaN(P)&&(P=f===1?e(o):e(c)),P=Math.min(R.max,Math.max(R.min,P)),f===1?g(o,P,!0):g(c,P,!0),g(y,null),z()}function ve(f,T){g(v,{...e(v),[f]:T},!0),g(y,null),z()}function le(f,T){const R=e(a).kind==="graph"?e(a).nodes.find(P=>P.id===f):void 0;return R?R.format(T):String(T)}Et(async()=>{try{await Pa(),E=!0;const f=Rt[e(i)];f.kind==="generic"?g(v,_n(f),!0):(g(o,f.defaultInput1,!0),g(c,f.defaultInput2,!0)),await k(e(a)),g(p,"compiled and running — real engine, in your browser, zero network calls."),z()}catch(f){g(m,!0),g(p,"engine failed to load: "+((f==null?void 0:f.message)??String(f))),console.error(f)}});var Me=Gi(),ue=u(ce(Me),2);Bt(ue,{class:"example-tabs",children:(f,T)=>{var R=qe(),P=ce(R);Te(P,17,()=>Rt,Ae,(Q,fe,pe)=>{{let x=me(()=>e(i)===pe);ht(Q,{get active(){return e(x)},onclick:()=>ye(pe),children:(_,w)=>{var I=be();M(()=>L(I,e(fe).title)),r(_,I)},$$slots:{default:!0}})}}),r(f,R)},$$slots:{default:!0}});var ne=u(ue,2),xe=s(ne);He(xe,{padding:"20px",children:(f,T)=>{var R=Ki(),P=u(ce(R),2),Q=s(P),fe=u(P,2);{var pe=q=>{var V=Oi(),U=ce(V);Bt(U,{direction:"column",gap:"6px",class:"presets",children:(O,G)=>{var Ee=qe(),De=ce(Ee);Te(De,17,()=>e(a).presets,Ae,(Se,Be,Oe)=>{{let Ye=me(()=>e(y)===Oe);ht(Se,{variant:"list",get active(){return e(Ye)},onclick:()=>se(Oe),children:(rt,Qe)=>{var Dt=be();M(()=>L(Dt,e(Be).label)),r(rt,Dt)},$$slots:{default:!0}})}}),r(O,Ee)},$$slots:{default:!0}});var X=u(U,2),W=s(X),Z=s(W),F=u(Z);Xe(F,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input1.min},get max(){return e(a).input1.max},get step(){return e(a).input1.step},get value(){return e(o)},onchange:O=>ke(1,O.currentTarget.value)});var te=u(W,2),re=u(X,2),ae=s(re),_e=s(ae),H=u(_e);Xe(H,{class:"mono",variant:"inline",type:"number",get min(){return e(a).input2.min},get max(){return e(a).input2.max},get step(){return e(a).input2.step},get value(){return e(c)},onchange:O=>ke(2,O.currentTarget.value)});var A=u(ae,2);M(()=>{L(Z,`${e(a).input1.label??""} `),ie(te,"min",e(a).input1.min),ie(te,"max",e(a).input1.max),ie(te,"step",e(a).input1.step),L(_e,`${e(a).input2.label??""} `),ie(A,"min",e(a).input2.min),ie(A,"max",e(a).input2.max),ie(A,"step",e(a).input2.step)}),de("input",te,Re),qt(te,()=>e(o),O=>g(o,O)),de("input",A,Re),qt(A,()=>e(c),O=>g(c,O)),r(q,V)},x=q=>{var V=qe(),U=ce(V);Te(U,17,()=>e(a).inputs,Ae,(X,W)=>{var Z=qi(),F=s(Z),te=s(F),re=u(F,2);{var ae=A=>{var O=Ci(),G=s(O);G.value=G.__value="true";var Ee=u(G);Ee.value=Ee.__value="false";var De;Ct(O),M(Se=>{ie(O,"id",`generic-${e(W).name}`),De!==(De=Se)&&(O.value=(O.__value=Se)??"",Pt(O,Se))},[()=>String(e(v)[e(W).name])]),de("change",O,Se=>ve(e(W).name,Se.currentTarget.value==="true")),r(A,O)},_e=A=>{var O=ji();Te(O,21,()=>e(W).options,Ae,(Ee,De)=>{var Se=Pi(),Be=s(Se),Oe={};M(()=>{L(Be,e(De)),Oe!==(Oe=e(De))&&(Se.value=(Se.__value=e(De))??"")}),r(Ee,Se)});var G;Ct(O),M(()=>{ie(O,"id",`generic-${e(W).name}`),G!==(G=e(v)[e(W).name])&&(O.value=(O.__value=e(v)[e(W).name])??"",Pt(O,e(v)[e(W).name]))}),de("change",O,Ee=>ve(e(W).name,Ee.currentTarget.value)),r(A,O)},H=A=>{{let O=me(()=>`generic-${e(W).name}`),G=me(()=>e(W).type==="number"?"number":"text");Xe(A,{get id(){return e(O)},class:"mono",get type(){return e(G)},get value(){return e(v)[e(W).name]},onchange:Ee=>ve(e(W).name,e(W).type==="number"?parseFloat(Ee.currentTarget.value):Ee.currentTarget.value)})}};K(re,A=>{e(W).type==="boolean"?A(ae):e(W).options?A(_e,1):A(H,-1)})}M(()=>{ie(F,"for",`generic-${e(W).name}`),L(te,e(W).label)}),r(X,Z)}),r(q,V)};K(fe,q=>{e(a).kind!=="generic"?q(pe):q(x,-1)})}var _=u(fe,2);{var w=q=>{var V=Fi(),U=u(s(V),2),X=s(U);M(()=>L(X,e(d))),r(q,V)},I=q=>{var V=Li();let U;var X=s(V),W=s(X),Z=u(X,2),F=s(Z);M(te=>{U=Ve(V,1,"verdict svelte-175p7lt",null,U,{good:e(N),bad:!e(N)}),L(W,e(N)?e(a).flagLabel.good:e(a).flagLabel.bad),L(F,te)},[()=>e(N)&&e(C)!==null?e(a).amountFormat?e(a).amountFormat(e(C)):`${e(C)}${e(a).amountUnit}`:"—"]),r(q,V)},Y=q=>{var V=Bi(),U=s(V),X=s(U),W=u(U,2),Z=s(W);M((F,te)=>{L(X,F),L(Z,te)},[()=>{var F;return(F=e(a).nodes.find(te=>te.id===e(a).terminalNodeId))==null?void 0:F.label},()=>e(B)[e(a).terminalNodeId]!==void 0?le(e(a).terminalNodeId,e(B)[e(a).terminalNodeId]):"—"]),r(q,V)},J=q=>{var V=Ui(),U=u(s(V),2);{var X=Z=>{var F=Wi(),te=s(F);M(re=>L(te,re),[()=>JSON.stringify(e(ee),null,2)]),r(Z,F)},W=Z=>{var F=Vi();r(Z,F)};K(U,Z=>{e(ee)?Z(X):Z(W,-1)})}r(q,V)};K(_,q=>{e(d)?q(w):e(a).kind==="table"?q(I,1):e(a).kind==="graph"?q(Y,2):q(J,-1)})}M(()=>L(Q,e(a).description)),r(f,R)},$$slots:{default:!0}});var S=u(xe,2);He(S,{padding:"20px",children:(f,T)=>{var R=qe(),P=ce(R);{var Q=w=>{var I=zi();r(w,I)},fe=w=>{var I=kn(),Y=u(ce(I),2),J=s(Y),q=u(Y,2);{var V=U=>{var X=Rn(),W=s(X);En(W,{get decision(){return e(l)},readonly:!0,get matchedRuleIndices(){return e(j)}}),r(U,X)};K(q,U=>{e(l)&&U(V)})}M(()=>L(J,e(p))),r(w,I)},pe=w=>{var I=Xi(),Y=u(ce(I),2),J=s(Y),q=u(Y,2);{var V=F=>{var te=In(),re=s(te);Dn(re,{get definitions(){return e(D)},activeId:null,get nodeValues(){return e(B)},formatNodeValue:le}),r(F,te)};K(q,F=>{e(D)&&F(V)})}var U=u(q,2),X=s(U);{var W=F=>{var te=Ji();r(F,te)},Z=F=>{var te=be("Waiting on the engine…");r(F,te)};K(X,F=>{e(B)[e(a).terminalNodeId]!==void 0?F(W):e(m)||F(Z,1)})}M(()=>L(J,`${e(p)??""} Each box is a real node in a compiled decision graph — the two factor nodes evaluate independently, then the terminal node combines them.`)),r(w,I)},x=w=>{var I=kn(),Y=u(ce(I),2),J=s(Y),q=u(Y,2);{var V=U=>{var X=Rn(),W=s(X);En(W,{get decision(){return e(l)},readonly:!0,get matchedRuleIndices(){return e(j)}}),r(U,X)};K(q,U=>{e(l)&&U(V)})}M(()=>L(J,e(p))),r(w,I)},_=w=>{var I=Hi(),Y=u(ce(I),2),J=s(Y),q=u(Y,2);{var V=U=>{var X=In(),W=s(X);Dn(W,{get definitions(){return e(D)},activeId:null,get nodeValues(){return e(oe)}}),r(U,X)};K(q,U=>{e(D)&&U(V)})}M(()=>L(J,`${e(p)??""} A genuine multi-decision chain — each box is evaluated by the compiled engine; values appear once evaluated.`)),r(w,I)};K(P,w=>{e(d)?w(Q):e(a).kind==="table"?w(fe,1):e(a).kind==="graph"?w(pe,2):e(a).display==="table"?w(x,3):w(_,-1)})}r(f,R)},$$slots:{default:!0}}),r(n,Me),Le()}Ge(["input","change"]);const sn="bre_playground_token",ln="bre_playground_tenant",Jn="bre_playground_org_names";function Xn(){if(typeof window>"u")return{};try{const n=localStorage.getItem(Jn);return n?JSON.parse(n):{}}catch{return{}}}function Hn(n){return n?Xn()[n]??null:null}function Qi(){if(typeof window>"u")return{token:null,tenantId:null,orgName:null};const n=localStorage.getItem(sn),t=localStorage.getItem(ln);return{token:n,tenantId:t,orgName:Hn(t)}}const ge=We(Qi());function Mn(n,t){ge.token=n,ge.tenantId=t,ge.orgName=Hn(t),localStorage.setItem(sn,n),t&&localStorage.setItem(ln,t)}function Zi(n,t){const i=Xn();i[n]=t,localStorage.setItem(Jn,JSON.stringify(i)),ge.tenantId===n&&(ge.orgName=t)}function $i(){ge.token=null,ge.tenantId=null,ge.orgName=null,localStorage.removeItem(sn),localStorage.removeItem(ln)}const er="bre_studio_handoff";function Gn(n){localStorage.setItem(er,JSON.stringify(n))}const bt="/bre/",Yn={playground:"","sdk-sandbox":"sdk-sandbox",docs:"docs",account:"account",studio:"studio",privacy:"privacy",terms:"terms","api-docs":"api-docs"},nn=Object.fromEntries(Object.entries(Yn).map(([n,t])=>[t,n]));function Qn(n){const i=(n.startsWith(bt)?n.slice(bt.length):n.replace(/^\//,"")).replace(/\/$/,"");return nn[i]??"playground"}function Nn(){var t;if(typeof window>"u")return"playground";if(window.location.hash.includes("google_auth="))return"account";const n=(t=window.location.hash.match(/^#\/?([a-z-]*)\/?$/))==null?void 0:t[1];if(n!==void 0&&n in nn){const i=nn[n];return history.replaceState(null,"",Ce(i)),i}return Qn(window.location.pathname)}function Ce(n){const t=Yn[n];return t?`${bt}${t}`:bt}var xt,wt;class tr{constructor(){Ut(this,xt,$(We(Nn())));Ut(this,wt,$(0));typeof window<"u"&&(window.addEventListener("popstate",()=>{this.current=Nn()}),window.addEventListener("click",t=>{var c,v;if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;const i=(v=(c=t.target)==null?void 0:c.closest)==null?void 0:v.call(c,"a");if(!i||i.hasAttribute("download"))return;const a=i.getAttribute("target");if(a&&a!=="_self")return;const o=i.getAttribute("href");!o||!o.startsWith(bt)||(t.preventDefault(),history.pushState(null,"",o),this.current=Qn(o))}))}get current(){return e(st(this,xt))}set current(t){g(st(this,xt),t,!0)}get studioHandoffTick(){return e(st(this,wt))}set studioHandoffTick(t){g(st(this,wt),t,!0)}navigate(t){typeof window>"u"||(history.pushState(null,"",Ce(t)),this.current=t)}bumpStudioHandoff(){this.studioHandoffTick++}}xt=new WeakMap,wt=new WeakMap;const he=new tr;var nr=new Set(["$$slots","$$events","$$legacy","children","variant","fullWidth","disabled","type","href","onclick","class"]),ar=b("<a><!></a>"),ir=b("<button><!></button>");function Pe(n,t){let i=we(t,"variant",3,"secondary"),a=we(t,"fullWidth",3,!1),o=we(t,"disabled",3,!1),c=we(t,"type",3,"button"),v=we(t,"class",3,""),p=jn(t,nr);var m=qe(),E=ce(m);{var D=d=>{var N=ar();jt(N,()=>({href:t.href,class:`btn btn-${i()??""} ${v()??""}`,"aria-disabled":o(),onclick:t.onclick,...p,[mn]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var C=s(N);ft(C,()=>t.children??gt),r(d,N)},h=d=>{var N=ir();jt(N,()=>({type:c(),class:`btn btn-${i()??""} ${v()??""}`,disabled:o(),onclick:t.onclick,...p,[mn]:{"full-width":a()}}),void 0,void 0,void 0,"svelte-18sv61c");var C=s(N);ft(C,()=>t.children??gt),r(d,N)};K(E,d=>{t.href?d(D):d(h,-1)})}r(n,m)}var rr=b('<!> <div class="divider svelte-11w59y9"><span>or log in</span></div>',1),or=b(`<p class="signup-disabled-note svelte-11w59y9">New accounts are created by signing in with Google. Already have an
        account? Log in below.</p> <!>`,1),Xt=b("<!> <!>",1),sr=b('<!> <div class="divider svelte-11w59y9"><span>or</span></div>',1),lr=b('<label class="svelte-11w59y9">Organization name <!></label>'),ur=b('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),dr=b('<!> <form class="svelte-11w59y9"><!> <label class="svelte-11w59y9">Email <!></label> <label class="svelte-11w59y9">Password <!></label> <!></form> <!>',1),cr=b('<div class="api-key-box svelte-11w59y9"><div class="label svelte-11w59y9">Your new API key (shown once — save it now):</div> <code class="mono svelte-11w59y9"> </code></div>'),pr=b('<div class="empty svelte-11w59y9">None yet.</div>'),mr=b('<li class="ruleset-row svelte-11w59y9"><div class="ruleset-info svelte-11w59y9"><span class="mono name svelte-11w59y9"> </span> <span class="meta svelte-11w59y9"> </span></div> <div class="ruleset-actions svelte-11w59y9"><!> <!></div></li>'),vr=b('<ul class="svelte-11w59y9"></ul>'),fr=b(`<div class="signed-in svelte-11w59y9"><div class="row svelte-11w59y9"><span>Signed in <!></span> <!></div> <div class="api-key-section"><!> <p class="note svelte-11w59y9">Issues a new key and immediately revokes every previous one for this account — use this if a key was lost or may have leaked.</p> <!></div> <!> <div class="saved-list svelte-11w59y9"><div class="label svelte-11w59y9">Saved rulesets:</div> <p class="note svelte-11w59y9">Saved to your bre-service account — separate from Studio's local "Save to Library," which stays in this browser only.</p> <!></div></div>`),gr=b('<div class="error mono svelte-11w59y9"> </div>'),_r=b('<div class="intro svelte-11w59y9"><h1 class="page-title">Your account</h1> <p class="svelte-11w59y9">Sign up or log in to save Playground rulesets to a real bre-service backend.</p></div> <!> <!>',1),yr=b('<p class="viewer-status svelte-11w59y9">Loading…</p>'),hr=b('<p class="viewer-status error-text svelte-11w59y9"> </p>'),br=b('<pre class="viewer-content mono svelte-11w59y9"> </pre>'),xr=b('<div class="viewer-backdrop svelte-11w59y9" role="presentation"><div class="viewer-panel svelte-11w59y9" role="dialog" tabindex="-1"><div class="viewer-header svelte-11w59y9"><span class="mono"> </span> <!></div> <!></div></div>');function wr(n,t){Fe(t,!0);const i="https://api.datalila.com";let a=$("signup"),o=$(""),c=$(""),v=$(""),p=$(""),m=$(!1),E=$(null),D=$(We([])),h=$(null),d=$(null),N=$(!1),C=$(null),j=$(!1),B=$(!1);Et(()=>{ge.token&&se(),ee(),fetch(`${i}/health`).then(S=>S.ok?S.json():null).then(S=>{g(j,!!(S!=null&&S.google_signin_available)),g(B,!!(S!=null&&S.public_signup_requires_google)),e(B)&&e(a)==="signup"&&g(a,"login")}).catch(()=>{})});function ee(){const S=window.location.hash;if(!S||!S.includes("google_auth="))return;const f=new URLSearchParams(S.replace(/^#/,"")),T=f.get("google_auth");if(T==="success"){const R=f.get("token"),P=f.get("tenant_id");R&&(Mn(R,P),se())}else T==="error"&&g(E,f.get("message")??"Google sign-in failed.",!0);history.replaceState(null,"",window.location.pathname+window.location.search)}function oe(){window.location.href=`${i}/api/v1/auth/oidc/signup/google`}async function y(){g(E,null),g(m,!0);try{if(e(a)==="signup"){const S=await fetch(`${i}/api/v1/auth/register`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({tenant_name:e(o),email:e(c),password:e(v)})});if(!S.ok)throw new Error(await S.text());const f=await S.json();g(p,f.api_key,!0),f.tenant_id&&e(o)&&Zi(f.tenant_id,e(o)),await l()}else await l()}catch(S){g(E,(S==null?void 0:S.message)??String(S),!0)}finally{g(m,!1)}}async function l(){const S=await fetch(`${i}/api/v1/auth/login`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:e(c),password:e(v)})});if(!S.ok){const R=await S.text();throw new Error(R||`login failed (HTTP ${S.status}): check email/password`)}const f=await S.json(),T=f.token??f.access_token??f.jwt;if(!T)throw new Error("login succeeded but no token found in response: "+JSON.stringify(f));Mn(T,f.tenant_id??ge.tenantId??null),await se()}function k(){$i(),g(p,""),g(D,[],!0),ve()}let z=$(!1);async function ye(){if(ge.token){g(z,!0),g(E,null);try{const S=await fetch(`${i}/api/v1/admin/api-key/regenerate`,{method:"POST",headers:{Authorization:`Bearer ${ge.token}`}});if(!S.ok)throw new Error(await S.text());const f=await S.json();g(p,f.api_key,!0)}catch(S){g(E,S instanceof Error?S.message:"Failed to regenerate API key.",!0)}finally{g(z,!1)}}}async function se(){if(ge.token)try{const S=await fetch(`${i}/api/v1/rulesets`,{headers:{Authorization:`Bearer ${ge.token}`}});if(!S.ok)throw new Error(await S.text());const f=await S.json();g(D,Array.isArray(f)?f:[],!0)}catch(S){g(E,"Could not load saved rulesets: "+((S==null?void 0:S.message)??String(S)))}}async function Re(){if(!ge.token)return;const S=Ke.current;if(!S){g(E,"No example is currently open in Playground to save.");return}g(E,null),g(m,!0);try{const f=await fetch(`${i}/api/v1/rulesets/register`,{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${ge.token}`},body:JSON.stringify({name:S.id,format:"dmn-xml",content:S.dmnXml})});if(!f.ok)throw new Error(await f.text());const T=await f.json();if(T&&typeof T=="object"&&"Err"in T)throw new Error(T.Err);await se()}catch(f){g(E,(f==null?void 0:f.message)??String(f),!0)}finally{g(m,!1)}}async function ke(S){g(h,S,!0),g(d,null),g(C,null),g(N,!0);try{const f=await fetch(`${i}/api/v1/rulesets/blob/${S.latest_hash}`,{headers:{Authorization:`Bearer ${ge.token}`}});if(!f.ok)throw new Error(await f.text());g(d,await f.text(),!0)}catch(f){g(C,(f==null?void 0:f.message)??String(f),!0)}finally{g(N,!1)}}function ve(){g(h,null),g(d,null),g(C,null)}async function le(S){if(ge.token){g(E,null);try{const f=await fetch(`${i}/api/v1/rulesets/blob/${S.latest_hash}`,{headers:{Authorization:`Bearer ${ge.token}`}});if(!f.ok)throw new Error(await f.text());const T=await f.text();Gn({dmnXml:T}),he.bumpStudioHandoff(),he.navigate("studio")}catch(f){g(E,`Could not open "${S.name}" in Studio: `+((f==null?void 0:f.message)??String(f)))}}}var Me=Xt(),ue=ce(Me);He(ue,{class:"account-panel",padding:"20px",children:(S,f)=>{var T=_r(),R=u(ce(T),2);{var P=x=>{var _=dr(),w=ce(_);{var I=ae=>{var _e=or(),H=u(ce(_e),2);{var A=O=>{var G=rr(),Ee=ce(G);Pe(Ee,{variant:"secondary",fullWidth:!0,onclick:oe,children:(De,Se)=>{var Be=be("Sign in with Google");r(De,Be)},$$slots:{default:!0}}),r(O,G)};K(H,O=>{e(j)&&O(A)})}r(ae,_e)},Y=ae=>{var _e=Xt(),H=ce(_e);Bt(H,{class:"tabs",children:(G,Ee)=>{var De=Xt(),Se=ce(De);{let Oe=me(()=>e(a)==="signup");ht(Se,{fullWidth:!0,get active(){return e(Oe)},onclick:()=>g(a,"signup"),children:(Ye,rt)=>{var Qe=be("Sign up");r(Ye,Qe)},$$slots:{default:!0}})}var Be=u(Se,2);{let Oe=me(()=>e(a)==="login");ht(Be,{fullWidth:!0,get active(){return e(Oe)},onclick:()=>g(a,"login"),children:(Ye,rt)=>{var Qe=be("Log in");r(Ye,Qe)},$$slots:{default:!0}})}r(G,De)},$$slots:{default:!0}});var A=u(H,2);{var O=G=>{var Ee=sr(),De=ce(Ee);Pe(De,{variant:"secondary",fullWidth:!0,onclick:oe,children:(Se,Be)=>{var Oe=be("Sign in with Google");r(Se,Oe)},$$slots:{default:!0}}),r(G,Ee)};K(A,G=>{e(j)&&G(O)})}r(ae,_e)};K(w,ae=>{e(B)?ae(I):ae(Y,-1)})}var J=u(w,2),q=s(J);{var V=ae=>{var _e=lr(),H=u(s(_e));Xe(H,{type:"text",required:!0,get value(){return e(o)},set value(A){g(o,A,!0)}}),r(ae,_e)};K(q,ae=>{e(a)==="signup"&&!e(B)&&ae(V)})}var U=u(q,2),X=u(s(U));Xe(X,{type:"email",required:!0,get value(){return e(c)},set value(ae){g(c,ae,!0)}});var W=u(U,2),Z=u(s(W));Xe(Z,{type:"password",required:!0,minlength:8,get value(){return e(v)},set value(ae){g(v,ae,!0)}});var F=u(W,2);Pe(F,{type:"submit",variant:"primary",fullWidth:!0,get disabled(){return e(m)},children:(ae,_e)=>{var H=be();M(()=>L(H,e(m)?"Working…":e(a)==="signup"&&!e(B)?"Create account":"Log in")),r(ae,H)},$$slots:{default:!0}});var te=u(J,2);{var re=ae=>{var _e=ur(),H=u(s(_e),2),A=s(H);M(()=>L(A,e(p))),r(ae,_e)};K(te,ae=>{e(p)&&ae(re)})}en("submit",J,ae=>{ae.preventDefault(),y()}),r(x,_)},Q=x=>{var _=fr(),w=s(_),I=s(w),Y=u(s(I));{var J=H=>{var A=be();M(()=>L(A,`— ${ge.orgName??""}`)),r(H,A)},q=H=>{var A=be();M(()=>L(A,`— tenant ${ge.tenantId??""}`)),r(H,A)};K(Y,H=>{ge.orgName?H(J):ge.tenantId&&H(q,1)})}var V=u(I,2);Pe(V,{variant:"secondary",onclick:k,children:(H,A)=>{var O=be("Log out");r(H,O)},$$slots:{default:!0}});var U=u(w,2),X=s(U);Pe(X,{variant:"secondary",onclick:ye,get disabled(){return e(z)},children:(H,A)=>{var O=be();M(()=>L(O,e(z)?"Regenerating…":"Regenerate API key")),r(H,O)},$$slots:{default:!0}});var W=u(X,4);{var Z=H=>{var A=cr(),O=u(s(A),2),G=s(O);M(()=>L(G,e(p))),r(H,A)};K(W,H=>{e(p)&&H(Z)})}var F=u(U,2);{let H=me(()=>e(m)||!Ke.current);Pe(F,{variant:"primary",fullWidth:!0,onclick:Re,get disabled(){return e(H)},children:(A,O)=>{var G=be();M(()=>L(G,e(m)?"Saving…":Ke.current?`Save "${Ke.current.title}" to your account`:"Open an example in Playground to save it")),r(A,G)},$$slots:{default:!0}})}var te=u(F,2),re=u(s(te),4);{var ae=H=>{var A=pr();r(H,A)},_e=H=>{var A=vr();Te(A,21,()=>e(D),O=>O.id,(O,G)=>{var Ee=mr(),De=s(Ee),Se=s(De),Be=s(Se),Oe=u(Se,2),Ye=s(Oe),rt=u(De,2),Qe=s(rt);Pe(Qe,{variant:"ghost",onclick:()=>ke(e(G)),children:(ot,un)=>{var dn=be("View");r(ot,dn)},$$slots:{default:!0}});var Dt=u(Qe,2);{var ea=ot=>{Pe(ot,{variant:"ghost",onclick:()=>le(e(G)),children:(un,dn)=>{var ta=be("Open in Studio →");r(un,ta)},$$slots:{default:!0}})};K(Dt,ot=>{e(G).format==="dmn-xml"&&ot(ea)})}M(()=>{L(Be,e(G).name),L(Ye,`v${e(G).version??""} · ${e(G).format??""}`)}),r(O,Ee)}),r(H,A)};K(re,H=>{e(D).length===0?H(ae):H(_e,-1)})}r(x,_)};K(R,x=>{ge.token?x(Q,-1):x(P)})}var fe=u(R,2);{var pe=x=>{var _=gr(),w=s(_);M(()=>L(w,e(E))),r(x,_)};K(fe,x=>{e(E)&&x(pe)})}r(S,T)},$$slots:{default:!0}});var ne=u(ue,2);{var xe=S=>{var f=xr(),T=s(f),R=s(T),P=s(R),Q=s(P),fe=u(P,2);Pe(fe,{variant:"secondary",onclick:ve,children:(I,Y)=>{var J=be("Close");r(I,J)},$$slots:{default:!0}});var pe=u(R,2);{var x=I=>{var Y=yr();r(I,Y)},_=I=>{var Y=hr(),J=s(Y);M(()=>L(J,e(C))),r(I,Y)},w=I=>{var Y=br(),J=s(Y);M(()=>L(J,e(d))),r(I,Y)};K(pe,I=>{e(N)?I(x):e(C)?I(_,1):I(w,-1)})}M(()=>{ie(T,"aria-label",`Viewing ${e(h).name}`),L(Q,e(h).name)}),de("click",f,ve),de("keydown",f,I=>{I.key==="Escape"&&ve()}),de("click",T,I=>I.stopPropagation()),r(S,f)};K(ne,S=>{e(h)&&S(xe)})}r(n,Me),Le()}Ge(["click","keydown"]);function Er(n,t){let i,a;try{const v=Vt(n,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),p=at,m=Vt(t,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),E=at,D=Ne.compile_ruleset(v,p,m,E);var o=D[0],c=D[1];if(D[3])throw o=0,c=0,Zn(D[2]);return i=o,a=c,Wt(o,c)}finally{Ne.__wbindgen_free(i,a,1)}}function Dr(n,t){let i,a;try{const v=Vt(n,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),p=at,m=Vt(t,Ne.__wbindgen_malloc,Ne.__wbindgen_realloc),E=at,D=Ne.evaluate_ruleset_with_trace(v,p,m,E);var o=D[0],c=D[1];if(D[3])throw o=0,c=0,Zn(D[2]);return i=o,a=c,Wt(o,c)}finally{Ne.__wbindgen_free(i,a,1)}}function Sr(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(t,i){throw new Error(Wt(t,i))},__wbg_getTime_7a770f8a2ec8d634:function(t){return t.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(t){return t.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(t){return new Date(t)},__wbindgen_cast_0000000000000001:function(t){return t},__wbindgen_cast_0000000000000002:function(t,i){return Wt(t,i)},__wbindgen_init_externref_table:function(){const t=Ne.__wbindgen_externrefs,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)}}}}function Wt(n,t){return kr(n>>>0,t)}let dt=null;function At(){return(dt===null||dt.byteLength===0)&&(dt=new Uint8Array(Ne.memory.buffer)),dt}function Vt(n,t,i){if(i===void 0){const p=vt.encode(n),m=t(p.length,1)>>>0;return At().subarray(m,m+p.length).set(p),at=p.length,m}let a=n.length,o=t(a,1)>>>0;const c=At();let v=0;for(;v<a;v++){const p=n.charCodeAt(v);if(p>127)break;c[o+v]=p}if(v!==a){v!==0&&(n=n.slice(v)),o=i(o,a,a=v+n.length*3,1)>>>0;const p=At().subarray(o+v,o+a),m=vt.encodeInto(n,p);v+=m.written,o=i(o,a,v,1)>>>0}return at=v,o}function Zn(n){const t=Ne.__wbindgen_externrefs.get(n);return Ne.__externref_table_dealloc(n),t}let Ot=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ot.decode();const Rr=2146435072;let Ht=0;function kr(n,t){return Ht+=t,Ht>=Rr&&(Ot=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),Ot.decode(),Ht=t),Ot.decode(At().subarray(n,n+t))}const vt=new TextEncoder;"encodeInto"in vt||(vt.encodeInto=function(n,t){const i=vt.encode(n);return t.set(i),{read:n.length,written:i.length}});let at=0,Ne;function Ir(n,t){return Ne=n.exports,dt=null,Ne.__wbindgen_start(),Ne}async function Mr(n,t){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,t)}catch(o){if(n.ok&&i(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const a=await n.arrayBuffer();return await WebAssembly.instantiate(a,t)}else{const a=await WebAssembly.instantiate(n,t);return a instanceof WebAssembly.Instance?{instance:a,module:n}:a}function i(a){switch(a){case"basic":case"cors":case"default":return!0}return!1}}async function Nr(n){if(Ne!==void 0)return Ne;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("/bre/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const t=Sr();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:i,module:a}=await Mr(await n,t);return Ir(i)}let Gt=null;function Tr(){return Gt||(Gt=Nr()),Gt}const Ar=Object.freeze(Object.defineProperty({__proto__:null,compile_ruleset:Er,ensureReady:Tr,evaluate_ruleset_with_trace:Dr},Symbol.toStringTag,{value:"Module"})),Or=qn(Ar),Cr={},Pr=Object.freeze(Object.defineProperty({__proto__:null,default:Cr},Symbol.toStringTag,{value:"Module"})),Tn=qn(Pr);var Yt,An;function jr(){if(An)return Yt;An=1;let n,t;try{n=Tn,t=Tn}catch{n=null,t=null}function i(c){const v=()=>t.join(t.dirname(c),"blobs");return{ready:Promise.resolve(),isSync:!0,readRawMetaFile(){return n.existsSync(c)?n.readFileSync(c,"utf8"):null},writeRawMetaFile(p){const m=t.dirname(c);n.existsSync(m)||n.mkdirSync(m,{recursive:!0}),n.writeFileSync(c,p,"utf8")},hasBlob(p){return n.existsSync(t.join(v(),`${p}.bin`))},readBlob(p){return n.readFileSync(t.join(v(),`${p}.bin`)).toString("utf8")},writeBlob(p,m){const E=v();n.existsSync(E)||n.mkdirSync(E,{recursive:!0}),n.writeFileSync(t.join(E,`${p}.bin`),m,"utf8")}}}function a(c){const v="bre-js-cache",m=`${c}::meta`,E=y=>`${c}::blob::${y}`;let D=null;const h=new Map;function d(){return new Promise((y,l)=>{const k=indexedDB.open(v,1);k.onupgradeneeded=()=>{k.result.objectStoreNames.contains("kv")||k.result.createObjectStore("kv")},k.onsuccess=()=>y(k.result),k.onerror=()=>l(k.error)})}function N(y,l){return new Promise((k,z)=>{const se=y.transaction("kv","readonly").objectStore("kv").get(l);se.onsuccess=()=>k(se.result),se.onerror=()=>z(se.error)})}function C(y,l){return new Promise((k,z)=>{const se=y.transaction("kv","readonly").objectStore("kv"),Re=IDBKeyRange.bound(l,l+"￿"),ke=new Map,ve=se.openCursor(Re);ve.onsuccess=()=>{const le=ve.result;if(!le){k(ke);return}ke.set(le.key.slice(l.length),le.value),le.continue()},ve.onerror=()=>z(ve.error)})}function j(y,l,k){return new Promise((z,ye)=>{const se=y.transaction("kv","readwrite");se.objectStore("kv").put(k,l),se.oncomplete=()=>z(),se.onerror=()=>ye(se.error)})}let B=null;function ee(){return B||(B=d()),B}return{ready:(async()=>{const y=await ee(),l=await N(y,m);l!==void 0&&(D=l);const k=`${c}::blob::`,z=await C(y,k);for(const[ye,se]of z)h.set(ye,se)})(),isSync:!1,readRawMetaFile(){return D},writeRawMetaFile(y){D=y,ee().then(l=>j(l,m,y)).catch(l=>{console.error("bre-js: failed to persist cache to IndexedDB:",l)})},hasBlob(y){return h.has(y)},readBlob(y){return h.get(y)},writeBlob(y,l){h.set(y,l),ee().then(k=>j(k,E(y),l)).catch(k=>{console.error("bre-js: failed to persist blob to IndexedDB:",k)})}}}function o(c){return typeof window<"u"&&typeof window.indexedDB<"u"?a(c):i(c)}return Yt={createCacheStore:o},Yt}var Qt,On;function qr(){if(On)return Qt;On=1;const n=Or,{parse:t,stringify:i}=ia(),a=ra(),{createCacheStore:o}=jr(),c={test:h=>a.isDecimal(h),stringify:h=>h.toString()};function v(h){if(/^-?\d+$/.test(h)){const d=Number(h);if(Number.isSafeInteger(d))return d}return new a(h)}function p(h){return t(h,void 0,{parseNumber:v})}function m(h,d){return i(h,void 0,d,[c])}class E{constructor({endpoint:d,apiKey:N,tenantId:C,cacheDbPath:j,syncIntervalMs:B=5e3,auditFlushIntervalMs:ee=5e3}){if(this.endpoint=d.replace(/\/$/,""),this.apiKey=N,this.tenantId=C||"default",this.cacheDbPath=j||"./bre_js_cache.json",this.syncIntervalMs=B,this.auditFlushIntervalMs=ee,this.rulesetCache={},this.rulesetsMeta={},this.auditQueue=[],this.syncInterval=null,this.auditInterval=null,this.store=o(this.cacheDbPath),this.store.isSync)this.loadLocalCache(),this.ready=Promise.resolve();else{const oe=n.ensureReady?n.ensureReady():Promise.resolve();this.ready=Promise.all([this.store.ready,oe]).then(()=>this.loadLocalCache())}}loadLocalCache(){try{const d=this.store.readRawMetaFile();if(d){const N=p(d);this.rulesetsMeta=N.rulesetsMeta||{},this.auditQueue=N.auditQueue||[];for(const[C,j]of Object.entries(this.rulesetsMeta))if(this.store.hasBlob(j.hash)){const B=this.store.readBlob(j.hash);let ee;j.format==="dmn-xml"?ee=B:ee=JSON.parse(B);try{const oe=n.compile_ruleset(j.format,JSON.stringify(ee));this.rulesetCache[C]=JSON.parse(oe)}catch(oe){console.error(`Failed to compile cached ruleset ${C}:`,oe)}}}}catch(d){console.error("Failed to load local cache:",d)}}saveLocalCache(){try{const d={rulesetsMeta:this.rulesetsMeta,auditQueue:this.auditQueue};this.store.writeRawMetaFile(m(d,2))}catch(d){console.error("Failed to save local cache:",d)}}async syncOnce(){const d={"X-API-Key":this.apiKey},N=await fetch(`${this.endpoint}/api/v1/rulesets`,{headers:d});if(!N.ok)throw new Error(`Server returned error: ${N.status}`);const C=await N.json();for(const j of C){const B=this.rulesetsMeta[j.name];if(!B||B.hash!==j.latest_hash){const ee=await fetch(`${this.endpoint}/api/v1/rulesets/blob/${j.latest_hash}`,{headers:d});if(!ee.ok)continue;const oe=ee.headers.get("X-Ruleset-Format")||j.format,y=new TextDecoder("utf-8").decode(await ee.arrayBuffer());this.store.writeBlob(j.latest_hash,y),this.rulesetsMeta[j.name]={id:j.id,name:j.name,version:j.version,format:oe,hash:j.latest_hash};let l;oe==="dmn-xml"?l=y:l=JSON.parse(y);try{const k=n.compile_ruleset(oe,JSON.stringify(l));this.rulesetCache[j.name]=JSON.parse(k)}catch(k){console.error(`Compile error for ${j.name}:`,k)}}}this.saveLocalCache()}evaluate(d,N){const C=this.rulesetCache[d],j=this.rulesetsMeta[d];if(!C||!j)throw new Error(`Ruleset not found in cache: ${d}`);try{const B=JSON.stringify(C),ee=m(N),oe=n.evaluate_ruleset_with_trace(B,ee),y=p(oe),l=y.result,k=y.trace;return this.queueAuditLog(d,N,l,!0,null,k),l}catch(B){const ee=B.message||String(B);throw this.queueAuditLog(d,N,null,!1,ee,{matched_rules:[],duration_us:0}),B}}queueAuditLog(d,N,C,j,B,ee){const oe=this.rulesetsMeta[d];oe&&(this.auditQueue.push({ruleset_id:oe.id,version:oe.version,definition_hash:oe.hash,inputs:N,outputs:C,success:j,error_message:B,trace_json:ee}),this.saveLocalCache())}async flushAuditLogs(){if(this.auditQueue.length===0)return;const d=[...this.auditQueue],N={"X-API-Key":this.apiKey,"Content-Type":"application/json"},C=await fetch(`${this.endpoint}/api/v1/analytics/logs`,{method:"POST",headers:N,body:m({logs:d})});if(C.ok)this.auditQueue=this.auditQueue.slice(d.length),this.saveLocalCache();else throw new Error(`Failed to upload audit logs: ${C.statusText}`)}startSyncLoops(){this.syncInterval=setInterval(()=>{this.syncOnce().catch(d=>console.error("JS Client sync failed:",d))},this.syncIntervalMs),this.auditInterval=setInterval(()=>{this.flushAuditLogs().catch(d=>console.error("JS Client audit flush failed:",d))},this.auditFlushIntervalMs)}close(){this.syncInterval&&clearInterval(this.syncInterval),this.auditInterval&&clearInterval(this.auditInterval)}}class D{constructor({policy:d={},defaultRoute:N="local",local:C,remote:j}={}){this.policy=d,this.defaultRoute=N,C instanceof E?this.localClient=C:C?this.localClient=new E(C):this.localClient=null,j?(this.remoteEndpoint=j.endpoint.replace(/\/$/,""),this.remoteApiKey=j.apiKey):(this.remoteEndpoint=null,this.remoteApiKey=null)}get ready(){return this.localClient?this.localClient.ready:Promise.resolve()}async syncOnce(){if(!this.localClient)throw new Error("SmartBreClient: no local client configured (pass `local` at construction) to sync");return this.localClient.syncOnce()}routeFor(d){return this.policy[d]||this.defaultRoute}async evaluate(d,N){const C=this.routeFor(d);if(C==="server"||C==="remote")return this.evaluateRemote(d,N);if(C==="local"){if(!this.localClient)throw new Error(`SmartBreClient: ruleset '${d}' is routed to 'local' but no local client is configured`);return this.localClient.evaluate(d,N)}throw new Error(`SmartBreClient: unknown route '${C}' for ruleset '${d}' (expected 'local' or 'server')`)}async evaluateRemote(d,N){if(!this.remoteEndpoint)throw new Error(`SmartBreClient: ruleset '${d}' is routed to 'server' but no remote config was provided (pass \`remote: { endpoint, apiKey }\` at construction)`);const C={"X-API-Key":this.remoteApiKey,"Content-Type":"application/json"},j=await fetch(`${this.remoteEndpoint}/api/v1/decide`,{method:"POST",headers:C,body:m({ruleSet:d,facts:N})});if(!j.ok)throw new Error(`Remote evaluate failed for '${d}': ${j.status} ${await j.text()}`);const B=p(await j.text());if(!B.success)throw new Error(`Remote evaluate failed for '${d}': ${B.error_message}`);return B.output_payload}close(){this.localClient&&this.localClient.close()}}return Qt={BreClient:E,SmartBreClient:D,Decimal:a},Qt}var Cn=qr(),Fr=b('<div class="cm-host svelte-1g4qxuv"></div>');function Lr(n,t){Fe(t,!0);let i=we(t,"value",15,""),a=we(t,"readOnly",3,!1),o,c=null;const v=Kt.theme({"&":{color:"var(--ink)",backgroundColor:"var(--bg)",fontSize:"12.5px",height:"100%"},".cm-content":{fontFamily:'ui-monospace, "SF Mono", Menlo, monospace',padding:"10px 0",caretColor:"var(--accent)"},".cm-gutters":{backgroundColor:"var(--bg)",color:"var(--muted)",border:"none"},".cm-activeLine":{backgroundColor:"var(--accent-wash)"},".cm-activeLineGutter":{backgroundColor:"var(--accent-wash)"},"&.cm-focused":{outline:"none"},".cm-scroller":{overflow:"auto",fontFamily:"inherit"},".cm-matchingBracket":{backgroundColor:"var(--accent-wash)",outline:"1px solid var(--accent)"}});Et(()=>{c=new Kt({parent:o,state:vn.create({doc:i(),extensions:[oa(),sa(),la(),ua(),da(),ca(),pa(ha,{fallback:!0}),ma({typescript:!0}),va.of([{key:"Mod-Enter",run:()=>{var m;return(m=t.onRun)==null||m.call(t),!0}},fa,...ga,..._a]),v,vn.readOnly.of(a()),Kt.updateListener.of(m=>{m.docChanged&&i(m.state.doc.toString())})]})})}),ya(()=>c==null?void 0:c.destroy()),et(()=>{c&&i()!==c.state.doc.toString()&&c.dispatch({changes:{from:0,to:c.state.doc.length,insert:i()}})});var p=Fr();Fn(p,m=>o=m,()=>o),r(n,p),Le()}var Br=b('<div class="panel-head svelte-1yde3g3"><h3 class="eyebrow svelte-1yde3g3">Code <span class="badge svelte-1yde3g3">editable</span></h3> <div class="actions svelte-1yde3g3"><button type="button" class="reset svelte-1yde3g3">Reset to example</button> <button type="button" class="run svelte-1yde3g3">Run <span class="hint svelte-1yde3g3">⌘/Ctrl+Enter</span></button></div></div> <div class="editor-host svelte-1yde3g3"><!></div>',1),Wr=b('<div class="error svelte-1yde3g3"> </div>'),Vr=b('<div class="result"><div class="result-label svelte-1yde3g3">your code returned</div> <pre class="result-json svelte-1yde3g3"> </pre></div>'),Ur=b('<h3 class="eyebrow svelte-1yde3g3">Facts</h3> <label class="svelte-1yde3g3">Debt-to-income ratio <!></label> <label class="svelte-1yde3g3">Credit score <!></label> <div class="status svelte-1yde3g3"> </div> <!> <!>',1),Kr=b(`<div class="sandbox svelte-1yde3g3"><h1 class="page-title">Try the JS / TS SDK</h1> <p class="lede svelte-1yde3g3">This runs the real <code class="svelte-1yde3g3">datalila-bre</code> npm package, unmodified — the same code you'd \`npm install\` — right here in
    your browser. A Service Worker intercepts its network calls and answers them from the in-browser WASM engine, so this is
    genuine SDK code executing, not a lookalike. No signup, no server round trip. The code below is a real, editable
    CodeMirror editor — edit it and hit Run to see real output (or a real error) from your own edit.</p> <div class="grid svelte-1yde3g3"><!> <!></div> <p class="cross-link svelte-1yde3g3">This is JS/TS only — see <strong class="svelte-1yde3g3">SDK Docs</strong> (above) for real, actually-run examples in the other 7 languages.</p></div>`);function zr(n,t){Fe(t,!0);let i=$("Registering local sandbox..."),a=$(!1),o=$(.28),c=$(780),v=$(null),p=$(null),m=null;const E=`// \`client\` is a real, already-connected datalila-bre BreClient --
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
return result;`;let D=$(E),h=me(()=>({dti:e(o),credit_score:e(c)}));async function d(){if(!("serviceWorker"in navigator)){g(p,"Service Workers are not available in this browser.");return}if(await navigator.serviceWorker.register("/bre/sdk-sandbox-sw.js",{scope:"/bre/"}),await navigator.serviceWorker.ready,!navigator.serviceWorker.controller){g(i,"First-time setup: reloading to activate the local sandbox..."),window.location.reload();return}}async function N(){if(m){g(p,null);try{const l=Object.getPrototypeOf(async function(){}).constructor,k=new l("client","facts",e(D));g(v,await k(m,e(h)),!0),g(i,"Done -- zero network calls left the browser.")}catch(l){g(v,null),g(p,(l==null?void 0:l.message)??String(l),!0),g(i,"Failed.")}}}function C(){g(D,E),N()}async function j(){g(p,null);try{g(i,"Running real datalila-bre code against the local sandbox..."),m=new Cn.BreClient({endpoint:"/bre/mock-api",apiKey:"sandbox-key"}),await m.ready,await m.syncOnce(),g(a,!0),await N()}catch(l){g(p,(l==null?void 0:l.message)??String(l),!0),g(i,"Failed.")}}Et(async()=>{var l;await d(),(l=navigator.serviceWorker)!=null&&l.controller&&await j()});var B=Kr(),ee=u(s(B),4),oe=s(ee);He(oe,{padding:"18px",class:"code-panel",children:(l,k)=>{var z=Br(),ye=ce(z),se=u(s(ye),2),Re=s(se),ke=u(Re,2),ve=u(ye,2),le=s(ve);Lr(le,{onRun:N,get value(){return e(D)},set value(Me){g(D,Me,!0)}}),M(()=>ke.disabled=!e(a)),de("click",Re,C),de("click",ke,N),r(l,z)},$$slots:{default:!0}});var y=u(oe,2);He(y,{padding:"18px",children:(l,k)=>{var z=Ur(),ye=u(ce(z),2),se=u(s(ye));Xe(se,{type:"number",step:"0.01",min:"0",max:"0.6",oninput:N,get value(){return e(o)},set value(S){g(o,S,!0)}});var Re=u(ye,2),ke=u(s(Re));Xe(ke,{type:"number",step:"5",min:"500",max:"850",oninput:N,get value(){return e(c)},set value(S){g(c,S,!0)}});var ve=u(Re,2),le=s(ve),Me=u(ve,2);{var ue=S=>{var f=Wr(),T=s(f);M(()=>L(T,e(p))),r(S,f)};K(Me,S=>{e(p)&&S(ue)})}var ne=u(Me,2);{var xe=S=>{var f=Vr(),T=u(s(f),2),R=s(T);M(P=>L(R,P),[()=>JSON.stringify(e(v),(P,Q)=>{var fe,pe;return(pe=(fe=Cn.Decimal).isDecimal)!=null&&pe.call(fe,Q)?Q.toString():Q},2)]),r(S,f)};K(ne,S=>{e(v)&&S(xe)})}M(()=>L(le,e(i))),r(l,z)},$$slots:{default:!0}}),r(n,B),Le()}Ge(["click"]);const kt=[{id:"rust",label:"Rust",packageName:"bre-core (path dependency -- no separate SDK crate)",language:"rust",sourcePath:"docs/sdk-examples/rust/src/main.rs",code:`use bre_core::Engine;
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
[remote / Mode A / bre-service REST] loyalty_discount    { years_as_customer: 1, orders_last_year: 2 } -> { discount_pct: 0, tier: 'standard' }`,note:'Every SDK already exposes both a local in-process call surface (Mode B) and a remote REST/gRPC call surface (Mode A); "mixing modes" per ruleset name within one application is already possible today with zero new engineering, purely a caller-side routing table. See docs/deployment-topologies.md (Mode C) for the full writeup, including two more advanced variants on the roadmap: a policy-driven "smart client" routing mode, and a true single-graph mixed-placement mode (via a remote-decision bridge).'}],Jr={rust:["use","fn","let","mut","pub","struct","impl","match","return","unwrap","expect"],javascript:["const","let","var","function","require","return","new","import","export"],typescript:["const","let","var","function","require","return","new","import","export","interface","declare","module","type"],python:["import","def","with","as","return","from","open","print"],go:["package","import","func","var","const","return","defer","map","interface","struct"],java:["public","class","static","void","new","import","return","throws","final"],kotlin:["val","var","fun","import","return"],clojure:["def","defn","import","let"]},Xr={rust:"//",javascript:"//",typescript:"//",python:"#",go:"//",java:"//",kotlin:"//",clojure:";"};function Zt(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const It=" ";function Hr(n,t){const i=Xr[t]??"//",a=n.indexOf(i),o=a>=0?n.slice(0,a):n,c=a>=0?n.slice(a):"",v=[],p=o.replace(/"[^"]*"|'[^']*'/g,h=>(v.push(h),It+"STR"+(v.length-1)+It));let m=Zt(p);m=m.replace(/\b(\d+\.?\d*)\b/g,'<span class="tok-num">$1</span>');const E=Jr[t]??[];if(E.length){const h=new RegExp(`\\b(${E.join("|")})\\b`,"g");m=m.replace(h,'<span class="tok-kw">$1</span>')}const D=new RegExp(It+"STR(\\d+)"+It,"g");return m=m.replace(D,(h,d)=>`<span class="tok-str">${Zt(v[Number(d)])}</span>`),c&&(m+=`<span class="tok-comment">${Zt(c)}</span>`),m}function Gr(n,t){return n.split(`
`).map(i=>Hr(i,t)).join(`
`)}var Yr=b('<p class="note svelte-65i1x3"> </p>'),Qr=b('<div class="panel-body svelte-65i1x3"><div class="panel-head svelte-65i1x3"><h2 class="svelte-65i1x3"> </h2> <span class="pkg mono svelte-65i1x3"> </span></div> <!> <h3 class="svelte-65i1x3"> </h3> <pre class="code mono svelte-65i1x3"><code class="svelte-65i1x3"></code></pre> <h3 class="svelte-65i1x3">Run it yourself</h3> <pre class="steps mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre> <h3 class="svelte-65i1x3">Actual output</h3> <pre class="output mono svelte-65i1x3"><code class="svelte-65i1x3"> </code></pre></div>'),Zr=b(`<div class="docs svelte-65i1x3"><div class="intro svelte-65i1x3"><h1 class="page-title">SDK examples</h1> <p class="svelte-65i1x3">One real, runnable example per language target, evaluating the same
      decision logic (dti / credit_score &rarr; approved / amount) so you can
      compare the same rules across all eight. Every example on this page was
      actually compiled and executed against this repo's real bindings before
      being written up here &mdash; the output shown is the exact output that
      run produced, not a hand-written guess.</p> <p class="mono small svelte-65i1x3">Shared DMN source: <code class="svelte-65i1x3">packages/dmn-examples/src/dmn/mortgage_eligibility.dmn</code> &middot; runnable copies of every example below live under <code class="svelte-65i1x3">docs/sdk-examples/</code> in the repo.</p></div> <nav aria-label="SDK language"><!></nav> <!></div>`);function $r(n,t){Fe(t,!0);let i=$(We(kt[0].id)),a=me(()=>kt.find(m=>m.id===e(i))??kt[0]);var o=Zr(),c=u(s(o),2),v=s(c);Bt(v,{bordered:!0,children:(m,E)=>{var D=qe(),h=ce(D);Te(h,17,()=>kt,d=>d.id,(d,N)=>{{let C=me(()=>e(N).id===e(i));ht(d,{get active(){return e(C)},onclick:()=>g(i,e(N).id,!0),children:(j,B)=>{var ee=be();M(()=>L(ee,e(N).label)),r(j,ee)},$$slots:{default:!0}})}}),r(m,D)},$$slots:{default:!0}});var p=u(c,2);He(p,{padding:"20px 22px",children:(m,E)=>{var D=Qr(),h=s(D),d=s(h),N=s(d),C=u(d,2),j=s(C),B=u(h,2);{var ee=le=>{var Me=Yr(),ue=s(Me);M(()=>L(ue,e(a).note)),r(le,Me)};K(B,le=>{e(a).note&&le(ee)})}var oe=u(B,2),y=s(oe),l=u(oe,2),k=s(l);Ln(k,()=>Gr(e(a).code,e(a).language),!0);var z=u(l,4),ye=s(z),se=s(ye),Re=u(z,4),ke=s(Re),ve=s(ke);M(le=>{L(N,e(a).label),L(j,e(a).packageName),L(y,`Example (${e(a).sourcePath??""})`),L(se,le),L(ve,e(a).output)},[()=>e(a).runSteps.join(`
`)]),r(m,D)},$$slots:{default:!0}}),r(n,o),Le()}const eo=`# Privacy Policy

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
`;var to=b('<div class="legal svelte-1gmktme"><!></div>');function $n(n,t){Fe(t,!0);let i=me(()=>ba.parse(t.markdown,{async:!1}));var a=to(),o=s(a);He(o,{padding:"20px 22px",children:(c,v)=>{var p=qe(),m=ce(p);Ln(m,()=>e(i)),r(c,p)},$$slots:{default:!0}}),r(n,a),Le()}function no(n){$n(n,{get markdown(){return eo}})}const ao=`# Terms of Service

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
`;function io(n){$n(n,{get markdown(){return ao}})}var ro=b('<div class="swagger-container svelte-1wcrydl"></div>'),oo=b('<div class="intro svelte-1wcrydl"><h1 class="svelte-1wcrydl">API Reference</h1> <p class="svelte-1wcrydl">The real bre-service REST API, live from its own OpenAPI spec. <!></p></div> <!>',1);function so(n,t){Fe(t,!1);const i="https://api.datalila.com";let a=wa();Et(async()=>{const[{default:h}]=await Promise.all([tn(()=>import("./vendor-DLcSBego.js").then(d=>d.s),__vite__mapDeps([0,1])),tn(()=>import("./vendor-DLcSBego.js").then(d=>d.ak),__vite__mapDeps([0,1]))]);h({url:`${i}/api-docs/openapi.json`,domNode:e(a),presets:[h.presets.apis],requestInterceptor:d=>(ge.token&&(d.headers.Authorization=`Bearer ${ge.token}`),d)})}),xa();var o=oo(),c=ce(o),v=u(s(c),2),p=u(s(v));{var m=h=>{var d=be('Signed in — "Try it out" calls below authenticate automatically as your account.');r(h,d)},E=h=>{var d=be('Not signed in — use "Authorize" below and paste an API key to make authenticated calls.');r(h,d)};K(p,h=>{ge.token?h(m):h(E,-1)})}var D=u(c,2);He(D,{children:(h,d)=>{var N=ro();Fn(N,C=>g(a,C),()=>e(a)),r(h,N)},$$slots:{default:!0}}),r(n,o),Le()}var $t=b('<div class="view-wrap svelte-1n46o8q"><!></div>'),lo=b("<!> <!>",1),uo=b('<p class="studio-loading svelte-1n46o8q">Loading Studio…</p>'),co=b("<div><!></div>"),po=b('<span class="build-info-detail svelte-1n46o8q">commit <code class="svelte-1n46o8q"></code> </span>'),mo=b('<header class="bar svelte-1n46o8q"><div><span class="word svelte-1n46o8q">Datalila <span class="accent svelte-1n46o8q">BRE</span></span> <span class="tag svelte-1n46o8q">A 100% OMG Compliant Business Rules Engine. Executing live in your browser.</span></div> <nav class="svelte-1n46o8q"><!> <!> <!> <!></nav></header> <main><!></main> <!> <footer>Running the actual Datalila BRE engine directly in your browser. Same code, same execution, zero server latency. <!> <span class="build-info">· <a>Privacy</a> · <a>Terms</a> · <button type="button" class="build-info-toggle svelte-1n46o8q">Build info</button> <!></span></footer>',1);function vo(n,t){Fe(t,!0);let i=$(!1);et(()=>{});const a={playground:"Playground","sdk-sandbox":"Try the JS / TS SDK",docs:"SDK examples",account:"Your account",studio:"Studio",privacy:"Privacy Policy",terms:"Terms of Service","api-docs":"API Reference"};et(()=>{document.title=`Datalila BRE — ${a[he.current]}`});let o=$(!1),c=$(null);et(()=>{he.current==="studio"&&!e(o)&&(g(o,!0),tn(()=>import("./index-C75nSUYr.js"),__vite__mapDeps([2,0,1,3])).then(R=>{g(c,R.StudioEditor,!0)}))});function v(){he.current==="playground"&&Ke.current&&(Gn({dmnXml:Ke.current.dmnXml,facts:Ke.facts}),he.bumpStudioHandoff())}var p=mo(),m=ce(p),E=u(s(m),2),D=s(E);{let R=me(()=>he.current==="studio"?Ce("playground"):Ce("studio")),P=me(()=>he.current==="studio"?"page":void 0);Pe(D,{variant:"secondary",class:"nav-button",get href(){return e(R)},get"aria-current"(){return e(P)},onclick:v,children:(Q,fe)=>{var pe=be();M(()=>L(pe,he.current==="studio"?"Back to Playground":"Open Studio")),r(Q,pe)},$$slots:{default:!0}})}var h=u(D,2);{let R=me(()=>he.current==="sdk-sandbox"?Ce("playground"):Ce("sdk-sandbox")),P=me(()=>he.current==="sdk-sandbox"?"page":void 0);Pe(h,{variant:"secondary",class:"nav-button",get href(){return e(R)},get"aria-current"(){return e(P)},children:(Q,fe)=>{var pe=be();M(()=>L(pe,he.current==="sdk-sandbox"?"Hide SDK Sandbox":"Try the JS/TS SDK")),r(Q,pe)},$$slots:{default:!0}})}var d=u(h,2);{let R=me(()=>he.current==="docs"?Ce("playground"):Ce("docs")),P=me(()=>he.current==="docs"?"page":void 0);Pe(d,{variant:"secondary",class:"nav-button",get href(){return e(R)},get"aria-current"(){return e(P)},children:(Q,fe)=>{var pe=be();M(()=>L(pe,he.current==="docs"?"Back to Playground":"SDK Docs")),r(Q,pe)},$$slots:{default:!0}})}var N=u(d,2);{var C=R=>{{let P=me(()=>he.current==="account"?Ce("playground"):Ce("account")),Q=me(()=>he.current==="account"?"page":void 0);Pe(R,{variant:"secondary",class:"nav-button",get href(){return e(P)},get"aria-current"(){return e(Q)},children:(fe,pe)=>{var x=qe(),_=ce(x);{var w=J=>{var q=be("Hide Account");r(J,q)},I=J=>{var q=be();M(()=>L(q,`Signed in${ge.orgName?` — ${ge.orgName}`:""}`)),r(J,q)},Y=J=>{var q=be("Sign in to save rulesets");r(J,q)};K(_,J=>{he.current==="account"?J(w):ge.token?J(I,1):J(Y,-1)})}r(fe,x)},$$slots:{default:!0}})}};K(N,R=>{R(C)})}var j=u(m,2);let B;var ee=s(j);{var oe=R=>{$r(R,{})},y=R=>{var P=$t(),Q=s(P);zr(Q,{}),r(R,P)},l=R=>{no(R)},k=R=>{io(R)},z=R=>{var P=$t(),Q=s(P);so(Q,{}),r(R,P)},ye=R=>{var P=lo(),Q=ce(P);{var fe=x=>{var _=$t(),w=s(_);wr(w,{}),r(x,_)};K(Q,x=>{he.current==="account"&&x(fe)})}var pe=u(Q,2);Yi(pe,{}),r(R,P)};K(ee,R=>{he.current==="docs"?R(oe):he.current==="sdk-sandbox"?R(y,1):he.current==="privacy"?R(l,2):he.current==="terms"?R(k,3):he.current==="api-docs"?R(z,4):R(ye,-1)})}var se=u(j,2);{var Re=R=>{var P=co();let Q;var fe=s(P);{var pe=_=>{var w=qe(),I=ce(w);Ea(I,()=>he.studioHandoffTick,Y=>{var J=qe(),q=ce(J);{let V=me(()=>Ce("api-docs"));Da(q,()=>e(c),(U,X)=>{X(U,{get apiDocsHref(){return e(V)}})})}r(Y,J)}),r(_,w)},x=_=>{var w=uo();r(_,w)};K(fe,_=>{e(c)?_(pe):_(x,-1)})}M(()=>Q=Ve(P,1,"studio-wrap svelte-1n46o8q",null,Q,{hidden:he.current!=="studio"})),r(R,P)};K(se,R=>{e(o)&&R(Re)})}var ke=u(se,2);let ve;var le=u(s(ke));{var Me=R=>{var P=be("Playing with examples requires no network overhead. (Signing in to save rulesets does.)");r(R,P)};K(le,R=>{R(Me)})}var ue=u(le,2),ne=u(s(ue)),xe=u(ne,2),S=u(xe,2),f=u(S,2);{var T=R=>{var P=po(),Q=u(s(P));ie(Q,"title","deddae77e9efbf1a9f2bf9b7c4a8ccf09522d384"),Q.textContent="deddae7";var fe=u(Q);fe.nodeValue=`,
        built 2026-07-26T16:06:01.166Z`,r(R,P)};K(f,R=>{e(i)&&R(T)})}M((R,P)=>{B=Ve(j,1,"svelte-1n46o8q",null,B,{hidden:he.current==="studio"}),ve=Ve(ke,1,"fine svelte-1n46o8q",null,ve,{hidden:he.current==="studio"}),ie(ne,"href",R),ie(xe,"href",P)},[()=>Ce("privacy"),()=>Ce("terms")]),de("click",S,()=>g(i,!e(i))),r(n,p),Le()}Ge(["click"]);Sa(vo,{target:document.getElementById("app")});export{Dn as D,Rt as E,wo as L,on as a,En as b,bo as c,_o as d,_n as e,Ha as i,xo as l,Ja as p,ho as s,yo as u};

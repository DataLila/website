var Qt=Object.defineProperty;var Mt=a=>{throw TypeError(a)};var Zt=(a,e,n)=>e in a?Qt(a,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[e]=n;var rt=(a,e,n)=>Zt(a,typeof e!="symbol"?e+"":e,n),$t=(a,e,n)=>e.has(a)||Mt("Cannot "+n);var ue=(a,e,n)=>($t(a,e,"read from private field"),n?n.call(a):e.get(a)),Ee=(a,e,n)=>e.has(a)?Mt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(a):e.set(a,n);import{s as J,g as t,a as h,p as Te,b as ct,c as en,d as Nt,e as Re,f as Ne,h as gt,i as o,j as i,k as G,l as me,m as c,t as I,n as j,o as De,q as Se,r as C,u as _e,v as we,w as It,x as Ie,y as he,z as tn,A as nn,B as g,C as Wt,D as re,E as yt,F as ze,P as Xt,G as st,H as Le,I as Jt,J as bt,K as Oe,L as an,M as xt,N as je,O as rn,Q as sn,R as vt,S as on,T as ln,U as dn}from"./vendor-BQplk2De.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const v of l.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();const Fe="https://www.omg.org/spec/DMN/20191111/MODEL/",Pe="https://www.omg.org/spec/DMN/20191111/DMNDI/",ot="https://www.omg.org/spec/DMN/20211108/MODEL/",Kt="https://www.omg.org/spec/DMN/20211108/DMNDI/",lt="https://www.omg.org/spec/DMN/20230324/MODEL/",Ht="https://www.omg.org/spec/DMN/20230324/DMNDI/",Ce="https://www.omg.org/spec/DMN/20250201/MODEL/",Yt="https://www.omg.org/spec/DMN/20250201/DMNDI/";let Ue=Ce;function un(a){return a&&(a.includes(Ce)?(Ue=Ce,a.replaceAll(Ce,Fe).replaceAll(Yt,Pe)):a.includes(lt)?(Ue=lt,a.replaceAll(lt,Fe).replaceAll(Ht,Pe)):a.includes(ot)?(Ue=ot,a.replaceAll(ot,Fe).replaceAll(Kt,Pe)):(Ue=Fe,a))}function cn(a,e){if(!a)return a;const n=Ue||Ce,s=n===Ce?Yt:n===lt?Ht:n===ot?Kt:Pe;return n===Fe?a:a.replaceAll(Fe,n).replaceAll(Pe,s)}function pt(a,e){let n,s;try{const v=Xe(a,ve.__wbindgen_malloc,ve.__wbindgen_realloc),f=qe,m=Xe(e,ve.__wbindgen_malloc,ve.__wbindgen_realloc),A=qe,U=ve.compile_ruleset(v,f,m,A);var r=U[0],l=U[1];if(U[3])throw r=0,l=0,Dt(U[2]);return n=r,s=l,We(r,l)}finally{ve.__wbindgen_free(n,s,1)}}function St(a,e){let n,s;try{const v=Xe(a,ve.__wbindgen_malloc,ve.__wbindgen_realloc),f=qe,m=Xe(e,ve.__wbindgen_malloc,ve.__wbindgen_realloc),A=qe,U=ve.evaluate_ruleset_with_trace(v,f,m,A);var r=U[0],l=U[1];if(U[3])throw r=0,l=0,Dt(U[2]);return n=r,s=l,We(r,l)}finally{ve.__wbindgen_free(n,s,1)}}function vn(a){let e,n;try{const l=Xe(a,ve.__wbindgen_malloc,ve.__wbindgen_realloc),v=qe,f=ve.lint_dmn_xml(l,v);var s=f[0],r=f[1];if(f[3])throw s=0,r=0,Dt(f[2]);return e=s,n=r,We(s,r)}finally{ve.__wbindgen_free(e,n,1)}}function pn(){return{__proto__:null,"./bre_core_bg.js":{__proto__:null,__wbg___wbindgen_throw_ea4887a5f8f9a9db:function(e,n){throw new Error(We(e,n))},__wbg_getTime_7a770f8a2ec8d634:function(e){return e.getTime()},__wbg_getTimezoneOffset_d6fba5332f80c3da:function(e){return e.getTimezoneOffset()},__wbg_new_0_1b32bedde98fef4b:function(){return new Date},__wbg_new_47ab770c8bd3b6bb:function(e){return new Date(e)},__wbindgen_cast_0000000000000001:function(e){return e},__wbindgen_cast_0000000000000002:function(e,n){return We(e,n)},__wbindgen_init_externref_table:function(){const e=ve.__wbindgen_externrefs,n=e.grow(4);e.set(0,void 0),e.set(n+0,void 0),e.set(n+1,null),e.set(n+2,!0),e.set(n+3,!1)}}}}function We(a,e){return mn(a>>>0,e)}let Be=null;function dt(){return(Be===null||Be.byteLength===0)&&(Be=new Uint8Array(ve.memory.buffer)),Be}function Xe(a,e,n){if(n===void 0){const f=Ve.encode(a),m=e(f.length,1)>>>0;return dt().subarray(m,m+f.length).set(f),qe=f.length,m}let s=a.length,r=e(s,1)>>>0;const l=dt();let v=0;for(;v<s;v++){const f=a.charCodeAt(v);if(f>127)break;l[r+v]=f}if(v!==s){v!==0&&(a=a.slice(v)),r=n(r,s,s=v+a.length*3,1)>>>0;const f=dt().subarray(r+v,r+s),m=Ve.encodeInto(a,f);v+=m.written,r=n(r,s,v,1)>>>0}return qe=v,r}function Dt(a){const e=ve.__wbindgen_externrefs.get(a);return ve.__externref_table_dealloc(a),e}let ut=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});ut.decode();const fn=2146435072;let ft=0;function mn(a,e){return ft+=e,ft>=fn&&(ut=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),ut.decode(),ft=e),ut.decode(dt().subarray(a,a+e))}const Ve=new TextEncoder;"encodeInto"in Ve||(Ve.encodeInto=function(a,e){const n=Ve.encode(a);return e.set(n),{read:a.length,written:n.length}});let qe=0,ve;function _n(a,e){return ve=a.exports,Be=null,ve.__wbindgen_start(),ve}async function hn(a,e){if(typeof Response=="function"&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(a,e)}catch(r){if(a.ok&&n(a.type)&&a.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const s=await a.arrayBuffer();return await WebAssembly.instantiate(s,e)}else{const s=await WebAssembly.instantiate(a,e);return s instanceof WebAssembly.Instance?{instance:s,module:a}:s}function n(s){switch(s){case"basic":case"cors":case"default":return!0}return!1}}async function gn(a){if(ve!==void 0)return ve;a!==void 0&&(Object.getPrototypeOf(a)===Object.prototype?{module_or_path:a}=a:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),a===void 0&&(a=new URL("/bre/studio/assets/bre_core_bg-C6Hq1jXb.wasm",import.meta.url));const e=pn();(typeof a=="string"||typeof Request=="function"&&a instanceof Request||typeof URL=="function"&&a instanceof URL)&&(a=fetch(a));const{instance:n,module:s}=await hn(await a,e);return _n(n)}var Je,Ke,He,Ye,Ge,Qe,Ze,$e,et,tt,nt,at,it;class yn{constructor(){Ee(this,Je,J(""));Ee(this,Ke,J(Te([])));Ee(this,He,J(Te([])));Ee(this,Ye,J(null));Ee(this,Ge,J(null));Ee(this,Qe,J(!1));Ee(this,Ze,J(!1));Ee(this,$e,J(null));Ee(this,et,J(Te([])));Ee(this,tt,J(-1));Ee(this,nt,J(0));Ee(this,at,J(Te([])));Ee(this,it,J(!1));rt(this,"wasmReady");this.wasmReady=this.initWasm()}get xml(){return t(ue(this,Je))}set xml(e){h(ue(this,Je),e,!0)}get inputs(){return t(ue(this,Ke))}set inputs(e){h(ue(this,Ke),e,!0)}get outputs(){return t(ue(this,He))}set outputs(e){h(ue(this,He),e,!0)}get evaluationResult(){return t(ue(this,Ye))}set evaluationResult(e){h(ue(this,Ye),e,!0)}get evaluationTrace(){return t(ue(this,Ge))}set evaluationTrace(e){h(ue(this,Ge),e,!0)}get wasmLoaded(){return t(ue(this,Qe))}set wasmLoaded(e){h(ue(this,Qe),e,!0)}get isEvaluating(){return t(ue(this,Ze))}set isEvaluating(e){h(ue(this,Ze),e,!0)}get errorMessage(){return t(ue(this,$e))}set errorMessage(e){h(ue(this,$e),e,!0)}get history(){return t(ue(this,et))}set history(e){h(ue(this,et),e,!0)}get activeRunIndex(){return t(ue(this,tt))}set activeRunIndex(e){h(ue(this,tt),e,!0)}get rulesCount(){return t(ue(this,nt))}set rulesCount(e){h(ue(this,nt),e,!0)}get lintWarnings(){return t(ue(this,at))}set lintWarnings(e){h(ue(this,at),e,!0)}get lintPanelVisible(){return t(ue(this,it))}set lintPanelVisible(e){h(ue(this,it),e,!0)}async initWasm(){try{await gn(),this.wasmLoaded=!0}catch(e){console.error("Failed to initialize rules engine WebAssembly:",e),this.errorMessage="Failed to load WebAssembly engine"}}async loadDmnXml(e,n={}){var r,l;this.errorMessage=null,this.history=[],this.activeRunIndex=-1,this.rulesCount=0,this.evaluationResult=null,this.evaluationTrace=null;const s=un(e);if(this.xml=s,await this.wasmReady,!!this.wasmLoaded){this.lintWarnings=[];try{this.lintWarnings=JSON.parse(vn(s))}catch(v){console.warn("DMN lint pass failed (non-blocking):",v)}n.showLintPanel===!1?this.lintWarnings.length===0&&(this.lintPanelVisible=!1):this.lintPanelVisible=this.lintWarnings.length>0;try{const v=pt("dmn-xml",JSON.stringify(s)),f=JSON.parse(v);if(f&&f.kind==="decision_table"){const m=f;this.rulesCount=m.rules?m.rules.length:0,this.inputs=m.inputs.map(A=>{const U=this.inputs.find(W=>W.name===A.name);return{name:A.name,type:A.type_ref||"Any",value:U?U.value:this.getDefaultValue(A.type_ref),isOverride:!1,overrideActive:!1}}),this.outputs=m.outputs.map(A=>({name:A.name,type:A.type_ref||"Any"}))}else if(f&&f.kind==="decision_graph"){const m=f,A=new Set(Object.keys(m.nodes)),U=new Set,W=[];for(const R of Object.keys(m.nodes)){const y=m.nodes[R];if(y.logic){const k=y.logic.kind==="decision_table"||y.logic.kind==="expression"?y.logic.name:"",B=y.logic.kind==="decision_table"?((l=(r=y.logic.outputs)==null?void 0:r[0])==null?void 0:l.type_ref)||"Any":y.logic.kind==="expression"&&y.logic.type_ref||"Any";k&&(U.add(k),R!==m.terminal_node_id&&W.push({name:k,typeRef:B}))}}const oe=[],P=new Set;for(const R of Object.keys(m.nodes)){const y=m.nodes[R];if(y.logic&&y.logic.kind==="decision_table"){for(const k of y.logic.inputs)if(!A.has(k.name)&&!U.has(k.name)&&!P.has(k.name)){P.add(k.name);const B=this.inputs.find(z=>z.name===k.name);oe.push({name:k.name,type:k.type_ref||"Any",value:B?B.value:this.getDefaultValue(k.type_ref),isOverride:!1,overrideActive:!1})}}}for(const R of W)if(!P.has(R.name)){P.add(R.name);const y=this.inputs.find(k=>k.name===R.name);oe.push({name:R.name,type:R.typeRef,value:y?y.value:this.getDefaultValue(R.typeRef),isOverride:!0,overrideActive:y?!!y.overrideActive:!1})}this.inputs=oe;const $=m.nodes[m.terminal_node_id];$&&$.logic&&$.logic.kind==="decision_table"?(this.rulesCount=$.logic.rules?$.logic.rules.length:0,this.outputs=$.logic.outputs.map(R=>({name:R.name,type:R.type_ref||"Any"}))):(this.rulesCount=0,this.outputs=[])}else this.inputs=[],this.outputs=[],this.rulesCount=0}catch(v){console.warn("WASM compiler could not parse ruleset structure:",v)}}}getDefaultValue(e){switch(e==null?void 0:e.toLowerCase()){case"number":return 0;case"boolean":return!0;case"string":return"";default:return""}}async evaluateLocal(){if(!this.wasmLoaded||!this.xml){this.errorMessage="Engine or ruleset not loaded";return}this.isEvaluating=!0,this.errorMessage=null,this.evaluationResult=null,this.evaluationTrace=null;try{const e=pt("dmn-xml",JSON.stringify(this.xml)),n={};for(const v of this.inputs)v.isOverride&&!v.overrideActive||(n[v.name]=this.castValue(v.value,v.type));const s=St(e,JSON.stringify(n)),r=JSON.parse(s);if(console.log("Trace Result from WASM:",JSON.stringify(r)),this.evaluationResult=r.result,this.evaluationTrace=r.trace,this.evaluationTrace&&this.evaluationTrace.intermediates){for(const v of this.inputs)if(v.isOverride&&!v.overrideActive){const f=this.evaluationTrace.intermediates[v.name];f!==void 0&&(v.value=f)}this.inputs=[...this.inputs]}const l={timestamp:new Date().toLocaleTimeString(),inputs:ct(this.inputs),outputs:ct(this.evaluationResult),trace:ct(this.evaluationTrace)};this.history.unshift(l),this.history.length>50&&this.history.pop(),this.activeRunIndex=0}catch(e){console.error("WASM Evaluation failed:",e),this.errorMessage=e.toString()||"Evaluation error"}finally{this.isEvaluating=!1}}evaluateBatch(e){if(!this.wasmLoaded||!this.xml)throw new Error("Engine or ruleset not loaded");const n=pt("dmn-xml",JSON.stringify(this.xml)),s=new Map(this.inputs.map(r=>[r.name,r.type]));return e.map(r=>{var v;const l={};for(const[f,m]of Object.entries(r))l[f]=this.castValue(m,s.get(f)||"string");try{const f=St(n,JSON.stringify(l)),m=JSON.parse(f);return{input:r,output:m.result,durationUs:(v=m.trace)==null?void 0:v.duration_us}}catch(f){return{input:r,error:(f==null?void 0:f.message)||String(f)}}})}loadHistoryRun(e){if(e>=0&&e<this.history.length){this.activeRunIndex=e;const n=this.history[e];this.inputs=JSON.parse(JSON.stringify(n.inputs)),this.evaluationResult=n.outputs,this.evaluationTrace=n.trace}}get hitmap(){const e={};let n=0;for(const s of this.history)if(s.trace&&s.trace.matched_rules)for(const r of s.trace.matched_rules)e[r]=(e[r]||0)+1,e[r]>n&&(n=e[r]);return{counts:e,maxCount:n}}castValue(e,n){if(e===""||e===null||e===void 0)return null;switch(n==null?void 0:n.toLowerCase()){case"number":const s=Number(e);return isNaN(s)?0:s;case"boolean":return e==="true"||e===!0;default:return e.toString()}}getExportXml(e){return cn(e)}dismissLintPanel(){this.lintPanelVisible=!1}async applyLintFix(e){let n=-1,s=0;for(;;){if(n=this.xml.indexOf(e.original,n+1),n===-1)return!1;if(s===e.match_index){const r=this.xml.slice(0,n)+e.replacement+this.xml.slice(n+e.original.length);return await this.loadDmnXml(r,{showLintPanel:!1}),!0}s++}}}Je=new WeakMap,Ke=new WeakMap,He=new WeakMap,Ye=new WeakMap,Ge=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,$e=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,at=new WeakMap,it=new WeakMap;const O=new yn;typeof window<"u"&&(window.dmnState=O);const Rt=new en;async function bn(a){const{rootElement:e}=await Rt.fromXML(a);return e}async function Tt(a){const{xml:e}=await Rt.toXML(a,{format:!0});return e}function Ae(a,e={}){return Rt.create(a,e)}const xn=["UNIQUE","FIRST","PRIORITY","ANY","COLLECT","RULE ORDER","OUTPUT ORDER"];function wt(a){return a.get("drgElement")||[]}function Ot(a){return a.$type==="dmn:Decision"}function wn(a){const e=a.get("decisionLogic");return e&&e.$type==="dmn:DecisionTable"?e:null}function En(a){const e=a.get("decisionLogic");return e&&e.$type==="dmn:LiteralExpression"?e:null}function Dn(a){const e=[],n=s=>s.replace(/^#/,"");for(const s of a.get("informationRequirement")||[]){const r=s.get("requiredInput")||s.get("requiredDecision");r&&r.href&&e.push(n(r.href))}for(const s of a.get("knowledgeRequirement")||[]){const r=s.get("requiredKnowledge");r&&r.href&&e.push(n(r.href))}return e}const mt={"dmn:Decision":"decision","dmn:InputData":"inputData","dmn:BusinessKnowledgeModel":"bkm","dmn:KnowledgeSource":"knowledgeSource"},At={decision:{width:160,height:60},inputData:{width:140,height:50},bkm:{width:150,height:50},knowledgeSource:{width:140,height:50}};function Rn(a){const e=wt(a),n=new Nt.graphlib.Graph;n.setGraph({rankdir:"BT",nodesep:40,ranksep:60}),n.setDefaultEdgeLabel(()=>({}));for(const m of e){const A=mt[m.$type];if(!A)continue;const U=At[A];n.setNode(m.id,{...U})}const s=[];for(const m of e)if(mt[m.$type])for(const A of Dn(m))n.node(A)&&(n.setEdge(A,m.id),s.push([A,m.id]));Nt.layout(n);const r=[];let l=0,v=0;for(const m of e){const A=mt[m.$type];if(!A)continue;const U=n.node(m.id),W=At[A];r.push({id:m.id,name:m.get("name")||m.id,type:A,x:U.x-W.width/2,y:U.y-W.height/2,width:W.width,height:W.height,element:m}),l=Math.max(l,U.x+W.width/2),v=Math.max(v,U.y+W.height/2)}const f=s.map(([m,A])=>{var U;return{from:m,to:A,points:(((U=n.edge(m,A))==null?void 0:U.points)||[]).map(W=>({x:W.x,y:W.y}))}});return{nodes:r,edges:f,width:l+40,height:v+40}}var kn=g('<span class="dt-hitpolicy-static svelte-1qozfr"> </span>'),Mn=g("<option> </option>"),Nn=g('<select class="svelte-1qozfr"></select>'),In=g('<button type="button" class="svelte-1qozfr">+ Input</button> <button type="button" class="svelte-1qozfr">+ Output</button> <button type="button" class="svelte-1qozfr">+ Rule</button>',1),Lt=g('<div class="dt-col-label svelte-1qozfr"> </div>'),Sn=g('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="FEEL variable"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),Tn=g('<th class="dt-input-col svelte-1qozfr"><!></th>'),On=g('<input class="dt-col-label svelte-1qozfr" placeholder="Label"/> <input class="dt-col-expr svelte-1qozfr" placeholder="variable name"/> <div class="dt-col-footer svelte-1qozfr"><input class="dt-col-type svelte-1qozfr" placeholder="type"/> <button type="button" class="dt-col-remove svelte-1qozfr" title="Remove column">&times;</button></div>',1),An=g('<th class="dt-output-col svelte-1qozfr"><!></th>'),Ln=g('<button type="button" class="dt-row-remove svelte-1qozfr" title="Remove rule">&times;</button>'),qt=g('<input class="svelte-1qozfr"/>'),Ft=g('<td class="svelte-1qozfr"><!></td>'),qn=g('<tr><td class="dt-rownum svelte-1qozfr"> <!></td><!><!></tr>'),Fn=g('<div class="dt-editor svelte-1qozfr"><div class="dt-toolbar svelte-1qozfr"><label class="svelte-1qozfr">Hit policy <!></label> <!></div> <div class="dt-table-scroll svelte-1qozfr"><table><thead><tr><th class="dt-rownum svelte-1qozfr"></th><!><!></tr></thead><tbody></tbody></table></div></div>');function Cn(a,e){Ne(e,!0);let n=gt(e,"readonly",3,!1),s=gt(e,"matchedRuleIndices",19,()=>[]),r=he(()=>e.decision.get("decisionLogic")),l=he(()=>t(r).get("input")),v=he(()=>t(r).get("output")),f=he(()=>t(r).get("rule"));function m(x){var _;t(r).set("hitPolicy",x),(_=e.onchange)==null||_.call(e)}function A(x,_){var E;x.set("label",_),(E=e.onchange)==null||E.call(e)}function U(x,_){var E;x.get("inputExpression").set("text",_),(E=e.onchange)==null||E.call(e)}function W(x,_){var E;x.get("inputExpression").set("typeRef",_),(E=e.onchange)==null||E.call(e)}function oe(x,_){var E;x.set("name",_),(E=e.onchange)==null||E.call(e)}function P(x,_){var E;x.set("label",_),(E=e.onchange)==null||E.call(e)}function $(x,_){var E;x.set("typeRef",_),(E=e.onchange)==null||E.call(e)}function R(x,_,E){var M;x.get("inputEntry")[_].set("text",E),(M=e.onchange)==null||M.call(e)}function y(x,_,E){var M;x.get("outputEntry")[_].set("text",E),(M=e.onchange)==null||M.call(e)}function k(){var E;const x=Ae("dmn:LiteralExpression",{text:""}),_=Ae("dmn:InputClause",{label:"New Input",inputExpression:x});t(r).get("input").push(_);for(const M of t(f))M.get("inputEntry").push(Ae("dmn:UnaryTests",{text:"-"}));(E=e.onchange)==null||E.call(e)}function B(x){var _;t(r).get("input").splice(x,1);for(const E of t(f))E.get("inputEntry").splice(x,1);(_=e.onchange)==null||_.call(e)}function z(){var _;const x=Ae("dmn:OutputClause",{name:"new_output",label:"New Output",typeRef:"string"});t(r).get("output").push(x);for(const E of t(f))E.get("outputEntry").push(Ae("dmn:LiteralExpression",{text:'""'}));(_=e.onchange)==null||_.call(e)}function d(x){var _;t(r).get("output").splice(x,1);for(const E of t(f))E.get("outputEntry").splice(x,1);(_=e.onchange)==null||_.call(e)}function q(){var E;const x=t(l).map(()=>Ae("dmn:UnaryTests",{text:"-"})),_=t(v).map(()=>Ae("dmn:LiteralExpression",{text:'""'}));t(r).get("rule").push(Ae("dmn:DecisionRule",{inputEntry:x,outputEntry:_})),(E=e.onchange)==null||E.call(e)}function D(x){var _;t(r).get("rule").splice(x,1),(_=e.onchange)==null||_.call(e)}var Q=Fn(),ae=i(Q),ee=i(ae),ce=o(i(ee));{var K=x=>{var _=kn(),E=i(_);I(M=>j(E,M),[()=>t(r).get("hitPolicy")||"UNIQUE"]),c(x,_)},le=x=>{var _=Nn();me(_,21,()=>xn,_e,(M,te)=>{var de=Mn(),pe=i(de),V={};I(()=>{j(pe,t(te)),V!==(V=t(te))&&(de.value=(de.__value=t(te))??"")}),c(M,de)});var E;tn(_),I(M=>{E!==(E=M)&&(_.value=(_.__value=M)??"",nn(_,M))},[()=>t(r).get("hitPolicy")||"UNIQUE"]),C("change",_,M=>m(M.currentTarget.value)),c(x,_)};G(ce,x=>{n()?x(K):x(le,-1)})}var fe=o(ee,2);{var ne=x=>{var _=In(),E=De(_),M=o(E,2),te=o(M,2);C("click",E,k),C("click",M,z),C("click",te,q),c(x,_)};G(fe,x=>{n()||x(ne)})}var Z=o(ae,2),b=i(Z);let p;var S=i(b),T=i(S),N=o(i(T));me(N,17,()=>t(l),_e,(x,_,E)=>{var M=Tn(),te=i(M);{var de=V=>{var X=Lt(),u=i(X);I(w=>j(u,w),[()=>t(_).get("label")||""]),c(V,X)},pe=V=>{var X=Sn(),u=De(X),w=o(u,2),F=o(w,2),L=i(F),ie=o(L,2);I((Y,ge,ye)=>{Se(u,Y),Se(w,ge),Se(L,ye)},[()=>t(_).get("label")||"",()=>t(_).get("inputExpression").get("text")||"",()=>t(_).get("inputExpression").get("typeRef")||""]),C("input",u,Y=>A(t(_),Y.currentTarget.value)),C("input",w,Y=>U(t(_),Y.currentTarget.value)),C("input",L,Y=>W(t(_),Y.currentTarget.value)),C("click",ie,()=>B(E)),c(V,X)};G(te,V=>{n()?V(de):V(pe,-1)})}c(x,M)});var H=o(N);me(H,17,()=>t(v),_e,(x,_,E)=>{var M=An(),te=i(M);{var de=V=>{var X=Lt(),u=i(X);I(w=>j(u,w),[()=>t(_).get("label")||""]),c(V,X)},pe=V=>{var X=On(),u=De(X),w=o(u,2),F=o(w,2),L=i(F),ie=o(L,2);I((Y,ge,ye)=>{Se(u,Y),Se(w,ge),Se(L,ye)},[()=>t(_).get("label")||"",()=>t(_).get("name")||"",()=>t(_).get("typeRef")||""]),C("input",u,Y=>P(t(_),Y.currentTarget.value)),C("input",w,Y=>oe(t(_),Y.currentTarget.value)),C("input",L,Y=>$(t(_),Y.currentTarget.value)),C("click",ie,()=>d(E)),c(V,X)};G(te,V=>{n()?V(de):V(pe,-1)})}c(x,M)});var se=o(S);me(se,21,()=>t(f),_e,(x,_,E)=>{var M=qn();let te;var de=i(M),pe=i(de);pe.nodeValue=`${E+1} `;var V=o(pe);{var X=F=>{var L=Ln();C("click",L,()=>D(E)),c(F,L)};G(V,F=>{n()||F(X)})}var u=o(de);me(u,17,()=>t(_).get("inputEntry"),_e,(F,L,ie)=>{var Y=Ft(),ge=i(Y);{var ye=be=>{var xe=It();I(Me=>j(xe,Me),[()=>t(L).get("text")||"-"]),c(be,xe)},ke=be=>{var xe=qt();I(Me=>Se(xe,Me),[()=>t(L).get("text")||""]),C("input",xe,Me=>R(t(_),ie,Me.currentTarget.value)),c(be,xe)};G(ge,be=>{n()?be(ye):be(ke,-1)})}c(F,Y)});var w=o(u);me(w,17,()=>t(_).get("outputEntry"),_e,(F,L,ie)=>{var Y=Ft(),ge=i(Y);{var ye=be=>{var xe=It();I(Me=>j(xe,Me),[()=>t(L).get("text")||""]),c(be,xe)},ke=be=>{var xe=qt();I(Me=>Se(xe,Me),[()=>t(L).get("text")||""]),C("input",xe,Me=>y(t(_),ie,Me.currentTarget.value)),c(be,xe)};G(ge,be=>{n()?be(ye):be(ke,-1)})}c(F,Y)}),I(F=>te=we(M,1,"svelte-1qozfr",null,te,F),[()=>({matched:s().includes(E)})]),c(x,M)}),I(()=>p=we(b,1,"dt-table svelte-1qozfr",null,p,{readonly:n()})),c(a,Q),Ie()}Re(["change","click","input"]);var zn=g('<span class="le-type-static svelte-125hirw"> </span>'),jn=g('<input placeholder="e.g. number" class="svelte-125hirw"/>'),Un=g('<pre class="le-textarea le-static svelte-125hirw"> </pre>'),Bn=g('<textarea class="le-textarea svelte-125hirw" placeholder="FEEL expression, e.g. 400 * age_factor * claims_factor" spellcheck="false"></textarea>'),Pn=g('<div class="le-editor svelte-125hirw"><div class="le-toolbar svelte-125hirw"><label class="svelte-125hirw">Result type <!></label></div> <!></div>');function Vn(a,e){Ne(e,!0);let n=gt(e,"readonly",3,!1),s=he(()=>e.decision.get("decisionLogic"));function r(R){var y;t(s).set("text",R),(y=e.onchange)==null||y.call(e)}function l(R){var k;const y=e.decision.get("variable");y&&(y.set("typeRef",R),(k=e.onchange)==null||k.call(e))}var v=Pn(),f=i(v),m=i(f),A=o(i(m));{var U=R=>{var y=zn(),k=i(y);I(B=>j(k,B),[()=>{var B;return((B=e.decision.get("variable"))==null?void 0:B.get("typeRef"))||""}]),c(R,y)},W=R=>{var y=jn();I(k=>Se(y,k),[()=>{var k;return((k=e.decision.get("variable"))==null?void 0:k.get("typeRef"))||""}]),C("input",y,k=>l(k.currentTarget.value)),c(R,y)};G(A,R=>{n()?R(U):R(W,-1)})}var oe=o(f,2);{var P=R=>{var y=Un(),k=i(y);I(B=>j(k,B),[()=>t(s).get("text")||""]),c(R,y)},$=R=>{var y=Bn();I(k=>Se(y,k),[()=>t(s).get("text")||""]),C("input",y,k=>r(k.currentTarget.value)),c(R,y)};G(oe,R=>{n()?R(P):R($,-1)})}c(a,v),Ie()}Re(["input"]);var Wn=ze('<path fill="none" stroke="var(--muted)" stroke-width="1.5" marker-end="url(#drd-arrow)"></path>'),Xn=ze('<rect rx="24" ry="24" class="svelte-1jgcg8n"></rect>'),Jn=ze('<rect rx="4" ry="4" class="svelte-1jgcg8n"></rect>'),Kn=ze('<text text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="600" fill="var(--ink)"> </text><text text-anchor="middle" dominant-baseline="middle" font-size="13" font-weight="700" fill="var(--accent)"> </text>',1),Hn=ze('<text text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="var(--ink)"> </text>'),Yn=ze('<g role="button" tabindex="0"><!><!></g>'),Gn=g('<div class="drd-wrap svelte-1jgcg8n"><svg class="drd-svg svelte-1jgcg8n" role="application" aria-label="Decision requirements diagram, drag to pan, scroll to zoom"><defs><marker id="drd-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="var(--muted)"></path></marker></defs><!><!></svg></div>');function Qn(a,e){Ne(e,!0);let n=he(()=>Rn(e.definitions)),s=J(Te({x:0,y:0,w:800,h:500})),r=J(!1),l={x:0,y:0},v={x:0,y:0};Wt(()=>{h(s,{x:0,y:0,w:Math.max(t(n).width,400),h:Math.max(t(n).height,300)},!0)});function f(z){z.preventDefault();const d=z.deltaY>0?1.1:.9,q=Math.max(200,Math.min(4e3,t(s).w*d)),D=Math.max(150,Math.min(3e3,t(s).h*d));h(s,{...t(s),w:q,h:D},!0)}function m(z){z.target.closest(".drd-node")||(h(r,!0),l={x:z.clientX,y:z.clientY},v={x:t(s).x,y:t(s).y})}function A(z,d){if(!t(r))return;const q=t(s).w/d.clientWidth;h(s,{...t(s),x:v.x-(z.clientX-l.x)*q,y:v.y-(z.clientY-l.y)*q},!0)}function U(){h(r,!1)}function W(z){switch(z){case"decision":return"var(--accent-wash)";case"inputData":return"var(--good-wash)";case"bkm":return"var(--stamp-wash)";default:return"var(--bg)"}}function oe(z){switch(z){case"decision":return"var(--accent)";case"inputData":return"var(--good)";case"bkm":return"var(--stamp)";default:return"var(--muted)"}}function P(z){return z.points.length?z.points.map((d,q)=>`${q===0?"M":"L"} ${d.x} ${d.y}`).join(" "):""}function $(z){if(!e.nodeValues)return null;const d=z.id in e.nodeValues?e.nodeValues[z.id]:e.nodeValues[z.name];return d===void 0?null:e.formatNodeValue?e.formatNodeValue(z.id,d):String(d)}var R=Gn(),y=i(R),k=o(i(y));me(k,17,()=>t(n).edges,_e,(z,d)=>{var q=Wn();I(D=>re(q,"d",D),[()=>P(t(d))]),c(z,q)});var B=o(k);me(B,17,()=>t(n).nodes,_e,(z,d)=>{const q=he(()=>$(t(d)));var D=Yn();let Q;var ae=i(D);{var ee=ne=>{var Z=Xn();I((b,p)=>{re(Z,"x",t(d).x),re(Z,"y",t(d).y),re(Z,"width",t(d).width),re(Z,"height",t(d).height),re(Z,"fill",b),re(Z,"stroke",p),re(Z,"stroke-width",t(d).id===e.activeId?2.5:1.5)},[()=>W(t(d).type),()=>oe(t(d).type)]),c(ne,Z)},ce=ne=>{var Z=Jn();I((b,p)=>{re(Z,"x",t(d).x),re(Z,"y",t(d).y),re(Z,"width",t(d).width),re(Z,"height",t(d).height),re(Z,"fill",b),re(Z,"stroke",p),re(Z,"stroke-width",t(d).id===e.activeId?2.5:1.5)},[()=>W(t(d).type),()=>oe(t(d).type)]),c(ne,Z)};G(ae,ne=>{t(d).type==="inputData"?ne(ee):ne(ce,-1)})}var K=o(ae);{var le=ne=>{var Z=Kn(),b=De(Z),p=i(b),S=o(b),T=i(S);I(()=>{re(b,"x",t(d).x+t(d).width/2),re(b,"y",t(d).y+t(d).height*.4),j(p,t(d).name),re(S,"x",t(d).x+t(d).width/2),re(S,"y",t(d).y+t(d).height*.68),j(T,t(q))}),c(ne,Z)},fe=ne=>{var Z=Hn(),b=i(Z);I(()=>{re(Z,"x",t(d).x+t(d).width/2),re(Z,"y",t(d).y+t(d).height/2),j(b,t(d).name)}),c(ne,Z)};G(K,ne=>{t(q)!==null?ne(le):ne(fe,-1)})}I(()=>Q=we(D,0,"drd-node svelte-1jgcg8n",null,Q,{active:t(d).id===e.activeId,static:!e.onselect})),C("click",D,()=>{var ne;return(ne=e.onselect)==null?void 0:ne.call(e,t(d).id)}),C("keydown",D,ne=>{var Z;return ne.key==="Enter"&&((Z=e.onselect)==null?void 0:Z.call(e,t(d).id))}),c(z,D)}),I(()=>re(y,"viewBox",`${t(s).x??""} ${t(s).y??""} ${t(s).w??""} ${t(s).h??""}`)),yt("wheel",y,f),C("pointerdown",y,m),C("pointermove",y,z=>A(z,z.currentTarget)),C("pointerup",y,U),yt("pointerleave",y,U),c(a,R),Ie()}Re(["pointerdown","pointermove","pointerup","click","keydown"]);function Ct(a,e){const n=Xt.parse(a,{header:!0,delimiter:e,skipEmptyLines:!0,transformHeader:s=>s.trim(),transform:s=>s.trim()});if(n.errors.length>0){const s=n.errors[0];throw new Error(`Row ${s.row??"?"}: ${s.message}`)}return n.data}function Zn(a){return a.split(/\r\n|\r|\n/).map(e=>e.trim()).filter(e=>e.length>0).map(e=>JSON.parse(e))}function $n(a,e){const n=a.toLowerCase();if(n.endsWith(".tsv"))return"tsv";if(n.endsWith(".jsonl")||n.endsWith(".ndjson"))return"jsonl";if(n.endsWith(".csv"))return"csv";const s=e.split(/\r\n|\r|\n/,1)[0]||"";if(s.trim().startsWith("{"))return"jsonl";const r=(s.match(/\t/g)||[]).length,l=(s.match(/,/g)||[]).length;return r>l?"tsv":"csv"}function ea(a,e){switch(e){case"csv":return Ct(a,",");case"tsv":return Ct(a,"	");case"jsonl":return Zn(a)}}function ta(a){if(a.length===0)return"";const e=Object.keys(a[0].input),n=a[0].output!==null&&typeof a[0].output=="object"&&!Array.isArray(a[0].output),s=n?[...new Set(a.flatMap(v=>v.output&&typeof v.output=="object"?Object.keys(v.output):[]))]:["output"];function r(v,f){return n?v.output&&typeof v.output=="object"?v.output[f]:"":v.output}const l=a.map(v=>{const f={};for(const m of e)f[m]=v.input[m];for(const m of s)f[`out_${m}`]=r(v,m);return f.error=v.error??"",f});return Xt.unparse(l)}var na=g('<button type="button" class="svelte-m0dk3v">Use current inputs as template</button>'),aa=g('<button type="button" class="svelte-m0dk3v">Download results (CSV)</button>'),ia=g('<div class="batch-error svelte-m0dk3v"> </div>'),ra=g('<span class="error-count svelte-m0dk3v"> </span>'),sa=g('<th class="in-col svelte-m0dk3v"> </th>'),oa=g('<th class="out-col svelte-m0dk3v"> </th>'),zt=g('<td class="svelte-m0dk3v"> </td>'),la=g('<tr><!><!><td class="mono svelte-m0dk3v"> </td></tr>'),da=g('<div class="batch-summary svelte-m0dk3v"> <!></div> <div class="batch-results-scroll svelte-m0dk3v"><table class="batch-table svelte-m0dk3v"><thead><tr><!><!><th class="svelte-m0dk3v">duration</th></tr></thead><tbody></tbody></table></div>',1),ua=g('<div class="batch-editor svelte-m0dk3v"><div class="batch-toolbar svelte-m0dk3v"><label class="file-label svelte-m0dk3v">Upload CSV / TSV / JSONL <input type="file" accept=".csv,.tsv,.jsonl,.ndjson,.txt" style="display: none;"/> <button type="button" class="svelte-m0dk3v">Choose file</button></label> <!> <button type="button" class="run-button svelte-m0dk3v"> </button> <!></div> <textarea class="batch-textarea svelte-m0dk3v" spellcheck="false"></textarea> <!> <!></div>');function ca(a,e){Ne(e,!0);let n=J(""),s=J(""),r=J(null),l=J(Te([])),v=J(null),f=J(!1);const m=he(()=>O.inputs.filter(p=>!p.isOverride).map(p=>p.name));function A(){if(t(m).length===0)return;const p=t(m).join(","),S=O.inputs.filter(T=>!T.isOverride).map(T=>T.value).join(",");h(n,`${p}
${S}`),h(s,"batch.csv")}async function U(p){var T;const S=(T=p.target.files)==null?void 0:T[0];S&&(h(s,S.name,!0),h(n,await S.text(),!0))}function W(){if(h(v,null),h(l,[],!0),!t(n).trim())return;let p,S;try{p=$n(t(s),t(n)),S=ea(t(n),p)}catch(T){h(v,`Failed to parse input: ${(T==null?void 0:T.message)||T}`);return}if(S.length===0){h(v,"No records found in the input.");return}h(f,!0);try{h(l,O.evaluateBatch(S),!0)}catch(T){h(v,(T==null?void 0:T.message)||String(T),!0)}finally{h(f,!1)}}function oe(){const p=ta(t(l)),S=new Blob([p],{type:"text/csv"}),T=URL.createObjectURL(S),N=document.createElement("a");N.href=T,N.download="batch_results.csv",document.body.appendChild(N),N.click(),document.body.removeChild(N),URL.revokeObjectURL(T)}const P=he(()=>t(l).length>0&&t(l)[0].output!==null&&typeof t(l)[0].output=="object"&&!Array.isArray(t(l)[0].output)),$=he(()=>t(P)?Object.keys(t(l)[0].output):t(l).length>0?["output"]:[]);function R(p,S){return t(P)?p.output&&typeof p.output=="object"?JSON.stringify(p.output[S]):"":p.output!==void 0?JSON.stringify(p.output):""}const y=he(()=>t(l).filter(p=>p.error).length);var k=ua(),B=i(k),z=i(B),d=o(i(z));st(d,p=>h(r,p),()=>t(r));var q=o(d,2),D=o(z,2);{var Q=p=>{var S=na();C("click",S,A),c(p,S)};G(D,p=>{t(m).length>0&&p(Q)})}var ae=o(D,2),ee=i(ae),ce=o(ae,2);{var K=p=>{var S=aa();C("click",S,oe),c(p,S)};G(ce,p=>{t(l).length>0&&p(K)})}var le=o(B,2);re(le,"placeholder",`Paste CSV/TSV/JSONL here, or upload a file.
e.g.
creditScore,monthlyIncome
720,6500
600,3000`);var fe=o(le,2);{var ne=p=>{var S=ia(),T=i(S);I(()=>j(T,t(v))),c(p,S)};G(fe,p=>{t(v)&&p(ne)})}var Z=o(fe,2);{var b=p=>{var S=da(),T=De(S),N=i(T),H=o(N);{var se=V=>{var X=ra(),u=i(X);I(()=>j(u,`— ${t(y)??""} error${t(y)===1?"":"s"}`)),c(V,X)};G(H,V=>{t(y)>0&&V(se)})}var x=o(T,2),_=i(x),E=i(_),M=i(E),te=i(M);me(te,17,()=>Object.keys(t(l)[0].input),_e,(V,X)=>{var u=sa(),w=i(u);I(()=>j(w,t(X))),c(V,u)});var de=o(te);me(de,17,()=>t($),_e,(V,X)=>{var u=oa(),w=i(u);I(()=>j(w,t(X))),c(V,u)});var pe=o(E);me(pe,21,()=>t(l),_e,(V,X)=>{var u=la();let w;var F=i(u);me(F,17,()=>Object.keys(t(X).input),_e,(ge,ye)=>{var ke=zt(),be=i(ke);I(()=>j(be,t(X).input[t(ye)])),c(ge,ke)});var L=o(F);me(L,17,()=>t($),_e,(ge,ye)=>{var ke=zt(),be=i(ke);I(xe=>j(be,xe),[()=>R(t(X),t(ye))]),c(ge,ke)});var ie=o(L),Y=i(ie);I(()=>{w=we(u,1,"svelte-m0dk3v",null,w,{"error-row":!!t(X).error}),j(Y,t(X).error?t(X).error:`${t(X).durationUs??0} us`)}),c(V,u)}),I(()=>j(N,`${t(l).length??""} record${t(l).length===1?"":"s"} evaluated `)),c(p,S)};G(Z,p=>{t(l).length>0&&p(b)})}I(p=>{ae.disabled=p,j(ee,t(f)?"Running…":"▶ Run Batch")},[()=>t(f)||!t(n).trim()]),C("change",d,U),C("click",q,()=>{var p;return(p=t(r))==null?void 0:p.click()}),C("click",ae,W),Le(le,()=>t(n),p=>h(n,p)),c(a,k),Ie()}Re(["change","click"]);var va=g('<div class="loading-overlay svelte-1ffhov6"><span class="spinner svelte-1ffhov6"></span> <p>Initializing rules engine...</p></div>'),pa=g('<div class="parse-error svelte-1ffhov6"> </div>'),fa=g('<div class="empty-state svelte-1ffhov6">No ruleset loaded.</div>'),ma=g(`<div class="empty-state svelte-1ffhov6">This decision's logic type isn't supported by the editor yet.</div>`),_a=g('<button><svg xmlns="http://www.w3.org/2000/svg" class="tab-icon svelte-1ffhov6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M3 9h18M3 15h18M9 3v18M15 3v18"></path></svg> <span class="tab-label"> </span></button>'),ha=g('<div class="editor-body svelte-1ffhov6"><!></div> <div class="dmn-views-tab-bar svelte-1ffhov6"><button><svg xmlns="http://www.w3.org/2000/svg" class="tab-icon svelte-1ffhov6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><rect x="9" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M12 9v3m0 0H6v3m6-3h6v3"></path></svg> <span class="tab-label">DRD Diagram</span></button> <!> <button><svg xmlns="http://www.w3.org/2000/svg" class="tab-icon svelte-1ffhov6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M3 3h18v18H3z"></path><path d="M3 9h18M9 21V9"></path></svg> <span class="tab-label">Batch Evaluation</span></button></div>',1),ga=g('<div class="editor-wrapper svelte-1ffhov6"><!> <!></div>');function ya(a,e){Ne(e,!0);let n=J(null),s=J(null),r=J("drd"),l="";async function v(d){if(!d){h(n,null);return}try{h(n,await bn(d),!0),h(s,null);const q=wt(t(n)).filter(Ot);q.length===1?h(r,q[0].id,!0):t(r)!=="drd"&&t(r)!=="batch"&&!q.some(D=>D.id===t(r))&&h(r,"drd")}catch(q){console.error("Failed to parse DMN XML:",q),h(s,(q==null?void 0:q.message)||String(q),!0)}}Wt(()=>{const d=O.xml;d&&d!==l&&(l=d,v(d))});async function f(){if(!t(n))return;const d=await Tt(t(n));l=d,O.loadDmnXml(d,{showLintPanel:!1})}function m(d){const q=d.get("decisionLogic");return`${(q==null?void 0:q.$type)==="dmn:DecisionTable"?"Decision Table":(q==null?void 0:q.$type)==="dmn:LiteralExpression"?"Literal Expression":"Decision"}: ${d.get("name")||d.id}`}async function A(){if(!t(n))return O.xml;const d=await Tt(t(n));return O.getExportXml(d)}let U=he(()=>t(n)?wt(t(n)).filter(Ot):[]),W=he(()=>t(U).find(d=>d.id===t(r))||null);var oe={getUpdatedXml:A},P=ga(),$=i(P);{var R=d=>{var q=va();c(d,q)};G($,d=>{O.wasmLoaded||d(R)})}var y=o($,2);{var k=d=>{var q=pa(),D=i(q);I(()=>j(D,`Failed to parse this DMN file: ${t(s)??""}`)),c(d,q)},B=d=>{var q=fa();c(d,q)},z=d=>{var q=ha(),D=De(q),Q=i(D);{var ae=H=>{Qn(H,{get definitions(){return t(n)},activeId:null,onselect:se=>h(r,se,!0)})},ee=H=>{ca(H,{})},ce=H=>{Cn(H,{get decision(){return t(W)},onchange:f})},K=he(()=>t(W)&&wn(t(W))),le=H=>{Vn(H,{get decision(){return t(W)},onchange:f})},fe=he(()=>t(W)&&En(t(W))),ne=H=>{var se=ma();c(H,se)};G(Q,H=>{t(r)==="drd"?H(ae):t(r)==="batch"?H(ee,1):t(K)?H(ce,2):t(fe)?H(le,3):H(ne,-1)})}var Z=o(D,2),b=i(Z);let p;var S=o(b,2);me(S,17,()=>t(U),_e,(H,se)=>{var x=_a();let _;var E=o(i(x),2),M=i(E);I(te=>{_=we(x,1,"view-tab svelte-1ffhov6",null,_,{active:t(r)===t(se).id}),j(M,te)},[()=>m(t(se))]),C("click",x,()=>h(r,t(se).id,!0)),c(H,x)});var T=o(S,2);let N;I(()=>{p=we(b,1,"view-tab svelte-1ffhov6",null,p,{active:t(r)==="drd"}),N=we(T,1,"view-tab svelte-1ffhov6",null,N,{active:t(r)==="batch"})}),C("click",b,()=>h(r,"drd")),C("click",T,()=>h(r,"batch")),c(d,q)};G(y,d=>{t(s)?d(k):t(n)?d(z,-1):d(B,1)})}return c(a,P),Ie(oe)}Re(["click"]);var ba=g('<p class="fb-error svelte-1rxiile"> </p>'),xa=g('<p class="fb-empty svelte-1rxiile">No saved rulesets yet.</p>'),wa=g('<input class="fb-rename-input svelte-1rxiile"/>'),Ea=g('<div class="fb-delete-confirm svelte-1rxiile"><span class="svelte-1rxiile"> </span> <button type="button" class="fb-confirm-yes svelte-1rxiile">Delete</button> <button type="button" class="fb-confirm-no svelte-1rxiile">Cancel</button></div>'),Da=g('<button type="button" class="fb-item-main svelte-1rxiile"><span class="fb-item-name svelte-1rxiile"> </span> <span class="fb-item-date svelte-1rxiile"> </span></button> <div class="fb-item-actions svelte-1rxiile"><button type="button" title="Rename" class="svelte-1rxiile">✎</button> <button type="button" title="Delete" class="svelte-1rxiile">×</button></div>',1),Ra=g("<li><!></li>"),ka=g('<ul class="fb-list svelte-1rxiile"></ul>'),Ma=g('<div class="file-browser svelte-1rxiile"><div class="fb-header svelte-1rxiile"><h4 class="svelte-1rxiile">Rulesets</h4> <button type="button" class="fb-new svelte-1rxiile" title="New ruleset">+ New</button></div> <!></div>');function Na(a,e){Ne(e,!0);let n=J(Te([])),s=J(null),r=J(null),l=J(""),v=J(null);async function f(){try{h(n,await e.adapter.list(),!0),h(s,null)}catch(D){h(s,(D==null?void 0:D.message)||String(D),!0)}}f();function m(D){return D?new Date(D).toLocaleDateString(void 0,{month:"short",day:"numeric"}):""}function A(D,Q){Q.stopPropagation(),h(v,D.id,!0)}function U(D){D.stopPropagation(),h(v,null)}async function W(D,Q){Q.stopPropagation(),h(v,null),await e.adapter.remove(D.id),await f()}function oe(D,Q){Q.stopPropagation(),h(r,D.id,!0),h(l,D.name,!0)}async function P(D){const Q=t(l).trim();if(h(r,null),!Q||Q===D.name)return;const ae=D.id.includes(".")?D.id.slice(D.id.lastIndexOf(".")):"",ee=`${Q}${ae}`;ee!==D.id&&(await e.adapter.rename(D.id,ee),await f(),e.activeId===D.id&&e.onopen(ee))}var $={refresh:f},R=Ma(),y=i(R),k=o(i(y),2),B=o(y,2);{var z=D=>{var Q=ba(),ae=i(Q);I(()=>j(ae,t(s))),c(D,Q)},d=D=>{var Q=xa();c(D,Q)},q=D=>{var Q=ka();me(Q,21,()=>t(n),ae=>ae.id,(ae,ee)=>{var ce=Ra();let K;var le=i(ce);{var fe=b=>{var p=wa();Jt(p),yt("blur",p,()=>P(t(ee))),C("keydown",p,S=>{S.key==="Enter"&&P(t(ee)),S.key==="Escape"&&h(r,null)}),Le(p,()=>t(l),S=>h(l,S)),c(b,p)},ne=b=>{var p=Ea(),S=i(p),T=i(S),N=o(S,2),H=o(N,2);I(()=>j(T,`Delete "${t(ee).name??""}"?`)),C("click",N,se=>W(t(ee),se)),C("click",H,U),c(b,p)},Z=b=>{var p=Da(),S=De(p),T=i(S),N=i(T),H=o(T,2),se=i(H),x=o(S,2),_=i(x),E=o(_,2);I(M=>{j(N,t(ee).name),j(se,M)},[()=>m(t(ee).modified)]),C("click",S,()=>e.onopen(t(ee).id)),C("click",_,M=>oe(t(ee),M)),C("click",E,M=>A(t(ee),M)),c(b,p)};G(le,b=>{t(r)===t(ee).id?b(fe):t(v)===t(ee).id?b(ne,1):b(Z,-1)})}I(()=>K=we(ce,1,"fb-item svelte-1rxiile",null,K,{active:t(ee).id===e.activeId})),c(ae,ce)}),c(D,Q)};G(B,D=>{t(s)?D(z):t(n).length===0?D(d,1):D(q,-1)})}return C("click",k,function(...D){var Q;(Q=e.onnew)==null||Q.apply(this,D)}),c(a,R),Ie($)}Re(["click","keydown"]);var Ia=g('<p class="empty-state svelte-1la6coj">No runs yet — evaluate the ruleset to populate this pane.</p>'),Sa=g('<div class="step-row svelte-1la6coj"><span class="step-num svelte-1la6coj"></span> <span class="step-name svelte-1la6coj"> </span> <span class="step-value svelte-1la6coj"> </span></div>'),Ta=g('<div class="steps-list svelte-1la6coj"></div>'),Oa=g('<button type="button" class="history-card-expand svelte-1la6coj"> </button> <!>',1),Aa=g('<div><button type="button" class="history-card-main svelte-1la6coj"><div class="history-card-top svelte-1la6coj"><span class="history-card-time svelte-1la6coj"> </span> <span class="history-card-latency svelte-1la6coj"> </span></div> <div class="history-card-io svelte-1la6coj"><span class="io-label svelte-1la6coj">In</span> <span class="io-value svelte-1la6coj"> </span></div> <div class="history-card-io svelte-1la6coj"><span class="io-label svelte-1la6coj">Out</span> <span class="io-value green svelte-1la6coj"> </span></div></button> <!></div>'),La=g('<div class="history-row-scroll svelte-1la6coj"></div>'),qa=g('<div class="history-pane glass-card svelte-1la6coj"><div class="history-pane-header svelte-1la6coj"><h4 class="svelte-1la6coj">Run History</h4> <span class="history-count svelte-1la6coj"> </span></div> <!></div>');function Fa(a,e){Ne(e,!0);let n=J(null);function s(P){h(n,t(n)===P?null:P,!0)}function r(P){O.loadHistoryRun(P)}function l(P){var R;const $=(R=P==null?void 0:P.trace)==null?void 0:R.intermediates;return $?Object.entries($).filter(([y])=>!y.includes("://")).map(([y,k])=>({name:y,value:k})).sort((y,k)=>y.name.localeCompare(k.name)):[]}var v=qa(),f=i(v),m=o(i(f),2),A=i(m),U=o(f,2);{var W=P=>{var $=Ia();c(P,$)},oe=P=>{var $=La();me($,21,()=>O.history,_e,(R,y,k)=>{const B=he(()=>l(t(y)));var z=Aa();let d;var q=i(z),D=i(q),Q=i(D),ae=i(Q),ee=o(Q,2),ce=i(ee),K=o(D,2),le=o(i(K),2),fe=i(le),ne=o(K,2),Z=o(i(ne),2),b=i(Z),p=o(q,2);{var S=T=>{var N=Oa(),H=De(N),se=i(H),x=o(H,2);{var _=E=>{var M=Ta();me(M,21,()=>t(B),_e,(te,de,pe)=>{var V=Sa(),X=i(V);X.textContent=pe+1;var u=o(X,2),w=i(u),F=o(u,2),L=i(F);I(ie=>{j(w,t(de).name),j(L,ie)},[()=>JSON.stringify(t(de).value)]),c(te,V)}),c(E,M)};G(x,E=>{t(n)===k&&E(_)})}I(()=>j(se,t(n)===k?"▾ Hide steps":`▸ ${t(B).length} step${t(B).length===1?"":"s"}`)),C("click",H,()=>s(k)),c(T,N)};G(p,T=>{t(B).length>0&&T(S)})}I((T,N)=>{var H;d=we(z,1,"history-card svelte-1la6coj",null,d,{active:O.activeRunIndex===k}),j(ae,t(y).timestamp),j(ce,`${(((H=t(y).trace)==null?void 0:H.duration_us)||0)??""} us`),j(fe,T),j(b,N)},[()=>t(y).inputs.map(T=>`${T.name}=${T.value}`).join(", "),()=>JSON.stringify(t(y).outputs)]),C("click",q,()=>r(k)),c(R,z)}),c(P,$)};G(U,P=>{O.history.length===0?P(W):P(oe,-1)})}I(()=>j(A,`${O.history.length??""} run${O.history.length===1?"":"s"}`)),c(a,v),Ie()}Re(["click"]);var Ca=g('<button class="apply-fix-btn svelte-16eitz9"> </button>'),za=g('<div class="lint-item svelte-16eitz9"><div class="lint-item-body svelte-16eitz9"><span class="lint-location svelte-16eitz9"> </span> <span class="lint-message svelte-16eitz9"> </span></div> <!></div>'),ja=g('<div class="lint-panel glass-card svelte-16eitz9"><div class="lint-header svelte-16eitz9"><span class="lint-title svelte-16eitz9"><span class="lint-icon svelte-16eitz9">⚠️</span> </span> <button class="dismiss-btn svelte-16eitz9" aria-label="Dismiss">✕</button></div> <div class="lint-list svelte-16eitz9"></div></div>');function Ua(a,e){Ne(e,!0);let n=J(Te(new Set));async function s(f,m){if(f.fix){t(n).add(m),h(n,new Set(t(n)),!0);try{await O.applyLintFix(f.fix)}finally{t(n).delete(m),h(n,new Set(t(n)),!0)}}}var r=bt(),l=De(r);{var v=f=>{var m=ja(),A=i(m),U=i(A),W=o(i(U)),oe=o(U,2),P=o(A,2);me(P,21,()=>O.lintWarnings,_e,($,R,y)=>{var k=za(),B=i(k),z=i(B),d=i(z),q=o(z,2),D=i(q),Q=o(B,2);{var ae=ee=>{var ce=Ca(),K=i(ce);I((le,fe)=>{ce.disabled=le,j(K,fe)},[()=>t(n).has(y),()=>t(n).has(y)?"Applying...":"Apply fix"]),C("click",ce,()=>s(t(R),y)),c(ee,ce)};G(Q,ee=>{t(R).fix&&ee(ae)})}I(()=>{j(d,t(R).location),j(D,t(R).message)}),c($,k)}),I(()=>j(W,` ${O.lintWarnings.length??""} import ${O.lintWarnings.length===1?"warning":"warnings"}`)),C("click",oe,()=>O.dismissLintPanel()),c(f,m)};G(l,f=>{O.lintPanelVisible&&O.lintWarnings.length>0&&f(v)})}c(a,r),Ie()}Re(["click"]);class Ba{constructor(){rt(this,"kind","filesystem")}async list(){return(await Oe("list_rulesets")).map(n=>({id:n.filename,name:n.name,modified:n.modified}))}async load(e){return Oe("load_ruleset",{filename:e})}async save(e,n){await Oe("save_ruleset",{filename:e,content:n})}async rename(e,n){await Oe("rename_ruleset",{oldFilename:e,newFilename:n})}async remove(e){await Oe("delete_ruleset",{filename:e})}async directoryPath(){return Oe("rulesets_dir_path")}}const Gt="bre_rulesets_index";function _t(a){return`bre_ruleset_content:${a}`}function ht(){try{const a=localStorage.getItem(Gt);return a?JSON.parse(a):[]}catch{return[]}}function jt(a){localStorage.setItem(Gt,JSON.stringify(a))}class Pa{constructor(){rt(this,"kind","local-storage")}async list(){return ht().map(e=>({id:e.filename,name:e.filename.replace(/\.[^./]+$/,""),modified:e.modified})).sort((e,n)=>n.modified-e.modified)}async load(e){const n=localStorage.getItem(_t(e));if(n===null)throw new Error(`No saved ruleset named "${e}"`);return n}async save(e,n){localStorage.setItem(_t(e),n);const s=ht(),r=Date.now(),l=s.find(v=>v.filename===e);l?l.modified=r:s.push({filename:e,modified:r}),jt(s)}async rename(e,n){const s=await this.load(e);await this.save(n,s),await this.remove(e)}async remove(e){localStorage.removeItem(_t(e)),jt(ht().filter(n=>n.filename!==e))}}var Pt,Vt;const Et=typeof window<"u"&&(window.__TAURI__!==void 0||window.__TAURI_INTERNALS__!==void 0||(((Vt=(Pt=window.navigator)==null?void 0:Pt.userAgent)==null?void 0:Vt.includes("Tauri"))??!1));var Va=g('<p class="empty-state svelte-175p7lt">No primary inputs detected in ruleset.</p>'),Ut=g('<select class="input-field select-dark svelte-175p7lt"><option>true</option><option>false</option></select>'),Bt=g('<input class="input-field input-dark svelte-175p7lt"/>'),Wa=g('<div class="input-item svelte-175p7lt"><label class="svelte-175p7lt"><span class="input-name svelte-175p7lt"> </span> <span class="input-type svelte-175p7lt"> </span></label> <!></div>'),Xa=g('<div><div class="override-control svelte-175p7lt"><label class="checkbox-container svelte-175p7lt"><input type="checkbox" class="svelte-175p7lt"/> <span class="checkmark svelte-175p7lt"></span></label> <label class="override-label svelte-175p7lt"><span class="input-name svelte-175p7lt"> </span> <span class="input-type svelte-175p7lt"> </span></label></div> <!></div>'),Ja=g('<div class="section-block svelte-175p7lt"><h5 class="overrides-title svelte-175p7lt"><span>Intermediate Mock Overrides</span> <span class="badge-beta override-badge svelte-175p7lt">Testing</span></h5> <!></div>'),Ka=g('<div class="error-banner svelte-175p7lt"> </div>'),Ha=g('<pre class="result-code svelte-175p7lt"> </pre>'),Ya=g('<p class="empty-state svelte-175p7lt">Run rules engine to see outputs.</p>'),Ga=g('<div class="override-audit-banner svelte-175p7lt"><span class="alert-icon svelte-175p7lt">⚠️</span> <span><strong>Mock Override Audit:</strong> </span></div>'),Qa=g('<div class="trace-match svelte-175p7lt"><span class="trace-bullet-green svelte-175p7lt">✔</span> <span> </span></div>'),Za=g('<div class="trace-match warning svelte-175p7lt"><span class="trace-bullet-red svelte-175p7lt">✖</span> <span>No rules matched</span></div>'),$a=g('<div class="trace-list svelte-175p7lt"><!> <!> <div class="trace-time svelte-175p7lt"> </div></div>'),ei=g('<p class="empty-state svelte-175p7lt">Trace logs will render here.</p>'),ti=g('<p class="empty-state svelte-175p7lt">Run rules to populate execution heatmap.</p>'),ni=g('<div class="heatmap-row svelte-175p7lt"><div class="heatmap-label svelte-175p7lt"><span></span> <span class="heatmap-count svelte-175p7lt"> </span></div> <div class="heatmap-track svelte-175p7lt"><div class="heatmap-bar svelte-175p7lt"></div></div></div>'),ai=g('<div class="heatmap-container svelte-175p7lt"></div>'),ii=g('<div class="playground-panel glass-card svelte-175p7lt"><div class="panel-header svelte-175p7lt"><div><h4 class="svelte-175p7lt">Playground (WASM Engine)</h4> <a href="http://localhost:8080/swagger-ui" target="_blank" rel="noopener noreferrer" class="swagger-link svelte-175p7lt"><span class="book-icon svelte-175p7lt">📖</span> Swagger API UI</a></div> <span> </span></div> <div class="panel-scroll svelte-175p7lt"><div class="section-block svelte-175p7lt"><h5 class="svelte-175p7lt">Primary Fact Inputs</h5> <!></div> <!> <button class="btn-run svelte-175p7lt"> </button> <!> <div class="section-block svelte-175p7lt"><h5 class="svelte-175p7lt">Evaluation Results</h5> <!></div> <div class="section-block svelte-175p7lt"><h5 class="svelte-175p7lt">Execution Match Trace</h5> <!></div> <div class="section-block svelte-175p7lt"><h5 class="svelte-175p7lt">Rule Match Heatmap</h5> <!></div></div></div>');function ri(a,e){Ne(e,!1),an();var n=ii(),s=i(n),r=o(i(s),2);let l;var v=i(r),f=o(s,2),m=i(f),A=o(i(m),2);{var U=b=>{var p=Va();c(b,p)},W=he(()=>O.inputs.filter(b=>!b.isOverride).length===0),oe=b=>{var p=bt(),S=De(p);me(S,1,()=>O.inputs.filter(T=>!T.isOverride),_e,(T,N,H)=>{var se=Wa(),x=i(se),_=i(x),E=i(_),M=o(_,2),te=i(M),de=o(x,2);{var pe=X=>{var u=Ut(),w=i(u);w.value=w.__value=!0;var F=o(w);F.value=F.__value=!1,I(()=>re(u,"id",`input-${t(N).name}`)),xt(u,()=>t(N).value,L=>(t(N).value=L,je(()=>O))),c(X,u)},V=X=>{var u=Bt();I(()=>{re(u,"id",`input-${t(N).name}`),re(u,"type",t(N).type==="number"||t(N).type==="Number"?"number":"text"),re(u,"placeholder",`Enter ${t(N).type}`)}),Le(u,()=>t(N).value,w=>(t(N).value=w,je(()=>O))),c(X,u)};G(de,X=>{t(N).type==="boolean"||t(N).type==="Boolean"?X(pe):X(V,-1)})}I(()=>{re(x,"for",`input-${t(N).name}`),j(E,t(N).name),j(te,t(N).type)}),c(T,se)}),c(b,p)};G(A,b=>{t(W)?b(U):b(oe,-1)})}var P=o(m,2);{var $=b=>{var p=Ja(),S=o(i(p),2);me(S,1,()=>O.inputs.filter(T=>T.isOverride),_e,(T,N,H)=>{var se=Xa();let x;var _=i(se),E=i(_),M=i(E),te=o(E,2),de=i(te),pe=i(de),V=o(de,2),X=i(V),u=o(_,2);{var w=L=>{var ie=Ut(),Y=i(ie);Y.value=Y.__value=!0;var ge=o(Y);ge.value=ge.__value=!1,I(()=>{re(ie,"id",`input-${t(N).name}`),ie.disabled=!t(N).overrideActive}),xt(ie,()=>t(N).value,ye=>(t(N).value=ye,je(()=>O))),c(L,ie)},F=L=>{var ie=Bt();I(()=>{re(ie,"id",`input-${t(N).name}`),re(ie,"type",t(N).type==="number"||t(N).type==="Number"?"number":"text"),ie.disabled=!t(N).overrideActive,re(ie,"placeholder",`Enter ${t(N).type}`)}),Le(ie,()=>t(N).value,Y=>(t(N).value=Y,je(()=>O))),c(L,ie)};G(u,L=>{t(N).type==="boolean"||t(N).type==="Boolean"?L(w):L(F,-1)})}I(()=>{x=we(se,1,"input-item override-item svelte-175p7lt",null,x,{inactive:!t(N).overrideActive}),re(te,"for",`input-${t(N).name}`),j(pe,t(N).name),j(X,t(N).type)}),rn(M,()=>t(N).overrideActive,L=>(t(N).overrideActive=L,je(()=>O))),c(T,se)}),c(b,p)},R=he(()=>O.inputs.filter(b=>b.isOverride).length>0);G(P,b=>{t(R)&&b($)})}var y=o(P,2),k=i(y),B=o(y,2);{var z=b=>{var p=Ka(),S=i(p);I(()=>j(S,O.errorMessage)),c(b,p)};G(B,b=>{O.errorMessage&&b(z)})}var d=o(B,2),q=o(i(d),2);{var D=b=>{var p=Ha(),S=i(p);I(T=>j(S,T),[()=>JSON.stringify(O.evaluationResult,null,2)]),c(b,p)},Q=b=>{var p=Ya();c(b,p)};G(q,b=>{O.evaluationResult?b(D):b(Q,-1)})}var ae=o(d,2),ee=o(i(ae),2);{var ce=b=>{var p=$a(),S=i(p);{var T=M=>{var te=Ga(),de=o(i(te),2),pe=o(i(de));I(V=>j(pe,` Primary inputs for ${V??""} were bypassed. Normal sub-tree evaluations skipped.`),[()=>O.inputs.filter(V=>V.isOverride&&V.overrideActive).map(V=>`'${V.name}'`).join(", ")]),c(M,te)},N=he(()=>O.inputs.filter(M=>M.isOverride&&M.overrideActive).length>0);G(S,M=>{t(N)&&M(T)})}var H=o(S,2);{var se=M=>{var te=bt(),de=De(te);me(de,1,()=>O.evaluationTrace.matched_rules,_e,(pe,V)=>{var X=Qa(),u=o(i(X),2),w=i(u);I(()=>j(w,`Matched Rule Row #${t(V)+1}`)),c(pe,X)}),c(M,te)},x=M=>{var te=Za();c(M,te)};G(H,M=>{O.evaluationTrace.matched_rules&&O.evaluationTrace.matched_rules.length>0?M(se):M(x,-1)})}var _=o(H,2),E=i(_);I(()=>j(E,`Duration: ${(O.evaluationTrace.duration_us||0)??""} us`)),c(b,p)},K=b=>{var p=ei();c(b,p)};G(ee,b=>{O.evaluationTrace?b(ce):b(K,-1)})}var le=o(ae,2),fe=o(i(le),2);{var ne=b=>{var p=ti();c(b,p)},Z=b=>{var p=ai();me(p,5,()=>Array(O.rulesCount),_e,(S,T,N)=>{const H=vt(()=>O.hitmap.counts[N]||0),se=vt(()=>O.hitmap.maxCount||1),x=vt(()=>t(H)/t(se)*100);var _=ni(),E=i(_),M=i(E);M.textContent=`Row #${N+1}`;var te=o(M,2),de=i(te),pe=o(E,2),V=i(pe);I(()=>{j(de,`${t(H)??""} hit${t(H)===1?"":"s"}`),sn(V,`width: ${t(x)??""}%; background: var(--accent);`)}),c(S,_)}),c(b,p)};G(fe,b=>{O.history.length===0?b(ne):b(Z,-1)})}I(()=>{l=we(r,1,"engine-indicator svelte-175p7lt",null,l,{connected:O.wasmLoaded}),j(v,O.wasmLoaded?"WASM Ready":"Loading WASM..."),y.disabled=!O.wasmLoaded||O.isEvaluating,j(k,O.isEvaluating?"Running...":"▶ Run In-Process Engine")}),C("click",y,()=>O.evaluateLocal()),c(a,n),Ie()}Re(["click"]);var si=g("<option>From Playground</option>"),oi=g("<option> </option>"),li=g('<input class="name-input svelte-zvs8ai" placeholder="Name this ruleset"/> <button class="btn-primary svelte-zvs8ai">Save</button> <button class="btn-secondary svelte-zvs8ai">Cancel</button>',1),di=g('<button class="btn-primary svelte-zvs8ai"> </button>'),ui=g('<button class="btn-secondary svelte-zvs8ai">Import File</button> <button class="btn-secondary svelte-zvs8ai">Export File</button>',1),ci=g('<input type="file" accept=".dmn,.xml" style="display: none;"/> <button class="btn-secondary svelte-zvs8ai">Import File</button> <button class="btn-secondary svelte-zvs8ai">Export File</button> <a href="https://github.com/performance/datalila-bre/releases/latest/download/datalila-bre.dmg" class="btn-download-app svelte-zvs8ai">📥 Download macOS App</a>',1),vi=g('<div class="workspace-layout svelte-zvs8ai"><div class="control-header glass-card svelte-zvs8ai"><div class="left-controls svelte-zvs8ai"><h3 class="svelte-zvs8ai">Datalila Rules Modeler</h3> <span class="badge-beta svelte-zvs8ai">DMN v1.6 ready</span> <span class="sample-label svelte-zvs8ai">Sample Template:</span> <select class="sample-selector svelte-zvs8ai"><!><!></select></div> <div class="right-controls svelte-zvs8ai"><!> <!></div></div> <!> <div class="workspace-main svelte-zvs8ai"><div class="filebrowser-panel glass-card svelte-zvs8ai"><!></div> <div class="canvas-panel svelte-zvs8ai"><!></div> <div class="playground-panel svelte-zvs8ai"><!></div></div> <div class="history-panel svelte-zvs8ai"><!></div></div>');function pi(a,e){Ne(e,!0);let n=J(null),s=J(null);const r=Et?new Ba:new Pa;let l=J(null);async function v(u){try{const w=await r.load(u);await O.loadDmnXml(w),h(l,u,!0)}catch(w){alert(`Failed to open "${u}": ${(w==null?void 0:w.message)||w}`)}}async function f(){h(l,null),await O.loadDmnXml(P)}let m=J(!1),A=J("");async function U(){if(t(n)){if(!t(l)){h(A,"Untitled Ruleset"),h(m,!0);return}await W(t(l))}}async function W(u){var w;try{const F=await t(n).getUpdatedXml();await r.save(u,F),h(l,u,!0),h(m,!1),await((w=t(s))==null?void 0:w.refresh())}catch(F){alert(`Failed to save: ${(F==null?void 0:F.message)||F}`)}}async function oe(){const u=t(A).trim();u&&await W(`${u}.dmn`)}const P=`<?xml version="1.0" encoding="UTF-8"?>
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
</definitions>`,$={loan:{name:"Loan Approval",xml:P,inputs:{creditScore:720,monthlyIncome:6500}},tck_0004:{name:"TCK 0004 Simple Table (Unique)",xml:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
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
</definitions>`,inputs:{Age:18,RiskCategory:"Medium",isAffordable:!0}},tiering:{name:"Customer Tier Routing",xml:`<?xml version="1.0" encoding="UTF-8"?>
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
</definitions>`,inputs:{memberStatus:"gold",cartValue:120}},fraud:{name:"Fraud Risk Scoring",xml:`<?xml version="1.0" encoding="UTF-8"?>
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
</definitions>`,inputs:{amount:1500,isInternational:!0}},full_nodes:{name:"Full DRD Elements",xml:`<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/" xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/" xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/" xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" id="Definitions_Full" name="Full DRD Elements" namespace="http://camunda.org/schema/1.0/bpmn">
  <inputData id="InputData_1" name="Raw Input" />
  <knowledgeSource id="KnowledgeSource_1" name="Regulation Docs" />
  <businessKnowledgeModel id="BKM_1" name="Scoring Logic">
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
</definitions>`,inputs:{"Raw Input":"valid"}},origination:{name:"DMN Chapter 11 Loan Origination",xml:`<?xml version="1.0" encoding="UTF-8"?>
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
</definitions>`,inputs:{applicant_income:6e3,applicant_expenses:2500,loan_amount:1e4,credit_score:720}}};let R=J("loan");async function y(u){h(R,u,!0);const w=$[u];await O.loadDmnXml(w.xml);const F=w.inputs;O.inputs=O.inputs.map(L=>F&&F[L.name]!==void 0?{...L,value:F[L.name]}:L)}const k="bre_studio_handoff";on(async()=>{const u=localStorage.getItem(k);if(u){localStorage.removeItem(k);try{const{dmnXml:w}=JSON.parse(u);h(l,null),h(R,""),await O.loadDmnXml(w);return}catch(w){console.error("Failed to load handoff DMN from Playground:",w)}}await y("loan")});async function B(){try{const u=await Oe("open_file_dialog");if(u){const w=await Oe("load_rule_file",{path:u});await O.loadDmnXml(w)}}catch(u){alert(`Failed to open ruleset: ${u}`)}}async function z(){try{const u=await t(n).getUpdatedXml();await Oe("save_file_dialog",{content:u}),alert("Ruleset saved successfully!")}catch(u){alert(`Failed to save ruleset: ${u}`)}}let d=J(null);function q(){t(d)&&t(d).click()}async function D(u){var ie;const F=(ie=u.target.files)==null?void 0:ie[0];if(!F)return;const L=new FileReader;L.onload=async Y=>{var ye;const ge=(ye=Y.target)==null?void 0:ye.result;if(ge)try{await O.loadDmnXml(ge)}catch(ke){alert(`Failed to load file: ${ke}`)}},L.readAsText(F)}async function Q(){try{const u=await t(n).getUpdatedXml(),w=new Blob([u],{type:"application/xml"}),F=URL.createObjectURL(w),L=document.createElement("a");L.href=F,L.download="rules.dmn",document.body.appendChild(L),L.click(),document.body.removeChild(L),URL.revokeObjectURL(F)}catch(u){alert(`Export failed: ${u}`)}}var ae=vi(),ee=i(ae),ce=i(ee),K=o(i(ce),6),le=i(K);{var fe=u=>{var w=si();w.value=w.__value="",c(u,w)};G(le,u=>{t(R)===""&&u(fe)})}var ne=o(le);me(ne,17,()=>Object.entries($),_e,(u,w)=>{var F=he(()=>ln(t(w),2));let L=()=>t(F)[0],ie=()=>t(F)[1];var Y=oi(),ge=i(Y),ye={};I(()=>{j(ge,ie().name),ye!==(ye=L())&&(Y.value=(Y.__value=L())??"")}),c(u,Y)});var Z=o(ce,2),b=i(Z);{var p=u=>{var w=li(),F=De(w);Jt(F);var L=o(F,2),ie=o(L,2);C("keydown",F,Y=>{Y.key==="Enter"&&oe(),Y.key==="Escape"&&h(m,!1)}),Le(F,()=>t(A),Y=>h(A,Y)),C("click",L,oe),C("click",ie,()=>h(m,!1)),c(u,w)},S=u=>{var w=di(),F=i(w);I(L=>j(F,L),[()=>t(l)?`Save "${t(l).replace(/\.dmn$/,"")}"`:"Save to Library"]),C("click",w,U),c(u,w)};G(b,u=>{t(m)?u(p):u(S,-1)})}var T=o(b,2);{var N=u=>{var w=ui(),F=De(w),L=o(F,2);C("click",F,B),C("click",L,z),c(u,w)},H=u=>{var w=ci(),F=De(w);st(F,Y=>h(d,Y),()=>t(d));var L=o(F,2),ie=o(L,2);C("change",F,D),C("click",L,q),C("click",ie,Q),c(u,w)};G(T,u=>{Et?u(N):u(H,-1)})}var se=o(ee,2);Ua(se,{});var x=o(se,2),_=i(x),E=i(_);st(Na(E,{get adapter(){return r},get activeId(){return t(l)},onopen:v,onnew:f}),u=>h(s,u,!0),()=>t(s));var M=o(_,2),te=i(M);st(ya(te,{}),u=>h(n,u,!0),()=>t(n));var de=o(M,2),pe=i(de);ri(pe,{});var V=o(x,2),X=i(V);Fa(X,{}),C("change",K,u=>y(u.currentTarget.value)),xt(K,()=>t(R),u=>h(R,u)),c(a,ae),Ie()}Re(["change","keydown","click"]);var fi=g(`<div class="analytics-layout svelte-11qe3ck"><div class="dashboard-header svelte-11qe3ck"><h3 class="svelte-11qe3ck">Sync & Analytics</h3> <p class="svelte-11qe3ck">Cloud sync, cross-device history, and audit telemetry depend on a signed-in connection to bre-service.</p></div> <div class="empty-state glass-card svelte-11qe3ck"><span class="empty-icon svelte-11qe3ck">☁</span> <h4 class="svelte-11qe3ck">Not connected yet</h4> <p class="svelte-11qe3ck">This build runs entirely local (in-process WASM, no network calls). Sign-in and
      hosted sync are part of the GCP-hosted backend, which isn't live yet
      (<a href="https://github.com/DataLila/bre" target="_blank" rel="noopener" class="svelte-11qe3ck">BRE-080</a>).
      Once it ships, this view will show real execution telemetry and sync status for
      signed-in accounts &mdash; not placeholder numbers.</p></div></div>`);function mi(a){var e=fi();c(a,e)}var _i=g("<span> </span>"),hi=g('<span class="save-message svelte-1xc311x"> </span>'),gi=g(`<div class="settings-layout svelte-1xc311x"><div class="settings-header svelte-1xc311x"><h3 class="svelte-1xc311x">Developer Settings</h3> <p class="svelte-1xc311x">bre-service connection used for cloud sign-in and hosted sync, once you're using them.</p></div> <div class="settings-grid svelte-1xc311x"><div class="settings-card glass-card svelte-1xc311x"><h4 class="svelte-1xc311x">Connection</h4> <div class="form-group svelte-1xc311x"><label for="server-url" class="svelte-1xc311x">bre-service URL</label> <input id="server-url" type="text" class="text-input svelte-1xc311x" placeholder="http://localhost:8080"/> <span class="hint svelte-1xc311x">Base URL of a running bre-service instance (local or hosted).</span></div> <div class="form-group svelte-1xc311x"><label for="api-key" class="svelte-1xc311x">API Key (optional)</label> <input id="api-key" type="password" class="text-input svelte-1xc311x" placeholder="Enter API key"/> <span class="hint svelte-1xc311x">Only needed for endpoints that require authentication.</span></div> <button class="btn-secondary svelte-1xc311x"> </button> <!></div></div> <div class="actions-bar svelte-1xc311x"><!> <button class="btn-primary svelte-1xc311x">Save</button></div></div>`);function yi(a,e){Ne(e,!0);const n="bre_studio_settings";function s(){try{const K=localStorage.getItem(n);if(K)return JSON.parse(K)}catch{}return{serverUrl:"http://localhost:8080",apiKey:""}}const r=s();let l=J(Te(r.serverUrl)),v=J(Te(r.apiKey)),f=J("idle"),m=J(""),A=J("");function U(){localStorage.setItem(n,JSON.stringify({serverUrl:t(l),apiKey:t(v)})),h(A,"Saved to this browser's local storage."),setTimeout(()=>h(A,""),3e3)}async function W(){h(f,"checking"),h(m,"");try{const K=await fetch(`${t(l).replace(/\/$/,"")}/health`);if(K.ok){const le=await K.json().catch(()=>null);h(f,"ok"),h(m,le?`Reachable: ${JSON.stringify(le)}`:"Reachable (200 OK).",!0)}else h(f,"error"),h(m,`Server responded with HTTP ${K.status}.`)}catch(K){h(f,"error"),h(m,`Could not reach ${t(l)}: ${K.message||K}`)}}var oe=gi(),P=o(i(oe),2),$=i(P),R=o(i($),2),y=o(i(R),2),k=o(R,2),B=o(i(k),2),z=o(k,2),d=i(z),q=o(z,2);{var D=K=>{var le=_i();let fe;var ne=i(le);I(()=>{fe=we(le,1,"status-line svelte-1xc311x",null,fe,{ok:t(f)==="ok",error:t(f)==="error"}),j(ne,t(m))}),c(K,le)};G(q,K=>{t(m)&&K(D)})}var Q=o(P,2),ae=i(Q);{var ee=K=>{var le=hi(),fe=i(le);I(()=>j(fe,t(A))),c(K,le)};G(ae,K=>{t(A)&&K(ee)})}var ce=o(ae,2);I(()=>j(d,t(f)==="checking"?"Checking…":"Test Connection")),Le(y,()=>t(l),K=>h(l,K)),Le(B,()=>t(v),K=>h(v,K)),C("click",z,W),C("click",ce,U),c(a,oe),Ie()}Re(["click"]);var bi=g('<a class="back-to-site svelte-1n46o8q" href="/bre/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"></path><path d="M12 19l-7-7 7-7"></path></svg> <span>Back to examples</span></a>'),xi=g('<div class="studio-layout svelte-1n46o8q"><aside class="sidebar-panel glass-card svelte-1n46o8q"><div class="sidebar-logo svelte-1n46o8q"><div class="logo-icon svelte-1n46o8q"><span>D</span></div> <div class="logo-text svelte-1n46o8q"><h2 class="svelte-1n46o8q">Datalila</h2> <span class="svelte-1n46o8q">Rules Studio</span></div></div> <nav class="sidebar-nav svelte-1n46o8q"><button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon svelte-1n46o8q"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg> <span>Rulesets Modeler</span></button> <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon svelte-1n46o8q"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> <span>Sync & Analytics</span></button> <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="nav-icon svelte-1n46o8q"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> <span>Developer Settings</span></button></nav> <!></aside> <main class="main-workspace svelte-1n46o8q"><!></main></div>');function wi(a){let e=J("modeler");var n=xi(),s=i(n),r=o(i(s),2),l=i(r);let v;var f=o(l,2);let m;var A=o(f,2);let U;var W=o(r,2);{var oe=B=>{var z=bi();c(B,z)};G(W,B=>{Et||B(oe)})}var P=o(s,2),$=i(P);{var R=B=>{pi(B,{})},y=B=>{mi(B)},k=B=>{yi(B,{})};G($,B=>{t(e)==="modeler"?B(R):t(e)==="analytics"?B(y,1):B(k,-1)})}I(()=>{v=we(l,1,"nav-item svelte-1n46o8q",null,v,{active:t(e)==="modeler"}),m=we(f,1,"nav-item svelte-1n46o8q",null,m,{active:t(e)==="analytics"}),U=we(A,1,"nav-item svelte-1n46o8q",null,U,{active:t(e)==="settings"})}),C("click",l,()=>h(e,"modeler")),C("click",f,()=>h(e,"analytics")),C("click",A,()=>h(e,"settings")),c(a,n)}Re(["click"]);function kt(a){const e=document.getElementById("app");e&&(e.innerHTML=`<div style="padding:2rem;font-family:monospace;white-space:pre-wrap;color:#a23b2e;background:#fbeae7;">${a}</div>`)}window.addEventListener("error",a=>{var e;console.error("Uncaught error:",a.error||a.message),kt(`Uncaught error:
${((e=a.error)==null?void 0:e.stack)||a.message}`)});window.addEventListener("unhandledrejection",a=>{var e;console.error("Unhandled promise rejection:",a.reason),kt(`Unhandled promise rejection:
${((e=a.reason)==null?void 0:e.stack)||a.reason}`)});let Ei;try{Ei=dn(wi,{target:document.getElementById("app")})}catch(a){console.error("Failed to mount app:",a),kt(`Failed to mount app:
${(a==null?void 0:a.stack)||a}`)}

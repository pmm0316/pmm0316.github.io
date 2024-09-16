import{b as V,k as X,d as b,u as R,o as a,a as d,n as p,f as s,r as N,O as h,t as T,A as C,g as i,z as q,j as W,U as G,h as O,X as P,$ as oe,F as E,a3 as A,y as B,e as c,a5 as ne,R as ie,V as J,c as Q,S as Y,w as n,B as re,a6 as ce,a7 as de}from"./index-fTcqjtjT.js";import{E as pe,a as ue}from"./el-col-rlLTxaEb.js";import{g as me,f as fe}from"./vnode--7GScF8s.js";import{_ as H,e as M,i as _e,E as he}from"./constants-t6MtW3sl.js";import{u as ye}from"./use-form-common-props-oBNYtFD-.js";import{_ as be}from"./_plugin-vue_export-helper-x3n3nnut.js";import"./typescript-WBLZcIum.js";const ve=V({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:X([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),ge=b({name:"ElCard"}),Se=b({...ge,props:ve,setup(u){const l=R("card");return(e,w)=>(a(),d("div",{class:p([s(l).b(),s(l).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(a(),d("div",{key:0,class:p(s(l).e("header"))},[N(e.$slots,"header",{},()=>[h(T(e.header),1)])],2)):C("v-if",!0),i("div",{class:p([s(l).e("body"),e.bodyClass]),style:q(e.bodyStyle)},[N(e.$slots,"default")],6),e.$slots.footer||e.footer?(a(),d("div",{key:1,class:p(s(l).e("footer"))},[N(e.$slots,"footer",{},()=>[h(T(e.footer),1)])],2)):C("v-if",!0)],2))}});var we=H(Se,[["__file","card.vue"]]);const $e=W(we),U=Symbol("elDescriptions");var j=b({name:"ElDescriptionsCell",props:{cell:{type:Object},tag:{type:String,default:"td"},type:{type:String}},setup(){return{descriptions:G(U,{})}},render(){var u,l,e,w,t,_,$;const m=me(this.cell),o=(((u=this.cell)==null?void 0:u.dirs)||[]).map(ee=>{const{dir:te,arg:se,modifiers:le,value:ae}=ee;return[te,ae,se,le]}),{border:y,direction:f}=this.descriptions,r=f==="vertical",k=((w=(e=(l=this.cell)==null?void 0:l.children)==null?void 0:e.label)==null?void 0:w.call(e))||m.label,g=($=(_=(t=this.cell)==null?void 0:t.children)==null?void 0:_.default)==null?void 0:$.call(_),S=m.span,z=m.align?`is-${m.align}`:"",I=m.labelAlign?`is-${m.labelAlign}`:z,F=m.className,L=m.labelClassName,K={width:M(m.width),minWidth:M(m.minWidth)},v=R("descriptions");switch(this.type){case"label":return O(P(this.tag,{style:K,class:[v.e("cell"),v.e("label"),v.is("bordered-label",y),v.is("vertical-label",r),I,L],colSpan:r?S:1},k),o);case"content":return O(P(this.tag,{style:K,class:[v.e("cell"),v.e("content"),v.is("bordered-content",y),v.is("vertical-content",r),z,F],colSpan:r?S:S*2-1},g),o);default:return O(P("td",{style:K,class:[v.e("cell"),z],colSpan:S},[oe(k)?void 0:P("span",{class:[v.e("label"),L]},k),P("span",{class:[v.e("content"),F]},g)]),o)}}});const ke=V({row:{type:X(Array),default:()=>[]}}),Ee={key:1},Ce=b({name:"ElDescriptionsRow"}),Ne=b({...Ce,props:ke,setup(u){const l=G(U,{});return(e,w)=>s(l).direction==="vertical"?(a(),d(E,{key:0},[i("tr",null,[(a(!0),d(E,null,A(e.row,(t,_)=>(a(),B(s(j),{key:`tr1-${_}`,cell:t,tag:"th",type:"label"},null,8,["cell"]))),128))]),i("tr",null,[(a(!0),d(E,null,A(e.row,(t,_)=>(a(),B(s(j),{key:`tr2-${_}`,cell:t,tag:"td",type:"content"},null,8,["cell"]))),128))])],64)):(a(),d("tr",Ee,[(a(!0),d(E,null,A(e.row,(t,_)=>(a(),d(E,{key:`tr3-${_}`},[s(l).border?(a(),d(E,{key:0},[c(s(j),{cell:t,tag:"td",type:"label"},null,8,["cell"]),c(s(j),{cell:t,tag:"td",type:"content"},null,8,["cell"])],64)):(a(),B(s(j),{key:1,cell:t,tag:"td",type:"both"},null,8,["cell"]))],64))),128))]))}});var De=H(Ne,[["__file","descriptions-row.vue"]]);const Ie=V({border:{type:Boolean,default:!1},column:{type:Number,default:3},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},size:ne,title:{type:String,default:""},extra:{type:String,default:""}}),Te=b({name:"ElDescriptions"}),ze=b({...Te,props:Ie,setup(u){const l=u,e=R("descriptions"),w=ye(),t=ie();J(U,l);const _=Q(()=>[e.b(),e.m(w.value)]),$=(o,y,f,r=!1)=>(o.props||(o.props={}),y>f&&(o.props.span=f),r&&(o.props.span=y),o),m=()=>{if(!t.default)return[];const o=fe(t.default()).filter(g=>{var S;return((S=g==null?void 0:g.type)==null?void 0:S.name)==="ElDescriptionsItem"}),y=[];let f=[],r=l.column,k=0;return o.forEach((g,S)=>{var z;const I=((z=g.props)==null?void 0:z.span)||1;if(S<o.length-1&&(k+=I>r?r:I),S===o.length-1){const F=l.column-k%l.column;f.push($(g,F,r,!0)),y.push(f);return}I<r?(r-=I,f.push(g)):(f.push($(g,I,r)),y.push(f),r=l.column,f=[])}),y};return(o,y)=>(a(),d("div",{class:p(s(_))},[o.title||o.extra||o.$slots.title||o.$slots.extra?(a(),d("div",{key:0,class:p(s(e).e("header"))},[i("div",{class:p(s(e).e("title"))},[N(o.$slots,"title",{},()=>[h(T(o.title),1)])],2),i("div",{class:p(s(e).e("extra"))},[N(o.$slots,"extra",{},()=>[h(T(o.extra),1)])],2)],2)):C("v-if",!0),i("div",{class:p(s(e).e("body"))},[i("table",{class:p([s(e).e("table"),s(e).is("bordered",o.border)])},[i("tbody",null,[(a(!0),d(E,null,A(m(),(f,r)=>(a(),B(De,{key:r,row:f},null,8,["row"]))),128))])],2)],2)],2))}});var Pe=H(ze,[["__file","description.vue"]]);const Be=V({label:{type:String,default:""},span:{type:Number,default:1},width:{type:[String,Number],default:""},minWidth:{type:[String,Number],default:""},align:{type:String,default:"left"},labelAlign:{type:String,default:""},className:{type:String,default:""},labelClassName:{type:String,default:""}}),Z=b({name:"ElDescriptionsItem",props:Be}),je=W(Pe,{DescriptionsItem:Z}),Ae=Y(Z),Ve=b({name:"ElTimeline",setup(u,{slots:l}){const e=R("timeline");return J("timeline",l),()=>P("ul",{class:[e.b()]},[N(l,"default")])}}),Re=V({timestamp:{type:String,default:""},hideTimestamp:{type:Boolean,default:!1},center:{type:Boolean,default:!1},placement:{type:String,values:["top","bottom"],default:"bottom"},type:{type:String,values:["primary","success","warning","danger","info"],default:""},color:{type:String,default:""},size:{type:String,values:["normal","large"],default:"normal"},icon:{type:_e},hollow:{type:Boolean,default:!1}}),Fe=b({name:"ElTimelineItem"}),He=b({...Fe,props:Re,setup(u){const l=u,e=R("timeline-item"),w=Q(()=>[e.e("node"),e.em("node",l.size||""),e.em("node",l.type||""),e.is("hollow",l.hollow)]);return(t,_)=>(a(),d("li",{class:p([s(e).b(),{[s(e).e("center")]:t.center}])},[i("div",{class:p(s(e).e("tail"))},null,2),t.$slots.dot?C("v-if",!0):(a(),d("div",{key:0,class:p(s(w)),style:q({backgroundColor:t.color})},[t.icon?(a(),B(s(he),{key:0,class:p(s(e).e("icon"))},{default:n(()=>[(a(),B(re(t.icon)))]),_:1},8,["class"])):C("v-if",!0)],6)),t.$slots.dot?(a(),d("div",{key:1,class:p(s(e).e("dot"))},[N(t.$slots,"dot")],2)):C("v-if",!0),i("div",{class:p(s(e).e("wrapper"))},[!t.hideTimestamp&&t.placement==="top"?(a(),d("div",{key:0,class:p([s(e).e("timestamp"),s(e).is("top")])},T(t.timestamp),3)):C("v-if",!0),i("div",{class:p(s(e).e("content"))},[N(t.$slots,"default")],2),!t.hideTimestamp&&t.placement==="bottom"?(a(),d("div",{key:1,class:p([s(e).e("timestamp"),s(e).is("bottom")])},T(t.timestamp),3)):C("v-if",!0)],2)],2))}});var x=H(He,[["__file","timeline-item.vue"]]);const Ke=W(Ve,{TimelineItem:x}),Oe=Y(x),D=u=>(ce("data-v-bdb5e4dd"),u=u(),de(),u),We={class:"home-page"},Ue=D(()=>i("div",{class:"card-header"},[i("span",null,"基本信息")],-1)),Le=D(()=>i("div",{class:"card-header"},[i("span",null,"技能证书")],-1)),Me=D(()=>i("div",{class:"card-header"},[i("span",null,"技术栈")],-1)),Xe=D(()=>i("div",null," 1. 熟练掌握前端框架 vue2，react，ant-design，element-ui，ant-design-mobile，protable ",-1)),qe=D(()=>i("div",null,"2. 熟悉可视化图表库 echarts，Highcharts",-1)),Ge=D(()=>i("div",null,"3. 了解 3D 的 js 库 threejs、cesium",-1)),Je=D(()=>i("div",null,"4. 了解打包工具 webpack，vite",-1)),Qe=D(()=>i("div",null,"5. 了解 java，springMVC，mybatis",-1)),Ye=b({__name:"HomePage",setup(u){const l=[{content:"软件设计师",timestamp:"2023-11",color:"#0bbd87"},{content:"英语CET-4",timestamp:"2012-06",color:"#0bbd87"}];return(e,w)=>{const t=Ae,_=je,$=$e,m=pe,o=Oe,y=Ke,f=ue;return a(),d("div",We,[c(f,{gutter:20},{default:n(()=>[c(m,{span:16},{default:n(()=>[c($,{class:"box-card"},{header:n(()=>[Ue]),default:n(()=>[c(_,{title:""},{default:n(()=>[c(t,{label:"姓名"},{default:n(()=>[h("彭明明")]),_:1}),c(t,{label:"出生年月"},{default:n(()=>[h("1993.03")]),_:1}),c(t,{label:"民族"},{default:n(()=>[h("汉")]),_:1}),c(t,{label:"性别"},{default:n(()=>[h("男")]),_:1}),c(t,{label:"邮箱"},{default:n(()=>[h("18267914053@163.com")]),_:1}),c(t,{label:"联系电话"},{default:n(()=>[h("18267914053")]),_:1}),c(t,{label:"毕业院校"},{default:n(()=>[h("浙江师范大学行知学院")]),_:1}),c(t,{label:"学历"},{default:n(()=>[h("本科（统招）")]),_:1}),c(t,{label:"专业"},{default:n(()=>[h("光信息科学与技术")]),_:1})]),_:1})]),_:1})]),_:1}),c(m,{span:8},{default:n(()=>[c($,{class:"box-card"},{header:n(()=>[Le]),default:n(()=>[c(y,null,{default:n(()=>[(a(),d(E,null,A(l,(r,k)=>c(o,{key:k,timestamp:r.timestamp,color:r.color},{default:n(()=>[h(T(r.content),1)]),_:2},1032,["timestamp","color"])),64))]),_:1})]),_:1})]),_:1})]),_:1}),c($,{class:"box-card"},{header:n(()=>[Me]),default:n(()=>[Xe,qe,Ge,Je,Qe]),_:1})])}}}),ot=be(Ye,[["__scopeId","data-v-bdb5e4dd"]]);export{ot as default};

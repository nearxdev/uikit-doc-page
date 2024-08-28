import{j as e}from"./jsx-runtime-qGIIFXMu.js";import{d as n}from"./download-eMb6QYt3.js";import"./index-CDs2tPxN.js";const u=({type:g="text",placeholder:f,value:x,onChange:h,rightSlot:r,label:b,leftSlot:l,...y})=>{const T=()=>{let t={};return l&&(t={...t,paddingLeft:"2.5rem"}),r&&(t={...t,paddingRight:"2.5rem"}),t};return e.jsxs("div",{children:[e.jsx("div",{className:"pb-1",children:e.jsx("label",{className:"font-semibold text-neutral-[#303030]",children:b})}),e.jsxs("div",{className:"relative",children:[l&&e.jsx("div",{className:"absolute h-full top-0 left-0 flex items-center",style:{paddingLeft:"8px"},children:l}),e.jsx("input",{placeholder:f,type:g,value:x,onChange:h,className:"border border-[#EBEBEB] bg-[#EBEBEB] rounded-3xl px-4 h-[40px] w-full",...y,style:T()}),r&&e.jsx("div",{className:"absolute top-0 h-full right-0 flex items-center",style:{paddingRight:"8px"},children:r})]})]})};u.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"ChangeEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ChangeEventHandler<HTMLInputElement>"},description:""},rightSlot:{required:!1,tsType:{name:"ReactNode"},description:""},leftSlot:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""}},composes:["InputHTMLAttributes"]};const j={component:u,argTypes:{label:{type:"string",description:"String or ReactNode"}}},a={tags:["autodocs"],args:{placeholder:"Digite aqui",label:"label"}},s={tags:["autodocs"],args:{placeholder:"Digite aqui",leftSlot:e.jsx("img",{src:n}),rightSlot:e.jsx("img",{src:n})}};var i,o,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  tags: ['autodocs'],
  args: {
    placeholder: "Digite aqui",
    label: "label"
  }
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  tags: ['autodocs'],
  args: {
    placeholder: "Digite aqui",
    leftSlot: <img src={download} />,
    rightSlot: <img src={download} />
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const q=["Default","WithoutLabel"];export{a as Default,s as WithoutLabel,q as __namedExportsOrder,j as default};

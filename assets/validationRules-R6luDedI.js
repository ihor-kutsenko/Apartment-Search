import{_ as o,o as n,c as u,w as l,k as d,g as m,l as p,t as h,n as c}from"./index-Dl7ltKz6.js";const f={name:"CustomInput",data(){return{isValid:!0,error:"",isFirstInput:!0}},inject:{form:{default:null}},inheritAttrs:!1,props:{modelValue:String,errorMessage:{type:String,default:""},rules:{type:Array,default:()=>[]}},computed:{internalValue:{get(){return this.modelValue},set(e){this.$emit("update:modelValue",e)}}},watch:{modelValue(){this.isFirstInput||this.validate()}},mounted(){this.form&&this.form.registerInput(this)},beforeDestroy(){this.form&&this.form.unRegisterInput(this)},methods:{onInput(e){this.$emit("input",e.target.value)},validate(){return this.isValid=this.rules.every(e=>{const{hasPassed:s,message:i}=e(this.modelValue);return s||(this.error=i||this.errorMessage),s}),this.isValid},blurHandler(){this.isFirstInput&&this.validate,this.isFirstInput=!1},reset(){this.isFirstInput=!0,this.isValid=!0,this.$emit("update:modelValue","")}}},g={class:"wrapper-input"},V={key:0,class:"custom-input__error"};function I(e,s,i,_,a,t){return n(),u("div",g,[l(m("input",p({onInput:s[0]||(s[0]=(...r)=>t.onInput&&t.onInput(...r)),"onUpdate:modelValue":s[1]||(s[1]=r=>t.internalValue=r)},e.$attrs,{onBlur:s[2]||(s[2]=(...r)=>t.blurHandler&&t.blurHandler(...r)),class:["custom-input",!a.isValid&&"custom-input--error"]}),null,16),[[d,t.internalValue]]),a.isValid?c("",!0):(n(),u("span",V,h(a.error),1))])}const y=o(f,[["render",I],["__scopeId","data-v-53a6ca34"]]),b=e=>({hasPassed:!!e,message:" This field required"}),w=e=>s=>({hasPassed:s.length<=e,message:"Too long message"}),A=e=>({hasPassed:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(e),message:"Wrong email address"}),P=e=>({hasPassed:/^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(e),message:"The password must contain one number and one symbol"});export{y as C,w as c,A as e,b as i,P as p};

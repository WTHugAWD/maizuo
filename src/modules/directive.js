import Vue from "vue"

//注册全局的自定义指令
Vue.directive("backTop",{
    bind(el,binding,vnode){
        let eventType = binding.arg || "click"
        el.addEventListener("click",e=>{
            window.scrollTo(0,0)
        })
        
    }
})
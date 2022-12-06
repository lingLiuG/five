import HelloName from "./name/index.vue"

export { HelloName } 

const component = [ HelloName ]

const SayHelloUI = {
  install(App){
    component.forEach((item)=>{
      App.component(item.name,HelloName)
    })
  }
}

export default SayHelloUI
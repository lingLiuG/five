import HelloName from "./name/index.vue"
import HelloButton from "./button/index.vue"

export { HelloName ,HelloButton  } 

const component = [ HelloName,HelloButton ]

const SayHelloUI = {
  install(App){
    component.forEach((item)=>{
      console.log(item)
      App.component(item.name,item)
    })
  }
}

export default SayHelloUI
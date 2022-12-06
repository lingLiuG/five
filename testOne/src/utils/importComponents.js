const componentsMoudle = import.meta.globEager("../components/*.vue")
const componentsMoudleObj = {}
Object.values(componentsMoudle).forEach(d=>{
    componentsMoudleObj[d.default.name] = d.default
})
export default componentsMoudleObj
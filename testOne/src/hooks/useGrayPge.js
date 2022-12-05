import { onMounted } from "vue";

export function useGrayPge(){
  function handleGrayPage() {
    document.getElementsByTagName('html')[0].style.cssText = "filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);"
  }
  onMounted(()=>{
    handleGrayPage()
  })
}
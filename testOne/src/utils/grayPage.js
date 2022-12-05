// 灰度网页
export const handleGrayPage = ()=>{
  document.getElementsByTagName('html')[0].style.cssText = "filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(100%);"
}


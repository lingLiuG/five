import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "lib"), //输出文件名称
    lib: {
    	entry: {
        index:path.resolve(__dirname, "./src/components/sayHello-ui/index.js"), 
      },//指定组件编译入口文件
    	name: "li-ui",
    	fileName: format => `index.${format}.js`,
      formats:['umd']
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        assetFileNames: (info,a)=>{
          console.log('info',info)
          console.log('a',a)
          return '[ext]/index.[hash].[ext]'
        },
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

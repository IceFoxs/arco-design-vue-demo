<script setup>
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import { IconPlus } from '@arco-design/web-vue/es/icon';
import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
    const loading1 = ref(true);
    const loading2 = ref(true);
    const handleClick1 = () => {
      loading1.value = !loading1.value
    }
    const handleClick2 = () => {
      loading2.value = !loading2.value
    }
    const handleClick3 = () => {
      loading1.value = !loading1.value
      loading2.value = !loading2.value
    }
    const darkMode=()=>{
      document.body.setAttribute('arco-theme', 'dark')
    }
    const whiteMode=()=>{
      // 恢复亮色主题
      document.body.removeAttribute('arco-theme');
    }
</script>
<template>
   <div class="layout-demo">
    <a-layout style="height:100vh;">
      <a-layout-header class="header">Header</a-layout-header>
      <a-layout-content>
        <a-space>
          <a-button  @click="darkMode">
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none"><path d="M42.108 29.769c.124-.387-.258-.736-.645-.613A17.99 17.99 0 0136 30c-9.941 0-18-8.059-18-18 0-1.905.296-3.74.844-5.463.123-.387-.226-.769-.613-.645C10.558 8.334 5 15.518 5 24c0 10.493 8.507 19 19 19 8.482 0 15.666-5.558 18.108-13.231z" fill="#4E5969"/></svg>
            黑暗模式</a-button>
          <a-button  @click="whiteMode" >
            <svg width="24" height="24" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="9" fill="#4E5969"/><path d="M21 5.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5zM21 37.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5zM42.5 21a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zM10.5 21a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h5zM39.203 34.96a.5.5 0 010 .707l-3.536 3.536a.5.5 0 01-.707 0l-3.535-3.536a.5.5 0 010-.707l3.535-3.535a.5.5 0 01.707 0l3.536 3.535zM16.575 12.333a.5.5 0 010 .707l-3.535 3.535a.5.5 0 01-.707 0L8.797 13.04a.5.5 0 010-.707l3.536-3.536a.5.5 0 01.707 0l3.535 3.536zM13.04 39.203a.5.5 0 01-.707 0l-3.536-3.536a.5.5 0 010-.707l3.536-3.535a.5.5 0 01.707 0l3.536 3.535a.5.5 0 010 .707l-3.536 3.536zM35.668 16.575a.5.5 0 01-.708 0l-3.535-3.535a.5.5 0 010-.707l3.535-3.536a.5.5 0 01.708 0l3.535 3.536a.5.5 0 010 .707l-3.535 3.535z" fill="#4E5969"/></svg>
            亮色模式
          </a-button>
          <a-button type="primary" loading>Primary</a-button>
          <a-button loading>Default</a-button>
          <a-button type="dashed" loading>Dashed</a-button>
          <a-button type="primary" @click="handleClick3">取消加载框</a-button>
          <a-button type="primary" :loading="loading1" @click="handleClick1">Click Me</a-button>
          <a-button type="primary" :loading="loading2" @click="handleClick2">
            <template #icon>
              <icon-plus />
            </template>
            Click Me
          </a-button>
        </a-space>
      </a-layout-content>
      <a-layout-footer  class="footer" >Footer</a-layout-footer>
    </a-layout>
  </div>
  
</template>

<style scoped>

.layout-demo{

}

.header{
  height:60px;
  line-height: 60px;
  text-align: center;
}

.footer{
  height:60px;
  line-height: 60px;
  text-align: center;
  
}

</style>

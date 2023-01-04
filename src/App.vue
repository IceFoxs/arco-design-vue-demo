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
   <a-space>
    <a-button type="primary" @click="darkMode">黑暗模式</a-button>
    <a-button type="primary" @click="whiteMode" >亮色模式</a-button>
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
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

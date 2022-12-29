<script setup>
import { ref, reactive } from 'vue';
const items = reactive([{
  path: '/index',
  content:'home'
},{
  path: '/finance',
  content:'finance'
}]);
</script>


<template>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item :index="v.path" v-for="v in items" :key="v.path">
          <el-icon></el-icon>
          <span>{{ v.content }}</span>
        </el-menu-item>
      </el-menu>
  </template>

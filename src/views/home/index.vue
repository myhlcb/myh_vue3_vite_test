<script setup>
import {ref} from 'vue'
import NavMenu from './navMenu.vue'
</script>

<template>
  <div id="module">
    <el-container>
      <!-- 左侧导航 -->
      <NavMenu />
      <!-- 右侧主题 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
  </template>

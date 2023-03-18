<template>
<el-button @click="test">222222</el-button>
  <div class="test">

    <el-popover
      :visible="visible"
      trigger="click"
      title="With title"
      :show-arrow="false"
      :teleported="false"
    >
      <span> Some content </span>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ref, unref } from 'vue';
import { ClickOutside as vClickOutside } from 'element-plus';
const visible = ref(true);
const test = () => {
  visible.value = !visible.value
}
</script>

<style>
.test {
  position: relative;
  margin-top: 100px;
  height: 2000px;
  border: 1px solid #000000;
}
</style>

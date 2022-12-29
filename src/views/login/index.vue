<script setup>
import { ref, reactive } from 'vue';
import { login } from '../../api';
import { useRouter } from 'vue-router';
import { setToken } from '../../utils/auth';
const router = useRouter();
const ruleFormRef = ref();
const temp = reactive({
  account: 'admin',
  password: '123456'
});
const rules = reactive({
  account: [
    { required: true, message: 'Please input account', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 3, max: 6, message: 'Length should be 3 to 6', trigger: 'blur' },
  ],
});
const submitForm = async (formEl) => {
  if (!formEl) return;
  // console.log(formEl,11111)
  formEl.validate(async valid => {
    if (valid) {
      // TODO
      // let res = await login(temp);
      // const { token } = res.data;
      // // 缓存token
      // setToken(token);
      // 跳转首页
      router.push('./home')
      } else {
      console.log('error submit!', fields);
    }
  });
};
</script>
<template>
  <div class="login">
    <div class="login-content">
      <el-form 
      ref="ruleFormRef" 
      :model="temp" 
      :rules="rules" 
      label-width="120px" 
      class="demo-ruleForm">
        <el-form-item label="用户名" prop="account">
          <el-input v-model="temp.account" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="temp.password" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

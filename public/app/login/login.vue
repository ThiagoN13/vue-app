<template>
  <div id="login">
    <el-container>

      <el-col :xs="{span: 24}" :md="{span: 11, offset: 10}" :lg="{span: 10, push:8}">
        <img src="../../assets/img/logo.png">
      </el-col>
      <el-main>
        <el-col :xs="{span: 24}" :md="{span: 10, push:8}" :lg="{span: 7, push:8}">
          <el-form :model="auth">
            <el-form-item label="Login">
              <el-input v-model="auth.login" placeholder="Login"></el-input>
            </el-form-item>

            <el-form-item label="Senha">
              <el-input v-model="auth.password" placeholder="Senha"></el-input>
            </el-form-item>
            
            <el-form-item>
              <el-button type="primary" @click="submitForm">Salvar</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-main>

      <el-footer class="footer">
        Footer
      </el-footer>
    </el-container>

  </div>
</template>

<script>
  function submitForm () {
    this.$router.push('/home')
  }

  export default {
    data () {
      return {
        auth: {
          login: '',
          pasword: ''
        }
      }
    },
    methods: {
      submitForm
    }
  }
</script>

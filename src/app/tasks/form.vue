<template>
  <el-container>
    <el-col :xs="{span: 24}" :md="{span: 10, push:8}" :lg="{span: 6, push:8}">
      <el-form :model="task">
        <el-form-item label="Nome da tarefa">
          <el-input v-model="task.name" placeholder="Nome da tarefa"></el-input>
        </el-form-item>
        
        <el-form-item label="Tempo estimado">
          <el-date-picker
            v-model="task.dateRange"
            type="datetimerange"
            format="dd/MM/yyyy HH:mm"
            start-placeholder="Data de inicio"
            end-placeholder="Data finalização"
            :default-time="['12:00:00', '08:00:00']">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="Descrição">
          <el-input type="textarea" v-model="task.desc"></el-input>
        </el-form-item>

        <el-form-item>
          <span class="demonstration">Grau de prioridade</span>

          <el-slider
            v-model="task.priority"
            :step="25"
            show-stops>
          </el-slider>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Salvar</el-button>
        </el-form-item>
      </el-form>
    </el-col>

  </el-container>
</template>

<script>
  export default {
    data () {
      return {
        task: {
          name: '',
          dateRange: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        })
      }
    }
  }
</script>

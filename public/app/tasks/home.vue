<template>
  <div id='home'>
    <router-view></router-view>
    <el-row>
      <el-col :span='18'>
        <el-button type='success' size='mini' icon='el-icon-check' @click="changeStatus({ set: true })" :disabled="selecteds.length <= 0">Marcar como feito</el-button>

        <router-link to="form">
          <el-button type='primary' size='mini' icon='el-icon-plus'>Adicionar tarefas</el-button>
        </router-link>

        <el-button-group>
          <el-button type='danger' size='mini' icon='el-icon-delete' @click="deleteSelecteds" :disabled="selecteds.length <= 0">Deletar selecionados</el-button>
        </el-button-group>

      </el-col>
      <el-col :span='6'>
        <el-input v-model='search' size='mini' placeholder='Buscar'></el-input>
        <p>{{ filteredList }}</p>
      </el-col>
    </el-row>
    
    <el-table 
      :data='dataTable'
      @selection-change='setSelecteds'
      stripe style='width: 100%'>

      <el-table-column
        type='selection'
        width='55'>
      </el-table-column>
      
      <el-table-column label='Data' sortable prop='date'>
        <template slot-scope='scope'>
          <i class='el-icon-time'></i>
          <span style='margin-left: 5px'>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label='Nome' sortable prop='name'></el-table-column>

      <el-table-column type='expand' label='Detalhes' width='100'>
        <template slot-scope='props'> 
          <el-row>
            <el-col :span='11'>
              <p>Tarefa: {{ props.row.name }}</p>
              <p>
                Status: 
                <el-tag size="mini" v-if="!props.row.status" type="warning">Pendente</el-tag>
                <el-tag size="mini" v-else type="success">Concluido</el-tag>
              </p>
              <p>Data: {{ props.row.date }}</p>
            </el-col>

            <el-col :span='8'>
              <p>Prioridade: {{ props.row.priority }}</p>
              <p>Descrição: {{ props.row.description }} </p>
            </el-col>

            <el-col :span='5' :push='1'>
              <el-button-group>
                <el-button type='success' icon='el-icon-check'></el-button>
                <router-link to="tasks/form">
                  <el-button type='primary' icon='el-icon-edit'></el-button>
                </router-link>
                <el-button type='danger' icon='el-icon-delete'></el-button>
              </el-button-group>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class='block'
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes='[5, 10, 20, 200]'
      :page-size='5'
      layout='total, sizes, prev, pager, next, jumper'
      :total='lengthTable'>
    </el-pagination>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css'
  import { tasks } from './mockTasks.json'

  let currentPage = 1
  let itemsPerPage = 5
  let lengthTable = tasks.length

  function deleteSelecteds () {
    const idsSelecteds = this.selecteds.map(selected => selected._id)

    if (!idsSelecteds.length) return 

    this.tasks = this.tasks.filter(element => !idsSelecteds.includes(element._id))

    this.dataTable = this.paginationFilter(this.tasks)

    this.$notify({
      title: 'Sucesso!',
      message: 'Tarefas excluidas com sucesso!',
      type: 'success'
    })
  }

  function setDone () {
    
  }

  /**
   * @function paginationFilter
   * @param {Array<Object>} tasks
   * @return {Array<Object>}
   */
  function paginationFilter (tasksList = []) {
    const init = itemsPerPage * currentPage - itemsPerPage
    const end = init + itemsPerPage

    return tasksList.slice(init, end)
  }

  function handleSizeChange (val) {
    itemsPerPage = val
    this.dataTable = this.paginationFilter(this.tasks)
  }

  function handleCurrentChange (val) {
    currentPage = val
    this.dataTable = this.paginationFilter(this.tasks)
  }

  function setSelecteds (tableSelectds) {
    this.selecteds = tableSelectds  
  }

  function changeStatus ({ set }) {
    const idsSelecteds = this.selecteds.map(selected => selected._id)

    if (!idsSelecteds.length) return 

    this.tasks = this.tasks.map(task => {
      if (!idsSelecteds.includes(task._id)) return task

      task.status = set || !task.status

      return task
    })

    this.$notify({
      title: 'Sucesso!',
      message: 'Status das tarefas alterado com sucesso',
      type: 'success'
    })
  }

  function getData () {
    this.$http.get('http://localhost:3000/api/task', { headers: { } })
      .then(response => {
        console.log(  )
      })
      .catch(error => {
        console.error(error)
      })
  }

  export default {
    name: 'home',
    data () {
      return {
        lengthTable,
        itemsPerPage: 5,
        selecteds: [],
        search: '',
        tasks,
        dataTable: this.paginationFilter(tasks)
      }
    },
    methods: {
      handleSizeChange,
      handleCurrentChange,
      setSelecteds,
      paginationFilter,
      changeStatus,
      getData,
      deleteSelecteds
    },
    computed: {
      filteredList () {
        // this.dataTable = this.tasks.filter(task => {
        //   return task.name.toLowerCase().includes(this.search.toLowerCase())
        // })

        // this.lengthTable = this.dataTable.length
      }
    }
  }
</script>

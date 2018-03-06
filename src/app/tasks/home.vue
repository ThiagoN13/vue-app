<template>
  <div id='home'>
    <router-view></router-view>
    <el-row>
      <el-col :span='18'>
        <router-link to="tasks/form">
          <el-button type='primary' size='mini' icon='el-icon-plus'>Adicionar tarefas</el-button>
        </router-link>

        <el-button type='danger' size='mini' icon='el-icon-delete' @click="deleteSelecteds">Deletar selecionados</el-button>
      </el-col>
      <el-col :span='6'>
        <el-input v-model='search' size='mini' placeholder='Buscar'></el-input>
        <p>{{ search }}</p>
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
            <el-col :span='20'>
              <p>Status: {{ props.row.state }}</p>
              <p>Data: {{ props.row.city }}</p>
              <p>Prioridade: {{ props.row.address }}</p>
            </el-col>

            <el-col :span='4' :push='2'>
              <el-button-group>
                <el-button type='primary' icon='el-icon-edit'></el-button>
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
      :total='tableData.length'>
    </el-pagination>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
let currentPage = 1
let itemsPerPage = 5
let selecteds = []
const tableData = [
  {
    date: '2016-05-03',
    name: 'Teste1',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Teste2',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-04',
    name: 'Teste3',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-01',
    name: 'Teste4',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-08',
    name: 'Teste5',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-06',
    name: 'Teste6',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-07',
    name: 'Teste7',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]
let dataTable = tableData

function setSelecteds (tableSelectds) {
  selecteds = tableSelectds  
}

function deleteSelecteds (params) {
  console.log(selecteds)
}

export default {
  name: 'home',
  data() {
    return {
      search: '',
      tableData,
      dataTable
    }
  },
  methods: {
    handleSizeChange (val) {
      itemsPerPage = val
      this.paginationFilter()
    },
    handleCurrentChange (val) {
      currentPage = val
      this.paginationFilter()
    },
    paginationFilter () {
      const init = itemsPerPage * currentPage - itemsPerPage
      const end = init + itemsPerPage

      this.dataTable = tableData.slice(init, end)
    },
    setSelecteds,
    deleteSelecteds
  }
}
</script>

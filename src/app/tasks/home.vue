<template>
  <div id='home'>
    <router-view></router-view>
    <el-row>
      <el-col :span='18'>
        <router-link to="tasks/form">
          <el-button type='primary' size='mini' icon='el-icon-plus'>Adicionar tarefas</el-button>
        </router-link>

        <el-button type='danger' size='mini' icon='el-icon-delete'>Deletar selecionados</el-button>
      </el-col>
      <el-col :span='6'>
        <el-input v-model='search' size='mini' placeholder='Buscar'></el-input>
      </el-col>
    </el-row>
    
    <el-table 
      :data='dataTable'
      stripe style='width: 100%'>
      <el-table-column
        type='selection'
        width='55'>
      </el-table-column>
      <el-table-column type='index' class='hidden-sm-only'></el-table-column>
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
            <el-col :span='12'>
              <p>State: {{ props.row.state }}</p>
              <p>City: {{ props.row.city }}</p>
              <p>Address: {{ props.row.address }}</p>
              <p>Zip: {{ props.row.zip }}</p>
            </el-col>

            <el-col :span='8'>
              <el-progress type="circle" :percentage="100" status="success" v-if="props.status"></el-progress>
              <el-progress type="circle" :percentage="100" status="exception" v-else></el-progress>
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
      :page-sizes='[2, 5, 100, 200]'
      :page-size='2'
      layout='total, sizes, prev, pager, next, jumper'
      :total='tableData.length'>
    </el-pagination>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
let currentPage = 1
let itemsPerPage = 2
let dataTable = []
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

function paginationFilter () {
  const init = itemsPerPage * currentPage - itemsPerPage
  const end = init + itemsPerPage

  dataTable = tableData.slice(init, end)
}

function handleCurrentChange(val) {
  currentPage = val
  console.log(`current page: ${val}`)
  paginationFilter()
}

function handleSizeChange(val) {
  itemsPerPage = val
  console.log(`${val} items per page`)
  paginationFilter()
}

paginationFilter()

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
    handleSizeChange,
    handleCurrentChange
  }
}
</script>

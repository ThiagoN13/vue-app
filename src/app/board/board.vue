<template>
  <el-container>
    <el-col :xs="{span: 24}" :md="{span: 14, push:6}" :lg="{span: 14, push:7}">

      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="State Abbreviations"
        v-model="value2"
        :titles="['Pendentes', 'Concluidos']"
        :data="data2">
      </el-transfer>
    </el-col>
  </el-container>
</template>

<script>
  function generateData () {
    const data = []
      const states = ['California', 'Illinois', 'Maryland', 'Texas', 'Florida', 'Colorado', 'Connecticut']
      const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']
      states.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          initial: initials[index]
        })
      })
      return data
  }

  export default {
    name: 'board',
    data() {
      return {
        data2: generateData(),
        value2: [],
        filterMethod(query, item) {
          return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1
        }
      }
    }
  }
</script>
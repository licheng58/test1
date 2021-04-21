<template>
  <div class="search-bar">
    <div class="top">
      <div class="left">
        <i class="icon iconfont icon-buoumaotubiao13"></i>
        <span style="font-size:16px">筛选搜索</span>
      </div>
      <div class="btn">
        <el-button @click="resert">重置</el-button>
        <el-button type="primary" @click="search">查询</el-button>
      </div>
    </div>
    <div class="bottom">
      <el-form
        ref="seachForm"
        :model="searchConfig.seachForm"
        label-width="80px"
      >
        <el-row>
          <el-col
            :span="6"
            v-for="item in searchConfig.seachItems"
            :key="item.id"
          >
            <el-form-item :label="item.label" v-if="item.type === 'input'">
              <el-input v-model="searchConfig.seachForm[item.key]"></el-input>
            </el-form-item>

            <el-form-item :label="item.label" v-if="item.type === 'select'">
              <el-select
                v-model="searchConfig.seachForm[item.key]"
                placeholder="请选择"
              >
                <el-option
                  v-for="item2 in item.options"
                  :key="item2.value"
                  :label="item2.label"
                  :value="item2.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item :label="item.label" v-if="item.type === 'cascader'">
              <el-cascader
                v-model="searchConfig.seachForm[item.key]"
                :options="item.options"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  props: {
    searchConfig: {
      type: Object,
      default: () => {
        return {}
      },
      require: true,
    },
  },

  data() {
    return {
      seachForm: {
        name: '',
      },
    }
  },

  methods: {
    // 联级
    handleChange(value) {
      // console.log(value)
    },

    // 重置
    resert() {
      for (let key in this.$parent.searchConfig.seachForm) {
        this.$parent.searchConfig.seachForm[key] = null
      }
    },

    // 搜索
    search() {
      console.log(this.searchConfig.seachForm)
    },
  },
}
</script>

<style lang="scss" scoped>
.search-bar {
  border: 1px solid #eee;
  padding: 20px;
  .icon-buoumaotubiao13 {
    font-size: 20px;
    margin-right: 5px;
  }
  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>

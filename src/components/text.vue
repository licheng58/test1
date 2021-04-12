<template>
  <div class="text">
    <!-- <el-select :clearable="clearable" placeholder v-model="newValue">
      <el-option label="草案" value="draft" />
      <el-option label="发布" value="published" />
      <el-option label="删除" value="deleted" />
    </el-select>-->
    <el-input v-model="newValue"></el-input>
  </div>
</template>

<script>
export default {
  value: {
    type: String,
    default() {
      return ''
    },
  },
  data() {
    return {
      // newValue: '',
    }
  },

  computed: {
    newValue: {
      get: function() {
        return this.value
      },
      set: function(value) {
        this.$emit('changeval', value)
      },
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>

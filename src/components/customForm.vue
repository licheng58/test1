<template>
  <div class="custom-form">
    <el-form
      ref="customForm"
      :model="customFormConfig.formData"
      label-width="80px"
    >
      <el-row>
        <el-col
          :span="6"
          v-for="item in customFormConfig.formItems"
          :key="item.id"
        >
          <!-- text  textarea-->
          <el-form-item :label="item.label" v-if="item.type === 'input'">
            <el-input
              v-model="customFormConfig.formData[item.key]"
              :type="item.inputType"
              :minlength="item.minlength"
              :maxlength="item.maxlength"
              :placeholder="item.placeholder"
              :disabled="item.disabled"
              :rows="item.rows"
              :min="item.min"
              :max="item.max"
              :resize="item.resize"
              :autofocus="item.autofocus"
            ></el-input>
          </el-form-item>

          <!-- radio -->
          <el-form-item :label="item.label" v-if="item.type === 'radio'">
            <el-radio-group v-model="customFormConfig.formData[item.key]">
              <el-radio
                v-for="radio_item in item.options"
                :key="radio_item.id"
                :label="radio_item.label"
                >{{ radio_item.value }}</el-radio
              >
            </el-radio-group>
          </el-form-item>

          <!-- select  -->
          <el-form-item :label="item.label" v-if="item.type === 'select'">
            <el-select
              v-model="customFormConfig.formData[item.key]"
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
              v-model="customFormConfig.formData[item.key]"
              :options="item.options"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    customFormConfig: {
      type: Object,
      default: () => {
        return {}
      },
      require: true,
    },
  },
}
</script>

<style></style>

<template>
  <div class="custom-form">
    <el-form
      ref="customForm"
      :model="customFormConfig.formData"
      label-width="80px"
    >
      <el-row>
        <el-col
          :span="item.span || 12"
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

          <!-- checkbox -->
          <el-form-item :label="item.label" v-if="item.type === 'checkbox'">
            <el-checkbox-group v-model="customFormConfig.formData[item.key]">
              <el-checkbox
                v-for="checkbox_item in item.options"
                :key="checkbox_item.id"
                :label="checkbox_item.label"
                >{{ checkbox_item.value }}</el-checkbox
              >
            </el-checkbox-group>
          </el-form-item>

          <!-- select  -->
          <el-form-item
            :label="item.label"
            :multiple="item.multiple"
            v-if="item.type === 'select'"
          >
            <el-select
              v-model="customFormConfig.formData[item.key]"
              placeholder="请选择"
              :multiple="item.multiple"
            >
              <el-option
                v-for="select_item in item.options"
                :key="select_item.id"
                :label="select_item.label"
                :value="select_item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>

          <!-- cascader -->
          <el-form-item :label="item.label" v-if="item.type === 'cascader'">
            <el-cascader
              v-model="customFormConfig.formData[item.key]"
              :options="item.options"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>

          <!-- 时间 -->
          <el-form-item :label="item.label" v-if="item.type === 'time'">
            <el-time-select
              v-model="customFormConfig.formData[item.key]"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
              placeholder="选择时间"
            >
            </el-time-select>
          </el-form-item>

          <!-- 日期 -->
          <el-form-item :label="item.label" v-if="item.type === 'date'">
            <el-date-picker
              v-model="customFormConfig.formData[item.key]"
              type="date"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>

          <!-- 日期+时间 -->
          <el-form-item :label="item.label" v-if="item.type === 'date_time'">
            <el-date-picker
              v-model="customFormConfig.formData[item.key]"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>

          <!-- switch -->
          <el-form-item :label="item.label" v-if="item.type === 'switch'">
            <el-switch v-model="customFormConfig.formData[item.key]">
            </el-switch>
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

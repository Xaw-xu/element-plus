import { buildProps } from '@element-plus/utils'
import { useFormSizeProp } from '@element-plus/components/form'
import { radioEmits } from './radio'
import type { ExtractPropTypes } from '@vue/runtime-core'
import type RadioGroup from './radio-group.vue'

export const radioGroupProps = buildProps({
  /**
   * @description native `id` attribute
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description the size of radio buttons or bordered radios
   */
  size: useFormSizeProp,
  /**
   * @description whether the nesting radios are disabled
   */
  disabled: Boolean,
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  /**
   * @description border and background color when button is active
   */
  fill: {
    type: String,
    default: '',
  },
  /**
   * @description same as `aria-label` in RadioGroup
   */
  label: {
    type: String,
    default: undefined,
  },
  /**
   * @description font color when button is active
   */
  textColor: {
    type: String,
    default: '',
  },
  /**
   * @description native `name` attribute
   */
  name: {
    type: String,
    default: undefined,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
} as const)
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioGroupEmits = radioEmits
export type RadioGroupEmits = typeof radioGroupEmits
export type RadioGroupInstance = InstanceType<typeof RadioGroup>

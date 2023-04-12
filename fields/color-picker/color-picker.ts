import { Field } from 'payload/types';
import { InputField } from './input-field';

export const colorField: Field = {
  name: 'color',
  type: 'text',
  admin: {
    components: {
      Field: InputField,
    },
  },
};

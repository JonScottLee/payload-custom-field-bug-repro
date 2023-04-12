import { Block } from "payload/types";
import { colorField } from "../../fields/color-picker/color-picker";
export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    colorField,
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Content;

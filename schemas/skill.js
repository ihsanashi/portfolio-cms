import { BiCodeBlock } from 'react-icons/bi';

export default {
  title: 'Skill',
  name: 'skill',
  icon: BiCodeBlock,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [
        {
          title: 'Caption',
          name: 'caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
        {
          title: 'Attribution',
          name: 'attribution',
          type: 'string',
        },
      ],
    },
  ],
};

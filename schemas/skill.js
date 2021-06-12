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
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      description: 'What category does this skill fall under?',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
        ],
        layout: 'dropdown',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
};

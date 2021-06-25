import { BiFolderOpen } from 'react-icons/bi';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: BiFolderOpen,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'URL of the category title',
      validation: (Rule) => Rule.required().error('Slug is required'),
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
  ],
};

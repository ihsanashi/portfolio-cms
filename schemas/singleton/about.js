export default {
  title: 'About',
  name: 'about',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Home summary',
      name: 'homeSummary',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Short summary for the homepage.',
      validation: (Rule) => Rule.required().error('Required field'),
    },
    {
      title: 'Excerpt',
      name: 'excerpt',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Top section in about page.',
      validation: (Rule) => Rule.required().error('Required field'),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      description: 'Main content in about page.',
      validation: (Rule) => Rule.required().error('Required field'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
  ],
};

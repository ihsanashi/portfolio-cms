export default {
  title: 'Settings',
  name: 'settings',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
    {
      title: 'Footer Text',
      name: 'footerText',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
};

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
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Main content',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
  ],
};

export default {
  title: 'Home',
  name: 'home',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      description: 'Small title above the name',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Main text below the name',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
  ],
};

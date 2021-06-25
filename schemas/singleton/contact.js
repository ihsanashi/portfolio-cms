export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Resume',
      name: 'resume',
      type: 'dossier',
      description: 'Attach a resume file here.',
    },
  ],
};

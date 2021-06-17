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
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'link' }],
      description: 'Add a list of links to socials, email etc',
    },
    {
      title: 'Resume',
      name: 'resume',
      type: 'dossier',
      description: 'Attach a resume file here.',
    },
  ],
};

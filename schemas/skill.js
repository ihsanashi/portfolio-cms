export default {
  title: 'Skill',
  name: 'skill',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'Eg. React, CSS',
    },
    {
      type: 'asset',
      name: 'image',
      title: 'Image',
      description:
        'Remember to ensure the size of icons or images are consistent with one another.',
    },
  ],
};

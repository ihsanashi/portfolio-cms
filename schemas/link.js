export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Title of a link, eg. Github, or Live website',
      validation: (Rule) => Rule.required().error('Title is required'),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'URL address of the link, eg. https://example.com',
      validation: (Rule) => [
        Rule.required().error('URL link is required'),
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'link',
    },
  },
};

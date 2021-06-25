export default {
  title: 'Asset',
  name: 'asset',
  type: 'image',
  options: {
    hotspot: true,
  },
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
};

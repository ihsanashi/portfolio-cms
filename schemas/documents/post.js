import { BiBookBookmark } from 'react-icons/bi';

export default {
  title: 'Post',
  name: 'post',
  icon: BiBookBookmark,
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Title of the blog post',
      validation: (Rule) => [
        Rule.required().error('Post title is required'),
        Rule.min(3).warning("Post title shouldn't be so short!"),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'URL of the blog post',
      validation: (Rule) => Rule.required().error('Slug is required'),
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      title: 'Cover Photo',
      name: 'cover',
      type: 'asset',
      validation: (Rule) => Rule.required().error('Cover photo is required'),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'asset' }],
      validation: (Rule) => [
        Rule.required().error('Main content body is required!'),
        Rule.min(20).warning(
          'The body content should not be this short...write more!'
        ),
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of tags',
      validation: (Rule) => [
        Rule.required().error('Tags are required'),
        Rule.unique().warning('Each tag should be unique!'),
      ],
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      validation: (Rule) => Rule.required().error('Category is required'),
      options: {
        list: [
          { title: 'Personal', value: 'Personal' },
          { title: 'Random', value: 'Random' },
          { title: 'Technology', value: 'Technology' },
        ],
      },
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime',
      description: 'Add a date and time for when the post is first published',
      options: {
        dateFormat: 'DD MMM YYYY',
        timeFormat: 'hh:mm a',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'cover',
    },
  },
};

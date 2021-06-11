import { BiBriefcase } from 'react-icons/bi';

export default {
  title: 'Project',
  name: 'project',
  icon: BiBriefcase,
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Name of the project',
      validation: (Rule) => [
        Rule.required().error('Project title is required'),
        Rule.max(50).warning('Shorter titles are usually better'),
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'URL of the project',
      validation: (Rule) => Rule.required().error('Slug is required'),
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      description: 'Short excerpt of the project',
      validation: (Rule) =>
        Rule.required().error('Project summary is required'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: "Main image for the project's banner or thumbnail",
      validation: (Rule) => Rule.required().error('Project image is required'),
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
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
      description:
        'Consider this as the blog post section, describing what the project is about, what was done, what could be improved, and so on and so forth.',
      validation: (Rule) => [
        Rule.required().error('Body content is required'),
        Rule.min(30).warning('You gotta write more than that surely...'),
      ],
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }],
      description: 'What were the technologies used for this project?',
    },
    {
      title: 'Completed',
      name: 'completed',
      type: 'boolean',
      description: 'Is the project completed or still ongoing?',
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      description: 'When did you start working on this project?',
      validation: (Rule) => Rule.required().error('A start date is required'),
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Finish Date',
      name: 'finishDate',
      type: 'date',
      description:
        'When did this project conclude? Required if the project has been completed.',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'link' }],
      description:
        'Is this project available via a link somewhere on the internet? Include them here!',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
      media: 'image',
    },
  },
};

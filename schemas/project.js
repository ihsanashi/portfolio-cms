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
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      description: 'This will appear above the project title',
      validation: (Rule) => Rule.required().error('Subtitle is required'),
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of tags',
      validation: (Rule) => [
        Rule.required().error('Tags are required'),
        Rule.unique(),
      ],
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
      title: 'Description',
      name: 'description',
      type: 'text',
      description: 'Short description for SEO',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'asset',
      description: "Main image for the project's banner or thumbnail",
      validation: (Rule) => Rule.required().error('Project image is required'),
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'asset' }],
      description:
        'Consider this as the blog post section, describing what the project is about, what was done, what could be improved, and so on and so forth.',
      validation: (Rule) => [
        Rule.required().error('Body content is required'),
        Rule.min(30).warning('You gotta write more than that surely...'),
      ],
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
        dateFormat: 'MMMM YYYY',
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
        dateFormat: 'MMMM YYYY',
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
    {
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What were the technologies used to build this project.',
      validation: (Rule) => [Rule.unique()],
    },
    {
      title: 'Highlight',
      name: 'highlight',
      type: 'boolean',
      description: 'Toggle whether to highlight this project',
      validation: (Rule) => Rule.required().error('Required'),
    },
    {
      title: 'Related Projects',
      name: 'relatedProjects',
      type: 'reference',
      to: [{ type: 'project' }],
      description: 'Add a list of related projects here',
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

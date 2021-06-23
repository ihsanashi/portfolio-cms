export default {
  title: 'workExperience',
  name: 'workExperience',
  type: 'object',
  fields: [
    {
      title: 'Job Title',
      name: 'jobTitle',
      type: 'string',
    },
    {
      title: 'Employer',
      name: 'employer',
      type: 'string',
    },
    {
      title: 'Employment Type',
      name: 'employmentType',
      description: 'State whether this was a full-time or part-time gig',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Self-employed', value: 'self-employed' },
          { title: 'Freelance', value: 'freelance' },
          { title: 'Contract', value: 'contract' },
          { title: 'Internship', value: 'internship' },
          { title: 'Apprenticeship', value: 'apprenticeship' },
          { title: 'Seasonal', value: 'seasonal' },
        ],
      },
    },
    {
      title: 'Location',
      name: 'location',
      type: 'string',
    },
    {
      title: 'Office Coordinates',
      name: 'officeCoordinates',
      type: 'geopoint',
    },
    {
      title: 'Still working here',
      name: 'isCurrentJob',
      type: 'boolean',
      description: 'State whether you are currently employed here or not',
    },
    {
      title: 'Start Date',
      name: 'startDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Finish Date',
      name: 'finishDate',
      type: 'date',
      options: {
        dateFormat: 'MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Media',
      name: 'media',
      type: 'asset',
    },
  ],
  preview: {
    select: {
      title: 'jobTitle',
      subtitle: 'employer',
    },
  },
};

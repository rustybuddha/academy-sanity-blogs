export default {
    name: 'case-studies',
    type: 'document',
    title: 'case-studies',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: 'Subtitle',
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
          slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
        },
      },
      {
        name: 'summary',
        type: 'text',
        title: 'Summary',
      },
      {
        name: 'summary_url',
        type: 'url',
        title: 'Summary URL',
      },
      {
        name: 'brief',
        type: 'array',
        title: 'Brief',
        of: [
          {
            type: 'block',
          },
        ],
      },
      {
        name: 'problem',
        type: 'array',
        title: 'Problem',
        of: [
          {
            type: 'block',
          },
        ],
      },
      {
        name: 'problem_url',
        type: 'url',
        title: 'Problem URL',
      },
      {
        name: 'solution',
        type: 'array',
        title: 'Solution',
        of: [
          {
            type: 'block',
          },
        ],
      },
      {
        name: 'solution_url',
        type: 'url',
        title: 'Solution URL',
      },
      {
        name: 'cover_url',
        type: 'url',
        title: 'Cover URL',
      },
      {
        name: 'impressions',
        type: 'number',
        title: 'Impressions',
        validation: (Rule) => Rule.integer().min(0),
        default: 0,
      },
    ],
  }
  
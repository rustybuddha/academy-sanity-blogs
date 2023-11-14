export default {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Summary',
    },
    {
      name: 'cover_url',
      type: 'url',
      title: 'Cover URL',
    },
    {
      name: 'recommendedBlogs',
      type: 'array',
      title: 'Recommended Blogs',
      of: [
        {
          type: 'reference',
          to: [{type: 'blogs'}],
        },
      ],
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
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

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
      type: 'text',
      title: 'Content',
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
          to: [{ type: 'blogs' }], 
        },
      ],
    },
  ],
}

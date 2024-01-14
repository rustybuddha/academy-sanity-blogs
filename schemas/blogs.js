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
      name: 'doc_type',
      title: 'Doc Type',
      type: 'string',
      options: {
        list: [
          {title: 'Blog', value: 'blog'},
          {title: 'News', value: 'news'},
          {title: 'Article', value: 'article'},
        ],
      },
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Sub Title',
      hidden: ({parent, value}) => parent.doc_type === 'blog',
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
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'recommend',
      type: 'array',
      title: 'Recommended',
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

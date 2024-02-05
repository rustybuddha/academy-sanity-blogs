export default {
  name: 'blogs',
  type: 'document',
  title: 'Blogs',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').replace(/\?/g, '').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cover',
      title: 'Cover',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
    },
  ],
  initialValue: {
    impressions: 0,
  },
}

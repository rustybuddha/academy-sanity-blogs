import phase from './phase'

export default {
  name: 'case_studies',
  type: 'document',
  title: 'Case Studies',
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
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a hero image for the project case study',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'object',
          fields: [
            {
              name: 'stat',
              title: 'Stat',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'industry',
          title: 'Industry',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'company_size',
          title: 'Company Size',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'technologies',
          title: 'Technologies',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'domain_area',
          title: 'Domain Area',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'testimonial',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Enter the subtitle',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading for the challenge section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the challenge section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the challenge section',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading for the solution section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the solution section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the solution section',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading for the benefits section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the benefits section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the benefits section',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'engagement',
      title: 'Engagement',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading for the engagement section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the engagement section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'phases',
          title: 'Phases',
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'phase'}],
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'tech_stack',
      title: 'Tech Stack',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the techstack section',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'logos',
          title: 'Logos',
          type: 'array',
          of: [
            {
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'Upload a logo tech stack used',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
}

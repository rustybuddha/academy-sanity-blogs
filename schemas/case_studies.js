import phase from './phase'

export default {
  name: 'case_studies',
  type: 'document',
  title: 'case studies',
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
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload a hero image for the project case study',
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
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
          ],
        },
      ],
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
        },
        {
          name: 'company_size',
          title: 'Company Size',
          type: 'string',
        },
        {
          name: 'technologies',
          title: 'Technologies',
          type: 'string',
        },
        {
          name: 'domain_area',
          title: 'Domain Area',
          type: 'string',
        },
      ],
    },
    {
      name: 'testimonial',
      title: "Testimonials Section's",
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          description: 'Enter the subtitle',
        },
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Enter the heading',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description',
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
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the challenge section',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the challenge section',
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
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the solution section',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the solution section',
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
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the benefits section',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image for the benefits section',
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
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          description: 'Provide a description for the engagement section',
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
        },
      ],
    },
  ],
}

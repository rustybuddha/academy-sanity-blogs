const sectors = {
  organization: [
    'banks',
    'government',
    'regulators',
    'startups',
    'ngos',
    'universities',
    'enterprise',
  ],
  industry: [
    'cybersecurity',
    'hotel',
    'real-estate',
    'travels',
    'financials',
    'gaming',
    'fintech',
    'luxury',
    'tours',
    'events',
    'recruitment',
    'manufacturing',
    'sustainability',
    'banking',
    'fmcg',
  ],
}

export default {
  name: 'sector',
  type: 'document',
  title: 'Sector Solution',
  fields: [
    {
      name: 'sector_name',
      type: 'string',
      title: 'Sector Name',
      options: {
        list: [
          {title: 'Banks', value: 'banks'},
          {title: 'Government', value: 'government'},
          {title: 'Regulators', value: 'regulators'},
          {title: 'Startups', value: 'startups'},
          {title: 'NGOs', value: 'ngos'},
          {title: 'Universities', value: 'universities'},
          {title: 'Enterprise', value: 'enterprise'},
          {title: 'Cybersecurity', value: 'cybersecurity'},
          {title: 'Hotel', value: 'hotel'},
          {title: 'Real Estate', value: 'real-estate'},
          {title: 'Travels', value: 'travels'},
          {title: 'Financials', value: 'financials'},
          {title: 'Gaming', value: 'gaming'},
          {title: 'Fintech', value: 'fintech'},
          {title: 'Luxury', value: 'luxury'},
          {title: 'Tours', value: 'tours'},
          {title: 'Events', value: 'events'},
          {title: 'Recruitment', value: 'recruitment'},
          {title: 'Manufacturing', value: 'manufacturing'},
          {title: 'Sustainability', value: 'sustainability'},
          {title: 'Banking', value: 'banking'},
          {title: 'FMCG', value: 'fmcg'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Sector description',
      type: 'text',
      description:
        'Enter summary/description of the sector which will be visible in card view on solutions page',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'is_additional_section_active',
      title: 'Render Additional Section',
      type: 'boolean',
      description: 'Check to render the additional section',
    },
    {
      name: 'is_partnership_section_active',
      title: 'Render Partnership Section',
      type: 'boolean',
      description: 'Check to render the partnership section',
    },
    {
      name: 'hero_section',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'promises',
          title: 'Promises',
          type: 'array',
          of: [
            {
              name: 'item',
              title: 'Item',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Upload an icon for hearo promises card item',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'cover',
          title: 'Cover Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload a cover image for stat card',
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
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'stat',
                  title: 'Stat',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Upload an icon for stat item',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'addtional_section',
      title: 'Addional Section',
      type: 'object',
      fields: [
        {
          name: 'highlighted_text',
          title: 'Highlighted Text',
          type: 'string',
          description: 'Enter the portion of text which should be highlighted in frontend',
        },
        {
          name: 'regular_text',
          title: 'Regular Text',
          type: 'string',
          description: 'Enter the portion of text which will not be highlighted in frontend',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              name: 'item',
              title: 'Item',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Upload an icon for feature card item',
                },
              ],
            },
          ],
        },
      ],
      hidden: ({ document }) => !document.is_additional_section_active,
    },
    {
      name: 'takeaways_section',
      title: 'Take aways Section',
      type: 'object',
      fields: [
        {
          name: 'highlighted_text',
          title: 'Highlighted Text',
          type: 'string',
          description: 'Enter the portion of text which should be highlighted in frontend',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'regular_text',
          title: 'Regular Text',
          type: 'string',
          description: 'Enter the portion of text which will not be highlighted in frontend',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'take_aways',
          title: 'Take Aways',
          type: 'array',
          of: [
            {
              name: 'item',
              title: 'Item',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
                  description: 'Upload an icon for feature point',
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'how_it_works_section',
      title: 'How it works Section',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [
            {
              name: 'item',
              title: 'Item',
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'features_section',
      title: 'Features Section',
      type: 'object',
      fields: [
        {
          name: 'feature_image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload an image which will be beside features list',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'features',
          title: 'Features',
          type: 'array',
          of: [{type: 'string'}],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sales_section',
      title: 'Contact Sales Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'para_1',
          title: 'First Paragraph',
          type: 'text',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'para_2',
          title: 'Second Paragraph',
          type: 'text',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'faqs_section',
      title: 'FAQs Section',
      type: 'object',
      fields: [
        {
          name: 'faqs',
          title: 'FAQs',
          type: 'array',
          of: [
            {
              name: 'faq',
              title: 'FAQ',
              type: 'object',
              fields: [
                {
                  name: 'question',
                  title: 'Question',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'answer',
                  title: 'Answer',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
              ],
              validation: (Rule) => Rule.required(),
            },
          ],
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'partnership_section',
      title: 'Partnership Section',
      type: 'object',
      fields: [
        {
          name: 'experience',
          title: 'Partnership Experience',
          type: 'text',
          description: 'Enter the partnership experience description with TCL',
        },
        {
          name: 'company_logo',
          title: 'Logo of partner company',
          type: 'image',
          options: {
            hotspot: true,
          },
          description: 'Upload logo of the company with which TCL has partnership',
        },
        {
          name: 'company_description',
          title: 'Company Description',
          type: 'text',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'string',
          description: 'Eg : July, 2021',
        },
      ],
      hidden: ({ document }) => !document.is_partnership_section_active,
    },
  ],
}

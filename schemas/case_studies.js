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
        name:'logo',
        type:'url',
        title:'Logo URL'
      },
      {
        name: 'hero1_url',
        type: 'url',
        title: 'Hero URL 1',
      },
      {
        name: 'hero2_url',
        type: 'url',
        title: 'Hero URL 2',
      },
      {
        name: 'cover_url',
        type: 'url',
        title: 'Cover URL',
      },
      {
        name: 'brief',
        type: 'object',
        title: 'Brief',
        fields:[
          {
            name:'title',
            type:'string',
            title:'Title',
          },
          {
            name:'content',
            type:'array',
            title:'Content',
            of: [
              {
                type: 'block',
              },
            ],
          },
          {
            name:'url',
            type:'url',
            title:'Image URL',
          }
        ]
      },
      {
        name: 'problem',
        type: 'object',
        title: 'Problem',
        fields:[
          {
            name:'title',
            type:'string',
            title:'Title',
          },
          {
            name:'content',
            type:'array',
            title:'Content',
            of: [
              {
                type: 'block',
              },
            ],
          },
          {
            name:'url',
            type:'url',
            title:'Image URL',
          }
        ]
      },
      {
        name: 'solution',
        type: 'object',
        title: 'Solution',
        fields:[
          {
            name:'title',
            type:'string',
            title:'Title',
          },
          {
            name:'content',
            type:'array',
            title:'Content',
            of: [
              {
                type: 'block',
              },
            ],
          },
          {
            name:'url',
            type:'url',
            title:'Image URL',
          } 
        ]
        
      },
      {
        name: 'companySpec',
        type: 'object',
        title: 'Company Specification',
        fields: [
          {
            name: 'type',
            type: 'string',
            title: 'Type',
          },
          {
            name: 'industry',
            type: 'string',
            title: 'Industry',
          },
          {
            name: 'geography',
            type: 'string',
            title: 'Geography',
          },
          {
            name: 'year',
            type: 'string',
            title: 'Year',
          },
          {
            name: 'companySize',
            type: 'string',
            title: 'Company Size',
          },
          {
            name: 'segment',
            type: 'string',
            title: 'Segment',
          },
          {
            name: 'techStack',
            type: 'array',
            title: 'Tech Stack',
            of: [{ type: 'string' }],
          },
        ],
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
  
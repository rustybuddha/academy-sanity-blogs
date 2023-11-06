export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    {
      name: 'company_name',
      type: 'string',
      title: 'Company Name',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'profile_url',
      type: 'string',
      title: 'Profile URL',
    },
  ],
}

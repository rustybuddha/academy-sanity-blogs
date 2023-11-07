export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'organization',
      type: 'string',
      title: 'Organization Name',
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
      name: 'testimonial',
      type: 'text',
      title: 'Testimonial',
    },
    {
      name: 'profile_url',
      type: 'string',
      title: 'Profile URL',
    },
  ],
}

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
      name: 'organization_logo_url',
      type: 'string',
      title: 'Organization Logo URL',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profile_image_url',
      type: 'string',
      title: 'Profile Image URL',
    },
  ],
}

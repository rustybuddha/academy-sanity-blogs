export default {
  name: 'openings',
  title: 'Job Openings',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Opening Position',
      type: 'string',
      description: 'The job title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'The location of the job',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description: 'Availability of the job (e.g., Fulltime, Part-time)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'form_link',
      title: 'Form Link',
      type: 'url',
      description: 'Link to the application form for this job',
      validation: (Rule) => Rule.required(),
    },
  ],
}

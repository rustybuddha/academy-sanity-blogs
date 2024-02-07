export default {
  name: 'phase',
  title: 'Case Study : Phases',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the phase',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          name: 'item',
          title: 'Item',
          type: 'string',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
}

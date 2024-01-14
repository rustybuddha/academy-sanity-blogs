export default {
  name: 'phase',
  title: 'Phase',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter the name of the phase',
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
    },
  ],
}

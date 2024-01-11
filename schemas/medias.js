export default {
  name: 'medias',
  type: 'document',
  title: 'Medias',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'image_1',
      title: 'Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image_2',
      title: 'Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image_3',
      title: 'Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image_4',
      title: 'Image 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

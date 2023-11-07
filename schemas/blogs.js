export default {
    name: 'blogs',
    type: 'document',
    title: 'Blogs',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content',
      },
      {
        name: 'cover_url',
        type: 'url',
        title: 'Cover URL',
      },
    ],
  };
  
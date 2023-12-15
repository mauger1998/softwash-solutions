export default {
  name: 'threeCards',
  title: 'Three Card Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },

    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'card',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      projects: 'cards',
    },
    prepare({title, projects}) {
      return {
        title: title,
        subtitle: `${projects.length} projects`,
        media: projects[0].icon,
      }
    },
  },
}

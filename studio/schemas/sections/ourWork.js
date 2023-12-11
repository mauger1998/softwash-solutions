export default {
  name: 'ourWork',
  title: 'Our Work',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'project',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      projects: 'projects',
    },
    prepare({title, projects}) {
      return {
        title: title,
        subtitle: `${projects.length} projects`,
        media: projects[0].image,
      }
    },
  },
}

export default {
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    {name: 'name', title: 'name', type: 'string'},
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Desc points',
      of: [
        {
          type: 'string',
          name: 'tag'
        },
      ],
    },
  ],
}

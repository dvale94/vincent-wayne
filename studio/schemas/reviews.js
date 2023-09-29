import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'reviews',
  title: 'Reviews',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'imgLink',
      title: 'Image (~250x~250)',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
});

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'About Me Text',
      type: 'string',
    }),
    defineField({
      name: 'imgLink',
      title: 'Image (570x514)',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'cvPdf',
      title: 'Resume PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf',
      }
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "title" },
            { type: "string", name: "info" }
          ]
        }
      ]
    })
  ]
});

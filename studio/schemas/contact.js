import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Contact Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'socialData',
      title: 'Social Media',
      type: 'array',
      description: "for icons use https://icon-sets.iconify.design/fa6-brands/ - name of icon must be lower case",
      of: [
        {
          type: "object",
          fields: [
            { type: "string", name: "icon" },
            { type: "string", name: "title" },
            { type: "string", name: "link" }
          ]
        }
      ]
    }),
  ]
});

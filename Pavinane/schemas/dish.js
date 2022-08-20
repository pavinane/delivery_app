export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of Dish",
      Validition: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
      Validition: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "price of the dish in GBP",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Dish",
    },
  ],
};

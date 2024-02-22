const statusObj = {
  title: true,
  categories: false,
  price: false,
  date: true,
  author: true,
  status: true,
  action: false,
};

const data = [
  {
    title: "rahim",
    categories: "book",
    price: "123",
    date: "12-2-24",
    author: "pinto",
    status: ["publish", "Draft"],
    action: "edit",
  },
  {
    title: "karim",
    categories: "book",
    price: "123",
    date: "12-2-23",
    author: "karim",
    status: ["publish", "Draft"],
    action: "edit",
  },
  {
    title: "kiran",
    categories: "book",
    price: "1234",
    date: "12-2-22",
    author: "kiran",
    status: ["publish", "Draft"],
    action: "edit",
  },
];

export { statusObj, data };

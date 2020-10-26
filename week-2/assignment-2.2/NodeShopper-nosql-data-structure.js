const costumer = {
  costumer: [
    {
      _id: "5f680faf5330d6189a73e024",
      first_name: "Anil",
      last_name: "Rayamajhi",
      date_of_birth: "11/11/1972",
      user_name: "arayamajhi",
      invoice: [
        {
          _id: "5f680fd78db0f818c3fe7a80",
          date_created: "09/15/2020",
          date_shipped: "09/16/2020",
          subtotal: 171.0,
          tax: 17.1,
          total: 188.1,
          line_item: [
            {
              _id: "5f681826c78dee1a48a6e0db",
              name: "RESTful Web APIs",
              price: 127.0,
              quantity: 1,
              _invoice_id: "5f680fd78db0f818c3fe7a80",
            },
            {
              _id: "5f76dc91a007ac0017bf74ab",
              name: "NoSQL Distilled",
              price: 44.0,
              quantity: 3,
              _invoice_id: "5f680fd78db0f818c3fe7a80",
            },
          ],
          _customer_id: "5f680faf5330d6189a73e024",
        },
        {
          _id: "5f681652f0330a19bc97d119",
          date_created: "09/11/2020",
          date_shipped: "09/12/2020",
          subtotal: 44.0,
          tax: 4.4,
          total: 48.4,
          line_item: [],
          _customer_id: "5f680faf5330d6189a73e024",
        },
      ],
    },
  ],
};

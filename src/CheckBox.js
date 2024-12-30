const CHECKBOX = [
  {
    name: "p1",
    checked: false,
    children: [
      {
        parent: "p1",
        name: "p1-c1",
        checked: false,
        children: [
          {
            parent: "p1-c1",
            name: "p1-c1-c1",
            checked: false,
          },
          {
            parent: "p1-c1",
            name: "p1-c1-c2",
            checked: false,
            children: [
              {
                parent: "p1-c1-c2",
                name: "p1-c1-c2-c1",
                checked: false,
              },
              {
                parent: "p1-c1-c2",
                name: "p1-c1-c2-c2",
                checked: false,
                children: [
                  {
                    parent: "p1-c1-c2-c2",
                    name: "p1-c1-c2-c2-c1",
                    checked: false,
                  },
                  {
                    parent: "p1-c1-c2-c2",
                    name: "p1-c1-c2-c2-c2",
                    checked: false,
                  },
                ],
              },
              {
                parent: "p1-c1-c2",
                name: "p1-c1-c2-c3",
                checked: false,
              },
            ],
          },
        ],
      },
      {
        parent: "p1",
        name: "p1-c2",
        checked: false,
      },
      {
        parent: "p1",
        name: "p1-c3",
        checked: false,
      },
    ],
  },
  {
    name: "p2",
    checked: false,
    children: [
      {
        parent: "p2",
        name: "p2-c1",
        checked: false,
      },
      {
        parent: "p2",
        name: "p2-c2",
        checked: false,
      },
    ],
  },
  {
    name: "p3",
    checked: false,
    children: [{ parent: "p3", name: "p3-c1", checked: false }],
  },
  {
    name: "p4",
    checked: false,
  },
];

export default CHECKBOX;

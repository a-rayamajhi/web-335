const user = {
  user: {
    _id: "5f680faf5330d6189a73e024",
    first_name: "Anil",
    last_name: "Rayamajhi",
    link_user_role: [
      {
        _id: "5f680fd78db0f818c3fe7a80",
        role: [
          {
            _id: "5f681826c78dee1a48a6e0db",
            role_type: "ROLE_ADMIN",
            link_role_permission: [
              {
                _id: "5f681652f0330a19bc97d119",
                permission: [
                  {
                    _id: "5f6816577sh3d3237d11987",
                    resource: "users",
                    allow_action: ["edit", "create", "delete", "get", "list"],
                  },
                  {
                    _id: "5f6816577djeif372939484",
                    resource: "posts",
                    allow_action: ["edit", "create", "delete", "get", "list"],
                  },
                ],
              },
            ],
          },
          {
            _id: "5f681826c78dee1a48a6e0db",
            role_type: "ROLE_EMPLOYEE",
            link_role_permission: [],
          },
        ],
      },
      {
        _id: "5f680fd78db076545dyey7364",
        role: [
          {
            _id: "5f76dc91a007ac0017bf74ab",
            role_type: "ROLE_HR_DEPARTMENT",
            link_role_permission: [
              {
                _id: "5f681652f0330a19b7sh37d6",
                permission: [
                  {
                    _id: "5f6816577sh3d3237d9387bd",
                    resource: "users",
                    allow_action: ["get", "list"],
                  },
                  {
                    _id: "636482577sh3d3239dj473g3",
                    resource: "posts",
                    allow_action: ["create", "get", "list"],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

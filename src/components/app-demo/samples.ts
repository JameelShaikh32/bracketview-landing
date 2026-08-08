export const DEMO_NESTED = {
  user: { id: 42, name: "Ada", roles: ["admin", "editor"] },
  meta: { requestId: "req_8f3a", latencyMs: 12 },
};

export const DEMO_API_RESPONSE = {
  data: {
    items: [
      { sku: "A-100", qty: 3 },
      { sku: "B-200", qty: 1 },
    ],
    nextCursor: "eyJwYWdlIjoyfQ==",
  },
  meta: { page: 1, total: 2 },
};

export const BROKEN_JSON = `{
  "status": "error",
  "message": "Invalid payload"
  "code": 422
}`;

export const FIXED_JSON = `{
  "status": "error",
  "message": "Invalid payload",
  "code": 422
}`;

export const DIFF_LEFT = `{
  "plan": "free",
  "limit": 20
}`;

export const DIFF_RIGHT = `{
  "plan": "pro",
  "limit": null
}`;

export const SCHEMA_SAMPLE = `{
  "id": "ord_1",
  "items": [{ "sku": "A1", "qty": 2 }]
}`;

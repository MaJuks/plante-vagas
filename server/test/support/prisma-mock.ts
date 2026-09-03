/**
 * Generic Prisma mock for smoke tests: any `prisma.<model>.<method>()` call
 * resolves to a sensible empty default instead of touching a real database.
 */
const DEFAULTS: Record<string, unknown> = {
  findMany: [],
  findFirst: null,
  findUnique: null,
  count: 0,
  create: {},
  createMany: { count: 0 },
  update: {},
  updateMany: { count: 0 },
  upsert: {},
  delete: {},
  deleteMany: { count: 0 },
};

function createModelMock() {
  return new Proxy(
    {},
    {
      get: (_target, method: string) => {
        const value = method in DEFAULTS ? DEFAULTS[method] : null;
        return jest.fn().mockResolvedValue(value);
      },
    },
  );
}

export function createPrismaMock() {
  return new Proxy(
    {
      $connect: jest.fn().mockResolvedValue(undefined),
      $disconnect: jest.fn().mockResolvedValue(undefined),
      $transaction: jest.fn((arg: unknown[] | (() => unknown)) =>
        Array.isArray(arg) ? Promise.all(arg) : arg,
      ),
    },
    {
      get: (target, prop: string) => {
        if (prop in target) return (target as never)[prop];
        return createModelMock();
      },
    },
  );
}

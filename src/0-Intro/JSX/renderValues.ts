export interface RenderValue {
  type: string;
  valueString: string;
  value: any;
}

export const renderValues: RenderValue[] = [
  {
    type: 'undefined',
    valueString: 'undefined',
    value: undefined,
  },
  {
    type: 'null',
    valueString: 'null',
    value: null,
  },
  {
    type: 'string',
    valueString: `'London is the capital of Great Britain'`,
    value: 'London is the capital of Great Britain',
  },
  {
    type: 'string',
    valueString: `''`,
    value: '',
  },
  {
    type: 'number',
    valueString: '100500',
    value: 100500,
  },
  {
    type: 'number',
    valueString: '0',
    value: 0,
  },
  {
    type: 'number',
    valueString: '-1',
    value: -1,
  },
  {
    type: 'boolean',
    valueString: 'false',
    value: false,
  },
  {
    type: 'boolean',
    valueString: 'true',
    value: true,
  },
  {
    type: 'Array<number>',
    valueString: '[1, 2, 3, 4, 5]',
    value: [1, 2, 3, 4, 5],
  },
  {
    type: 'Array<number>',
    valueString: '[]',
    value: [],
  },
  {
    type: 'Set<string>',
    valueString: `new Set<string>(['one', 'two', 'three'])`,
    value: new Set<string>(['one', 'two', 'three']),
  },
  // {
  //   type: 'Map<string, string>',
  //   valueString: `new Map<string, string>(...)`,
  //   value: new Map<string, string>([
  //     ['firstName', 'John'],
  //     ['lastName', 'Snow'],
  //   ]),
  // },
  // {
  //   type: 'Object',
  //   valueString: '{}',
  //   value: {},
  // },
];

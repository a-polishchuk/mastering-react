import { Toolbar } from 'components/Toolbar';
import { Button } from 'components/Button';
import { PropsTable } from 'components/PropsTable';

import { useMergedState } from './useMergedState';
import { FormField } from './FormField';

interface Person {
  firstName: string;
  lastName: string;
  age: number | null;
  address: {
    city: string;
    street: string;
    house: number | null;
  };
}

const INITIAL_STATE: Person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 21,
  address: {
    city: 'New York',
    street: 'Broadway',
    house: 44,
  },
};

function validatePositiveNumber(stringValue: string): number | null {
  if (!stringValue) {
    return null;
  }
  // do not allow negative numbers
  return Math.max(parseInt(stringValue), 0);
}

export function UseMergedStateExample(): JSX.Element {
  const [data, setData] = useMergedState<Person>(INITIAL_STATE);

  const reset = () => setData(INITIAL_STATE);

  return (
    <>
      <h2>First custom hooks</h2>
      <h3>useMergedState</h3>

      <form>
        <FormField
          name="firstName"
          label="First name"
          value={data.firstName}
          onChange={(firstName) => setData({ firstName })}
        />
        <FormField
          name="lastName"
          label="Last name"
          value={data.lastName}
          onChange={(lastName) => setData({ lastName })}
        />
        <FormField
          name="age"
          label="Age"
          value={data.age}
          onChange={(age) => setData({ age: validatePositiveNumber(age) })}
          type="number"
        />
        <FormField
          name="city"
          label="City"
          value={data.address.city}
          onChange={(city) => setData({ address: { city } })}
        />
        <FormField
          name="street"
          label="Street"
          value={data.address.street}
          onChange={(street) => setData({ address: { street } })}
        />
        <FormField
          name="house"
          label="House"
          value={data.address.house}
          onChange={(house) => setData({ address: { house: validatePositiveNumber(house) } })}
          type="number"
        />
      </form>

      <Toolbar>
        <Button onClick={reset} text="Reset" />
      </Toolbar>

      <PropsTable title="Form data" data={data} />
    </>
  );
}

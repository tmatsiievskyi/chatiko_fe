import { Button } from './UI';

export const App = () => {
  return (
    <div>
      <p className="text-xl font-bold underline text-dark">App page</p>
      <Button size="base" type="danger">
        Hello
      </Button>
    </div>
  );
};

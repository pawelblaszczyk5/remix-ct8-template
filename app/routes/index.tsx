import { Button } from '~/lib/components/Button';
import { Theme } from '~/lib/enums';

const Index = () => (
  <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
    <h1 className="font-semibold text-5xl">Remix CT8 template</h1>
    <h2 className="text-xl">Includes:</h2>
    <ul className="list-disc text-sm">
      <li>ESLint and Prettier as code style enforcers</li>
      <li>Jest with Testing Library for testing shared elements (with codecov config)</li>
      <li>Tailwind for styling with dark theme config and handling</li>
      <li>Storybook to design components in isolation</li>
      <li>Express for serving Remix app</li>
      <li>Workflow setup for automatic deployments and code checking</li>
    </ul>
    <div className="flex gap-4">
      <Button onClick={() => window.setTheme(Theme.DARK)}>Dark mode</Button>
      <Button onClick={() => window.setTheme(Theme.LIGHT)}>Light mode</Button>
      <Button onClick={() => window.setTheme(Theme.SYSTEM)}>System preferences</Button>
    </div>
  </div>
);

export default Index;

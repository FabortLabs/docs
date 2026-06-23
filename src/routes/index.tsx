import { createFileRoute, Link } from '@tanstack/react-router';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-col items-center justify-center text-center flex-1">
        <p className="mb-2 text-sm font-medium text-fd-muted-foreground">
          Fabort platform documentation
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">
          Build and operate services on Fabort
        </h1>
        <p className="mb-6 max-w-xl text-fd-muted-foreground">
          Learn how organizations, teams, projects, compute, databases, game
          servers, and platform services work together.
        </p>
        <Link
          to="/docs/$"
          params={{
            _splat: '',
          }}
          className="px-3 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto"
        >
          Read the documentation
        </Link>
      </div>
    </HomeLayout>
  );
}

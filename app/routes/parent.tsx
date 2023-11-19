import { Outlet, useFetcher } from "@remix-run/react";

export async function action() {
  return null;
}

export default function Parent() {
  const fetcher = useFetcher();
  return (
    <div>
      Requirements:
      <ol>
        <li>
          Everytime <b>parent.child.tsx</b> loader is called, render it's
          loading indicator
        </li>
        <li>
          Avoid using more complex patterns like contexts
        </li>
      </ol>
      Current problems:
      <ol>
        <li>
          It works when submitting the form in <b>parent.child.tsx</b>.
        </li>
        <li>
          It does <b>not</b> work when submitting the form in <b>parent.tsx</b> (even though child's loader is called).
        </li>
      </ol>

      <Outlet />
      <h1>parent.tsx</h1>
      <fetcher.Form method="post">
        <button type="submit">Submit parent</button>
      </fetcher.Form>
    </div>
  );
}

import { Form, Outlet, Link } from "@remix-run/react";

const FILE_NAME = "parent.tsx";

export function action() {
  return null;
}

export default function Parent() {
  return (
    <div>
      Repro notes:
      <ol>
        <li>
          <Link to="/parent/child">Go to /parent/child</Link>
        </li>
        <li>
          Submit <b>parent.tsx</b> and notice that it redirects to{" "}
          <b>/parent</b>
        </li>
      </ol>
      <h1>{FILE_NAME}</h1>
      <Form method="post">
        <button type="submit">Submit form</button>
      </Form>
      <Outlet />
    </div>
  );
}

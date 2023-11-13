import { json } from "@remix-run/node";
import { Form, Outlet, useActionData, Link } from "@remix-run/react";

export function action() {
  return json({ value: "parent.tsx" });
}

export default function Parent() {
  let data = useActionData<typeof action>();
  return (
    <div>
      Repro notes:
      <ol>
        <li>
          Submit <b>parent.tsx</b> (and notice that it works!)
        </li>
        <li>
          <Link to="/parent/child">Go to /parent/child</Link>
        </li>
        <li>
          Submit <b>parent.child._index.tsx</b> (and notice that it adds{" "}
          <b>?index</b> at the end of URL)
        </li>
        <li>
          Submit <b>parent.tsx</b> again and see error
        </li>
      </ol>
      <h1>parent.tsx</h1>
      <Form method="post">
        <button type="submit">Submit</button>
      </Form>
      <pre>
        <b>parent.tsx</b>{" "}
        {data?.value ? (
          <span>
            posted successfully to <b>{data.value}</b>
          </span>
        ) : (
          "has not posted yet"
        )}
      </pre>
      <Outlet />
    </div>
  );
}

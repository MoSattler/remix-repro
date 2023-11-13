import { json } from "@remix-run/node";
import { Form, Outlet, useActionData } from "@remix-run/react";

export function action() {
  return json({ value: "parent.child._index.tsx" });
}

export default function ParentChildGrandchildIndex() {
  let data = useActionData<typeof action>();
  return (
    <div>
      <h1>parent.child._index.tsx</h1>
      <Form method="post">
        <button type="submit">Submit</button>
      </Form>
      <pre>
        <b>parent.child._index.tsx</b>{" "}
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

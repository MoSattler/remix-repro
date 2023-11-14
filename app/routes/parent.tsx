import { json } from "@remix-run/node";
import { Form, Outlet, useActionData, Link } from "@remix-run/react";

const FILE_NAME = "parent.tsx";

export function action() {
  return json({ value: FILE_NAME });
}

export default function Parent() {
  let data = useActionData<typeof action>();
  return (
    <div>
      Repro notes:
      <ol>
        <li>
          Submit <b>parent.tsx</b> (and notice that it posts to the correct
          action handler)
        </li>
        <li>
          <Link to="/parent/child">Go to /parent/child</Link>
        </li>
        <li>
          Submit <b>parent.child</b> and notice that <b>parents.tsx</b> also updates to data from <b>parent.child.tsx</b>
        </li>
      </ol>
      <h1>{FILE_NAME}</h1>
      <Form method="post">
        <button type="submit">Submit</button>
      </Form>
      <pre>
        <b>{FILE_NAME}</b>{" "}
        {data?.value ? (
          <span>
            got action data from{" "}
            {data.value === FILE_NAME ? (
              <span style={{ color: "green" }}>correct</span>
            ) : (
              <span style={{ color: "red" }}>wrong</span>
            )}{" "}
            file: <b>{data.value}</b>
          </span>
        ) : (
          "has not posted yet"
        )}
      </pre>
      <Outlet />
    </div>
  );
}

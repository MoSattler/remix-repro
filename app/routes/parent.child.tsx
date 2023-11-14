import { json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

const FILE_NAME = "parent.child.tsx";

export function action() {
  return json({ value: FILE_NAME });
}

export default function Parent() {
  let data = useActionData<typeof action>();
  return (
    <div>
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
    </div>
  );
}

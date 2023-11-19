import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";

let loaderCalls = 0;

export async function loader() {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(json({ value: "parent.tsx" }));
    }, 1000); 
  });
  loaderCalls = loaderCalls + 1;

  return json({ loaderCalls });
}

export function action() {
  return null;
}

export default function ParentChildGrandchildIndex() {
  let data = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  return (
    <div>
      <h1>parent.child.tsx</h1>
      {navigation.state === "loading" ? (
        "LOADING..."
      ) : (
        <>
          <Form method="post">
            <button type="submit">Submit</button>
          </Form>
          <p>
            Child's <b>loader</b> was called: <b>{data.loaderCalls} times</b>
          </p>
        </>
      )}
    </div>
  );
}

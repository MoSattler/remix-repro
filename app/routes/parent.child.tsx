import { json } from "@remix-run/node";
import { Form, useLoaderData, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";

let loaderCalls = 0;

export async function loader() {
  // You could extract and log loader calls here if needed
  loaderCalls = loaderCalls + 1;

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(json({ value: "parent.tsx" }));
    }, 1000); // Delay of 1000 milliseconds (1 second)
  });

  return json({ loaderCalls });
}

export function action() {
  return null;
}

export default function ParentChildGrandchildIndex() {
  let data = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const [loadingCount, setLoadingCount] = useState(0);

  // Increment the loading count when navigation.state is 'loading'
  useEffect(() => {
    if (navigation.state === "loading") {
      setLoadingCount((c) => c + 1);
    }
  }, [navigation.state]);

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

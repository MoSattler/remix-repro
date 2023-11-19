import { Link } from "@remix-run/react";

export default function Index() {
  return <Link to="/parent/child">Go to /parent/child</Link>;
}

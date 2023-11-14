const FILE_NAME = "parent.child.tsx";

export default function Parent() {
  return (
    <div>
      <h1>{FILE_NAME}</h1>
      <b>{FILE_NAME}</b> is currently rendered
    </div>
  );
}

import { usePlayground } from "@/contexts/playground-context";

export function Preview() {
  const { srcDoc } = usePlayground();

  return <iframe className="grow" srcDoc={srcDoc} />;
}

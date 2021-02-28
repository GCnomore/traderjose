import { Button } from "semantic-ui-react";

import { useRouter } from "next/router";

export default function Error404() {
  const router = useRouter();

  return (
    <div>
      <div>404 Error</div>
      <button onClick={() => router.push("/")}>Back to Home</button>
    </div>
  );
}

import { useRouter } from "next/router";

import styled from "styled-components";

export default function Categories() {
  const router = useRouter();
  const { id } = router.query;

  console.log(router);
  return <div>post{id}</div>;
}

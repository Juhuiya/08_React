import { resolve } from "styled-jsx/css";

export default async function LoadingPage() {
  // 3초 지연을 위한 함수
  const delay = (ms) => new Promise((reslobe) => setTimeout(resolve, ms));

  // 3초 대기
  await delay(3000);

  return (
    <div>
      <h1>hello wait next</h1>
    </div>
  );
}

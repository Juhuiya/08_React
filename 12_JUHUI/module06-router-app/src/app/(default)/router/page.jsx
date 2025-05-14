"use client";
import { useRouter } from "next/router";

export default function RouterComponent() {
  const router = useRouter();

  return (
    <div>
      <h1>RouterComponent 페이지</h1>;
      <p>이 페이지는 RouterComponent 페이지입니다.</p>
      <button onClick={() => router.push("/")}>메인으로 이동</button>
    </div>
  );
}

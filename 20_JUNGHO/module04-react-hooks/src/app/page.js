import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>React Hooks</h1>

      <hr />
      <h2>chap02</h2>
      <ul>
        <li>
          <Link href={"/chap01/section01"}>UseEffect-Basic</Link>
        </li>
        <li>
          <Link href={"/chap01/section02"}>UseEffect-Dependency</Link>
        </li>
        <li>
          <Link href={"/chap01/section03"}>UseEffect-CleanUp</Link>
        </li>
        <li>
          <Link href={"/chap01/section04"}>UseEffect-Problem</Link>
        </li>
      </ul>

      <hr />

      <h2>chap02</h2>
      <ul>
        <li>
          <Link href="/chap02/section01">UseLayoutEffect</Link>
        </li>
        <li>
          <Link href="/chap02/section02">DomMeasure</Link>
        </li>
      </ul>
    </>
  );
}

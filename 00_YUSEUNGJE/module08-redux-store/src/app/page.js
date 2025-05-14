import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>

      <h2>chap01 basicRedux</h2>
      <ul>
        <li>
          <Link href='/chap01'>basicRedux</Link>
        </li>
      </ul>
    </div>
  );
}

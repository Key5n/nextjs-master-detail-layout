import Link from "next/link";

export default async function ListPage() {
  const response = await fetch("http://localhost:3000/api/http-status-codes");
  const { httpStatusCodes } = (await response.json()) as {
    httpStatusCodes: string[];
  };

  return (
    <div>
      {httpStatusCodes.map((httpStatusCode, i) => (
        <div key={i}>
          <Link href={`http://localhost:3000/${httpStatusCode}`}>
            {httpStatusCode}
          </Link>
        </div>
      ))}
    </div>
  );
}

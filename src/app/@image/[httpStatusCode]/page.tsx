import Image from "next/image";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ httpStatusCode: string }>;
}) {
  const httpStatusCode = (await params).httpStatusCode;
  return (
    <Image
      src={`https://http.cat/${httpStatusCode}`}
      alt="http cat"
      width={500}
      height={500}
    />
  );
}

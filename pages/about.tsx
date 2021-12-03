import { NextPage } from "next";
import Link from "next/link";
import { image } from "qr-image";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const qrcodeStr = `eyJhbGciOiJFUzI1NksiLCJraWQiOiIja2V5LTIwMjExMTExLTEtcnAiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE2MzgzNTQ5MzksImV4cCI6MTYzODM1NTUzOSwicmVzcG9uc2VfdHlwZSI6ImlkX3Rva2VuIiwic2NvcGUiOiJvcGVuaWQiLCJjbGllbnRfaWQiOiJkaWQ6d2ViOmxvY2FsaG9zdCIsInJlZGlyZWN0X3VyaSI6Ii9zaW9wLWFjcyIsImlzcyI6ImRpZDp3ZWI6bG9jYWxob3N0IiwicmVzcG9uc2VfbW9kZSI6InBvc3QiLCJyZXNwb25zZV9jb250ZXh0IjoicnAiLCJub25jZSI6IldQdFNyRmZYU0dVMHI0WUJyNTFGdXg0NGd4dkV6VXlsd3VFUmpoVUN5Q2ciLCJzdGF0ZSI6IjMwOWIwYTA2MGIxMDA1Y2IzYmI5YjIyMSIsInJlZ2lzdHJhdGlvbiI6eyJkaWRfbWV0aG9kc19zdXBwb3J0ZWQiOlsiZGlkOndlYjoiXSwic3ViamVjdF9pZGVudGlmaWVyc19zdXBwb3J0ZWQiOiJkaWQiLCJjcmVkZW50aWFsX2Zvcm1hdHNfc3VwcG9ydGVkIjpbXX0sImNsYWltcyI6eyJ2cF90b2tlbiI6eyJwcmVzZW50YXRpb25fZGVmaW5pdGlvbiI6eyJpZCI6ImZvbyIsImlucHV0X2Rlc2NyaXB0b3JzIjpbeyJpZCI6ImJhciIsInNjaGVtYSI6W3sidXJpIjoiaHR0cDovL2xvY2FsaG9zdC9zY2hlbWEvRmFuY3kifV19XX19fX0.gTmV54gtfhETmgz83KSarUaFp3fS_ -CjP_cpuDV254kr9wiQin3c0DNNUGJb90tTO8paPXqd8D6qMlK_r1dUYQ;`;

const streamToString = (stream: NodeJS.ReadableStream): Promise<string> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, functional/prefer-readonly-type
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line functional/immutable-data
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
  });
};

const About: NextPage = () => {
  const [qrCode, setQrCode] = useState<string>();

  useEffect(() => {
    (async () => {
      const buffer = image(qrcodeStr, { type: "png" });
      const qrImg = await streamToString(buffer);
      setQrCode(qrImg);
    })();
  }, []);

  return (
    <div>
      <img
        src={`data:image/png;base64,${qrCode}`}
        style={{ maxWidth: "300px" }}
      />
      <div>
        Back to{" "}
        <Link href="/" as={BACKEND_URL + "/"}>
          <a>INDEX</a>
        </Link>
      </div>
    </div>
  );
};

export default About;

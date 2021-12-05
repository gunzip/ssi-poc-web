import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { image } from "qr-image";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocalStorage } from "react-use";

const qrcodeStr = `eyJhbGciOiJFUzI1NksiLCJraWQiOiIja2V5LTIwMjExMTExLTEtcnAiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE2MzgzNTQ5MzksImV4cCI6MTYzODM1NTUzOSwicmVzcG9uc2VfdHlwZSI6ImlkX3Rva2VuIiwic2NvcGUiOiJvcGVuaWQiLCJjbGllbnRfaWQiOiJkaWQ6d2ViOmxvY2FsaG9zdCIsInJlZGlyZWN0X3VyaSI6Ii9zaW9wLWFjcyIsImlzcyI6ImRpZDp3ZWI6bG9jYWxob3N0IiwicmVzcG9uc2VfbW9kZSI6InBvc3QiLCJyZXNwb25zZV9jb250ZXh0IjoicnAiLCJub25jZSI6IldQdFNyRmZYU0dVMHI0WUJyNTFGdXg0NGd4dkV6VXlsd3VFUmpoVUN5Q2ciLCJzdGF0ZSI6IjMwOWIwYTA2MGIxMDA1Y2IzYmI5YjIyMSIsInJlZ2lzdHJhdGlvbiI6eyJkaWRfbWV0aG9kc19zdXBwb3J0ZWQiOlsiZGlkOndlYjoiXSwic3ViamVjdF9pZGVudGlmaWVyc19zdXBwb3J0ZWQiOiJkaWQiLCJjcmVkZW50aWFsX2Zvcm1hdHNfc3VwcG9ydGVkIjpbXX0sImNsYWltcyI6eyJ2cF90b2tlbiI6eyJwcmVzZW50YXRpb25fZGVmaW5pdGlvbiI6eyJpZCI6ImZvbyIsImlucHV0X2Rlc2NyaXB0b3JzIjpbeyJpZCI6ImJhciIsInNjaGVtYSI6W3sidXJpIjoiaHR0cDovL2xvY2FsaG9zdC9zY2hlbWEvRmFuY3kifV19XX19fX0.gTmV54gtfhETmgz83KSarUaFp3fS_ -CjP_cpuDV254kr9wiQin3c0DNNUGJb90tTO8paPXqd8D6qMlK_r1dUYQ;`;

const streamToString = (stream: NodeJS.ReadableStream): Promise<string> => {
  const chunks: any[] = [];
  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("base64")));
  });
};

const Request: NextPage = () => {
  const router = useRouter();
  const [qrCode, setQrCode] = useState<string>();
  const [delayed, setDelayed] = useState<boolean>(false);
  const [authRes] = useLocalStorage("auth");

  useEffect(() => {
    (async () => {
      setTimeout(() => setDelayed(true), 5000);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const buffer = image(qrcodeStr, { type: "png" });
      const qrImg = await streamToString(buffer);
      setQrCode(qrImg);
    })();
  }, []);

  const query = useQuery(
    "authres",
    async () => {
      const response = await fetch(
        "https://webhook.site/79636c84-8cb0-4330-b84d-974786f39119"
      );
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("ERROR");
      }
    },
    {
      enabled: delayed,
      refetchInterval: 10000,
      onSuccess: () => {
        router.push("/success");
      },
    }
  );

  return (
    <div>
      <p>AUTHRES: {authRes}</p>
      <p>
        {query.isLoading && `loading...`}
        {query.isError && `ERROR: ${query.error}`}
        {query.data}
      </p>
      <p>
        {qrCode && (
          <img
            src={`data:image/png;base64,${qrCode}`}
            style={{ maxWidth: "300px" }}
            alt="qrcode"
          />
        )}
      </p>
      <p>
        <Link href="/" as="/">
          <a>INDEX</a>
        </Link>
      </p>
    </div>
  );
};

export default Request;

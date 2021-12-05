import { parse } from "querystring";

interface AuthenticationRequestPayload
  extends JWTPayload,
    RequestRegistrationPayload {
  response_type: string;
  scope: string;
  client_id: string;
  redirect_uri: string;
  response_mode: string;
  response_context: string;
  nonce: string;
  state: string;
  request?: string;
  request_uri?: string;
  did_doc?: string;
  claims?: string;
}

interface RequestRegistrationPayload {
  registration_uri?: string;
  registration?: RequestRegistrationMetadataPayload;
}

enum SubjectIdentifierType {
  JKT = "jkt",
  DID = "did",
}

enum CredentialFormat {
  JSON_LD = "w3cvc-jsonld",
  JWT = "w3cvc-jwt",
}

interface RequestRegistrationMetadataPayload {
  subject_identifiers_supported:
    | SubjectIdentifierType[]
    | SubjectIdentifierType;
  did_methods_supported: string[] | string;
  credentials_format_supported: CredentialFormat[] | CredentialFormat;
}

interface JWTPayload {
  iss?: string;
  sub?: string;
  aud?: string | string[];
  iat?: number;
  nbf?: number;
  type?: string;
  exp?: number;
  rexp?: number;
  jti?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const parseAuthenticationRequestURI = async (
  encodedURI: string
): Promise<AuthenticationRequestPayload> => {
  const encodedURIWithoutSchema = encodedURI.replace(/^.*:\/\/\??/, "");
  const parts = parse(encodedURIWithoutSchema);
  const json: { [index: string]: string } = {};
  for (const key in parts) {
    const value = parts[key];
    if (!value) {
      continue;
    }
    if (typeof value == "string") {
      const decoded = decodeURIComponent(value);
      if (decoded.startsWith("{") && decoded.endsWith("}")) {
        json[decodeURIComponent(key)] = JSON.parse(decoded);
      } else {
        json[decodeURIComponent(key)] = decoded;
      }
    } else if (typeof value == "number" || typeof value == "boolean") {
      json[decodeURIComponent(key)] = value;
    }
  }
  return json as AuthenticationRequestPayload;
};

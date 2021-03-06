declare type HeadersInit = Headers | string[][] | { [key: string]: string };
declare class Headers {
  constructor(init?: HeadersInit);

  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string; // | null; (TS 2.0 strict null check)
  has(name: string): boolean;
  set(name: string, value: string): void;

  // WebIDL pair iterator: iterable<ByteString, ByteString>
  entries(): IterableIterator<[string, string]>;
  forEach(callback: (value: string, index: number, headers: Headers) => void, thisArg?: any): void;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  [Symbol.iterator](): IterableIterator<[string, string]>;
}

type BodyInit = Blob | ArrayBufferView | ArrayBuffer | FormData | string;
interface Body {
  bodyUsed: boolean;
  arrayBuffer(): Promise<ArrayBuffer>;
  blob(): Promise<Blob>;
  formData(): Promise<FormData>;
  json(): Promise<any>;
  text(): Promise<string>;
}

declare type RequestInfo = string;
interface RequestInit {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
  referrer?: string;
  referrerPolicy?: ReferrerPolicy;
  mode?: RequestMode;
  credentials?: RequestCredentials;
  cache?: RequestCache;
  redirect?: RequestRedirect;
  integrity?: string;
  window?: any;
}

type RequestType = "" | "audio" | "font" | "image" | "script" | "style" | "track" | "video";
type RequestDestination = "" | "document" | "embed" | "font" | "image" | "manifest" | "media" | "object" | "report" | "script" | "serviceworker" | "sharedworker" | "style" | "worker" | "xslt";
type RequestMode = "navigate" | "same-origin" | "no-cors" | "cors";
type RequestCredentials = "omit" | "same-origin" | "include";
type RequestCache = "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached";
type RequestRedirect = "follow" | "error" | "manual";
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "same-origin" | "origin" | "strict-origin" | "origin-when-cross-origin" | "strict-origin-when-cross-origin" | "unsafe-url";

declare class Response {
  constructor(body?: BodyInit, init?: ResponseInit);

  static error(): Response;
  static redirect(url: string, status?: number): Response;

  type: ResponseType;
  url: string;
  redirected: boolean;
  status: number;
  ok: boolean;
  statusText: string;
  headers: Headers;
  body: any;
  trailer: Promise<Headers>;

  clone(): Response;
}
declare interface Response extends Body {}
interface ResponseInit {
  status?: number;
  statusText?: string;
  headers?: HeadersInit;
}

type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

export default function fetch(url: RequestInfo, init?: RequestInit): Promise<Response>;

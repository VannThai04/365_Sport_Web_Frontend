declare module "node:crypto" {
  export function createHash(algorithm: string): {
    update(value: string): { digest(encoding: "hex"): string };
  };
  export function randomBytes(size: number): {
    toString(encoding: "hex"): string;
  };
  export function scryptSync(
    password: string,
    salt: string,
    keyLength: number,
  ): any;
  export function timingSafeEqual(left: any, right: any): boolean;
}

declare module "node:fs" {
  export function mkdirSync(
    path: string,
    options: { recursive: boolean },
  ): void;
}

declare module "node:path" {
  export function join(...paths: string[]): string;
}

declare const process: {
  cwd(): string;
  env: Record<string, string | undefined>;
};

declare const Buffer: {
  from(value: string, encoding: string): any;
};

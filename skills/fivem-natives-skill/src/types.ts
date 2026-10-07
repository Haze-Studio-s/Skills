export interface Param {
  name: string;
  type: string;
}

export interface Example {
  lang: string;
  code: string;
}

export interface FrameworkExample {
  framework: string;
  lang: string;
  code: string;
}

export interface Native {
  hash: string;
  jhash: string;
  namespace: string;
  name: string;
  altName: string;
  description: string;
  descriptionPlain: string;
  params: Param[];
  returnType: string;
  apiset: string | null;
  url: string;
  examples: Example[];
  frameworks: string[];
  frameworkExamples: FrameworkExample[];
  related: string[];
}

export interface ApiResponse {
  count: number;
  frameworks: unknown[];
  natives: Native[];
}

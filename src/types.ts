export type TotalTokens = {
  promptTokens: number,
  completionTokens: number,
  total : number
}

export type PostPrompt = {
  topic? : string
  country? : string
  intent? : string
  audience? : string
  language: string
  tone? : 'informative' | 'captivating'
  generate? : boolean // generate the audience and intent
  withConclusion? : boolean
  model : 'gpt-4' | 'gpt-4-32k' | 'gpt-3.5-turbo' | 'gpt-3.5-turbo-16k',
  maxModelTokens? : 4000 | 8000,
  temperature? : number
  frequencyPenalty? : number
  presencePenalty? : number
  logitBias? : number
  debug? : boolean
  debugapi? : boolean
  apiKey? : string
  filename? : string

  // The following attributes are only used for custom templates
  templateFile? : string
  templateContent? : string
  prompts? : string[]
}

export type Heading = {
  title: string
  keywords?: string[]
  headings?: Heading[]
}

export type PostOutline = {
  title: string
  headings : Heading[],
  slug : string,
  seoTitle : string,
  seoDescription : string
}

export type Post = {
  title : string
  content : string
  seoTitle : string
  seoDescription : string
  slug : string,
  categories? : number[],
  status? : string,
  totalTokens : TotalTokens
}

export type SeoInfo = {
  h1 : string
  slug : string
  seoTitle : string
  seoDescription : string
}

export type AudienceIntentInfo = {
  audience : string
  intent : string
}

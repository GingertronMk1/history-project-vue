export type CanonicalPart = {
  title?: string
  playwright?: string
}

export type LinkPart = {
  type: string
  href: string
  snapshot: string
  publisher: string
  author: string
  title: string
  date: number
  quote: string
}

export type CastMember = {
  name?: string
  role?: string
  note?: string
}

export type CrewMember = {
  name?: string
  role?: string
  note?: string
}

export type Asset = {
  type: string
  image: string
}

export type Trivia = {
  quote: string
  name: string
  submitted: string
}

export type Show = {
  adapted?: boolean
  adaptor?: string
  assets?: Asset[]
  body?: string
  canonical?: CanonicalPart[]
  cast?: CastMember[]
  cast_incomplete?: boolean
  cast_note?: string
  categories?: string
  comment?: string
  company?: string
  company_sort?: number
  crew?: CrewMember[]
  crew_incomplete?: boolean
  crew_note?: string
  date_end?: Date
  date_start?: Date
  devised?: boolean
  ignore_missing?: boolean
  improvised?: boolean
  links?: LinkPart[]
  note?: string
  period?: string
  playright?: string
  playwright?: string
  playwright_alias?: string
  prod_shots?: string
  published?: boolean
  season?: string
  season_sort?: number
  slug?: string
  start_date?: Date
  student_written?: boolean
  title?: string
  tour?: object[]
  translator?: string
  trivia?: Trivia[]
  venue?: string
  venue_sort?: number
  year?: Date
} & Record<string, number | string>

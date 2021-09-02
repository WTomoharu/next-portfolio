export interface Work {
  id: string | undefined
  name: string
  text: string
  tags: string[]
  links: {
    icon: string
    link: string
  }[]
}
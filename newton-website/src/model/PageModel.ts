export class PageModelTitle {
  name: string
  title: string
  constructor(title: string, name: string) {
    this.name = name
    this.title = title
  }
}

export class childProps {
  title: string
  constructor(title: string) {
    this.title = title
  }
}

export class NewschildProps {
  title: string
  constructor(title: string) {
    this.title = title
  }
}

export class SeochildProps {
  title: string
  description: string
  meta: []
  lang: string
  constructor(title: string, description: string, meta: [], lang: string) {
    this.title = title
    this.description = description
    this.meta = meta
    this.lang = lang
  }
}

export class DocsProps {
  title: string
  contentPreview: string
  constructor(title: string, contentPreview: string) {
    this.title = title
    this.contentPreview = contentPreview
  }
}

export class EmojiProps {
  src: string
  constructor(src: string) {
    this.src = src
  }
}

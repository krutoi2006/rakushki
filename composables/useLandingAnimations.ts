import { onBeforeUnmount } from "vue"

export const useLandingAnimations = () => {
  let schemaObserver: IntersectionObserver | null = null
  let cardObserver: IntersectionObserver | null = null

  const init = (root: ParentNode = document) => {
    if (!import.meta.client) {
      return
    }

    schemaObserver?.disconnect()
    cardObserver?.disconnect()

    schemaObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const section = entry.target as HTMLElement
          const drawing = section.querySelector<HTMLElement>(".reveal-drawing")
          const items = section.querySelectorAll<HTMLElement>(".reveal-item")

          drawing?.classList.add("is-revealed")
          items.forEach((item) => item.classList.add("is-revealed"))
          observer.unobserve(section)
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3,
      },
    )

    cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          ;(entry.target as HTMLElement).classList.add("is-revealed")
          observer.unobserve(entry.target)
        })
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1,
      },
    )

    const schemaSection = root.querySelector<HTMLElement>(".schema-section")
    const productCards = root.querySelectorAll<HTMLElement>(".scroll-reveal-card")

    if (schemaSection) {
      schemaObserver.observe(schemaSection)
    }

    productCards.forEach((card) => cardObserver?.observe(card))
  }

  onBeforeUnmount(() => {
    schemaObserver?.disconnect()
    cardObserver?.disconnect()
  })

  return { init }
}


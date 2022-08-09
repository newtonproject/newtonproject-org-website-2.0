import { useState, useEffect } from 'react'

/**
 * A hook to determine which section of the page is currently in the viewport.
 * @param {*} itemIds Array of document ids to observe
 * @param {*} rootMargin
 * @returns id of the element currently in viewport
 */
export const useActiveHash = (itemIds: any, rootMargin = `0% 0% -80% 0%`) => {
  const [activeHash, setActiveHash] = useState(``)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: rootMargin }
    )

    itemIds?.forEach((id: any) => {
      if (document.getElementById(id) !== null) {
        let a: any = document.getElementById(id)
        observer.observe(a)
      }
    })

    return () => {
      itemIds?.forEach((id: any) => {
        if (document.getElementById(id) !== null) {
          let b: any = document.getElementById(id)
          observer.unobserve(b)
        }
      })
    }
  }, [itemIds, rootMargin])

  return activeHash
}

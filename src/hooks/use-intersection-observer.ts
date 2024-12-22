import { useEffect, useState } from "react";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  elements: HTMLElement[],
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args,
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, observerParams);

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [elements, threshold, root, rootMargin]);

  return activeId;
}

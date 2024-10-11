import { useEffect } from "react";

export const useDocumentTitle = (title) => {

  useEffect(() => {
    document.title = `${title} | Cineman`
  }, [title])

  return null;
}

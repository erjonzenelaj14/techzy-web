import { useEffect } from "react";
import { applyPageSeo, type RelatedPage } from "@/lib/seo";

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  related?: RelatedPage[];
};

const SeoHead = ({ title, description, path, related = [] }: SeoHeadProps) => {
  const relatedKey = JSON.stringify(related);

  useEffect(() => {
    applyPageSeo(title, description, path, related);
    // related serialized via relatedKey to keep effect stable
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, relatedKey]);

  return null;
};

export default SeoHead;

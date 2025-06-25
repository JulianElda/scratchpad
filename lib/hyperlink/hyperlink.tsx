import type { HyperlinkProps } from "lib/hyperlink/hyperlink.types";

export function Hyperlink(props: HyperlinkProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="text-primary-900 decoration-dotted hover:text-primary-700 hover:underline dark:text-primary-100 dark:hover:text-primary-300">
      {props.title}
      {props.asterisk === false ? "" : "*"}
    </a>
  );
}

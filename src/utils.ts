import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree: any, { data }: { data: any }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

export interface headingObject{
  depth: number,
  slug: string,
  text: string
}

export function getRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInDays < 30) {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (diffInDays > 0) return rtf.format(-diffInDays, "day");
    if (diffInHours > 0) return rtf.format(-diffInHours, "hour");
    if (diffInMinutes > 0) return rtf.format(-diffInMinutes, "minute");
    return "Just now";
  }

  // If older than 30 days, return full date
  return date.toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
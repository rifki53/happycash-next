interface Heading {
  id: string;
  level: number;
  text: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length < 2) {
    return null;
  }

  return (
    <aside className="mb-8 p-6 border rounded-lg bg-slate-50">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        On this page
      </h3>
      <nav>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? "ml-4" : ""}
            >
              <a
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                href={`#${heading.id}`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

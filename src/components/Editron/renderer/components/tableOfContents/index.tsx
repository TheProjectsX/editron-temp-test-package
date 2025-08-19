import { Fragment } from "react/jsx-runtime";

export type TableOfContentsData =
    | {
          tableOfContents: { label: string; id: string }[];
      }
    | { label: string; id: string }[];

const TableOfContents = ({
    data = [],
    className = "",
    children: CustomElement,
}: {
    data: TableOfContentsData;
    className?: string;
    children?: (label: string, href: string) => React.ReactElement;
}) => {
    if (CustomElement) {
        return (Array.isArray(data) ? data : data.tableOfContents).map(
            (item) => (
                <Fragment key={item.id}>
                    {CustomElement(item.label, `#${item.id}`)}
                </Fragment>
            )
        );
    }

    return (
        <ul className="space-y-1.5">
            {(Array.isArray(data) ? data : data.tableOfContents).map((item) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        className={`no-underline flex gap-3 text-gray-500 dark:text-gray-400 font-medium border-transparent  hover:text-black hover:dark:text-white [&.active]:text-blue-600 [&.active]:dark:text-blue-500 group ${className}`}
                    >
                        <span className="inline-block w-[1px] bg-transparent group-hover:bg-gray-400 group-hover:dark:bg-gray-600 group-[.active]:bg-blue-600 group-[.active]:dark:bg-blue-500"></span>
                        <span>{item.label}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default TableOfContents;

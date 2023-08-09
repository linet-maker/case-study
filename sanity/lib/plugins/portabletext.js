import { PortableText as PortableTextComponent } from "@portabletext/react";
import Link from "next/link";
import js from "refractor/lang/javascript";
import html from "refractor/lang/markup";
import Refractor from "react-refractor";
import bash from "refractor/lang/bash";
import Image from 'next/image'
import jsx from "refractor/lang/jsx";
import css from "refractor/lang/css";
import {urlForImage} from "@/sanity/lib/image";

Refractor.registerLanguage(js);
Refractor.registerLanguage(jsx);
Refractor.registerLanguage(html);
Refractor.registerLanguage(css);
Refractor.registerLanguage(bash);

let post;
const PortableTextTable = ({ value }) => {
    const [head, ...rows] = value.table.rows;

    return (
        <table>
            {head.cells.filter(Boolean).length > 0 && (
                <thead>
                <tr>
                    {head.cells.map(cell => (
                        <th key={cell}>{cell}</th>
                    ))}
                </tr>
                </thead>
            )}
            <tbody>
            {rows.map((row, index) => (
                <tr key={index}>
                    {row.cells.map((cell, index) => {
                        return <td key={cell}>{cell}</td>;
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

// Bare bones lazy-loaded image component
const ImageComponent = ({ value }) => {
            value = value.asset
            return (
                <Image src={urlForImage(value).url()} alt={'image'} width={600} height={250} />
            )
};
const Code = ({ value }) => {
    return (
        <Refractor
            // In this example, `props` is the value of a `code` field
            language={value.language || "bash"}
            value={value.code}
            markers={value.highlightedLines}
        />
    );
};
const Break = ({ value }) => {
    return (<hr />)
}

const components = {
    types: {
        image: ImageComponent,
        code: Code,
        break: Break
    },
    marks: {
        center: props => (
            <div className="text-center">{props.children}</div>
        ),
        highlight: props => (
            <span>
        {props.children}
      </span>
        ),
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noopener"
                : undefined;
            const target = !value.href.startsWith("/")
                ? "_blank"
                : undefined;
            return (
                <a href={value.href} rel={rel} target={target}>
                    {children}
                </a>
            );
        },
        internalLink: ({ children, value }) => {
            return (
                <Link href={`/docs/${value.slug.current}`}>{children}</Link>
            );
        }
    }
};
// Set up Portable Text serialization
export const PortableText = props => (
    <PortableTextComponent  components={components} {...props} />
);
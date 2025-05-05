import { OutsideLink, TextBlock } from 'components';

export type RelatedDocRef = {
    label: string;
    href: string;
};

export type RelatedDocsProps = {
    docs: RelatedDocRef[];
};

export function RelatedDocs({ docs }: RelatedDocsProps) {
    return (
        <TextBlock type="info" style={{ marginTop: 16 }}>
            📚 Related docs:
            <ul>
                {docs.map((doc) => (
                    <li key={doc.href}>
                        <OutsideLink href={doc.href}>{doc.label}</OutsideLink>
                    </li>
                ))}
            </ul>
        </TextBlock>
    );
}

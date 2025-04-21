import { TextBlock } from 'components/TextBlock/TextBlock';

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
                        <a target="_blank" rel="noreferrer" href={doc.href}>
                            {doc.label}
                        </a>
                    </li>
                ))}
            </ul>
        </TextBlock>
    );
}

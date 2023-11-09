import React from 'react';

type ContentType = {
  type: string;
  content: string;
  url?: string;
};

type ParagraphType = ContentType[];

interface Props {
  content: ParagraphType[];
}

const ContentRenderer: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.map((paragraph, i) => (
        <p className="font-light" key={i}>
          {paragraph.map((item, j) => {
            switch (item.type) {
              case 'plaintext':
                return <span key={j}>{item.content}</span>;
              case 'link':
                return (
                  <a
                    className="pointer-cursor-element underline"
                    key={j}
                    href={item.url}
                  >
                    {item.content}
                  </a>
                );
              default:
                return null;
            }
          })}
        </p>
      ))}
    </>
  );
};

export default ContentRenderer;

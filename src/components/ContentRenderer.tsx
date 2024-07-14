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

const now = new Date();
const bday = new Date(2004, 3, 29);
const age =
  now.getFullYear() -
  bday.getFullYear() -
  (now.getMonth() < bday.getMonth() - 1 ||
  (now.getMonth() === bday.getMonth() - 1 && now.getDate() < bday.getDate())
    ? 1
    : 0);
console.log(age);

const ContentRenderer: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.map((paragraph, i) => (
        <p className="font-light" key={i}>
          <span>I'm a {age} year old student studying CS at </span>
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

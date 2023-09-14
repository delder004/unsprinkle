import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={[
              src.replace('.jpg', '.avif'),
              src.replace('.jpg', '@2x.avif'),
              src.replace('.jpg', '@3x.avif'),
            ].join(", ")}
          />
          <source
            type="image/jpg"
            srcset={[
              src.replace('.jpg', '@2x.jpg'),
              src.replace('.jpg', '@3x.jpg'),
            ].join(", ")}
          />
          <Image src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  // display: flex;
  // flex-wrap: wrap;
  // gap: 8px;
  width: 100%;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  white-space: nowrap;
  display: inline;
  margin-right: 8px;

  ::last-of-type {
    text-overflow: ellipsis;
    overflow: hidden;
    // width: 100%;
  }
`;

export default PhotoGridItem;

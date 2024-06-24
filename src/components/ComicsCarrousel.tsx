import { Comic } from "@/types/MarvelApiTypes";
import styled from "styled-components";
import { Text } from "./Text/Text";

const ComicsCarrousel: React.FC<{ comics: Comic[] }> = ({ comics }) => {
  return (
    <CarouselWrapper>
      <TitleWrapper>
        <Text as="h2" size={"lg"} weight={700} isUpperCase>
          Comics
        </Text>
      </TitleWrapper>
      <ScrollingWrapper>
        {comics.map((comic) => (
          <ComicCard key={comic.id}>
            <ComicImage
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              width={"100%"}
              height={280}
            />
            <ComicTitle size="md" weight={500}>
              {comic.title}
            </ComicTitle>
            <Text size="xs">{new Date(comic.dates[0].date).getFullYear()}</Text>
          </ComicCard>
        ))}
      </ScrollingWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  margin-top: var(--spacing-xl);
`;

const TitleWrapper = styled.div`
  padding-left: var(--spacing-sm);
  margin-bottom: var(--spacing-md);

  @media (min-width: 768px) {
    padding-left: var(--spacing-xl);
  }
`;

const ComicImage = styled.img`
  object-fit: cover;
`;

const ComicCard = styled.div`
  min-width: 180px;
`;

const ComicTitle = styled(Text)`
  white-space: break-spaces;
  margin-bottom: var(--spacing-xs);
`;

const ScrollingWrapper = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 var(--spacing-sm) var(--spacing-md) var(--spacing-sm);

  scrollbar-color: var(--marvel-red) transparent;
  scrollbar-width: 4px;

  @media (min-width: 768px) {
    padding: 0px var(--spacing-xl) var(--spacing-md) var(--spacing-xl);
  }
`;

export default ComicsCarrousel;

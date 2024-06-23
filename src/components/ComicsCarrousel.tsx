import { Comic } from "@/types/MarvelApiTypes";
import styled from "styled-components";
import { Text } from "./Text/Text";

const ComicsCarrousel: React.FC<{ comics: Comic[] }> = ({ comics }) => {
  return (
    <CarouselWrapper>
      <TitleWrapper>
        <Text as="h2" size={24} weight={700} isUpperCase>
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
            <ComicTitle>{comic.title}</ComicTitle>
            <ComicYear>{new Date(comic.dates[0].date).getFullYear()}</ComicYear>
          </ComicCard>
        ))}
      </ScrollingWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  margin-top: 48px;
`;

const TitleWrapper = styled.div`
  padding-left: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    padding-left: 48px;
  }
`;

const ComicImage = styled.img`
  object-fit: cover;
`;

const ComicCard = styled.div`
  min-width: 180px;
`;

const ComicTitle = styled.p`
  font-weight: 500;
  font-size: 15px;
  white-space: break-spaces;
  margin-bottom: 8px;
`;

const ComicYear = styled.p`
  font-size: 12px;
`;

const ScrollingWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 0 16px 24px 16px;

  scrollbar-color: var(--marvel-red) transparent;
  scrollbar-width: 4px;

  @media (min-width: 768px) {
    padding: 0px 48px 24px 48px;
  }
`;

export default ComicsCarrousel;

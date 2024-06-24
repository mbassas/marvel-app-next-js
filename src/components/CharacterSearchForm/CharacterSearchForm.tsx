"use client";
import styled from "styled-components";
import { TextInput } from "../TextInput/TextInput";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  initialSearch?: string;
  resultCount?: number;
}

export const CharacterSearchForm: React.FC<Props> = ({
  initialSearch = "",
  resultCount,
}) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(initialSearch);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);

    const params = new URLSearchParams();
    if (e.target.value) params.set("q", e.target.value);
    router.push(`?${params.toString()}`);
  };

  return (
    <CharacterSearchFormWrapper onSubmit={handleSubmit}>
      <TextInput
        placeholder="search a character..."
        icon={<FaSearch />}
        value={searchValue}
        onChange={handleChange}
      />
      <ResultsCount>{resultCount} results</ResultsCount>
    </CharacterSearchFormWrapper>
  );
};

const CharacterSearchFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px 0;
  margin-bottom: var(--spacing-md);
`;

const ResultsCount = styled.p`
  text-transform: uppercase;
`;

import { IMarvelImage, IMarvelList, IMarvelSummary } from './Ihero';

interface IComics {
  id: number;
  digitalId: number;
  title: string;
  description: string;
  thumbnail: IMarvelImage;
  images: IMarvelImage[];
  characters: ICharacterList[];
}

interface ICharacterList extends IMarvelList {
  items: CharacterSummary[];
}

interface CharacterSummary extends IMarvelSummary {
  role: string;
}

export type { IComics, ICharacterList, CharacterSummary };

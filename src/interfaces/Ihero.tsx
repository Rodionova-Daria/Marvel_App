interface IHero {
  id: number;
  name: string;
  description: string;
  thumbnail: IMarvelImage;
  comics?: IComicList;
}

interface IMarvelList {
  available: number;
  returned: number;
  collectionURI: string;
}

interface IMarvelSummary {
  resourceURI: string;
  name: string;
}

interface IMarvelImage {
  path: string;
  extension: string;
}

interface IComicList extends IMarvelList {
  items: IMarvelSummary;
}

export type { IHero, IMarvelList, IMarvelSummary, IMarvelImage, IComicList };

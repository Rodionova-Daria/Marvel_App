interface IHero {
  id: number;
  name: string;
  description: string;
  thumbnail: IMarvelImage;
  comics?: IComicList;
  stories?: IStoryList;
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

interface IStoryList extends IMarvelList {
  items: IStorySummary;
}

interface IStorySummary extends IMarvelSummary {
  type: string;
}

export type {
  IHero,
  IMarvelList,
  IMarvelSummary,
  IMarvelImage,
  IComicList,
  IStoryList,
  IStorySummary,
};

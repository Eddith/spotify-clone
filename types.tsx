/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TabTwo: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumParamList = {
  id: string;
  imageUri: string;
  artistsHeadline: string;
}

export type AlbumHeaderParam = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
}
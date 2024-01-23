import AniList, { type MediaRelation, type ListEntry } from 'anilist-node';
const anilist = new AniList(process.env.ANILIST_API_KEY)


async function getUserFavorite(): Promise<ListEntry[]> {
  const profile = await anilist.lists.anime(5318187);
   // TODO: Run and check consoles, you know what todo, basically change the fav anime logic to this
  return (profile.filter(obj => obj.name === 'Watching')[0]).entries;
}

async function getAnimeInfo(): Promise<FavAnimeInfo[]> {
  const favAnimes = await getUserFavorite();
  const animeList = favAnimes.map((anime) => {
    return {
      id: anime.media.id, progress: anime.progress 
    }
  });

  const animeData = await Promise.all(animeList.map((anime) => {
    return anilist.media.anime(anime.id);
  }));

  const progressMap = new Map(animeList.map((anime) => [anime.id, anime.progress]));

  const favAnimeInfoArray = animeData.map((data) => {
    if (data && data.coverImage.large && data.siteUrl) {
      const progress = progressMap.get(data.id);
      return { 
        coverImage: data.coverImage.large, 
        progress: !progress ? 0 : progress,
        siteUrl: data.siteUrl, 
        title: data.title.english 
      };
    } else {
      console.warn(`Missing or invalid data for anime: ${data.id}`);
      return {
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105156-ZVtxISdoUqnY.png',
        progress: 0,
        siteUrl: 'https://anilist.co/',
        title: 'Undefined'
      }
    }
  });

  return favAnimeInfoArray;
}

export async function getFavAnimeBanner(): Promise<FavAnimeInfo[]> {
  return await getAnimeInfo();
}

export type FavAnimeInfo = {
  coverImage: string;
  progress: number;
  siteUrl: string;
  title: string;
}
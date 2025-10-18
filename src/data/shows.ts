import ShowData from '@/data/shows.json'

export const ALL_SHOWS: Show[] = Object.values(ShowData).sort(
  (show1: Show, show2: Show) => {
    const yearComp = show1.year.localeCompare(show2.year)
    return yearComp !== 0 ? yearComp : show1.season_sort - show2.season_sort;
  }
)

export function getAllShowAttributes(attribute_name: string): string[]|boolean[]|number[]
{
  return new Set(ALL_SHOWS.map((show: Show) => show[attribute_name]));
}


export function getAllShowsMatchingPredicate(predicate): Show[]
{
  return ALL_SHOWS.filter((show: Show) => predicate(show));
}

export function getFirstShowMatchingPredicate(predicate): Show | null
{
  const [firstShow] = getAllShowsMatchingPredicate(predicate);
  return firstShow ?? null;
}

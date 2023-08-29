export interface IChucknorrisSearch {
  result: IChucknorris[];
  total: number;
}
export interface IChucknorris {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

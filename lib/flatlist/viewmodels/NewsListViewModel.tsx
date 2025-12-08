import { NewsItem } from '../models/NewsItem.tsx';
import axios from 'axios';

export class NewsListViewModel {
  getNewsList(): Promise<NewsItem[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          'https://apis.tianapi.com/film/index?key=547a6ee4eb715809a37444d66be94a11&num=20',
        )
        .then(res => resolve(res.data.result.newslist))
        .catch(() => reject());
    });
  }
}

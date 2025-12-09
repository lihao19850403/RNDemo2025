import { useNavigation } from '@react-navigation/native';
import HomeMainPage from './HomeMainPage.tsx';
import { AppPageModel } from '../models/AppPageModel.tsx';

export default function HomeMainPageWrapper(contents: AppPageModel[]) {
  const navigation = useNavigation();
  return <HomeMainPage navigation={navigation} contents={contents} />;
}

import { useNavigation } from '@react-navigation/native';
import HomeMainPage from './HomeMainPage.tsx';

export default function HomeMainPageWrapper() {
  const navigation = useNavigation();
  return <HomeMainPage navigation={navigation} />;
}

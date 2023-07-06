import { useMainLoading } from '@/hooks/useMainLoading';
import { MainLoadingUiComponent } from './ui/MainLoadingUiComponent';

export const MainLoadingComponent = () => {
  const { loading } = useMainLoading();

  return <MainLoadingUiComponent loading={loading} />;
};

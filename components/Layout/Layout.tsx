import NextNprogress from 'nextjs-progressbar';
import { DefaultMeta } from '@/components';
import { useTheme } from '@/hooks';

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  const { theme } = useTheme();

  return (
    <>
      <DefaultMeta />
      <NextNprogress color={theme.colors.primary} height={1} />
      {props.children}
    </>
  );
};

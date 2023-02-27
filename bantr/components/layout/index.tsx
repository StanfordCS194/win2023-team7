
import { Container, PageContainer } from "./styles";

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container>
      Bantr
      {children}
    </Container>
  );
}
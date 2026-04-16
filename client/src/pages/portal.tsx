import { useAuth } from "@/context/AuthContext";
import PortalLogin from "@/components/portal/PortalLogin";
import PortalOnboarding from "@/components/portal/PortalOnboarding";
import PortalDashboard from "@/components/portal/PortalDashboard";

export default function ClientPortal() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) return <PortalLogin />;
  if (!user?.isOnboarded) return <PortalOnboarding />;
  return <PortalDashboard />;
}

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu, Home, BarChart2, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => (
  <div className="hidden border-r bg-muted/40 md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Home className="h-6 w-6" />
          <span>Dashboard</span>
        </NavLink>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-2">
          <SidebarNavLink to="/dashboard/home">
            <Home className="h-4 w-4" />
            Home
          </SidebarNavLink>
          <SidebarNavLink to="/dashboard/analytics">
            <BarChart2 className="h-4 w-4" />
            Analytics
          </SidebarNavLink>
          <SidebarNavLink to="/dashboard/settings">
            <Settings className="h-4 w-4" />
            Settings
          </SidebarNavLink>
        </nav>
      </div>
    </div>
  </div>
);

const SidebarNavLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary text-muted-foreground",
        isActive && "text-primary bg-muted",
      )
    }
  >
    {children}
  </NavLink>
);

const MobileSidebar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="shrink-0 md:hidden">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <SidebarNavLink to="/dashboard/home">
          <Home className="h-4 w-4" />
          Home
        </SidebarNavLink>
        <SidebarNavLink to="/dashboard/analytics">
          <BarChart2 className="h-4 w-4" />
          Analytics
        </SidebarNavLink>
        <SidebarNavLink to="/dashboard/settings">
          <Settings className="h-4 w-4" />
          Settings
        </SidebarNavLink>
      </nav>
    </SheetContent>
  </Sheet>
);

export default Sidebar;
import { createRootRoute, Outlet } from "@tanstack/react-router";

const MainLayout = () => {
    return (
        <div className="bg-[#a686c4] min-h-[100dvh] font-cardo grid place-items-center text-pretty text-center p-8">
            <Outlet />
        </div>
    );
}

export const Route = createRootRoute({
    component: MainLayout
});
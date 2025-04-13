import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChapterWrapper } from 'components';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

export function DynamicRoutes() {
    return (
        <ChapterWrapper
            title="Dynamic Routes"
            subtitle="Nested routes, dynamic segments & useParams()"
        >
            <StyledLink to="breeds">Breeds List</StyledLink>
            <QueryClientProvider client={queryClient}>
                <Outlet />
            </QueryClientProvider>
        </ChapterWrapper>
    );
}

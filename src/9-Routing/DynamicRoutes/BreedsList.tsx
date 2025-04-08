import { useQuery } from '@tanstack/react-query';
import { StyledLink } from 'components/StyledLink/StyledLink';
import { Outlet } from 'react-router-dom';
import classes from './BreedsList.module.css';

export function BreedsList() {
    const { data } = useBreeds();

    return (
        <div className={classes.root}>
            <div className={classes.list}>
                {data?.message &&
                    Object.keys(data.message).map((breed) => (
                        <StyledLink key={breed} to={breed}>
                            {breed}
                        </StyledLink>
                    ))}
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}

type BreedsListResponse = {
    message: Record<string, string[]>;
};

function useBreeds() {
    return useQuery<BreedsListResponse>({
        queryKey: ['breeds', 'list'],
        queryFn: async () => {
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            return response.json();
        },
    });
}

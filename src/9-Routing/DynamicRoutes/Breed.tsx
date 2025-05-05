import { useQuery } from '@tanstack/react-query';
import { StyledLink } from 'components';
import { useParams } from 'react-router';

export function Breed() {
    const { breedId } = useParams();
    const { data } = useBreedRandomImage(breedId);

    return (
        <div>
            <h1>{breedId}</h1>
            <h3>Random Image</h3>
            <div>
                <img
                    src={data?.message}
                    alt="random dog"
                    style={{
                        width: '400px',
                        height: '400px',
                        objectFit: 'cover',
                    }}
                />
            </div>
            <StyledLink to="..">Close</StyledLink>
        </div>
    );
}

type BreedRandomImageResponse = {
    message: string;
    status: string;
};

function useBreedRandomImage(breedId: string | undefined) {
    return useQuery<BreedRandomImageResponse>({
        queryKey: ['breeds', breedId, 'random'],
        queryFn: async () => {
            const response = await fetch(`https://dog.ceo/api/breed/${breedId}/images/random`);
            return response.json();
        },
        enabled: !!breedId,
    });
}

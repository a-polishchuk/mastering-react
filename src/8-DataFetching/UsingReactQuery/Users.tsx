import { useUserId } from '8-DataFetching/UserContext';
import { useQueryClient } from '@tanstack/react-query';
import { EmojiButton, LoadingSpinner } from 'components';
import { useUsers } from './hooks/useUsers';

export function Users() {
    const { setUserId } = useUserId();
    const { data, isLoading } = useUsers();
    const queryClient = useQueryClient();

    const refetchAllUserQueries = () => {
        queryClient.invalidateQueries({ queryKey: ['users'] });
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>
                        <EmojiButton emoji="🔄" tooltip="Refetch" onClick={refetchAllUserQueries} />
                    </th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((user) => (
                    <tr key={user.id}>
                        <td>
                            <EmojiButton
                                emoji="👤"
                                tooltip="Change User"
                                onClick={() => setUserId(user.id)}
                            />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

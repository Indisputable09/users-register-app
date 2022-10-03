import { ShowMoreButton } from 'components/Button/Button.styled';
import UserItem from 'components/UserItem';
import { UserListGrid, UserListTitle } from './Userlist.styled';

const Userlist = ({ enoughUsers, status, handlePageIncrement }) => {
  return (
    <>
      <UserListTitle>Working with GET request</UserListTitle>
      <UserListGrid>
        <UserItem />
      </UserListGrid>
      {status !== 'REJECTED' && enoughUsers && (
        <ShowMoreButton onClick={handlePageIncrement}>Show more</ShowMoreButton>
      )}
    </>
  );
};

export default Userlist;
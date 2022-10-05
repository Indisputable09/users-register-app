import { SignUpButton, UsersButton } from 'components/Button/Button.styled';
import { Box } from 'components/Box';
import { ButtonListItem, UserName } from './ButtonsBlock.styled';
import { useUsers } from 'hooks/UsersContext';

const ButtonsBlock = () => {
  const { userName, usersRef, signUpRef } = useUsers();

  const handleClick = e => {
    if (e.target.name === 'users') {
      usersRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      signUpRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box as="ul" display="flex" alignItems="center">
      <ButtonListItem>
        {userName && (
          <UsersButton onClick={handleClick} ref={usersRef} name="users">
            Users
          </UsersButton>
        )}
      </ButtonListItem>
      <ButtonListItem>
        {userName ? (
          <UserName>{userName}</UserName>
        ) : (
          <SignUpButton onClick={handleClick} ref={signUpRef} name="sign-up">
            Sign up
          </SignUpButton>
        )}
      </ButtonListItem>
    </Box>
  );
};
export default ButtonsBlock;
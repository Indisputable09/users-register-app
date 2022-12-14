import { RiAccountCircleFill } from 'react-icons/ri';
import { useMedia } from 'react-use';
import { useUsers } from 'hooks/UsersContext';
import { Box } from 'components/Box';
import { SignUpButton, UsersButton } from 'components/Button/Button.styled';
import { ButtonListItem, UserName } from './ButtonsBlock.styled';

const ButtonsBlock = () => {
  const { userName, usersRef, signUpRef } = useUsers();
  const isNotMobile = useMedia('(min-width: 768px)');

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
        <UsersButton onClick={handleClick} ref={usersRef} name="users">
          Users
        </UsersButton>
      </ButtonListItem>
      <ButtonListItem>
        {userName ? (
          isNotMobile ? (
            <UserName>{userName}</UserName>
          ) : (
            <RiAccountCircleFill size={34} />
          )
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

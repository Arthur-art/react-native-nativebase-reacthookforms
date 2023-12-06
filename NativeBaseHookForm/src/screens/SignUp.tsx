import { VStack, Heading, Center } from 'native-base'
import Input from '../components/Input';

export default function SignUp() {
  return (
    <VStack bgColor={'gray.300'} flex={1} px={10}>
      <Center>
        <Heading my={24}>Olá Arthur!</Heading>
        <Input  placeholder="Name"/>
        <Input  placeholder="E-mail"/>
        <Input  placeholder="Senha"/>
        <Input  placeholder="Confirme a senha"/>
      </Center>
    </VStack>
  );
}

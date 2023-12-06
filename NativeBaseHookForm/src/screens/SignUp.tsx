import { VStack, Heading, Center } from 'native-base'
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function SignUp() {
  return (
    <VStack bgColor={'gray.300'} flex={1} px={10}>
      <Center>
        <Heading my={24}>Crie a sua conta!</Heading>
        <Input isInvalid errorMessage="Informe o nome." placeholder="Nome" />
        <Input placeholder="E-mail" errorMessage="Informe o E-mail." />
        <Input placeholder="Senha" errorMessage="Informe a Senha." />
        <Input placeholder="Confirme a senha" />
        <Button title="Cadastrar" />
      </Center>
    </VStack>
  );
}

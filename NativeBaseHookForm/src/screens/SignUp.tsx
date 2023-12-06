import { VStack, Heading, Center } from 'native-base'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm, Controller } from 'react-hook-form';

export function SignUp() {
  const { control } = useForm();
  return (
    <VStack bgColor={'gray.300'} flex={1} px={10}>
      <Center>
        <Heading my={24}>Crie a sua conta!</Heading>
        <Controller
          control={control}
          name='Nome'
          render={({ field: { onChange } }) => (
            <Input placeholder="Nome" onChangeText={onChange} />
          )}
        />

        <Controller
          name='E-mail'
          control={control}
          render={({ field: { onChange } }) => (
            <Input placeholder="E-mail" onChangeText={onChange} />
          )}
        />

        <Controller
          name='Senha'
          control={control}
          render={({ field: { onChange } }) => (
            <Input placeholder="Senha" onChange={onChange} secureTextEntry />
          )}
        />

        <Controller
          name='Confirmar-Senha'
          control={control}
          render={({ field: { onChange } }) => (
            <Input placeholder="Confirme a senha" onChange={onChange} secureTextEntry/>
          )}
        />
        <Button title="Cadastrar" />
      </Center>
    </VStack>
  );
}

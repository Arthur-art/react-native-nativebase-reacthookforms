import { VStack, Heading, Center } from 'native-base'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm, Controller } from 'react-hook-form';

type SubmitProps = {
  nome: string
  email: string
  senha: string
  confirmarSenha: string
}

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SubmitProps>();

  function handleSignUp(data: SubmitProps) {
    console.log(data)
  }

  return (
    <VStack bgColor={'gray.300'} flex={1} px={10}>
      <Center>
        <Heading my={24}>Crie a sua conta!</Heading>
        <Controller
          control={control}
          name='nome'
          rules={{
            required: "Informe o nome."
          }}
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.nome?.message} placeholder="Nome" onChangeText={onChange} />
          )}
        />

        <Controller
          name='email'
          control={control}
          rules={{
            required: "Informe o e-mail.",
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
              message: "E-mail inválido."
            }
          }}
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.email?.message} placeholder="E-mail" onChangeText={onChange} />
          )}
        />

        <Controller
          name='senha'
          control={control}
          rules={{
            required: "Informe a senha."
          }}
          render={({ field: { onChange } }) => (
            <Input placeholder="Senha" onChangeText={onChange} secureTextEntry />
          )}
        />

        <Controller
          name='confirmarSenha'
          control={control}
          rules={{
            required: "Informe a confirmação de senha.",
          }}
          render={({ field: { onChange } }) => (
            <Input placeholder="Confirme a senha" onChangeText={onChange} secureTextEntry />
          )}
        />
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}

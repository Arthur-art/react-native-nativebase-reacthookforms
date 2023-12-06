import { VStack, Heading, Center } from 'native-base'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

type SubmitProps = {
  nome: string
  email: string
  senha: string
  confirmarSenha: string
}

const signUpSchema = yup.object({
  nome: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('Email Inválido.'),
  senha: yup.string().required('Informe a senha.').min(10, "A senha deve ter pelo menos 10 dígitos."),
  confirmarSenha: yup.string().required('Informe a confirmação de senha.').oneOf([yup.ref('senha'), ''], 'A confirmação de senha não é igual.')
});

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SubmitProps>({
    resolver: yupResolver(signUpSchema)
  });

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
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.nome?.message} placeholder="Nome" onChangeText={onChange} />
          )}
        />

        <Controller
          name='email'
          control={control}
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.email?.message} placeholder="E-mail" onChangeText={onChange} />
          )}
        />

        <Controller
          name='senha'
          control={control}
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.senha?.message} placeholder="Senha" onChangeText={onChange} secureTextEntry />
          )}
        />

        <Controller
          name='confirmarSenha'
          control={control}
          render={({ field: { onChange } }) => (
            <Input errorMessage={errors.confirmarSenha?.message} placeholder="Confirme a senha" onChangeText={onChange} secureTextEntry />
          )}
        />
        <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
      </Center>
    </VStack>
  );
}

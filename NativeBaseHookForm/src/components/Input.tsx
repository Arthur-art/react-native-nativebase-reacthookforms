import { IInputProps, Input as NativeBaseInput, FormControl } from 'native-base'

type Props = {
  errorMessage?: string | null
} & IInputProps

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={4} isInvalid={invalid}>
      <NativeBaseInput
        {...rest}
        h={20}
        isInvalid={invalid}
        bg={"gray.700"}
        fontSize={"md"}
        _focus={{
          bg: "gray.200",
          borderWidth: 2,
          borderColor: "black"
        }} />
      <FormControl.ErrorMessage>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
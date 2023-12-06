import { IInputProps, Input as InputNative } from 'native-base'

type Props = {
} & IInputProps

export default function Input({ ...rest }:Props){
    return (
       <InputNative { ...rest}  h={20} mb={4}  
       bg={"gray.700"} fontSize={"md"} _focus={{
        bg: "gray.200",
        borderWidth: 2,
        borderColor: "black"
       }}  />
    )
}
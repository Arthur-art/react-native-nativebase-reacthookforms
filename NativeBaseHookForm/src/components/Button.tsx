import { Button as NativeBaseButton, IButtonProps, Text } from "native-base";

type Props = {
    title: string
} & IButtonProps;

export function Button({ title, ...rest }: Props) {

    return (
        <NativeBaseButton
            w="full"
            h={16}
            bg="blueGray.400"
            borderWidth={2}
            borderColor={"gray.400"}
            fontSize={"md"}
            _pressed={{
                bgColor: "gray.300"
            }}
        >
            <Text>{title}</Text>
        </NativeBaseButton>
    )
}
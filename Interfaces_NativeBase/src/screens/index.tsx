import { Box, Center, HStack, Icon, Pressable, VStack } from "native-base";
import { Feather } from "@expo/vector-icons"

export function Home() {
    return (
        <Box
            flex={1}
            backgroundColor={'#9c88ff'}
        >
            <HStack p={10} justifyContent={'space-between'} flexDirection={'row'} flex={1} safeArea>
                <Box>
                    <Pressable>
                        <Icon as={Feather} name="menu" size={7} color={"#00000"} />
                    </Pressable>
                </Box>
                <Box>
                    <Pressable>
                        <Icon as={Feather} name="user" size={7} color={"#00000"} />
                    </Pressable>
                </Box>
            </HStack>
        </Box>
    )
}
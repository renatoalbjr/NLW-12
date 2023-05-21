import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto'
import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import { styled } from 'nativewind'
import bgBlur from './src/assets/bg-blur.png'
import Logo from './src/assets/logo-inline.svg'
import Stripes from './src/assets/stripes.svg'

const StyledStripes = styled(Stripes)
const StyledLogo = styled(Logo)

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <ImageBackground
      source={bgBlur}
      className="relative flex-1 items-center bg-gray-950 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute bottom-0 left-2 top-0 w-2" />
      <View className="flex-1 flex-col items-center justify-center gap-6">
        <StyledLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50 ">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>
        <TouchableOpacity
          className="w-fit rounded-full bg-green-500 px-5 py-3"
          activeOpacity={0.5}
        >
          <Text className="font-alt text-sm uppercase text-almost-black">
            Começar a cadastrar
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="font-body text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da{' '}
        <Text className="font-body underline hover:text-gray-50">
          Rocketseat
        </Text>
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}

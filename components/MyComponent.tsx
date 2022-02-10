import { View, Text } from "react-native"
import React from "react"
import { useTailwind } from "tailwind-rn"

export default function MyComponent() {
  const tailwind = useTailwind()
  return (
    <View style={tailwind("flex-1 justify-center items-center")}>
      <Text style={tailwind("text-blue-600")}>Hello world</Text>
    </View>
  )
}

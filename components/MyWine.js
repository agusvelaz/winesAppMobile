import React from 'react'
import { View, Text} from 'react-native'

export default function CartItem(item) {
    console.log(item)
  return (
    <View>
        
        <Text>{item.title}</Text>
        <Text>{item.detail}</Text>
    
    </View>
  )
}

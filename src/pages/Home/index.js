import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import Card from '../../components/Card'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeTab() {
  return (
    <SafeAreaView>
      <ScrollView>

        <Card />
        <Card />
        <Card />
      </ScrollView>

    </SafeAreaView>

  )
}
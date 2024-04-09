import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Card from 'src/common/components/Card';
import { ROUTES, mockData } from 'src/common/components/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50,
  },
  content: {
    marginTop: 10,
  },
});

export default function AnswersScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.scrollContent}>
        {mockData
          .filter(e => e.messages.length)
          .map((e, i) => (
            <TouchableOpacity
              onPress={() => navigate(ROUTES.CHAT_SCREEN, { data: e })}
              key={i}>
              <Card data={e} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

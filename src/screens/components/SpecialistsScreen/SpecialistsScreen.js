import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Card from 'src/common/components/Card';
import { ROUTES, mockData } from 'src/common/components/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    marginTop: 10,
  },
  contentScroll: {
    paddingBottom: 50,
  },
});

export default function SpecialistsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentScroll}>
        {mockData.map((e, i) => (
          <TouchableOpacity
            onPress={() =>
              navigate(ROUTES.SPECIALIST_PROFILE_SCREEN, { data: e })
            }
            key={i}>
            <Card data={e} hideTheme />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

export default function SpecialistProfileScreen({
  route: {
    params: {
      data: { image, name, info, advice, position, education, about } = {},
    },
  },
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.profileInfoContainer}>
            {image ? (
              <Image key={image} source={image} style={styles.image} />
            ) : (
              <View style={styles.image} />
            )}
            <Text style={styles.nameLabel}>{name}</Text>
            <Text style={styles.infoLabel}>{info}</Text>
            <Text
              style={styles.adviceLabel}>{`Получить совет: ${advice}сс`}</Text>
            <Text style={styles.positionLabel}>{position}</Text>
          </View>
          <View style={styles.aboutContent}>
            <Text style={styles.smallHeader}>Образование</Text>
            <Text style={styles.text}>{education}</Text>
            <Text style={[styles.smallHeader, styles.marginTopHeader]}>
              Обо мне
            </Text>
            <Text style={styles.text}>{about}</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

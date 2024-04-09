import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import ArrowBack from 'src/assets/svg/ArrowBack';
import Button from 'src/common/components/Button';
import Message from 'src/common/components/Message';
import { ROUTES } from 'src/common/components/constants';

import styles from './styles';

export default function ChatScreen({
  navigation: { goBack, navigate },
  route: { params: { data, data: { image, name, messages = [] } } = {} },
}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={goBack} style={styles.header}>
          <ArrowBack />
          <View>
            {image ? (
              <Image key={image} source={image} style={styles.image} />
            ) : (
              <View style={styles.image} />
            )}
          </View>
          <Text style={styles.label}>{name}</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}>
          {messages.map((e, i) => (
            <View key={i}>
              <Message data={e} side={i} />
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigate(ROUTES.QUESTION_SCREEN, { data })}
          label="Спросить ещё"
        />
      </View>
    </SafeAreaView>
  );
}

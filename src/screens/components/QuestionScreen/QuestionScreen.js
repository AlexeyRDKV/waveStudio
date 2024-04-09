import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Button from 'src/common/components/Button';

import Card from 'src/common/components/Card';
import Picker from 'src/common/components/Picker';
import TextInput from 'src/common/components/TextInput';
import { ROUTES } from 'src/common/components/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  inputMultiline: {
    height: 150,
    textAlignVertical: 'top',
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  button: {
    alignContent: 'flex-end',
    marginHorizontal: 18,
    marginBottom: 24,
  },
});

export default function QuestionScreen({
  navigation: { goBack, navigate },
  route: { params: { data } = {} },
}) {
  const multilineInputRef = useRef();
  const inputRef = useRef();
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 30}
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}
      style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigate(ROUTES.SPECIALIST_PROFILE_SCREEN, { data })}>
          <Card data={data} hideTheme />
        </TouchableOpacity>
        <Picker />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            ref={multilineInputRef}
            placeholder="Текст обращения"
            style={styles.inputMultiline}
            multiline
          />
          <TextInput ref={inputRef} placeholder="Желаемый результат" />
        </ScrollView>
      </View>
      <View style={styles.button}>
        <Button onPress={goBack} label={'Отправить'} />
      </View>
    </KeyboardAvoidingView>
  );
}

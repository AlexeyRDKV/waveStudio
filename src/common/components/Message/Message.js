import React from 'react';
import { View, Text } from 'react-native';
import { DateTime } from 'luxon';

import styles from './styles';

export default function Message({ data: { name, date, text }, side }) {
  let sideD = side % 2;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.wrapper,
          sideD ? styles.rightWrapper : styles.leftWrapper,
        ]}>
        <Text style={styles.nameLabel}>{name}</Text>
        {
          <View>
            <Text>{text}</Text>
          </View>
        }
      </View>
      <View
        style={[
          styles.dateContent,
          sideD % 2 ? styles.dateRight : styles.dateLeft,
        ]}>
        <Text style={styles.dateLabel}>
          {' '}
          {DateTime.fromISO(date).toFormat('d MMM yyyy HH:mm')}
        </Text>
      </View>
    </View>
  );
}

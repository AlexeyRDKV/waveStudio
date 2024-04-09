import React from 'react';
import { View, Text, Image } from 'react-native';
import ArrowRight from 'src/assets/svg/ArrowRight';

import styles from './styles';

export default function Card({
  data: { image, name, description, info, theme } = {},
  hideTheme,
} = {}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {image ? (
          <Image key={image} source={image} style={styles.image} />
        ) : (
          <View style={styles.image} />
        )}
        <View style={styles.infoWrapper}>
          <Text style={styles.label}>{name}</Text>
          <Text style={styles.info}>{info}</Text>

          <Text numberOfLines={1} style={styles.desc}>
            {description}
          </Text>
        </View>
      </View>
      {theme && !hideTheme ? (
        <View style={styles.bottomContent}>
          <View style={styles.themeWrapper}>
            <Text style={styles.themeLabel}>Тема: </Text>
            <Text numberOfLines={1}>{theme}</Text>
          </View>
          <ArrowRight />
        </View>
      ) : null}
    </View>
  );
}

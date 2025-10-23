import { useState } from 'react';
import { Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import { DaySelector } from './day-selector';
import { HomeActivity } from '@/types/home';

interface ActivityCardProps {
  activity: HomeActivity;
  onPress?: (activity: HomeActivity) => void;
}

export function ActivityCard({ activity, onPress }: ActivityCardProps) {
  const [enabled, setEnabled] = useState(activity.isActive);

  const handleToggle = () => {
    setEnabled((value) => !value);
  };

  const handlePress = () => {
    onPress?.(activity);
  };

  return (
    <Animated.View entering={FadeInDown.springify()}>
      <Pressable style={styles.card} onPress={handlePress}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.title}>{activity.title}</Text>
            <Text style={styles.repeat}>{activity.repeatLabel}</Text>
          </View>
          <Switch
            value={enabled}
            onValueChange={handleToggle}
            trackColor={{ false: 'rgba(17,17,17,0.12)', true: '#111111' }}
            thumbColor="#ffffff"
            style={styles.switch}
          />
        </View>
        <Text style={[styles.hourLabel, styles.sectionSpacing]}>{activity.summaryTimeLabel}</Text>
        <View style={styles.daySelectorWrapper}>
          <DaySelector days={activity.days} />
        </View>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 22,
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.12,
    shadowRadius: 28,
    elevation: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    marginLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },
  repeat: {
    marginTop: 4,
    fontSize: 14,
    color: 'rgba(17,17,17,0.6)',
  },
  hourLabel: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  sectionSpacing: {
    marginTop: 16,
  },
  daySelectorWrapper: {
    marginTop: 8,
  },
});

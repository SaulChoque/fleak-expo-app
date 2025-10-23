import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { DaySelection } from '@/types/home';

interface DaySelectorProps {
  days: DaySelection[];
}

export const DaySelector = memo(function DaySelector({ days }: DaySelectorProps) {
  return (
    <View style={styles.container}>
      {days.map((day, index) => {
        const isLast = index === days.length - 1;
        return (
          <View
            key={day.id}
            style={[
              styles.day,
              day.isActive ? styles.active : styles.inactive,
              !isLast && styles.daySpacing,
            ]}
          >
          <Text style={[styles.label, day.isActive ? styles.activeLabel : styles.inactiveLabel]}>
            {day.label}
          </Text>
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  day: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daySpacing: {
    marginRight: 10,
  },
  active: {
    backgroundColor: '#111111',
  },
  inactive: {
    backgroundColor: 'rgba(17,17,17,0.08)',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  activeLabel: {
    color: '#ffffff',
  },
  inactiveLabel: {
    color: 'rgba(17,17,17,0.6)',
  },
});

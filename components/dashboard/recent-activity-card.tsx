import { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { HomeActivity } from '@/types/home';

interface RecentActivityCardProps {
  activity: HomeActivity;
  onPress?: (activity: HomeActivity) => void;
}

export const RecentActivityCard = memo(function RecentActivityCard({ activity, onPress }: RecentActivityCardProps) {
  const handlePress = () => {
    onPress?.(activity);
  };

  return (
    <Pressable onPress={handlePress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
      <View style={styles.iconBadge}>
        <Text style={styles.iconLabel}>{resolveIconEmoji(activity.icon)}</Text>
      </View>
      <View style={styles.detailColumn}>
        <Text style={styles.title}>{activity.title}</Text>
        <Text style={styles.subtitle}>{activity.amountValue} {activity.amountUnit}</Text>
      </View>
      <Text style={styles.time}>{activity.summaryTimeLabel}</Text>
    </Pressable>
  );
});

function resolveIconEmoji(icon: string) {
  switch (icon) {
    case 'alarm':
      return '⏰';
    case 'public':
      return '🌐';
    case 'task':
      return '✅';
    default:
      return '🔔';
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0f172a',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 32,
    elevation: 10,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconLabel: {
    fontSize: 20,
    color: '#ffffff',
  },
  detailColumn: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: 'rgba(17,17,17,0.6)',
  },
  time: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },
});

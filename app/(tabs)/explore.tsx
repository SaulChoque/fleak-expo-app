import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ActivityMetricList } from '@/components/activity/activity-metric-list';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { Card } from '@/components/ui/card';
import { detailMetricsByActivity, homeActivities } from '@/constants/mock-data';

export default function FocusHubScreen() {
  const router = useRouter();
  const primary = homeActivities[0];
  const secondary = homeActivities[1];

  const handleOpenActivity = (activityId: string) => {
    router.push(`/activity/${activityId}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>Focus overview</Text>
        <Card style={styles.card}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.cardTitle}>{primary.title}</Text>
              <Text style={styles.cardSubtitle}>{primary.repeatLabel}</Text>
            </View>
            <MaterialIcons name="arrow-forward" size={20} color="rgba(17,17,17,0.4)" />
          </View>
          <Text style={styles.timeLabel}>{primary.summaryTimeLabel}</Text>
          <View style={styles.sectionSpacing}>
            <ActivityMetricList metrics={detailMetricsByActivity[primary.id] ?? []} />
          </View>
          <View style={styles.secondaryRow}>
            <Text style={styles.assistLabel}>Testifiers</Text>
            <View style={styles.avatarStack}>
              {primary.testifiers.map((testifier) => (
                <View key={testifier} style={styles.avatarDot}>
                  <Text style={styles.avatarText}>{testifier.charAt(0).toUpperCase()}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={[styles.outlinedButton]}>
              <Text style={styles.outlinedLabel}>Cancel</Text>
            </View>
            <View style={styles.primaryButton}>
              <Text style={styles.primaryLabel}>Focus now</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.card}>
          <View style={styles.headerRow}>
            <View>
              <Text style={styles.cardTitle}>{secondary.title}</Text>
              <Text style={styles.cardSubtitle}>No repeat</Text>
            </View>
            <MaterialIcons name="chevron-right" size={20} color="rgba(17,17,17,0.4)" />
          </View>
          <Text style={styles.timeLabel}>{secondary.summaryTimeLabel}</Text>
          <View style={styles.sectionSpacing}>
            <ActivityMetricList metrics={detailMetricsByActivity[secondary.id] ?? []} />
          </View>
          <View style={styles.secondaryRow}>
            <Text style={styles.assistLabel}>Notifications</Text>
            <MaterialIcons name="notifications-none" size={20} color="rgba(17,17,17,0.6)" />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.outlinedButton}>
              <Text style={styles.outlinedLabel}>Share</Text>
            </View>
            <View style={styles.secondaryButton}>
              <Text style={styles.secondaryLabel}>Schedule</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
      <FloatingActionButton style={styles.fab} onPress={() => handleOpenActivity(primary.id)}>
        <MaterialIcons name="add" size={28} color="#ffffff" />
      </FloatingActionButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 120,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 20,
  },
  card: {
    marginBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
  },
  cardSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: 'rgba(17,17,17,0.6)',
  },
  timeLabel: {
    marginTop: 20,
    fontSize: 32,
    fontWeight: '700',
    color: '#111111',
  },
  sectionSpacing: {
    marginTop: 20,
  },
  secondaryRow: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  assistLabel: {
    fontSize: 14,
    color: 'rgba(17,17,17,0.6)',
    fontWeight: '600',
  },
  avatarStack: {
    flexDirection: 'row',
  },
  avatarDot: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -8,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  avatarText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  buttonRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  outlinedButton: {
    flex: 1,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(17,17,17,0.12)',
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 12,
  },
  outlinedLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  primaryButton: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#111111',
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  secondaryButton: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: 'rgba(17,17,17,0.08)',
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 48,
  },
});

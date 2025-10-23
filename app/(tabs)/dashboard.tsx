import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RecentActivityCard } from '@/components/dashboard/recent-activity-card';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { Card } from '@/components/ui/card';
import { homeActivities } from '@/constants/mock-data';

export default function DashboardScreen() {
  const router = useRouter();

  const handleSelectActivity = (activityId: string) => {
    router.push(`/activity/${activityId}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>Welcome back, PEPE</Text>
        <Card>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Recent activity</Text>
            <MaterialIcons name="history" size={22} color="rgba(17,17,17,0.6)" />
          </View>
          <View style={styles.activityStack}>
            {homeActivities.map((activity, index) => {
              const isLast = index === homeActivities.length - 1;
              return (
                <View key={activity.id} style={!isLast && styles.activitySpacing}>
                  <RecentActivityCard
                    activity={activity}
                    onPress={() => handleSelectActivity(activity.id)}
                  />
                </View>
              );
            })}
          </View>
        </Card>
      </ScrollView>
      <FloatingActionButton style={styles.fab}>
        <MaterialIcons name="play-arrow" size={30} color="#ffffff" />
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
    paddingBottom: 120,
    paddingTop: 24,
  },
  pageTitle: {
    marginTop: 24,
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },
  activityStack: {
    marginTop: 12,
  },
  activitySpacing: {
    marginBottom: 16,
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 48,
  },
});

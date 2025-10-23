import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { ActivityCard } from '@/components/activity/activity-card';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { homeActivities } from '@/constants/mock-data';
import { HomeActivity } from '@/types/home';

export default function ActivitiesScreen() {
  const router = useRouter();

  const handleSelect = (activity: HomeActivity) => {
    router.push(`/activity/${activity.id}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerRow}>
        <Text style={styles.pageTitle}>My activities</Text>
        <MaterialIcons name="more-horiz" size={24} color="rgba(17,17,17,0.4)" />
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={homeActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ActivityCard activity={item} onPress={handleSelect} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={<View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />
      <FloatingActionButton style={styles.fab}>
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
  headerRow: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  separator: {
    height: 16,
  },
  fab: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 32,
  },
});

import { MaterialIcons } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { FloatingActionButton } from '@/components/ui/floating-action-button';
import { Card } from '@/components/ui/card';
import { accountActions, accountInfo } from '@/constants/mock-data';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

export default function AccountScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <Card elevated={false} style={styles.infoCard}>
          <View style={styles.headerRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarLabel}>{accountInfo.displayName.charAt(0)}</Text>
            </View>
            <View style={styles.profileColumn}>
              <Text style={styles.displayName}>{accountInfo.displayName}</Text>
              <Text style={styles.username}>{accountInfo.username}</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <MaterialIcons name="verified" size={20} color="#ffffff" style={styles.verifiedIcon} />
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <InfoGroup
            items={[
              { icon: 'event', label: 'Date of invitation', value: accountInfo.dateOfInvitation },
              { icon: 'device-hub', label: 'Chain', value: accountInfo.chain },
              { icon: 'payments', label: 'Total transacted', value: accountInfo.totalTransacted },
              { icon: 'star', label: 'General score', value: accountInfo.generalScore },
              { icon: 'location-on', label: 'Location', value: accountInfo.location },
            ]}
          />
          <InfoGroup
            items={[
              { icon: 'group', label: 'Number of friends', value: String(accountInfo.numberOfFriends) },
              { icon: 'flag', label: 'Goals achieved', value: String(accountInfo.goalsAchieved) },
              { icon: 'favorite', label: 'Favorite friend', value: accountInfo.favoriteFriend },
              { icon: 'whatshot', label: 'Streak', value: accountInfo.streak },
            ]}
          />
          <View style={styles.actionsColumn}>
            {accountActions.map((action, index) => {
              const isLast = index === accountActions.length - 1;
              return (
                <View
                  key={action.id}
                  style={[
                    styles.actionButton,
                    !isLast && styles.actionButtonSpacing,
                    action.variant === 'danger' ? styles.dangerAction : styles.primaryAction,
                  ]}
                >
                <MaterialIcons
                  name={action.icon as MaterialIconName}
                  size={18}
                  color={action.variant === 'danger' ? '#d92d20' : '#ffffff'}
                  style={styles.actionIcon}
                />
                <Text
                  style={[
                    styles.actionLabel,
                    action.variant === 'danger' ? styles.dangerLabel : styles.primaryLabel,
                  ]}
                >
                  {action.label}
                </Text>
                </View>
              );
            })}
          </View>
        </Card>
      </ScrollView>
      <FloatingActionButton style={styles.fab}>
        <MaterialIcons name="logout" size={24} color="#ffffff" />
      </FloatingActionButton>
    </SafeAreaView>
  );
}

interface InfoItem {
  icon: string;
  label: string;
  value: string;
}

interface InfoGroupProps {
  items: InfoItem[];
}

function InfoGroup({ items }: InfoGroupProps) {
  return (
    <View style={styles.infoGroup}>
      {items.map((item) => (
        <View key={item.label} style={styles.infoRow}>
          <View style={styles.infoIcon}>
            <MaterialIcons name={item.icon as MaterialIconName} size={20} color="#111111" />
          </View>
          <View style={styles.infoTextColumn}>
            <Text style={styles.infoLabel}>{item.label}</Text>
            <Text style={styles.infoValue}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
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
  infoCard: {
    borderRadius: 28,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(17,17,17,0.08)',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarLabel: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
  },
  profileColumn: {
    flex: 1,
    marginRight: 16,
  },
  displayName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111111',
  },
  username: {
    marginTop: 2,
    fontSize: 14,
    color: 'rgba(17,17,17,0.6)',
  },
  verifiedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111111',
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  verifiedIcon: {
    marginRight: 6,
  },
  verifiedText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#ffffff',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(17,17,17,0.08)',
    marginVertical: 20,
  },
  infoGroup: {
    paddingBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(17,17,17,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  infoTextColumn: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: 'rgba(17,17,17,0.6)',
  },
  infoValue: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '700',
    color: '#111111',
  },
  actionsColumn: {
    marginTop: 12,
  },
  actionButton: {
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    marginRight: 8,
  },
  actionButtonSpacing: {
    marginBottom: 12,
  },
  primaryAction: {
    backgroundColor: '#111111',
  },
  dangerAction: {
    backgroundColor: 'rgba(217,45,32,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(217,45,32,0.4)',
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryLabel: {
    color: '#ffffff',
  },
  dangerLabel: {
    color: '#d92d20',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 48,
  },
});

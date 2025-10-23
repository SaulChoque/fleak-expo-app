import { DaySelection, HomeActivity } from '@/types/home';
import { AccountAction, AccountInfo } from '@/types/account';

export interface FriendTimeZone {
  id: string;
  city: string;
  timeZone: string;
  differenceLabel: string;
}

export const friendTimeZones: FriendTimeZone[] = [
  {
    id: 'cdmx',
    city: 'Ciudad de México',
    timeZone: 'America/Mexico_City',
    differenceLabel: 'Local time',
  },
  {
    id: 'buenos-aires',
    city: 'Buenos Aires',
    timeZone: 'America/Argentina/Buenos_Aires',
    differenceLabel: '+1 hr',
  },
  {
    id: 'xela',
    city: 'Xela',
    timeZone: 'America/Guatemala',
    differenceLabel: '-1 hr',
  },
  {
    id: 'asuncion',
    city: 'Asunción',
    timeZone: 'America/Asuncion',
    differenceLabel: '+2 hr',
  },
];

const baseWeek: DaySelection[] = [
  { id: 'mon', label: 'M', isActive: true },
  { id: 'tue', label: 'T', isActive: true },
  { id: 'wed', label: 'W', isActive: true },
  { id: 'thu', label: 'T', isActive: true },
  { id: 'fri', label: 'F', isActive: true },
  { id: 'sat', label: 'S', isActive: false },
  { id: 'sun', label: 'S', isActive: false },
];

export const homeActivities: HomeActivity[] = [
  {
    id: 'activity-missed-alarm',
    title: 'Missed alarm',
    icon: 'alarm',
    summaryTimeLabel: '07:41',
    amountType: 'debit',
    amountValue: -2,
    amountUnit: 'USDC',
    repeatLabel: 'No repeat',
    isActive: true,
    days: baseWeek,
    typeLabel: 'Alarm',
    start: '2025-10-23T06:30:00',
    end: '2025-11-12T15:45:00',
    notificationsEnabled: true,
    testifiers: ['gerylatam', 'L', 'blanks'],
  },
  {
    id: 'activity-instagram',
    title: 'Instagram',
    icon: 'public',
    summaryTimeLabel: '3 hrs',
    amountType: 'neutral',
    amountValue: 0,
    amountUnit: 'USDC',
    repeatLabel: 'No repeat',
    isActive: false,
    days: [
      { id: 'mon', label: 'M', isActive: true },
      { id: 'tue', label: 'T', isActive: true },
      { id: 'wed', label: 'W', isActive: true },
      { id: 'thu', label: 'T', isActive: false },
      { id: 'fri', label: 'F', isActive: false },
      { id: 'sat', label: 'S', isActive: false },
      { id: 'sun', label: 'S', isActive: false },
    ],
    typeLabel: 'App',
    start: '2025-10-15T09:20:00',
    end: '2025-10-16T09:20:00',
    notificationsEnabled: false,
    testifiers: ['gerylatam'],
  },
  {
    id: 'activity-finish-test',
    title: 'Finish the test first',
    icon: 'task',
    summaryTimeLabel: '15:41',
    amountType: 'credit',
    amountValue: 5,
    amountUnit: 'USDC',
    repeatLabel: 'No repeat',
    isActive: true,
    days: [
      { id: 'mon', label: 'M', isActive: true },
      { id: 'tue', label: 'T', isActive: true },
      { id: 'wed', label: 'W', isActive: true },
      { id: 'thu', label: 'T', isActive: true },
      { id: 'fri', label: 'F', isActive: true },
      { id: 'sat', label: 'S', isActive: true },
      { id: 'sun', label: 'S', isActive: true },
    ],
    typeLabel: 'Reminder',
    start: '2025-09-08T08:00:00',
    end: '2025-09-08T15:41:00',
    notificationsEnabled: true,
    testifiers: ['gerylatam', 'L'],
  },
];

export const accountInfo: AccountInfo = {
  id: 'baluchop',
  displayName: 'Baluchop',
  username: '@baluchop',
  dateOfInvitation: '15/06',
  chain: 'Base sepolia',
  totalTransacted: '+6/-5 USDC',
  generalScore: '5/3',
  location: 'CDMX, 11:41',
  numberOfFriends: 15,
  goalsAchieved: 5,
  favoriteFriend: 'Noemiel',
  streak: '16 days',
};

export const accountActions: AccountAction[] = [
  { id: 'delete-account', label: 'Delete account', icon: 'delete', variant: 'danger' },
];

export interface ActivityMetric {
  id: string;
  icon: string;
  label: string;
  value: string;
}

export const detailMetricsByActivity: Record<string, ActivityMetric[]> = {
  'activity-missed-alarm': [
    { id: 'type', icon: 'notifications-active', label: 'Type', value: 'Alarm' },
    { id: 'start', icon: 'schedule', label: 'Start', value: '23/10, 6:30' },
    { id: 'end', icon: 'alarm-on', label: 'End', value: '12/11, 15:45' },
    { id: 'music', icon: 'library-music', label: 'Music', value: 'Favorites' },
    { id: 'vibration', icon: 'vibration', label: 'Vibration', value: '5 USDC' },
  ],
  'activity-instagram': [
    { id: 'type', icon: 'apps', label: 'Type', value: 'Timer' },
    { id: 'start', icon: 'schedule', label: 'Start', value: '23/10, 6:30' },
    { id: 'end', icon: 'hourglass-empty', label: 'End', value: '12/11, 15:45' },
    { id: 'app', icon: 'public', label: 'App', value: 'Facebook' },
    { id: 'max-time', icon: 'timelapse', label: 'Max time a day', value: '3h' },
  ],
  'activity-finish-test': [
    { id: 'type', icon: 'task', label: 'Type', value: 'Reminder' },
    { id: 'start', icon: 'schedule', label: 'Start', value: '23/10, 6:30' },
    { id: 'end', icon: 'calendar-today', label: 'End', value: '12/11, 15:45' },
    { id: 'notifications', icon: 'notifications', label: 'Notifications', value: 'Enabled' },
    { id: 'amount', icon: 'payments', label: 'Amount', value: '5 USDC' },
  ],
};

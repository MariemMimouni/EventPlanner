export interface DashboardData {
    reservationsPerMonth: { month: string, count: number }[];
    mostRequestedPack: { pack: string, count: number };
    mostRequestedVenues: { venue: string, count: number }[];
  }
  
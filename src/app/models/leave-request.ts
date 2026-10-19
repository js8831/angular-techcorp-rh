export type LeaveType = 'paid' | 'rtt' | 'sick' | 'unpaid';
export type LeaveStatus = 'pending' | 'manager-approved' | 'approved' | 'rejected';

export interface LeaveRequest {
  id: number;
  employeeId: number;
  type: LeaveType;
  startDate: string;
  endDate: string;
  reason?: string;
  status: LeaveStatus;
}

// Un obj classique avec des règles strictes sur les types de ses clés et de ses valeurs pour éviter les erreurs,
export const LEAVE_TYPE_LABELS: Record<LeaveType, string> = {
  paid: 'Congés payés',
  rtt: 'RTT',
  sick: 'Maladie',
  unpaid: 'Sans solde',
};

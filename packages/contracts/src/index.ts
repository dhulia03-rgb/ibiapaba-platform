export interface Organization {
  id: string;
  name: string;
}

export interface Order {
  id: string;
  organizationId: string;
  status: string;
}

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import {
  Users,
  Home,
  TrendingUp,
  Download,
  Settings,
  UserPlus,
  BarChart3,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Badge } from './ui/badge';

export function AdminDashboard() {
  const visitorData = [
    { name: 'Mon', visitors: 45 },
    { name: 'Tue', visitors: 52 },
    { name: 'Wed', visitors: 38 },
    { name: 'Thu', visitors: 61 },
    { name: 'Fri', visitors: 48 },
    { name: 'Sat', visitors: 72 },
    { name: 'Sun', visitors: 35 },
  ];

  const monthlyData = [
    { name: 'Jan', visitors: 1240 },
    { name: 'Feb', visitors: 1386 },
    { name: 'Mar', visitors: 1502 },
    { name: 'Apr', visitors: 1678 },
    { name: 'May', visitors: 1834 },
    { name: 'Jun', visitors: 1952 },
  ];

  const purposeData = [
    { name: 'Social Visit', value: 45, color: '#22c55e' },
    { name: 'Business', value: 25, color: '#fbbf24' },
    { name: 'Delivery', value: 20, color: '#3b82f6' },
    { name: 'Maintenance', value: 10, color: '#8b5cf6' },
  ];

  const houses = [
    {
      id: 1,
      address: 'Block A, House 1',
      resident: 'John Smith',
      visitors: 12,
      status: 'Active',
    },
    {
      id: 2,
      address: 'Block A, House 2',
      resident: 'Mary Johnson',
      visitors: 8,
      status: 'Active',
    },
    {
      id: 3,
      address: 'Block B, House 1',
      resident: 'David Brown',
      visitors: 15,
      status: 'Active',
    },
    {
      id: 4,
      address: 'Block B, House 2',
      resident: 'Sarah Wilson',
      visitors: 3,
      status: 'Inactive',
    },
  ];

  const users = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Host',
      house: 'Block A, House 1',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Mary Johnson',
      role: 'Host',
      house: 'Block A, House 2',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Security Team',
      role: 'Admin',
      house: 'N/A',
      status: 'Active',
    },
    {
      id: 4,
      name: 'David Brown',
      role: 'Host',
      house: 'Block B, House 1',
      status: 'Active',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Organization-wide insights and management
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Houses</p>
                <p className="text-3xl font-bold text-primary">127</p>
                <p className="text-sm text-green-600">+5 this month</p>
              </div>
              <Home className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-3xl font-bold text-accent">89</p>
                <p className="text-sm text-green-600">+12 this month</p>
              </div>
              <Users className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Monthly Visitors
                </p>
                <p className="text-3xl font-bold text-primary">1,952</p>
                <p className="text-sm text-green-600">+18% from last month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <p className="text-3xl font-bold text-accent">99.9%</p>
                <p className="text-sm text-green-600">Excellent</p>
              </div>
              <BarChart3 className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analytics" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="houses">Houses</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Visitor Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={visitorData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="visitors" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Visitor Purpose Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={purposeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${
                          percent !== undefined
                            ? (percent * 100).toFixed(0)
                            : 0
                        }%`
                      }
                    >
                      {purposeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="visitors"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="houses" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>House Management</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add House
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Address</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Monthly Visitors</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {houses.map((house) => (
                    <TableRow key={house.id}>
                      <TableCell className="font-medium">
                        {house.address}
                      </TableCell>
                      <TableCell>{house.resident}</TableCell>
                      <TableCell>{house.visitors}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            house.status === 'Active' ? 'default' : 'secondary'
                          }
                        >
                          {house.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>User Management</CardTitle>
                <Button className="bg-primary hover:bg-primary/90">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>House</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.role === 'Admin' ? 'default' : 'secondary'
                          }
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.house}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            user.status === 'Active' ? 'default' : 'secondary'
                          }
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

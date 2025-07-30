import { useState } from 'react';
import { Users, UserPlus, QrCode, Search, Filter, MoreHorizontal, Ban, Eye, Archive } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Switch } from './ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';

export function HostDashboard() {
  const [autoAccess, setAutoAccess] = useState(true);
  const [showPreAdmit, setShowPreAdmit] = useState(false);

  const visitors = [
    { id: 1, name: "John Doe", purpose: "Meeting", time: "10:30 AM", status: "Active", phone: "+234 901 234 5678" },
    { id: 2, name: "Jane Smith", purpose: "Delivery", time: "11:15 AM", status: "Exited", phone: "+234 802 345 6789" },
    { id: 3, name: "Mike Johnson", purpose: "Maintenance", time: "2:00 PM", status: "Active", phone: "+234 703 456 7890" },
    { id: 4, name: "Sarah Wilson", purpose: "Social Visit", time: "3:30 PM", status: "Blocked", phone: "+234 804 567 8901" }
  ];

  const preAdmits = [
    { id: 1, name: "David Brown", purpose: "Business", date: "Today", time: "4:00 PM", qrCode: "QR123456" },
    { id: 2, name: "Lisa Davis", purpose: "Social", date: "Tomorrow", time: "10:00 AM", qrCode: "QR789012" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-primary text-white';
      case 'Exited': return 'bg-muted text-muted-foreground';
      case 'Blocked': return 'bg-destructive text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Host Dashboard</h1>
        <p className="text-muted-foreground">Manage your visitors and pre-admits</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Visitors</p>
                <p className="text-2xl font-bold text-primary">24</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold text-accent">3</p>
              </div>
              <Eye className="w-8 h-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pre-Admits</p>
                <p className="text-2xl font-bold text-primary">2</p>
              </div>
              <QrCode className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Auto Access</p>
                <Switch checked={autoAccess} onCheckedChange={setAutoAccess} />
              </div>
              <div className="text-xs text-muted-foreground">{autoAccess ? 'Enabled' : 'Disabled'}</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="visitors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visitors">Visitor Records</TabsTrigger>
          <TabsTrigger value="pre-admits">Pre-Admits</TabsTrigger>
        </TabsList>

        <TabsContent value="visitors" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Visitor Records</CardTitle>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search visitors..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitors.map((visitor) => (
                    <TableRow key={visitor.id}>
                      <TableCell className="font-medium">{visitor.name}</TableCell>
                      <TableCell>{visitor.purpose}</TableCell>
                      <TableCell>{visitor.time}</TableCell>
                      <TableCell>{visitor.phone}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(visitor.status)}>
                          {visitor.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Ban className="w-4 h-4 mr-2" />
                              Block Visitor
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Archive className="w-4 h-4 mr-2" />
                              Archive
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pre-admits" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Pre-Admit Management</CardTitle>
                <Dialog open={showPreAdmit} onOpenChange={setShowPreAdmit}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90">
                      <UserPlus className="w-4 h-4 mr-2" />
                      New Pre-Admit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Pre-Admit</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="visitor-name">Visitor Name</Label>
                        <Input id="visitor-name" placeholder="Enter visitor name" />
                      </div>
                      <div>
                        <Label htmlFor="visitor-phone">Phone Number</Label>
                        <Input id="visitor-phone" placeholder="Enter phone number" />
                      </div>
                      <div>
                        <Label htmlFor="visit-purpose">Purpose of Visit</Label>
                        <Input id="visit-purpose" placeholder="Enter purpose" />
                      </div>
                      <div>
                        <Label htmlFor="visit-date">Visit Date</Label>
                        <Input id="visit-date" type="date" />
                      </div>
                      <div>
                        <Label htmlFor="visit-time">Visit Time</Label>
                        <Input id="visit-time" type="time" />
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Create & Generate QR Code
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>QR Code</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {preAdmits.map((preAdmit) => (
                    <TableRow key={preAdmit.id}>
                      <TableCell className="font-medium">{preAdmit.name}</TableCell>
                      <TableCell>{preAdmit.purpose}</TableCell>
                      <TableCell>{preAdmit.date}</TableCell>
                      <TableCell>{preAdmit.time}</TableCell>
                      <TableCell>
                        <code className="bg-muted px-2 py-1 rounded text-sm">{preAdmit.qrCode}</code>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>
                              <QrCode className="w-4 h-4 mr-2" />
                              View QR Code
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Ban className="w-4 h-4 mr-2" />
                              Revoke
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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
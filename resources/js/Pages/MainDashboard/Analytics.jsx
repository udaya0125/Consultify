import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
} from "recharts";
import {
    TrendingUp,
    TrendingDown,
    Users,
    BookOpen,
    GraduationCap,
    Eye,
    Calendar,
    Download,
    Filter,
    UserCheck,
    Globe,
} from "lucide-react";
import DashboardWrapper from "@/DashboardComponents/DashboardWrapper";

const Analytics = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("30d");

    // Sample data for educational consultancy
    const consultationData = [
        { month: "Jan", consultations: 120, applications: 85, admissions: 42 },
        { month: "Feb", consultations: 150, applications: 110, admissions: 65 },
        { month: "Mar", consultations: 180, applications: 125, admissions: 78 },
        { month: "Apr", consultations: 220, applications: 160, admissions: 95 },
        { month: "May", consultations: 190, applications: 140, admissions: 88 },
        {
            month: "Jun",
            consultations: 250,
            applications: 180,
            admissions: 115,
        },
        {
            month: "Jul",
            consultations: 280,
            applications: 210,
            admissions: 135,
        },
    ];

    const serviceData = [
        { name: "University Applications", value: 35, color: "#3B82F6" },
        { name: "Visa Guidance", value: 25, color: "#10B981" },
        { name: "Course Selection", value: 20, color: "#F59E0B" },
        { name: "Scholarship Assistance", value: 12, color: "#EF4444" },
        { name: "Test Preparation", value: 8, color: "#8B5CF6" },
    ];

    const revenueData = [
        { date: "1", value: 15000 },
        { date: "5", value: 18000 },
        { date: "10", value: 22000 },
        { date: "15", value: 28000 },
        { date: "20", value: 25000 },
        { date: "25", value: 32000 },
        { date: "30", value: 35000 },
    ];

    const MetricCard = ({ title, value, change, icon: Icon, trend }) => (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600 font-medium">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">
                        {value}
                    </p>
                    <div className="flex items-center mt-2">
                        {trend === "up" ? (
                            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                        )}
                        <span
                            className={`text-sm font-medium ${
                                trend === "up"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                            vs last month
                        </span>
                    </div>
                </div>
                <div
                    className={`p-3 rounded-full ${
                        trend === "up" ? "bg-green-50" : "bg-red-50"
                    }`}
                >
                    <Icon
                        className={`w-6 h-6 ${
                            trend === "up" ? "text-green-600" : "text-red-600"
                        }`}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <DashboardWrapper>
            <div className="py-6 w-full px-12 md:w-[82%] mt-20 md:mt-0 pt-24 ml-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Consultify Analytics
                        </h1>
                        <p className="text-gray-600 mt-2">
                            Track your educational consultancy performance and
                            student success metrics
                        </p>
                    </div>
                    <div className="flex items-center gap-3 mt-4 md:mt-0">
                        <select
                            value={selectedPeriod}
                            onChange={(e) => setSelectedPeriod(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                            <option value="1y">Last year</option>
                        </select>
                        <button className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <Download className="w-4 h-4" />
                            Export Report
                        </button>
                    </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <MetricCard
                        title="Total Students"
                        value="2,847"
                        change="+12.5%"
                        icon={Users}
                        trend="up"
                    />
                    <MetricCard
                        title="Successful Admissions"
                        value="1,234"
                        change="+18.2%"
                        icon={GraduationCap}
                        trend="up"
                    />
                    <MetricCard
                        title="Active Consultations"
                        value="456"
                        change="+8.1%"
                        icon={BookOpen}
                        trend="up"
                    />
                    <MetricCard
                        title="Monthly Revenue"
                        value="$35,241"
                        change="+15.3%"
                        icon={Globe}
                        trend="up"
                    />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Consultation Trends */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Student Consultation Trends
                            </h3>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                    Consultations
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    Applications
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                    Admissions
                                </div>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={consultationData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="consultations"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="applications"
                                    stroke="#10B981"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="admissions"
                                    stroke="#8B5CF6"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Service Distribution */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Service Distribution
                        </h3>
                        <div className="flex items-center justify-center">
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={serviceData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {serviceData.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={entry.color}
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-1 gap-3 mt-4">
                            {serviceData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center">
                                        <div
                                            className="w-3 h-3 rounded-full mr-3"
                                            style={{
                                                backgroundColor: item.color,
                                            }}
                                        ></div>
                                        <span className="text-sm text-gray-600">
                                            {item.name}
                                        </span>
                                    </div>
                                    <span className="text-sm font-medium">
                                        {item.value}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Revenue Trend */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Monthly Revenue Trend
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip
                                    formatter={(value) => [
                                        `$${value}`,
                                        "Revenue",
                                    ]}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#3B82F6"
                                    fill="#3B82F6"
                                    fillOpacity={0.1}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Top Universities */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Top Universities
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    university: "Harvard University",
                                    admits: 45,
                                    change: "+12%",
                                },
                                {
                                    university: "Stanford University",
                                    admits: 38,
                                    change: "+8%",
                                },
                                {
                                    university: "MIT",
                                    admits: 32,
                                    change: "+15%",
                                },
                                {
                                    university: "Oxford University",
                                    admits: 28,
                                    change: "+5%",
                                },
                                {
                                    university: "Cambridge University",
                                    admits: 25,
                                    change: "+18%",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">
                                            {item.university}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {item.admits} admissions
                                        </p>
                                    </div>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                                        {item.change}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Student Success Rate */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Success Rate by Program
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    program: "Engineering",
                                    rate: 85,
                                    applications: 120,
                                },
                                {
                                    program: "Business",
                                    rate: 78,
                                    applications: 95,
                                },
                                {
                                    program: "Medicine",
                                    rate: 92,
                                    applications: 45,
                                },
                                {
                                    program: "Computer Science",
                                    rate: 88,
                                    applications: 150,
                                },
                                {
                                    program: "Arts & Humanities",
                                    rate: 75,
                                    applications: 68,
                                },
                            ].map((item, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-900">
                                            {item.program}
                                        </span>
                                        <span className="text-sm text-gray-600">
                                            {item.rate}% ({item.applications}{" "}
                                            apps)
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${item.rate}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-6">
                            Recent Student Activities
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    action: "New student consultation booked",
                                    time: "2 minutes ago",
                                    student: "Sarah Johnson",
                                },
                                {
                                    action: "University application submitted",
                                    time: "15 minutes ago",
                                    student: "Mike Chen",
                                },
                                {
                                    action: "Admission letter received",
                                    time: "1 hour ago",
                                    student: "Emma Wilson",
                                },
                                {
                                    action: "Visa interview scheduled",
                                    time: "2 hours ago",
                                    student: "David Kumar",
                                },
                                {
                                    action: "Scholarship application approved",
                                    time: "3 hours ago",
                                    student: "Lisa Park",
                                },
                            ].map((activity, index) => (
                                <div
                                    key={index}
                                    className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0"
                                >
                                    <div className="flex items-start">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">
                                                {activity.action}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {activity.student}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                                        {activity.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    );
};

export default Analytics;

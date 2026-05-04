"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboardAccess = (role) => {
    if (role === "admin") {
        return "Full access to dashboard";
    }
    else if (role === "editor") {
        return "Limited access to dashboard";
    }
    else if (role === "viewer") {
        return "Read-only access to dashboard";
    }
    else {
        return "Invalid role";
    }
};
console.log(getDashboardAccess("admin")); // Output: Full access to dashboard
console.log(getDashboardAccess("editor")); // Output: Limited access to dashboard
console.log(getDashboardAccess("viewer")); // Output: Read-only access to dashboard
console.log(getDashboardAccess("invalid")); // Output: Invalid role
const adminEditor = {
    id: 1,
    name: "Mehadi",
    role: "admin" // This will cause an error because the role cannot be both "admin" and "editor"
};
//# sourceMappingURL=unionAndIntersection.js.map
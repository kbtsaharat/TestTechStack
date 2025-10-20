"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // โหลดข้อมูลทั้งหมด
  async function getUsers() {
    const res = await fetch("http://localhost:3000/users", { cache: "no-store" });
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  // ✅ CREATE
  async function createUser(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    getUsers(); // โหลดใหม่หลังบันทึก
  }

  // ✅ DELETE
  async function deleteUser(id: number) {
    await fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" });
    getUsers();
  }

  return (
    <main className="max-w-lg mx-auto py-10 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            User List
          </CardTitle>
        </CardHeader>

        <CardContent>
          {/* ✅ ฟอร์มเพิ่มผู้ใช้ */}
          <form onSubmit={createUser} className="space-y-3 mb-6">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              Add User
            </Button>
          </form>

          <Separator className="my-4" />

          {/* ✅ แสดงรายชื่อผู้ใช้ */}
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex justify-between items-center border rounded-md p-3"
              >
                <div>
                  <span className="font-semibold">{user.name}</span>
                  <span className="text-gray-500 ml-2">{user.email}</span>
                </div>
                <Button
                  variant="destructive"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}

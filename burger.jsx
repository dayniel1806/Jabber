import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaHamburger } from 'react-icons/fa';

const BurgerApp = () => {
  const [order, setOrder] = useState({ burger: '', quantity: 1 });
  const [orders, setOrders] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  const handleOrder = () => {
    if (order.burger.trim() && order.quantity > 0) {
      setOrders([...orders, { ...order, status: 'Pending' }]);
      setOrder({ burger: '', quantity: 1 });
    }
  };

  const handleAdminLogin = () => {
    if (password === 'admin123') setIsAdmin(true);
    else alert('Wrong password!');
  };

  const updateOrderStatus = (index, newStatus) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = newStatus;
    setOrders(updatedOrders);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2"><FaHamburger /> Burger Order App</h1>

      {!isAdmin ? (
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Place Your Order</h2>
          <Input
            placeholder="Burger Type"
            value={order.burger}
            onChange={(e) => setOrder({ ...order, burger: e.target.value })}
            className="mb-2"
          />
          <Input
            type="number"
            placeholder="Quantity"
            value={order.quantity}
            onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
            className="mb-2"
          />
          <Button onClick={handleOrder} className="bg-green-500 hover:bg-green-600">Order Now</Button>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Admin Login</h2>
            <Input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2"
            />
            <Button onClick={handleAdminLogin} className="bg-blue-500 hover:bg-blue-600">Login as Admin</Button>
          </div>
        </div>
      ) : (
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-2">Admin Dashboard</h2>
          {orders.length ? (
            orders.map((o, index) => (
              <CardContent key={index} className="p-2 border-b flex justify-between items-center">
                <div>🍔 {o.quantity}x {o.burger} - <span className={`font-bold ${o.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'}`}>{o.status}</span></div>
                {o.status === 'Pending' && (
                  <Button onClick={() => updateOrderStatus(index, 'Completed')} className="bg-green-500 hover:bg-green-600 text-sm">Complete</Button>
                )}
              </CardContent>
            ))
          ) : (
            <p>No orders yet.</p>
          )}
        </Card>
      )}
    </div>
  );
};

export default BurgerApp;

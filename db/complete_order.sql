UPDATE orders SET tracking_id = $1, completed = true WHERE order_number = $2;
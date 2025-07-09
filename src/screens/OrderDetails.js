import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderDetails = ({ route }) => {
    const { order } = route.params;
  return (
     <View style={styles.container}>
        <Text style={styles.title}>Order ID: {order.id}</Text>
        <Text>Customer: {order.customer}</Text>
        <Text>Status: {order.status}</Text>
        <Text>Total: ${order.total.toFixed(2)}</Text>

        {/* List items */}
        {order.items.map((item, index) => (
            <Text key={index}>
            {item.name} x{item.quantity} — ${item.price.toFixed(2)}
            </Text>
        ))}
    </View>
  )
}

export default OrderDetails

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
})
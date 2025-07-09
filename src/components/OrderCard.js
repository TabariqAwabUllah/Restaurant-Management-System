import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OrderCard = ({item, showActions}) => {
  return (
    <View style={styles.orderCard}>
        <View style={styles.orderHeader}>
            <Text style={styles.orderId}>{item.id}</Text>
            <View style={[styles.statusBadge, { backgroundColor: item.statusColor }]}>
                <Text style={styles.statusText}>{item.status}</Text>
            </View>
        </View>

        <Text style={styles.customerName}>{item.customer}</Text>

        <View style={styles.itemsList}>
            {item.items.map((orderItem)=>(
            <View style={styles.itemRow}>
                <Text style={styles.itemName}>
                {orderItem.name} x{orderItem.quantity}
                </Text>
                <Text style={styles.itemPrice}>${orderItem.price.toFixed(2)}</Text>
            </View>
            ))}

            <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total:</Text>
                <Text style={styles.totalAmount}>${item.total.toFixed(2)}</Text>
            </View>

        </View>
        {showActions && (
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.acceptButton}>
                <   Text style={styles.buttonText}>Accept Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.updateButton}>
                    <Text style={styles.updateButtonText}>Update Status</Text>
                </TouchableOpacity>
            </View>
        )}

        {!showActions && (
            <View style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
            </View>
        )}

    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
    orderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  customerName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  itemsList: {
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  updateButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A90E2',
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  updateButtonText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  viewDetailsButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A90E2',
    alignSelf: 'flex-start',
  },
  viewDetailsText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
  },
})
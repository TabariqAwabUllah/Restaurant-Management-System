import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import OrderCard from '../../../components/OrderCard';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';

const AdminHome = ({route}) => {
  const navigation = useNavigation()
  const {Name} = route.params
  // console.log("Name", Name);
  
  const currentOrders = [
    {
      id: 'ORD-7800',
      status: 'In Progress',
      statusColor: '#4A90E2',
      items: [
        { name: 'Classic Burger', quantity: 2, price: 15.50 },
        { name: 'Fries', quantity: 2, price: 8.00 },
        { name: 'Coca-Cola', quantity: 2, price: 4.00 },
      ],
      total: 28.00,
      customer: 'John Doe',
    },
    {
      id: 'ORD-7801',
      status: 'Pending',
      statusColor: '#FF6B6B',
      items: [
        { name: 'Pizza Margherita', quantity: 1, price: 18.00 },
        { name: 'Caesar Salad', quantity: 1, price: 12.00 },
      ],
      total: 30.00,
      customer: 'Jane Smith',
    },
    
    {
      id: 'ORD-7802',
      status: 'In Progress',
      statusColor: '#4A90E2',
      items: [
        { name: 'Steak', quantity: 1, price: 28.00 },
        { name: 'Fries', quantity: 1, price: 8.00 },
        { name: 'Glass of Wine', quantity: 1, price: 12.00 },
        { name: 'Chocolate Lava Cake', quantity: 1, price: 8.50 },
      ],
      total: 56.50,
      customer: 'Mike Johnson',
    },
    {
      id: 'ORD-7343',
      status: 'Pending',  
      statusColor: '#4A90E2',
      items: [
        { name: 'Steak', quantity: 1, price: 28.00 },
        { name: 'Fries', quantity: 1, price: 8.00 },
        { name: 'Glass of Wine', quantity: 1, price: 12.00 },
        { name: 'Chocolate Lava Cake', quantity: 1, price: 8.50 },
      ],
      total: 56.50,
      customer: 'Myke',
    },
  ];

  const previousOrders = [
    {
      id: 'ORD-7899',
      status: 'Completed',
      statusColor: '#4CAF50',
      items: [
        { name: 'Grilled Salmon', quantity: 1, price: 22.00 },
        { name: 'Steamed Vegetables', quantity: 1, price: 8.00 },
      ],
      total: 30.00,
      customer: 'Sarah Wilson',
    },
    {
      id: 'ORD-7888',
      status: 'Cancelled',
      statusColor: '#FF5722',
      items: [
        { name: 'Veggie Wrap', quantity: 2, price: 12.00 },
        { name: 'Smoothie', quantity: 1, price: 6.00 },
        { name: 'Potato Chips', quantity: 1, price: 3.00 },
      ],
      total: 30.00,
      customer: 'Tom Brown',
    },
      {
    id: 'ORD-74399',
    status: 'Completed',
    statusColor: '#4CAF50',
    items: [
      { name: 'Grilled Salmon', quantity: 1, price: 22.00 },
      { name: 'Steamed Vegetables', quantity: 1, price: 8.00 },
    ],
    total: 30.00,
    customer: 'Sarah Wilson',
  },
];

const orderDetails = () =>{
  navigation.navigate('OrderDetails', {order: currentOrders[0]});
}
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" /> */}
      
      {/* Header */}
      <Header headerName={'Admin Dashboard'} profileName={Name}/>
      
      <ScrollView style={styles.content}>

        {/* Current Orders Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Current Orders</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Current orders */}
          <FlatList
          data={currentOrders}
          keyExtractor={(item) => item.id}
          numColumns={2}
          refreshing={false}
          onRefresh={() => console.log('Refreshing...')}
          scrollEnabled={false}
          ListEmptyComponent={() => (
            <Text>Nothing found</Text>
          )}
          renderItem={({item, showActions = false})=>{
            return(
              <TouchableOpacity onPress={orderDetails}>
                <OrderCard item={item} showActions={showActions} />
              </TouchableOpacity>
              
            )
            
            
          }}
          />
          
        </View>
        
        {/* Previous Orders Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Previous Orders</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
          data={previousOrders}
          keyExtractor={(item) => item.id}
          horizontal={true}
          // numColumns={2}
          ListEmptyComponent={() => (
            <Text>Nothing found</Text>
          )}
          renderItem={({item, showActions = false})=>{
            return(
              <TouchableOpacity onPress={orderDetails}>
                <OrderCard item={item} showActions={showActions} />
              </TouchableOpacity>
            
            )
            
            
          }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
 
});

export default AdminHome;
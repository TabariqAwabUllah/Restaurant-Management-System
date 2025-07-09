import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({headerName, profileName}) => {
  return (
    <View style={styles.header}>
    <View style={styles.headerLeft}>
        <View style={styles.menuIcon}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        </View>
        <Text style={styles.headerTitle}>{headerName}</Text>
    </View>
    <View style={styles.headerRight}>
        <View style={styles.notificationIcon}>
        <Text style={styles.notificationText}>🔔</Text>
        </View>
        <View style={styles.profileIcon}>
            <Text style={styles.profileText}>{profileName}</Text>
        </View>
    </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuLine: {
    width: 20,
    height: 2,
    backgroundColor: '#333',
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationText: {
    fontSize: 18,
  },
  profileIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
})
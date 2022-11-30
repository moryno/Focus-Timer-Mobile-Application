import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { fontSize, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const renderItem = ({ item}) => {
  return <Text style={styles.historyStatus(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles.title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={renderItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                title="Clear"
                size={75}
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyStatus: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSize.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSize.lg,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from './components/ListItem';
const data = [
    { id: '1', desc: 'todo 1', completed: false},
    { id: '2', desc: 'todo 2', completed: false},
];
export default () => {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={data}
                keyExtractor={x=> String(x.id)}
                renderItem={({item}) => 
                <ListItem onPress={() => {}} desc={item.desc} />
            }
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch'
    }, 
});
  
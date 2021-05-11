import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './components/ListItem';

const App = ({ data, complete }) => {
    return (
        <View style={styles.container}>
            <FlatList 
                style={styles.list}
                data={data}
                keyExtractor={x=> String(x.id)}
                renderItem={({item}) => 
                <ListItem onPress={() => complete(item.id)} desc={item.desc} />
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
const mapStateToProps = state => {
    return {data: state.todos}
}

const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
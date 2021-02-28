import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    flex1: { flex: 1 },
    vhCenter: { justifyContent: 'center', alignItems: 'center' },
    heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    shadow: { shadowColor: '#aaa', shadowOffset: { width: 2, height: 5 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 5 },
    mb15: { marginBottom: 15 },
    // Todo styles
    todoWrapper: { padding: 20 },
    todoBox: {
        padding: 15, borderRadius: 8, backgroundColor: '#fff', width: '100%', marginBottom: 15,
        justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
        shadowColor: '#aaa', shadowOffset: { width: 2, height: 5 }, shadowOpacity: 0.25,
        shadowRadius: 8, elevation: 3
    },
    todoLeft: { flex: 0.7, flexDirection: 'row' },
    todoRight: { flex: 0.3, flexDirection: 'row', justifyContent: 'flex-end' },
    todoTitle: { fontWeight: 'bold', fontSize: 16 },
    todoTop: { height: Platform.OS === 'ios' ? height - 160 : height - 80 },
    todoBottom: {
        position: 'absolute', bottom: 0, left: 0, right: 0, width: width, backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#fff',
        flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'space-between'
    },
    todoInput: {
        borderRadius: 20, paddingHorizontal: 20, paddingVertical: 10, borderColor: '#ddd',
        borderWidth: 1, width: width - 80, height: 40, alignSelf: 'flex-start', backgroundColor: '#fff'
    },
    addTodoBtn: { width: 40, alignSelf: 'center' },

    // Animated FlatList
    faBox: {width: '100%', borderRadius: 8, backgroundColor: '#fff',marginBottom: 20,
        shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 7 }, shadowOpacity: 0.25,
        shadowRadius: 7, elevation: 7
    },
    faBoxTitle: {fontSize: 18, fontWeight: 'bold', color: '#000'}



})

export default styles
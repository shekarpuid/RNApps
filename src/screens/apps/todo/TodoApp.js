import React, { memo, useState, useEffect, useRef } from 'react'
import { FlatList, Animated, TextInput, TouchableOpacity, View } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Text from '../../../components/Text'
import styles from '../../../Styles'

const Todo = (props) => {
    const { item, editTodo, deleteTodo } = props
    const opacity = useRef(new Animated.Value(0)).current
    const zoom = useRef(new Animated.Value(0)).current
    const zoom2 = useRef(new Animated.Value(0)).current
    const animated = useRef(new Animated.Value(0)).current
    const ANIMATION_DURATION = 1000
    // Ref: https://github.com/spencercarli/animated-react-native-flatlist-demo/blob/master/App.js
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1, duration: 500, useNativeDriver: true
        }).start()
        // Icons zoom
        Animated.timing(zoom, {
            toValue: 1, duration: 500, useNativeDriver: true
        }).start()
        Animated.timing(zoom2, {
            toValue: 1, duration: 500, useNativeDriver: true
        }).start()
        // Animated.timing(animated, {
        //     toValue: 1,
        //     duration: ANIMATION_DURATION, useNativeDriver: true
        // }).start();
    }, [])

    const removeTodo = () => {
        Animated.sequence([
            Animated.timing(zoom2, {
                toValue: 0, duration: 500, useNativeDriver: true
            }),
            Animated.delay(200),
            Animated.timing(opacity, {
                toValue: 0, duration: 500, useNativeDriver: true
            })
        ]).start(() => {
            deleteTodo(item.id)
        })
    }

    const todoComplete = () => {
        Animated.timing(zoom, {
            toValue: 0, duration: 500, useNativeDriver: true
        }).start(() => {
            setComplete(true)
        })
    }
    return (
        <Animated.View style={[
            styles.todoBox,
            {
                opacity,
                transform: [
                    {
                        translateY: opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-20, 0]
                        })
                    }
                ]
            }
            // { opacity: animated ,height: 70,
            //     transform: [
            //         { scale: animated },
            //         {
            //             rotate: animated.interpolate({
            //                 inputRange: [0, 1],
            //                 outputRange: ['35deg', '0deg'],
            //                 extrapolate: 'clamp',
            //             })
            //         }
            //     ],
            // },
        ]}>
            <View style={styles.todoLeft}>
                <TouchableOpacity onPress={() => todoComplete()} disabled={complete}
                    style={{
                        borderColor: '#aaa', borderWidth: 1, borderRadius: 4,
                        backgroundColor: complete ? 'green' : 'white',
                        width: 20, height: 20, justifyContent: 'center', alignItems: 'center', marginRight: 10
                    }}>
                    {complete && <Ionicon name='ios-checkmark-outline' size={16} color={complete ? '#fff' : '#333'} style={{ left: 0.5 }} />}
                </TouchableOpacity>
                <Text style={[styles.todoTitle, { textDecorationLine: complete ? 'line-through' : 'none' }]}>{item.title}</Text>
            </View>

            <View style={styles.todoRight}>
                {!complete &&
                    <TouchableOpacity onPress={() => editTodo(item)}
                        style={{
                            opacity: zoom,
                            transform: [
                                {
                                    scale: zoom.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1]
                                    })
                                }
                            ]
                        }}
                    >
                        <EvilIcons name="pencil" size={25} color='#000' />
                    </TouchableOpacity>}
                <TouchableOpacity onPress={() => removeTodo()}
                    style={{
                        opacity: zoom2,
                        transform: [
                            {
                                scale: zoom2.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1]
                                })
                            }
                        ]
                    }}
                >
                    <EvilIcons name="trash" size={25} color='#000' />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}

// -------------------------> Todo app
const TodoApp = () => {
    const data = [
        { id: 1, title: 'Breakfast', complete: false },
        { id: 2, title: 'Lunch', complete: false },
    ]
    const [todoList, setTodoList] = useState(data)
    const [value, setValue] = useState('')
    const [count, setCount] = useState(2)
    const [editing, setEditing] = useState(false)
    const [todoItem, setTodoItem] = useState({})
    const opacity = useRef(new Animated.Value(0)).current

    const addTodo = () => {
        setCount(count + 1)
        let obj = { id: count + 1, title: value, complete: false }
        setTodoList([...todoList, obj])
        setValue('')
    }

    const editTodo = (item) => {
        setEditing(true)
        setTodoItem(item)
        setValue(item.title)
    }

    const updateTodo = () => {
        let updatedTodos = todoList.map(todo => {
            if (todo.id === todoItem.id) {
                todo.title = value
            }
            return todo
        })
        // console.log(JSON.stringify(filterTodo))
        setTodoList(updatedTodos)
        setEditing(false)
        setTodoItem({})
        setValue('')
    }

    const deleteTodo = (id) => {
        let filterTodos = todoList.filter(todo => todo.id !== id)
        setTodoList(filterTodos)
    }

    return (
        <>
            <View style={styles.todoWrapper}>
                <View style={styles.todoTop}>
                    <Text style={styles.heading}>Today's tasks</Text>
                    {todoList.length === 0 && <Text style={{ color: 'red' }}>You don't have todos right now!!</Text>}
                    <FlatList
                        data={todoList}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }, index) => {
                            return <Todo item={item} editTodo={editTodo}
                                deleteTodo={deleteTodo}
                            // opacity={opacity}
                            />
                        }}
                        showsVerticalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
            </View>
            <View style={styles.todoBottom}>
                <TextInput
                    onChangeText={text => setValue(text)}
                    value={value}
                    placeholder='add todo' placeholderTextColor='#aaa'
                    style={styles.todoInput}
                />
                {editing ?
                    <TouchableOpacity style={styles.addTodoBtn} onPress={() => updateTodo()}>
                        <EvilIcons name="like" size={30} color='#000' style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity> :
                    <TouchableOpacity style={styles.addTodoBtn} onPress={() => addTodo()}>
                        <EvilIcons name="plus" size={30} color='#000' style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>
                }
            </View>
        </>
    )
}

export default memo(TodoApp)
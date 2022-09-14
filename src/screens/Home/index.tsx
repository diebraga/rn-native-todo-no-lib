import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { homeStyles } from './styles'
import { TodoItem } from '../../components/TodoItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


type Todo = {
  id: number
  name: string
  isCompleted: boolean
}

const TODO_IN_ASYNC_STORAGE = "@todo:app:test"

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoName, setTodoName] = useState("")

  const handleRemoveTodo = async (id: number) => {
    const listWithDeletedItem = todos.filter(todo => todo.id !== id)
    await AsyncStorage.setItem(TODO_IN_ASYNC_STORAGE, JSON.stringify(listWithDeletedItem))
    return Alert.alert("Delete", `Are you you want to delete this item?`, [
      {
        text: "Yes", onPress: () => {
          alert(`Todo deleted.`)
          return setTodos(listWithDeletedItem)
        }
      },
      { text: "No", style: "cancel" }
    ])
  }

  const handleMarkAsCompleted = async (id: number) => {
    const arrayWithChangedTodo = todos.map(
      todo => todo.id === id
        ? { ...todo, isCompleted: todo.isCompleted ? false : true }
        : todo
    )
    setTodos(arrayWithChangedTodo)
    await AsyncStorage.setItem(TODO_IN_ASYNC_STORAGE, JSON.stringify(arrayWithChangedTodo))
  }

  const handleAddNewTodo = async () => {
    const newTodo: Todo = {
      id: (todos.length) + 1,
      name: todoName,
      isCompleted: false
    }
    if (!todos.some(todo => todo.name === todoName)) {
      setTodos(prev => [...prev, newTodo])
    } else {
      alert("Todo already exists")
    }
    setTodoName("")
    const todoList = [
      ...todos,
      newTodo
    ]
    await AsyncStorage.setItem(TODO_IN_ASYNC_STORAGE, JSON.stringify(todoList))
  }

  const loadUserStoredData = async () => {
    const storedData = await AsyncStorage.getItem(TODO_IN_ASYNC_STORAGE)
    if (storedData) {
      const todoData = JSON.parse(storedData) as Todo[]
      setTodos(todoData)
    }
  }

  const clearList = async () => {
    await AsyncStorage.setItem(TODO_IN_ASYNC_STORAGE, JSON.stringify([]))
    setTodos([])
    return alert("Your list has been cleared")
  }

  useEffect(() => {
    loadUserStoredData()
  }, [])


  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.layoutView}>
        <Text style={homeStyles.headingText}>Todo-List</Text>
        <View style={homeStyles.helperTiTleView}>
          <Text style={homeStyles.headingHelperText}>
            Active todos: {todos.length}
          </Text>
          <Button
            title='Clear'
            color="#E23C44"
            onPress={clearList}
          />
        </View>
        <View style={homeStyles.form}>
          <TextInput
            style={homeStyles.input}
            placeholder="Add new todo"
            placeholderTextColor="#6b6b6b6b"
            onChangeText={(text) => setTodoName(text)}
            value={todoName}
          />
          <TouchableOpacity
            style={homeStyles.button}
            onPress={handleAddNewTodo}
          >
            <Text style={homeStyles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: "70%" }}>
          <FlatList
            data={todos}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={() =>
              <Text style={homeStyles.emptyText}>You don't have any todo in your list.</Text>
            }
            renderItem={({ item }) => <TodoItem
              {...item}
              key={item.id}
              onRemove={() => handleRemoveTodo(item.id)}
              onComplete={() => handleMarkAsCompleted(item.id)}
            />
            }
          />
        </View>
      </View>
    </View>
  )
}
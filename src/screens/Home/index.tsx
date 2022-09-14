import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from './styles'
import { TodoItem } from '../../components/TodoItem';


type Todo = {
  id: number
  name: string
  isCompleted: boolean
}

export const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoName, setTodoName] = useState("")
  console.log(todos)
  const handleRemoveTodo = (id: number): void => {
    return Alert.alert("Delete", `Are you you want to delete this item?`, [
      {
        text: "Yes", onPress: () => {
          alert(`Todo deleted.`)
          return setTodos(todos.filter(todo => todo.id !== id))
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
  }

  const handleAddNewTodo = () => {
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
  }

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.layoutView}>
        <Text style={homeStyles.headingText}>Todo-List</Text>
        <Text style={homeStyles.headingHelperText}>
          Active todos: {todos.length}
        </Text>
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
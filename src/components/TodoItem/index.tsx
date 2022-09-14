import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { todoStyles } from './styles';

type TodoItemProps = {
  name: string;
  onRemove: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  name,
  onRemove,
  onComplete,
  isCompleted
}) => {
  const isCompleteState = () => {
    if (!isCompleted) return "none"
    else return "line-through"
  }
  return (
    <View style={todoStyles.container}>
      <TouchableOpacity style={todoStyles.textContainer} onPress={onComplete}>
        <Text style={{ color: "#fff", marginLeft: 16, textDecorationLine: isCompleteState() }}>{name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={todoStyles.button}
        onPress={onRemove}
      >
        <Text style={todoStyles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
}


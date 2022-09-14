import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { todoStyles } from './styles';

type TodoItemProps = {
  name: string;
  onRemove: () => void;
  onComplete: () => void;
  isCompleted: boolean;
}

type CompletedStateFn = {
  textDecorationLine: "none" | "line-through"
  textColor: string
}

export const TodoItem: React.FC<TodoItemProps> = ({
  name,
  onRemove,
  onComplete,
  isCompleted
}) => {
  const isCompleteState = (): CompletedStateFn => {
    if (!isCompleted) return {
      textDecorationLine: "none",
      textColor: "#fff"
    }
    else {
      return {
        textDecorationLine: "line-through",
        textColor: "#E23C44"
      }
    }
  }
  return (
    <View style={todoStyles.container}>
      <TouchableOpacity style={todoStyles.textContainer} onPress={onComplete}>
        <Text style={{ color: isCompleteState().textColor, marginLeft: 16, textDecorationLine: isCompleteState().textDecorationLine }}>{name}</Text>
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


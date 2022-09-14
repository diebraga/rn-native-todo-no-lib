import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { todoStyles } from './styles';

type TodoItemProps = {
  id: number;
  name: string;
  onRemove: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  id,
  name,
  onRemove
}) => {
  return (
    <View style={todoStyles.container}>
      <View style={todoStyles.textContainer}>
        <Text style={todoStyles.text}>{name}</Text>
      </View>
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

